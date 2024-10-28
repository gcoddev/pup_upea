export default defineNuxtPlugin((nuxtApp) => {
    // Función para cambiar los temas
    const toggleTheme = (theme) => {
        const links = document.querySelectorAll('link[rel="stylesheet"]');

        if (theme === 'futuristic') {
            links[0].href = '/assets/admin/lagom2/core/styles/futuristic/assets/css/vars/minified.css';
            links[1].href = '/assets/admin/lagom2/core/styles/futuristic/assets/css/vars/colors/default.css';
        } else {
            links[0].href = '/assets/admin/lagom2/core/styles/modern/assets/css/vars/minified.css';
            links[1].href = '/assets/admin/lagom2/core/styles/modern/assets/css/vars/colors/default.css';
        }

        localStorage.setItem('theme', theme);
    };

    // Ejecutar al cargar la página
    nuxtApp.hook('app:mounted', () => {
        const savedTheme = localStorage.getItem('theme') || 'modern';
        toggleTheme(savedTheme);
    });

    // Proveer el método para cambiar el tema globalmente
    nuxtApp.provide('toggleTheme', toggleTheme);
});
