const notes = require("express").Router();
const { v4: uuidv4 } = require("uuidv4");
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("./helper/fsUtils");

// the api/notes/ will return a list of the json data
notes.get("/", (req, res) => {
  //read from files
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// get a specific note based on the param id
notes.get("/note_id", (req, res) => {
  const noteId = req.params.note_id;
  readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((jsonData) => {
      const result = jsonData.filter((note) => note.note_id === noteId);

      if (result) {
        return res.json(result);
      } else {
        res.json("no note with that id . . . ");
      }
    });
});

// post a new note that will generate a new id
notes.post("/", (req, res) => {
  const { title, text } = req.body;
  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uuidv4,
    };
    readAndAppend(newNote, "./db/db.json");
    res.json("added****: ", newNote);
  }
});

module.exports = notes;
