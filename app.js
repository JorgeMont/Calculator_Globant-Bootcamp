const buttons = document.querySelectorAll(".numpad__button");
const screen = document.getElementById("screen");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value === "del") {
      //Borra
      screen.value = screen.value.slice(0, -1);
    } else if (
      button.value === "+" ||
      button.value === "-" ||
      button.value === "/" ||
      button.value === "x"
    ) {
      //Operaciones a pantalla
      screen.value = String(screen.value) + String(button.value);
    } else if (button.value === "reset") {
      // Borra todo
      screen.value = "";
    } else if (button.value === "=") {
      screen.value = screen.value.replace("x", "*");
      try {
        // Evalua string como operacion
        screen.value = eval(screen.value);
      } catch {
        screen.value = "Invalid operation";
      }
    } else {
      screen.value = String(screen.value) + String(button.value);
    }
  });
});
