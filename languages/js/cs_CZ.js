!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;e.define("select2/i18n/cs",[],function(){function t(e,n){switch(e){case 2:return n?"dva":"dvě";case 3:return"tři";case 4:return"čtyři"}return""}return{errorLoading:function(){return"Výsledky nemohly být načteny."},inputTooLong:function(e){var n=e.input.length-e.maximum;return 1==n?"Prosím, zadejte o jeden znak méně.":n<=4?"Prosím, zadejte o "+t(n,!0)+" znaky méně.":"Prosím, zadejte o "+n+" znaků méně."},inputTooShort:function(e){var n=e.minimum-e.input.length;return 1==n?"Prosím, zadejte ještě jeden znak.":n<=4?"Prosím, zadejte ještě další "+t(n,!0)+" znaky.":"Prosím, zadejte ještě dalších "+n+" znaků."},loadingMore:function(){return"Načítají se další výsledky…"},maximumSelected:function(e){var n=e.maximum;return 1==n?"Můžete zvolit jen jednu položku.":n<=4?"Můžete zvolit maximálně "+t(n,!1)+" položky.":"Můžete zvolit maximálně "+n+" položek."},noResults:function(){return"Nenalezeny žádné položky."},searching:function(){return"Vyhledávání…"},removeAllItems:function(){return"Odstraňte všechny položky"}}}),e.define,e.require}(),function(e,n){"object"==typeof exports&&"undefined"!=typeof module&&"function"==typeof require?n(require("../moment")):"function"==typeof define&&define.amd?define(["../moment"],n):n(e.moment)}(this,function(e){"use strict";var n="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),t="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),r=[/^led/i,/^úno/i,/^bře/i,/^dub/i,/^kvě/i,/^(čvn|červen$|června)/i,/^(čvc|červenec|července)/i,/^srp/i,/^zář/i,/^říj/i,/^lis/i,/^pro/i],s=/^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;function o(e){return 1<e&&e<5&&1!=~~(e/10)}function i(e,n,t,r){var s=e+" ";switch(t){case"s":return n||r?"pár sekund":"pár sekundami";case"ss":return n||r?s+(o(e)?"sekundy":"sekund"):s+"sekundami";case"m":return n?"minuta":r?"minutu":"minutou";case"mm":return n||r?s+(o(e)?"minuty":"minut"):s+"minutami";case"h":return n?"hodina":r?"hodinu":"hodinou";case"hh":return n||r?s+(o(e)?"hodiny":"hodin"):s+"hodinami";case"d":return n||r?"den":"dnem";case"dd":return n||r?s+(o(e)?"dny":"dní"):s+"dny";case"M":return n||r?"měsíc":"měsícem";case"MM":return n||r?s+(o(e)?"měsíce":"měsíců"):s+"měsíci";case"y":return n||r?"rok":"rokem";case"yy":return n||r?s+(o(e)?"roky":"let"):s+"lety"}}return e.defineLocale("cs",{months:n,monthsShort:t,monthsRegex:s,monthsShortRegex:s,monthsStrictRegex:/^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,monthsShortStrictRegex:/^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:i,ss:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})});