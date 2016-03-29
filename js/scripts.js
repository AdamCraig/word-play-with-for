$(document).ready(function() {
  $("#word-play form").submit(function(event) {

  event.preventDefault();

    var sentenceInput = $("#sentence").val().split(" ");
    var words = [];

    for (var index = 0; index < sentenceInput.length; index += 1) {
      if (sentenceInput[index].length >= 3) {
        words.push(sentenceInput[index]);
      }
    }

    $("#output").text(words.reverse().join(" "));

  });
});
