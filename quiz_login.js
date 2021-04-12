function addUser(){
    player1__Name = document.getElementById("player1_name_input").value;
    player2__Name = document.getElementById("player2_name_input").value;

    localStorage.setItem(player1__Name);
    localStorage.setItem(player2__Name);

    window.location = "quiz_game_pages.html"
}