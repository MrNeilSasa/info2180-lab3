window.onload = function(){
    var square = document.getElementById('board');
    console.log(square);
    for (var i = 0; i < square.children.length; i++) {
        square.children[i].classList.add('square');
    }
    let circleturn = Boolean;
    circleturn = false;
    
    const x_turn = 'X'
    const O_turn = 'O'

    const Winning_Combinations = [
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ]

    positions = document.querySelectorAll('.square');
    newgamebutton = document.querySelector('.btn');
    console.log(newgamebutton);
    console.log(positions);

    

    newGame();

    newgamebutton.addEventListener('click', newGame);

    function newGame(){
        circleturn = false;
        positions.forEach(element => {
            element.addEventListener('mouseover', hoverPos);
            element.addEventListener('mouseout', stopHover);
            element.removeEventListener('click', placeMark);
            element.addEventListener('click', placeMark);

            
        });
      
    }

    function placeMark(element){
        const pos = element.target;
        if (circleturn){
            pos.textContent = "O";
            pos.classList.add(O_turn);
            pos.removeEventListener('mouseover', hoverPos);
            circleturn = false;
        } else {
            pos.textContent = "X";
            pos.classList.add(x_turn);
            pos.removeEventListener('mouseover', hoverPos);
            circleturn = true;
        }
        
    }

    function hoverPos(element){
        const pos = element.target;
        if (circleturn){
            pos.classList.add('hover');  
        } else {
            pos.classList.add('hover');
        }
    }

    function stopHover(element){
        const pos = element.target;
        if (circleturn){
            pos.classList.remove('hover');

        } else {
            pos.classList.remove('hover');

        }
    }



};



