
function submitNote() {
  document
    .getElementById("note-submit")
    .addEventListener("click", function(clickEvent){
      clickEvent.preventDefault()
      showNote();
    })
};

function showNote(text) {
  document
    .getElementById("note-text")
    .innerHTML = text
};
