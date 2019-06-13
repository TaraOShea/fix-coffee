var fs = fs || {};
fs.fixedFooter = document.getElementById('fixed-footer');

fs.init = function(){
    window.addEventListener("scroll", fs.scroll);
}

fs.scroll = function() {
    console.log(utils.isInViewTop(document.getElementById('footer')));
    if(utils.isInViewTop(document.getElementById('footer'))){
        TweenLite.to(fs.fixedFooter, 0.4, { bottom: "10%" });
        
    }
}