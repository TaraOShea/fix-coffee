var socialScope = socialScope || {};
socialScope.el;
socialScope.animate = false;

socialScope.init = function(){
    socialScope.el = document.getElementById('social');
    if(socialScope.el !== null){
        window.addEventListener("mousemove", socialScope.tilt);
        window.addEventListener("scroll", socialScope.scroll);
        socialScope.scroll();
    }
}

//MOTO TILT EVENTS
socialScope.tilt = function(event) {     
    if(socialScope.animate) {
        var rotationYValue = 60 * ((event.clientY / window.innerHeight) - 0.5);   
        var rotationXValue = 60 * ((event.clientX / window.innerWidth) - 0.5);
    
        TweenLite.to(socialScope.el, 0.8, { rotationY:rotationYValue, rotationX:rotationXValue, transformPerspective:1000, transformOrigin:"center" });
    }
}

socialScope.scroll = function(){
    if(!utils.isInViewTop(socialScope.el)){ 
        socialScope.animate = false;
    } else {
        socialScope.animate = true; 
    }
}