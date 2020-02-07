(function(){

    let stage:createjs.Stage;
    let canvas = document.getElementById("canvas");

    function Start()
    {
        console.log("Hello World");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);

        Main();
    }

    function Update()
    {
        stage.update;
    }

    function Main()
    {
        
    }

    window.addEventListener("load", Start);
})();