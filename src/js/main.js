var gs = gs || {};
// scrollScope = scroll scope
// utils = util scope
// motoScope = moto scope

gs.init = function() {
    if(utils.isMobile.any()) {
        document.body.className = "mobile";
    } else {
        motoScope.init();
        gs.slogan(); 
    }

    //TRIGGER SCROLL EVENT
    scrollScope.scrollInit();
}


//HOVER REVEAL IMAGES
gs.slogan = function() {
    for(var i=0; i < document.getElementsByClassName('sloganShow').length; i++){ 
        document.getElementsByClassName('sloganShow')[i].addEventListener('mouseover', gs.showSloganImage.bind(this,  document.getElementsByClassName('sloganShow')[i]));
    }
}
gs.showSloganImage = function(el){ 

    if(el.dataset.show !== undefined){
        TweenMax.to( document.getElementById(el.dataset.show), 0.2, { opacity: 1, onComplete: function (){
                setTimeout(function(){
                    TweenMax.to(document.getElementById(el.dataset.show), 0.2, { opacity: 0 });
                }, Math.floor(Math.random() * 50000) );
            }
        });
    }
}

//INIT ON LOAD
window.onload = gs.init;