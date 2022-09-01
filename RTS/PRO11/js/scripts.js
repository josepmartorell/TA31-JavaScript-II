
function lanzar() {

    var face0 = new Image()
    face0.src = "resources/dado1.png"
    var face1 = new Image()
    face1.src = "/resources/dado2.png"
    var face2 = new Image()
    face2.src = "resources/dado3.png"
    var face3 = new Image()
    face3.src = "resources/dado4.png"
    var face4 = new Image()
    face4.src = "resources/dado5.png"
    var face5 = new Image()
    face5.src = "resources/dado6.png"
    
    var randomdice = Math.round(Math.random() * (6 - 1) + 1);
    document.images["tapete1"].src = eval("face" + randomdice + ".src");

    var randomdice = Math.round(Math.random() * (6 - 1) + 1);
    document.images["tapete2"].src = eval("face" + randomdice + ".src");
}