/*
    Version: 1.0.0
    Project Name: Pop Overlay
    Purpose: Popup windows using costomize layout.
    Created Date: 2016/07/05
    Author: jsgao0(Anson)
*/

(function($) {
    $.fn.popup = function (callback, options) {
        var _options = {};
        if(!options)  options = {};
        _options.text = options.text || '';
        _options.css = options.css || {
            'color': '#fff',
            'font-size': '130%',
            'margin': '4em 10px',
            'text-align': 'center'
        };

        $('.pop-overlay').remove();
        $('body').append('<div class="pop-overlay">');
        var popupBox = $('.pop-overlay');
        popupBox.show();
        popupBox.height($(window).height());
        popupBox.width('100%');
        popupBox.css({
            'background': 'rgba(0, 0, 0, .7)',
            'padding': '20px 0',
            'position': 'fixed',
            'z-index': '9999',
            'top': 0,
            'left': 0
        });

        popupBox.click(function(e) {
            if ($(e.target).parent().find(popupBox).length > 0) {
                $(popupBox).hide();
            }
        });

        var appendBox = $('<div>');
        appendBox.text(_options.text);
        appendBox.css(_options.css);
        popupBox.append(appendBox);

        if('function' === typeof callback) callback(popupBox);
    };
}(jQuery));
