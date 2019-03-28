const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]

function init() {
  // Write your JavaScript code inside the init() function
  const input = document.getElementById('input');
  let index = 0;
  input.addEventListener('keydown', function(e) {
    const key = e.key;
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
