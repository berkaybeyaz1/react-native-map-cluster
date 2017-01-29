/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import ClusterMap from './cluster';
const MARKERS = [
    {
      "AdvertDetailLink": "\/ilandetay\/0-4\/yatirimlik-cadde-ustu-daire",
      "AdvertID": 9172252,
      "AdvertTitle": "yatırımlık cadde üstü daire",
      "CurrencyCode": "TL",
      "Latitude": 29.155923843383789,
      "Longitude": 40.918373107910156,
      "Price": 194000.00,
      "ThumbImage": null
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/basaran-caddesinde--3-yillik--asansorlu--ankastre-setli--klimali--cift-girisli--balkonlu--terasli--a--",
      "AdvertID": 9170823,
      "AdvertTitle": "BAŞARAN CADDESİNDE. 3 YILLIK. ASANSÖRLÜ. ANKASTRE SETLİ. KLİMALI. ÇİFT GİRİSLİ. BALKONLU. TERASLI. A..",
      "CurrencyCode": "TL",
      "Latitude": 28.904352188110352,
      "Longitude": 41.06671142578125,
      "Price": 500000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/10\/basaran-caddesinde--3-yillik--asansorlu--ankast...-2-284120495.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/luks-ferah-havuzlu-site---kombili-firsat-daire",
      "AdvertID": 9145811,
      "AdvertTitle": "LÜKS FERAH HAVUZLU SİTE \/ KOMBİLİ FIRSAT DAİRE ",
      "CurrencyCode": "TL",
      "Latitude": 29.137393951416016,
      "Longitude": 40.911613464355469,
      "Price": 495000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/27\/luks-ferah-havuzlu-site---kombili-firsat-daire--2-282691131.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-2\/acil-satilik-ev-110-m2-ici-yapili-sefakoy-armoni-avm-yani",
      "AdvertID": 9172192,
      "AdvertTitle": "Acil SATILIK ev 110 m2 İçi yapılı Sefaköy Armoni avm yanı",
      "CurrencyCode": "TL",
      "Latitude": 28.797224044799805,
      "Longitude": 41.005447387695313,
      "Price": 220000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/11\/acil-satilik-ev-110-m2-ici-yapili-sefakoy-armon...-2-284195360.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-7\/umraniyede-netasin-karsisinda-canpark-avm-ye-yakin-her-ise-uygun-arsa",
      "AdvertID": 9173336,
      "AdvertTitle": "ümraniyede netaşın karsısında canpark avm ye yakın her işe uygun arsa",
      "CurrencyCode": "TL",
      "Latitude": 29.110624313354492,
      "Longitude": 41.023258209228516,
      "Price": 5000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/11\/umraniyede-netasin-karsisinda-canpark-avm-ye-ya...-2-284259851.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-2\/kasimpasa-merkez",
      "AdvertID": 9173117,
      "AdvertTitle": "kasımpaşa merkez",
      "CurrencyCode": "TL",
      "Latitude": 28.966690063476563,
      "Longitude": 41.036201477050781,
      "Price": 330000.00,
      "ThumbImage": null
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/dubleks-daire-satilik",
      "AdvertID": 9175424,
      "AdvertTitle": "dubleks daire satılık",
      "CurrencyCode": "TL",
      "Latitude": 28.845832824707031,
      "Longitude": 41.039306640625,
      "Price": 355000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/12\/dubleks-daire-satilik-2-284384778.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/bagcilar-demirkapi-da-satilik-2-katli-bina-var-yerin-kurulus-85-ustler-102",
      "AdvertID": 9175456,
      "AdvertTitle": "Bagcılar Demirkapı da satılık 2 katlı bina var yerin kuruluş 85 üstler 102",
      "CurrencyCode": "TL",
      "Latitude": 28.832456588745117,
      "Longitude": 41.048030853271484,
      "Price": 625.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/12\/bagcilar-demirkapi-da-satilik-2-katli-bina-var-...-2-284386606.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-2\/bagcilar-atestugla-da-satilik-site-yuksek-giris-kat-balkonlu-govenlikli-cocuk-oyun-barkli-oto-parkal--",
      "AdvertID": 9175460,
      "AdvertTitle": "Bagcılar Ateştugla da satılık site yüksek giriş kat balkonlu gövenlikli çocuk oyun barklı oto parkal..",
      "CurrencyCode": "TL",
      "Latitude": 28.833036422729492,
      "Longitude": 41.052001953125,
      "Price": 32000.00,
      "ThumbImage": null
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/erenkoyde-sahibinden-satilik-dubleks",
      "AdvertID": 9175482,
      "AdvertTitle": "ERENKÖYDE SAHİBİNDEN SATILIK DUBLEKS",
      "CurrencyCode": "TL",
      "Latitude": 29.082614898681641,
      "Longitude": 40.970550537109375,
      "Price": 1250000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/13\/erenkoyde-sahibinden-satilik-dubleks-2-284439054.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-2\/acill-satilik-eyup-circir-mah--metroya-yakin",
      "AdvertID": 9158680,
      "AdvertTitle": "acill satılık eyüp çırçır mah. metroya yakin",
      "CurrencyCode": "TL",
      "Latitude": 28.942134857177734,
      "Longitude": 41.082656860351563,
      "Price": 335000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/14\/acill-satilik-eyup-circir-mah--metroya-yakin-2-284521715.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/sahibinden-satilik-super-lux-daire",
      "AdvertID": 9072144,
      "AdvertTitle": "SAHİBİNDEN SATILIK SÜPER LÜX DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.776668548583984,
      "Longitude": 41.001716613769531,
      "Price": 430000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/14\/sahibinden-satilik-super-lux-daire-2-284522517.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/tasdelen-sultan-evlerinde-sahibinden-kiralik-luks-daire",
      "AdvertID": 9013139,
      "AdvertTitle": "Taşdelen Sultan Evlerinde Sahibinden Kiralık Lüks Daire",
      "CurrencyCode": "TL",
      "Latitude": 29.232688903808594,
      "Longitude": 41.028648376464844,
      "Price": 1300.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/08\/tasdelen-sultan-evlerinde-sahibinden-kiralik-lu...-2-272762946.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/halkali-istasyon-mahallesinde-topraktan-satilik-daireler-",
      "AdvertID": 9179836,
      "AdvertTitle": "Halkalı İstasyon Mahallesinde Topraktan Satılık Daireler.",
      "CurrencyCode": "TL",
      "Latitude": 28.77241325378418,
      "Longitude": 41.033401489257813,
      "Price": 190000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/14\/halkali-istasyon-mahallesinde-topraktan-satilik...-2-284642484.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/silede-kiralik-daire",
      "AdvertID": 9182313,
      "AdvertTitle": "şilede kiralık daire",
      "CurrencyCode": "TL",
      "Latitude": 29.080013275146484,
      "Longitude": 41.006008148193359,
      "Price": 1100.00,
      "ThumbImage": null
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65246-58\/kordonboyu-mahallesinde-sahil-kesimine-2--binada-cad-uzerinde--m",
      "AdvertID": 9167728,
      "AdvertTitle": "KORDONBOYU MAHALLESİNDE SAHİL KESİMİNE 2. BİNADA CAD ÜZERİNDE  M",
      "CurrencyCode": "TL",
      "Latitude": 29.17432975769043,
      "Longitude": 40.892230987548828,
      "Price": 425000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/16\/kordonboyu-mahallesinde-sahil-kesimine-2--binad...-2-284769158.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/51962-381\/tem-avrupa-konutlarinda-satilik-3-1-daire-920-000-00tl",
      "AdvertID": 8961424,
      "AdvertTitle": "TEM AVRUPA KONUTLARINDA SATILIK 3+1 DAİRE 920.000.00TL",
      "CurrencyCode": "TL",
      "Latitude": 28.912025451660156,
      "Longitude": 41.088279724121094,
      "Price": 920000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/08\/tem-avrupa-konutlarinda-satilik-3-1-daire-870-0...-2-268786309.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/58146-981\/adnan-saygun-cad-uzerinde-asansor-ve-otoparkli--full-yapili-dair",
      "AdvertID": 8950966,
      "AdvertTitle": "ADNAN SAYGUN CAD.ÜZERİNDE ASANSÖR VE OTOPARKLI, FULL YAPILI DAİR",
      "CurrencyCode": "TL",
      "Latitude": 29.029767990112305,
      "Longitude": 41.070034027099609,
      "Price": 1230000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/17\/adnan-saygun-cad-uzerinde-asansor-ve-otoparkli-...-2-278204014.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/esenyurt-kiptas-toplu-konutlarin-hemen-yaninda-krediye-uygun-ara-kar-daireler",
      "AdvertID": 9181981,
      "AdvertTitle": "esenyurt kiptaş toplu konutların hemen yanında krediye uygun ara kar daireler",
      "CurrencyCode": "TL",
      "Latitude": 28.865777969360352,
      "Longitude": 41.029350280761719,
      "Price": 175000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/16\/esenyurt-kiptas-toplu-konutlarin-hemen-yaninda-...-2-284767023.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/6945-210\/besiktas-ihlamur-caddesine-ikinci-binada",
      "AdvertID": 9182340,
      "AdvertTitle": "BEŞİKTAŞ IHLAMUR CADDESİNE İKİNCİ BİNADA",
      "CurrencyCode": "TL",
      "Latitude": 29.002351760864258,
      "Longitude": 41.046504974365234,
      "Price": 450000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/16\/besiktas-ihlamur-caddesine-ikinci-binada-2-284787907.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/6945-211\/besiktas-merkezde-4-1-kombili--masrafsiz",
      "AdvertID": 9182342,
      "AdvertTitle": "BEŞİKTAŞ MERKEZDE 4 1 KOMBİLİ, MASRAFSIZ",
      "CurrencyCode": "TL",
      "Latitude": 29.001138687133789,
      "Longitude": 41.049808502197266,
      "Price": 2750.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/16\/besiktas-merkezde-4-1-kombili--masrafsiz-2-284788071.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/sahibinden-satilik-2-1-luks-daire",
      "AdvertID": 9182371,
      "AdvertTitle": "SAHİBİNDEN SATILIK 2 1 lüks daire",
      "CurrencyCode": "TL",
      "Latitude": 28.887199401855469,
      "Longitude": 41.184677124023438,
      "Price": 625000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/16\/sahibinden-satilik-2-1-luks-daire-2-284790370.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-8\/sahibinden",
      "AdvertID": 9185890,
      "AdvertTitle": "sahibinden",
      "CurrencyCode": "TL",
      "Latitude": 28.978847503662109,
      "Longitude": 41.034183502197266,
      "Price": 5000000.00,
      "ThumbImage": null
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-2\/bulgurluda-yuksek-cirolu-devren-kiralik-cafe-restaurant",
      "AdvertID": 9183592,
      "AdvertTitle": "BULGURLUDA YÜKSEK CİROLU DEVREN KİRALIK CAFE RESTAURANT",
      "CurrencyCode": "TL",
      "Latitude": 29.083797454833984,
      "Longitude": 41.018379211425781,
      "Price": 450000.00,
      "ThumbImage": null
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63884-222\/antasya-projesinde-kiralik-1",
      "AdvertID": 9183677,
      "AdvertTitle": "Antasya projesinde kiralık 1",
      "CurrencyCode": "TL",
      "Latitude": 29.127281188964844,
      "Longitude": 40.992244720458984,
      "Price": 2000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/17\/antasya-projesinde-kiralik-1-2-284865795.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63884-223\/atasehir-manolyalarda-3",
      "AdvertID": 9183694,
      "AdvertTitle": "Ataşehir manolyalarda 3",
      "CurrencyCode": "TL",
      "Latitude": 29.127246856689453,
      "Longitude": 40.992202758789063,
      "Price": 2200.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/17\/atasehir-manolyalarda-3-2-284866463.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65243-10\/bostanci-merkezde-3-1-kiralik-daire",
      "AdvertID": 8964838,
      "AdvertTitle": "BOSTANCI MERKEZDE 3+1 KİRALIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.099996566772461,
      "Longitude": 40.955963134765625,
      "Price": 3000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/09\/bostanci-merkezde-3-1-kiralik-daire-2-269009243.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-5\/satilik-3-adet-daire-takas-olur",
      "AdvertID": 9183790,
      "AdvertTitle": "satılık 3 adet daire takas olur",
      "CurrencyCode": "TL",
      "Latitude": 29.158147811889648,
      "Longitude": 40.916839599609375,
      "Price": 1000000.00,
      "ThumbImage": null
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65243-12\/bostanci-gosteri-merkezine-komsu-satilik-daire",
      "AdvertID": 8964942,
      "AdvertTitle": "BOSTANCI GÖSTERİ MERKEZİNE KOMŞU SATILIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.102067947387695,
      "Longitude": 40.957183837890625,
      "Price": 680000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/09\/bostanci-gosteri-merkezine-komsu-satilik-daire-2-269016088.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63884-225\/varyap-meridian-atasehir-de-muhtesem-dukkan-satilik-ve-kiralik",
      "AdvertID": 9184500,
      "AdvertTitle": "Varyap meridian Ataşehir de Muhteşem dükkan satılık ve kiralık",
      "CurrencyCode": "TL",
      "Latitude": 29.132633209228516,
      "Longitude": 40.984214782714844,
      "Price": 7500000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/17\/varyap-meridian-atasehir-de-muhtesem-dukkan-sat...-2-284912837.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63884-226\/varyap-meridian-da-300-m2-kiralik-on-cepheli-2-katli-dukkan",
      "AdvertID": 9184502,
      "AdvertTitle": "varyap meridian da 300 m2 kiralık ön cepheli 2 katlı dükkan",
      "CurrencyCode": "TL",
      "Latitude": 29.131458282470703,
      "Longitude": 40.983970642089844,
      "Price": 25000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/17\/varyap-meridian-da-300-m2-kiralik-on-cepheli-2-...-2-284912863.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-2\/2-1-daire",
      "AdvertID": 9013151,
      "AdvertTitle": "2 1 daire",
      "CurrencyCode": "TL",
      "Latitude": 28.960241317749023,
      "Longitude": 41.052410125732422,
      "Price": 1150.00,
      "ThumbImage": null
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/sile-akropol-villalari-icerisinde-bulunan-karadeniz-ve-ormanin-essiz-birlesiminde-lux-2-adet-triplex--",
      "AdvertID": 9184578,
      "AdvertTitle": "ŞİLE AKROPOL VİLLALARI İÇERİSİNDE BULUNAN KARADENİZ VE ORMANIN EŞSİZ BİRLEŞİMİNDE LUX 2 adet TRIPLEX..",
      "CurrencyCode": "TL",
      "Latitude": 29.169149398803711,
      "Longitude": 40.954093933105469,
      "Price": 850000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/18\/sile-akropol-villalari-icerisinde-bulunan-karad...-2-284917074.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/kisa-sureligine-3-1-bostanci-gosteri-merkezi-yani-120m2",
      "AdvertID": 9187593,
      "AdvertTitle": "kısa süreliğine 3 1 bostancı gösteri merkezi yanı 120m2",
      "CurrencyCode": "TL",
      "Latitude": 29.101327896118164,
      "Longitude": 40.9572868347168,
      "Price": 650000.00,
      "ThumbImage": null
    },
    {
      "AdvertDetailLink": "\/ilandetay\/31007-718\/sevcan-emlaktan-ozgurluk-parkina--cok-yakin--3-1-sifir-130-m2-da",
      "AdvertID": 8693968,
      "AdvertTitle": "sevcan emlaktan özgürlük parkına  çok yakın  3+1 sıfır 130 m2 da",
      "CurrencyCode": "TL",
      "Latitude": 29.044589996337891,
      "Longitude": 40.984947204589844,
      "Price": 1050000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/02\/20\/sevcan-emlaktan-ozgurluk-parkina--cok-yakin--3-...-2-251717020.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64908-9\/akbulut-emlaktan-satilik-daire",
      "AdvertID": 8670284,
      "AdvertTitle": "Akbulut Emlaktan satılık daire",
      "CurrencyCode": "TL",
      "Latitude": 29.142177581787109,
      "Longitude": 40.943290710449219,
      "Price": 300000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/02\/10\/akbulut-emlaktan-satilik-daire-2-250212747.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-7\/nevizadede",
      "AdvertID": 9138571,
      "AdvertTitle": "nevizadede",
      "CurrencyCode": "TL",
      "Latitude": 28.977212905883789,
      "Longitude": 41.034469604492188,
      "Price": 1400.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/18\/nevizadede-2-284976071.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/61359-47571\/kacmaz-emlak-bagdat-idealtepede-nezih-konumda-genis-on-cephe",
      "AdvertID": 9019221,
      "AdvertTitle": "KAÇMAZ EMLAK BAĞDAT İDEALTEPEDE NEZİH KONUMDA GENİŞ ÖN CEPHE",
      "CurrencyCode": "TL",
      "Latitude": 29.11900520324707,
      "Longitude": 40.93896484375,
      "Price": 825000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/12\/kacmaz-emlak-bagdat-idealtepede-nezih-konumda-g...-2-273344219.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/devren-kiralik-dukkan-yun---tuhafiye",
      "AdvertID": 9186881,
      "AdvertTitle": "DEVREN KİRALIK DÜKKAN YÜN \/ TUHAFİYE ",
      "CurrencyCode": "TL",
      "Latitude": 29.053356170654297,
      "Longitude": 41.049407958984375,
      "Price": 75000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/18\/devren-kiralik-dukkan-yun---tuhafiye--2-285032631.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/sahibinden-3-1--110-m2-giris-kat--sifir-daire",
      "AdvertID": 9020301,
      "AdvertTitle": "SAHİBİNDEN 3+1, 110 m2 GİRİŞ KAT, SIFIR DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.150032043457031,
      "Longitude": 40.946945190429688,
      "Price": 305000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/13\/sahibinden-3-1--110-m2-giris-kat--sifir-daire-2-273456740.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64491-276\/acill-kartal-kizilay-bulvarinda-3yillik-bina-genis-kulanisli-4-2",
      "AdvertID": 9020733,
      "AdvertTitle": "ACİLL KARTAL KIZILAY BULVARINDA 3YILLIK BİNA GENİŞ KULANISLI 4+2",
      "CurrencyCode": "TL",
      "Latitude": 29.18177604675293,
      "Longitude": 40.892276763916016,
      "Price": 345000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/13\/acill-kartal-kizilay-bulvarinda-3yillik-bina-ge...-2-273488876.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/10975-2068\/caglayan-merkezde-kelepir-dubleks",
      "AdvertID": 9190663,
      "AdvertTitle": "çağlayan merkezde kelepir dubleks ",
      "CurrencyCode": "TL",
      "Latitude": 28.982479095458984,
      "Longitude": 41.077884674072266,
      "Price": 320000.00,
      "ThumbImage": null
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/sahibinden-agaoglu-my-city-umraniye-de-satilik-2-1-dublex",
      "AdvertID": 9188806,
      "AdvertTitle": "SAHİBİNDEN AĞAOĞLU MY CİTY ÜMRANİYE DE SATILIK 2 1 dublex",
      "CurrencyCode": "TL",
      "Latitude": 29.126058578491211,
      "Longitude": 41.018722534179688,
      "Price": 515000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/19\/sahibinden-agaoglu-my-city-umraniye-de-satilik-...-2-285152111.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-8\/sahibinden-basinsitesi",
      "AdvertID": 9006225,
      "AdvertTitle": "sahibinden Basınsitesi",
      "CurrencyCode": "TL",
      "Latitude": 28.859004974365234,
      "Longitude": 41.007839202880859,
      "Price": 405000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/22\/sahibinden-basinsitesi-2-278818461.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/61359-47433\/kacmaz-emlak-bagdat-kucukyalida-4-yillik-balkonlu-on-cephe",
      "AdvertID": 8894574,
      "AdvertTitle": "KAÇMAZ EMLAK BAĞDAT KÜÇÜKYALIDA 4 YILLIK BALKONLU ÖN CEPHE",
      "CurrencyCode": "TL",
      "Latitude": 29.111516952514648,
      "Longitude": 40.949760437011719,
      "Price": 610000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/16\/kacmaz-emlak-bagat-kucukyalida-4-yillik-balkonl...-2-265145570.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/sahibinden-2-1-80-m2--satilik-daire",
      "AdvertID": 8392854,
      "AdvertTitle": "SAHİBİNDEN 2+1(80 m2) SATILIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.130485534667969,
      "Longitude": 41.012523651123047,
      "Price": 305000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/10\/15\/sahibinden-2-1-80-m2--satilik-daire-2-230503962.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64356-566\/e-s-gayrimenkul-den-hekimoglu-alipasa-cad-2-1-70m--satilik-daire",
      "AdvertID": 9024493,
      "AdvertTitle": "E&S GAYRİMENKUL'DEN HEKİMOĞLU ALİPAŞA CAD.2+1 70m² SATILIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.93925666809082,
      "Longitude": 41.007663726806641,
      "Price": 320000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/15\/e-s-gayrimenkul-den-hekimoglu-alipasa-cad-2-1-7...-2-273790753.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/50702-2571\/esenler-real52-emlak-mimarsinan-mah-3-1-satilik-y-giris-kod5618",
      "AdvertID": 8381808,
      "AdvertTitle": "ESENLER REAL52 EMLAK MİMARSİNAN MAH.3+1 SATILIK Y.GİRİŞ KOD5618",
      "CurrencyCode": "TL",
      "Latitude": 28.88458251953125,
      "Longitude": 41.03515625,
      "Price": 325000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/10\/10\/esenler-real52-emlak-mimarsinan-mah-3-1-satilik...-2-229806696.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/sahibinden-cekmekoy-de-ormanla-cevrili-site-icinde-cati-dubleksi",
      "AdvertID": 9025342,
      "AdvertTitle": "SAHİBİNDEN ÇEKMEKÖY'DE ORMANLA ÇEVRİLİ SİTE İÇİNDE ÇATI DUBLEKSİ",
      "CurrencyCode": "TL",
      "Latitude": 29.181961059570312,
      "Longitude": 41.034824371337891,
      "Price": 2200000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/15\/sahibinden-cekmekoy-de-ormanla-cevrili-site-ici...-2-273850414.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/50973-696\/heybeli-de-bir-villa---4785-m2-bahce-icinde-490-m2",
      "AdvertID": 4640495,
      "AdvertTitle": "Heybeli'de bir villa...4785 m2 bahçe içinde 490 m2",
      "CurrencyCode": "USD",
      "Latitude": 29.08514404296875,
      "Longitude": 40.876117706298828,
      "Price": 4200000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/01\/10\/heybeli-de-bir-villa---4785-m2-bahce-icinde-490-m2-2-245495804.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/59761-205\/esenler-kemer-mah--satilik-2-1-100m--daire--",
      "AdvertID": 8896186,
      "AdvertTitle": "ESENLER KEMER MAH. SATILIK 2+1 100m² DAİRE .",
      "CurrencyCode": "TL",
      "Latitude": 28.8809757232666,
      "Longitude": 41.049659729003906,
      "Price": 210000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/16\/esenler-kemer-mah--satilik-2-1-100m--daire-225-...-2-265233141.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/48738-1860\/uskudar-merkezde-sifir-bogazmanzarali-dublex-4-1",
      "AdvertID": 8481252,
      "AdvertTitle": "ÜSKÜDAR MERKEZDE SIFIR BOĞAZMANZARALI DUBLEX 4+1",
      "CurrencyCode": "TL",
      "Latitude": 29.012075424194336,
      "Longitude": 41.024398803710938,
      "Price": 1449000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/11\/23\/uskudar-merkezde-sifir-bogazmanzarali-dublex-4-1-2-237319254.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/reishi-cafe-nargile-isinden-anlamadigim-icin-cok-ama-uygun-fiyat-anlamadigim-bi-ise-girdim-ve-oyuzde--",
      "AdvertID": 9195202,
      "AdvertTitle": "Reishi cafe nargile işinden anlamadığım için çok ama uygun fiyat anlamadığım bi işe girdim ve oyüzde..",
      "CurrencyCode": "TL",
      "Latitude": 29.012067794799805,
      "Longitude": 41.034805297851562,
      "Price": 150000.00,
      "ThumbImage": null
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/kelepir-plazada-6-ofis-1-dukkan-ihtiyactan-acil",
      "AdvertID": 9195389,
      "AdvertTitle": "kelepir plazada 6 ofis 1 dükkan ihtiyaçtan acil",
      "CurrencyCode": "TL",
      "Latitude": 29.216701507568359,
      "Longitude": 41.024166107177734,
      "Price": 2250000.00,
      "ThumbImage": null
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65312-98\/gunesli-mah-evren-caddesine-yakin-kosebasi-devren-mini-market",
      "AdvertID": 9048923,
      "AdvertTitle": "GÜNEŞLİ MAH EVREN CADDESİNE YAKIN KÖŞEBAŞI DEVREN MİNİ MARKET",
      "CurrencyCode": "TL",
      "Latitude": 28.826503753662109,
      "Longitude": 41.035560607910156,
      "Price": 70000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/22\/gunesli-mah-evren-caddesine-yakin-kosebasi-devr...-2-285500760.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65312-15\/gunesli-de-ana-cadde-ustu-devren-supermarket--yuksek-kazanc",
      "AdvertID": 8850204,
      "AdvertTitle": "GÜNEŞLİ'DE ANA CADDE ÜSTÜ DEVREN SÜPERMARKET  YÜKSEK KAZANÇ ",
      "CurrencyCode": "TL",
      "Latitude": 28.857706069946289,
      "Longitude": 41.034683227539063,
      "Price": 175000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/22\/gunesli-de-ana-cadde-ustu-devren-supermarket--y...-2-285500779.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/49242-565\/atalarda-cadde-uzeri-20-m2----wcli-herise-uygun-dukkan",
      "AdvertID": 8487713,
      "AdvertTitle": "ATALARDA CADDE ÜZERI 20 M2    WCLİ HERİŞE UYGUN DÜKKAN",
      "CurrencyCode": "TL",
      "Latitude": 29.167863845825195,
      "Longitude": 40.901218414306641,
      "Price": 800.00,
      "ThumbImage": "IlanResmiThumb\/2015\/11\/27\/atalarda-cadde-uzeri-20-m2----wcli-herise-uygun...-2-237937620.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/kiralik-daire",
      "AdvertID": 9194838,
      "AdvertTitle": "kiralık daire",
      "CurrencyCode": "TL",
      "Latitude": 28.981058120727539,
      "Longitude": 41.070526123046875,
      "Price": 500.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/23\/kiralik-daire-2-285512722.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64891-494\/ada-gayrimenkul-idealtepede-minibus-cad-5-binada-katta-tek-luks",
      "AdvertID": 8899239,
      "AdvertTitle": "ADA GAYRİMENKUL_İDEALTEPEDE MİNİBÜS CAD.5.BİNADA KATTA TEK LÜKS",
      "CurrencyCode": "TL",
      "Latitude": 29.124895095825195,
      "Longitude": 40.935367584228516,
      "Price": 500000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/18\/ada-gayrimenkul-idealtepede-minibus-cad-5-binad...-2-265466191.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/56105-8973\/topkapi-avrupa-konutlari-kale--de-kiralik-2-1-ful-peysaj",
      "AdvertID": 8872474,
      "AdvertTitle": "TOPKAPI AVRUPA KONUTLARI KALE' DE KİRALIK 2+1 FUL PEYSAJ",
      "CurrencyCode": "TL",
      "Latitude": 28.908004760742188,
      "Longitude": 41.016860961914063,
      "Price": 3500.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/18\/topkapi-avrupa-konutlari-kale--de-kiralik-2-1-f...-2-265488856.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/mehtercesmede",
      "AdvertID": 9195210,
      "AdvertTitle": "mehterçeşmede ",
      "CurrencyCode": "TL",
      "Latitude": 28.819646835327148,
      "Longitude": 40.978595733642578,
      "Price": 1000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/23\/mehtercesmede--2-285529501.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-2\/mehtercesmede-kiralik",
      "AdvertID": 9195378,
      "AdvertTitle": "mehterçeşmede kiralık ",
      "CurrencyCode": "TL",
      "Latitude": 28.8197021484375,
      "Longitude": 40.978115081787109,
      "Price": 1000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/23\/mehtercesmede-kiralik--2-285538159.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-4\/sahibinden-goztepe-nadiragada-170-m2-45-m-salon-17-m-mutfak-cift-klima-balkonlu",
      "AdvertID": 9037627,
      "AdvertTitle": "sahibinden göztepe nadirağada 170 m2 45 m salon 17 m mutfak çift klima balkonlu ",
      "CurrencyCode": "TL",
      "Latitude": 29.065982818603516,
      "Longitude": 40.9804573059082,
      "Price": 1400000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/23\/sahibinden-goztepe-nadiragada-170-m2-45-m-salon...-2-285540061.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/50082-8527\/muslum-emlaktan-cihangirde-e-5-e-yurume-mesafesinde-2-1-ara-kat",
      "AdvertID": 9075085,
      "AdvertTitle": "MÜSLÜM EMLAKTAN CİHANGİRDE E-5 E YÜRÜME MESAFESİNDE 2+1 ARA KAT ",
      "CurrencyCode": "TL",
      "Latitude": 28.704153060913086,
      "Longitude": 40.986782073974609,
      "Price": 270000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/12\/muslum-emlaktan-cihangirde-e-5-e-yurume-mesafes...-2-277537067.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/8132-1336\/yesilkoy-sahilde-muhtesem-konumda-satilik-sifir-dubleks-daire",
      "AdvertID": 9029551,
      "AdvertTitle": "Yeşilköy Sahilde Muhteşem konumda Satılık Sıfır dubleks daire",
      "CurrencyCode": "USD",
      "Latitude": 28.831737518310547,
      "Longitude": 40.957588195800781,
      "Price": 1250000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/02\/yesilkoy-sahilde-muhtesem-konumda-satilik-sifir...-2-276040555.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65324-4\/koza-emlak-tan-kadikoy-osmanaga-da-2-1-satilik-temiz-daire",
      "AdvertID": 8824927,
      "AdvertTitle": "KOZA EMLAK'TAN KADIKÖY OSMANAĞA'DA 2+1 SATILIK TEMİZ DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.027101516723633,
      "Longitude": 40.989559173583984,
      "Price": 550000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/19\/koza-emlak-tan-kadikoy-osmanaga-da-2-1-satilik-...-2-274268252.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65243-14\/kucukyali-da-3-1-satilik-daire",
      "AdvertID": 8982782,
      "AdvertTitle": "KÜÇÜKYALI'DA 3+1 SATILIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.107593536376953,
      "Longitude": 40.946949005126953,
      "Price": 675000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/17\/kucukyali-da-3-1-satilik-daire-2-270143600.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65243-15\/bostancida-3-1-kiralik-daire",
      "AdvertID": 8983056,
      "AdvertTitle": "BOSTANCIDA 3+1 KİRALIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.098752975463867,
      "Longitude": 40.961322784423828,
      "Price": 2700.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/17\/bostancida-3-1-kiralik-daire-2-270163505.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64395-42\/bagcilarda-gunluk-kiralik-daire",
      "AdvertID": 8379384,
      "AdvertTitle": "bağcılarda günlük kiralık daire",
      "CurrencyCode": "TL",
      "Latitude": 28.848079681396484,
      "Longitude": 41.038902282714844,
      "Price": 50.00,
      "ThumbImage": "IlanResmiThumb\/2015\/10\/09\/bagcilarda-gunluk-kiralik-daire-2-229663605.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64395-41\/bagcilarda-gunluk-kiralik-daire",
      "AdvertID": 8379353,
      "AdvertTitle": "bağcılarda günlük kiralık daire",
      "CurrencyCode": "TL",
      "Latitude": 28.835891723632813,
      "Longitude": 41.039161682128906,
      "Price": 50.00,
      "ThumbImage": "IlanResmiThumb\/2015\/10\/10\/bagcilarda-gunluk-kiralik-daire-2-229757056.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64395-36\/bagcilarda-gunluk-kiralik-daire",
      "AdvertID": 8379256,
      "AdvertTitle": "bağcılarda günlük kiralık daire",
      "CurrencyCode": "TL",
      "Latitude": 28.863960266113281,
      "Longitude": 41.0301628112793,
      "Price": 50.00,
      "ThumbImage": "IlanResmiThumb\/2015\/10\/10\/bagcilarda-gunluk-kiralik-daire-2-229768494.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/48011-2070\/darica-kultur-merkezine-yakin-satilik-daire",
      "AdvertID": 8720793,
      "AdvertTitle": "DARICA KULTUR MERKEZINE YAKIN SATILIK DAIRE",
      "CurrencyCode": "TL",
      "Latitude": 29.187213897705078,
      "Longitude": 40.936847686767578,
      "Price": 160000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/03\/03\/darica-kultur-merkezine-yakin-satilik-daire-2-253573721.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63868-16\/gunesli-evren-mahallesinde-5-katli-bina-komple-satiliktir-",
      "AdvertID": 8092258,
      "AdvertTitle": "GÜNEŞLİ EVREN MAHALLESİNDE 5 KATLI BİNA KOMPLE SATILIKTIR\u000a",
      "CurrencyCode": "TL",
      "Latitude": 28.815036773681641,
      "Longitude": 41.0406494140625,
      "Price": 1120000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/07\/10\/gunesli-evren-mahallesinde-5-katli-bina-komple-...-2-218801006.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/59204-18\/access-ten-kemerburgaz-gokturk-te-yeni-sitede-3-1-ara-kat-daire",
      "AdvertID": 5754033,
      "AdvertTitle": "Access'ten kemerburgaz göktürk'te yeni sitede 3+1 ara kat daire",
      "CurrencyCode": "TL",
      "Latitude": 28.875469207763672,
      "Longitude": 41.195816040039063,
      "Price": 850000.00,
      "ThumbImage": "IlanResmiThumb\/2013\/01\/26\/access-ten-kemerburgaz-gokturk-te-yeni-sitede-3...-2-108176901.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/52182-1123\/uskudar-cengelkoy-kaleseramik-evleri-de-kiralik-villa",
      "AdvertID": 8737886,
      "AdvertTitle": "ÜSKÜDAR ÇENGELKÖY KALESERAMİK EVLERİ DE KİRALIK VİLLA",
      "CurrencyCode": "TL",
      "Latitude": 29.06437873840332,
      "Longitude": 41.046176910400391,
      "Price": 2300.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/26\/uskudar-cengelkoy-kaleseramik-evleri-de-kiralik...-2-266705223.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63704-125\/artist-emlak-tan-fatih-sofularda-komple-ultra-luks-bina",
      "AdvertID": 8270655,
      "AdvertTitle": "Artist Emlak tan Fatih Sofularda Komple Ultra Lüks Bina",
      "CurrencyCode": "TL",
      "Latitude": 28.948116302490234,
      "Longitude": 41.014297485351562,
      "Price": 4000000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/08\/23\/artist-emlak-tan-fatih-sofularda-komple-ultra-l...-2-224079514.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/52906-3973\/sancaktepe-meclis-mah-de-3-1-150-m2-kacmaz-ters-dubleks----",
      "AdvertID": 8298659,
      "AdvertTitle": "SANCAKTEPE MECLİS MAH DE 3+1 150 M2 KAÇMAZ TERS DUBLEKS !!!",
      "CurrencyCode": "TL",
      "Latitude": 29.200839996337891,
      "Longitude": 41.012447357177734,
      "Price": 198000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/09\/03\/sancaktepe-meclis-mah-de-3-1-150-m2-kacmaz-ters...-2-225587274.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/10975-1714\/caglayan-adliyesinin-karsisinda-ful-esyali-kiralik-ofisler",
      "AdvertID": 8300541,
      "AdvertTitle": "CAGLAYAN ADLIYESININ KARSISINDA FUL ESYALI KIRALIK OFISLER ",
      "CurrencyCode": "TL",
      "Latitude": 28.980417251586914,
      "Longitude": 41.072635650634766,
      "Price": 1500.00,
      "ThumbImage": "IlanResmiThumb\/2015\/09\/04\/caglayan-adliyesinin-karsisinda-ful-esyali-kira...-2-225670586.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64363-244\/zarif-gayrimenkul-den-3-2-150m2-satilik-dubleks",
      "AdvertID": 8481123,
      "AdvertTitle": "ZARİF GAYRİMENKUL'DEN 3+2 150m2 SATILIK DUBLEKS ",
      "CurrencyCode": "TL",
      "Latitude": 28.859409332275391,
      "Longitude": 41.102058410644531,
      "Price": 430000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/11\/23\/zarif-gayrimenkul-den-3-2-140m2-satilik-dubleks--2-237309930.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-809\/viaport-venezia",
      "AdvertID": 8589069,
      "AdvertTitle": "VİAPORT VENEZİA ",
      "CurrencyCode": "TL",
      "Latitude": 28.877298355102539,
      "Longitude": 41.081245422363281,
      "Price": 2800.00,
      "ThumbImage": "IlanResmiThumb\/2016\/01\/08\/viaport-venezia--2-245111336.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/54467-258\/site-icerisinde-masrafsiz-temiz-daire",
      "AdvertID": 8549228,
      "AdvertTitle": "SİTE İÇERİSİNDE MASRAFSIZ TEMİZ DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.816473007202148,
      "Longitude": 40.956241607666016,
      "Price": 4000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/12\/21\/site-icerisinde-masrafsiz-luks-esyali-2-242251751.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/46003-100\/hasret-emlaktan-kelepir-daire",
      "AdvertID": 8768657,
      "AdvertTitle": "HASRET EMLAKTAN KELEPİR DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.863445281982422,
      "Longitude": 41.016693115234375,
      "Price": 155000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/03\/23\/hasret-emlaktan-kelepir-daire-2-256751888.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/201-102\/atasehir-metropol-2-1-125-m2-brut-projeden",
      "AdvertID": 8601713,
      "AdvertTitle": "ATAŞEHİR METROPOL 2+1 125 M2 BRÜT PROJEDEN",
      "CurrencyCode": "TL",
      "Latitude": 29.121623992919922,
      "Longitude": 40.994216918945312,
      "Price": 950000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/01\/13\/atasehir-metropol-2-1-125-m2-brut-projeden-2-245989321.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/58081-110\/siyavus-pasada-ulu-cami-yakini-2-1yeni-luxs-daire-gorulmeyedeger",
      "AdvertID": 8800424,
      "AdvertTitle": "SİYAVUŞ PAŞADA ULU CAMİ YAKINI 2+1YENİ LÜXS DAİRE GÖRÜLMEYEDEGER",
      "CurrencyCode": "TL",
      "Latitude": 28.849967956542969,
      "Longitude": 40.996742248535156,
      "Price": 430000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/04\/siyavus-pasada-ulu-cami-yakini-2-1yeni-luxs-dai...-2-258967786.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65243-2\/era-artika-gayrimenkul---den-altaycesmede-luks-200-m2-dubleks",
      "AdvertID": 8810204,
      "AdvertTitle": "ERA ARTİKA GAYRİMENKUL ' DEN ALTAYÇEŞMEDE LUKS 200 M2 DUBLEKS",
      "CurrencyCode": "TL",
      "Latitude": 29.128543853759766,
      "Longitude": 40.936988830566406,
      "Price": 1050000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/08\/era-artika-gayrimenkul---den-altaycesmede-luks-...-2-259643603.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/55878-58\/akdere-emlak-tan-mecidiyekoy-merkeze-10-dk-yurume-mesafesinde",
      "AdvertID": 8877063,
      "AdvertTitle": "AKDERE EMLAK'TAN-MECİDİYEKÖY MERKEZE 10 DK YÜRÜME MESAFESİNDE",
      "CurrencyCode": "TL",
      "Latitude": 29.000625610351562,
      "Longitude": 41.069545745849609,
      "Price": 1100000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/10\/akdere-emlak-tan-4-1--140m2-satilik-dubleks-2-264375417.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-1046\/viaport-venezia-kiralik-2-1-daire",
      "AdvertID": 8695272,
      "AdvertTitle": "VİAPORT VENEZİA KİRALIK 2+1 DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.877470016479492,
      "Longitude": 41.080600738525391,
      "Price": 1850.00,
      "ThumbImage": "IlanResmiThumb\/2016\/02\/22\/viaport-venezia-kiralik-2-1-daire-2-251860542.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-1049\/viaport-venezia",
      "AdvertID": 8697634,
      "AdvertTitle": "VİAPORT VENEZİA ",
      "CurrencyCode": "TL",
      "Latitude": 28.877470016479492,
      "Longitude": 41.080600738525391,
      "Price": 1850.00,
      "ThumbImage": "IlanResmiThumb\/2016\/02\/23\/viaport-venezia--2-252027508.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-1067\/fix-gym-viaport-venezia-kiralik-2-1-daire-1-800-tl",
      "AdvertID": 8709585,
      "AdvertTitle": "FİX GYM VİAPORT VENEZİA KİRALIK 2+1 DAİRE 1.800 TL ",
      "CurrencyCode": "TL",
      "Latitude": 28.877470016479492,
      "Longitude": 41.080600738525391,
      "Price": 1800.00,
      "ThumbImage": "IlanResmiThumb\/2016\/02\/27\/fix-gym-viaport-venezia-kiralik-2-1-daire-1-800...-2-252765143.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-1073\/viaport-venezia-kiralik-2-1-daire-1-800tl",
      "AdvertID": 8712258,
      "AdvertTitle": "VİAPORT VENEZİA KİRALIK 2+1 DAİRE 1.800TL",
      "CurrencyCode": "TL",
      "Latitude": 28.877470016479492,
      "Longitude": 41.080600738525391,
      "Price": 1800.00,
      "ThumbImage": "IlanResmiThumb\/2016\/02\/28\/viaport-venezia-kiralik-2-1-daire-1-800tl-2-252944430.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-1076\/viaport-venezia--kiralik-2-1-daire--sitenin-uygun-fiyati-1-750tl",
      "AdvertID": 8712834,
      "AdvertTitle": "VİAPORT VENEZİA  KİRALIK 2+1 DAİRE  SİTENİN UYGUN FİYATI 1.750TL",
      "CurrencyCode": "TL",
      "Latitude": 28.877470016479492,
      "Longitude": 41.080600738525391,
      "Price": 1750.00,
      "ThumbImage": "IlanResmiThumb\/2016\/02\/29\/viaport-venezia--kiralik-2-1-daire--sitenin-uyg...-2-253006367.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-1083\/viaport-venezia-kapali--mutfak--en-buyuk-tip-2-1-cift--banyo",
      "AdvertID": 8714501,
      "AdvertTitle": "VİAPORT VENEZİA KAPALI  MUTFAK  EN BÜYÜK TİP 2+1 ÇİFT  BANYO",
      "CurrencyCode": "TL",
      "Latitude": 28.877470016479492,
      "Longitude": 41.080600738525391,
      "Price": 2000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/02\/29\/viaport-venezia-kapali--mutfak--en-buyuk-tip-2-...-2-253102581.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/58790-445\/sisli-merkezde-yatirimlik-kacirilmayacak-firsat",
      "AdvertID": 8862209,
      "AdvertTitle": "ŞİŞLİ MERKEZDE YATIRIMLIK KAÇIRILMAYACAK FIRSAT",
      "CurrencyCode": "TL",
      "Latitude": 28.985200881958008,
      "Longitude": 41.060844421386719,
      "Price": 550000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/30\/sisli-merkezde-yatirimlik-kacirilmayacak-firsat-2-263009969.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/142-202\/home-city-den-bakirkoy-meydanda-1-kat-170m2-tek-daire-uzeri",
      "AdvertID": 8729742,
      "AdvertTitle": "HOME CİTY'DEN BAKIRKÖY MEYDANDA 1.KAT 170M2 TEK DAİRE ÜZERİ ",
      "CurrencyCode": "TL",
      "Latitude": 28.87364387512207,
      "Longitude": 40.982566833496094,
      "Price": 725000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/03\/07\/home-city-den-bakirkoy-meydanda-1-kat-170m2-tek...-2-254231251.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63459-531\/esenler-turkiye-emlaktan-2-1-kredili-1-kat-90m2-daire-kod-779",
      "AdvertID": 8437311,
      "AdvertTitle": "ESENLER TÜRKİYE EMLAKTAN 2+1 KREDİLİ 1.KAT 90M2 DAİRE KOD 779",
      "CurrencyCode": "TL",
      "Latitude": 28.862499237060547,
      "Longitude": 41.0511360168457,
      "Price": 225000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/12\/14\/turkiye-emlaktan-satilik-2-1-kredili-1-2-3-kat-...-2-240963247.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63459-234\/turkiye-emlaktan-satilik-3-1-kredili-1--kat-115-m2-daire-kod-563",
      "AdvertID": 7923204,
      "AdvertTitle": "TÜRKİYE EMLAKTAN SATILIK 3+1 KREDİLİ 1. KAT 115 M2 DAİRE KOD 563",
      "CurrencyCode": "TL",
      "Latitude": 28.861812591552734,
      "Longitude": 41.050422668457031,
      "Price": 300000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/04\/11\/turkiye-emlaktan-satilik-3-1-kredili-1--kat-115...-2-205888815.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2019\/viaport--venezia-kiralik-1-1-firsat-daire-1-400tl",
      "AdvertID": 9034570,
      "AdvertTitle": "VİAPORT  VENEZİA KİRALIK 1+1 FIRSAT DAİRE 1.400TL",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1400.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/22\/viaport--venezia-kiralik-1-1-firsat-daire-1-400tl-2-274526998.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/47291-2944\/mercandan-kagithane-nurtepe-mah--2-1-95-m2-kiralik-daire",
      "AdvertID": 9001724,
      "AdvertTitle": "MERCANDAN KAĞITHANE NURTEPE MAH. 2+1 95 M2 KİRALIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.969188690185547,
      "Longitude": 41.080711364746094,
      "Price": 1250.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/22\/mercandan-kagithane-nurtepe-mah--2-1-95-m2-kira...-2-274578761.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/2622-532\/merterde-metroya-metrobuse-yakin-full-tadilatli-asansorlu-kirali",
      "AdvertID": 9035928,
      "AdvertTitle": "MERTERDE METROYA METROBÜSE YAKIN FULL TADİLATLI ASANSÖRLÜ KİRALI",
      "CurrencyCode": "TL",
      "Latitude": 28.89208984375,
      "Longitude": 41.00555419921875,
      "Price": 2000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/22\/merterde-metroya-metrobuse-yakin-asansorlu-kira...-2-274604168.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2028\/viaport-venezia--venedikde-bir-bir-yasam-firsati-1-400tl",
      "AdvertID": 9036320,
      "AdvertTitle": "VİAPORT VENEZİA  VENEDİKDE BİR BİR YAŞAM FIRSATI 1.400TL",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1400.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/23\/viaport-venezia--venedikde-bir-bir-yasam-firsat...-2-274627618.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/sahibinden-acil-fatih-camisine-yakin-2-1-asansorlu-kombili-daire",
      "AdvertID": 8865643,
      "AdvertTitle": "Sahibinden Acil Fatih Camisine yakın 2+1 asansörlü kombili daire",
      "CurrencyCode": "TL",
      "Latitude": 28.951698303222656,
      "Longitude": 41.021121978759766,
      "Price": 495000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/02\/sahibinden-fatih-camisine-yakin-2-1-asansorlu-k...-2-263220047.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/56688-476\/sisli-kocamansur-sk--yeni-binada-4-1-220m2-kiralik-dublex-daire",
      "AdvertID": 8990203,
      "AdvertTitle": "ŞİŞLİ KOCAMANSUR SK. YENİ BİNADA 4+1 220m2 KİRALIK DUBLEX DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.985973358154297,
      "Longitude": 41.059646606445313,
      "Price": 4100.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/21\/sisli-kocamansur-sk--yeni-binada-4-1-220m2-kira...-2-270700151.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65394-57\/gunesli-evren-mahallesinde-3-1-konumu-guzel-2--kat-daire",
      "AdvertID": 8912906,
      "AdvertTitle": "GÜNEŞLİ EVREN MAHALLESİNDE 3+1 KONUMU GÜZEL 2. KAT DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.834539413452148,
      "Longitude": 41.042930603027344,
      "Price": 350000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/25\/gunesli-evren-mahallesinde-satilik-1-kat-3-1-11...-2-266443506.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/59512-424\/uskudar-icadiye-de-2-1-bogaz-manzarali-satilik-daireler",
      "AdvertID": 8643255,
      "AdvertTitle": "Üsküdar İcadiye'de 2+1 boğaz manzaralı satılık daireler",
      "CurrencyCode": "TL",
      "Latitude": 29.037960052490234,
      "Longitude": 41.028964996337891,
      "Price": 425000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/03\/15\/uskudar-icadiye-de-2-1-bogaz-manzarali-satilik-...-2-255407941.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2035\/viaport-venezia-kiralik-1-1",
      "AdvertID": 9038054,
      "AdvertTitle": "VİAPORT VENEZİA KİRALIK 1+1",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1400.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/24\/viaport-venezia-kiralik-1-1-2-274722178.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63496-307\/karakas-gayrimenkul-den-maltepe-merkezde-3katli-1155-m2-isyeri",
      "AdvertID": 8626277,
      "AdvertTitle": "KARAKAŞ GAYRİMENKUL'DEN MALTEPE MERKEZDE 3KATLI 1155 M2 İŞYERİ",
      "CurrencyCode": "TL",
      "Latitude": 29.129358291625977,
      "Longitude": 40.923954010009766,
      "Price": 33000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/01\/23\/karakas-gayrimenkul-den-maltepe-merkezde-3katli...-2-247442021.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63496-308\/karakas-gayrimenkul-den-maltepe-merkezde-800m2-lik-kiralik-depo",
      "AdvertID": 8626326,
      "AdvertTitle": "KARAKAŞ GAYRİMENKUL'DEN MALTEPE MERKEZDE 800M2 LİK KİRALIK DEPO",
      "CurrencyCode": "TL",
      "Latitude": 29.129722595214844,
      "Longitude": 40.923191070556641,
      "Price": 8000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/01\/23\/karakas-gayrimenkul-den-maltepe-merkezde-800m2-...-2-247444662.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2044\/viaport-venezia-buyuk-tip-1-1-firsat-daire-1-400tl",
      "AdvertID": 9038696,
      "AdvertTitle": "VİAPORT VENEZİA BÜYÜK TİP 1+1 FIRSAT DAİRE 1.400TL",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1400.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/25\/viaport-venezia-buyuk-tip-1-1-firsat-daire-1-400tl-2-274757039.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-6\/hastane-okul-semt-pazari-tem--sosyal--alanlar--hemen-arayin",
      "AdvertID": 8064014,
      "AdvertTitle": "HASTANE-OKUL-SEMT PAZARI-TEM -SOSYAL  ALANLAR..HEMEN ARAYIN",
      "CurrencyCode": "TL",
      "Latitude": 28.896575927734375,
      "Longitude": 41.0867919921875,
      "Price": 1000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/12\/15\/hastane-okul-semt-pazari-tem--sosyal--alanlar-2-241239960.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65394-102\/bahcelievler-cumhuriyet-mahallesined-2-1-daire",
      "AdvertID": 9039648,
      "AdvertTitle": "BAHÇELİEVLER CUMHURİYET MAHALLESİNED 2+1 DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.860074996948242,
      "Longitude": 41.013584136962891,
      "Price": 160000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/25\/bagcilar-cumhuriyet-mahallesined-2-1-daire-2-274815295.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65243-16\/era-artika-gayrimenkul-den-2-1-bostanci-da-satilik-daire",
      "AdvertID": 8993959,
      "AdvertTitle": "ERA ARTİKA GAYRİMENKUL'DEN 2+1 BOSTANCI'DA SATILIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.093944549560547,
      "Longitude": 40.96051025390625,
      "Price": 800000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/23\/era-artika-gayrimenkul-den-2-1-bostanci-da-sati...-2-270983490.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/49509-632\/sanli-emlak-tan-100-metre-bodrumlu-dukkan",
      "AdvertID": 9038307,
      "AdvertTitle": "ŞANLI EMLAK'TAN 100 METRE BODRUMLU DÜKKAN",
      "CurrencyCode": "TL",
      "Latitude": 28.942232131958008,
      "Longitude": 41.019580841064453,
      "Price": 600000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/25\/sanli-emlak-tan-2-katli-100-m--dukkan-2-274767293.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64265-106\/remaxhills-den-etiler-dunya-goz-hastanesi-yakini-bakimli-daire",
      "AdvertID": 8781031,
      "AdvertTitle": "REMAXHILLS'DEN ETİLER DÜNYA GÖZ HASTANESİ YAKINI BAKIMLI DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.038345336914062,
      "Longitude": 41.084510803222656,
      "Price": 1660000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/03\/27\/remaxhills-den-etiler-dunya-goz-hastanesi-yakin...-2-257589057.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/sahibinden-zincirlikuyu-kiralik-daire",
      "AdvertID": 9185157,
      "AdvertTitle": "sahibinden zincirlikuyu kiralık daire",
      "CurrencyCode": "TL",
      "Latitude": 29.014850616455078,
      "Longitude": 41.069126129150391,
      "Price": 2000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/18\/sahibinden-zincirlikuyu-kiralik-daire-2-284978062.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/49230-38653\/erpay-dan-karadolap-ta-sifir-bina-da-2-1-100-m2-2--kat-daire",
      "AdvertID": 9088029,
      "AdvertTitle": "ERPAY'DAN KARADOLAP'TA SIFIR BİNA DA 2+1 100 M2 2. KAT DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.928073883056641,
      "Longitude": 41.075859069824219,
      "Price": 465000.00,
      "ThumbImage": null
    },
    {
      "AdvertDetailLink": "\/ilandetay\/58146-1000\/tek-yetkili--mecidiyekoy-un-merkezinde--otoparkli--asansorlu-ofis",
      "AdvertID": 8985353,
      "AdvertTitle": "TEK YETKİLİ, MECİDİYEKÖY'ÜN MERKEZİNDE, OTOPARKLİ, ASANSÖRLÜ OFİS",
      "CurrencyCode": "TL",
      "Latitude": 28.994478225708008,
      "Longitude": 41.067340850830078,
      "Price": 3450.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/21\/firsat---mecidiyekoy-un-merkezinde--otoparkli--...-2-270601249.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/avcilar-merkezde-satilik-90m2---20m2-depolu-dukkan",
      "AdvertID": 7880274,
      "AdvertTitle": "AVCILAR MERKEZDE SATILIK 90m2 + 20m2 DEPOLU DÜKKAN",
      "CurrencyCode": "TL",
      "Latitude": 28.718439102172852,
      "Longitude": 40.9810791015625,
      "Price": 385000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/03\/28\/avcilar-merkezde-satilik-90m2---20m2-depolu-dukkan-2-203799654.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2072\/viaport-venezia-en-degerli-kiralik-1-1-firsatini-fix-gym-sunuyor",
      "AdvertID": 9043086,
      "AdvertTitle": "VİAPORT VENEZİA EN DEĞERLİ KİRALIK 1+1 FIRSATINI FİX GYM SUNUYOR",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1500.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/27\/viaport-venezia-en-degerli-kiralik-1-1-firsatin...-2-275078030.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/58081-91\/gunesli-basinekspres-yolu212-avm-yanindasatilik-1-1--68m2-daire",
      "AdvertID": 8686291,
      "AdvertTitle": "GÜNEŞLİ BASINEKSPRES YOLU212 AVM YANINDASATILIK 1+1 -68M2 DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.824670791625977,
      "Longitude": 41.039936065673828,
      "Price": 420000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/02\/17\/gunesli-basinekspres-yolu212-avm-yaninda-1-1--6...-2-251196195.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/sahibinden-satilik-acil--kelepir-daire-175000",
      "AdvertID": 6994020,
      "AdvertTitle": "Sahibinden satılık acıl  kelepir daire 175000",
      "CurrencyCode": "TL",
      "Latitude": 28.753053665161133,
      "Longitude": 41.056499481201172,
      "Price": 175000.00,
      "ThumbImage": "IlanResmiThumb\/2014\/03\/30\/sahibinden-satilik-kelepir-daire--2-156455408.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63455-3667\/ayhan-insaattan-50--yil-mah-satilik-120m2-2-1-yuksek-giris-daire",
      "AdvertID": 8920893,
      "AdvertTitle": "AYHAN İNŞAATTAN 50, YIL MAH SATILIK 120M2 2+1 YÜKSEK GİRİŞ DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.870052337646484,
      "Longitude": 41.092613220214844,
      "Price": 288000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/28\/ayhan-insaattan-50--yil-mah-satilik-120m2-2-1-y...-2-266937867.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/60833-2123\/bakirkoy-sakizagaci-da-satilik-daire",
      "AdvertID": 8921007,
      "AdvertTitle": "BAKIRKÖY SAKIZAĞACI DA SATILIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.878120422363281,
      "Longitude": 40.979831695556641,
      "Price": 360000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/28\/bakirkoy-sakizagaci-da-satilik-daire-2-266943128.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65265-237\/regus-selenium-plaza-da-mobilyali-hazir-ofisler",
      "AdvertID": 9044195,
      "AdvertTitle": "Regus Selenium Plaza'da Mobilyali Hazir Ofisler",
      "CurrencyCode": "USD",
      "Latitude": 28.999582290649414,
      "Longitude": 41.054721832275391,
      "Price": 869.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/27\/regus-selenium-plaza-da-mobilyali-hazir-ofisler-2-275153811.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65265-238\/regus-selenium-plaza-da-mobilyali-hazir-ofisler",
      "AdvertID": 9044202,
      "AdvertTitle": "Regus Selenium Plaza'da Mobilyali Hazir Ofisler",
      "CurrencyCode": "USD",
      "Latitude": 28.999582290649414,
      "Longitude": 41.054721832275391,
      "Price": 869.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/27\/regus-selenium-plaza-da-mobilyali-hazir-ofisler-2-275153903.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65265-239\/regus-selenium-plaza-da-sanal-ofisler",
      "AdvertID": 9044208,
      "AdvertTitle": "Regus Selenium Plaza'da Sanal Ofisler",
      "CurrencyCode": "USD",
      "Latitude": 28.999582290649414,
      "Longitude": 41.054721832275391,
      "Price": 299.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/27\/regus-selenium-plaza-da-sanal-ofisler-2-275154066.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63459-638\/ey-insaat-arsalarinizi-kat-karsiligi-almaya-hazir",
      "AdvertID": 8730008,
      "AdvertTitle": "EY INSAAT ARSALARINIZI KAT KARSILIGI ALMAYA HAZIR",
      "CurrencyCode": "TL",
      "Latitude": 28.843408584594727,
      "Longitude": 41.023593902587891,
      "Price": 100000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/03\/08\/ey-insaat-arsalarinizi-kat-karsiligi-almaya-hazir-2-254268280.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63884-217\/dreamtowers-atasehir-5-3-bakimli-sifir-daire",
      "AdvertID": 9115520,
      "AdvertTitle": "Dreamtowers ataşehir 5 3 bakımlı sıfır daire",
      "CurrencyCode": "TL",
      "Latitude": 29.135995864868164,
      "Longitude": 40.984016418457031,
      "Price": 1250000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/04\/dreamtowers-atasehir-5-3-bakimli-sifir-daire-2-280545708.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2090\/viaport-venezia-saraylarinda-yasama-firsati-1-500tl",
      "AdvertID": 9045634,
      "AdvertTitle": "VİAPORT VENEZİA SARAYLARINDA YAŞAMA FIRSATI 1.500TL",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1500.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/28\/viaport-venezia-saraylarinda-yasama-firsati-1-5...-2-275237187.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2102\/viaport-venezia-kiralik-1-1",
      "AdvertID": 9047715,
      "AdvertTitle": "VİAPORT VENEZİA KİRALIK 1+1",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1500.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/29\/viaport-venezia-kiralik-1-1-2-275415831.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/3-1-denize-sifir-masrafsiz-deprem-yonetmeligine-uygun",
      "AdvertID": 9162503,
      "AdvertTitle": "3 1 DENİZE SIFIR MASRAFSIZ DEPREM YÖNETMELİĞİNE UYGUN",
      "CurrencyCode": "TL",
      "Latitude": 29.180145263671875,
      "Longitude": 40.887321472167969,
      "Price": 1750.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/19\/3-1-denize-sifir-masrafsiz-deprem-yonetmeligine...-2-285152095.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2114\/viaport-venezia-saraylarinda-yasama-firsati-1-1-kiralik",
      "AdvertID": 9049548,
      "AdvertTitle": "VİAPORT VENEZİA SARAYLARINDA YAŞAMA FIRSATI 1+1 KİRALIK",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1500.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/30\/viaport-venezia-saraylarinda-yasama-firsati-1-1...-2-275580332.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63147-11\/istanbul--sultangazi--zubeyde-hanim-mahallesinde-4-2-dublex-160m2",
      "AdvertID": 7804637,
      "AdvertTitle": "İstanbul, Sultangazi, Zübeyde hanım mahallesinde 4+2 dublex 160m2",
      "CurrencyCode": "TL",
      "Latitude": 28.909711837768555,
      "Longitude": 41.101791381835937,
      "Price": 299000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/07\/istanbul--sultangazi--zubeyde-hanim-mahallesind...-2-264011182.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/52019-477\/kandilli--elysium-serene-da---yepyeni-full-esyali-169-m2---3-1",
      "AdvertID": 8945466,
      "AdvertTitle": "KANDİLLİ, ELYSIUM SERENE'DA , YEPYENİ FULL EŞYALI 169 M2., 3+1 ",
      "CurrencyCode": "TL",
      "Latitude": 29.067663192749023,
      "Longitude": 41.062534332275391,
      "Price": 8500.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/31\/kandilli--elysium-serene-da---yepyeni-full-esya...-2-267560004.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64410-52\/---axe-grup----satilik-2-1-krediye-uygun-daire-249-000-tl",
      "AdvertID": 8678582,
      "AdvertTitle": "-- AXE GRUP -- SATILIK 2+1 KREDİYE UYGUN DAİRE 249.000 TL",
      "CurrencyCode": "TL",
      "Latitude": 29.151912689208984,
      "Longitude": 40.939067840576172,
      "Price": 249000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/02\/14\/---axe-grup----satilik-2-1-krediye-uygun-daire-...-2-250691042.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65394-64\/bagcilar-yenigun-mahallesinde--cok-uygun--daire",
      "AdvertID": 8946303,
      "AdvertTitle": "BAĞCILAR YENİGÜN MAHALLESİNDE  ÇOK UYGUN  DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.854190826416016,
      "Longitude": 41.025619506835938,
      "Price": 155000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/31\/bagcilar-yenigun-mahallesinde--cok-uygun--daire-2-267614905.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/46257-330\/k-bakkalkoy-merkezde--guvenlikli--havuzlu-sitede--sifir-luks-2-1",
      "AdvertID": 8795379,
      "AdvertTitle": "K.BAKKALKÖY MERKEZDE, GÜVENLİKLİ, HAVUZLU SİTEDE, SIFIR LÜKS 2+1",
      "CurrencyCode": "TL",
      "Latitude": 29.122222900390625,
      "Longitude": 40.979057312011719,
      "Price": 530000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/01\/k-bakkalkoy-merkezde--guvenlikli--havuzlu-sited...-2-258585211.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/166-6476\/haznedarda-medicana-hastanesine-yakin-kacmaz-firsat-magaza-cafe",
      "AdvertID": 5323694,
      "AdvertTitle": "HAZNEDARDA MEDICANA HASTANESİNE YAKIN KACMAZ FIRSAT MAĞAZA CAFE",
      "CurrencyCode": "TL",
      "Latitude": 28.868743896484375,
      "Longitude": 41.02410888671875,
      "Price": 900000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/03\/haznedarda-medicana-hastanesine-yakin-kacmaz-fi...-2-268133847.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2120\/viaport--venezia-venedik-saraylarinda-yasam-firsati",
      "AdvertID": 9051403,
      "AdvertTitle": "VİAPORT  VENEZİA VENEDİK SARAYLARINDA YAŞAM FIRSATI ",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1500.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/31\/viaport--venezia-venedik-saraylarinda-yasam-fir...-2-275738943.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2133\/viaport-venezia-kiralik-1-1",
      "AdvertID": 9052027,
      "AdvertTitle": "VİAPORT VENEZİA KİRALIK 1+1 ",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1500.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/01\/viaport-venezia-kiralik-1-1--2-275825425.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/62440-1031\/bahcelievler-ulubatli-cadde-ustu-550tl-kiracili-12-m2-dukkan",
      "AdvertID": 8019724,
      "AdvertTitle": "BAHÇELİEVLER ULUBATLI CADDE ÜSTÜ 550TL KİRACILI 12 M2 DÜKKAN ",
      "CurrencyCode": "TL",
      "Latitude": 28.855173110961914,
      "Longitude": 41.002410888671875,
      "Price": 180000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/05\/15\/bahcelievler-ulubatli-cadde-ustu-500tl-kiracili...-2-210926629.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-3\/krediye-uygun-olmayan-deniz---gol--e5-manzarali-",
      "AdvertID": 8167072,
      "AdvertTitle": "Krediye uygun olmayan Deniz , göl, E5 manzaralı.",
      "CurrencyCode": "TL",
      "Latitude": 28.738317489624023,
      "Longitude": 40.979251861572266,
      "Price": 170000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/03\/10\/deniz---gol--e5-manzarali-klimali--kombili--esy...-2-254594139.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2141\/viaport-venezia-saraylarinda-terasli-havuz-manz-ultra-lux-1-1",
      "AdvertID": 9053992,
      "AdvertTitle": "VİAPORT VENEZİA SARAYLARINDA TERASLI HAVUZ MANZ ULTRA LÜX 1+1",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1500.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/02\/viaport-venezia-saraylarinda-terasli-havuz-manz...-2-275965756.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/50262-1257\/sahibinden-den-full-asansorlu--3-1-115-m2--satilik-sifir-daire",
      "AdvertID": 8810772,
      "AdvertTitle": "SAHİBİNDEN DEN FULL ASANSÖRLÜ  3+1 115 M2  SATILIK SIFIR DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.206336975097656,
      "Longitude": 40.920581817626953,
      "Price": 395000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/08\/gunes-gayrimenkul-den-asansorlu-3-1-satilik-sif...-2-259684375.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65312-43\/bagcilar-kirazli-da-1100-m2-satilik-2-katli-dukkan",
      "AdvertID": 8951360,
      "AdvertTitle": "BAĞCILAR KİRAZLI'DA 1100 m2 SATILIK 2 KATLI DÜKKAN",
      "CurrencyCode": "TL",
      "Latitude": 28.835254669189453,
      "Longitude": 41.033851623535156,
      "Price": 3200000.00,
      "ThumbImage": null
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/tayin-sebebiyle-acil-sahibinden-bagcilar-merkezde--arakat-daire",
      "AdvertID": 9055991,
      "AdvertTitle": "TAYİN SEBEBİYLE ACİL SAHİBİNDEN BAĞCILAR MERKEZDE  ARAKAT DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.861984252929688,
      "Longitude": 41.035274505615234,
      "Price": 410000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/02\/sahibinden-bagcilar-merkezde-2-1-satilik-daire-2-276104057.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/46003-89\/hasret-emlaktan-satilik",
      "AdvertID": 8667982,
      "AdvertTitle": "HASRET EMLAKTAN SATILIK",
      "CurrencyCode": "TL",
      "Latitude": 28.867908477783203,
      "Longitude": 41.010799407958984,
      "Price": 270000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/05\/hasret-emlaktan-satilik-2-259163842.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-6\/atasehr-soyakta-1-000tl-kiracli-30m-kredli-satilik-sifir-dukkan",
      "AdvertID": 7592725,
      "AdvertTitle": "ATAŞEHR SOYAKTA 1.000TL KİRACLI 30m KREDLİ SATILIK SIFIR DÜKKAN",
      "CurrencyCode": "TL",
      "Latitude": 29.116247177124023,
      "Longitude": 41.009860992431641,
      "Price": 250000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/26\/umraniye-soyakta-cadde-yani-1-000tl-kiracili-30...-2-282586756.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2153\/viaport-venezia-saraylarinda-ultra-lux-yasam-firsati-kiralik-1-1",
      "AdvertID": 9056541,
      "AdvertTitle": "VİAPORT VENEZİA SARAYLARINDA ULTRA LÜX YAŞAM FIRSATI KİRALIK 1+1",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1400.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/03\/viaport-venezia-saraylarinda-ultra-lux-yasam-fi...-2-276144430.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/54559-172\/irem-emlaktan-yesilovada-satilik-dubleks-e5-yakini-yeni",
      "AdvertID": 8732697,
      "AdvertTitle": "İREM EMLAKTAN YEŞİLOVADA SATILIK DUBLEKS E5 YAKINI YENİ",
      "CurrencyCode": "TL",
      "Latitude": 28.792896270751953,
      "Longitude": 41.002040863037109,
      "Price": 550000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/03\/09\/fft2_mf254464595.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/59123-1004\/kartal-atalar-mahallesi-2-1-77m2-projeden-satilik-daireler",
      "AdvertID": 8803600,
      "AdvertTitle": "KARTAL ATALAR MAHALLESİ 2+1 77m2 PROJEDEN SATILIK DAİRELER",
      "CurrencyCode": "TL",
      "Latitude": 29.171039581298828,
      "Longitude": 40.901737213134766,
      "Price": 425000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/05\/kartal-atalar-mahallesi-2-1-77m2-projeden-satil...-2-259171991.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65312-47\/gunesli-evren-caddesinde-60-m2-2-1-satilik-ofis-kati",
      "AdvertID": 8955714,
      "AdvertTitle": "GÜNEŞLİ EVREN CADDESİNDE 60 m2 2+1 SATILIK OFİS KATI",
      "CurrencyCode": "TL",
      "Latitude": 28.826456069946289,
      "Longitude": 41.034244537353516,
      "Price": 350000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/28\/gunesli-evren-caddesinde-60-m2-2-1-satilik-ofis...-2-271653844.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/saglik-ocaginin-ve-kurumsal-firmalarin-oldugu--minubus-guzergahi",
      "AdvertID": 9058423,
      "AdvertTitle": "Sağlık ocağının ve kurumsal firmaların olduğu, minübüs güzergahı",
      "CurrencyCode": "TL",
      "Latitude": 28.723648071289063,
      "Longitude": 40.979080200195313,
      "Price": 499000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/04\/saglik-ocaginin-ve-kurumsal-firmalarin-oldugu--...-2-276274198.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64356-398\/e-s-gayrimenkulden-kizilelma-yakininda-devren-satilik-restaurant",
      "AdvertID": 8742926,
      "AdvertTitle": "E&S GAYRİMENKULDEN KIZILELMA YAKININDA DEVREN SATILIK RESTAURANT",
      "CurrencyCode": "TL",
      "Latitude": 28.938713073730469,
      "Longitude": 41.010467529296875,
      "Price": 900000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/05\/e-s-gayrimenkulden-kizilelma-yakininda-devren-s...-2-263678430.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2171\/viaport-venezia-kiralik-1-1-saray-dairesi-kacirilmicak-firsat",
      "AdvertID": 9058663,
      "AdvertTitle": "VİAPORT VENEZİA KİRALIK 1+1 SARAY DAİRESİ KAÇIRILMICAK FIRSAT",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1400.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/04\/viaport-venezia-kiralik-1-1-saray-dairesi-kacir...-2-276287957.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63884-218\/brandium-1-0-kiralik-hem-ofis-hem-ev",
      "AdvertID": 9127334,
      "AdvertTitle": "Brandium 1 0 kiralık hem ofis hem ev ",
      "CurrencyCode": "TL",
      "Latitude": 29.132829666137695,
      "Longitude": 40.983844757080078,
      "Price": 1250.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/11\/brandium-1-0-kiralik-hem-ofis-hem-ev--2-281532098.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2178\/viaport-venezia-kiralik-1-1",
      "AdvertID": 9060947,
      "AdvertTitle": "VİAPORT VENEZİA KİRALIK 1+1",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1400.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/05\/viaport-venezia-kiralik-1-1-2-276450011.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2187\/-viaport-venezia-kiralik-1-1-saray-dairesi-kacirilmicak-firsat",
      "AdvertID": 9063056,
      "AdvertTitle": "\u000aVİAPORT VENEZİA KİRALIK 1+1 SARAY DAİRESİ KAÇIRILMICAK FIRSAT",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1400.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/06\/-viaport-venezia-kiralik-1-1-saray-dairesi-kaci...-2-276599553.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/4587-11476\/zeytinburnu-cirpicida-masrafsiz-temiz-satilik-daire",
      "AdvertID": 8958988,
      "AdvertTitle": "ZEYTİNBURNU ÇIRPICIDA MASRAFSIZ TEMİZ SATILIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.906831741333008,
      "Longitude": 41.001796722412109,
      "Price": 330000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/07\/zeytinburnu-telsizde-masrafsiz-temiz-satilik-daire-2-268615392.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/32954-2417\/kurucesme-de-panoramik-bogaz-manzarali-satilik-bina",
      "AdvertID": 8711632,
      "AdvertTitle": "KURUÇEŞME'DE PANORAMİK BOĞAZ MANZARALI SATILIK BİNA ",
      "CurrencyCode": "USD",
      "Latitude": 29.035480499267578,
      "Longitude": 41.065036773681641,
      "Price": 4400000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/09\/kurucesme-de-panoramik-bogaz-manzarali-satilik-...-2-259859187.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/49230-36798\/erpay-gayrimenkulden-cebeci-mah-de-satilik-2-kat-daire",
      "AdvertID": 8813906,
      "AdvertTitle": "ERPAY GAYRIMENKULDEN CEBECİ MAH DE SATILIK 2.KAT DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.865612030029297,
      "Longitude": 41.1090087890625,
      "Price": 265000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/09\/erpay-gayrimenkulden-cebeci-mah-de-satilik-2-ka...-2-259916880.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2197\/viaport-venezia-saraylarinda-terasli-muthis-manz-firsat-daire",
      "AdvertID": 9065305,
      "AdvertTitle": "VİAPORT VENEZİA SARAYLARINDA TERASLI MÜTHİŞ MANZ FIRSAT DAİRE ",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1500.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/07\/viaport-venezia-saraylarinda-terasli-muthis-man...-2-276756413.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/58609-610\/hiper-emlaktan-manzarali-4-1-sifir-dubleks-620-000",
      "AdvertID": 7548317,
      "AdvertTitle": "HİPER EMLAKTAN MANZARALI 4+1 SIFIR DUBLEKS 620.000",
      "CurrencyCode": "TL",
      "Latitude": 28.775554656982422,
      "Longitude": 40.996807098388672,
      "Price": 620000.00,
      "ThumbImage": "IlanResmiThumb\/2014\/11\/14\/hiper-emlaktan-manzarali-4-1-sifir-dubleks-550-...-2-185182984.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64704-1429\/directten-petrolisde-lebiderya-deniz-manzarali-luks-arakat-daire",
      "AdvertID": 8962726,
      "AdvertTitle": "DİRECTTEN PETROLİŞDE LEBİDERYA DENİZ MANZARALI LÜKS ARAKAT DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.178722381591797,
      "Longitude": 40.892623901367188,
      "Price": 525000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/08\/directten-petrolisde-lebiderya-deniz-manzarali-...-2-268864698.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65349-30\/bagdat-caddesi-nde-kurumsal-firmalara-uygun-magaza",
      "AdvertID": 9116636,
      "AdvertTitle": "BAĞDAT CADDESİ'NDE KURUMSAL FİRMALARA UYGUN MAĞAZA",
      "CurrencyCode": "TL",
      "Latitude": 29.058450698852539,
      "Longitude": 40.97186279296875,
      "Price": 30000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/05\/bagdat-caddesi-nde-kurumsal-firmalara-uygun-magaza-2-280663657.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/60833-1537\/zeytinburnunda--islek-caddede-tabela-deyeri-yuksek-satilik-bina",
      "AdvertID": 8596797,
      "AdvertTitle": "ZEYTİNBURNUNDA  İŞLEK CADDEDE TABELA DEYERİ YÜKSEK SATILIK BİNA",
      "CurrencyCode": "USD",
      "Latitude": 28.89704704284668,
      "Longitude": 41.0021858215332,
      "Price": 2500000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/01\/11\/zeytinburnuda-en-islek-caddede-tabela-deyeri-yu...-2-245671081.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/293-5563\/talay-dan---id-5886---ortadag-da-ici-full-yapili-genis-2-1-daire",
      "AdvertID": 8104416,
      "AdvertTitle": "TALAY'DAN **ID:5886** ORTADAĞ'da İÇİ FULL YAPILI GENİŞ 2+1 DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.214363098144531,
      "Longitude": 40.956584930419922,
      "Price": 210000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/06\/17\/talay-dan--id-5886-ortadag-da-ici-full-yapili-g...-2-215382304.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64356-485\/e-s-gayrimenkulden--k-m-pasa-mahallesinde-2-1-70m-satilik-daire",
      "AdvertID": 8815803,
      "AdvertTitle": "E&S GAYRİMENKULDEN  K.M.PAŞA MAHALLESİNDE 2+1 70m SATILIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.93243408203125,
      "Longitude": 41.003730773925781,
      "Price": 255000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/10\/e-s-gayrimenkulden-kocamustafapasa-mah--2-1-70m...-2-260072588.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2215\/viaport-venezia-saraylarinda-yasam-firsati-1-400tl",
      "AdvertID": 9067978,
      "AdvertTitle": "VİAPORT VENEZİA SARAYLARINDA YAŞAM FIRSATI 1.400TL",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1400.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/09\/viaport-venezia-saraylarinda-yasam-firsati-1-400tl-2-276983257.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2211\/viaport-venezia-saraylarinda-firsat-fiyatlar-devam-ediyor-1-1",
      "AdvertID": 9065881,
      "AdvertTitle": "VİAPORT VENEZİA SARAYLARINDA FIRSAT FİYATLAR DEVAM EDİYOR 1+1",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1500.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/09\/viaport-venezia-saraylarinda-firsat-fiyatlar-de...-2-276977812.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65349-31\/atasehir-barbaros-mah--de-kesintileri-yapilmis-satilik-arsa",
      "AdvertID": 9118472,
      "AdvertTitle": "Ataşehir Barbaros Mah.'de Kesintileri Yapılmış Satılık Arsa",
      "CurrencyCode": "TL",
      "Latitude": 29.093717575073242,
      "Longitude": 40.994144439697266,
      "Price": 1367400.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/06\/atasehir-barbaros-mah--de-kesintileri-yapilmis-...-2-280835869.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/haskoy-de-2-1-full-esyali-halic-manzarali-kiralik-daire",
      "AdvertID": 9066060,
      "AdvertTitle": "HASKÖY de 2+1 FULL EŞYALI HALİÇ MANZARALI KİRALIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.952262878417969,
      "Longitude": 41.040599822998047,
      "Price": 2200.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/09\/haskoy-de-2-1-full-esyali-halic-manzarali-kiral...-2-277074291.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/52266-490\/yenikoy-un-en-ozel-yerinde-doganin-icinde-bahceli-ikizvilla-",
      "AdvertID": 7831429,
      "AdvertTitle": "YENİKÖY'ÜN EN ÖZEL YERİNDE DOĞANIN İÇİNDE BAHÇELİ İKİZVİLLA.",
      "CurrencyCode": "TL",
      "Latitude": 29.069610595703125,
      "Longitude": 41.124172210693359,
      "Price": 9500.00,
      "ThumbImage": "IlanResmiThumb\/2015\/03\/10\/yenikoy-un-en-ozel-yerinde-doganin-icinde-bahce...-2-201354360.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63048-171\/satilik-daire",
      "AdvertID": 8894839,
      "AdvertTitle": "SATILIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.114593505859375,
      "Longitude": 40.9415283203125,
      "Price": 980000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/10\/satilik-daire-2-269155033.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/metrobus-800-metre-2-1-daire",
      "AdvertID": 9069963,
      "AdvertTitle": "Metrobüs 800 metre 2+1 daıre",
      "CurrencyCode": "TL",
      "Latitude": 28.788906097412109,
      "Longitude": 40.9942741394043,
      "Price": 255000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/10\/-sahibinden---metrobuse-800-metre-2-1-satilik-d...-2-277341223.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2231\/-viaport-venezia-kiralik-1-1-saray-dairesi-kacirilmicak-firsat",
      "AdvertID": 9070263,
      "AdvertTitle": "\u000aVİAPORT VENEZİA KİRALIK 1+1 SARAY DAİRESİ KAÇIRILMICAK FIRSAT",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1400.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/10\/-viaport-venezia-kiralik-1-1-saray-dairesi-kaci...-2-277211176.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/53351-894\/basaksehir-kayabasin-da-7734m2-satilik-arsa",
      "AdvertID": 7816832,
      "AdvertTitle": "BAŞAKŞEHİR KAYABAŞIN'DA 7734m2 SATILIK ARSA",
      "CurrencyCode": "TL",
      "Latitude": 28.811302185058594,
      "Longitude": 41.084526062011719,
      "Price": 17788020.00,
      "ThumbImage": "IlanResmiThumb\/2016\/03\/07\/basaksehir-kayabasin-da-7734m2-satilik-arsa-2-254142611.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2238\/viaport-venezia-saraylarinda-krallara-laik-efsane-residance-1-1",
      "AdvertID": 9072756,
      "AdvertTitle": "VİAPORT VENEZİA SARAYLARINDA KRALLARA LAİK EFSANE RESİDANCE 1+1",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1400.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/11\/viaport-venezia-saraylarinda-krallara-laik-efsa...-2-277362785.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/4226-3197\/kurucesmede-sitede-kiralik-buyuk-bahceli-villa",
      "AdvertID": 8016305,
      "AdvertTitle": "KURUÇEŞMEDE SİTEDE KİRALIK BÜYÜK BAHÇELİ VİLLA",
      "CurrencyCode": "USD",
      "Latitude": 29.034763336181641,
      "Longitude": 41.062397003173828,
      "Price": 15000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/05\/14\/kurucesmede-sitede-kiralik-buyuk-bahceli-villa-2-210753178.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/49242-623\/kartal--drogos-yali-mah--3-1-135-m2-satilik-daire",
      "AdvertID": 9073866,
      "AdvertTitle": "KARTAL  drogos yalı mah  3+1 135 m2 satılık daire",
      "CurrencyCode": "TL",
      "Latitude": 29.14198112487793,
      "Longitude": 40.913005828857422,
      "Price": 400000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/11\/kartal--drogos-yali-mah--3-1-135-m2-satilik-daire-2-277434688.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/8086-158\/bakirkoy-zuhuratbaba-da-satilik-daire",
      "AdvertID": 8437400,
      "AdvertTitle": "Bakırköy Zuhuratbaba da satılık daire",
      "CurrencyCode": "TL",
      "Latitude": 28.87000846862793,
      "Longitude": 40.980484008789062,
      "Price": 600000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/11\/05\/bak-rkoy-zuhuratbaba-da-sat-l-k-daire-2-233869794.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/sefakoy-inonu-mah-2-1-guney-cephe-kullanisli-daire",
      "AdvertID": 8612308,
      "AdvertTitle": "SEFAKÖY İNÖNÜ MAH.2+1 GUNEY CEPHE KULLANIŞLI DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.801603317260742,
      "Longitude": 41.016693115234375,
      "Price": 300000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/08\/sefakoy-inonu-mah-2-1-guney-cephe-kullanisli-daire-2-281126586.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2253\/viaport-venezia--kiralik-1-1-en-buyuk-tip--peyzaj-manz-firsat",
      "AdvertID": 9074865,
      "AdvertTitle": "VİAPORT VENEZİA  KİRALIK 1+1 EN BÜYÜK TİP  PEYZAJ MANZ FIRSAT ",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1400.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/12\/viaport-venezia--kiralik-1-1-en-buyuk-tip--peyz...-2-277518656.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/4727-1670\/plan-emlak-tan-iskanli-5000-m2-iskanli-okul-isyeri-olmaya-uygun",
      "AdvertID": 8142583,
      "AdvertTitle": "PLAN EMLAK'TAN İSKANLI 5000 M2 İSKANLI OKUL İŞYERİ OLMAYA UYGUN ",
      "CurrencyCode": "TL",
      "Latitude": 28.856170654296875,
      "Longitude": 41.034889221191406,
      "Price": 60000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/06\/30\/plan-emlak-tan-iskanli-4500m2-iskanli-okul-isye...-2-217335793.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2261\/viaport-venezia-kiralik-kelepir-fiyata-1-1-kacirilmaz-firsat",
      "AdvertID": 9075062,
      "AdvertTitle": "VİAPORT VENEZİA KİRALIK KELEPİR FİYATA 1+1 KAÇIRILMAZ FIRSAT ",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1200.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/12\/viaport-venezia-kiralik-kelepir-fiyata-1-1-kaci...-2-277534857.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/53248-272\/sahibinde-guvercintepede-2-adet-dublex",
      "AdvertID": 8562857,
      "AdvertTitle": "SAHİBİNDE GÜVERCİNTEPEDE 2 ADET DUBLEX",
      "CurrencyCode": "TL",
      "Latitude": 28.747230529785156,
      "Longitude": 41.075729370117188,
      "Price": 660000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/12\/26\/sahibinde-guvercintepede-2-adet-dublex-2-243163530.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/60432-135\/kavacikta-satilik-plazalar",
      "AdvertID": 7325898,
      "AdvertTitle": "KAVACIKTA SATILIK PLAZALAR",
      "CurrencyCode": "USD",
      "Latitude": 29.088748931884766,
      "Longitude": 41.092353820800781,
      "Price": 7500000.00,
      "ThumbImage": "IlanResmiThumb\/2014\/08\/18\/kavacikta-satilik-plazalar-2-173617389.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65243-19\/era-artika-gayrimenkul-den-altintepe-de-3-1-kiralik-daire",
      "AdvertID": 9016655,
      "AdvertTitle": "ERA ARTİKA GAYRİMENKUL'DEN ALTINTEPE'DE 3+1 KİRALIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.1018009185791,
      "Longitude": 40.952045440673828,
      "Price": 2000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/11\/era-artika-gayrimenkul-den-altintepe-de-3-1-kir...-2-273098013.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65243-9\/suadiye-de-emsalsiz-3-1-daire-tek-yetkiliyiz",
      "AdvertID": 8960494,
      "AdvertTitle": "SUADİYE DE EMSALSİZ 3+1 DAİRE TEK YETKİLİYİZ",
      "CurrencyCode": "TL",
      "Latitude": 29.094141006469727,
      "Longitude": 40.959823608398438,
      "Price": 850000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/11\/suadiye-de-emsalsiz-3-1-daire-tek-yetkiliyiz-2-273097449.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/62300-80\/kiziltoprak-kentsel-donusum-projesinde-emsalsiz-satilik-daire",
      "AdvertID": 9076612,
      "AdvertTitle": "KIZILTOPRAK KENTSEL DÖNÜŞÜM PROJESİNDE EMSALSİZ SATILIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.03863525390625,
      "Longitude": 40.984611511230469,
      "Price": 1100000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/12\/kiziltoprak-kentsel-donusum-projesinde-emsalsiz...-2-277648985.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2267\/viaport-venezia--nin-en-kelepir-dairesi-kacirlmaz-firsat-1-200tl",
      "AdvertID": 9076801,
      "AdvertTitle": "VİAPORT VENEZİA 'NIN EN KELEPİR DAİRESİ KAÇIRLMAZ FIRSAT 1.200TL",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1200.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/13\/viaport-venezia--nin-en-kelepir-dairesi-kacirlm...-2-277668324.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-1649\/viaport-venezia-full-sehir-manzarali-3-1-daire-2-600-tl",
      "AdvertID": 8974679,
      "AdvertTitle": "VİAPORT VENEZİA FULL ŞEHİR MANZARALI 3+1 DAİRE 2.600 TL",
      "CurrencyCode": "TL",
      "Latitude": 28.877706527709961,
      "Longitude": 41.079471588134766,
      "Price": 2600.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/14\/viaport-venezia-full-sehir-manzarali-3-1-daire-...-2-269671787.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-2\/topagacinda-sahibinden-cift-terasli-4-1-somineli-satilik-daire",
      "AdvertID": 8349815,
      "AdvertTitle": "TOPAĞACINDA SAHİBİNDEN ÇİFT TERASLI 4+1 ŞÖMİNELİ SATILIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.996734619140625,
      "Longitude": 41.050861358642578,
      "Price": 595000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/09\/23\/topagacinda-sahibinden-cift-terasli-4-1-sominel...-2-228076538.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-1654\/viaport-venezia-full-sehir-manzarali-3-1-daire-2-600-tl",
      "AdvertID": 8975462,
      "AdvertTitle": "VİAPORT VENEZİA FULL ŞEHİR MANZARALI 3+1 DAİRE 2.600 TL",
      "CurrencyCode": "TL",
      "Latitude": 28.877706527709961,
      "Longitude": 41.079471588134766,
      "Price": 2600.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/15\/viaport-venezia-full-sehir-manzarali-3-1-daire-...-2-269735095.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65349-20\/ciftehavuzlar--bagdat-caddesi-manzarali--yatirimlik-luks-daire",
      "AdvertID": 8986638,
      "AdvertTitle": "ÇİFTEHAVUZLAR, BAĞDAT CADDESİ MANZARALI, YATIRIMLIK LÜKS DAİRE",
      "CurrencyCode": "USD",
      "Latitude": 29.056949615478516,
      "Longitude": 40.973224639892578,
      "Price": 520000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/13\/ciftehavuzlar--bagdat-caddesi-manzarali--luks-d...-2-273441451.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2276\/viaport-venezia-1-200",
      "AdvertID": 9078630,
      "AdvertTitle": "VİAPORT VENEZİA 1.200",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1200.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/14\/viaport-venezia-1-200-2-277769518.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64597-276\/satilik-daire-bahcelievler-sirinevler-mahmutbey-caddesinde",
      "AdvertID": 8830533,
      "AdvertTitle": "Satılık Daire Bahçelievler Şirinevler Mahmutbey Caddesinde",
      "CurrencyCode": "TL",
      "Latitude": 28.843250274658203,
      "Longitude": 40.998970031738281,
      "Price": 285000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/16\/satilik-daire-bahcelievler-sirinevler-mahmutbey...-2-260791030.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/4697-552\/kosuyolu-ozkuruslar-market-yani-3-1-ara-kat-120m2-firsat----",
      "AdvertID": 8972308,
      "AdvertTitle": "KOŞUYOLU ÖZKURUŞLAR MARKET YANI 3+1 ARA KAT 120m2 FIRSAT !!!",
      "CurrencyCode": "TL",
      "Latitude": 29.034252166748047,
      "Longitude": 41.009723663330078,
      "Price": 370000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/15\/kosuyolu-ozkuruslar-market-yani-3-1-ara-kat-120...-2-269821000.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-1660\/viaport-venezia-sehir-manzarali-3-1-lux-residence-2-600-tl",
      "AdvertID": 8977086,
      "AdvertTitle": "VİAPORT VENEZİA ŞEHİR MANZARALI 3+1 LÜX RESİDENCE 2.600 TL",
      "CurrencyCode": "TL",
      "Latitude": 28.877706527709961,
      "Longitude": 41.079471588134766,
      "Price": 2600.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/15\/viaport-venezia-sehir-manzarali-3-1-lux-residen...-2-269828509.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65480-16\/3-1-2-banyolu--butik-sitede-ara-kat-daire",
      "AdvertID": 8977458,
      "AdvertTitle": "3+1 2 BANYOLU  BUTİK SİTEDE ARA KAT DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.884361267089844,
      "Longitude": 41.180580139160156,
      "Price": 625000.00,
      "ThumbImage": "IlanResmiThumbDeletedFile\\2016\\06\\15\\3-1-2-banyolu--butik-sitede-ara-kat-daire-2-269851048.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2285\/viaport-venezia-1-200tl",
      "AdvertID": 9079416,
      "AdvertTitle": "VİAPORT VENEZİA 1.200TL",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1200.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/15\/viaport-venezia-1-200tl-2-277811228.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/59857-288\/baglarbasi-nuh-kuyusu-caddesinin-yakini---metro-duraginin-yakini",
      "AdvertID": 6967590,
      "AdvertTitle": "Bağlarbaşı nuh kuyusu caddesinin yakını , metro durağının yakını",
      "CurrencyCode": "TL",
      "Latitude": 29.031511306762695,
      "Longitude": 41.020042419433594,
      "Price": 725000.00,
      "ThumbImage": "IlanResmiThumb\/2014\/03\/20\/baglarbasi-nuh-kuyusu-caddesinin-yakini---metrp...-2-155295319.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/49242-582\/kordonboyu--mahallesinde-200-m2-deniz-manzarali--4-1-daire",
      "AdvertID": 8647653,
      "AdvertTitle": "KORDONBOYU  MAHALLESINDE 200 M2 DENIZ MANZARALI  4+1 DAIRE",
      "CurrencyCode": "TL",
      "Latitude": 29.171104431152344,
      "Longitude": 40.8990478515625,
      "Price": 870000.00,
      "ThumbImage": null
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63498-920\/--duses-emlak--adatepe-sahil-de-sifir-bina-surprizlere-devam----",
      "AdvertID": 8476866,
      "AdvertTitle": "**DÜŞEŞ EMLAK**ADATEPE SAHİL DE SIFIR BİNA SÜRPRİZLERE DEVAM !!!",
      "CurrencyCode": "TL",
      "Latitude": 29.127716064453125,
      "Longitude": 40.9278450012207,
      "Price": 580000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/11\/21\/--duses-emlak--adatepe-sahil-de-sifir-bina-surp...-2-236972084.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/4727-1585\/plan-emlaktan-guvenlikli-otoparkli-325-m2--sik-ofis",
      "AdvertID": 7678545,
      "AdvertTitle": "PLAN EMLAKTAN GÜVENLİKLİ OTOPARKLI 325 M2  ŞIK OFİS",
      "CurrencyCode": "TL",
      "Latitude": 28.806022644042969,
      "Longitude": 41.0398063659668,
      "Price": 4500.00,
      "ThumbImage": "IlanResmiThumb\/2015\/01\/08\/plan-emlaktan-guvenlikli-otoparkli-325-m2--sik-...-2-192792516.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2310\/viaport-venezia-en-kelepir-kiralik-1-1-firsati",
      "AdvertID": 9083595,
      "AdvertTitle": "VİAPORT VENEZİA EN KELEPİR KİRALIK 1+1 FIRSATI",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1200.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/17\/viaport-venezia-en-kelepir-kiralik-1-1-firsati-2-278135419.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64491-337\/guvenlikli-sifir-site-icerisinde-deniz-manzarali-genis-3-1",
      "AdvertID": 9083928,
      "AdvertTitle": "GÜVENLİKLİ SIFIR SİTE İÇERİSİNDE DENİZ MANZARALI GENİŞ 3+1",
      "CurrencyCode": "TL",
      "Latitude": 29.145763397216797,
      "Longitude": 40.928298950195313,
      "Price": 2600.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/24\/guvenlikli-sifir-site-icerisinde-deniz-manzaral...-2-279048560.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65283-40\/fatih-aksemsettin-parki-yani-125-m2-3-1-3-kat-kombili-cok-temiz",
      "AdvertID": 8984310,
      "AdvertTitle": "FATİH AKŞEMSETTİN PARKI YANI 125 M2 3+1 3.KAT KOMBİLİ ÇOK TEMİZ",
      "CurrencyCode": "TL",
      "Latitude": 28.940958023071289,
      "Longitude": 41.019615173339844,
      "Price": 1800.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/18\/fatih-aksemsettin-parki-yani-125-m2-3-1-3-kat-k...-2-270246668.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-1661\/viaport-venezia-sehir-manzarali-3-1-lux-residence-2-600-tl",
      "AdvertID": 8977789,
      "AdvertTitle": "VİAPORT VENEZİA ŞEHİR MANZARALI 3+1 LÜX RESİDENCE 2.600 TL",
      "CurrencyCode": "TL",
      "Latitude": 28.877706527709961,
      "Longitude": 41.079471588134766,
      "Price": 2600.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/16\/viaport-venezia-sehir-manzarali-3-1-lux-residen...-2-269870772.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65324-9\/koza-emlak-tan-kartal-ugurmumcu-upcity-de-1-1-satilik--daire",
      "AdvertID": 8975817,
      "AdvertTitle": "KOZA EMLAK'TAN KARTAL UĞURMUMCU UPCİTY'DE 1+1 SATILIK  DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.216100692749023,
      "Longitude": 40.933406829833984,
      "Price": 270000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/15\/koza-emlak-tan-kartal-ugurmumcu-upcity-de-1-1-s...-2-269757110.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/2721-4617\/bagdat-caddesi-ust-paralel-3-1-140m2-akilli-ev-sifir",
      "AdvertID": 9085410,
      "AdvertTitle": "Bağdat caddesi üst paralel 3+1 140m2 akıllı ev sıfır",
      "CurrencyCode": "TL",
      "Latitude": 29.056509017944336,
      "Longitude": 40.976799011230469,
      "Price": 1326000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/18\/bagdat-caddesi-ust-paralel-3-1-140m2-akilli-ev-...-2-278266467.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65243-3\/era-artika-gayrimenkul---den-maltepe-feyzullah-mah--de-sifir-3-1",
      "AdvertID": 8810212,
      "AdvertTitle": "ERA ARTiKA GAYRiMENKUL ' DEN MALTEPE FEYZULLAH MAH 'DE SIFIR 3+1",
      "CurrencyCode": "TL",
      "Latitude": 29.121334075927734,
      "Longitude": 40.931831359863281,
      "Price": 780000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/18\/era-artika-gayrimenkul---den-maltepe-feyzullah-...-2-265413306.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2321\/viaport-venezia-en-kelepir-1-1-firsat-daire-1-200tl",
      "AdvertID": 9085613,
      "AdvertTitle": "VİAPORT VENEZİA EN KELEPİR 1+1 FIRSAT DAİRE 1.200TL",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1200.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/18\/viaport-venezia-en-kelepir-1-1-firsat-daire-1-2...-2-278295344.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/1433-2764\/atasehir-palladium-tower-da-hazir-ofisler",
      "AdvertID": 7520555,
      "AdvertTitle": "ATAŞEHİR PALLADIUM TOWER'DA HAZIR OFİSLER",
      "CurrencyCode": "USD",
      "Latitude": 29.099391937255859,
      "Longitude": 40.988319396972656,
      "Price": 1250.00,
      "ThumbImage": "IlanResmiThumb\/2014\/12\/08\/-palladium-tower-da-hazir-ofisler--2-188444645.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/31531-1713\/h-ustu-nde-deniz-manzarali-2-1-genis-balkonlu-daire--isik-tan",
      "AdvertID": 9076568,
      "AdvertTitle": "H.üstü'nde Deniz manzaralı 2+1 geniş balkonlu daire, Işık'tan",
      "CurrencyCode": "TL",
      "Latitude": 29.041885375976563,
      "Longitude": 41.08465576171875,
      "Price": 2750.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/12\/h-ustu-nde-denizmanzarali-2-1-genis-balkonlu-da...-2-277644027.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/52852-686\/maltepe-bescesmelerde-acil-satilik-devren-satilik-firin--cafe",
      "AdvertID": 8592327,
      "AdvertTitle": "MALTEPE BEŞÇEŞMELERDE ACİL SATILIK DEVREN SATILIK FIRIN  CAFE",
      "CurrencyCode": "TL",
      "Latitude": 29.129133224487305,
      "Longitude": 40.925445556640625,
      "Price": 180000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/16\/maltepe-bescesmelerde-acil-satilik-devren-satil...-2-270014046.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64347-7\/kirazli-metrosu-bagcilarda-meydan-gunluk-kiralik-daireler-49tl",
      "AdvertID": 8350389,
      "AdvertTitle": "KİRAZLI METROSU BAĞCILARDA MEYDAN GÜNLÜK KİRALIK DAİRELER 49TL",
      "CurrencyCode": "TL",
      "Latitude": 28.821945190429688,
      "Longitude": 41.030483245849609,
      "Price": 49.00,
      "ThumbImage": "IlanResmiThumb\/2015\/10\/08\/bagcilar-gunluk-kiralik-daire-2-229581988.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64347-45\/kirazli-metro-bagcilar-meydan-gunesli-gunluk-kiralik-daire-39-tl",
      "AdvertID": 8377413,
      "AdvertTitle": "KİRAZLI METRO BAĞCILAR MEYDAN GÜNEŞLİ GÜNLÜK KİRALIK DAİRE 39 TL",
      "CurrencyCode": "TL",
      "Latitude": 28.828039169311523,
      "Longitude": 41.039680480957031,
      "Price": 39.00,
      "ThumbImage": "IlanResmiThumb\/2015\/10\/08\/bagcilar-merkez-meydanda-gunluk-kiralik-daire-2-229552932.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/31007-740\/ssk-polikliniklerine-ve-ssk-hastamesine-yureme-measfesinde-3-1",
      "AdvertID": 8839518,
      "AdvertTitle": "SSK POLİKLİNİKLERİNE VE SSK HASTAMESİNE YÜREME MEASFESİNDE 3+1",
      "CurrencyCode": "TL",
      "Latitude": 29.063783645629883,
      "Longitude": 40.9884033203125,
      "Price": 500000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/20\/ssk-polikliniklerine-ve-ssk-hastamesine-yureme-...-2-261272346.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64347-54\/bagcilar-meydan-merkezde-gunluk-kiralik-daire",
      "AdvertID": 8377873,
      "AdvertTitle": "BAĞCILAR MEYDAN MERKEZDE GÜNLÜK KİRALIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.827953338623047,
      "Longitude": 41.038578033447266,
      "Price": 39.00,
      "ThumbImage": "IlanResmiThumb\/2015\/10\/08\/bagcilar-meydan-merkezde-gunluk-kiralik-daire-2-229577832.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64347-56\/bagcilar-merkezde-gunluk-kiralik-daire-maydanda",
      "AdvertID": 8377879,
      "AdvertTitle": "BAĞCILAR MERKEZDE GÜNLÜK KİRALIK DAİRE MAYDANDA",
      "CurrencyCode": "TL",
      "Latitude": 28.829927444458008,
      "Longitude": 41.037994384765625,
      "Price": 49.00,
      "ThumbImage": "IlanResmiThumb\/2015\/10\/08\/bagcilar-merkezde-gunluk-kiralik-daire-maydanda-2-229578524.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63704-173\/artist-emlak-tan-maresal-cakmak-mah-full-tadilatli-dukkan",
      "AdvertID": 9122988,
      "AdvertTitle": "Artist Emlak'tan Mareşal Çakmak Mah.Full Tadilatlı Dükkan",
      "CurrencyCode": "TL",
      "Latitude": 28.864971160888672,
      "Longitude": 41.0178337097168,
      "Price": 175000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/11\/artist-emlak-tan-maresal-cakmak-mah-full-tadila...-2-281538213.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/g-osmanpasa-karlitepe-de-krediye-uygun--kat-irtifak-tapulu--daire",
      "AdvertID": 8978914,
      "AdvertTitle": "G.Osmanpaşa Karlıtepe'de Krediye Uygun, Kat İrtifak Tapulu, Daire",
      "CurrencyCode": "TL",
      "Latitude": 28.926122665405273,
      "Longitude": 41.062656402587891,
      "Price": 300000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/16\/g-osmanpasa-karlitepe-de-krediye-uygun--kat-irt...-2-269935764.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/45326-1780\/gumus-emlaktan-feritselimpasa-cad-arkasinda-3-1-asansorlu-4-kat",
      "AdvertID": 7872312,
      "AdvertTitle": "GÜMÜŞ EMLAKTAN FERİTSELİMPAŞA CAD.ARKASINDA 3+1 ASANSÖRLÜ 4.KAT",
      "CurrencyCode": "TL",
      "Latitude": 28.860029220581055,
      "Longitude": 41.008541107177734,
      "Price": 245000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/03\/25\/feritselimpasa-caddesi-arkasinda-3-1-asansorlu-...-2-203387663.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/61359-44740\/kacmaz-emlak-bagdat-idealtepe-satilik-deniz-manzarali-dubleks",
      "AdvertID": 7481138,
      "AdvertTitle": "KAÇMAZ EMLAK BAĞDAT İDEALTEPE SATILIK DENİZ MANZARALI DUBLEKS",
      "CurrencyCode": "TL",
      "Latitude": 29.100948333740234,
      "Longitude": 40.9525146484375,
      "Price": 480000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/19\/kacmaz-emlak-bagdat-idealtepe-satilik-deniz-man...-2-265595207.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2331\/viaport-venezia-1-200tl",
      "AdvertID": 9087579,
      "AdvertTitle": "VİAPORT VENEZİA 1.200TL",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1200.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/19\/viaport-venezia-1-200tl-2-278461459.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/8132-1341\/bakirkoy-tunaboyu-evleri-havuzlu-yeni-sitede-satilik-3-1-daire",
      "AdvertID": 9062686,
      "AdvertTitle": "Bakırköy TunaBoyu Evleri havuzlu yeni sitede satılık 3+1 daire",
      "CurrencyCode": "USD",
      "Latitude": 28.881080627441406,
      "Longitude": 40.985012054443359,
      "Price": 670000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/09\/bakirkoy-tunaboyu-evleri-havuzlu-yeni-sitede-sa...-2-277021770.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64347-8\/kirazli-metro-bagcilar-gunesli-gunluk-kiralik-daire---49-tl",
      "AdvertID": 8350392,
      "AdvertTitle": "KİRAZLI METRO BAĞCILAR GÜNEŞLİ GÜNLÜK KİRALIK DAİRE . 49 TL",
      "CurrencyCode": "TL",
      "Latitude": 28.839454650878906,
      "Longitude": 41.047966003417969,
      "Price": 49.00,
      "ThumbImage": "IlanResmiThumb\/2015\/10\/11\/gunesli-meydanda-kirazli-metro-bagcilar-meydand...-2-229852113.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2339\/viaport-venezia-en-kelepir-firsat-1-1-residance",
      "AdvertID": 9089809,
      "AdvertTitle": "VİAPORT VENEZİA EN KELEPİR FIRSAT 1+1 RESİDANCE ",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1200.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/20\/viaport-venezia-en-kelepir-firsat-1-1-residance--2-278602560.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64265-160\/ulus-ta-sitede-robert-kolejine-yakin-esyali-3-1-kiralik-daire",
      "AdvertID": 9030425,
      "AdvertTitle": "ULUS'TA SİTEDE ROBERT KOLEJİNE YAKIN EŞYALI 3+1 KİRALIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.029756546020508,
      "Longitude": 41.0712890625,
      "Price": 5000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/19\/ulus-ta-site-icerisinde-esyali-3-1-kiralik-daire-2-274289247.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/59512-515\/atasehirde-satilik-arsa-2900-000-tl",
      "AdvertID": 8990376,
      "AdvertTitle": "ATAŞEHİRDE SATILIK ARSA 2900 000 TL",
      "CurrencyCode": "TL",
      "Latitude": 29.123725891113281,
      "Longitude": 40.979656219482422,
      "Price": 2900000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/21\/atasehirde-satilik-arsa-2750-000-tl-2-270712442.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/sahibinden-muhtesem-sile-karcakoy-de-180-derece-deniz-manzarali",
      "AdvertID": 9116313,
      "AdvertTitle": "SAHİBİNDEN MUHTEŞEM ŞİLE KARCAKÖY DE 180 derece DENİZ MANZARALI",
      "CurrencyCode": "TL",
      "Latitude": 29.089439392089844,
      "Longitude": 41.021289825439453,
      "Price": 650000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/05\/sahibinden-muhtesem-sile-karcakoy-de-denize-nazir-2-280630398.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/yeni-camlicada-acil-satilik-arsa-202-m2",
      "AdvertID": 9092182,
      "AdvertTitle": "YENİ ÇAMLICADA ACİL SATILIK ARSA 202 m2",
      "CurrencyCode": "TL",
      "Latitude": 29.160964965820313,
      "Longitude": 40.983024597167969,
      "Price": 560000.00,
      "ThumbImage": null
    },
    {
      "AdvertDetailLink": "\/ilandetay\/5050-2669\/atasehir-kardelenler-de-3-1-kiralik-daire-135-m2-ebeveyn-banyolu",
      "AdvertID": 8991553,
      "AdvertTitle": "ATAŞEHİR KARDELENLER DE 3+1 KİRALIK DAİRE 135 M2 EBEVEYN BANYOLU",
      "CurrencyCode": "TL",
      "Latitude": 29.118833541870117,
      "Longitude": 40.984821319580078,
      "Price": 2650.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/22\/atasehir-kardelenlerde-3-1-kiralik-daire-135-m2-2-270806554.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64356-606\/es-gayrimenkulden-cerrahpasa-mahallesinde-2-1-75m--satilik-daire",
      "AdvertID": 9091433,
      "AdvertTitle": "ES GAYRİMENKULDEN CERRAHPAŞA MAHALLESİNDE 2+1 75m² SATILIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.936567306518555,
      "Longitude": 41.004535675048828,
      "Price": 520000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/21\/es-gayrimenkulden-cerrahpasa-mahallesinde-2-1-7...-2-278714923.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/833-158\/alkent-sitesinde-masrafsiz-3-1-kose-daire",
      "AdvertID": 8921058,
      "AdvertTitle": "ALKENT SİTESİNDE MASRAFSIZ 3+1 KÖŞE DAİRE",
      "CurrencyCode": "USD",
      "Latitude": 29.031436920166016,
      "Longitude": 41.085628509521484,
      "Price": 1280000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/06\/alkent-sitesinde-masrafsiz-3-1-kose-daire-2-268506854.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2359\/viaport-venezia-en-kelepir-kiralik-1-1-daire-firsati-1-200tl",
      "AdvertID": 9091783,
      "AdvertTitle": "VİAPORT VENEZİA EN KELEPİR KİRALIK 1+1 DAİRE FIRSATI 1.200TL",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1200.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/22\/viaport-venezia-en-kelepir-kiralik-1-1-daire-fi...-2-278732435.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/2692-752\/mavia-dan-buyukkaraman-cad--nde--4-katli-kiralik-bina",
      "AdvertID": 9087746,
      "AdvertTitle": "MAVİA'DAN BÜYÜKKARAMAN CAD.'NDE  4 KATLI KİRALIK BİNA",
      "CurrencyCode": "TL",
      "Latitude": 28.941679000854492,
      "Longitude": 41.024593353271484,
      "Price": 3000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/22\/mavia-dan-buyukkaraman-cad--nde--4-katli-kirali...-2-278764397.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63884-221\/idealtepe-de-sifir-daire",
      "AdvertID": 9151979,
      "AdvertTitle": "idealtepe de sıfır daire",
      "CurrencyCode": "TL",
      "Latitude": 29.150611877441406,
      "Longitude": 40.929939270019531,
      "Price": 2800.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/30\/idealtepe-de-sifir-daire-2-283038021.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/8132-1310\/bakirkoy-bahceli-nizam-sifir-105m2--2-1-gardroup-odasi",
      "AdvertID": 8835623,
      "AdvertTitle": "Bakırköy Bahçeli nizam sıfır 105m2  2+1+gardroup odası ",
      "CurrencyCode": "TL",
      "Latitude": 28.878442764282227,
      "Longitude": 40.983688354492188,
      "Price": 3000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/26\/bakirkoy-kartaltepe-de-kiralik-sifir-2-1-konut-...-2-262272429.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/53246-333\/kayabasinda-kop-arsalar-deyerinde-alinir",
      "AdvertID": 5604063,
      "AdvertTitle": "Kayabaşında kop arsalar deyerinde alınır",
      "CurrencyCode": "TL",
      "Latitude": 28.753129959106445,
      "Longitude": 41.111564636230469,
      "Price": 1111111.00,
      "ThumbImage": "IlanResmiThumb\/2012\/12\/06\/kayabasinda-kop-arsalar-deyerinde-alinir-2-102345378.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65345-60\/nurtepe-meydanda-kiralik-4-1-dubleks",
      "AdvertID": 9135805,
      "AdvertTitle": "NURTEPE MEYDANDA KİRALIK 4+1 DUBLEKS",
      "CurrencyCode": "TL",
      "Latitude": 28.963342666625977,
      "Longitude": 41.080146789550781,
      "Price": 2000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/21\/nurtepe-meydanda-kiralik-4-1-dubleks-2-282138584.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/62849-328\/e-k-gayrimenkulden-merkez-mh-de-1-kat-3-1-lux-daire",
      "AdvertID": 8029363,
      "AdvertTitle": "E.K GAYRİMENKULDEN MERKEZ MH.DE 1.KAT 3+1 LÜX DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.937826156616211,
      "Longitude": 41.05767822265625,
      "Price": 360000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/05\/19\/e-k-gayrimenkulden-merkez-mh-de-1-kat-3-1-lux-d...-2-211449767.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-2\/great-apartment-for-selling-in-galata-has-sea-view",
      "AdvertID": 9097495,
      "AdvertTitle": "Great Apartment For Selling In Galata has sea view ",
      "CurrencyCode": "USD",
      "Latitude": 28.974267959594727,
      "Longitude": 41.027587890625,
      "Price": 750000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/25\/great-apartment-for-selling-in-galata-has-sea-v...-2-279115294.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/47177-213\/avcilar-da-satilik-daire-3-1-140-m2-kat-1-her-katta-tek-daire-",
      "AdvertID": 8852959,
      "AdvertTitle": "Avcılar da Satılık daire 3+1 140 m2 kat 1 her katta tek daire. ",
      "CurrencyCode": "TL",
      "Latitude": 28.735641479492187,
      "Longitude": 40.9765625,
      "Price": 300000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/27\/avcilar-da-satilik-daire-3-1-140-m2--2-262334762.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2383\/viaport-venezia-1-200tl",
      "AdvertID": 9097594,
      "AdvertTitle": "VİAPORT VENEZİA 1.200TL",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1200.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/25\/viaport-venezia-1-200tl-2-279122917.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/62440-1758\/bahcelievler-s-pasa-da-3-1-140-m2-kiralik-arakat-daire",
      "AdvertID": 9097913,
      "AdvertTitle": "BAHÇELİEVLER S.PAŞA DA 3+1 140 M2 KİRALIK ARAKAT DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.856555938720703,
      "Longitude": 41.004970550537109,
      "Price": 1200.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/25\/bahcelievler-s-pasa-da-3-1-140-m2-kiralik-araka...-2-279145914.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64908-38\/akbulut-emlaktan-satilik-daire",
      "AdvertID": 9098126,
      "AdvertTitle": "Akbulut Emlaktan satılık daire",
      "CurrencyCode": "TL",
      "Latitude": 29.142335891723633,
      "Longitude": 40.943218231201172,
      "Price": 390000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/25\/akbulut-emlaktan-satilik-daire-2-279158510.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65312-7\/altin-emlak-tan-gunesli-de-5-1-200-m2-dublex-daire-krediye-uygun",
      "AdvertID": 8818138,
      "AdvertTitle": "ALTIN EMLAK'TAN GÜNEŞLİ'DE 5+1 200 m2 DUBLEX DAİRE KREDİYE UYGUN",
      "CurrencyCode": "TL",
      "Latitude": 28.827262878417969,
      "Longitude": 41.035724639892578,
      "Price": 610000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/17\/altin-emlak-tan-gunesli-de-5-1-200-m2-dublex-da...-2-260862717.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2396\/viaport-venezia-en-kelepir-kiralik-1-1-daire-firsati-1-200tl",
      "AdvertID": 9099485,
      "AdvertTitle": "VİAPORT VENEZİA EN KELEPİR KİRALIK 1+1 DAİRE FIRSATI 1.200TL",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1200.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/26\/viaport-venezia-en-kelepir-kiralik-1-1-daire-fi...-2-279280001.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64395-3\/kirazli-metro-bagcilar-gunesli-gunluk-kiralik-daire",
      "AdvertID": 8373741,
      "AdvertTitle": "KİRAZLI METRO BAĞCILAR GÜNEŞLİ GÜNLÜK KİRALIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.838981628417969,
      "Longitude": 41.036247253417969,
      "Price": 49.00,
      "ThumbImage": "IlanResmiThumb\/2015\/10\/07\/bagcilarda-gunluk-kiralik-daire-2-229347099.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/53890-1445\/heybeliada-da-malikane",
      "AdvertID": 8855818,
      "AdvertTitle": "HEYBELİADA DA MALİKANE",
      "CurrencyCode": "USD",
      "Latitude": 29.094886779785156,
      "Longitude": 40.882522583007813,
      "Price": 3250000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/28\/heybeliada-da-malikane-2-262557465.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/48451-476\/satilik--daire--2-1--deniz--manzarali--sutluce--beyoglu",
      "AdvertID": 7881004,
      "AdvertTitle": "SATILIK  DAİRE  2+1  DENİZ  MANZARALI  SÜTLÜCE  BEYOĞLU",
      "CurrencyCode": "TL",
      "Latitude": 28.945236206054688,
      "Longitude": 41.053386688232422,
      "Price": 435000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/03\/30\/satilik--daire--2-1--deniz--manzarali-2-203938669.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2406\/viaport-venezia-1-1",
      "AdvertID": 9101508,
      "AdvertTitle": "VİAPORT VENEZİA 1+1",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1200.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/27\/viaport-venezia-1-1-2-279451313.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64828-121\/levent---buyukdere-cad-ustu-kurumsal-kiracili-plaza",
      "AdvertID": 8841779,
      "AdvertTitle": "LEVENT , BÜYÜKDERE CAD ÜSTÜ KURUMSAL KİRACILI PLAZA",
      "CurrencyCode": "USD",
      "Latitude": 28.983436584472656,
      "Longitude": 41.101474761962891,
      "Price": 90000000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/29\/levent---buyukdere-cad-ustu-kurumsal-kiracili-p...-2-262721601.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2412\/viaport-venezia-en-kelepir-1-1-baskada-yok-firsati--kacirma",
      "AdvertID": 9103206,
      "AdvertTitle": "VİAPORT VENEZİA EN KELEPİR 1+1 BAŞKADA YOK FIRSATI  KAÇIRMA ",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1200.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/28\/viaport-venezia-en-kelepir-1-1-baskada-yok-firs...-2-279616951.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65655-4\/uskudar-sultantepede-full-deniz-manzarali-sifir-dubleks-daire",
      "AdvertID": 9138011,
      "AdvertTitle": "ÜSKÜDAR SULTANTEPEDE FULL DENİZ MANZARALI SIFIR DUBLEKS DAİRE",
      "CurrencyCode": "USD",
      "Latitude": 29.010463714599609,
      "Longitude": 41.020736694335938,
      "Price": 1450000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/22\/fft2_mf282260654.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63214-102\/kucukcekmece-cumhuriyet-mahallesinde-satilik-daire-1-1",
      "AdvertID": 9078961,
      "AdvertTitle": "Küçükçekmece Cumhuriyet Mahallesinde Satılık Daire 1+1",
      "CurrencyCode": "TL",
      "Latitude": 28.777320861816406,
      "Longitude": 41.001361846923828,
      "Price": 215000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/14\/istanbul-kucukcekmece--cumhuriyet-mahlesisinde-...-2-277787797.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63214-2\/kucukcekmece-cumhuriyet-mahallesinde-satilik-bos-arsa",
      "AdvertID": 7745618,
      "AdvertTitle": "Küçükçekmece Cumhuriyet Mahallesinde Satılık Boş Arsa",
      "CurrencyCode": "TL",
      "Latitude": 28.777271270751953,
      "Longitude": 41.000564575195312,
      "Price": 385000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/02\/04\/kucukcekmece-cumhuriyet-mahallesinde-satilik-bo...-2-196674725.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/58918-643\/dragossahilemlak-tan-satilik-sifir-3-1-daire",
      "AdvertID": 8844227,
      "AdvertTitle": "DRAGOSSAHİLEMLAK'TAN SATILIK SIFIR 3+1 DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.181102752685547,
      "Longitude": 40.910465240478516,
      "Price": 350000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/22\/dragossahilemlak-tan-satilik-sifir-3-1-daire-2-261627801.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2436\/viaport-venezia-kiralik-en-firsat-1-1-daire-1-200tl",
      "AdvertID": 9105687,
      "AdvertTitle": "VİAPORT VENEZİA KİRALIK EN FIRSAT 1+1 DAİRE 1.200TL",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1200.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/30\/viaport-venezia-kiralik-en-firsat-1-1-daire-1-2...-2-279824814.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/410-1480\/tepeustu-cadde-uzeri-3-1-kombili-daire",
      "AdvertID": 8210566,
      "AdvertTitle": "TEPEÜSTÜ CADDE ÜZERİ 3+1 KOMBİLİ DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.777099609375,
      "Longitude": 40.995429992675781,
      "Price": 275000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/07\/29\/3-1-kombili-2-220843751.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/58146-942\/beklediginiz-ilan---levent-sumbul-sokakta-kiralik-villa",
      "AdvertID": 8865679,
      "AdvertTitle": "BEKLEDİĞİNİZ İLAN , LEVENT SÜMBÜL SOKAKTA KİRALIK VİLLA ",
      "CurrencyCode": "USD",
      "Latitude": 29.017047882080078,
      "Longitude": 41.086708068847656,
      "Price": 7500.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/03\/beklediginiz-ilan---levent-sumbul-sokakta-kiral...-2-263223125.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2449\/viaport-venezia-kiralik-en-kelepir-1-1-firsat-daire-1-200tl",
      "AdvertID": 9107778,
      "AdvertTitle": "VİAPORT VENEZİA KİRALIK EN KELEPİR 1+1 FIRSAT DAİRE 1.200TL",
      "CurrencyCode": "TL",
      "Latitude": 28.876504898071289,
      "Longitude": 41.0810432434082,
      "Price": 1200.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/31\/viaport-venezia-kiralik-en-kelepir-1-1-firsat-d...-2-279997455.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/47871-97\/durmaz-emlak-kiralik-3-1--120-m2",
      "AdvertID": 9101558,
      "AdvertTitle": "DURMAZ EMLAK KİRALIK 3+1. 120 M2 ",
      "CurrencyCode": "TL",
      "Latitude": 28.83929443359375,
      "Longitude": 41.017177581787109,
      "Price": 1000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/31\/durmaz-emlak-kiralik-3-1--120-m2--2-280010625.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64356-508\/e-s-gayrimenkul-den-cerrahpasa-da-4-1-140m--satilik-daire",
      "AdvertID": 8866467,
      "AdvertTitle": "E&S GAYRİMENKUL'DEN CERRAHPAŞA'DA 4+1 140m² SATILIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.942083358764648,
      "Longitude": 41.007644653320313,
      "Price": 550000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/03\/e-s-gayrimenkul-den-cerrahpasa-da-4-1-140m--sat...-2-263260302.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/5977-1050\/yeni-yapilan-site-icinde-3-1-lux-kiralik-daire",
      "AdvertID": 8866588,
      "AdvertTitle": "yeni yapılan site içinde 3+1 lüx kiralık daire",
      "CurrencyCode": "TL",
      "Latitude": 29.134925842285156,
      "Longitude": 40.921943664550781,
      "Price": 3250.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/03\/yeni-yapilan-site-icinde-3-1-lux-kiralik-daire-2-280492122.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/50082-8115\/muslum--emlaktan-satilik-3-1-deprem-sonrasi-ara-kat-daire",
      "AdvertID": 8867877,
      "AdvertTitle": "MÜSLÜM  EMLAKTAN SATILIK 3+1 DEPREM SONRASI ARA KAT DAİRE ",
      "CurrencyCode": "TL",
      "Latitude": 28.710666656494141,
      "Longitude": 40.987285614013672,
      "Price": 375000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/03\/muslum-emlaktan-merkez-mh-3-1-130m2-k-uygun-sah...-2-263340010.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-2\/sahibinden-uskudar-beylerbeyi-metrobus-bitisi-193m2-imarli-arsa-",
      "AdvertID": 8816037,
      "AdvertTitle": "SAHİBİNDEN ÜSKÜDAR BEYLERBEYİ METROBÜS BİTİŞİ 193M2 İMARLI ARSA.",
      "CurrencyCode": "TL",
      "Latitude": 29.048002243041992,
      "Longitude": 41.031391143798828,
      "Price": 1450000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/11\/sahibinden-uskudar-beylerbeyi-metrobus-bitisi-1...-2-260087980.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64887-240\/islek-cadde-uzerinde-kiralik-depolu-110m2-dukkan",
      "AdvertID": 8868596,
      "AdvertTitle": "İŞLEK CADDE ÜZERİNDE KİRALIK DEPOLU 110M2 DÜKKAN",
      "CurrencyCode": "TL",
      "Latitude": 29.150276184082031,
      "Longitude": 40.937702178955078,
      "Price": 2500.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/04\/islek-cadde-uzerinde-kiralik-depolu-130m2-dukkan-2-263381259.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/58146-960\/beyazit-talikuyuhamam-sk--da-70-m2-atolye--ofis--magaza--depo-vs-",
      "AdvertID": 8887578,
      "AdvertTitle": "BEYAZIT TALIKUYUHAMAM SK.'DA 70 M2 ATÖLYE, OFİS, MAGAZA, DEPO VS.",
      "CurrencyCode": "USD",
      "Latitude": 28.958719253540039,
      "Longitude": 41.008499145507813,
      "Price": 125000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/28\/beyazit-talikuyuhamam-sk--da-70-m2-atolye--ofis...-2-275251188.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-3\/cekmekoy--hamidiye--tiryaki--sitesinde-sahibinden-satilk-150m-daire",
      "AdvertID": 8751835,
      "AdvertTitle": "ÇEKMEKÖY, HAMİDİYE, TİRYAKİ, SİTESİNDE SAHİBİNDEN SATILK 150M DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.185310363769531,
      "Longitude": 41.022781372070312,
      "Price": 450000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/03\/16\/cekmekoy--hamidiye--tiryaki--sitesinde-sahibind...-2-255569796.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/61393-441\/maltepe-cevizlide-ulasima-yakin-satilik-3-1-daire",
      "AdvertID": 9049717,
      "AdvertTitle": "Maltepe Cevizlide Ulaşıma Yakın Satılık 3+1 daire",
      "CurrencyCode": "TL",
      "Latitude": 29.14808464050293,
      "Longitude": 40.917922973632812,
      "Price": 390000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/26\/maltepe-cevizlide-satilik-3-1-daire-2-282629982.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/49045-334\/aydin-emlaktan-icerenkoyde-yatirimlik-kupon-arsa",
      "AdvertID": 7295331,
      "AdvertTitle": "Aydın Emlaktan İçerenköyde Yatırımlık Kupon Arsa",
      "CurrencyCode": "TL",
      "Latitude": 29.109004974365234,
      "Longitude": 40.9748420715332,
      "Price": 3100000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/09\/14\/aydin-emlaktan-icerenkoyde-yatirimlik-kupon-arsa-2-226944659.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63547-674\/gaziosmanpasa-da-hesapli-satilik-sifir-ara-kat-daire",
      "AdvertID": 9061094,
      "AdvertTitle": "GAZİOSMANPAŞA'DA HESAPLI SATILIK SIFIR ARA KAT DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.917387008666992,
      "Longitude": 41.0623779296875,
      "Price": 235000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/02\/gaziosmanpasa-da-hesapli-satilik-sifir-ara-kat-...-2-280311166.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/38973-5897\/bahcelievler-devlet-hastanesi-yani-satilik-sifir-5-2-250m2-dublx",
      "AdvertID": 7589491,
      "AdvertTitle": "BAHÇELİEVLER DEVLET HASTANESİ YANI SATILIK SIFIR 5+2 250M2-DUBLX",
      "CurrencyCode": "TL",
      "Latitude": 28.842929840087891,
      "Longitude": 40.998752593994141,
      "Price": 600000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/05\/26\/bahcelievler-devlet-hastanesi-yani-satilik-sifi...-2-212433458.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63498-1112\/-duses-emlak-sahilde-lebiderya-deniz-manzarali-5-2-kaptan-kosku",
      "AdvertID": 8663879,
      "AdvertTitle": "*DÜŞEŞ EMLAK*SAHİLDE LEBİDERYA DENİZ MANZARALI 5+2 KAPTAN KÖŞKÜ",
      "CurrencyCode": "TL",
      "Latitude": 29.121109008789063,
      "Longitude": 40.934329986572266,
      "Price": 910000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/02\/08\/--duses-emlak--adatepe-sahilde-5-2-dubleks-daire---2-249825477.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65454-34\/atasehir-f-pasada-1850m2-imarli-arsa-5-200-000-tl-satilik",
      "AdvertID": 8950902,
      "AdvertTitle": "ATAŞEHİR.F.PAŞADA.1850M2.İMARLI.ARSA.5.200.000.TL.SATILIK",
      "CurrencyCode": "TL",
      "Latitude": 29.183078765869141,
      "Longitude": 40.985210418701172,
      "Price": 5200000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/02\/atasehir-f-pasada-1850m2-imarli-arsa-5-200-000-...-2-267989330.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63496-455\/karakas-gayrimenkul-den-kiralik-200m2-dukkan-depo-isyeri",
      "AdvertID": 9012276,
      "AdvertTitle": "KARAKAŞ GAYRİMENKUL'DEN KİRALIK 200M2 DÜKKAN&DEPO-İŞYERİ",
      "CurrencyCode": "TL",
      "Latitude": 29.149421691894531,
      "Longitude": 40.936988830566406,
      "Price": 1600.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/04\/karakas-gayrimenkul-den-kiralik-200m2-dukkan-de...-2-272493668.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/zeytinburnu-nuripasada-gunluk-kiralik-daire",
      "AdvertID": 9034073,
      "AdvertTitle": "zeytinburnu nuripaşada günlük kiralık daire",
      "CurrencyCode": "TL",
      "Latitude": 28.900005340576172,
      "Longitude": 40.990478515625,
      "Price": 120.00,
      "ThumbImage": null
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-9\/sahibinden-satilik-metrocity-a-kulede-720-m2-kiracili-tam-kat",
      "AdvertID": 8977156,
      "AdvertTitle": "SAHİBİNDEN SATILIK METROCITY A KULEDE 720 M2 KİRACILI TAM KAT ",
      "CurrencyCode": "USD",
      "Latitude": 29.01373291015625,
      "Longitude": 41.078315734863281,
      "Price": 6500000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/15\/metrocity-a-kulede---sahibinden-720-m2-kiracili...-2-269832285.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63122-97\/beyoglu-kalyoncu-kullugunda-yuksek-tavanli-satilik-daire",
      "AdvertID": 8249809,
      "AdvertTitle": "BEYOĞLU KALYONCU KULLUĞUNDA YÜKSEK TAVANLI SATILIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.976537704467773,
      "Longitude": 41.038116455078125,
      "Price": 295000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/08\/15\/beyoglu-kalyoncukullugunda-satilik-daire-2-222992535.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/62300-88\/brandium-rezidans-ta-kiralik-2-1-ev-ya-da-ofis-kullanimina-uygun",
      "AdvertID": 9115963,
      "AdvertTitle": "BRANDIUM REZİDANS'TA KİRALIK 2+1 EV YA DA OFİS KULLANIMINA UYGUN",
      "CurrencyCode": "TL",
      "Latitude": 29.13140869140625,
      "Longitude": 40.982685089111328,
      "Price": 3600.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/04\/brandium-rezidans-ta-kiralik-2-1-ev-ya-da-ofis-...-2-280584652.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/10975-2061\/kollektif-emlak-tan-satilik-yuksek-giris-2-1-daire",
      "AdvertID": 9146545,
      "AdvertTitle": "KOLLEKTİF EMLAK TAN SATILIK YÜKSEK GİRİŞ 2 1 DAİRE ",
      "CurrencyCode": "TL",
      "Latitude": 28.981361389160156,
      "Longitude": 41.076099395751953,
      "Price": 325000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/28\/kollektif-emlak-tan-satilik-yuksek-giris-2-1-da...-2-282883154.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/52182-1164\/umraniye-cakmak-mah--tepeustu---alemdag-cad-paralel-satilik-dukkan",
      "AdvertID": 8789036,
      "AdvertTitle": "ÜMRANİYE ÇAKMAK MAH, TEPEÜSTÜ , ALEMDAĞ CAD.PARALEL SATILIK DÜKKAN",
      "CurrencyCode": "TL",
      "Latitude": 29.127460479736328,
      "Longitude": 41.020637512207031,
      "Price": 365000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/16\/umraniye-cakmak-mah--tepeustu---alemdag-cad-par...-2-260841864.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/10975-2065\/gultepe-bildircin-sokakta-kiralik-2-1daire",
      "AdvertID": 9176456,
      "AdvertTitle": "GÜLTEPE BILDIRCIN SOKAKTA KİRALIK 2 1DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.988996505737305,
      "Longitude": 41.0832633972168,
      "Price": 1300.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/13\/gultepe-bildircin-sokakta-kiralik-2-1daire-2-284447022.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65243-11\/bostanci-gosteri-merkezine-komsu-satilik-daire",
      "AdvertID": 8964864,
      "AdvertTitle": "BOSTANCI GÖSTERİ MERKEZİNE KOMŞU SATILIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.102014541625977,
      "Longitude": 40.957191467285156,
      "Price": 690000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/11\/bostanci-gosteri-merkezine-komsu-satilik-daire-2-273097281.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63496-431\/karakas-gayrimenkul-den-altaycesme-de-kiralik-75m2-dukkan",
      "AdvertID": 8923524,
      "AdvertTitle": "KARAKAŞ GAYRİMENKUL'DEN ALTAYÇEŞME DE KİRALIK 75M2 DÜKKAN",
      "CurrencyCode": "TL",
      "Latitude": 29.13153076171875,
      "Longitude": 40.927715301513672,
      "Price": 1300.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/28\/karakas-gayrimenkul-den-altaycesme-de-kiralik-7...-2-267037428.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63857-1\/cekmekoy-hamidiye-satilik-butik-binada-sifir-arakat---3-1-daire",
      "AdvertID": 8088269,
      "AdvertTitle": "Çekmeköy Hamidiye Satılık butik binada sifir arakat,  3+1 Daire",
      "CurrencyCode": "TL",
      "Latitude": 29.183399200439453,
      "Longitude": 41.026081085205078,
      "Price": 345000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/09\/04\/cekmekoy-hamidiyede-cok-luks-asansorlu-120-m-3-...-2-225727496.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63175-505\/maltepe-metroda-migros-kiracili-10-sene-kontratli-300-m2",
      "AdvertID": 8879595,
      "AdvertTitle": "MALTEPE METRODA MİGROS KİRACILI 10 SENE KONTRATLI 300 m2 ",
      "CurrencyCode": "TL",
      "Latitude": 29.140665054321289,
      "Longitude": 40.938896179199219,
      "Price": 4000000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/09\/maltepe-metroda-kurumsal-firma-kiracili-300metr...-2-264223252.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64704-282\/directten-kartalda-adliye-ve-metroya-150-m-mesafede-sifir-ofis",
      "AdvertID": 8489588,
      "AdvertTitle": "DİRECTTEN KARTALDA ADLİYE VE METROYA 150 M MESAFEDE SIFIR OFİS",
      "CurrencyCode": "TL",
      "Latitude": 29.174291610717773,
      "Longitude": 40.912685394287109,
      "Price": 350000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/12\/06\/fft2_mf239658636.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/6945-162\/atasehir-umraniye-serifali-de-lavella-sitesinde-satilik--3-1",
      "AdvertID": 8836350,
      "AdvertTitle": "ATAŞEHİR-ÜMRANİYE ŞERİFALİ'DE LAVELLA SİTESİNDE SATILIK, 3 1 ",
      "CurrencyCode": "TL",
      "Latitude": 29.153079986572266,
      "Longitude": 41.000823974609375,
      "Price": 530000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/14\/atasehir-umraniye-serifali-de-lavella-sitesinde...-2-284593884.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/10975-2066\/gultepe-de-acil-satilik-daire-2-1-80-m2-krediye-uygun",
      "AdvertID": 9178807,
      "AdvertTitle": "Gültepe de acil satılık daire 2 1 80 m2 krediye uygun",
      "CurrencyCode": "TL",
      "Latitude": 28.988138198852539,
      "Longitude": 41.084846496582031,
      "Price": 270000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/14\/gultepe-de-acil-satilik-daire-2-1-80-m2-krediye...-2-284579297.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/kirazli-metro-bagcilar-meydan-gunesli-gunluk-kiralik-daire-49-tl",
      "AdvertID": 7715082,
      "AdvertTitle": "KİRAZLI METRO BAĞCILAR MEYDAN GÜNEŞLİ GÜNLÜK KİRALIK DAİRE 49 TL",
      "CurrencyCode": "TL",
      "Latitude": 28.826150894165039,
      "Longitude": 41.031940460205078,
      "Price": 49.00,
      "ThumbImage": "IlanResmiThumb\/2015\/01\/23\/bagcilar-gunesli-gunluk-kiralik-daire-2-194944462.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/bagcilarda-gunluk-kiralik-daire",
      "AdvertID": 6648317,
      "AdvertTitle": "Bağcılarda Günlük Kiralık Daire",
      "CurrencyCode": "TL",
      "Latitude": 28.824617385864258,
      "Longitude": 41.031551361083984,
      "Price": 49.00,
      "ThumbImage": "IlanResmiThumb\/2015\/08\/02\/bagcilar-gunluk-kiralik-daire-2-221419035.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64356-625\/e-s-gayrimenkulden-k-m-pasa-mahallesinde-2-1-75m--kiralik-daire",
      "AdvertID": 9120688,
      "AdvertTitle": "E&S GAYRİMENKULDEN K.M.PAŞA MAHALLESİNDE 2+1 75m² KİRALIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.934696197509766,
      "Longitude": 41.002998352050781,
      "Price": 1400.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/15\/e-s-gayrimenkulden-k-m-pasa-mahallesinde-2-1-75...-2-284681977.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/52445-114\/kucukyali-merkezde-4-1-deprem-statulu-manzarali-dublex-750-000tl",
      "AdvertID": 9120866,
      "AdvertTitle": "Küçükyalı merkezde 4+1 deprem statülü manzaralı DUBLEX 750.000TL",
      "CurrencyCode": "TL",
      "Latitude": 29.110496520996094,
      "Longitude": 40.950878143310547,
      "Price": 750000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/07\/kucukyali-merkezde-4-1-deprem-statulu-manzarali...-2-280973694.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/60835-121\/han-gayrimenkuldan-kiralik--dukkan",
      "AdvertID": 9178738,
      "AdvertTitle": "HAN GAYRİMENKULDAN KİRALIK  DÜKKAN",
      "CurrencyCode": "TL",
      "Latitude": 29.199909210205078,
      "Longitude": 40.916671752929688,
      "Price": 4000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/14\/han-gayrimenkuldan-satilik-dukkan-2-284576424.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/54043-53\/cihangir-ana-cad--3-1--cift-cepheli--kiralik-ofis-kati",
      "AdvertID": 9161491,
      "AdvertTitle": "CİHANGİR ANA CAD. 3+1  ÇİFT CEPHELİ  KİRALIK OFİS KATI",
      "CurrencyCode": "TL",
      "Latitude": 28.982833862304687,
      "Longitude": 41.031909942626953,
      "Price": 3500.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/05\/cihangir-ana-cad--3-1--cift-cepheli--kiralik-of...-2-283592821.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/2721-4525\/suadiye--de-yeni-binada-kiralik-180-m2-4-1-4300-tl",
      "AdvertID": 8883204,
      "AdvertTitle": "SUADİYE' de yeni binada KİRALIK 180 m2 4+1 4300.TL",
      "CurrencyCode": "TL",
      "Latitude": 29.090538024902344,
      "Longitude": 40.961750030517578,
      "Price": 4300.00,
      "ThumbImage": "IlanResmiThumb\/2016\/05\/10\/suadiye--de-yeni-binada-kiralik-180-m2-4-1-4750-tl-2-264426539.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/55875-3141\/ambarlida-cumartesi-pazari-yani-kombili-90m2-2-1-3-kat-yeni-boya",
      "AdvertID": 9142796,
      "AdvertTitle": "AMBARLIDA CUMARTESİ PAZARI YANI KOMBİLİ 90M2 2+1 3.KAT YENİ BOYA",
      "CurrencyCode": "TL",
      "Latitude": 28.712343215942383,
      "Longitude": 40.976787567138672,
      "Price": 1000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/01\/ambarlida-cumartesi-pazari-yani-kombili-90m2-2-...-2-283186725.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2518\/viaport-venezia-kiralik-2-1-en-kelepir-firsat-daire",
      "AdvertID": 9122303,
      "AdvertTitle": "VİAPORT VENEZİA KİRALIK 2+1 EN KELEPİR FIRSAT DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.876934051513672,
      "Longitude": 41.080657958984375,
      "Price": 1750.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/08\/viaport-venezia-kiralik-2-1-en-kelepir-firsat-d...-2-281056064.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/59151-1748\/umraniye-armaganevler-mahallesinde-satilik-2-1-arakat-daire",
      "AdvertID": 9126070,
      "AdvertTitle": "ÜMRANİYE ARMAĞANEVLER MAHALLESİNDE SATILIK 2+1 ARAKAT DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.114477157592773,
      "Longitude": 41.0163688659668,
      "Price": 307000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/10\/umraniye-armaganevler-mahallesinde-satilik-2-1-...-2-281363478.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/cok-ucuz--kelepir--sahibinden-fatih-te-satilik-daire-125-000-tl",
      "AdvertID": 8954820,
      "AdvertTitle": "ÇOK UCUZ, KELEPİR, SAHİBİNDEN FATİH'TE SATILIK DAİRE:125.000 TL",
      "CurrencyCode": "TL",
      "Latitude": 28.933820724487305,
      "Longitude": 41.025970458984375,
      "Price": 125000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/05\/sahibinden-fatih-de-satilik-daire-2-268311847.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-5\/haznedarin-prestijli-caddesinde-3-1-115-m2-masrafsiz-kose-daire",
      "AdvertID": 8409280,
      "AdvertTitle": "HAZNEDARIN PRESTİJLİ CADDESİNDE 3+1 115 M2 MASRAFSIZ KÖŞE DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.869495391845703,
      "Longitude": 41.011962890625,
      "Price": 310000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/10\/23\/haznedarin-prestijli-caddesinde-3-1-115-m2-masr...-2-Rotx34.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64610-168\/maltepe-esenkentte-e-5-metroya-cok-yakin-komple-satilik-bina",
      "AdvertID": 8733819,
      "AdvertTitle": "MALTEPE ESENKENTTE E-5 METROYA ÇOK YAKIN KOMPLE SATILIK BİNA",
      "CurrencyCode": "TL",
      "Latitude": 29.167778015136719,
      "Longitude": 40.9220085144043,
      "Price": 1700000.00,
      "ThumbImage": null
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/taksim-gumussuyunda-4-1-1-ofis-konut",
      "AdvertID": 8344008,
      "AdvertTitle": "Taksim Gümüssuyunda 4+1+1 Ofis\/konut",
      "CurrencyCode": "TL",
      "Latitude": 28.992431640625,
      "Longitude": 41.036762237548828,
      "Price": 3250.00,
      "ThumbImage": "IlanResmiThumb\/2015\/09\/20\/gumussuyunda-3-1-1-isyeri-veya-konut--2-227755234.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/50185-4057\/altaycesme-mah--agacseven-konaklarinda--160-m2-3-1-satilik-daire",
      "AdvertID": 9128388,
      "AdvertTitle": "Altayçeşme Mah. Ağaçseven Konaklarında  160 m2 3+1 Satılık Daire",
      "CurrencyCode": "TL",
      "Latitude": 29.126682281494141,
      "Longitude": 40.938919067382813,
      "Price": 1015000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/16\/altaycesme-mah--agacseven-konaklarinda--160-m2-...-2-281703147.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/sahibinden-4-1-150m2-sifir-luks-daire",
      "AdvertID": 9129015,
      "AdvertTitle": "Sahibinden 4+1 150m2 sıfır lüks daire",
      "CurrencyCode": "TL",
      "Latitude": 29.04680061340332,
      "Longitude": 40.986579895019531,
      "Price": 1390000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/16\/sahibinden-4-1-150m2-sifir-luks-daire-2-281736329.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/8250-748\/goztepe-emlaktan--feneryolu-ozgurluge-yakin-3-1-masrafsiz-",
      "AdvertID": 9130446,
      "AdvertTitle": "GÖZTEPE EMLAKTAN, FENERYOLU ÖZGÜRLÜGE YAKIN 3+1 MASRAFSIZ.",
      "CurrencyCode": "TL",
      "Latitude": 29.054878234863281,
      "Longitude": 40.983642578125,
      "Price": 2500.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/18\/goztepe-emlaktan--feneryolu-ozgurluge-yakin-3-1...-2-281839185.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/sahibindensatilik-detaylibilgi-icin-lutfen-0-533-660-65-18arayin",
      "AdvertID": 9130801,
      "AdvertTitle": "Sahibindensatılık detaylıbilgi için lütfen 0 533 660 65 18arayın",
      "CurrencyCode": "TL",
      "Latitude": 29.18769645690918,
      "Longitude": 40.9019660949707,
      "Price": 370000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/18\/adalet-sarayi-ve-metro-ya-yurume-mesafesin-de-s...-2-281844079.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2551\/viaport-venezia-saraylarinda-en-kelepir-2-1-firsat-daire-1-900tl",
      "AdvertID": 9131400,
      "AdvertTitle": "VİAPORT VENEZİA SARAYLARINDA EN KELEPİR 2+1 FIRSAT DAİRE 1.900TL",
      "CurrencyCode": "TL",
      "Latitude": 28.876934051513672,
      "Longitude": 41.080657958984375,
      "Price": 1900.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/19\/viaport-venezia-saraylarinda-en-kelepir-2-1-fir...-2-281879674.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63459-964\/acil-esenler-turkiye-emlak-2-1-kredili-80m2-1-kat-daire-kod-1051",
      "AdvertID": 9131573,
      "AdvertTitle": "ACİL ESENLER TÜRKİYE EMLAK 2+1 KREDİLİ 80M2 1.KAT DAİRE KOD 1051",
      "CurrencyCode": "TL",
      "Latitude": 28.866275787353516,
      "Longitude": 41.057220458984375,
      "Price": 208900.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/19\/esenler-turkiye-emlaktan-2-1-kredili-80m2-1-kat...-2-281892359.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64363-502\/zarif-gayrimenkul-den-ugur-mumcu-mh--4-katli-satilik-bina",
      "AdvertID": 9133223,
      "AdvertTitle": "ZARİF GAYRİMENKUL'DEN UĞUR MUMCU MH. 4 KATLI SATILIK BİNA ",
      "CurrencyCode": "TL",
      "Latitude": 28.863529205322266,
      "Longitude": 41.103866577148438,
      "Price": 2300000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/20\/zarif-gayrimenkul-den-ugur-mumcu-mh--4-katli-sa...-2-281989785.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/47450-112\/selale-evlerinde-280m2-luks-bahce-dubleksi",
      "AdvertID": 9136537,
      "AdvertTitle": "ŞELALE EVLERİNDE 280M2 LÜKS BAHÇE DUBLEKSİ",
      "CurrencyCode": "TL",
      "Latitude": 28.969074249267578,
      "Longitude": 41.082736968994141,
      "Price": 1100000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/21\/selale-evlerinde-240-m2-luks-bahce-dubleksi-2-282179859.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2559\/viaport-venezia-saraylarinda--en-kelepir--2-1-firsat-daire",
      "AdvertID": 9134833,
      "AdvertTitle": "VİAPORT VENEZİA SARAYLARINDA  EN KELEPİR  2+1 FIRSAT DAİRE ",
      "CurrencyCode": "TL",
      "Latitude": 28.876934051513672,
      "Longitude": 41.080657958984375,
      "Price": 1900.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/21\/viaport-venezia-saraylarinda--en-kelepir--2-1-f...-2-282084323.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65384-77\/icerenkoy-de-3---1-onu-acik-ferah-satilik-daire",
      "AdvertID": 9135036,
      "AdvertTitle": "İÇERENKÖY'DE 3 + 1 ÖNÜ AÇIK FERAH SATILIK DAİRE ",
      "CurrencyCode": "TL",
      "Latitude": 29.119499206542969,
      "Longitude": 40.972541809082031,
      "Price": 550000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/21\/icerenkoy-de-3---1-onu-acik-ferah-satilik-daire--2-282095228.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2566\/viaport-venezia-en-buyuk-firsat-2-1-saray-dairesi-peyzaj-manz",
      "AdvertID": 9137895,
      "AdvertTitle": "VİAPORT VENEZİA EN BÜYÜK FIRSAT 2+1 SARAY DAİRESİ PEYZAJ MANZ",
      "CurrencyCode": "TL",
      "Latitude": 28.876934051513672,
      "Longitude": 41.080657958984375,
      "Price": 2400.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/22\/viaport-venezia-en-buyuk-firsat-2-1-saray-daire...-2-282230673.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-3\/2-1-metroya-yurume-mesafesinde-ebeveynli-cocuk-parkli",
      "AdvertID": 9138298,
      "AdvertTitle": "2+1 metroya yürüme mesafesinde ebeveynli çocuk parklı",
      "CurrencyCode": "TL",
      "Latitude": 29.099542617797852,
      "Longitude": 40.958415985107422,
      "Price": 2650.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/22\/2-1-metroya-yurume-mesafesinde-ebeveynli-2-282251439.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2574\/viaport-venezia--kapali-mutfak-2-1-firsat-havuz-avm-manz",
      "AdvertID": 9139598,
      "AdvertTitle": "VİAPORT VENEZİA  KAPALI MUTFAK 2+1 FIRSAT HAVUZ AVM MANZ",
      "CurrencyCode": "TL",
      "Latitude": 28.876934051513672,
      "Longitude": 41.080657958984375,
      "Price": 2300.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/23\/viaport-venezia--kapali-mutfak-2-1-firsat-havuz...-2-282333791.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/sahibinden-kiralik-daire",
      "AdvertID": 9141294,
      "AdvertTitle": "SAHİBİNDEN KİRALIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.899423599243164,
      "Longitude": 41.000888824462891,
      "Price": 1200.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/24\/sahibinden-kiralik-daire-2-282435832.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2578\/viaport-venezia-saray-dairesi--projenin-en-buyuk-2-1-peyzaj-manz",
      "AdvertID": 9141320,
      "AdvertTitle": "VİAPORT VENEZİA SARAY DAİRESİ  PROJENIN EN BÜYÜK 2+1 PEYZAJ MANZ",
      "CurrencyCode": "TL",
      "Latitude": 28.876934051513672,
      "Longitude": 41.080657958984375,
      "Price": 2400.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/24\/viaport-venezia-saray-dairesi--projenin-en-buyu...-2-282437081.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65441-282\/ikitelli-m--akifte-ekspres-yoluna-cepheli-satilik-2-1-daire",
      "AdvertID": 9142019,
      "AdvertTitle": "İKİTELLİ M, AKİFTE EKSPRES YOLUNA CEPHELİ SATILIK 2+1 DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.797698974609375,
      "Longitude": 41.062202453613281,
      "Price": 225000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/24\/ikitelli-m--akifte-ekspres-yoluna-cepheli-satil...-2-282477172.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64407-133\/celik-emlak-tan-sefakoy-kemalpasa-mah-3-1-kiralik--yeni-esyali",
      "AdvertID": 9142597,
      "AdvertTitle": "ÇELİK EMLAK TAN SEFAKÖY KEMALPAŞA MAH 3+1 KİRALIK  YENİ EŞYALI ",
      "CurrencyCode": "TL",
      "Latitude": 28.793180465698242,
      "Longitude": 40.999404907226563,
      "Price": 1800.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/24\/celik-emlak-tan-sefakoy-kemalpasa-mah-3-1-kiral...-2-282508277.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64407-134\/cumhuriyet-mahallesinde-kiralik-2-1-daire-deprem-sonrasi-bina",
      "AdvertID": 9142666,
      "AdvertTitle": "CUMHURİYET MAHALLESİNDE KİRALIK 2+1 DAİRE DEPREM SONRASI BİNA ",
      "CurrencyCode": "TL",
      "Latitude": 28.780269622802734,
      "Longitude": 41.002754211425781,
      "Price": 1100.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/24\/cumhuriyet-mahallesinde-kiralik-2-1-daire-depre...-2-282511835.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/50702-3120\/esenler-real52-emlak-menderes-mah-3-1-satilik-daire-kod-6119",
      "AdvertID": 9143131,
      "AdvertTitle": "ESENLER REAL52 EMLAK MENDERES MAH.3+1 SATILIK DAİRE KOD:6119",
      "CurrencyCode": "TL",
      "Latitude": 28.876302719116211,
      "Longitude": 41.040683746337891,
      "Price": 400000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/25\/esenler-real52-emlak-menderes-mah-3-1-satilik-d...-2-282537641.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63704-75\/gungoren-de-krediye-uygun-satilik-dukkan",
      "AdvertID": 8010933,
      "AdvertTitle": "Güngören de krediye uygun satılık dükkan",
      "CurrencyCode": "TL",
      "Latitude": 28.865890502929688,
      "Longitude": 41.017063140869141,
      "Price": 100000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/24\/gungoren-de-krediye-uygun-satilik-dukkan-2-278925677.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2582\/viaport-venezia-kapali-mutfak-2-1-peyzaj-manz-balkonlu-daire",
      "AdvertID": 9143964,
      "AdvertTitle": "VİAPORT VENEZİA KAPALI MUTFAK 2+1 PEYZAJ MANZ BALKONLU DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.876934051513672,
      "Longitude": 41.080657958984375,
      "Price": 2300.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/26\/viaport-venezia-kapali-mutfak-2-1-peyzaj-manz-b...-2-282585215.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2586\/viaport-venezia-saraylarin-en-buyuk-k-mutfak--2-1-peyzaj-manz",
      "AdvertID": 9145806,
      "AdvertTitle": "VİAPORT VENEZİA SARAYLARIN EN BÜYÜK K.MUTFAK  2+1 PEYZAJ MANZ",
      "CurrencyCode": "TL",
      "Latitude": 28.876934051513672,
      "Longitude": 41.080657958984375,
      "Price": 2400.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/27\/viaport-venezia-saraylarin-en-buyuk-k-mutfak--2...-2-282690559.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/37371-931\/besiktas-abbasaga-yakin-ful-esyali-mini-lux-temiz-studyo",
      "AdvertID": 9050482,
      "AdvertTitle": "Beşiktaş Abbasağa Yakın Ful Eşyalı Mini Lüx Temiz Stüdyo",
      "CurrencyCode": "TL",
      "Latitude": 29.003437042236328,
      "Longitude": 41.046920776367188,
      "Price": 1100.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/28\/besiktas-abbasaga-yakin-ful-esyali-mini-lux-tem...-2-282905555.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65480-198\/pozitif-emlak-tan-yeni-projede-sifir-2-1-kelepir-daire",
      "AdvertID": 8981685,
      "AdvertTitle": "POZİTİF EMLAK'TAN YENİ PROJEDE SIFIR 2 1 KELEPİR DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.878107070922852,
      "Longitude": 41.183032989501953,
      "Price": 745000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/19\/pozitif-emlak-tan-yeni-projede-sifir-2-1-kelepi...-2-270334071.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63455-2950\/ayhan-insaattan-yunusemre-mah-satilik-235m2-4-2-dubleks-daire",
      "AdvertID": 8743510,
      "AdvertTitle": "AYHAN İNŞAATTAN YUNUSEMRE MAH SATILIK 235M2 4+2 DUBLEKS DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.893398284912109,
      "Longitude": 41.095394134521484,
      "Price": 510000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/03\/13\/ayhan-insaattan-yunusemre-mah-satilik-235m2-4-2...-2-255030170.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/47871-59\/durmaz-emlak--bagcilarda-yeni-hah--satilik--5-katli-bina",
      "AdvertID": 8719530,
      "AdvertTitle": "DURMAZ EMLAK. BAĞCILARDA YENİ HAH. SATILIK  5 KATLI BİNA",
      "CurrencyCode": "TL",
      "Latitude": 28.843778610229492,
      "Longitude": 41.040939331054688,
      "Price": 2600000.00,
      "ThumbImage": null
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64929-7\/caddebostan--mehtap-sokakta--hemen-teslim--manzarali--3-1-daire",
      "AdvertID": 8609606,
      "AdvertTitle": "CADDEBOSTAN, MEHTAP SOKAKTA, HEMEN TESLİM, MANZARALI, 3+1 DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.061853408813477,
      "Longitude": 40.966514587402344,
      "Price": 1850000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/06\/hemen-anahtar-teslim--caddebostan-sahilde----3-...-2-268469752.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63218-679\/maslak-agaoglu-1453-satilik-terasli-daire",
      "AdvertID": 8965647,
      "AdvertTitle": "MASLAK AĞAOĞLU 1453 satılık teraslı daire",
      "CurrencyCode": "TL",
      "Latitude": 29.020851135253906,
      "Longitude": 41.116302490234375,
      "Price": 525000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/09\/maslak-agaoglu-1453-satilik-terasli-daire-2-269061564.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/49230-32260\/75-yil-da-erpay-dan-kacirilmayacak-firsat-2-1-90m--yuksek-giris",
      "AdvertID": 8294315,
      "AdvertTitle": "75.YIL'DA ERPAY'DAN KAÇIRILMAYACAK FIRSAT 2+1 90m² YÜKSEK GİRİŞ ",
      "CurrencyCode": "TL",
      "Latitude": 28.905242919921875,
      "Longitude": 41.102249145507813,
      "Price": 192000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/09\/01\/75-yil-da-erpay-dan-kacirilmayacak-firsat-2-1-9...-2-225366026.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/60833-1373\/zeytinburnu-bodurlardan-istoc-ta-satilik-dukkan",
      "AdvertID": 8549866,
      "AdvertTitle": "ZEYTİNBURNU BODURLARDAN İSTOÇ TA SATILIK DÜKKAN",
      "CurrencyCode": "USD",
      "Latitude": 28.820098876953125,
      "Longitude": 41.055213928222656,
      "Price": 800000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/12\/21\/istoc-ta-satilik-dukkan-2-242286111.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/60833-1474\/zeytinburnunda-bodurlardan-yuksek-giris-satilik-daire",
      "AdvertID": 8569097,
      "AdvertTitle": "ZEYTİNBURNUNDA BODURLARDAN YÜKSEK GİRİŞ SATILIK DAİRE ",
      "CurrencyCode": "TL",
      "Latitude": 28.896831512451172,
      "Longitude": 40.999141693115234,
      "Price": 180000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/12\/29\/bodurlardan-yuksek-giris-satilik-daire--2-243662941.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/kemerburgazda-daire--villa-da-dublex--dogada",
      "AdvertID": 9027332,
      "AdvertTitle": "Kemerburgazda Daire (Villa da Dublex) Doğada",
      "CurrencyCode": "TL",
      "Latitude": 28.921239852905273,
      "Longitude": 41.157558441162109,
      "Price": 925000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/18\/kemerburgazda-daire--villa-da-dublex--dogada-2-274107310.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/havuzlu---guvenlikli-sosyal-alanli-sitede-satilik-daire",
      "AdvertID": 9190926,
      "AdvertTitle": "HAVUZLU , GÜVENLİKLİ SOSYAL ALANLI SİTEDE SATILIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.116159439086914,
      "Longitude": 41.011589050292969,
      "Price": 369000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/22\/havuzlu---guvenlikli-sosyal-alanli-sitede-satil...-2-285454608.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65312-82\/gunesli-asude-konaklarinda-2-1-80-m2-krediye-uygun-daire",
      "AdvertID": 9048903,
      "AdvertTitle": "GÜNEŞLİ ASUDE KONAKLARINDA 2+1 80 M2 KREDİYE UYGUN DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.819765090942383,
      "Longitude": 41.036182403564453,
      "Price": 310000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/22\/gunesli-asude-konaklarinda-2-1-80-m2-krediye-uy...-2-285500710.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/201-112\/atasehir-yenicamlica-3-1-130-m2",
      "AdvertID": 8972525,
      "AdvertTitle": "ATAŞEHİR YENİÇAMLICA 3+1 130 M2",
      "CurrencyCode": "TL",
      "Latitude": 29.160429000854492,
      "Longitude": 40.992095947265625,
      "Price": 590000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/13\/atasehjir-yenicamlica-3-1-130-m2-2-269521255.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/54369-1587\/sefakoy-kartaltepe-mahallesinde-satilik-depolu-dukkan--200m",
      "AdvertID": 8644640,
      "AdvertTitle": "SEFAKÖY KARTALTEPE MAHALLESİNDE satılık DEPOLU DÜKKAN  200M ",
      "CurrencyCode": "TL",
      "Latitude": 28.800788879394531,
      "Longitude": 41.0036735534668,
      "Price": 425000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/01\/30\/sefakoy-kartaltepe-mahallesinde-kiralik-depolu-...-2-248537270.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-2\/satilik-sahibinden-acil-arakat-guney-cephe-daire",
      "AdvertID": 8157985,
      "AdvertTitle": "Satılık SAHİBİNDEN Acil Arakat Güney Cephe Daire",
      "CurrencyCode": "TL",
      "Latitude": 28.837436676025391,
      "Longitude": 41.0068473815918,
      "Price": 145000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/07\/04\/satilik-arakat-guney-cephe-daire-2-217987395.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/49230-36955\/erpay-gayrimenkul-den-ismetpasa-mah--300m2-7-2-dublex-daire",
      "AdvertID": 8838744,
      "AdvertTitle": "ERPAY GAYRİMENKUL DEN İSMETPAŞA MAH. 300m2 7+2 DUBLEX DAİRE ",
      "CurrencyCode": "TL",
      "Latitude": 28.858123779296875,
      "Longitude": 41.111434936523438,
      "Price": 585000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/20\/erpay-gayrimenkul-den-ismetpasa-mah--300m2-7-2-...-2-261228435.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/8442-752\/kucukcekmece-cum--mah-de-230-m2-satilik-dublex-daire-",
      "AdvertID": 8181818,
      "AdvertTitle": "KÜÇÜKÇEKMECE CUM. MAH.DE 230 M2 SATILIK DUBLEX DAİRE.",
      "CurrencyCode": "TL",
      "Latitude": 28.768301010131836,
      "Longitude": 40.998687744140625,
      "Price": 750000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/07\/13\/kucukcekmece-cum--mah-de-230-m2-satilik-dublex-...-2-219273056.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/37371-913\/tesvikiye-ye-cikan-kalipci-sokakta-sifirlanmis-temiz-2-1-nezih",
      "AdvertID": 8841910,
      "AdvertTitle": "Teşvikiye'ye çıkan kalıpçı sokakta sıfırlanmış temiz 2+1 nezih",
      "CurrencyCode": "TL",
      "Latitude": 28.99885368347168,
      "Longitude": 41.047447204589844,
      "Price": 580000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/04\/21\/tesvikiye-ye-cikan-kalipci-sokakta-sifirlanmis-...-2-261452813.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65454-71\/atasehir-f-pasada-700-m2-depo-300m2-acik-arazli-9-750tl-kiralik",
      "AdvertID": 9135486,
      "AdvertTitle": "ATAŞEHİR.F.PAŞADA.700.M2.DEPO.300M2.AÇIK.ARAZLİ.9.750TL.KİRALIK",
      "CurrencyCode": "TL",
      "Latitude": 29.17445182800293,
      "Longitude": 40.9833984375,
      "Price": 9750.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/21\/atasehir-f-pasada-700-m2-depo-300m2-acik-arazli...-2-282155189.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/bagdat-caddesi--caddebostan-da-sahibinden-satilik-dukkan",
      "AdvertID": 9136599,
      "AdvertTitle": "Bağdat Caddesi, Caddebostan da sahibinden satılık dükkan",
      "CurrencyCode": "TL",
      "Latitude": 29.061058044433594,
      "Longitude": 40.970611572265625,
      "Price": 4850000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/22\/bagdat-caddesi--caddebostan-da-sahibinden-satil...-2-282183537.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/mulk-sahibinden-keyifli-luks-yapili-denizi-gren-iskanli--dubleks",
      "AdvertID": 9096455,
      "AdvertTitle": "Mulk sahibinden keyifli luks yapili denizi gren iskanlı  dubleks",
      "CurrencyCode": "TL",
      "Latitude": 28.705558776855469,
      "Longitude": 40.989551544189453,
      "Price": 445000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/08\/25\/mulk-sahibinden-keyifli-luks-yapili-kupon-dubleks--2-279156950.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/6945-178\/besiktas-ihlamur-caddesi-uzerinde-banka-kiracili-satilik-dukkan",
      "AdvertID": 9044110,
      "AdvertTitle": "BEŞİKTAŞ IHLAMUR CADDESİ ÜZERİNDE BANKA KİRACILI SATILIK DÜKKAN",
      "CurrencyCode": "TL",
      "Latitude": 29.003044128417969,
      "Longitude": 41.04547119140625,
      "Price": 7000000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/07\/27\/besiktas-ihlamur-caddesi-uzerinde-banka-kiracil...-2-275148809.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-4\/devren-internet-cafe---ps3-salonu-curo-yukseldi--yenibosna",
      "AdvertID": 8353189,
      "AdvertTitle": "DEVREN İNTERNET CAFE & PS3 SALONU cüro YÜKSELDİ  YENİBOSNA",
      "CurrencyCode": "TL",
      "Latitude": 28.832851409912109,
      "Longitude": 41.009124755859375,
      "Price": 23000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/09\/28\/devren-internet-cafe-yenibosna-2-228313071.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/50262-1269\/sahibinden-sakiz-agaci-cad-300-m2-full-sifir-satilik--dukkkan-",
      "AdvertID": 8956008,
      "AdvertTitle": "SAHİBİNDEN SAKIZ AĞACI CAD 300 M2 FULL SIFIR SATILIK  DÜKKKAN.",
      "CurrencyCode": "TL",
      "Latitude": 29.206254959106445,
      "Longitude": 40.921989440917969,
      "Price": 1450000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/06\/05\/sahibinden-sakiz-agaci-cad-300-m2-full-sifir-sa...-2-268356343.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64407-122\/satilik--daire-bahce-kati",
      "AdvertID": 9120898,
      "AdvertTitle": "SATILIK  DAİRE BAHÇE KATI",
      "CurrencyCode": "TL",
      "Latitude": 28.784753799438477,
      "Longitude": 40.99896240234375,
      "Price": 190000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/07\/satilik--daire-bahce-kati-2-280975387.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/8250-754\/goztepe-emlaktan--goztepe-istasyona-yakin-3-1-145-m2-masrafsiz",
      "AdvertID": 9149371,
      "AdvertTitle": "GÖZTEPE EMLAKTAN, GÖZTEPE İSTASYONA YAKIN 3+1 145 M2 MASRAFSIZ ",
      "CurrencyCode": "TL",
      "Latitude": 29.067468643188477,
      "Longitude": 40.977016448974609,
      "Price": 2800.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/28\/goztepe-emlaktan--goztepe-istasyona-yakin-3-1-1...-2-282898056.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/10674-109\/son-firsat-tek-daire-fiyatina-cift-daire-mukemmel-site-300m2-",
      "AdvertID": 9149957,
      "AdvertTitle": "SON FIRSAT TEK DAİRE FİYATINA ÇİFT DAİRE MÜKEMMEL SİTE 300M2\u000a",
      "CurrencyCode": "TL",
      "Latitude": 29.232688903808594,
      "Longitude": 41.029903411865234,
      "Price": 675000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/29\/son-firsat-tek-daire-fiyatina-cift-daire-mukemm...-2-282997286.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/47883-877\/sisli-esentepe-de-ozdilekpar-in-yanin-da-2-1kiralik-temiz-daire",
      "AdvertID": 9151186,
      "AdvertTitle": "ŞİŞLİ ESENTEPE DE ÖZDİLEKPAR IN YANIN DA 2+1KİRALIK TEMIZ DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.994400024414063,
      "Longitude": 41.056606292724609,
      "Price": 1550.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/29\/sisli-esentepe-de-ozdilekpar-in-yanin-da-2-1kir...-2-282990337.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/59512-548\/umraniye-serifali-mehmet-akif-mahallesinde-kiralik-depolu-dukkan",
      "AdvertID": 9151929,
      "AdvertTitle": "ÜMRANİYE ŞERİFALİ MEHMET AKİF MAHALLESİNDE KİRALIK DEPOLU DÜKKAN",
      "CurrencyCode": "TL",
      "Latitude": 29.143617630004883,
      "Longitude": 41.006690979003906,
      "Price": 2000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/29\/umraniye-serifali-mehmet-akif-mahallesinde-kira...-2-283034071.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2609\/viaport-venezia-kiralik-2-1-havuz-avm-manz-en-buyuk-tip",
      "AdvertID": 9152224,
      "AdvertTitle": "VİAPORT VENEZİA KİRALIK 2+1 HAVUZ AVM MANZ EN BÜYÜK TİP ",
      "CurrencyCode": "TL",
      "Latitude": 28.876934051513672,
      "Longitude": 41.080657958984375,
      "Price": 2400.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/30\/viaport-venezia-kiralik-2-1-havuz-avm-manz-en-b...-2-283053736.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/49242-633\/kartal-koradonboyu-sahilde-super-deniz-manzarali-170-m2-kattatek",
      "AdvertID": 9150739,
      "AdvertTitle": "KARTAL KORADONBOYU SAHİLDE SÜPER DENIZ MANZARALI 170 M2 KATTATEK",
      "CurrencyCode": "TL",
      "Latitude": 29.160449981689453,
      "Longitude": 40.902080535888672,
      "Price": 1000000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/30\/kartal-koradonboyu-sahilde-super-deniz-manzaral...-2-283139345.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/10674-114\/kemerkent-sitesi-2-kat-3-1-140m--260000",
      "AdvertID": 9154167,
      "AdvertTitle": "KEMERKENT SİTESİ 2.KAT 3+1 140M  260000",
      "CurrencyCode": "TL",
      "Latitude": 29.170974731445313,
      "Longitude": 41.020511627197266,
      "Price": 260000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/01\/kemerkent-sitesi-2-kat-3-1-140m--260000-2-283157166.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65678-11\/mega-yapi-dan-m-kemalpasa-da-metrobuse-2-dakika-lux-daireler-",
      "AdvertID": 9154841,
      "AdvertTitle": "MEGA YAPI'DAN M.KEMALPAŞA DA METROBÜSE 2 DAKİKA LÜX DAİRELER.",
      "CurrencyCode": "TL",
      "Latitude": 28.710880279541016,
      "Longitude": 40.984821319580078,
      "Price": 259000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/01\/mega-yapi-dan-m-kemalpasa-da-metrobuse-2-dakika...-2-283196017.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65634-627\/serifalide-nezih-sitedesatilik-daire-sevincten",
      "AdvertID": 9156259,
      "AdvertTitle": "ŞERİFALİDE NEZİH SİTEDESATILIK DAİRE SEVİNÇTEN",
      "CurrencyCode": "TL",
      "Latitude": 29.146255493164062,
      "Longitude": 41.000888824462891,
      "Price": 650000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/02\/serifalide-nezih-sitedesatilik-daire-sevincten-2-283279302.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/49230-38219\/erpay-gayrimenkulden-s-ciftligi-mah-de-satilik-150m2-2-2-dublex",
      "AdvertID": 9001555,
      "AdvertTitle": "ERPAY GAYRİMENKULDEN S.ÇİFTLİĞİ MAH DE SATILIK 150M2 2+2 DUBLEX",
      "CurrencyCode": "TL",
      "Latitude": 28.860782623291016,
      "Longitude": 41.0988883972168,
      "Price": 315000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/02\/erpay-gayrimenkulden-s-ciftligi-mah-de-satilik-...-2-283282860.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2616\/viaport-venezia--kiralik--deniz-adalar-manz-firsat-1-1-residance",
      "AdvertID": 9156712,
      "AdvertTitle": "VİAPORT VENEZİA  KİRALIK  DENİZ ADALAR MANZ FIRSAT 1+1 RESİDANCE",
      "CurrencyCode": "TL",
      "Latitude": 28.877262115478516,
      "Longitude": 41.079544067382813,
      "Price": 1350.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/03\/viaport-venezia--kiralik--deniz-adalar-manz-fir...-2-283309856.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65634-633\/serifalide-sahane-satilik-kelepir-3-1-daire-sevincten",
      "AdvertID": 9157633,
      "AdvertTitle": "ŞERİFALİDE ŞAHANE SATILIK KELEPİR 3+1 DAİRE SEVİNÇTEN",
      "CurrencyCode": "TL",
      "Latitude": 29.146041870117188,
      "Longitude": 41.000759124755859,
      "Price": 440000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/03\/serifalidesahane-satilik-kelepir-3-1-daire-sevi...-2-283361583.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/47291-2986\/mercandan-guzeltepede-super-konumda-3-1-100-m2-daire",
      "AdvertID": 9158975,
      "AdvertTitle": "MERCANDAN GUZELTEPEDE SUPER KONUMDA 3+1 100 M2 DAIRE ",
      "CurrencyCode": "TL",
      "Latitude": 28.957256317138672,
      "Longitude": 41.086921691894531,
      "Price": 370000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/04\/mercandan-guzeltepede-super-konumda-3-1-120-m2-...-2-283441861.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65634-640\/serifalide-elit-sitede-kelepir-satilik-daire-sevincten",
      "AdvertID": 9159205,
      "AdvertTitle": "ŞERİFALİDE ELİT SİTEDE KELEPİR SATILIK DAİRE SEVİNÇTEN",
      "CurrencyCode": "TL",
      "Latitude": 29.145698547363281,
      "Longitude": 41.001213073730469,
      "Price": 630000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/04\/serifalide-elit-sitede-kelepir-satilik-daire-se...-2-283456025.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65153-330\/ev-emlak-tan-serifali-de-satilik-2-1-120m2-residence-daire",
      "AdvertID": 9162156,
      "AdvertTitle": "EV EMLAK'TAN ŞERİFALİ DE SATILIK 2+1 120m2 RESİDENCE DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.136857986450195,
      "Longitude": 41.004322052001953,
      "Price": 540000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/05\/ev-emlak-tan-serifali-de-satilik-2-1-120m2-resi...-2-283628939.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/59600-720\/duru-dan-yenibosna-mevlana-cami-karsisi-satilik-sifir-1-1-daire",
      "AdvertID": 9163158,
      "AdvertTitle": "Duru'dan Yenibosna Mevlana Cami Karşısı Satılık Sıfır 1+1 Daire",
      "CurrencyCode": "TL",
      "Latitude": 28.837974548339844,
      "Longitude": 41.008338928222656,
      "Price": 150000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/06\/duru-dan-yenibosna-mevlana-cami-karsisi-satilik...-2-283688276.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/45473-938\/maltepe-altay-cesme-mah-3-1-kombili--caddeye-cepeli-ici-yenilen",
      "AdvertID": 9165842,
      "AdvertTitle": "Maltepe Altay çeşme Mah 3+1 kombili  caddeye cepeli içi yenilen",
      "CurrencyCode": "TL",
      "Latitude": 29.130327224731445,
      "Longitude": 40.927581787109375,
      "Price": 455000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/07\/maltepe-altay-cesme-mah-3-1-kombili--caddeye-ce...-2-283846438.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2632\/viaport--venezia-kiralik-1-1",
      "AdvertID": 9166590,
      "AdvertTitle": "VİAPORT  VENEZİA KİRALIK 1+1",
      "CurrencyCode": "TL",
      "Latitude": 28.877262115478516,
      "Longitude": 41.079544067382813,
      "Price": 1350.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/08\/viaport--venezia-kiralik-1-1-2-283888102.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/64407-139\/celik-emlaktan-satilik-alti-2-1-ustu-2-1------duplex-yesilova-da",
      "AdvertID": 9166996,
      "AdvertTitle": "ÇELİK EMLAKTAN SATILIK ALTI 2+1 ÜSTÜ 2+1, , , DUPLEX YEŞİLOVA.DA",
      "CurrencyCode": "TL",
      "Latitude": 28.788412094116211,
      "Longitude": 40.9908561706543,
      "Price": 360000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/08\/celik-emlaktan-satilik-alti-2-1-ustu-2-1------d...-2-283912038.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63808-2641\/viaport-venezia-kiralik-1-1",
      "AdvertID": 9169701,
      "AdvertTitle": "VİAPORT VENEZİA KİRALIK 1+1",
      "CurrencyCode": "TL",
      "Latitude": 28.877262115478516,
      "Longitude": 41.079544067382813,
      "Price": 1300.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/10\/viaport-venezia-kiralik-1-1-2-284065570.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-1\/merkezefendi-de-cift-cepheli-bakimli-ve-masrafsiz-satilik-daire",
      "AdvertID": 9177764,
      "AdvertTitle": "Merkezefendi de çift cepheli bakımlı ve masrafsız satılık daire ",
      "CurrencyCode": "TL",
      "Latitude": 28.913539886474609,
      "Longitude": 41.009040832519531,
      "Price": 360000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/13\/merkezefendi-de-cift-cepheli-bakimli-satilik-daire-2-284514453.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/59512-563\/serifalide-3-1-kiralik-daire",
      "AdvertID": 9176118,
      "AdvertTitle": "ŞERİFALİDE 3+1 KİRALIK DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.143852233886719,
      "Longitude": 41.002895355224609,
      "Price": 2350.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/13\/serifalide-3-1-kiralik-daire-2-284428821.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/8140-42704\/-findikli-ataturk-caddesi-nde-75m2--0--2-000-tl-getirili-dukkan",
      "AdvertID": 9178142,
      "AdvertTitle": "\u000aFINDIKLI ATATÜRK CADDESİ'NDE 75m2 '0' 2.000 TL GETİRİLİ DÜKKAN ",
      "CurrencyCode": "TL",
      "Latitude": 29.130977630615234,
      "Longitude": 40.964473724365234,
      "Price": 400000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/14\/-findikli-ataturk-caddesi-nde-75m2--0--2-000-tl...-2-284537680.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/8140-42729\/bostanci-senesenevler-de-135m2-6-kat-3746m2-arsali-bina-da-3-1",
      "AdvertID": 9178958,
      "AdvertTitle": "BOSTANCI ŞENESENEVLER DE 135m2 6.KAT 3746m2 ARSALI BİNA DA 3+1 ",
      "CurrencyCode": "TL",
      "Latitude": 29.089351654052734,
      "Longitude": 40.959938049316406,
      "Price": 635000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/14\/bostanci-senesenevler-de-135m2-6-kat-3746m2-ars...-2-284588751.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/8140-42733\/kartal-vadi-kule-de-66m2-1-kat-1-500-tl-getirili--0--satilik-1-1",
      "AdvertID": 9179061,
      "AdvertTitle": "KARTAL VADİ KULE DE 66m2 1.KAT 1.500 TL GETİRİLİ '0' SATILIK 1+1",
      "CurrencyCode": "TL",
      "Latitude": 29.170116424560547,
      "Longitude": 40.904170989990234,
      "Price": 340000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/14\/kartal-vadi-kule-de-66m2-1-kat-1-500-tl-getiril...-2-284595262.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/8140-42742\/suadiye-sahilde-kismi-deniz-manzarali-190m2-6-kat-satilik-4-1",
      "AdvertID": 9179245,
      "AdvertTitle": "SUADİYE SAHİLDE KISMİ DENİZ MANZARALI 190m2 6.KAT SATILIK 4+1",
      "CurrencyCode": "TL",
      "Latitude": 29.081882476806641,
      "Longitude": 40.960845947265625,
      "Price": 1650000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/14\/suadiye-sahilde-kismi-deniz-manzarali-190m2-6-k...-2-284606553.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/8140-42745\/acibadem-universitesi-ne-yakin-projesi-hazir-342m2-plaza-arsasi",
      "AdvertID": 9179380,
      "AdvertTitle": "ACIBADEM ÜNİVERSİTESİ NE YAKIN PROJESİ HAZIR 342m2 PLAZA ARSASI ",
      "CurrencyCode": "TL",
      "Latitude": 29.111858367919922,
      "Longitude": 40.980258941650391,
      "Price": 3500000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/14\/acibadem-universitesi-ne-yakin-projesi-hazir-34...-2-284615339.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/8140-42773\/atasehir-sifa-hastanesine-yakin-2-kat-65m2-havuz-cephe-1-1-daire",
      "AdvertID": 9180028,
      "AdvertTitle": "ATAŞEHİR ŞİFA HASTANESİNE YAKIN 2.KAT 65m2 HAVUZ CEPHE 1+1 DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.105228424072266,
      "Longitude": 40.977890014648438,
      "Price": 360000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/15\/atasehir-sifa-hastanesine-yakin-2-kat-65m2-havu...-2-284654730.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/8140-42838\/suadiye-bagdat-caddesi-ne-2-dakika-2-yillik-binada-140m2-3-1",
      "AdvertID": 9184255,
      "AdvertTitle": "SUADİYE BAĞDAT CADDESİ'NE 2 DAKİKA 2 YILLIK BİNADA 140m2 3+1  ",
      "CurrencyCode": "TL",
      "Latitude": 29.086948394775391,
      "Longitude": 40.959678649902344,
      "Price": 7000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/17\/suadiye-bagdat-caddesi-ne-2-dakika-2-yillik-bin...-2-284899347.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/8140-42845\/saskinbakkal-sahilde-220m2-ultra-lux-ebeveynli-otoparkli-4-1",
      "AdvertID": 9185662,
      "AdvertTitle": "ŞAŞKINBAKKAL SAHİLDE 220M2 ULTRA LÜX EBEVEYNLİ OTOPARKLI 4+1 ",
      "CurrencyCode": "TL",
      "Latitude": 29.078792572021484,
      "Longitude": 40.965122222900391,
      "Price": 9100.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/18\/saskinbakkal-sahilde-220m2-ultra-lux-ebeveynli-...-2-284966462.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65454-55\/atasehir-f-pasada-210m2-137-tarlada-hisse-satilik-285-000-tl",
      "AdvertID": 8994626,
      "AdvertTitle": "ATAŞEHİR.F.PAŞADA.210M2.137.TARLADA.HİSSE.SATILIK.285.000.TL",
      "CurrencyCode": "TL",
      "Latitude": 29.169517517089844,
      "Longitude": 40.987350463867187,
      "Price": 285000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/16\/atasehir-f-pasada-210m2-137-tarlada-hisse-satil...-2-281738470.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/60779-128\/karlitepe-2-1-uygun-fiyat-dairemiz",
      "AdvertID": 9190420,
      "AdvertTitle": "KARLITEPE 2+1 UYGUN FIYAT DAIREMİZ",
      "CurrencyCode": "TL",
      "Latitude": 28.912277221679688,
      "Longitude": 41.062721252441406,
      "Price": 335000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/20\/karlitepe-2-1-uygun-fiyat-dairemiz-2-285255229.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/0-2\/sahibinden-kentsel-donusum-bolgesinde-krediye-uygun--3-1--daire",
      "AdvertID": 9193206,
      "AdvertTitle": "SAHİBİNDEN KENTSEL DÖNÜŞÜM BÖLGESİNDE KREDİYE UYGUN  3+1  DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.837440490722656,
      "Longitude": 41.001949310302734,
      "Price": 230000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/22\/sahibinden-kentsel-donusum-bolgesinde-krediye-u...-2-285419353.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/3677-857\/goztepede-sifir-180-m2--4-1-terasli-dubleks",
      "AdvertID": 8682996,
      "AdvertTitle": "Göztepede Sıfır 180 m2, 4+1 teraslı dubleks",
      "CurrencyCode": "TL",
      "Latitude": 29.065135955810547,
      "Longitude": 40.9771614074707,
      "Price": 1750000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/20\/goztepede-sifir-180-m2--4-1-terasli-dubleks-2-282017848.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/65349-33\/besiktas-barbaros-bulvari-uzerinde-komple-kiralik-1600-m2-bina",
      "AdvertID": 9118480,
      "AdvertTitle": "Beşiktaş Barbaros Bulvarı Üzerinde Komple Kiralık 1600 m2 Bina",
      "CurrencyCode": "USD",
      "Latitude": 29.006914138793945,
      "Longitude": 41.044258117675781,
      "Price": 30000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/09\/20\/besiktas-barbaros-bulvari-uzerinde-komple-kiral...-2-281965306.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/63496-219\/karakas-gayrimenkul-den-baglarbasi-nda-satilik-sifir-daire",
      "AdvertID": 8419647,
      "AdvertTitle": "KARAKAŞ GAYRİMENKUL'DEN BAĞLARBAŞI'NDA SATILIK SIFIR DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 29.137147903442383,
      "Longitude": 40.93060302734375,
      "Price": 520000.00,
      "ThumbImage": "IlanResmiThumb\/2015\/10\/27\/karakas-gayrimenkul-den-baglarbasi-nda-satilik-...-2-232375028.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/49230-38042\/erpay-gayrimenkulden-cebeci-mah-de-satilik-4-2-dublex-daire",
      "AdvertID": 8974022,
      "AdvertTitle": "ERPAY GAYRIMENKULDEN CEBECİ MAH DE SATILIK 4+2 DUBLEX DAİRE",
      "CurrencyCode": "TL",
      "Latitude": 28.869892120361328,
      "Longitude": 41.112419128417969,
      "Price": 355000.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/02\/erpay-gayrimenkulden-cebeci-mah-de-satilik-4-2-...-2-283294404.Jpeg"
    },
    {
      "AdvertDetailLink": "\/ilandetay\/1433-3002\/kagithane-papirus-plaza-da-hazir-ofisler",
      "AdvertID": 8946109,
      "AdvertTitle": "KAĞITHANE PAPİRUS PLAZA'DA HAZIR OFİSLER",
      "CurrencyCode": "USD",
      "Latitude": 28.992061614990234,
      "Longitude": 41.090412139892578,
      "Price": 500.00,
      "ThumbImage": "IlanResmiThumb\/2016\/10\/14\/kagithane-papirus-plaza-da-hazir-ofisler-2-284554489.Jpeg"
    }
  ];
export default class mpcluster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  convertData(){
    const locationData = MARKERS;
    const results = {
      type: "MapCollection",
      features: []
    };
   locationData.map((value,key) => {
      array = {
          type: 'Map',
          properties: {
              id: value.AdvertID,
              name: value.AdvertTitle,
              lat_x: value.Latitude,
              long_x: value.Longitude,
          },
          geometry: {
              type: 'Point',
              coordinates: [
                  value.Longitude,
                  value.Latitude,
              ]
          }
      }
      results.features.push(array);
   });
  
   return results;
  }
  render() {
    return (
      <View style={styles.container}>
        <ClusterMap
          style={styles.map}
          initialRegion={{
            latitude: 41.008929,
            longitude: 28.967115,
            latitudeDelta: 0.092,
            longitudeDelta: 0.3,
          }}
          region={ this.convertData() }
          onRegionChange={(region) => null}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});

AppRegistry.registerComponent('mpcluster', () => mpcluster);
