submitNote();

function submitNote() {
  document
  .getElementById("note-submit")
  .addEventListener("click", function(clickEvent){
      clickEvent.preventDefault();
      addNote();
  })
};

document.body.onload = addElement;

function addNote () {
  var newDiv = document.createElement("div");
  var note = document.getElementById("note-text").value
  var newNote = document.createTextNode(note);
  newDiv.appendChild(newNote);
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
};
