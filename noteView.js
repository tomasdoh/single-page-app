// view is responsible for what html looks like
function NotesView(notes) {
  this.notes = notes
}

NotesView.prototype = {
  add: function(note) {
    this.notes.push(note)
  },

  render: function() {
    return [
      "<h1>My Notes</h1>",
      "<form>",
        "<input type='text'></input>",
        "<input type='submit'></input>",
      "</form>",
      this.notes.map(function(note) {
        return "<p>" + note.text + "</p>"
      }).join("")
    ].join("")
  }
}
