var language = 'en';
var domain = window.location.hostname;

if (typeof (BF_prop) !== 'undefined' && BF_prop.LanguageCode)
    language = BF_prop.LanguageCode;

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

if (language == 'no') {
    language = 'nb';
}


/*
CookieBot ID mapping
*/

var cookieBotIdList = {
    'bingo': 'a98f4599-eb88-492e-a061-1a35f66f5391',
    'unibet': 'b5b8a13f-3aeb-4f5d-8106-6e3807c93d7e',
    'vlad': '57227dbf-cdd1-4b5e-89f0-1c83d7345da7',
    'highroller': 'a2fcaea6-048a-493a-902b-a3e639ab3d65',
    'mariacasino': '4262169f-c990-41fe-a5af-661e5ef9cb19',
    'igame': 'f0a23e7d-4d0f-43e8-9a46-5a462d716caf',
    'kolikkopelit': '30a06510-c4f7-44e9-8063-ed0c7818d026',
    'casinohuone': '57c9220a-92a7-401c-9f78-2cff1a7f3e46',
    'bohemia': '477493cf-591f-404b-bc59-af9fb1a7ef6a'
};

var brandIdMapping = {
    '55dacb16e347271ec0d5101b': 'unibet',
    '57ff8d9a86585352c8e960be': 'bingo',
    '599d9b9d03e6880994b3960d': 'casinohuone',
    '5818d1e98d987d2cc4a822de': 'igame',
    '58c1289bbd8d3e1194013d59': 'kolikkopelit',
    '55e01fdb581f0846e8152009': 'mariacasino',
    '5847dcef5bff71221cdd2274': 'highroller',
    '5a15628b6fa1cf2680834412': 'vlad',
    '5818d0af8658542364b37346' : 'bohemia'
};

if (typeof (BF_prop) !== 'undefined' && BF_prop.BrandId)
    var cookieBotID = cookieBotIdList[brandIdMapping[BF_prop.BrandId]];


var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://consent.cookiebot.com/uc.js";
script.setAttribute("data-cbid", cookieBotID);
script.setAttribute("data-culture", language);
script.setAttribute("id", "Cookiebot");
script.async = true;
head.appendChild(script);