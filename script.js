//domestic violence test realquiz.html
var score;
function check(){
  score = 0;
  score += Number(document.quiz.Q1.value) + Number(document.quiz.Q2.value);
  score += Number(document.quiz.Q3.value) + Number(document.quiz.Q4.value);
  score += Number(document.quiz.Q5.value) + Number(document.quiz.Q6.value);
  score += Number(document.quiz.Q7.value) + Number(document.quiz.Q8.value);
  score += Number(document.quiz.Q9.value) + Number(document.quiz.Q10.value);
  score += Number(document.quiz.Q11.value) + Number(document.quiz.Q12.value);
  score += Number(document.quiz.Q13.value) + Number(document.quiz.Q14.value);
  score += Number(document.quiz.Q15.value) + Number(document.quiz.Q16.value);
  score += Number(document.quiz.Q17.value) + Number(document.quiz.Q18.value);
  localStorage.setItem("testscore", score);
}

//testresult.html
function open_page(){
  var points = localStorage.getItem("testscore")
  document.getElementById("score").innerHTML = points + "/36";
  if (points <= 5){
    document.getElementById("score").style.color = "green";
    document.getElementById("result-message-wrapper").innerHTML =
    "You scored " + points + " points on this Domestic Violence Screening Quiz. This means you are likely in a healthy relationship mentally and physically and what you are experiencing are only fluxuations of a intimate relationship and you should not worry about it."
  } else if (points <= 10){
    document.getElementById("score").style.color = "orange";
    document.getElementById("result-message-wrapper").innerHTML =
    "You scored " + points + " points on this Domestic Violence Screening Quiz. This means that you are possibly in a (mentally/physically) abusive relationship. This is not a proffesional diagnostic test but we recommend that you seek a proffesional diagnosis as soon as possible. Abusive relationships are very dangerous and should be stopped as soon as possible"
  } else {
    document.getElementById("score").style.color = "red";
    document.getElementById("result-message-wrapper").innerHTML =
    "You scored " + points + " points on this Domestic Violence Screening Quiz. This means that you are most likely in a (mentally/physically) abusive relationship. This is not a proffesional diagnostic test but we highly recommend that you seek a proffesional diagnosis as soon as possible. Abusive relationships are very dangerous and should be stopped as soon as possible"
  }
}

//alert for home page
function clicked(){
  document.getElementById("alert").style.visibility = "hidden";
}