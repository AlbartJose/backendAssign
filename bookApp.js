const readline = require('readline');

const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const EventEmitter = require("events");


const eventEmitter1 = new EventEmitter();



var books = ["The Alchemist", "Atomic Habits", "The Da Vinci Code", "Black Beauty"];


eventEmitter1.on("taking lecture", () => {
    for (let i = 0; i < books.length; i++) {
        console.log(books[i]);
    }

});

eventEmitter1.on("try", () => {
    appBook();

});

var x = 0;

function appBook() {

    console.log("Press 1 , 2, or 3");
    console.log("1. Show All books");
    console.log("2. Add a new Book");
    console.log("3. Quit");

    readline1.question("Input the option: ", (option) => {
        if (option == "1") {
            eventEmitter1.emit("taking lecture");
            eventEmitter1.emit("try");

        } else if (option == "2") {
            readline1.question("Input the name of the book: ", (bookname) => {
                books.push(bookname);
                //console.log(books);
                console.log("Your book has been succesfully added");
                appBook();
            });


        } else if (option == "3") {
            console.log("Bye,Bye and Thank You");
            readline1.close();
        }
        else {
            console.log("Input option not correct, Please input 1 , 2 or 3");
            appBook();
        }

    })

    readline1.on("close", () => {
    })

}

appBook();






