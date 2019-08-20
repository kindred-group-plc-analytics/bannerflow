if (document.getElementsByClassName('cookie-notification').length > 0) {
    document.getElementsByClassName('cookie-notification')[0].innerHTML = '';
}
var language = 'en';

if (document.location.hostname.split('.')[0] == 'welcome') {

    var urlCode = document.location.pathname.split('/')[1];

    switch (document.location.hostname) {
        case 'welcome.unibet.com':

            if (urlCode === 'se') {
                language = 'sv';
            } else if (urlCode === 'no') {
                language = 'nb';
            } else if (urlCode === 'fi') {
                language = 'fi';
            } else if (urlCode === 'hu') {
                language = 'hu';
            } else if (urlCode === 'de-int') {
                language = 'de';
            }
            break;
        case 'welcome.unibet.be':
            if (urlCode === 'be-fr') {
                language = 'fr'
            } else if (urlCode === 'be-nl') {
                language = 'nl'
            }
            break;
        case 'welcome.unibet.ro':
            language = 'ro';
            break;
        case 'welcome.unibet.it':
            language = 'it';
            break;
        case 'welcome.unibet.de':
            language = 'de';
            break;
        case 'welcome.unibet.ee':
            language = 'et';
            break;
        case 'welcome.unibet.eu':
            language = 'en';
            break;
        case 'welcome.unibet.dk':
            language = 'da';
            break;
        case 'welcome.unibet.ie':
            language = 'en';
            break;
        case 'welcome.unibet.com.au':
            language = 'en';
            break;
        case 'welcome.unibet.co.uk':
            language = 'en';
            break;

    }

} else if (cms.site.language.gameLauncherOverrideShortCode) {
    var language = cms.site.language.gameLauncherOverrideShortCode;

} else if (cms.site.language.shortCode) {
    var language = cms.site.language.shortCode;

}

if (language == 'no') {
    language = 'nb';
}

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://consent.cookiebot.com/uc.js";
script.setAttribute("data-cbid", "b5b8a13f-3aeb-4f5d-8106-6e3807c93d7e");
script.setAttribute("data-culture", language);
script.setAttribute("id", "Cookiebot");
script.async = true;
head.appendChild(script);
