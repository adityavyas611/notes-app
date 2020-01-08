
# Notes APP[CLI]

These app is used for creating, reading and removing Notes entered by the user, added colorful text using Chalk.

## Getting Started

```js
npm install
```
This will install all the dependencies for the project


```js
node app.js --help
```
This will help you to get started and use the CLI for Notes.

### Prerequisites

What things you need to install the software and how to install them

```js
yargs.command({
  command: "your command",
  describe: "command description",
  builder: {
      title:{
          describe: "parameter description",
          demandOption: true, // required as true
          type: "string" //type of parameter you recieved
      }
  },
  handler: ({ title }) => {
      Notes.readNotes(title); // handle the methods
  }
});
```

## Example

##### Adding Notes

```js
node app.js add --title="titlename" --body="body detail"
```

##### Removing Notes

```js
node app.js remove --title="titlename"
```

##### Listing Notes

```js
node app.js list
```

##### Reading Notes

```js
node app.js read --title="titlename"
```

## Built With

* [Yargs](https://www.npmjs.com/package/yargs) - Yargs be a node.js library fer hearties tryin' ter parse optstrings
* [Chalk](https://www.npmjs.com/package/chalk/) - Terminal string styling done right

## Contributing

Please read for details on our code of conduct, and the process for submitting pull requests to us.


## Authors

* **Aditya Vyas** 

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the ISC License 
