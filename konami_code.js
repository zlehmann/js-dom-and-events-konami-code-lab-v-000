const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const input = document.getElementById('input');
  let index = 0;
  input.addEventListener('keydown', function(e) {
    console.log(e);
    //const key = parseInt(e.detail || e.key);
    //if (key === code[index]) {
    //  index++;

    //  if (index === code.length) {
    //    alert("Hurray!");

    //    index = 0;
    //  }
    //} else {
    //  index = 0;
    }
  });
}
