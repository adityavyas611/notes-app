const chalk = require("chalk");
const yargs = require("yargs");
const Notes = require("./notes");

//Create function add for notes
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string"
    }
  },
  handler: ({ title, body }) => {
    Notes.addNote(title, body);
  }
});

//Create function remove for notes
yargs.command({
  command: "remove",
  describe: "Remove an existing note",
  builder: {
    title: {
      describe: "Notes Title",
      demandOption: true,
      type: "string"
    }
  },
  handler: ({ title }) => {
    Notes.removeNote(title);
  }
});

//Create function list for notes
yargs.command({
  command: "list",
  describe: "List all existing notes",
  handler: () => {
      Notes.listNotes();
  }
});

//Create function remove for notes
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
      title:{
          describe: "Notes Title",
          demandOption: true,
          type: "string"
      }
  },
  handler: ({ title }) => {
      Notes.readNotes(title);
  }
});

yargs.parse();
