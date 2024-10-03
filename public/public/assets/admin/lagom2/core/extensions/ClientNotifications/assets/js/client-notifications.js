/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./../";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/client-area/js/client-notifications.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/client-area/js/client-notifications.js":
/*!*******************************************************!*\
  !*** ./assets/client-area/js/client-notifications.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_jquery_exitintent_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins/jquery-exitintent.min.js */ "./assets/client-area/js/plugins/jquery-exitintent.min.js");
/* harmony import */ var _plugins_jquery_exitintent_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugins_jquery_exitintent_min_js__WEBPACK_IMPORTED_MODULE_0__);

$(document).ready(function () {
  //Notification Close Cookies
  $('.clientAlertModal').on('hide.bs.modal', function () {
    var isChecked = $(this).find('#checkClose').is(':checked');

    if (isChecked) {
      var days, date, expires, name;
      name = $(this).attr('id');
      days = $(this).data('close-days');

      if (days) {
        date = new Date();
        date.setDate(date.getDate() + days);
        expires = "expires=" + date.toUTCString();
      } else {
        expires = "";
      }

      document.cookie = "".concat(name, "=; ").concat(expires);
    }
  });
  $('.clientAlert').on('close.bs.alert', function () {
    var days, date, expires, name;
    name = $(this).attr('id');
    days = $(this).data('close-days');

    if (days) {
      date = new Date();
      date.setDate(date.getDate() + days);
      expires = "expires=" + date.toUTCString();
    } else {
      expires = "";
    }

    document.cookie = "".concat(name, "=; ").concat(expires);
  }); // Modal show first 

  var firstModalDelay = $('.clientAlertModalOnLoad').first().data('onload-delay');
  setTimeout(function () {
    $('.clientAlertModalOnLoad').first().modal('show');
  }, firstModalDelay); // Modal show next

  $('.clientAlertModalOnLoad').on('hidden.bs.modal', function () {
    var nextEl = $(this).next();

    while (!nextEl.hasClass('clientAlertModalOnLoad')) {
      nextEl = nextEl.next();

      if (!nextEl.hasClass('clientAlertModalOnLoad') && !nextEl.hasClass('clientAlertModalOnExit')) {
        break;
      }
    }

    ;
    var nextElDelay = nextEl.data('onload-delay');

    if (nextEl.length && nextEl.hasClass('clientAlertModalOnLoad')) {
      setTimeout(function () {
        nextEl.modal('show');
      }, nextElDelay);
    }
  });
  $('.clientAlertModalOnExit').on('hidden.bs.modal', function () {
    var nextEl = $(this).next();

    while (!nextEl.hasClass('clientAlertModalOnExit')) {
      nextEl = nextEl.next();

      if (!nextEl.hasClass('clientAlertModalOnLoad') && !nextEl.hasClass('clientAlertModalOnExit')) {
        break;
      }
    }

    ;

    if (nextEl.length && nextEl.hasClass('clientAlertModalOnExit')) {
      nextEl.modal('show');
    }
  });
});
$.exitIntent('enable');
$(document).bind('exitintent', function () {
  $('.clientAlertModalOnExit').first().modal('show');
});

/***/ }),

/***/ "./assets/client-area/js/plugins/jquery-exitintent.min.js":
/*!****************************************************************!*\
  !*** ./assets/client-area/js/plugins/jquery-exitintent.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (a) {
  function d(e) {
    0 < e.clientY || (b && clearTimeout(b), 0 >= a.exitIntent.settings.sensitivity ? a.event.trigger("exitintent") : b = setTimeout(function () {
      b = null;
      a.event.trigger("exitintent");
    }, a.exitIntent.settings.sensitivity));
  }

  function c() {
    b && (clearTimeout(b), b = null);
  }

  var b;

  a.exitIntent = function (b, f) {
    a.exitIntent.settings = a.extend(a.exitIntent.settings, f);
    if ("enable" == b) a(window).mouseleave(d), a(window).mouseenter(c);else if ("disable" == b) c(), a(window).unbind("mouseleave", d), a(window).unbind("mouseenter", c);else throw "Invalid parameter to jQuery.exitIntent -- should be 'enable'/'disable'";
  };

  a.exitIntent.settings = {
    sensitivity: 300
  };
})(jQuery);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NsaWVudC1hcmVhL2pzL2NsaWVudC1ub3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jbGllbnQtYXJlYS9qcy9wbHVnaW5zL2pxdWVyeS1leGl0aW50ZW50Lm1pbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uIiwiaXNDaGVja2VkIiwiZmluZCIsImlzIiwiZGF5cyIsImRhdGUiLCJleHBpcmVzIiwibmFtZSIsImF0dHIiLCJkYXRhIiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwidG9VVENTdHJpbmciLCJjb29raWUiLCJmaXJzdE1vZGFsRGVsYXkiLCJmaXJzdCIsInNldFRpbWVvdXQiLCJtb2RhbCIsIm5leHRFbCIsIm5leHQiLCJoYXNDbGFzcyIsIm5leHRFbERlbGF5IiwibGVuZ3RoIiwiZXhpdEludGVudCIsImJpbmQiLCJhIiwiZCIsImUiLCJjbGllbnRZIiwiYiIsImNsZWFyVGltZW91dCIsInNldHRpbmdzIiwic2Vuc2l0aXZpdHkiLCJldmVudCIsInRyaWdnZXIiLCJjIiwiZiIsImV4dGVuZCIsIndpbmRvdyIsIm1vdXNlbGVhdmUiLCJtb3VzZWVudGVyIiwidW5iaW5kIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBRUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVTtBQUN4QjtBQUNBRixHQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QkcsRUFBdkIsQ0FBMEIsZUFBMUIsRUFBMkMsWUFBVTtBQUNqRCxRQUFJQyxTQUFTLEdBQUdKLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUssSUFBUixDQUFhLGFBQWIsRUFBNEJDLEVBQTVCLENBQStCLFVBQS9CLENBQWhCOztBQUNBLFFBQUlGLFNBQUosRUFBZTtBQUNYLFVBQUlHLElBQUosRUFBVUMsSUFBVixFQUFnQkMsT0FBaEIsRUFBeUJDLElBQXpCO0FBQ0FBLFVBQUksR0FBR1YsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVyxJQUFSLENBQWEsSUFBYixDQUFQO0FBQ0FKLFVBQUksR0FBR1AsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRWSxJQUFSLENBQWEsWUFBYixDQUFQOztBQUNBLFVBQUlMLElBQUosRUFBVTtBQUNOQyxZQUFJLEdBQUcsSUFBSUssSUFBSixFQUFQO0FBQ0FMLFlBQUksQ0FBQ00sT0FBTCxDQUFhTixJQUFJLENBQUNPLE9BQUwsS0FBZVIsSUFBNUI7QUFDQUUsZUFBTyxHQUFHLGFBQVdELElBQUksQ0FBQ1EsV0FBTCxFQUFyQjtBQUNILE9BSkQsTUFJSztBQUNEUCxlQUFPLEdBQUcsRUFBVjtBQUNIOztBQUNEUixjQUFRLENBQUNnQixNQUFULGFBQXFCUCxJQUFyQixnQkFBK0JELE9BQS9CO0FBQ0g7QUFDSixHQWZEO0FBaUJBVCxHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCRyxFQUFsQixDQUFxQixnQkFBckIsRUFBdUMsWUFBVTtBQUM3QyxRQUFJSSxJQUFKLEVBQVVDLElBQVYsRUFBZ0JDLE9BQWhCLEVBQXlCQyxJQUF6QjtBQUNBQSxRQUFJLEdBQUdWLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVcsSUFBUixDQUFhLElBQWIsQ0FBUDtBQUNBSixRQUFJLEdBQUdQLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVksSUFBUixDQUFhLFlBQWIsQ0FBUDs7QUFDQSxRQUFJTCxJQUFKLEVBQVU7QUFDTkMsVUFBSSxHQUFHLElBQUlLLElBQUosRUFBUDtBQUNBTCxVQUFJLENBQUNNLE9BQUwsQ0FBYU4sSUFBSSxDQUFDTyxPQUFMLEtBQWVSLElBQTVCO0FBQ0FFLGFBQU8sR0FBRyxhQUFXRCxJQUFJLENBQUNRLFdBQUwsRUFBckI7QUFDSCxLQUpELE1BSUs7QUFDRFAsYUFBTyxHQUFHLEVBQVY7QUFDSDs7QUFDRFIsWUFBUSxDQUFDZ0IsTUFBVCxhQUFxQlAsSUFBckIsZ0JBQStCRCxPQUEvQjtBQUNILEdBWkQsRUFuQndCLENBaUN4Qjs7QUFDQSxNQUFJUyxlQUFlLEdBQUdsQixDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2Qm1CLEtBQTdCLEdBQXFDUCxJQUFyQyxDQUEwQyxjQUExQyxDQUF0QjtBQUNBUSxZQUFVLENBQUMsWUFBVTtBQUNqQnBCLEtBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCbUIsS0FBN0IsR0FBcUNFLEtBQXJDLENBQTJDLE1BQTNDO0FBQ0gsR0FGUyxFQUVQSCxlQUZPLENBQVYsQ0FuQ3dCLENBdUN4Qjs7QUFDQWxCLEdBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCRyxFQUE3QixDQUFnQyxpQkFBaEMsRUFBbUQsWUFBVTtBQUN6RCxRQUFJbUIsTUFBTSxHQUFHdEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdUIsSUFBUixFQUFiOztBQUNBLFdBQU0sQ0FBQ0QsTUFBTSxDQUFDRSxRQUFQLENBQWdCLHdCQUFoQixDQUFQLEVBQWlEO0FBQzdDRixZQUFNLEdBQUdBLE1BQU0sQ0FBQ0MsSUFBUCxFQUFUOztBQUNBLFVBQUcsQ0FBQ0QsTUFBTSxDQUFDRSxRQUFQLENBQWdCLHdCQUFoQixDQUFELElBQThDLENBQUNGLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQix3QkFBaEIsQ0FBbEQsRUFBNEY7QUFDeEY7QUFDSDtBQUNKOztBQUFBO0FBRUQsUUFBSUMsV0FBVyxHQUFHSCxNQUFNLENBQUNWLElBQVAsQ0FBWSxjQUFaLENBQWxCOztBQUNBLFFBQUlVLE1BQU0sQ0FBQ0ksTUFBUCxJQUFpQkosTUFBTSxDQUFDRSxRQUFQLENBQWdCLHdCQUFoQixDQUFyQixFQUErRDtBQUMzREosZ0JBQVUsQ0FBQyxZQUFVO0FBQ2pCRSxjQUFNLENBQUNELEtBQVAsQ0FBYSxNQUFiO0FBQ0gsT0FGUyxFQUVQSSxXQUZPLENBQVY7QUFHSDtBQUNKLEdBZkQ7QUFpQkF6QixHQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkcsRUFBN0IsQ0FBZ0MsaUJBQWhDLEVBQW1ELFlBQVU7QUFDekQsUUFBSW1CLE1BQU0sR0FBR3RCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVCLElBQVIsRUFBYjs7QUFFQSxXQUFNLENBQUNELE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQix3QkFBaEIsQ0FBUCxFQUFpRDtBQUM3Q0YsWUFBTSxHQUFHQSxNQUFNLENBQUNDLElBQVAsRUFBVDs7QUFDQSxVQUFHLENBQUNELE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQix3QkFBaEIsQ0FBRCxJQUE4QyxDQUFDRixNQUFNLENBQUNFLFFBQVAsQ0FBZ0Isd0JBQWhCLENBQWxELEVBQTRGO0FBQ3hGO0FBQ0g7QUFDSjs7QUFBQTs7QUFFRCxRQUFJRixNQUFNLENBQUNJLE1BQVAsSUFBaUJKLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQix3QkFBaEIsQ0FBckIsRUFBK0Q7QUFDM0RGLFlBQU0sQ0FBQ0QsS0FBUCxDQUFhLE1BQWI7QUFDSDtBQUNKLEdBYkQ7QUFlSCxDQXhFRDtBQTBFQXJCLENBQUMsQ0FBQzJCLFVBQUYsQ0FBYSxRQUFiO0FBQ0EzQixDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZMkIsSUFBWixDQUFpQixZQUFqQixFQUErQixZQUFXO0FBQ3RDNUIsR0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJtQixLQUE3QixHQUFxQ0UsS0FBckMsQ0FBMkMsTUFBM0M7QUFDSCxDQUZELEU7Ozs7Ozs7Ozs7O0FDN0VBLENBQUMsVUFBU1EsQ0FBVCxFQUFXO0FBQUMsV0FBU0MsQ0FBVCxDQUFXQyxDQUFYLEVBQWE7QUFBQyxRQUFFQSxDQUFDLENBQUNDLE9BQUosS0FBY0MsQ0FBQyxJQUFFQyxZQUFZLENBQUNELENBQUQsQ0FBZixFQUFtQixLQUFHSixDQUFDLENBQUNGLFVBQUYsQ0FBYVEsUUFBYixDQUFzQkMsV0FBekIsR0FBcUNQLENBQUMsQ0FBQ1EsS0FBRixDQUFRQyxPQUFSLENBQWdCLFlBQWhCLENBQXJDLEdBQW1FTCxDQUFDLEdBQUNiLFVBQVUsQ0FBQyxZQUFVO0FBQUNhLE9BQUMsR0FBQyxJQUFGO0FBQU9KLE9BQUMsQ0FBQ1EsS0FBRixDQUFRQyxPQUFSLENBQWdCLFlBQWhCO0FBQThCLEtBQWpELEVBQWtEVCxDQUFDLENBQUNGLFVBQUYsQ0FBYVEsUUFBYixDQUFzQkMsV0FBeEUsQ0FBaEg7QUFBc007O0FBQUEsV0FBU0csQ0FBVCxHQUFZO0FBQUNOLEtBQUMsS0FBR0MsWUFBWSxDQUFDRCxDQUFELENBQVosRUFBZ0JBLENBQUMsR0FBQyxJQUFyQixDQUFEO0FBQTRCOztBQUFBLE1BQUlBLENBQUo7O0FBQU1KLEdBQUMsQ0FBQ0YsVUFBRixHQUFhLFVBQVNNLENBQVQsRUFBV08sQ0FBWCxFQUFhO0FBQUNYLEtBQUMsQ0FBQ0YsVUFBRixDQUFhUSxRQUFiLEdBQXNCTixDQUFDLENBQUNZLE1BQUYsQ0FBU1osQ0FBQyxDQUFDRixVQUFGLENBQWFRLFFBQXRCLEVBQStCSyxDQUEvQixDQUF0QjtBQUF3RCxRQUFHLFlBQVVQLENBQWIsRUFBZUosQ0FBQyxDQUFDYSxNQUFELENBQUQsQ0FBVUMsVUFBVixDQUFxQmIsQ0FBckIsR0FBd0JELENBQUMsQ0FBQ2EsTUFBRCxDQUFELENBQVVFLFVBQVYsQ0FBcUJMLENBQXJCLENBQXhCLENBQWYsS0FBb0UsSUFBRyxhQUFXTixDQUFkLEVBQWdCTSxDQUFDLElBQUdWLENBQUMsQ0FBQ2EsTUFBRCxDQUFELENBQVVHLE1BQVYsQ0FBaUIsWUFBakIsRUFBOEJmLENBQTlCLENBQUgsRUFBb0NELENBQUMsQ0FBQ2EsTUFBRCxDQUFELENBQVVHLE1BQVYsQ0FBaUIsWUFBakIsRUFDNWROLENBRDRkLENBQXJDLENBQWhCLEtBQy9aLE1BQUssd0VBQUw7QUFBK0UsR0FEeUw7O0FBQ3hMVixHQUFDLENBQUNGLFVBQUYsQ0FBYVEsUUFBYixHQUFzQjtBQUFDQyxlQUFXLEVBQUM7QUFBYixHQUF0QjtBQUF3QyxDQURoSSxFQUNrSVUsTUFEbEksRSIsImZpbGUiOiJ0ZW1wbGF0ZXMvbGFnb20yL2NvcmUvZXh0ZW5zaW9ucy9DbGllbnROb3RpZmljYXRpb25zL2Fzc2V0cy9qcy9jbGllbnQtbm90aWZpY2F0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi8uLi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvY2xpZW50LWFyZWEvanMvY2xpZW50LW5vdGlmaWNhdGlvbnMuanNcIik7XG4iLCJpbXBvcnQgXCIuL3BsdWdpbnMvanF1ZXJ5LWV4aXRpbnRlbnQubWluLmpzXCJcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAvL05vdGlmaWNhdGlvbiBDbG9zZSBDb29raWVzXHJcbiAgICAkKCcuY2xpZW50QWxlcnRNb2RhbCcpLm9uKCdoaWRlLmJzLm1vZGFsJywgZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgaXNDaGVja2VkID0gJCh0aGlzKS5maW5kKCcjY2hlY2tDbG9zZScpLmlzKCc6Y2hlY2tlZCcpO1xyXG4gICAgICAgIGlmKCBpc0NoZWNrZWQgKXtcclxuICAgICAgICAgICAgdmFyIGRheXMsIGRhdGUsIGV4cGlyZXMsIG5hbWU7XHJcbiAgICAgICAgICAgIG5hbWUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgIGRheXMgPSAkKHRoaXMpLmRhdGEoJ2Nsb3NlLWRheXMnKTtcclxuICAgICAgICAgICAgaWYoIGRheXMgKXtcclxuICAgICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpK2RheXMpO1xyXG4gICAgICAgICAgICAgICAgZXhwaXJlcyA9IFwiZXhwaXJlcz1cIitkYXRlLnRvVVRDU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZXhwaXJlcyA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09OyAke2V4cGlyZXN9YDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuY2xpZW50QWxlcnQnKS5vbignY2xvc2UuYnMuYWxlcnQnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBkYXlzLCBkYXRlLCBleHBpcmVzLCBuYW1lO1xyXG4gICAgICAgIG5hbWUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgZGF5cyA9ICQodGhpcykuZGF0YSgnY2xvc2UtZGF5cycpO1xyXG4gICAgICAgIGlmKCBkYXlzICl7XHJcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkrZGF5cyk7XHJcbiAgICAgICAgICAgIGV4cGlyZXMgPSBcImV4cGlyZXM9XCIrZGF0ZS50b1VUQ1N0cmluZygpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBleHBpcmVzID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09OyAke2V4cGlyZXN9YDtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE1vZGFsIHNob3cgZmlyc3QgXHJcbiAgICB2YXIgZmlyc3RNb2RhbERlbGF5ID0gJCgnLmNsaWVudEFsZXJ0TW9kYWxPbkxvYWQnKS5maXJzdCgpLmRhdGEoJ29ubG9hZC1kZWxheScpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5jbGllbnRBbGVydE1vZGFsT25Mb2FkJykuZmlyc3QoKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgfSwgZmlyc3RNb2RhbERlbGF5KTtcclxuXHJcbiAgICAvLyBNb2RhbCBzaG93IG5leHRcclxuICAgICQoJy5jbGllbnRBbGVydE1vZGFsT25Mb2FkJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgIHZhciBuZXh0RWwgPSAkKHRoaXMpLm5leHQoKTtcclxuICAgICAgICB3aGlsZSghbmV4dEVsLmhhc0NsYXNzKCdjbGllbnRBbGVydE1vZGFsT25Mb2FkJykpe1xyXG4gICAgICAgICAgICBuZXh0RWwgPSBuZXh0RWwubmV4dCgpO1xyXG4gICAgICAgICAgICBpZighbmV4dEVsLmhhc0NsYXNzKCdjbGllbnRBbGVydE1vZGFsT25Mb2FkJykgJiYgIW5leHRFbC5oYXNDbGFzcygnY2xpZW50QWxlcnRNb2RhbE9uRXhpdCcpKXtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIG5leHRFbERlbGF5ID0gbmV4dEVsLmRhdGEoJ29ubG9hZC1kZWxheScpO1xyXG4gICAgICAgIGlmIChuZXh0RWwubGVuZ3RoICYmIG5leHRFbC5oYXNDbGFzcygnY2xpZW50QWxlcnRNb2RhbE9uTG9hZCcpKXtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgbmV4dEVsLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIH0sIG5leHRFbERlbGF5KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuY2xpZW50QWxlcnRNb2RhbE9uRXhpdCcpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBuZXh0RWwgPSAkKHRoaXMpLm5leHQoKTtcclxuXHJcbiAgICAgICAgd2hpbGUoIW5leHRFbC5oYXNDbGFzcygnY2xpZW50QWxlcnRNb2RhbE9uRXhpdCcpKXtcclxuICAgICAgICAgICAgbmV4dEVsID0gbmV4dEVsLm5leHQoKTtcclxuICAgICAgICAgICAgaWYoIW5leHRFbC5oYXNDbGFzcygnY2xpZW50QWxlcnRNb2RhbE9uTG9hZCcpICYmICFuZXh0RWwuaGFzQ2xhc3MoJ2NsaWVudEFsZXJ0TW9kYWxPbkV4aXQnKSl7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChuZXh0RWwubGVuZ3RoICYmIG5leHRFbC5oYXNDbGFzcygnY2xpZW50QWxlcnRNb2RhbE9uRXhpdCcpKXtcclxuICAgICAgICAgICAgbmV4dEVsLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbiQuZXhpdEludGVudCgnZW5hYmxlJyk7XHJcbiQoZG9jdW1lbnQpLmJpbmQoJ2V4aXRpbnRlbnQnLCBmdW5jdGlvbigpIHtcclxuICAgICQoJy5jbGllbnRBbGVydE1vZGFsT25FeGl0JykuZmlyc3QoKS5tb2RhbCgnc2hvdycpO1xyXG59KTsiLCIoZnVuY3Rpb24oYSl7ZnVuY3Rpb24gZChlKXswPGUuY2xpZW50WXx8KGImJmNsZWFyVGltZW91dChiKSwwPj1hLmV4aXRJbnRlbnQuc2V0dGluZ3Muc2Vuc2l0aXZpdHk/YS5ldmVudC50cmlnZ2VyKFwiZXhpdGludGVudFwiKTpiPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtiPW51bGw7YS5ldmVudC50cmlnZ2VyKFwiZXhpdGludGVudFwiKX0sYS5leGl0SW50ZW50LnNldHRpbmdzLnNlbnNpdGl2aXR5KSl9ZnVuY3Rpb24gYygpe2ImJihjbGVhclRpbWVvdXQoYiksYj1udWxsKX12YXIgYjthLmV4aXRJbnRlbnQ9ZnVuY3Rpb24oYixmKXthLmV4aXRJbnRlbnQuc2V0dGluZ3M9YS5leHRlbmQoYS5leGl0SW50ZW50LnNldHRpbmdzLGYpO2lmKFwiZW5hYmxlXCI9PWIpYSh3aW5kb3cpLm1vdXNlbGVhdmUoZCksYSh3aW5kb3cpLm1vdXNlZW50ZXIoYyk7ZWxzZSBpZihcImRpc2FibGVcIj09YiljKCksYSh3aW5kb3cpLnVuYmluZChcIm1vdXNlbGVhdmVcIixkKSxhKHdpbmRvdykudW5iaW5kKFwibW91c2VlbnRlclwiLFxyXG5jKTtlbHNlIHRocm93XCJJbnZhbGlkIHBhcmFtZXRlciB0byBqUXVlcnkuZXhpdEludGVudCAtLSBzaG91bGQgYmUgJ2VuYWJsZScvJ2Rpc2FibGUnXCI7fTthLmV4aXRJbnRlbnQuc2V0dGluZ3M9e3NlbnNpdGl2aXR5OjMwMH19KShqUXVlcnkpOyJdLCJzb3VyY2VSb290IjoiIn0=