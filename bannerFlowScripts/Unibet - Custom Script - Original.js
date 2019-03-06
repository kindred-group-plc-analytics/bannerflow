(function () {

    if (window.location.hostname === "welcome.unibet.com" && BF_prop.RegionCode === 'se')
        window.location.hostname = "welcome.unibet.se";

    // Don't do anything if it already is the NSW Landingpage
    if (location.pathname.toLowerCase().indexOf('/au/nsw/') > -1)
        return;

    var lpLanguage = BF_prop.LanguageCode + '-' + BF_prop.RegionCode;
    if (lpLanguage === 'en-au') {
        checkIfNSW(function (res) {
            if (res.regionIsoCode === 'NSW') {
                changeLP();
            }
        })
    }

    function checkIfNSW(cb) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                cb(JSON.parse(xhttp.responseText));
            }
        };
        xhttp.open("GET", "https://geo.bannerflow.com/api/geo", true);
        xhttp.send();
    }

    function changeLP() {
        window.location.href = 'https://welcome.unibet.com.au/au/nsw/sportsbook/generic/2018/index.html';
    }

})();


(function () {


    /*var optimizelyTag = document.createElement('script');
    optimizelyTag.src = 'https://cdn.optimizely.com/js/10682170820.js';
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

    if (!hasLoaded && !isFooter && !isPopPage) { // window['cms'] === undefined &&
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

        document.write('<scr' + 'ipt src="//assets.adobedtm.com/2ba9756ce24e85b6613a5e44df81f3a5de8f7320/satelliteLib-81fa49b12f4903c5e2b79397db5965ace0d8bfac.js"></scr' + 'ipt>');

    }


    // Facebook tracking
    if (!isFooter) {

        var idList = {
            gb: '1437591169856709',
            it: '349976165212687',
            be: '922725971072024',
            ro: '517828918380620',
            ee: '174253192934633',
            au: '408072722663305',
            de: '1865769903752618'
        }

        var fbId = idList[BF_prop.RegionCode] ? idList[BF_prop.RegionCode] : null;

        if (fbId) {
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
            fbq('init', fbId);
            fbq('track', 'PageView');
        }
    }

    // POPUNDER PIXEL
    if (!isFooter) {
        // Automatically fires pixels according to page URI
        var eventBaseUrl = 'https://secure.adnxs.com/seg?add=';
        var events = [
            { name: 'pop', id: '9755599', match: '/pop/' },
        ];

        var pageUrl = document.location.href.toLowerCase();
        var matches = events.filter(function (e) {
            return pageUrl.indexOf(e.match) > -1;
        });
        for (var i = 0; i < matches.length; i++) {
            var img = new Image();
            img.src = eventBaseUrl + matches[i].id;
        }
    }
})();

// BounceX tag for UK pages
(function (d) {
    if (window.location.hostname === 'welcome.unibet.co.uk') {
        var e = d.createElement('script');
        e.src = d.location.protocol + '//tag.bounceexchange.com/2990/i.js';
        e.async = true;
        d.getElementsByTagName('head')[0].appendChild(e);
    }
}(document));