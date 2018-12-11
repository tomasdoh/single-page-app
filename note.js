(function (exports) {
    var notes = [];

   function storeNote(note) {
       notes.push(note);
   }

    exports.storeNote = storeNote;

})(this);