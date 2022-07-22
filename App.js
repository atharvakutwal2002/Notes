// const fs = require('fs');

const chalk = require("chalk");
const { string, argv } = require("yargs");

const yargs = require("yargs");

const notes = require("./Notes.js");

// console.log(process.argv[2])

yargs.command({
  command: "add",
  describe: "Adding a note",
  builder: {
    title: {
      describe: "Adding a title",
      demandOption: true,
      type: string,
    },
    body: {
      describe: "note body ",
      demandOption: true,
      type: string,
    },
  },
  handler (argv) {
    notes.addNotes(argv.title, argv.body)
  },
});
yargs.command({
  command: "remove",
  describe: "removing a note",
  builder:{
    title:{
      describe: "note title",
      demandOption: true,
      type: string
    }
  },
  handler (argv) {
    notes.removeNotes(argv.title)
  },
});
yargs.command({
  command: "read",
  describe: "reading a note",
  handler() {
    console.log("reading a  note");
  },
});
yargs.command({
  command: "list",
  describe: "listing the notes",
  handler: function () {
    notes.listNotes();
  },
});

yargs.parse();
// console.log(yargs.argv)
