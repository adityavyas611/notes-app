const fs = require("fs");
const chalk = require("chalk");

/* ****************************************************
========= FUNCTION FOR ADDING NOTE ==================
*****************************************************/

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find(note =>
    note.title === title ? true : false
  );

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });

    saveNote(notes);
    console.log(chalk.inverse.green("New Note Added!"));
  } else {
    console.log(chalk.inverse.red("Note title taken!"));
  }
};

/* ****************************************************
========= FUNCTION FOR GETTING NOTE =================
*****************************************************/

const readNotes = title => {

    const notes = loadNotes();
    const findTitle = notes.find(note => note.title === title);

    if (findTitle) {
        console.log(chalk.inverse.green(`${findTitle.title}`));
        console.log(findTitle.body);
      } else {
        console.log(chalk.inverse.red('No Note Found!!!'));
      }
};

/* ****************************************************
========= FUNCTION FOR LISTING NOTE =================
*****************************************************/

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse.yellow("Your Notes"));
  notes.forEach(titleName => console.log(titleName.title));
};

/* ****************************************************
========= FUNCTION FOR REMOVING NOTE ================
*****************************************************/

const removeNote = title => {
  const notes = loadNotes();

  const newNotes = notes.filter(note => note.title !== title);

  if (newNotes.length === notes.length) {
    console.log(chalk.inverse.red(`No Note Found With Title: ${title}`));
  } else {
    saveNote(newNotes);
    console.log(chalk.inverse.green(`Note Removed With Title: ${title}`));
  }
};

/* **************************************** ************
========= FUNCTION FOR LOADING NOTES ================
*****************************************************/

const loadNotes = () => {
  try {
    const dataBUffer = fs.readFileSync("notes.json");
    const dataJSON = dataBUffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

/* ****************************************************
========= FUNCTION FOR SAVING NOTE ==================
*****************************************************/

const saveNote = notes => {
  try {
    const stringifyJson = JSON.stringify(notes);
    fs.writeFileSync("notes.json", stringifyJson);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  addNote,
  removeNote,
  readNotes,
  listNotes
};
