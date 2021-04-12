player1_name = localStorage.getItem("player1__name");
player2_name = localStorage.getItem("player2__name");

player1_score = 0;
player2_score = 0;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = parseInt(number1) * parseInt(number2);

    question_word ="<h4 id='word_display'> Q. "+ number1 + "X" + number2+ "</h4>";
    input_box = "<br>Answer : <input type= 'text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_word + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer){

        if(answer_turn == "player1"){
            update_player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else{
            update_player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }
    if (question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_ques").innerHTML = "Question turn :" + player2_name;
    }   
    else{
        question_turn = "player1";
        document.getElementById("player_ques").innerHTML = "Question turn" + player1_name;
    } 
    if (answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_ans").innerHTML = "Answer turn" + player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_ans").innerHTML = "Answer turn" + player1_name;
    }
}