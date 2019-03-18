var adFormIds = {
    'unibet': {
        'gb': '543219',
        'se': '456412',
        'it': '956962',
        'de': '1209219',
        'ro': '169041',
        'no': '228043',
        'lt': '506922',
        'fi': '369327',
        'ee': '422830',
        'dk': '453325',
        'be': '169038', // fr and nl
        'nl': '431417'
    },
    'maria': {
        'se': '899833',
        'no': '485314',
        'fi': '1533982',
        'all': '899833'
    },
    'igame': {
        'all': '1219876'
    },
    'highroller': {
        'all': ''
    },
    'vlad': {
        'all': ''
    },
    'kolikkopelit': {
        'all': '972301'
    },
    'huone': {
        'all': '1236049'
    },
};

var gaIds = {
    'unibet': 'UA-1737305-1',
    'vlad': 'UA-113069099-1',
    'igame': 'UA-3364773-20',
    'maria': 'UA-771816-1',
    'huone': 'UA-3364773-10',
    'kolikkopelit': 'UA-17453318-1'
};

var adFormDetails = adFormIds[b.adb_site_brand];
var adFormId = (adFormDetails[BF_prop.RegionCode.toLowerCase()] ? adFormDetails[BF_prop.RegionCode.toLowerCase()] : adFormDetails['all']);
b.evAdFormTagID = adFormId;

b.ga_account_id = gaIds[b.adb_site_brand];