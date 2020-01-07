class CrossButton{
    constructor(x,y){
    this.x=100;
    this.y=500;
    this.width=25;
    this.height=25;
    this.image=loadImage("Images/crossbutton.jpg");

    }
    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.size,this.size);
    }
}