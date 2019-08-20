var deviceGroup = (function () {
    if (navigator.userAgent.match(/iPad/i)) {
        return 'tablet';
    } else if(navigator.userAgent.match(/mobile/i)) {
        return 'mobilephone';
    } else if (navigator.userAgent.match(/Android|Touch/i)) {
        return 'tablet';
    } else {
        return 'desktop';
    }
})();

var cms = {};
cms.device = {
    clientId : "bf_landingpage",
    group: deviceGroup
};
var script = document.createElement('script');xq
script.src = "//assets.adobedtm.com/2ba9756ce24e85b6613a5e44df81f3a5de8f7320/satelliteLib-e59a27c2a8e1f2dd57472d79989f9f35dfee238a.js";
document.head.appendChild(script);

/*var optimizelyTag = document.createElement('script');
optimizelyTag.src = 'https://cdn.optimizely.com/js/11094132178.js';
document.head.appendChild(optimizelyTag);*/