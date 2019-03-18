// Extract brand from domain
var brand = document.location.host.split('.')[1]
// Identify locale from BannerFlow
var market = BF_prop.RegionCode;

var lookupValue = [brand, market].join('.')
var lookupValueAll = [brand, 'all'].join('.')

var globalLookUp = {
    // Unibet - Start
    'unibet.gb': {
        countryCode: 'GB',
        fbPixel: ['1437591169856709']
    },
    'unibet.se': {
        countryCode: 'SE',
        fbPixel: ['474699929372579']
    },
    'unibet.dk': {
        countryCode: 'DK',
        fbPixel: ['1566766133554618']
    },
    'unibet.be': {
        countryCode: 'BE',
        fbPixel: ['922725971072024']
    },
    'unibet.it': {
        countryCode: 'IT',
        fbPixel: ['349976165212687']
    },
    'unibet.ro': {
        countryCode: 'RO',
        fbPixel: ['517828918380620']
    },
    'unibet.fr': {
        countryCode: 'FR',
        fbPixel: ['779457038770997']
    },
    'unibet.de': {
        countryCode: 'DE',
        fbPixel: ['1865769903752618']
    },
    'unibet.ee': {
        countryCode: 'EE',
        fbPixel: ['174253192934633']
    },
    'unibet.au': {
        countryCode: 'AU',
        fbPixel: ['408072722663305']
    },
    // Unibet - End
    'mariacasino.se': {
        countryCode: 'SE',
        fbPixel: ['2224766431126641'],
        unicdn: 'maria',
        lastClick: 'maria',
        adnxs: {
            pageView: {
                allPages: {
                    px: [''],
                    seg: ['7818602']
                }
            }
        }
    },
    'mariacasino.fi': {
        countryCode: 'FI',
        fbPixel: ['469777186524531'],
        unicdn: 'maria',
        lastClick: 'maria',
        adnxs: {
            pageView: {
                allPages: {
                    px: [''],
                    seg: ['7818602']
                }
            }
        }
    },
    'mariacasino.dk': {
        countryCode: 'DK',
        fbPixel: ['611211705679705'],
        unicdn: 'maria',
        lastClick: 'maria',
        adnxs: {
            pageView: {
                allPages: {
                    px: [''],
                    seg: ['7818602']
                }
            }
        }
    },
    'mariacasino.no': {
        countryCode: 'NO',
        fbPixel: [''],
        unicdn: 'maria',
        lastClick: 'maria',
        adnxs: {
            pageView: {
                allPages: {
                    px: [''],
                    seg: ['7818602']
                }
            }
        }
    },
    'mariacasino.gb': {
        countryCode: 'GB',
        fbPixel: ['970858756313914'],
        unicdn: 'maria',
        lastClick: 'maria',
        adnxs: {
            pageView: {
                allPages: {
                    px: [''],
                    seg: ['7818602']
                }
            }
        }
    },
    'mariacasino.ee': {
        countryCode: 'EE',
        fbPixel: ['847153122070802'],
        unicdn: 'maria',
        lastClick: 'maria',
        adnxs: {
            pageView: {
                allPages: {
                    px: [''],
                    seg: ['7818602']
                }
            }
        }
    },
    'mariacasino.eu': {
        countryCode: 'EU',
        fbPixel: ['847153122070802'],
        unicdn: 'maria',
        lastClick: 'maria',
        adnxs: {
            pageView: {
                allPages: {
                    px: [''],
                    seg: ['7818602']
                }
            }
        }
    },
    'igame.fi': {
        countryCode: 'FI',
        fbPixel: ['1849672165057617'],
        unicdn: 'igame',
        lastClick: 'igame',
        amobee: 'igame',
        adnxs: {
            pageView: {
                allPages: {
                    px: [''],
                    seg: ['']
                }
            }
        }
    },
    'igame.gb': {
        countryCode: 'GB',
        fbPixel: ['1849672165057617'],
        unicdn: 'igame',
        lastClick: 'igame',
        amobee: 'igame',
        adnxs: {
            pageView: {
                allPages: {
                    px: [''],
                    seg: ['']
                }
            }
        }
    },
    'igame.se': {
        countryCode: 'SE',
        fbPixel: ['223009751934243'],
        unicdn: 'igame',
        lastClick: 'igame',
        amobee: 'igame',
        adnxs: {
            pageView: {
                allPages: {
                    px: [''],
                    seg: ['']
                }
            }
        }
    },
    'igame.no': {
        countryCode: 'NO',
        fbPixel: ['1849672165057617'],
        unicdn: 'igame',
        lastClick: 'igame',
        amobee: 'igame',
        adnxs: {
            pageView: {
                allPages: {
                    px: [''],
                    seg: ['']
                }
            }
        }
    },
    'kolikkopelit.fi': {
        countryCode: 'FI',
        fbPixel: [''],
        unicdn: 'kolikkopelit',
        lastClick: 'kolikkopelit',
        amobee: 'Kolikkopelit',
        //mmPixelService: '5aafd2ed2fb5d',
        crazyEgg: '0012/9242',
        adnxs: {
            pageView: {
                allPages: {
                    px: ['7842470'],
                    seg: ['']
                }
            }
        }
    },
    'casinohuone.fi': {
        countryCode: 'FI',
        fbPixel: [''],
        unicdn: 'huone',
        lastClick: 'huone',
        // amobee: 'huone', 
        //mmPixelService: '5aafd2ed2fb5d',
        adnxs: {
            pageView: {
                allPages: {
                    px: [''],
                    seg: ['']
                }
            }
        }
    },
    'bingo.all': {
        countryCode: 'ALL',
        fbPixel: ['430881080438970'],
    }
}

var result = globalLookUp[lookupValue] || globalLookUp[lookupValueAll] || '';

if (result != '') {
    return result;
}