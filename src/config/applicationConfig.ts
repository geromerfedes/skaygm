const ver = require('../../package.json').version

export const appConfig = {
  name: 'SkayGym',
  version: ver,
  author: 'Geronimo Mercante',
  CLOUD_VIDEOS_URL: {
    vid01: 'https://firebasestorage.googleapis.com/v0/b/skay-gym.appspot.com/o/videos%2FGala01.mp4?alt=media&token=7ae9b377-35a6-4b0d-94b1-e57e9d7977a6',
    vid02: 'https://firebasestorage.googleapis.com/v0/b/skay-gym.appspot.com/o/videos%2FSkay01.mp4?alt=media&token=f9237c4b-2052-494d-9b16-f090f3e315e4',
    vid03: 'https://firebasestorage.googleapis.com/v0/b/skay-gym.appspot.com/o/videos%2FTestimonios01.mp4?alt=media&token=7df8381f-9e00-4cba-af06-e48fbb33da3b',
    vid04: 'https://firebasestorage.googleapis.com/v0/b/skay-gym.appspot.com/o/videos%2FTestimonios02.mp4?alt=media&token=a3b89c90-dd28-48da-bf58-d5c11db1d077',
    vid05: 'https://firebasestorage.googleapis.com/v0/b/skay-gym.appspot.com/o/videos%2FViernes01.mp4?alt=media&token=6fc10c4c-c892-493a-8939-21379e1266e7',
  },
  NUMBER_PHONE: '542213146591',
  COUNTRY_CODES: [
    {
      'text': 'Seleccione un pais',
      'value': null,
      'country-code': null,
      disabled: true
    },
    {
      'text': 'Afghanistan',
      'value': 'AFG',
      'country-code': '004'
    },
    {
      'text': 'Åland Islands',
      'value': 'ALA',
      'country-code': '248'
    },
    {
      'text': 'Albania',
      'value': 'ALB',
      'country-code': '008'
    },
    {
      'text': 'Algeria',
      'value': 'DZA',
      'country-code': '012'
    },
    {
      'text': 'American Samoa',
      'value': 'ASM',
      'country-code': '016'
    },
    {
      'text': 'Andorra',
      'value': 'AND',
      'country-code': '020'
    },
    {
      'text': 'Angola',
      'value': 'AGO',
      'country-code': '024'
    },
    {
      'text': 'Anguilla',
      'value': 'AIA',
      'country-code': '660'
    },
    {
      'text': 'Antarctica',
      'value': 'ATA',
      'country-code': '010'
    },
    {
      'text': 'Antigua and Barbuda',
      'value': 'ATG',
      'country-code': '028'
    },
    {
      'text': 'Argentina',
      'value': 'ARG',
      'country-code': '032'
    },
    {
      'text': 'Armenia',
      'value': 'ARM',
      'country-code': '051'
    },
    {
      'text': 'Aruba',
      'value': 'ABW',
      'country-code': '533'
    },
    {
      'text': 'Australia',
      'value': 'AUS',
      'country-code': '036'
    },
    {
      'text': 'Austria',
      'value': 'AUT',
      'country-code': '040'
    },
    {
      'text': 'Azerbaijan',
      'value': 'AZE',
      'country-code': '031'
    },
    {
      'text': 'Bahamas',
      'value': 'BHS',
      'country-code': '044'
    },
    {
      'text': 'Bahrain',
      'value': 'BHR',
      'country-code': '048'
    },
    {
      'text': 'Bangladesh',
      'value': 'BGD',
      'country-code': '050'
    },
    {
      'text': 'Barbados',
      'value': 'BRB',
      'country-code': '052'
    },
    {
      'text': 'Belarus',
      'value': 'BLR',
      'country-code': '112'
    },
    {
      'text': 'Belgium',
      'value': 'BEL',
      'country-code': '056'
    },
    {
      'text': 'Belize',
      'value': 'BLZ',
      'country-code': '084'
    },
    {
      'text': 'Benin',
      'value': 'BEN',
      'country-code': '204'
    },
    {
      'text': 'Bermuda',
      'value': 'BMU',
      'country-code': '060'
    },
    {
      'text': 'Bhutan',
      'value': 'BTN',
      'country-code': '064'
    },
    {
      'text': 'Bolivia (Plurinational State of)',
      'value': 'BOL',
      'country-code': '068'
    },
    {
      'text': 'Bonaire, Sint Eustatius and Saba',
      'value': 'BES',
      'country-code': '535'
    },
    {
      'text': 'Bosnia and Herzegovina',
      'value': 'BIH',
      'country-code': '070'
    },
    {
      'text': 'Botswana',
      'value': 'BWA',
      'country-code': '072'
    },
    {
      'text': 'Bouvet Island',
      'value': 'BVT',
      'country-code': '074'
    },
    {
      'text': 'Brazil',
      'value': 'BRA',
      'country-code': '076'
    },
    {
      'text': 'British Indian Ocean Territory',
      'value': 'IOT',
      'country-code': '086'
    },
    {
      'text': 'Brunei Darussalam',
      'value': 'BRN',
      'country-code': '096'
    },
    {
      'text': 'Bulgaria',
      'value': 'BGR',
      'country-code': '100'
    },
    {
      'text': 'Burkina Faso',
      'value': 'BFA',
      'country-code': '854'
    },
    {
      'text': 'Burundi',
      'value': 'BDI',
      'country-code': '108'
    },
    {
      'text': 'Cabo Verde',
      'value': 'CPV',
      'country-code': '132'
    },
    {
      'text': 'Cambodia',
      'value': 'KHM',
      'country-code': '116'
    },
    {
      'text': 'Cameroon',
      'value': 'CMR',
      'country-code': '120'
    },
    {
      'text': 'Canada',
      'value': 'CAN',
      'country-code': '124'
    },
    {
      'text': 'Cayman Islands',
      'value': 'CYM',
      'country-code': '136'
    },
    {
      'text': 'Central African Republic',
      'value': 'CAF',
      'country-code': '140'
    },
    {
      'text': 'Chad',
      'value': 'TCD',
      'country-code': '148'
    },
    {
      'text': 'Chile',
      'value': 'CHL',
      'country-code': '152'
    },
    {
      'text': 'China',
      'value': 'CHN',
      'country-code': '156'
    },
    {
      'text': 'Christmas Island',
      'value': 'CXR',
      'country-code': '162'
    },
    {
      'text': 'Cocos (Keeling) Islands',
      'value': 'CCK',
      'country-code': '166'
    },
    {
      'text': 'Colombia',
      'value': 'COL',
      'country-code': '170'
    },
    {
      'text': 'Comoros',
      'value': 'COM',
      'country-code': '174'
    },
    {
      'text': 'Congo',
      'value': 'COG',
      'country-code': '178'
    },
    {
      'text': 'Congo (Democratic Republic of the)',
      'value': 'COD',
      'country-code': '180'
    },
    {
      'text': 'Cook Islands',
      'value': 'COK',
      'country-code': '184'
    },
    {
      'text': 'Costa Rica',
      'value': 'CRI',
      'country-code': '188'
    },
    {
      'text': 'Côte d Ivoire',
      'value': 'CIV',
      'country-code': '384'
    },
    {
      'text': 'Croatia',
      'value': 'HRV',
      'country-code': '191'
    },
    {
      'text': 'Cuba',
      'value': 'CUB',
      'country-code': '192'
    },
    {
      'text': 'Curaçao',
      'value': 'CUW',
      'country-code': '531'
    },
    {
      'text': 'Cyprus',
      'value': 'CYP',
      'country-code': '196'
    },
    {
      'text': 'Czechia',
      'value': 'CZE',
      'country-code': '203'
    },
    {
      'text': 'Denmark',
      'value': 'DNK',
      'country-code': '208'
    },
    {
      'text': 'Djibouti',
      'value': 'DJI',
      'country-code': '262'
    },
    {
      'text': 'Dominica',
      'value': 'DMA',
      'country-code': '212'
    },
    {
      'text': 'Dominican Republic',
      'value': 'DOM',
      'country-code': '214'
    },
    {
      'text': 'Ecuador',
      'value': 'ECU',
      'country-code': '218'
    },
    {
      'text': 'Egypt',
      'value': 'EGY',
      'country-code': '818'
    },
    {
      'text': 'El Salvador',
      'value': 'SLV',
      'country-code': '222'
    },
    {
      'text': 'Equatorial Guinea',
      'value': 'GNQ',
      'country-code': '226'
    },
    {
      'text': 'Eritrea',
      'value': 'ERI',
      'country-code': '232'
    },
    {
      'text': 'Estonia',
      'value': 'EST',
      'country-code': '233'
    },
    {
      'text': 'Eswatini',
      'value': 'SWZ',
      'country-code': '748'
    },
    {
      'text': 'Ethiopia',
      'value': 'ETH',
      'country-code': '231'
    },
    {
      'text': 'Falkland Islands (Malvinas)',
      'value': 'FLK',
      'country-code': '238'
    },
    {
      'text': 'Faroe Islands',
      'value': 'FRO',
      'country-code': '234'
    },
    {
      'text': 'Fiji',
      'value': 'FJI',
      'country-code': '242'
    },
    {
      'text': 'Finland',
      'value': 'FIN',
      'country-code': '246'
    },
    {
      'text': 'France',
      'value': 'FRA',
      'country-code': '250'
    },
    {
      'text': 'French Guiana',
      'value': 'GUF',
      'country-code': '254'
    },
    {
      'text': 'French Polynesia',
      'value': 'PYF',
      'country-code': '258'
    },
    {
      'text': 'French Southern Territories',
      'value': 'ATF',
      'country-code': '260'
    },
    {
      'text': 'Gabon',
      'value': 'GAB',
      'country-code': '266'
    },
    {
      'text': 'Gambia',
      'value': 'GMB',
      'country-code': '270'
    },
    {
      'text': 'Georgia',
      'value': 'GEO',
      'country-code': '268'
    },
    {
      'text': 'Germany',
      'value': 'DEU',
      'country-code': '276'
    },
    {
      'text': 'Ghana',
      'value': 'GHA',
      'country-code': '288'
    },
    {
      'text': 'Gibraltar',
      'value': 'GIB',
      'country-code': '292'
    },
    {
      'text': 'Greece',
      'value': 'GRC',
      'country-code': '300'
    },
    {
      'text': 'Greenland',
      'value': 'GRL',
      'country-code': '304'
    },
    {
      'text': 'Grenada',
      'value': 'GRD',
      'country-code': '308'
    },
    {
      'text': 'Guadeloupe',
      'value': 'GLP',
      'country-code': '312'
    },
    {
      'text': 'Guam',
      'value': 'GUM',
      'country-code': '316'
    },
    {
      'text': 'Guatemala',
      'value': 'GTM',
      'country-code': '320'
    },
    {
      'text': 'Guernsey',
      'value': 'GGY',
      'country-code': '831'
    },
    {
      'text': 'Guinea',
      'value': 'GIN',
      'country-code': '324'
    },
    {
      'text': 'Guinea-Bissau',
      'value': 'GNB',
      'country-code': '624'
    },
    {
      'text': 'Guyana',
      'value': 'GUY',
      'country-code': '328'
    },
    {
      'text': 'Haiti',
      'value': 'HTI',
      'country-code': '332'
    },
    {
      'text': 'Heard Island and McDonald Islands',
      'value': 'HMD',
      'country-code': '334'
    },
    {
      'text': 'Holy See',
      'value': 'VAT',
      'country-code': '336'
    },
    {
      'text': 'Honduras',
      'value': 'HND',
      'country-code': '340'
    },
    {
      'text': 'Hong Kong',
      'value': 'HKG',
      'country-code': '344'
    },
    {
      'text': 'Hungary',
      'value': 'HUN',
      'country-code': '348'
    },
    {
      'text': 'Iceland',
      'value': 'ISL',
      'country-code': '352'
    },
    {
      'text': 'India',
      'value': 'IND',
      'country-code': '356'
    },
    {
      'text': 'Indonesia',
      'value': 'IDN',
      'country-code': '360'
    },
    {
      'text': 'Iran (Islamic Republic of)',
      'value': 'IRN',
      'country-code': '364'
    },
    {
      'text': 'Iraq',
      'value': 'IRQ',
      'country-code': '368'
    },
    {
      'text': 'Ireland',
      'value': 'IRL',
      'country-code': '372'
    },
    {
      'text': 'Isle of Man',
      'value': 'IMN',
      'country-code': '833'
    },
    {
      'text': 'Israel',
      'value': 'ISR',
      'country-code': '376'
    },
    {
      'text': 'Italy',
      'value': 'ITA',
      'country-code': '380'
    },
    {
      'text': 'Jamaica',
      'value': 'JAM',
      'country-code': '388'
    },
    {
      'text': 'Japan',
      'value': 'JPN',
      'country-code': '392'
    },
    {
      'text': 'Jersey',
      'value': 'JEY',
      'country-code': '832'
    },
    {
      'text': 'Jordan',
      'value': 'JOR',
      'country-code': '400'
    },
    {
      'text': 'Kazakhstan',
      'value': 'KAZ',
      'country-code': '398'
    },
    {
      'text': 'Kenya',
      'value': 'KEN',
      'country-code': '404'
    },
    {
      'text': 'Kiribati',
      'value': 'KIR',
      'country-code': '296'
    },
    {
      'text': 'Korea',
      'value': 'PRK',
      'country-code': '408'
    },
    {
      'text': 'Korea (Republic of)',
      'value': 'KOR',
      'country-code': '410'
    },
    {
      'text': 'Kuwait',
      'value': 'KWT',
      'country-code': '414'
    },
    {
      'text': 'Kyrgyzstan',
      'value': 'KGZ',
      'country-code': '417'
    },
    {
      'text': 'Lao Democratic Republic',
      'value': 'LAO',
      'country-code': '418'
    },
    {
      'text': 'Latvia',
      'value': 'LVA',
      'country-code': '428'
    },
    {
      'text': 'Lebanon',
      'value': 'LBN',
      'country-code': '422'
    },
    {
      'text': 'Lesotho',
      'value': 'LSO',
      'country-code': '426'
    },
    {
      'text': 'Liberia',
      'value': 'LBR',
      'country-code': '430'
    },
    {
      'text': 'Libya',
      'value': 'LBY',
      'country-code': '434'
    },
    {
      'text': 'Liechtenstein',
      'value': 'LIE',
      'country-code': '438'
    },
    {
      'text': 'Lithuania',
      'value': 'LTU',
      'country-code': '440'
    },
    {
      'text': 'Luxembourg',
      'value': 'LUX',
      'country-code': '442'
    },
    {
      'text': 'Macao',
      'value': 'MAC',
      'country-code': '446'
    },
    {
      'text': 'Macedonia (the former Yugoslav Republic of)',
      'value': 'MKD',
      'country-code': '807'
    },
    {
      'text': 'Madagascar',
      'value': 'MDG',
      'country-code': '450'
    },
    {
      'text': 'Malawi',
      'value': 'MWI',
      'country-code': '454'
    },
    {
      'text': 'Malaysia',
      'value': 'MYS',
      'country-code': '458'
    },
    {
      'text': 'Maldives',
      'value': 'MDV',
      'country-code': '462'
    },
    {
      'text': 'Mali',
      'value': 'MLI',
      'country-code': '466'
    },
    {
      'text': 'Malta',
      'value': 'MLT',
      'country-code': '470'
    },
    {
      'text': 'Marshall Islands',
      'value': 'MHL',
      'country-code': '584'
    },
    {
      'text': 'Martinique',
      'value': 'MTQ',
      'country-code': '474'
    },
    {
      'text': 'Mauritania',
      'value': 'MRT',
      'country-code': '478'
    },
    {
      'text': 'Mauritius',
      'value': 'MUS',
      'country-code': '480'
    },
    {
      'text': 'Mayotte',
      'value': 'MYT',
      'country-code': '175'
    },
    {
      'text': 'México',
      'value': 'MEX',
      'country-code': '484'
    },
    {
      'text': 'Micronesia (Federated States of)',
      'value': 'FSM',
      'country-code': '583'
    },
    {
      'text': 'Moldova (Republic of)',
      'value': 'MDA',
      'country-code': '498'
    },
    {
      'text': 'Monaco',
      'value': 'MCO',
      'country-code': '492'
    },
    {
      'text': 'Mongolia',
      'value': 'MNG',
      'country-code': '496'
    },
    {
      'text': 'Montenegro',
      'value': 'MNE',
      'country-code': '499'
    },
    {
      'text': 'Montserrat',
      'value': 'MSR',
      'country-code': '500'
    },
    {
      'text': 'Morocco',
      'value': 'MAR',
      'country-code': '504'
    },
    {
      'text': 'Mozambique',
      'value': 'MOZ',
      'country-code': '508'
    },
    {
      'text': 'Myanmar',
      'value': 'MMR',
      'country-code': '104'
    },
    {
      'text': 'Namibia',
      'value': 'NAM',
      'country-code': '516'
    },
    {
      'text': 'Nauru',
      'value': 'NRU',
      'country-code': '520'
    },
    {
      'text': 'Nepal',
      'value': 'NPL',
      'country-code': '524'
    },
    {
      'text': 'Netherlands',
      'value': 'NLD',
      'country-code': '528'
    },
    {
      'text': 'New Caledonia',
      'value': 'NCL',
      'country-code': '540'
    },
    {
      'text': 'New Zealand',
      'value': 'NZL',
      'country-code': '554'
    },
    {
      'text': 'Nicaragua',
      'value': 'NIC',
      'country-code': '558'
    },
    {
      'text': 'Niger',
      'value': 'NER',
      'country-code': '562'
    },
    {
      'text': 'Nigeria',
      'value': 'NGA',
      'country-code': '566'
    },
    {
      'text': 'Niue',
      'value': 'NIU',
      'country-code': '570'
    },
    {
      'text': 'Norfolk Island',
      'value': 'NFK',
      'country-code': '574'
    },
    {
      'text': 'Northern Mariana Islands',
      'value': 'MNP',
      'country-code': '580'
    },
    {
      'text': 'Norway',
      'value': 'NOR',
      'country-code': '578'
    },
    {
      'text': 'Oman',
      'value': 'OMN',
      'country-code': '512'
    },
    {
      'text': 'Pakistan',
      'value': 'PAK',
      'country-code': '586'
    },
    {
      'text': 'Palau',
      'value': 'PLW',
      'country-code': '585'
    },
    {
      'text': 'Palestine, State of',
      'value': 'PSE',
      'country-code': '275'
    },
    {
      'text': 'Panama',
      'value': 'PAN',
      'country-code': '591'
    },
    {
      'text': 'Papua New Guinea',
      'value': 'PNG',
      'country-code': '598'
    },
    {
      'text': 'Paraguay',
      'value': 'PRY',
      'country-code': '600'
    },
    {
      'text': 'Peru',
      'value': 'PER',
      'country-code': '604'
    },
    {
      'text': 'Philippines',
      'value': 'PHL',
      'country-code': '608'
    },
    {
      'text': 'Pitcairn',
      'value': 'PCN',
      'country-code': '612'
    },
    {
      'text': 'Poland',
      'value': 'POL',
      'country-code': '616'
    },
    {
      'text': 'Portugal',
      'value': 'PRT',
      'country-code': '620'
    },
    {
      'text': 'Puerto Rico',
      'value': 'PRI',
      'country-code': '630'
    },
    {
      'text': 'Qatar',
      'value': 'QAT',
      'country-code': '634'
    },
    {
      'text': 'Réunion',
      'value': 'REU',
      'country-code': '638'
    },
    {
      'text': 'Romania',
      'value': 'ROU',
      'country-code': '642'
    },
    {
      'text': 'Russian Federation',
      'value': 'RUS',
      'country-code': '643'
    },
    {
      'text': 'Rwanda',
      'value': 'RWA',
      'country-code': '646'
    },
    {
      'text': 'Saint Barthélemy',
      'value': 'BLM',
      'country-code': '652'
    },
    {
      'text': 'Saint Helena, Ascension and Tristan da Cunha',
      'value': 'SHN',
      'country-code': '654'
    },
    {
      'text': 'Saint Kitts and Nevis',
      'value': 'KNA',
      'country-code': '659'
    },
    {
      'text': 'Saint Lucia',
      'value': 'LCA',
      'country-code': '662'
    },
    {
      'text': 'Saint Martin (French part)',
      'value': 'MAF',
      'country-code': '663'
    },
    {
      'text': 'Saint Pierre and Miquelon',
      'value': 'SPM',
      'country-code': '666'
    },
    {
      'text': 'Saint Vincent and the Grenadines',
      'value': 'VCT',
      'country-code': '670'
    },
    {
      'text': 'Samoa',
      'value': 'WSM',
      'country-code': '882'
    },
    {
      'text': 'San Marino',
      'value': 'SMR',
      'country-code': '674'
    },
    {
      'text': 'Sao Tome and Principe',
      'value': 'STP',
      'country-code': '678'
    },
    {
      'text': 'Saudi Arabia',
      'value': 'SAU',
      'country-code': '682'
    },
    {
      'text': 'Senegal',
      'value': 'SEN',
      'country-code': '686'
    },
    {
      'text': 'Serbia',
      'value': 'SRB',
      'country-code': '688'
    },
    {
      'text': 'Seychelles',
      'value': 'SYC',
      'country-code': '690'
    },
    {
      'text': 'Sierra Leone',
      'value': 'SLE',
      'country-code': '694'
    },
    {
      'text': 'Singapore',
      'value': 'SGP',
      'country-code': '702'
    },
    {
      'text': 'Sint Maarten (Dutch part)',
      'value': 'SXM',
      'country-code': '534'
    },
    {
      'text': 'Slovakia',
      'value': 'SVK',
      'country-code': '703'
    },
    {
      'text': 'Slovenia',
      'value': 'SVN',
      'country-code': '705'
    },
    {
      'text': 'Solomon Islands',
      'value': 'SLB',
      'country-code': '090'
    },
    {
      'text': 'Somalia',
      'value': 'SOM',
      'country-code': '706'
    },
    {
      'text': 'South Africa',
      'value': 'ZAF',
      'country-code': '710'
    },
    {
      'text': 'South Georgia and the South Sandwich Islands',
      'value': 'SGS',
      'country-code': '239'
    },
    {
      'text': 'South Sudan',
      'value': 'SSD',
      'country-code': '728'
    },
    {
      'text': 'Spain',
      'value': 'ESP',
      'country-code': '724'
    },
    {
      'text': 'Sri Lanka',
      'value': 'LKA',
      'country-code': '144'
    },
    {
      'text': 'Sudan',
      'value': 'SDN',
      'country-code': '729'
    },
    {
      'text': 'Suritext',
      'value': 'SUR',
      'country-code': '740'
    },
    {
      'text': 'Svalbard and Jan Mayen',
      'value': 'SJM',
      'country-code': '744'
    },
    {
      'text': 'Sweden',
      'value': 'SWE',
      'country-code': '752'
    },
    {
      'text': 'Switzerland',
      'value': 'CHE',
      'country-code': '756'
    },
    {
      'text': 'Syrian Arab Republic',
      'value': 'SYR',
      'country-code': '760'
    },
    {
      'text': 'Taiwan, Province of China',
      'value': 'TWN',
      'country-code': '158'
    },
    {
      'text': 'Tajikistan',
      'value': 'TJK',
      'country-code': '762'
    },
    {
      'text': 'Tanzania, United Republic of',
      'value': 'TZA',
      'country-code': '834'
    },
    {
      'text': 'Thailand',
      'value': 'THA',
      'country-code': '764'
    },
    {
      'text': 'Timor-Leste',
      'value': 'TLS',
      'country-code': '626'
    },
    {
      'text': 'Togo',
      'value': 'TGO',
      'country-code': '768'
    },
    {
      'text': 'Tokelau',
      'value': 'TKL',
      'country-code': '772'
    },
    {
      'text': 'Tonga',
      'value': 'TON',
      'country-code': '776'
    },
    {
      'text': 'Trinidad and Tobago',
      'value': 'TTO',
      'country-code': '780'
    },
    {
      'text': 'Tunisia',
      'value': 'TUN',
      'country-code': '788'
    },
    {
      'text': 'Turkey',
      'value': 'TUR',
      'country-code': '792'
    },
    {
      'text': 'Turkmenistan',
      'value': 'TKM',
      'country-code': '795'
    },
    {
      'text': 'Turks and Caicos Islands',
      'value': 'TCA',
      'country-code': '796'
    },
    {
      'text': 'Tuvalu',
      'value': 'TUV',
      'country-code': '798'
    },
    {
      'text': 'Uganda',
      'value': 'UGA',
      'country-code': '800'
    },
    {
      'text': 'Ukraine',
      'value': 'UKR',
      'country-code': '804'
    },
    {
      'text': 'United Arab Emirates',
      'value': 'ARE',
      'country-code': '784'
    },
    {
      'text': 'United Kingdom of Great Britain and Northern Ireland',
      'value': 'GBR',
      'country-code': '826'
    },
    {
      'text': 'United States of America',
      'value': 'USA',
      'country-code': '840'
    },
    {
      'text': 'United States Minor Outlying Islands',
      'value': 'UMI',
      'country-code': '581'
    },
    {
      'text': 'Uruguay',
      'value': 'URY',
      'country-code': '858'
    },
    {
      'text': 'Uzbekistan',
      'value': 'UZB',
      'country-code': '860'
    },
    {
      'text': 'Vanuatu',
      'value': 'VUT',
      'country-code': '548'
    },
    {
      'text': 'Venezuela (Bolivarian Republic of)',
      'value': 'VEN',
      'country-code': '862'
    },
    {
      'text': 'Viet Nam',
      'value': 'VNM',
      'country-code': '704'
    },
    {
      'text': 'Virgin Islands (British)',
      'value': 'VGB',
      'country-code': '092'
    },
    {
      'text': 'Virgin Islands (U.S.)',
      'value': 'VIR',
      'country-code': '850'
    },
    {
      'text': 'Wallis and Futuna',
      'value': 'WLF',
      'country-code': '876'
    },
    {
      'text': 'Western Sahara',
      'value': 'ESH',
      'country-code': '732'
    },
    {
      'text': 'Yemen',
      'value': 'YEM',
      'country-code': '887'
    },
    {
      'text': 'Zambia',
      'value': 'ZMB',
      'country-code': '894'
    },
    {
      'text': 'Zimbabwe',
      'value': 'ZWE',
      'country-code': '716'
    }
  ],
}