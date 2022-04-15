(function(){
	var ismob_cookie = (function(cname){
		var name = cname+"=";
    var ca = document.cookie.split(';');
      for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) {
          return c.substring(name.length,c.length);
        }
      }
      return "";
   })('ismob');

	var ismob_ua = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	if(ismob_ua && (ismob_cookie != 1))
		location='/mobile.php?ismobile=yes';
	if(!ismob_ua && (ismob_cookie == 1))
		location='/mobile.php?ismobile=no';
})();
