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

    // Footer pages should be excluded from DTM tracking
    var isFooter = window.location.href.indexOf('-footer-') > -1;

    // Pop pages should be excluded from DTM tracking
    var isPopPage = window.location.href.indexOf('/pop/') > -1;

    if (!(isFooter || isPopPage)) {
        // Adobe Launch - BannerFlow Property.
        (function (d, script) {
            script = d.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = '//assets.adobedtm.com/launch-ENcd671f2570724e0780b5a9dff940fc81-development.min.js';
            d.getElementsByTagName('head')[0].appendChild(script);
        }(document));
    }

    // Facebook tracking
    /* Facebook will be deployed through Adobe Launch
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
    */

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