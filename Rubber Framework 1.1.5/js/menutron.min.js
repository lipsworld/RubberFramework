/*
 * Copyright (c) 2012 Mike King @micjamking (http://dev.85pixels.com)
 * 
 * jQuery Menutron plugin
 * Version 1.0 (March 2012)
 *
 * Licensed under the MIT License
 */

(function(e){e.fn.menutron=function(t){var n={maxScreenWidth:600,menuTitle:"Selecione..."};var t=e.extend(n,t);return this.each(function(){function s(){o();u();a()}function o(){if(e(window).width()<t.maxScreenWidth){e(r).css("display","inline-block");e(n).css("display","none")}else{e(r).css("display","none");e(n).css("display","block")}}function u(){e(n).children().each(function(){if(e(this).get(0).tagName!=="DT"){if(e(this).find("ul,ol,dl").length){e(i).attr("label",e(this).children(":first").text());var t=e("<option>").text(e(this).children(":first").text());var n=e(this).children("a").attr("href");e(t).attr("value",n);e(t).appendTo(i);var s=e(this).children().not(":first");e(s).children().each(function(){var t=e("<option>").text(e(this).text());var n=e(this).children("a").attr("href");e(t).attr("value",n);e(t).appendTo(i)});console.log(i);e(i).appendTo(r)}else{var t=e("<option>").text(e(this).text());var n=e(this).children("a").attr("href");e(t).attr("value",n);e(t).appendTo(r)}}});var s='<option selected="selected" value>'+t.menuTitle+"</option>";e(r).prepend(s);r.appendTo(e(n).parent());r.change(function(){if(e(this).val()!=""){window.location.href=e(this).val()}})}function a(){e(window).resize(function(){o()})}var n=e(this).children();var r=e("<select>").css("display","none");var i=e("<optgroup>").css("display","none");s()})}})(jQuery)