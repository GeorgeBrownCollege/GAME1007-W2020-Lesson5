(function () {
    let stage;
    let canvas = document.getElementById("canvas");
    let helloLabel;
    function Start() {
        console.log("Hello World");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        helloLabel.rotation += 5;
        stage.update();
    }
    function Main() {
        console.log("Main");
        helloLabel = new createjs.Text("Hello, World!", "60px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = 320;
        helloLabel.y = 240;
        stage.addChild(helloLabel);
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=game.js.map