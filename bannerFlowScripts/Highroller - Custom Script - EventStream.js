if (window.location.hostname === "welcome.storspelare.com" && BF_prop.RegionCode === 'se')
    window.location.hostname = "welcome.storspelare.se";

// Footer pages should be excluded from DTM tracking
var isFooter = window.location.href.indexOf('-footer-') > -1;

// Pop pages should be excluded from DTM tracking
var isPopPage = window.location.href.indexOf('/pop/') > -1;

if (!(isFooter || isPopPage)) {
    // Adobe Launch - BannerFlow Property.
    if (!window.adobeTriggered) {
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = '//assets.adobedtm.com/launch-ENce02755c89e0470489c012b74399a2ed.min.js';
        document.getElementsByTagName('head')[0].appendChild(script);
        window.adobeTriggered = true;
    }
}