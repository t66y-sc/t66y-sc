var ismob = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
document.write(`
<script type="text/javascript" data-cfasync="false" async src="https://caoliu1024.ml/js/jads.js"></script>
<div id="_jads" style="text-align: center;">
  <div><ins id="973218" data-width="728" data-height="102"></ins></div>
  <div><ins id="975733" data-width="300" data-height="112"></ins></div>
</div>`);
if(!ismob)
  (adsbyjuicy = window.adsbyjuicy || []).push({'adzone':973218});
else
  (adsbyjuicy = window.adsbyjuicy || []).push({'adzone':975733});

document.write(`
<style type="text/css">
  @media screen and (min-width: 728px){
    #_adxad .m1, #_adxad .m2{ display: none }
  }
  @media screen and (max-width: 728px){
    #_adxad .pc, #_adxad .m2{ display: none }
  }
</style>
<div id="_adxad" style="text-align: center;">
  <script src="https://static.adxadserv.com/js/adb.js" type="text/javascript" data-adxad-place="621f2f3461d6e260d55ec0c2" async></script><div id="621f2f3461d6e260d55ec0c2" class="pc" data-width="728" data-height="90" data-output="html"></div>
  <script src="https://static.adxadserv.com/js/adb.js" type="text/javascript" data-adxad-place="621ebd4d61d6e277491eb554" async></script><div id="621ebd4d61d6e277491eb554" class="m1" data-width="300" data-height="100" data-output="html"></div>
  <script src="https://static.adxadserv.com/js/adb.js" type="text/javascript" data-adxad-place="621f2f7c61d6e260d80557b1" async></script><div id="621f2f7c61d6e260d80557b1" class="m2" data-width="300" data-height="250" data-output="html"></div>
</div>
`);
