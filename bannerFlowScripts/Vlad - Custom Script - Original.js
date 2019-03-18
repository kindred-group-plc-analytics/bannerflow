(function () {

    /*var optimizelyTag = document.createElement('script');
    optimizelyTag.src = 'https://cdn.optimizely.com/js/11082214424.js';
    document.head.appendChild(optimizelyTag);*/

    // CMS TRACKING
    var hasLoaded = (function () {
        var scrs = document.head.querySelectorAll('script');
        for (var i = 0; i < scrs.length; i++) {
            if (scrs[i].src && scrs[i].src.indexOf('.adobedtm.') > -1) {
                return true;
            }
        }
        return false;
    })();

    // Footer pages should be excluded from DTM tracking
    var isFooter = window.location.href.indexOf('-footer-') > -1;

    // Pop pages should be excluded from DTM tracking
    var isPopPage = window.location.href.indexOf('/pop/') > -1;

    if (!isFooter && !isPopPage) {
        var deviceGroup = (function () {
            if (navigator.userAgent.match(/iPad/i)) {
                return 'tablet';
            } else if (navigator.userAgent.match(/mobile/i)) {
                return 'mobilephone';
            } else if (navigator.userAgent.match(/Android|Touch/i)) {
                return 'tablet';
            } else {
                return 'desktop';
            }
        })();

        window['cms'] = {};
        window['cms'].device = {
            clientId: "bf_landingpage",
            group: deviceGroup
        };

        document.write('<scr' + 'ipt src="//assets.adobedtm.com/2ba9756ce24e85b6613a5e44df81f3a5de8f7320/satelliteLib-c76fe446ddb6f2a5b766e703707353379ef7337d.js"></scr' + 'ipt>');

    }

    // Facebook tracking
    if (!isFooter) {

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