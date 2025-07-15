const input = document.getElementById("input");
const result = document.getElementById("result");
let answer = "";

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;

    switch (val) {
      case "clear":
        input.value = "";
        result.innerText = "0";
        break;

      case "del":
        input.value = input.value.slice(0, -1);
        break;

      case "ans":
        input.value += answer;
        break;

      case "±":
        if (input.value) input.value = -parseFloat(input.value);
        break;

      case "√":
        try {
          const evalResult = Math.sqrt(eval(input.value));
          result.innerText = evalResult;
          answer = evalResult;
        } catch {
          result.innerText = "Error";
        }
        break;

      case "ENTER":
        try {
          const evalResult = eval(input.value);
          result.innerText = evalResult;
          answer = evalResult;
        } catch {
          result.innerText = "Error";
        }
        break;

      default:
        input.value += val;
        break;
    }
  });
});
