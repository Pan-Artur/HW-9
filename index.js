//Task-1

const names = ["Mango", "Poly", "Ajax"];

function logItems(names) { 
    let namesString;

    for (let i = 0; i <= logItems.length - 1; i += 1) {
        i += 1;
        namesString = `${i} - ${names[i -= 1]}, ${i += 2} - ${names[i -= 1]}, ${i += 2} - ${names[i -= 1]}`;
    }

    return namesString;
}

console.log(logItems(names));

//Task-2

const message = "Перстень, сережки, кольє, каблучка";
const pricePerWord = 20;

function calculateEngravingPrice(message, pricePerWord) {
    const messageArray = message.split(", ");
    const totalPrice = Number(messageArray.length) * pricePerWord;

    return messageArray, totalPrice;
}

console.log(calculateEngravingPrice(message, pricePerWord));

//Task-3

const quote = "Кров, яка пролилась для великої мети, не засихає";

function findLongestWord(quote) {
    const quoteArray = quote.split(".").join(" ").split(",").join("").split(" ");
    let longestWord = quoteArray[0];

    for (let word of quoteArray) {
        if (longestWord.length < word.length) {  
            longestWord = word;
        }
    }
    
    return quoteArray, longestWord;
}

console.log(findLongestWord(quote));

//Task-4

const string = "Увесь народ мусить у великій історичній відповідальності непохитно стати навколо одної ідеї - ідеї української, незалежної, соборної держави.";

function formatString(string) {
    let stringArray = string.split("");

    if (string.length > 40) {
        stringArray = stringArray.slice(0, 40);
        stringArray.pop(" ");
        stringArray.push("...");
        stringArray = stringArray.join("");
    }

    return stringArray;
}

console.log(formatString(string));

//Task-5

const spamMessage = "apple, banana, cucumber, sale, potato, watermelon, spam, pineapple, carrot";

function checkForSpam(spamMessage) {
    let result;

    if (spamMessage.includes("sale", "spam")) {
        result = true;
    } else {
        result = false
    }

    return result;
}

console.log(checkForSpam(spamMessage));

//Task-6

let input;
const numbers = [];
let total = 0;

while (input !== null) {
    input = prompt("Введіть число, для подальшого розрахунку:");

    if (isNaN(Number(input))) {
      alert("Було введено не число, cпробуйте ще раз!!!");
    } else {
      numbers.push(Number(input));
    }
}

numbers.pop();

for (let number of numbers) {
    total += number;
}

console.log(`Загальна сума чисел дорівнює ${total}`);

//Task-7

const logins = ["Petya123", "980YT9WE23", "Karl768", "12345678910", "Tomato2009"];
let login = prompt("Введіть свій логін, для входу.");

function isLoginValid(login) {
    let loginValidResult;

    if (login === null) {
        loginValidResult = "error";
    } else if (login.length < 4 || login.length > 16) {
        loginValidResult = true;
    } else {
        loginValidResult = false;
    }

    return loginValidResult;
}

function isLoginUnique(logins, login) {
    let loginUniqueResult;

    if (logins.includes(login)) {
        loginUniqueResult = false;
    } else {
        loginUniqueResult = true;
    }

    return loginUniqueResult;
}

function addLogin(logins, login) {
    let message;

    if (isLoginValid(login) === true) {
      message = alert("Помилка! Логін повинен бути від 4 до 16 символів!");
    } else {
        if (isLoginValid(login) === "error") {
            message = alert("Операція була скасованою!");
        } else {
            if (isLoginUnique(logins, login) === false) {
                message = alert("Такий логін уже використовується!");
            } else {
                logins.push(login);
                message = alert("Логін успішно доданий!");
            }
        }
    }

    return message;
}

addLogin(logins, login);