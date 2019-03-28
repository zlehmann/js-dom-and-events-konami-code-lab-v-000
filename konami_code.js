const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  document.addEventListener('keydown', function(e) {
    console.log(e.which)
    const key = e.which;
    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
