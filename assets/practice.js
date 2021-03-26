

    var answer = document.getElementById("answer");

    circle = document.getElementById("circle");
    rectangle = document.getElementById("rectangle");
    square = document.getElementById("square");
    
    var circle_answer;

    var rectangle_answer;

    var square_answer;


    if(circle != null){

        circle.addEventListener("click", function(){
    
            circle_answer =  window.prompt("what shape is this?");
            answer.style.display = "inline-block";
        
            if(circle_answer=="circle"){
                window.alert("you are correct!");
                window.location.href = 'rectangle.html';
            }else{
                answer.innerHTML = "Try again!";
            }
        }
        );

    }

    if(rectangle != null){

        rectangle.addEventListener("click", function(){
    
            rectangle_answer =  window.prompt("what shape is this?");
            answer.style.display = "inline-block";
        
            if(rectangle_answer=="rectangle"){
                window.alert("you are correct!");
                window.location.href = 'square.html';
            }else{
                answer.innerHTML = "Try again!";
            }
        }
        );
    

    }
    
    if(square != null){

        square.addEventListener("click", function(){
    
            square_answer =  window.prompt("what shape is this?");
            answer.style.display = "inline-block";
        
            if(square_answer=="square"){
                window.alert("you are correct!");
                window.alert("game is over");
                window.location.href = 'index.html';
            }else{
                answer.innerHTML = "Try again!";
            }
        }
        );
    

    }

