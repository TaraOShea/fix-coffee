var motoScope = motoScope || {};
motoScope.moto = document.getElementById('moto');
motoScope.motoTxt = document.getElementById('moto-text');
motoScope.motos = ["cooffy", "coffey", "coff e", "coffi", "korfi", "koffy", "offee", "co  ee", "co ffe", "off e"];
motoScope.i = 0;

motoScope.init = function(){
    window.addEventListener("mousemove", motoScope.tiltMoto);
}
//MOTO TILT EVENTS
motoScope.tiltMoto = function(event) {    
    var rotationYValue = 60 * ((event.clientY / window.innerHeight) - 0.5);   
    var rotationXValue = 60 * ((event.clientX / window.innerWidth) - 0.5);

    TweenLite.to(motoScope.moto, 0.8, { rotationY:rotationYValue, rotationX:rotationXValue, transformPerspective:1000, transformOrigin:"center" });
    motoScope.changeMotoText();
}

motoScope.changeMotoText = function() {
    if(motoScope.i % 40 === 0){
        motoScope.motoTxt.innerHTML = motoScope.randomElement(motoScope.motos);
    }
    motoScope.i++;
}

motoScope.randomElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}