(function(){

    let stage:createjs.Stage;
    let canvas = document.getElementById("canvas");
    let helloLabel: createjs.Text;
    let startButton: createjs.Bitmap;

    function Start()
    {
        console.log("Hello World");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        stage.enableMouseOver(20);
        Main();
    }

    function Update()
    {
        helloLabel.rotation += 5;
        stage.update();
    }

    function Main()
    {
        console.log("Main");

        startButton = new createjs.Bitmap("./Assets/textures/startButton.png");
        startButton.regX = startButton.getBounds().width * 0.5;
        startButton.regY = startButton.getBounds().height * 0.5;
        startButton.x = 320;
        startButton.y = 350;
        stage.addChild(startButton);


        helloLabel = new createjs.Text("Hello, World!", "60px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = 320;
        helloLabel.y = 240;
        stage.addChild(helloLabel);

       startButton.addEventListener("mouseover", function(){
        startButton.alpha = 0.7;
       });

       startButton.addEventListener("mouseout", function(){
        startButton.alpha = 1.0;
       });

       startButton.addEventListener("click", function(){
        helloLabel.text = "Good Bye Cruel World!";
    });
    }

    window.addEventListener("load", Start);
})();