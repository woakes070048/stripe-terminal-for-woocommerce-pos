!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;e.define("select2/i18n/hu",[],function(){return{errorLoading:function(){return"Az eredmények betöltése nem sikerült."},inputTooLong:function(e){return"Túl hosszú. "+(e.input.length-e.maximum)+" karakterrel több, mint kellene."},inputTooShort:function(e){return"Túl rövid. Még "+(e.minimum-e.input.length)+" karakter hiányzik."},loadingMore:function(){return"Töltés…"},maximumSelected:function(e){return"Csak "+e.maximum+" elemet lehet kiválasztani."},noResults:function(){return"Nincs találat."},searching:function(){return"Keresés…"},removeAllItems:function(){return"Távolítson el minden elemet"}}}),e.define,e.require}(),function(e,n){"object"==typeof exports&&"undefined"!=typeof module&&"function"==typeof require?n(require("../moment")):"function"==typeof define&&define.amd?define(["../moment"],n):n(e.moment)}(this,function(e){"use strict";var n="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");function r(e,n,r,t){var s=e;switch(r){case"s":return t||n?"néhány másodperc":"néhány másodperce";case"ss":return s+(t||n)?" másodperc":" másodperce";case"m":return"egy"+(t||n?" perc":" perce");case"mm":return s+(t||n?" perc":" perce");case"h":return"egy"+(t||n?" óra":" órája");case"hh":return s+(t||n?" óra":" órája");case"d":return"egy"+(t||n?" nap":" napja");case"dd":return s+(t||n?" nap":" napja");case"M":return"egy"+(t||n?" hónap":" hónapja");case"MM":return s+(t||n?" hónap":" hónapja");case"y":return"egy"+(t||n?" év":" éve");case"yy":return s+(t||n?" év":" éve")}return""}function t(e){return(e?"":"[múlt] ")+"["+n[this.day()]+"] LT[-kor]"}return e.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,n,r){return e<12?!0===r?"de":"DE":!0===r?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return t.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return t.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:r,ss:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})});