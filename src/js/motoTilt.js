var motoScope = motoScope || {};
motoScope.moto;
motoScope.motos = ["coffee", "cooffy", "coffey", "coff e", "coffi", "korfi", "koffy", "offee", "co  ee", "co ffe", "off e"];
motoScope.changeText = true;
motoScope.animate = true;
motoScope.i = 0;
motoScope.loop = 0;

motoScope.init = function(loopWords){
    motoScope.moto = document.getElementById('moto-text');

    if(motoScope.moto !== null) {
        window.addEventListener("mousemove", motoScope.tiltMoto);
        window.addEventListener("scroll", motoScope.scroll);
        motoScope.scroll();

        if(loopWords){
            motoScope.changeMotoText(true);
        }
    }
}
//MOTO TILT EVENTS
motoScope.tiltMoto = function(event) {    
    if(motoScope.animate) {
        var rotationYValue = 60 * ((event.clientY / window.innerHeight) - 0.5);   
        var rotationXValue = 60 * ((event.clientX / window.innerWidth) - 0.5);
    
        TweenLite.to(motoScope.moto, 0.8, { rotationY:rotationYValue, rotationX:rotationXValue, transformPerspective:1000, transformOrigin:"center" });
        if(motoScope.changeText) {
            motoScope.changeMotoText();
        }   
    }
}

motoScope.changeMotoText = function(autoPlay) {
    if(autoPlay && motoScope.animate){
       setTimeout(function() {
            motoScope.i = motoScope.loop*20;
            motoScope.changeMotoText(true);
            motoScope.loop++;
       }, 500); 
    }

    if(motoScope.i !==0 && motoScope.i % 80 === 0){
        motoScope.moto.innerHTML = motoScope.randomElement(motoScope.motos);
    }
    motoScope.i++;
}

motoScope.randomElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

motoScope.scroll = function(){
    if(utils.isInOutOfView(motoScope.moto)){ 
        motoScope.animate = false;
    } else {
        motoScope.animate = true; 
    }
}