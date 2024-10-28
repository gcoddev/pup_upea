if (typeof (buildFilterRegex) !== "function") {
    function buildFilterRegex(filterValue) {
        if (filterValue.indexOf('&') === -1) {
            return '[~>]\\s*' + jQuery.fn.dataTable.util.escapeRegex(filterValue) + '\\s*[<~]';
        } else {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = filterValue;
            return '\\s*' + jQuery.fn.dataTable.util.escapeRegex(tempDiv.innerText) + '\\s*';
        }
    }
}
jQuery(document).ready(function () {
    jQuery(".view-filter-btns .dropdown-menu a").click(function (e) {
        var filterValue = jQuery(this).find("span").data('value');
        var filterText = jQuery(this).find("span").html().trim();
        var filterStatusClass = jQuery(this).find("span").data('status-class');
        var filterStatusColor = jQuery(this).data('status-color');
        var dataTable = jQuery('#tableInvoicesList').DataTable();
        var filterValueRegex;

        $(this).closest('.dropdown-menu').find('.active').removeClass('active');
        $(this).parent().addClass('active');
        $(this).closest('.view-filter-btns').find('.dropdown-toggle span:not(.status)').text(filterText);
        if (filterValue == "all") {
            dataTable.column(4).search('').draw();
            $(this).closest('.view-filter-btns').find('.dropdown-toggle span.status').addClass('hidden');
        } else {
            if (filterStatusColor != undefined) {
                $(this).closest('.view-filter-btns').find('.dropdown-toggle span.status').attr('style', '--status-color:' + filterStatusColor).removeClass('hidden');
            } else {
                $(this).closest('.view-filter-btns').find('.dropdown-toggle span.status').addClass('status-' + filterStatusClass).removeClass('hidden');
            }

            if (filterValue != undefined) {
                filterValueRegex = buildFilterRegex(filterValue);
            } else {
                filterValueRegex = buildFilterRegex(filterText);
            }

            dataTable.column(4)
                .search(filterValueRegex, true, false, false)
                .draw();
        }
        // Prevent jumping to the top of the page
        // when no matching tag is found.
        e.preventDefault();

    });

});

function checkAll() {
    let checkAll = $('#selectAll');
    let checkboxes = $('.domids').not(':disabled');
    checkAll.on('ifChecked ifUnchecked', function (e) {
        if (e.type == 'ifChecked') {
            checkboxes.iCheck('check');
        } else {
            checkboxes.iCheck('uncheck');
        }
    });
    checkboxes.on('ifChanged', function (e) {
        if (checkboxes.filter(':checked').length > 0) {
            $('#domainSelectedCounter').addClass('badge-primary');
            $('.bottom-action-sticky').removeClass('hidden');
        }
        else {
            $('#domainSelectedCounter').removeClass('badge-primary');
            $('.bottom-action-sticky').addClass('hidden');
        }
        $('#domainSelectedCounter').text(checkboxes.filter(':checked').length);
        if (checkboxes.filter(':checked').length == checkboxes.length) {
            checkAll.prop('checked', 'checked');
        } else {
            checkAll.removeProp('checked');
        }
        checkAll.iCheck('update');
    });
};

var alreadyReady = false; // The ready function is being called twice on page load.

var saveState = true;

jQuery(document).ready(function () {

    var table = jQuery("#tableInvoicesList").DataTable({
        "dom": '<"listtable"fit>pl', "info": false, "responsive": true,
        "oLanguage": {
            "sEmptyTable": "Sin Resultados",
            "sInfo": "Viendo _START_ a _END_ de _TOTAL_ entradas",
            "sInfoEmpty": "Viendo 0 a 0 de 0 entradas",
            "sInfoFiltered": "(filtered from _MAX_ total entries)",
            "sInfoPostFix": "",
            "sInfoThousands": ",",
            "sLengthMenu": "Ver _MENU_ Entradas",
            "sLoadingRecords": "Cargando...",
            "sProcessing": "Procesando...",
            "sSearch": "",
            "sZeroRecords": "Sin Resultados",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Anterior",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            }
        },
        "pageLength": 10,
        "order": [
            [0, "asc"]
        ],
        "lengthMenu": [
            [10, 25, 50, -1],
            [10, 25, 50, "Todo"]
        ],
        "aoColumnDefs": [
            {
                "bSortable": false,
                "aTargets": []
            },
            {
                "sType": "string",
                "aTargets": [4]
            }
        ],
        "stateSave": saveState,
        "autoWidth": false,
    });

    // highlight remembered filter on page re-load
    var rememberedFilterTerm = table.state().columns[4].search.search;

    if (rememberedFilterTerm && !alreadyReady) {
        // This should only run on the first "ready" event.
        jQuery(".view-filter-btns a span").each(function (index) {
            if (buildFilterRegex(jQuery(this).text().trim()) == rememberedFilterTerm) {
                var filterValue = jQuery(this).data('value');
                var filterStatusClass = jQuery(this).data('status-class');
                var filterStatusColor = jQuery(this).parent().data('status-color');

                $(this).closest('li').addClass('active');
                $(this).closest('.view-filter-btns').find('.dropdown-toggle span:not(.status)').text(jQuery(this).text());
                if (filterStatusColor != undefined) {
                    $(this).closest('.view-filter-btns').find('.dropdown-toggle span.status').attr('style', '--status-color:' + filterStatusColor).removeClass('hidden');
                }
                else {
                    $(this).closest('.view-filter-btns').find('.dropdown-toggle span.status').addClass('status-' + filterStatusClass).removeClass('hidden');
                }
            }
        });
    }
    alreadyReady = true;
    if ($('#table-search').length > 0 && $('.dataTables_filter').length > 0) {
        var searchTableVal = $('.dataTables_filter input').val();
        $('#table-search').val(searchTableVal);
        var searchVal = $('#table-search').val();
        table.search(searchVal, true).draw();
    }

    $('#table-search').on('keyup', function () {
        table.search(this.value, true).draw();
    });
    table.on('draw.dt', function () {
        $('body').find('input:not(.icheck-input):not(.switch__checkbox)').iCheck({
            checkboxClass: 'checkbox-styled',
            radioClass: 'radio-styled',
            increaseArea: '40%'
        });
        checkAll();

    });

    $('[data-inactive-services-checkbox]').on('change', function () {
        if ($(this)[0].checked === true) {
            table.column(0).search("lagomshowservice", true, false, false).draw();
        }
        else {
            table.column(0).search("", true, false, false).draw();
        }
    });

});

jQuery(document).ready(function () {
    var table = jQuery('#tableInvoicesList').removeClass('hidden').DataTable();
    table.order([4, 'desc'], [2, 'asc']);
    table.draw();
    jQuery('.table-container').removeClass('loading');
    jQuery('#tableLoading').addClass('hidden');
});