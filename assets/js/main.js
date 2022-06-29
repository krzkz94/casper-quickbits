

(function() {

    function darkMode() {
        $('.toggle-track').on('click', function () {
            if ($('html').hasClass('dark-mode')) {
                $('html').removeClass('dark-mode');
                localStorage.setItem('qb_dark', false);
            } else {
                $('html').addClass('dark-mode');
                localStorage.setItem('qb_dark', true);
            }
        });
    }

    $(function() {
        darkMode();
    });
})();