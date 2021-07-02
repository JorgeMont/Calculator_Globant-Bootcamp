const buttons = document.querySelectorAll(".numpad__button");
const screen = document.getElementById("screen");

let resultIsDisplayed = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (resultIsDisplayed) {
      screen.value = "";
      resultIsDisplayed = false;
    }
    switch (button.value) {
      case "del":
        // Deletes value
        screen.value = screen.value.slice(0, -1);
        break;
      case "+":
      case "-":
      case "/":
      case "x":
        //Operators to display
        screen.value = String(screen.value) + String(button.value);
        break;
      case "reset":
        // Erases screen
        screen.value = "";
        break;
      case "=":
        // Displays result
        screen.value = screen.value.replace("x", "*");
        try {
          // Evaluates string as operation
          screen.value = eval(screen.value);
        } catch {
          screen.value = "Invalid operation";
        }
        resultIsDisplayed = true;
        break;
      default:
        //Gets numbers
        screen.value = String(screen.value) + String(button.value);
    }
  });
});
