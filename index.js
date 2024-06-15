
function Iphone3(ASIN,color,display,camera,Bluetooth){
    this.ASIN=ASIN,
    this.color=color,
    this.display=display,
    this.camera=camera,
    this.Bluetooth=Bluetooth
    this.dial=function(){
        return 'tring.. tring...'
    }
    this.sendMessage = function(){
        return "Sending message..."
    }
    this.cameraClick=function(){
        return "Camera clicked" 
    }
    this.connectBluetooth=function(){
        return "Bluetooth connected successfully..."
    } 
    
}
let data = new Iphone3(44537,'blue','5.7','108','5.7')
// console.log(data);


function objUser(){

    console.log(this.ASIN );
    console.log(this.color);
    console.log(this.display);
    console.log(this.camera);
    console.log(this.Bluetooth);
    console.log(this.dial());
    console.log(this.sendMessage());
    console.log(this.cameraClick());
    console.log(this.connectBluetooth());
    
    
}
objUser.call(data)



// I got ''undefoned '' when I use arrow fn to .call  construstor but by regular finction its giving me ans why sir whats the resons for that