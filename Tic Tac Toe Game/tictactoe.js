var player1=prompt("Player One Enter Your Name");
var player2=prompt("Player Two Enter Your Name");

var one=document.querySelector("#one");
var two=document.querySelector("#two");
var three=document.querySelector("#three");
var four=document.querySelector("#four");
var five=document.querySelector("#five");
var six=document.querySelector("#six");
var seven=document.querySelector("#seven");
var eight=document.querySelector("#eight");
var nine=document.querySelector("#nine");

var res=document.querySelector("#restart");
var boxes = document.querySelectorAll('th');

res.addEventListener("click",function(){
    for(var i=0;i<boxes.length;i++){
        boxes[i].textContent='';
    }
})

function winner(player){
    if(player ==='X')
        if(player1===null)
            alert("player1 is Winner");
        else
            alert(player1+" is Winner");
    if(player ==='O')
        if(player2===null)
            alert("player2 is Winner");
        else
            alert(player2+" is Winner");
    location.reload(false)
}

one.addEventListener("click",function(){
    if(one.textContent ===''){
        one.textContent='X';   
        if(two.textContent==='X' && three.textContent==='X' ||
          four.textContent==='X' && seven.textContent==='X'||
          five.textContent==='X'&& nine.textContent==='X'){
       setTimeout(winner.bind(null,'X'), 500);}
    }
    else if(one.textContent === 'X'){
        one.textContent='O';
        if(two.textContent==='O' && three.textContent==='O' ||
          four.textContent==='O' && seven.textContent==='O'||
          five.textContent==='O'&& nine.textContent==='O'){
       setTimeout(winner.bind(null,'O'), 500);}
    }
    else if(one.textContent === 'O')
        one.textContent='';
    
});



two.addEventListener("click",function(){
    if(two.textContent ===''){
    two.textContent='X';
        if(one.textContent==='X' && three.textContent==='X' ||
          five.textContent==='X' && eight.textContent==='X'){
       setTimeout(winner.bind(null,'X'), 500);}
    }
    else if(two.textContent === 'X'){
        two.textContent='O';
         if(one.textContent==='O' && three.textContent==='O' ||
          five.textContent==='O' && eight.textContent==='O'){
       setTimeout(winner.bind(null,'O'), 500);}
    }
    else if(two.textContent === 'O')
        two.textContent='';
});


three.addEventListener("click",function(){
    if(three.textContent ===''){
    three.textContent='X';
        if(one.textContent==='X' && two.textContent==='X' ||
          six.textContent==='X' && nine.textContent==='X'||
          five.textContent==='X'&& seven.textContent==='X'){
       setTimeout(winner.bind(null,'X'), 500);}
    }
    else if(three.textContent === 'X'){
        three.textContent='O';
        if(one.textContent==='O' && two.textContent==='O' ||
          six.textContent==='O' && nine.textContent==='O'||
          five.textContent==='O'&& seven.textContent==='O'){
       setTimeout(winner.bind(null,'O'), 500);}
    }
    else if(three.textContent === 'O')
        three.textContent='';
});

four.addEventListener("click",function(){
    if(four.textContent ===''){
        four.textContent='X';
        if(one.textContent==='X' && seven.textContent==='X' ||
          five.textContent==='X'&& six.textContent==='X'){
       setTimeout(winner.bind(null,'X'), 500);}
    }
    
    else if(four.textContent === 'X'){
        four.textContent='O';
        if(one.textContent==='O' && seven.textContent==='O' ||
          five.textContent==='O'&& six.textContent==='O'){
       setTimeout(winner.bind(null,'O'), 500);}
    }
    else if(four.textContent === 'O')
        four.textContent='';
});

five.addEventListener("click",function(){
    if(five.textContent ===''){
    five.textContent='X';
        if(one.textContent==='X' && nine.textContent==='X' ||
          two.textContent==='X'&& eight.textContent==='X' ||
          three.textContent==='X'&& seven.textContent==='X' ||
          four.textContent==='X'&& six.textContent==='X'){
       setTimeout(winner.bind(null,'X'), 500);}
    }
    else if(five.textContent === 'X'){
        five.textContent='O';
        if(one.textContent==='O' && nine.textContent==='O' ||
          two.textContent==='O'&& eight.textContent==='O' ||
          three.textContent==='O'&& seven.textContent==='O' ||
          four.textContent==='O'&& six.textContent==='O'){
       setTimeout(winner.bind(null,'O'), 500);}
    }
    else if(five.textContent === 'O')
        five.textContent='';
});

six.addEventListener("click",function(){
    if(six.textContent ===''){
    six.textContent='X';
    if(three.textContent==='X' && nine.textContent==='X' ||
          four.textContent==='X'&& five.textContent==='X')
        setTimeout(winner.bind(null,'X'), 500);
    }
    else if(six.textContent === 'X'){
        six.textContent='O';
        if(three.textContent==='O' && nine.textContent==='O' ||
          four.textContent==='O'&& five.textContent==='O')
        setTimeout(winner.bind(null,'O'), 500);
    }
    else if(six.textContent === 'O')
        six.textContent='';
});

seven.addEventListener("click",function(){
    if(seven.textContent ===''){
    seven.textContent='X';
    if(one.textContent==='X' && four.textContent==='X' ||
          five.textContent==='X'&& three.textContent==='X' ||
      eight.textContent==='X' && nine.textContent==='X'){
       setTimeout(winner.bind(null,'X'), 500);}
    }
    else if(seven.textContent === 'X'){
        seven.textContent='O';
        if(one.textContent==='O' && two.textContent==='O' ||
          five.textContent==='O'&& three.textContent==='O' ||
      eight.textContent==='O' && nine.textContent==='O'){
       setTimeout(winner.bind(null,'O'), 500);}
    }
    else if(seven.textContent === 'O')
        seven.textContent='';
});

eight.addEventListener("click",function(){
    if(eight.textContent ===''){
    eight.textContent='X';
    if(seven.textContent==='X' && nine.textContent==='X' ||
          two.textContent==='X'&& five.textContent==='X'){
       setTimeout(winner.bind(null,'X'), 500);}
    }
    else if(eight.textContent === 'X'){
        eight.textContent='O';
        if(seven.textContent==='O' && nine.textContent==='O' ||
          two.textContent==='O'&& five.textContent==='O'){
       setTimeout(winner.bind(null,'O'), 500);}
    }
    else if(eight.textContent === 'O')
        eight.textContent='';
});

nine.addEventListener("click",function(){
    if(nine.textContent ===''){
    nine.textContent='X';
    if(one.textContent==='X' && five.textContent==='X' ||
          three.textContent==='X'&& six.textContent==='X' ||
      seven.textContent==='X'&& eight.textContent==='X'){
       setTimeout(winner.bind(null,'X'), 500);}
    }
    else if(nine.textContent === 'X'){
        nine.textContent='O';
        if(one.textContent==='O' && five.textContent==='O' ||
          three.textContent==='O'&& six.textContent==='O' ||
      seven.textContent==='O'&& eight.textContent==='O'){
       setTimeout(winner.bind(null,'O'), 500);}
    }
    else if(nine.textContent === 'O')
        nine.textContent='';
});