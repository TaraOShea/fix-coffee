var fs = fs || {};
fs.fixedFooter = document.getElementById('fixed-footer');

fs.init = function(){
    // window.addEventListener("scroll", fs.scroll);
    window.addEventListener('click', function (ev) {
        if (ev.target.classList.contains('loc')) {
            // window.scrollTo(0, document.getElementById(ev.target.dataset.target).getBoundingClientRect().top);
            // ev.preventDefault();
        }   
    });
}

fs.scroll = function() {
    if(utils.isInViewTop(document.getElementById('footer'))){
        TweenLite.to(fs.fixedFooter, 0.4, { bottom: "10%" });
    }
}