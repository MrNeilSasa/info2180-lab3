window.onload = function(){
    var square = document.getElementById('board');
    console.log(square);
    for (var i = 0; i < square.children.length; i++) {
        square.children[i].classList.add('square');
    }    
};



//const child = document.getElementById('parent');
//var child = square.children[i];

//square.children[0].classList.add('square');

//const child = document.getElementById('child');

//child.classList.add('yellow-bg');
/*
for (var i = 0; i < square.children.length; i++) {
    square.children[i].classList.add('square')
} */


/*square.onload = function squares(){
    for (var i = 0; i < document.getElementById("board").children.length; i++) {
        var sq = document.getElementById("board").childern[i];
        console.log(sq.classList.add('square'))
    }
} */

