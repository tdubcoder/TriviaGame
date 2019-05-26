var countingDown = document.getElementById("timer")
var counter = 60;
var newElement = document.createElement("span");
newElement.innerHTML = "10";
var id;

countingDown.parentNode.replaceChild(newElement, countingDown);

id = setInterval(function() {
    counter--;
    if(counter === 0){
		setTimeout(function(){
			$("#questionnaire").hide();
			$("#results-page").show();
		}, 1000);
	}
    if(counter < 0) {
        newElement.parentNode.replaceChild(countingDown, newElement);
        clearInterval(id);
    } else {
        newElement.innerHTML = counter.toString();
    }
}, 1000);




var correctScore = 0;
var incorrectScore = 0;
var unansweredScore = 0;


$("#correct-score").text(correctScore);
$("#incorrect-score").text(incorrectScore);
$("#unanswered-score").text(unansweredScore);


var ans = $('.q-two').val();

console.log(ans);




if(ans === "wrong"){
	incorrectScore++;
} else if(ans === undefined){
	unansweredScore++;
} else{
	correctScore++;
}


	

	



$("#questionnaire").hide();
$("#results-page").hide();

$("#start-button").click(function(){
	$("#start-button").hide();
	$("#questionnaire").show();
});

$("#done-button").click(function(){
	$("#questionnaire").hide();
	$("#results-page").show();
});








