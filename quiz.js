function submitit(){
    let question1 = document.quiz.q1.value;
    let question2 = document.quiz.q2.value;
    let question3 = document.quiz.q3.value;
    let question4 = document.quiz.q4.value;
    let question5 = document.quiz.q5.value;

    let correctans = 0;

    if(question1 == 'q1b'){
        correctans+=20;
    }
     if(question2 == 'q2c'){
        correctans+=20;
    }
     if(question3 == 'q3b'){
        correctans+=20;
    }
     if(question4 == 'q4a'){
        correctans+=20;
    }
     if(question5 == 'q5b'){
        correctans+=20;
    }

    // document.write("Thank you!" +"<br>" + "Kindly Leave The Hall" )
    document.write("Score: " + correctans + "/100" +"<br>")

    document.write("Grade: " + correctans*"100"/"100" +"%")
}