var select = document.getElementById('countryCodeSelect');

var countryCodeData = {
 countries: [{
    "coun_id": 240,
    "coun_name": "Andorra",
    "country_code": "AD",
    "phone_code": 376
  },
  {
    "coun_id": 56,
    "coun_name": "United Arab Emirates",
    "country_code": "AE",
    "phone_code": 971
  },
  {
    "coun_id": 235,
    "coun_name": "Afghanistan",
    "country_code": "AF",
    "phone_code": 93
  },
  {
    "coun_id": 55,
    "coun_name": "Antigua and Barbuda",
    "country_code": "AG",
    "phone_code": "1-268"
  },
  {
    "coun_id": 242,
    "coun_name": "Anguilla",
    "country_code": "AI",
    "phone_code": "1-264"
  },
  {
    "coun_id": 237,
    "coun_name": "Albania",
    "country_code": "AL",
    "phone_code": 355
  },
  {
    "coun_id": 244,
    "coun_name": "Armenia",
    "country_code": "AM",
    "phone_code": 374
  },
  {
    "coun_id": 31,
    "coun_name": "Netherlands Antilles",
    "country_code": "AN",
    "phone_code": 599
  },
  {
    "coun_id": 241,
    "coun_name": "Angola",
    "country_code": "AO",
    "phone_code": 244
  },
  {
    "coun_id": 243,
    "coun_name": "Antarctica",
    "country_code": "AQ",
    "phone_code": 672
  },
  {
    "coun_id": 22,
    "coun_name": "Argentina",
    "country_code": "AR",
    "phone_code": 54
  },
  {
    "coun_id": 239,
    "coun_name": "American Samoa",
    "country_code": "AS",
    "phone_code": "1-684"
  },
  {
    "coun_id": 3,
    "coun_name": "Austria",
    "country_code": "AT",
    "phone_code": 43
  },
  {
    "coun_id": 98,
    "coun_name": "Australia",
    "country_code": "AU",
    "phone_code": 61
  },
  {
    "coun_id": 78,
    "coun_name": "Aruba",
    "country_code": "AW",
    "phone_code": 297
  },
  {
    "coun_id": 236,
    "coun_name": "Åland Islands",
    "country_code": "AX",
    "phone_code": 358
  },
  {
    "coun_id": 245,
    "coun_name": "Azerbaijan",
    "country_code": "AZ",
    "phone_code": 994
  },
  {
    "coun_id": 192,
    "coun_name": "Bosnia And Herzegovina",
    "country_code": "BA",
    "phone_code": 387
  },
  {
    "coun_id": 97,
    "coun_name": "Barbados",
    "country_code": "BB",
    "phone_code": "1-246"
  },
  {
    "coun_id": 23,
    "coun_name": "Bangladesh",
    "country_code": "BD",
    "phone_code": 880
  },
  {
    "coun_id": 24,
    "coun_name": "Belgium",
    "country_code": "BE",
    "phone_code": 32
  },
  {
    "coun_id": 196,
    "coun_name": "Burkina Faso",
    "country_code": "BF",
    "phone_code": 226
  },
  {
    "coun_id": 70,
    "coun_name": "Bulgaria",
    "country_code": "BG",
    "phone_code": 359
  },
  {
    "coun_id": 2,
    "coun_name": "Bahrain",
    "country_code": "BH",
    "phone_code": 973
  },
  {
    "coun_id": 197,
    "coun_name": "Burundi",
    "country_code": "BI",
    "phone_code": 257
  },
  {
    "coun_id": 248,
    "coun_name": "Benin",
    "country_code": "BJ",
    "phone_code": 229
  },
  {
    "coun_id": 77,
    "coun_name": "Saint Barthélemy",
    "country_code": "BL",
    "phone_code": 590
  },
  {
    "coun_id": 26,
    "coun_name": "Bermuda",
    "country_code": "BM",
    "phone_code": "1-441"
  },
  {
    "coun_id": 15,
    "coun_name": "Brunei Darussalam",
    "country_code": "BN",
    "phone_code": 673
  },
  {
    "coun_id": 71,
    "coun_name": "Bolivia",
    "country_code": "BO",
    "phone_code": 591
  },
  {
    "coun_id": 12,
    "coun_name": "Brazil",
    "country_code": "BR",
    "phone_code": 55
  },
  {
    "coun_id": 1,
    "coun_name": "Bahamas",
    "country_code": "BS",
    "phone_code": "1-242"
  },
  {
    "coun_id": 249,
    "coun_name": "Bhutan",
    "country_code": "BT",
    "phone_code": 975
  },
  {
    "coun_id": 194,
    "coun_name": "Bouvet Island",
    "country_code": "BV",
    "phone_code": 47
  },
  {
    "coun_id": 193,
    "coun_name": "Botswana",
    "country_code": "BW",
    "phone_code": 267
  },
  {
    "coun_id": 246,
    "coun_name": "Belarus",
    "country_code": "BY",
    "phone_code": 375
  },
  {
    "coun_id": 247,
    "coun_name": "Belize",
    "country_code": "BZ",
    "phone_code": 501
  },
  {
    "coun_id": 82,
    "coun_name": "Canada",
    "country_code": "CA",
    "phone_code": 1
  },
  {
    "coun_id": 204,
    "coun_name": "Cocos (Keeling) Islands",
    "country_code": "CC",
    "phone_code": 61
  },
  {
    "coun_id": 216,
    "coun_name": "The Democratic Republic Of The Congo",
    "country_code": "CD",
    "phone_code": 243
  },
  {
    "coun_id": 201,
    "coun_name": "Central African Republic",
    "country_code": "CF",
    "phone_code": 236
  },
  {
    "coun_id": 206,
    "coun_name": "Congo",
    "country_code": "CG",
    "phone_code": 242
  },
  {
    "coun_id": 9,
    "coun_name": "Switzerland",
    "country_code": "CH",
    "phone_code": 41
  },
  {
    "coun_id": 208,
    "coun_name": "Côte D'Ivoire",
    "country_code": "CI",
    "phone_code": 225
  },
  {
    "coun_id": 207,
    "coun_name": "Cook Islands",
    "country_code": "CK",
    "phone_code": 682
  },
  {
    "coun_id": 25,
    "coun_name": "Chile",
    "country_code": "CL",
    "phone_code": 56
  },
  {
    "coun_id": 199,
    "coun_name": "Cameroon",
    "country_code": "CM",
    "phone_code": 237
  },
  {
    "coun_id": 115,
    "coun_name": "China",
    "country_code": "CN",
    "phone_code": 86
  },
  {
    "coun_id": 73,
    "coun_name": "Colombia",
    "country_code": "CO",
    "phone_code": 57
  },
  {
    "coun_id": 74,
    "coun_name": "Costa Rica",
    "country_code": "CR",
    "phone_code": 506
  },
  {
    "coun_id": 234,
    "coun_name": "Serbia and Montenegro",
    "country_code": "CS",
    "phone_code": 381
  },
  {
    "coun_id": 117,
    "coun_name": "Cuba",
    "country_code": "CU",
    "phone_code": 53
  },
  {
    "coun_id": 7,
    "coun_name": "Curacao",
    "country_code": "CUR",
    "phone_code": 599
  },
  {
    "coun_id": 200,
    "coun_name": "Cape Verde",
    "country_code": "CV",
    "phone_code": 238
  },
  {
    "coun_id": 203,
    "coun_name": "Christmas Island",
    "country_code": "CX",
    "phone_code": 61
  },
  {
    "coun_id": 100,
    "coun_name": "Cyprus",
    "country_code": "CY",
    "phone_code": 357
  },
  {
    "coun_id": 85,
    "coun_name": "Czech Republic",
    "country_code": "CZ",
    "phone_code": 420
  },
  {
    "coun_id": 72,
    "coun_name": "Germany",
    "country_code": "DE",
    "phone_code": 49
  },
  {
    "coun_id": 119,
    "coun_name": "Djibouti",
    "country_code": "DJ",
    "phone_code": 253
  },
  {
    "coun_id": 86,
    "coun_name": "Denmark",
    "country_code": "DK",
    "phone_code": 45
  },
  {
    "coun_id": 29,
    "coun_name": "Dominica",
    "country_code": "DM",
    "phone_code": "1-767"
  },
  {
    "coun_id": 101,
    "coun_name": "Dominican Republic",
    "country_code": "DO",
    "phone_code": "1-809, 1-829, 1-849"
  },
  {
    "coun_id": 238,
    "coun_name": "Algeria",
    "country_code": "DZ",
    "phone_code": 213
  },
  {
    "coun_id": 28,
    "coun_name": "Ecuador",
    "country_code": "EC",
    "phone_code": 593
  },
  {
    "coun_id": 122,
    "coun_name": "Estonia",
    "country_code": "EE",
    "phone_code": 372
  },
  {
    "coun_id": 19,
    "coun_name": "Egypt",
    "country_code": "EG",
    "phone_code": 20
  },
  {
    "coun_id": 231,
    "coun_name": "Western Sahara",
    "country_code": "EH",
    "phone_code": 212
  },
  {
    "coun_id": 121,
    "coun_name": "Eritrea",
    "country_code": "ER",
    "phone_code": 291
  },
  {
    "coun_id": 16,
    "coun_name": "Spain",
    "country_code": "ES",
    "phone_code": 34
  },
  {
    "coun_id": 123,
    "coun_name": "Ethiopia",
    "country_code": "ET",
    "phone_code": 251
  },
  {
    "coun_id": 13,
    "coun_name": "Finland",
    "country_code": "FI",
    "phone_code": 358
  },
  {
    "coun_id": 109,
    "coun_name": "Fiji",
    "country_code": "FJ",
    "phone_code": 679
  },
  {
    "coun_id": 124,
    "coun_name": "Falkland Islands (Malvinas)",
    "country_code": "FK",
    "phone_code": 500
  },
  {
    "coun_id": 126,
    "coun_name": "Micronesia",
    "country_code": "FM",
    "phone_code": 691
  },
  {
    "coun_id": 125,
    "coun_name": "Faroe Islands",
    "country_code": "FO",
    "phone_code": 298
  },
  {
    "coun_id": 37,
    "coun_name": "France",
    "country_code": "FR",
    "phone_code": 33
  },
  {
    "coun_id": 130,
    "coun_name": "Gabon",
    "country_code": "GA",
    "phone_code": 241
  },
  {
    "coun_id": 112,
    "coun_name": "United Kingdom",
    "country_code": "GB",
    "phone_code": 44
  },
  {
    "coun_id": 136,
    "coun_name": "Grenada",
    "country_code": "GD",
    "phone_code": "1-473"
  },
  {
    "coun_id": 132,
    "coun_name": "Georgia",
    "country_code": "GE",
    "phone_code": 995
  },
  {
    "coun_id": 127,
    "coun_name": "French Guiana",
    "country_code": "GF",
    "phone_code": 594
  },
  {
    "coun_id": 137,
    "coun_name": "Guernsey",
    "country_code": "GG",
    "phone_code": "44-1481"
  },
  {
    "coun_id": 133,
    "coun_name": "Ghana",
    "country_code": "GH",
    "phone_code": 233
  },
  {
    "coun_id": 134,
    "coun_name": "Gibraltar",
    "country_code": "GI",
    "phone_code": 350
  },
  {
    "coun_id": 135,
    "coun_name": "Greenland",
    "country_code": "GL",
    "phone_code": 299
  },
  {
    "coun_id": 131,
    "coun_name": "Gambia",
    "country_code": "GM",
    "phone_code": 220
  },
  {
    "coun_id": 138,
    "coun_name": "Guinea",
    "country_code": "GN",
    "phone_code": 224
  },
  {
    "coun_id": 38,
    "coun_name": "Guadeloupe",
    "country_code": "GP",
    "phone_code": 590
  },
  {
    "coun_id": 120,
    "coun_name": "Equatorial Guinea",
    "country_code": "GQ",
    "phone_code": 240
  },
  {
    "coun_id": 42,
    "coun_name": "Greece",
    "country_code": "GR",
    "phone_code": 30
  },
  {
    "coun_id": 45,
    "coun_name": "Guatemala",
    "country_code": "GT",
    "phone_code": 502
  },
  {
    "coun_id": 6,
    "coun_name": "Guam",
    "country_code": "GU",
    "phone_code": "1-671"
  },
  {
    "coun_id": 139,
    "coun_name": "Guinea-Bissau",
    "country_code": "GW",
    "phone_code": 245
  },
  {
    "coun_id": 140,
    "coun_name": "Guyana",
    "country_code": "GY",
    "phone_code": 592
  },
  {
    "coun_id": 51,
    "coun_name": "Hong Kong",
    "country_code": "HK",
    "phone_code": 852
  },
  {
    "coun_id": 142,
    "coun_name": "Heard Island And Mcdonald Islands",
    "country_code": "HM",
    "phone_code": 672
  },
  {
    "coun_id": 87,
    "coun_name": "Honduras",
    "country_code": "HN",
    "phone_code": 504
  },
  {
    "coun_id": 84,
    "coun_name": "Croatia",
    "country_code": "HR",
    "phone_code": 385
  },
  {
    "coun_id": 141,
    "coun_name": "Haiti",
    "country_code": "HT",
    "phone_code": 509
  },
  {
    "coun_id": 14,
    "coun_name": "Hungary",
    "country_code": "HU",
    "phone_code": 36
  },
  {
    "coun_id": 5,
    "coun_name": "Indonesia",
    "country_code": "ID",
    "phone_code": 62
  },
  {
    "coun_id": 44,
    "coun_name": "Ireland",
    "country_code": "IE",
    "phone_code": 353
  },
  {
    "coun_id": 114,
    "coun_name": "Israel",
    "country_code": "IL",
    "phone_code": 972
  },
  {
    "coun_id": 145,
    "coun_name": "Isle Of Man",
    "country_code": "IM",
    "phone_code": "44-1624"
  },
  {
    "coun_id": 41,
    "coun_name": "India",
    "country_code": "IN",
    "phone_code": 91
  },
  {
    "coun_id": 195,
    "coun_name": "British Indian Ocean Territory",
    "country_code": "IO",
    "phone_code": 246
  },
  {
    "coun_id": 144,
    "coun_name": "Iraq",
    "country_code": "IQ",
    "phone_code": 964
  },
  {
    "coun_id": 43,
    "coun_name": "Iran",
    "country_code": "IR",
    "phone_code": 98
  },
  {
    "coun_id": 40,
    "coun_name": "Iceland",
    "country_code": "IS",
    "phone_code": 354
  },
  {
    "coun_id": 4,
    "coun_name": "Italy",
    "country_code": "IT",
    "phone_code": 39
  },
  {
    "coun_id": 146,
    "coun_name": "Jersey",
    "country_code": "JE",
    "phone_code": "44-1534"
  },
  {
    "coun_id": 57,
    "coun_name": "Jamaica",
    "country_code": "JM",
    "phone_code": "1-876"
  },
  {
    "coun_id": 88,
    "coun_name": "Jordan",
    "country_code": "JO",
    "phone_code": 962
  },
  {
    "coun_id": 75,
    "coun_name": "Japan",
    "country_code": "JP",
    "phone_code": 81
  },
  {
    "coun_id": 11,
    "coun_name": "Kenya",
    "country_code": "KE",
    "phone_code": 254
  },
  {
    "coun_id": 149,
    "coun_name": "Kyrgyzstan",
    "country_code": "KG",
    "phone_code": 996
  },
  {
    "coun_id": 198,
    "coun_name": "Cambodia",
    "country_code": "KH",
    "phone_code": 855
  },
  {
    "coun_id": 148,
    "coun_name": "Kiribati",
    "country_code": "KI",
    "phone_code": 686
  },
  {
    "coun_id": 205,
    "coun_name": "Comoros",
    "country_code": "KM",
    "phone_code": 269
  },
  {
    "coun_id": 8,
    "coun_name": "Saint Kitts and Nevis",
    "country_code": "KN",
    "phone_code": "1-869"
  },
  {
    "coun_id": 118,
    "coun_name": "North Korea",
    "country_code": "KP",
    "phone_code": 850
  },
  {
    "coun_id": 93,
    "coun_name": "South Korea",
    "country_code": "KR",
    "phone_code": 82
  },
  {
    "coun_id": 103,
    "coun_name": "Kuwait",
    "country_code": "KW",
    "phone_code": 965
  },
  {
    "coun_id": 99,
    "coun_name": "Cayman Islands",
    "country_code": "KY",
    "phone_code": "1-345"
  },
  {
    "coun_id": 147,
    "coun_name": "Kazakhstan",
    "country_code": "KZ",
    "phone_code": 7
  },
  {
    "coun_id": 150,
    "coun_name": "Lao People'S Democratic Republic",
    "country_code": "LA",
    "phone_code": 856
  },
  {
    "coun_id": 104,
    "coun_name": "Lebanon",
    "country_code": "LB",
    "phone_code": 961
  },
  {
    "coun_id": 61,
    "coun_name": "Saint Lucia",
    "country_code": "LC",
    "phone_code": "1-758"
  },
  {
    "coun_id": 48,
    "coun_name": "Liechtenstein",
    "country_code": "LI",
    "phone_code": 423
  },
  {
    "coun_id": 63,
    "coun_name": "Sri Lanka",
    "country_code": "LK",
    "phone_code": 94
  },
  {
    "coun_id": 153,
    "coun_name": "Liberia",
    "country_code": "LR",
    "phone_code": 231
  },
  {
    "coun_id": 152,
    "coun_name": "Lesotho",
    "country_code": "LS",
    "phone_code": 266
  },
  {
    "coun_id": 154,
    "coun_name": "Lithuania",
    "country_code": "LT",
    "phone_code": 370
  },
  {
    "coun_id": 30,
    "coun_name": "Luxembourg",
    "country_code": "LU",
    "phone_code": 352
  },
  {
    "coun_id": 151,
    "coun_name": "Latvia",
    "country_code": "LV",
    "phone_code": 371
  },
  {
    "coun_id": 95,
    "coun_name": "Libya",
    "country_code": "LY",
    "phone_code": 218
  },
  {
    "coun_id": 20,
    "coun_name": "Morocco",
    "country_code": "MA",
    "phone_code": 212
  },
  {
    "coun_id": 39,
    "coun_name": "Monaco",
    "country_code": "MC",
    "phone_code": 377
  },
  {
    "coun_id": 178,
    "coun_name": "Republic Of Moldova",
    "country_code": "MD",
    "phone_code": 373
  },
  {
    "coun_id": 164,
    "coun_name": "Montenegro",
    "country_code": "ME",
    "phone_code": 382
  },
  {
    "coun_id": 50,
    "coun_name": "Saint Martin",
    "country_code": "MF",
    "phone_code": 590
  },
  {
    "coun_id": 155,
    "coun_name": "Madagascar",
    "country_code": "MG",
    "phone_code": 261
  },
  {
    "coun_id": 159,
    "coun_name": "Marshall Islands",
    "country_code": "MH",
    "phone_code": 692
  },
  {
    "coun_id": 217,
    "coun_name": "Macedonia",
    "country_code": "MK",
    "phone_code": 389
  },
  {
    "coun_id": 158,
    "coun_name": "Mali",
    "country_code": "ML",
    "phone_code": 223
  },
  {
    "coun_id": 167,
    "coun_name": "Myanmar",
    "country_code": "MM",
    "phone_code": 95
  },
  {
    "coun_id": 163,
    "coun_name": "Mongolia",
    "country_code": "MN",
    "phone_code": 976
  },
  {
    "coun_id": 54,
    "coun_name": "Macau",
    "country_code": "MO",
    "phone_code": 853
  },
  {
    "coun_id": 102,
    "coun_name": "Northern Mariana Islands",
    "country_code": "MP",
    "phone_code": "1-670"
  },
  {
    "coun_id": 160,
    "coun_name": "Martinique",
    "country_code": "MQ",
    "phone_code": 596
  },
  {
    "coun_id": 161,
    "coun_name": "Mauritania",
    "country_code": "MR",
    "phone_code": 222
  },
  {
    "coun_id": 165,
    "coun_name": "Montserrat",
    "country_code": "MS",
    "phone_code": "1-664"
  },
  {
    "coun_id": 21,
    "coun_name": "Malta",
    "country_code": "MT",
    "phone_code": 356
  },
  {
    "coun_id": 52,
    "coun_name": "Mauritius",
    "country_code": "MU",
    "phone_code": 230
  },
  {
    "coun_id": 157,
    "coun_name": "Maldives",
    "country_code": "MV",
    "phone_code": 960
  },
  {
    "coun_id": 156,
    "coun_name": "Malawi",
    "country_code": "MW",
    "phone_code": 265
  },
  {
    "coun_id": 47,
    "coun_name": "Mexico",
    "country_code": "MX",
    "phone_code": 52
  },
  {
    "coun_id": 46,
    "coun_name": "Malaysia",
    "country_code": "MY",
    "phone_code": 60
  },
  {
    "coun_id": 166,
    "coun_name": "Mozambique",
    "country_code": "MZ",
    "phone_code": 258
  },
  {
    "coun_id": 10,
    "coun_name": "Namibia",
    "country_code": "NA",
    "phone_code": 264
  },
  {
    "coun_id": 27,
    "coun_name": "New Caledonia",
    "country_code": "NC",
    "phone_code": 687
  },
  {
    "coun_id": 169,
    "coun_name": "Niger",
    "country_code": "NE",
    "phone_code": 227
  },
  {
    "coun_id": 172,
    "coun_name": "Norfolk Island",
    "country_code": "NF",
    "phone_code": 672
  },
  {
    "coun_id": 170,
    "coun_name": "Nigeria",
    "country_code": "NG",
    "phone_code": 234
  },
  {
    "coun_id": 35,
    "coun_name": "Nicaragua",
    "country_code": "NI",
    "phone_code": 505
  },
  {
    "coun_id": 106,
    "coun_name": "Netherlands",
    "country_code": "NL",
    "phone_code": 31
  },
  {
    "coun_id": 59,
    "coun_name": "Norway",
    "country_code": "NO",
    "phone_code": 47
  },
  {
    "coun_id": 105,
    "coun_name": "Nepal",
    "country_code": "NP",
    "phone_code": 977
  },
  {
    "coun_id": 168,
    "coun_name": "Nauru",
    "country_code": "NR",
    "phone_code": 674
  },
  {
    "coun_id": 171,
    "coun_name": "Niue",
    "country_code": "NU",
    "phone_code": 683
  },
  {
    "coun_id": 32,
    "coun_name": "New Zealand",
    "country_code": "NZ",
    "phone_code": 64
  },
  {
    "coun_id": 60,
    "coun_name": "Oman",
    "country_code": "OM",
    "phone_code": 968
  },
  {
    "coun_id": 111,
    "coun_name": "Panama",
    "country_code": "PA",
    "phone_code": 507
  },
  {
    "coun_id": 17,
    "coun_name": "Peru",
    "country_code": "PE",
    "phone_code": 51
  },
  {
    "coun_id": 128,
    "coun_name": "French Polynesia",
    "country_code": "PF",
    "phone_code": 689
  },
  {
    "coun_id": 175,
    "coun_name": "Papua New Guinea",
    "country_code": "PG",
    "phone_code": 675
  },
  {
    "coun_id": 53,
    "coun_name": "Philippines",
    "country_code": "PH",
    "phone_code": 63
  },
  {
    "coun_id": 36,
    "coun_name": "Pakistan",
    "country_code": "PK",
    "phone_code": 92
  },
  {
    "coun_id": 76,
    "coun_name": "Poland",
    "country_code": "PL",
    "phone_code": 48
  },
  {
    "coun_id": 182,
    "coun_name": "Saint Pierre And Miquelon",
    "country_code": "PM",
    "phone_code": 508
  },
  {
    "coun_id": 177,
    "coun_name": "Pitcairn",
    "country_code": "PN",
    "phone_code": 64
  },
  {
    "coun_id": 81,
    "coun_name": "Puerto Rico",
    "country_code": "PR",
    "phone_code": "1-787, 1-939"
  },
  {
    "coun_id": 173,
    "coun_name": "Occupied Palestinian Territory",
    "country_code": "PS",
    "phone_code": 970
  },
  {
    "coun_id": 89,
    "coun_name": "Portugal",
    "country_code": "PT",
    "phone_code": 351
  },
  {
    "coun_id": 174,
    "coun_name": "Palau",
    "country_code": "PW",
    "phone_code": 680
  },
  {
    "coun_id": 176,
    "coun_name": "Paraguay",
    "country_code": "PY",
    "phone_code": 595
  },
  {
    "coun_id": 58,
    "coun_name": "Qatar",
    "country_code": "QA",
    "phone_code": 974
  },
  {
    "coun_id": 179,
    "coun_name": "Réunion",
    "country_code": "RE",
    "phone_code": 262
  },
  {
    "coun_id": 34,
    "coun_name": "Romania",
    "country_code": "RO",
    "phone_code": 40
  },
  {
    "coun_id": 90,
    "coun_name": "Serbia",
    "country_code": "RS",
    "phone_code": 381
  },
  {
    "coun_id": 49,
    "coun_name": "Russia",
    "country_code": "RU",
    "phone_code": 7
  },
  {
    "coun_id": 180,
    "coun_name": "Rwanda",
    "country_code": "RW",
    "phone_code": 250
  },
  {
    "coun_id": 107,
    "coun_name": "Saudi Arabia",
    "country_code": "SA",
    "phone_code": 966
  },
  {
    "coun_id": 190,
    "coun_name": "Solomon Islands",
    "country_code": "SB",
    "phone_code": 677
  },
  {
    "coun_id": 188,
    "coun_name": "Seychelles",
    "country_code": "SC",
    "phone_code": 248
  },
  {
    "coun_id": 210,
    "coun_name": "Sudan",
    "country_code": "SD",
    "phone_code": 249
  },
  {
    "coun_id": 18,
    "coun_name": "Sweden",
    "country_code": "SE",
    "phone_code": 46
  },
  {
    "coun_id": 108,
    "coun_name": "Singapore",
    "country_code": "SG",
    "phone_code": 65
  },
  {
    "coun_id": 181,
    "coun_name": "Saint Helena",
    "country_code": "SH",
    "phone_code": 290
  },
  {
    "coun_id": 91,
    "coun_name": "Slovenia",
    "country_code": "SI",
    "phone_code": 386
  },
  {
    "coun_id": 212,
    "coun_name": "Svalbard And Jan Mayen",
    "country_code": "SJ",
    "phone_code": 47
  },
  {
    "coun_id": 110,
    "coun_name": "Slovakia",
    "country_code": "SK",
    "phone_code": 421
  },
  {
    "coun_id": 189,
    "coun_name": "Sierra Leone",
    "country_code": "SL",
    "phone_code": 232
  },
  {
    "coun_id": 185,
    "coun_name": "San Marino",
    "country_code": "SM",
    "phone_code": 378
  },
  {
    "coun_id": 187,
    "coun_name": "Senegal",
    "country_code": "SN",
    "phone_code": 221
  },
  {
    "coun_id": 191,
    "coun_name": "Somalia",
    "country_code": "SO",
    "phone_code": 252
  },
  {
    "coun_id": 211,
    "coun_name": "Suriname",
    "country_code": "SR",
    "phone_code": 597
  },
  {
    "coun_id": 186,
    "coun_name": "Sao Tome And Principe",
    "country_code": "ST",
    "phone_code": 239
  },
  {
    "coun_id": 83,
    "coun_name": "El Salvador",
    "country_code": "SV",
    "phone_code": 503
  },
  {
    "coun_id": 214,
    "coun_name": "Syria",
    "country_code": "SY",
    "phone_code": 963
  },
  {
    "coun_id": 213,
    "coun_name": "Swaziland",
    "country_code": "SZ",
    "phone_code": 268
  },
  {
    "coun_id": 113,
    "coun_name": "Turks and Caicos Islands",
    "country_code": "TC",
    "phone_code": "1-649"
  },
  {
    "coun_id": 202,
    "coun_name": "Chad",
    "country_code": "TD",
    "phone_code": 235
  },
  {
    "coun_id": 129,
    "coun_name": "French Southern Territories",
    "country_code": "TF",
    "phone_code": 262
  },
  {
    "coun_id": 219,
    "coun_name": "Togo",
    "country_code": "TG",
    "phone_code": 228
  },
  {
    "coun_id": 62,
    "coun_name": "Thailand",
    "country_code": "TH",
    "phone_code": 66
  },
  {
    "coun_id": 215,
    "coun_name": "Tajikistan",
    "country_code": "TJ",
    "phone_code": 992
  },
  {
    "coun_id": 220,
    "coun_name": "Tokelau",
    "country_code": "TK",
    "phone_code": 690
  },
  {
    "coun_id": 218,
    "coun_name": "East Timor",
    "country_code": "TL",
    "phone_code": 670
  },
  {
    "coun_id": 224,
    "coun_name": "Turkmenistan",
    "country_code": "TM",
    "phone_code": 993
  },
  {
    "coun_id": 223,
    "coun_name": "Tunisia",
    "country_code": "TN",
    "phone_code": 216
  },
  {
    "coun_id": 221,
    "coun_name": "Tonga",
    "country_code": "TO",
    "phone_code": 676
  },
  {
    "coun_id": 66,
    "coun_name": "Turkey",
    "country_code": "TR",
    "phone_code": 90
  },
  {
    "coun_id": 222,
    "coun_name": "Trinidad And Tobago",
    "country_code": "TT",
    "phone_code": "1-868"
  },
  {
    "coun_id": 225,
    "coun_name": "Tuvalu",
    "country_code": "TV",
    "phone_code": 688
  },
  {
    "coun_id": 80,
    "coun_name": "Taiwan",
    "country_code": "TW",
    "phone_code": 886
  },
  {
    "coun_id": 227,
    "coun_name": "United Republic Of Tanzania",
    "country_code": "TZ",
    "phone_code": 255
  },
  {
    "coun_id": 64,
    "coun_name": "Ukraine",
    "country_code": "UA",
    "phone_code": 380
  },
  {
    "coun_id": 226,
    "coun_name": "Uganda",
    "country_code": "UG",
    "phone_code": 256
  },
  {
    "coun_id": 228,
    "coun_name": "United States Minor Outlying Islands",
    "country_code": "UM",
    "phone_code": 268
  },
  {
    "coun_id": 79,
    "coun_name": "United States",
    "country_code": "US",
    "phone_code": 1
  },
  {
    "coun_id": 94,
    "coun_name": "Uruguay",
    "country_code": "UY",
    "phone_code": 598
  },
  {
    "coun_id": 229,
    "coun_name": "Uzbekistan",
    "country_code": "UZ",
    "phone_code": 998
  },
  {
    "coun_id": 143,
    "coun_name": "Holy See (Vatican City State)",
    "country_code": "VA",
    "phone_code": 379
  },
  {
    "coun_id": 183,
    "coun_name": "Saint Vincent And The Grenadines",
    "country_code": "VC",
    "phone_code": "1-784"
  },
  {
    "coun_id": 65,
    "coun_name": "Venezuela",
    "country_code": "VE",
    "phone_code": 58
  },
  {
    "coun_id": 67,
    "coun_name": "British Virgin Islands",
    "country_code": "VG",
    "phone_code": "1-284"
  },
  {
    "coun_id": 68,
    "coun_name": "U.S. Virgin Islands",
    "country_code": "VI",
    "phone_code": "1-340"
  },
  {
    "coun_id": 116,
    "coun_name": "Vietnam",
    "country_code": "VN",
    "phone_code": 84
  },
  {
    "coun_id": 33,
    "coun_name": "Vanuatu",
    "country_code": "VU",
    "phone_code": 678
  },
  {
    "coun_id": 230,
    "coun_name": "Wallis And Futuna",
    "country_code": "WF",
    "phone_code": 681
  },
  {
    "coun_id": 184,
    "coun_name": "Samoa",
    "country_code": "WS",
    "phone_code": 685
  },
  {
    "coun_id": 69,
    "coun_name": "Yemen",
    "country_code": "YE",
    "phone_code": 967
  },
  {
    "coun_id": 162,
    "coun_name": "Mayotte",
    "country_code": "YT",
    "phone_code": 262
  },
  {
    "coun_id": 92,
    "coun_name": "South Africa",
    "country_code": "ZA",
    "phone_code": 27
  },
  {
    "coun_id": 232,
    "coun_name": "Zambia",
    "country_code": "ZM",
    "phone_code": 260
  },
  {
    "coun_id": 233,
    "coun_name": "Zimbabwe",
    "country_code": "ZW",
    "phone_code": 263
  }]
};

var countryArray = countryCodeData.countries;
countryArray.sort(function(a, b) {
 var nameA=a.coun_name, nameB=b.coun_name;
 if (nameA < nameB)
  return -1;
 if (nameA > nameB)
  return 1;
 return 0;
});

for(var country in countryArray) {
  var text = countryArray[country].coun_name + " (" + countryArray[country].phone_code +")";
  var val = countryArray[country].coun_id;
  select.add(new Option(text, val));
}



