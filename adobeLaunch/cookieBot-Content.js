if (cms.device.group === "mobilephone") {
    var destination = document.getElementsByClassName('content-container')[1];
    destination.innerHTML = '';

} else {
    var destination = document.getElementsByClassName('widget-full-width')[1];
    destination.innerHTML = '';
    $('.widget-full-width').eq(1).removeClass("widget-full-width tabs automated");
    $('.widget-full-width').eq(1).addClass("content-container");
}

var language = 'en';

if (BF_prop && BF_prop.LanguageCode)
    language = BF_prop.LanguageCode;

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://consent.cookiebot.com/b5b8a13f-3aeb-4f5d-8106-6e3807c93d7e/cd.js';
script.setAttribute("data-culture", language);
script.setAttribute("id", "CookieDeclaration");
destination.appendChild(script);