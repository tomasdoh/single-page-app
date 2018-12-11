submitNote();

function submitNote() {
  document
  .getElementById("note-submit")
  .addEventListener("click", function(clickEvent){
      clickEvent.preventDefault();
      addNote();
  })
}

function addNote () {
  var newDiv = document.createElement("div");
  var note = document.getElementById("note-text").value;
  var newNote = document.createTextNode(note);
  storeNote(note);
  newDiv.appendChild(newNote);
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
