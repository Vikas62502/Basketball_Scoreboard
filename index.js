let incre = 0;
let inc=0;




function increment1 (){
    
    var increment = document.getElementById('box1');
     increment.textContent = incre+=1;
}
function increment2 (){
    var increment = document.getElementById('box1');
    increment.textContent = incre+=2;
}
function increment3 (){
    var increment = document.getElementById('box1');
    increment.textContent = incre+=3;
}

function in1 (){
    var increment = document.getElementById('box2');
    increment.textContent = inc+=1;
}
function in2 (){
    var increment = document.getElementById('box2');
    increment.textContent = inc+=2;
}
function in3 (){
    var increment = document.getElementById('box2');
    increment.textContent = inc+=3;
}

function newGame (){
    document.getElementById('box1').textContent = incre-=incre;
    document.getElementById('box2').textContent = inc-=inc;
}