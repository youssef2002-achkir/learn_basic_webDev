class Snake{
    constructor(x,y,size){
        this.x = x
        this.y = y
        this.size = size
        this.tail = [{x:this.x, y:this.y}]
        this.rotateX = 0
        this.rotateY = 1
    }
    move(){
        var newRect;
        if (this.rotateX == 1) {
            newRect = {
                x:this.tail[this.tail-1].x + this.size,
                y:this.tail[this.tail-1].y
            }
        }
        else if (this.rotateX == -1) {
            newRect = {
                x:this.tail[this.tail-1].x - this.size,
                y:this.tail[this.tail-1].y
            }
        }
        else if (this.rotateY == 1) {
            newRect = {
                x:this.tail[this.tail-1].x ,
                y:this.tail[this.tail-1].y + this.size
            }
        }
        else if (this.rotateY == -1) {
            newRect = {
                x:this.tail[this.tail-1].x ,
                y:this.tail[this.tail-1].y - this.size
            }
        }
        this.tail.shift();
        this.tail.push(newRect);
    }
}

class Apple{
    constructor(){
        var isTouching;
        while(true){
            isTouching = false;
            this.x = Math.floor(Math.random() * canvas.width / Snake.size) * Snake.size;
            this.y = Math.floor(Math.random() * canvas.height / Snake.size) * Snake.size;
        }
    }
}




var canvas = document.getElementById('canvas');
var snake = new Snake();
var apple = new Apple();
var canvasContext = new canvas.getContext('2d');

window.onload = () =>{
    gameLoop();
}

function gameLoop(params) {
    setInterval(show, 1000/15);

}

function show(){
    update();
    draw();
}