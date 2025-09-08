/*console.log("main.js");
(() => {
  console.log("Here we are!");
  window.addEventListener("load", (event) => {
    const multiplier = document.getElementById("multiplier");
    const multiplicand = document.getElementById("multiplicand");
    const product = document.getElementById("product");

    const update = () => {
      product.innerHTML =
        parseFloat(multiplier.value) * parseFloat(multiplicand.value);
    };

    multiplier.addEventListener("input", update);
    multiplicand.addEventListener("input", update);
  });
})(); */

console.log("main.js");
(() => {
  console.log("Here we are!");
  window.addEventListener("load", () => {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const operation = document.getElementById("operation");
    const result = document.getElementById("result");

    const update = () => {
      const a = parseFloat(num1.value) || 0;
      const b = parseFloat(num2.value) || 0;
      let res;

      switch (operation.value) {
        case "add":
          res = a + b;
          break;
        case "subtract":
          res = a - b;
          break;
        case "multiply":
          res = a * b;
          break;
        case "divide":
          res = b !== 0 ? a / b : "Error (÷0)";
          break;
        default:
          res = "NaN";
      }

      result.innerHTML = res;
    };

    num1.addEventListener("input", update);
    num2.addEventListener("input", update);
    operation.addEventListener("change", update);

    // run once at start
    update();
  });
})();
