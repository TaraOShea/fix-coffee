var motoScope = motoScope || {};
motoScope.moto = document.getElementById('moto-text');
motoScope.motos = ["cooffy", "coffey", "coff e", "coffi", "korfi", "koffy", "offee", "co  ee", "co ffe", "off e"];

motoScope.changeText = true;
motoScope.animate = true;
motoScope.i = 0;

motoScope.init = function(){
    window.addEventListener("mousemove", motoScope.tiltMoto);
    window.addEventListener("scroll", motoScope.scroll);
    motoScope.scroll();
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

motoScope.changeMotoText = function() {
    if(motoScope.i % 50 === 0){
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