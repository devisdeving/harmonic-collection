function decider() {
   var op = document.querySelector("#selector");
   var text = document.querySelector("#result");
   var calculate;

   if (op == "one") {
        text.style.display = "block";
      } else if (op == "two") {
        text.style.display = "block";
      } else if (op == "three") {
        text.style.display = "block";
      } else if (op == "four") {
        text.style.display = "block";
      }

   document.querySelector("#result").innerHTML = calculate;
}