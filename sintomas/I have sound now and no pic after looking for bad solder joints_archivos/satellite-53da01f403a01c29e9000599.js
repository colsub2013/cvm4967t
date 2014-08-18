disableStandardGoogleAnalyticsScript = true;
window.JA = window.JA || {};

JA.adapters = {

   /*
    * Prototype - for adapting old Google Analytics code to asynchronous tracking
    *
    * Instantiate as a pageTracker object like this:
    *
    *    var _gaq = window._gaq || [];    <-- Google's code for creating _gaq
    *    ......................
    *
    *    var pageTracker = Object.create(JA.adapters.legacyAnalytics);
    *     // pageTracker.debug = true;                                     <-- Optional 
    *
    *    (function() {                                     <-- Google's code for pulling in ga.js
    *        var ga = document.createElement('script');     
    *        ..........................................
    *
    */
    legacyAnalytics: {

        debug: false,

        _setDomainName: function () {
            this._wrappedPush('_setDomainName', arguments);
        },
        _addIgnoredRef: function () {
            this._wrappedPush('_addIgnoredRef', arguments);
        },
        _setVar: function () {
            this._wrappedPush('_setVar', arguments);
        },
        _trackEvent: function () {
            this._wrappedPush('_trackEvent', arguments);
        },

        _trackPageview: function () {
            this._wrappedPush('_trackPageview', arguments);
        },

        _trackPageLoadTime: function () {
            this._wrappedPush('_trackPageLoadTime', arguments);
        },

        _wrappedPush: function (command, data) {

            var argsArr = Array().slice.call(data);
            argsArr.unshift(command);

            if (this.debug) {
                console.log('Sending: _gaq.push(' + argsArr.join(', ') + ') [converted from pageTracker]');
            }

            _gaq.push(argsArr);

        },

        _handleCallback: function (callback) {
            if (typeof (callback) != "function") {
                throw Error("Callback parameter must be function");
            }
						if (typeof ga != 'undefined') {
                ga('send', 'event', {
                    'hitCallback': function() {
                        callback();
                    }
                });
            } else if (typeof _gaq != 'undefined') {
                _gaq.push(["_set", "hitCallback", function() // Subscribe callback on complete event
                {
                    _gaq.push(["_set", "hitCallback", null]); //Unsubscribe callback from complete event
                    callback();
                }]);
            }
        }

    } //legacyAnalytics

}; // JA.adapters

if( typeof Object.create === 'undefined' ) {
 		 Object.create = function( o ) {
     function F(){}
     F.prototype = o;
     return new F();
 };
}
window.pageTracker = Object.create(JA.adapters.legacyAnalytics);
window._gat = window._gat || {}; 

window._gaq = window._gaq || []; 

window._gat._getTracker = function(){ return window.pageTracker; };

if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length >>> 0;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}

var gaq_push=window._gaq.push;
_gaq.push = window._gaq.push = function(){
  for(var i=0;i<arguments.length;i++){
    if( ['_trackPageview','_trackEvent'].indexOf(arguments[i][0])>=0 && arguments[i].length>1){
      gaq_push(arguments[i]);
    }
  }
};

_satellite.track('Airlock'); 
