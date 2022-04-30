jQuery('img[data-original]').each(function(){
  $(this).attr('src',
    $(this).attr('data-original')
    .replace('http://img.aiaixx.top',  'https://pic1.sex58.ga')
    .replace('http://img2.aiaixx.top', 'https://pic2.sex58.ga')
    .replace('http://img3.aiaixx.top', 'https://pic3.sex58.ga')
  )
});
jQuery('img').each(function(){
  //$(this).attr('src', $(this).attr('src').replace('http://pic2.988aiai.com/', ''))
});

// Pop
if(document.body.clientWidth > 450){
  var ad_idzone = "4315386",
    ad_popup_fallback = false,
    ad_popup_force = false,
    ad_chrome_enabled = true,
    ad_new_tab = false,
    ad_frequency_period = 5,
    ad_frequency_count = 1,
    ad_trigger_method = 3,
    ad_t_venor = false;
  }else{
  var ad_idzone = "4331570",
    ad_popup_fallback = false,
    ad_popup_force = false,
    ad_chrome_enabled = true,
    ad_new_tab = false,
    ad_frequency_period = 5,
    ad_frequency_count = 1,
    ad_trigger_method = 3,
    ad_t_venor = false;
}
document.write('<script type="application/javascript" src="https://a.exdynsrv.com/popunder1000.js"></script>');

// IM
if(document.body.clientWidth > 450)
  document.write('<script type="application/javascript" src="https://syndication.exdynsrv.com/splash.php?idzone=4319778"></script>')
else
  document.write('<script type="application/javascript" src="https://syndication.exdynsrv.com/splash.php?idzone=4311854&capping=0"></script>')

// inline
//document.write('<script async type="application/javascript" src="https://a.exdynsrv.com/ad-provider.js"></script><script>(AdProvider = window.AdProvider || []).push({"serve": {}});</script>')

// tj
//!function(){var t=document.createElement("script");function a(){dataLayer.push(arguments)}t.src="https://www.googletagmanager.com/gtag/js?id=UA-195431371-1",t.setAttribute("async",!0),document.head.appendChild(t),window.dataLayer=window.dataLayer||[],a("js",new Date),a("config","UA-195431371-1")}();var _hmt=_hmt||[];!function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?e3727982f9c7b6a3199de7435a03fda7",t.setAttribute("async",!0),document.head.appendChild(t)}();

var _Hasync= _Hasync|| [];
_Hasync.push(['Histats.start', '1,4656054,4,0,0,0,00010000']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function() {
  var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
  hs.src = ('//s10.histats.com/js15_as.js');
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?e3727982f9c7b6a3199de7435a03fda7";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
