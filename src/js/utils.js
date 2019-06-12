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