var scrollScope = scrollScope || {};

//SCROLL TRIGGER ASSETS
scrollScope.scrollElements = [];

scrollScope.scrollInit = function(){

    for(var i=0; i < document.getElementsByClassName('scroll-reveal').length; i++){
        scrollScope.scrollElements.push(document.getElementsByClassName('scroll-reveal')[i]);
        TweenMax.set(document.getElementsByClassName('scroll-reveal')[i], { opacity: 0, y: 150 })
    }
    //BIND EVENTS
    window.addEventListener("scroll", scrollScope.revealElement);

    scrollScope.revealElement();
}

scrollScope.revealElement = function(){
    const scroll = window.scrollY || window.pageYOffset;
    for(var i=0; i < scrollScope.scrollElements.length; i++){ 
        if( isInViewTop(scrollScope.scrollElements[i]) ){
            TweenMax.to(scrollScope.scrollElements[i], 1.2, { opacity: 1, y: 0 })
        }
    }
}





function isInViewTop(elem) {
    var docViewTop = window.pageYOffset;
    var docViewBottom = docViewTop + window.innerHeight;
    var elemTop = elem.getBoundingClientRect().top + ( window.pageYOffset || document.scrollTop )  - ( document.clientTop  || 0 );
    // var elemBottom = elemTop + (elem.height());
  
    // if(elemTop <= docViewBottom) {
    //   console.log(elem, elemTop, docViewBottom);
    // } 
    return ((elemTop <= docViewBottom));
}

