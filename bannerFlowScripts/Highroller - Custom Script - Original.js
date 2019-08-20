if (window.location.hostname === "welcome.storspelare.com" && BF_prop.RegionCode === 'se')
    window.location.hostname = "welcome.storspelare.se";

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

var cms = {};
cms.device = {
    clientId: "bf_landingpage",
    group: deviceGroup
};
var script = document.createElement('script');
script.src = "//assets.adobedtm.com/2ba9756ce24e85b6613a5e44df81f3a5de8f7320/satelliteLib-9dd0121d345f73383b7f2e9d0e02b4ab320d0bc9.js";
document.head.appendChild(script);
//using dtm property from unibet


/*if(BF_prop.LanguageCode + '-' + BF_prop.RegionCode === 'nb-no'){
var optimizelyTag = document.createElement('script');
optimizelyTag.src = 'https://cdn.optimizely.com/js/11067017721.js';
document.head.appendChild(optimizelyTag);
}
else if(BF_prop.LanguageCode + '-' + BF_prop.RegionCode === 'sv-se'){
var optimizelyTag = document.createElement('script');
optimizelyTag.src = 'https://cdn.optimizely.com/js/11051295110.js';
document.head.appendChild(optimizelyTag);
}*/