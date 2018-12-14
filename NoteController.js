// controller is responsible for listening to events - it needs to setup a listener
// - and doing things - create a note, re-render

function NotesController(note, notesView) {
  this.note = note
  this.notesView = notesView
  // run setup once to listen for events
  this._setup()
}

NotesController.prototype = {

  _setup: function() {
    var self = this
    // set up a listener for submit events
    window.addEventListener('submit', function(event) {
      event.preventDefault()
      // create a note
      var note = new self.note(event.target[0].value)
      self.notesView.add(note)
      // update the DOM
      self.updateDOM()
    })
  },

  updateDOM: function() {
    // render the whole app
	// (next step -> inject the element from app.js)
    document.getElementById('app').innerHTML = this.notesView.render()
  }
}
