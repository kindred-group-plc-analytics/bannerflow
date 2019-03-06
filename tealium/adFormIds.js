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
        'dk': '453325'
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
        'all': '',
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

var brand = adFormIds[b.adb_site_brand];
var curId = (brand[BF_prop.RegionCode.toLowerCase()] ? brand[BF_prop.RegionCode.toLowerCase()] : brand['all']);
b.evAdFormTagID = curId;