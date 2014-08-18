_satellite.pushBlockingScript(function(event, target, $variables){
  function getGenericDomain(url) {
    return url ? (url.match(/(\/\/*[^/?]*)/ig)[0] || '').replace(/(www|-?secure)/ig, '') : '';
}

function isPpc(url) {
    return (url.indexOf('?r=') > 0);
}

function getTrafficMedium(referrerUrl, locationUrl, cookieValue) {
    if (locationUrl.length == 0) {
        return 'seo';
    }

    var isNavigation = (getGenericDomain(referrerUrl) == getGenericDomain(locationUrl));
    var cookie = (cookieValue.match(/medium=(seo|ppc)/) || ['', 'seo'])[1];

    if (isPpc(locationUrl)) {
        return 'ppc';
    }

    return isNavigation ? isPpc(referrerUrl) ? 'ppc' : cookie : 'seo';
}

function updateTrafficMedium() {
    if (typeof JA === 'undefined') {
        JA = {
            i: {}
        };
    }
    JA.i.medium = getTrafficMedium(document.referrer, document.location.href, document.cookie);
    var expires = new Date();
    expires.setTime(expires.getTime() + (24 * 60 * 60 * 1000));
    document.cookie = ['medium=' + JA.i.medium,
                       'expires=' + expires.toGMTString(),
                       'domain=.' + document.location.host,
                       'path=/'].join(';');
};

updateTrafficMedium();
});
