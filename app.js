submitNote();

function submitNote() {
  document
  .getElementById("note-submit")
  .addEventListener("click", function(clickEvent){
      clickEvent.preventDefault();
      showNote();
  })
};

function showNote() {
  var note = document.getElementById("note-text").value
  document.getElementById("note").innerHTML = note
};
