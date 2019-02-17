
document.getElementById('todoInputForm').addEventListener('submit', performPostRequest);

function performPostRequest(e) {
  var resultElement = document.getElementById('postResult');
  var todoTitle = document.getElementById('todoTitle').value;
  resultElement.innerHTML = '';

  axios.post('https://eded1826.ngrok.io/', {
    command: todoTitle,
  })
  e.preventDefault();
}

function clearOutput() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';
    var resultElement = document.getElementById('getResult2');
    resultElement.innerHTML = '';
    var resultElement = document.getElementById('postResult');
    resultElement.innerHTML = '';
}
