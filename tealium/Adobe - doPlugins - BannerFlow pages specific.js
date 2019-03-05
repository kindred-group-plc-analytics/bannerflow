var path = document.location.pathname.toLowerCase();

// Marketing Channel identification
var bannerFlowMarketingChannel = 'no channel';
bannerFlowMarketingChannel = (path.indexOf('/aff/') > -1 ? 'aff' : bannerFlowMarketingChannel);
bannerFlowMarketingChannel = (path.indexOf('/prog/') > -1 ? 'prog' : bannerFlowMarketingChannel);
bannerFlowMarketingChannel = (path.indexOf('/ppc/') > -1 ? 'ppc' : bannerFlowMarketingChannel);
bannerFlowMarketingChannel = (path.indexOf('/some/') > -1 ? 'some' : bannerFlowMarketingChannel);
bannerFlowMarketingChannel = (path.indexOf('/pop/') > -1 ? 'pop' : bannerFlowMarketingChannel);

// Product Identification
var bannerFlowProduct = 'no product';
bannerFlowProduct = (path.indexOf('/sportsbook/') > -1 ? 'sportsbook' : bannerFlowProduct);
bannerFlowProduct = (path.indexOf('/casino/') > -1 ? 'casino' : bannerFlowProduct);
bannerFlowProduct = (path.indexOf('/poker/') > -1 ? 'poker' : bannerFlowProduct);
bannerFlowProduct = (path.indexOf('/bingo/') > -1 ? 'bingo' : bannerFlowProduct);
bannerFlowProduct = (path.indexOf('/live-casino/') > -1 ? 'live-casino' : bannerFlowProduct);

var market = BF_prop.LanguageCode.toLowerCase() + '_' + BF_prop.RegionCode.toUpperCase();

var project = BF_prop.LandingPageName.toString().replace(/:/ig, '').trim();

var brand = b.adb_site_brand || 'no brand';

b.adb_bannerflow_name = [project, brand, market, bannerFlowMarketingChannel, bannerFlowProduct].join(':');
b.adb_pageName = 'Landing Page:' + project;