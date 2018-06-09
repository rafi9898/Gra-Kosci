$(function() {
   const nick1 = $("#nick1");
   const nick2 = $("#nick2");
   const reset = $("#reset");
   const start = $("#start");
   let mindice = $(".maindice");
   const startBTN = $(".dice button");
   const winAlert = $(".winRound");
    
    
   const resetInput = () => {
       nick1.val("");
       nick2.val("");
   }
   
   
   
   
   const nowPlayer2 = (score1,player1,player2) => {
       let score2 = Math.floor((Math.random() * 6) + 1);
       let imgurl = `img/dice${score2}.png`;
       mindice.attr("src", imgurl);
       let li = $("<li></li>").text(`Score: ${score2}`);
       $('.player2').append(li);
       startBTN.off("click");
       startBTN.html("OD NOWA!");
       startBTN.removeClass("btn-primary");
       startBTN.addClass("btn-secondary")
       if(score1>score2) {
           winAlert.html(`WYGRYWA GRACZ: ${player1} GRATULACJE!`);
           winAlert.fadeIn(1000); 
       }
       else if(score1<score2) {
           winAlert.html(`WYGRYWA GRACZ: ${player2} GRATULACJE!`);
           winAlert.fadeIn(1000);
       }
       else {
           winAlert.removeClass("alert-success");
           winAlert.addClass("alert-info");
           winAlert.html(`REMIS! ZAGRAJ PONOWNIE!`);
           winAlert.fadeIn(1000);
       }
       
        startBTN.on("click", function() {
            startBTN.removeClass("btn-secondary");
            startBTN.addClass("btn-success");
            winAlert.hide(300);
            winAlert.removeClass("alert-info");
            winAlert.addClass("alert-success");
            newArea(player1, player2);
        });

   }
   
   
   const nowPlayer1 = (player1, player2) => {
       let score1 = Math.floor((Math.random() * 6) + 1);
       let imgurl = `img/dice${score1}.png`;
       mindice.attr("src", imgurl);
       mindice.fadeIn(500);
       let li = $("<li></li>").text(`Score: ${score1}`);
       $('.player1').append(li);
       startBTN.addClass("btn-primary");
       startBTN.removeClass("btn-success");
       startBTN.html(`Rzuca Gracz: ${player2}`);
       startBTN.on("click", function() {
           nowPlayer2(score1,player1,player2);
       });
       
   }
   
   
   const newArea = (player1, player2) => {
       $(".player1").html(`Gracz: ${player1}`);
       $(".player2").html(`Gracz: ${player2}`);
       $(".Area").fadeIn(500);
       startBTN.html(`Rzuca Gracz: ${player1}`);
       startBTN.on("click", function() {
           startBTN.off("click");
           nowPlayer1(player1, player2);
       });
   }
   
   
   const startGame = () => {
       if(nick1.val().length < 1 || nick2.val().length < 1) {
           $(".popInfo").fadeIn(1000).delay(1000).hide(1000);
       }
       
       else {
           let player1 = nick1.val();
           let player2 = nick2.val();
           nick1.hide();
           nick2.hide();
           reset.hide();
           start.hide();
           $(".heroimg img.angel").hide();
           $(".heroimg img.devil").hide();
           $(".jumbotron h1").html("START GRY!");
           $(".jumbotron .lead").hide();
           newArea(player1, player2);
       }
   }
    
  
    reset.on("click", resetInput);
    start.on("click", startGame);
});