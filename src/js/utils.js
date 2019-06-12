var utils = utils ||{};

//DETECT MOBILE
utils.isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (utils.isMobile.Android() || utils.isMobile.BlackBerry() || utils.isMobile.iOS() || utils.isMobile.Opera() || utils.isMobile.Windows());
    }
};


utils.isInViewTop = function(elem) {
    var docViewTop = window.pageYOffset;
    var docViewBottom = docViewTop + window.innerHeight;
    var elemTop = elem.getBoundingClientRect().top + ( window.pageYOffset || document.scrollTop )  - ( document.clientTop  || 0 );

    return ((elemTop <= docViewBottom));
}

utils.isInOutOfView = function(elem) {
    var docViewTop = window.pageYOffset;
    var elemTop = elem.getBoundingClientRect().top + ( window.pageYOffset || document.scrollTop )  - ( document.clientTop  || 0 );
    var elemBottom = elemTop + elem.offsetHeight;

    return ( (elemTop+elemBottom) <= docViewTop);
}

