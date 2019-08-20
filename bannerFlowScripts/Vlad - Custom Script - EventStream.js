(function () {

    var isFooter = window.location.href.indexOf('-footer-') > -1;

    // Pop pages should be excluded from DTM tracking
    var isPopPage = window.location.href.indexOf('/pop/') > -1;

    if (!(isFooter || isPopPage)) {
        // Adobe Launch - BannerFlow Property.
        (function (d, script) {
            script = d.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = '//assets.adobedtm.com/launch-ENce02755c89e0470489c012b74399a2ed.min.js';
            d.getElementsByTagName('head')[0].appendChild(script);
        }(document));
    } else if (!isFooter) {
        !function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
            n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '150256398956015');
        fbq('track', 'PageView');
    }
})();