$(document).ready(function() {
  $(".calculateAdd").click(function(event) {
    var num1 = Number($("#num_one").val());
    var num2 = Number($("#num_two").val());

    $("#answer").html(num1 + num2)
  });

  $(".calculateSub").click(function(event) {
    var num1 = Number($("#num_one").val());
    var num2 = Number($("#num_two").val());

    $("#answer").html(num1 - num2)
  });

  $(".calculateMult").click(function(event) {
    var num1 = Number($("#num_one").val());
    var num2 = Number($("#num_two").val());

    $("#answer").html(num1 * num2)
  });

  $(".calculateDivide").click(function(event) {
    var num1 = Number($("#num_one").val());
    var num2 = Number($("#num_two").val());

    $("#answer").html(num1 / num2)
  });

});
