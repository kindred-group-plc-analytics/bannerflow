var path = document.location.pathname.toLowerCase();

// Marketing Channel identification
var bannerFlowMarketingChannel = 'no channel';
bannerFlowMarketingChannel = (path.indexOf('aff') > -1 ? 'aff' : bannerFlowMarketingChannel);
bannerFlowMarketingChannel = (path.indexOf('prog') > -1 ? 'prog' : bannerFlowMarketingChannel);
bannerFlowMarketingChannel = (path.indexOf('ppc') > -1 ? 'ppc' : bannerFlowMarketingChannel);
bannerFlowMarketingChannel = (path.indexOf('some') > -1 ? 'some' : bannerFlowMarketingChannel);
bannerFlowMarketingChannel = (path.indexOf('pop') > -1 ? 'pop' : bannerFlowMarketingChannel);

// Product Identification
var bannerFlowProduct = 'no product';
bannerFlowProduct = (path.indexOf('sportsbook') > -1 ? 'sportsbook' : bannerFlowProduct);
bannerFlowProduct = (path.indexOf('casino') > -1 ? 'casino' : bannerFlowProduct);
bannerFlowProduct = (path.indexOf('poker') > -1 ? 'poker' : bannerFlowProduct);
bannerFlowProduct = (path.indexOf('bingo') > -1 ? 'bingo' : bannerFlowProduct);
bannerFlowProduct = (path.indexOf('live-casino') > -1 ? 'live-casino' : bannerFlowProduct);
bannerFlowProduct = (path.indexOf('lottery') > -1 ? 'lottery' : bannerFlowProduct);

// ValueStats Flag
var isValueStats = (path.indexOf('valuestats') > -1 ? 'vs_y' : 'vs_n');

var market = BF_prop.LanguageCode.toLowerCase() + '_' + BF_prop.RegionCode.toUpperCase();

var project = BF_prop.LandingPageName.toString().replace(/:/ig, '').trim();

var brand = b.adb_site_brand || 'no brand';

b.adb_bannerflow_name = [project, brand, market, bannerFlowMarketingChannel, bannerFlowProduct, isValueStats].join(':');
b.adb_pageName = 'LP:' + project;
b.adb_section = 'bannerFlow';
b.adb_client_id = '';

// Audience Manager specific variable
var domain = (function () {
    var locale = window.locale;

    if ((window.location.hostname.indexOf("banners") > -1 || window.location.hostname.indexOf("ads") > -1 || window.location.hostname.indexOf("welcome") > -1) && typeof locale !== "undefined") {
        return document.location.hostname + ":" + locale;
    } else {
        return document.location.hostname;
    }
})();

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

var evar1 = domain + ":::" + deviceGroup + window.location.pathname.replace(/\//g, ':');
b.adb_pageName_evar1 = evar1;