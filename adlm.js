function(){
	var _d = new Date();
	var _n = "_adlm_cnt_" + _d.getYear() + "_" +
	         _d.getMonth() + "_" + _d.getDate();
	var _setCookie = function(cname,cvalue){
    var d = new Date();
    d.setTime(d.getTime()+(24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
	}
	var _getCookie = function(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
	    var c = ca[i].trim();
	    if (c.indexOf(name)==0) {
	    	return c.substring(name.length,c.length);
	    }
    }
    return "";
	}

	var _adlm_cnt = 1 + parseInt(_getCookie(_n));

	if(!_adlm_cnt) _adlm_cnt = 1;
	_setCookie(_n, _adlm_cnt);

	if(_adlm_cnt >=4){
		document.write('<scr'+'ipt async defer src="https://duojlm.com/c.aspx?action=c&c1=7&c2=1102&c3=&c4=1&c5=AdCode_sjtb&c6=640x200&c7=1&c8=1&c9=&c10=&c50=1248871" id="1248871"></scr'+'ipt>'); // top cpc
		document.write('<scr'+'ipt async defer src="https://duojlm.com/c.aspx?action=c&c1=7&c2=1102&c3=&c4=1&c5=AdCode_ycgs&c6=100x100&c7=2&c8=1&c9=&c10=&c50=1248925" id="1248925"></scr'+'ipt>'); // right cpc
	}else if( _adlm_cnt >2){
		document.write('<scr'+'ipt async defer src="//new.xiongzhangad.com/c.aspx?action=c&c1=7&c2=7315&c3=&c4=1&c5=AdCode_sjtb&c6=640x100&c7=3&c8=1&c9=&c10=&c50=1248700" id="1248700"></scr'+'ipt>'); // top cpc
		document.write('<scr'+'ipt async defer src="https://duojlm.com/c.aspx?action=c&c1=7&c2=1102&c3=&c4=1&c5=AdCode_ycgs&c6=100x100&c7=2&c8=1&c9=&c10=&c50=1248925" id="1248925"></scr'+'ipt>'); // right cpc
		document.write('<scr'+'ipt async defer src="https://duojlm.com/c.aspx?action=c&c1=7&c2=1102&c3=&c4=2&c5=AdCode_sjdb&c6=640x200&c7=2&c8=1&c9=&c10=&c50=1249034" id="1249034"></scr'+'ipt>'); // buttom cpv
	} else{
		document.write('<scr'+'ipt async defer src="//new.xiongzhangad.com/c.aspx?action=c&c1=7&c2=7315&c3=&c4=2&c5=AdCode_sjtbding2&c6=640x150&c7=3&c8=1&c9=&c10=&c50=1248569" id="1248569"></scr'+'ipt>'); // top cpv
		document.write('<scr'+'ipt async defer src="//new.xiongzhangad.com/c.aspx?action=c&c1=7&c2=7315&c3=&c4=1&c5=AdCode_sjtb&c6=640x100&c7=3&c8=1&c9=&c10=&c50=1248700" id="1248700"></scr'+'ipt>'); // top cpc
	}

	//console.log(_n);
})();
