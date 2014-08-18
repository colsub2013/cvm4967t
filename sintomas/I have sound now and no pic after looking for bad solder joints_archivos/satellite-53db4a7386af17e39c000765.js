window.pageTracker = Object.create(JA.adapters.legacyAnalytics);
window._gat = window._gat || {}; 
window._gat._getTracker = function(){ return window.pageTracker; };

var gaq_push=window._gaq.push;
_gaq.push = window._gaq.push = function(){
  for(var i=0;i<arguments.length;i++){
    if( ['_trackPageview','_trackEvent'].indexOf(arguments[i][0])>=0 && arguments[i].length>1){
      gaq_push(arguments[i]);
    }
  }
};
