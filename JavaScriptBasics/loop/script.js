// function getDrinks(numberOfGuests, step) {
//   let sum = 0;
//   for (let i = 1; i <= numberOfGuests; i += step) {
//     sum += i;
//   }
//   console.log(sum);
//   return sum;
// }
// getDrinks(10, 3);

// function calculateProfit(amount, percent, period) {
//   let total = amount;
//   for (let i = 1; i <= period; i++) {
//     total += (total * percent) / 100;
//     console.log(total);
//   }
//   return total - amount;
// }
// calculateProfit();

// const title = "My first titLe";
// const part = "MY";
// // // console.log(title.replaceAll(" ", "_"));
// // console.log(title.toUpperCase());
// // console.log(title.toLowerCase().includes(part.toLowerCase()));

// // console.log(title.toLowerCase().startsWith("my"));
// // console.log(title.toLowerCase().endsWith("le"));
// // console.log(title.indexOf("t"));
// // console.log(title.indexOf("t", 8));
// // console.log(title.indexOf("t", 10));
// // console.log(title.lastIndexOf("first"));
// console.log(title.slice(2));

// // console.log(title.includes(part));

// function isSubstring(phrase, part) {
//   if (phrase.includes(part)) {
//     return true;
//   }
//   if (!phrase.includes(part)) {
//     return false;
//   }
// }

// console.log(isSubstring(title, part));
// let count = 0;
// let reversed = "";

// for (let i = 0; i < title.length; i++) {
//   if (title.toLowerCase()[i] === "t") {
//     count++;
//   }
// }

// for (const tWord of title) {
//   if (tWord.toLowerCase() === "t") {
//     count++;
//   }
// }
// console.log(count);

// // for (let i = title.length - 1; i >= 0; i--) {
// //   reversed += title[i];
// // }

// const title = "My First Title";
// const part = "Title";
// let reversed = "";

// for (const ch of title) {
//   reversed = ch + reversed;
// }
// console.log(reversed);

// function decryptMessage(message) {
//   let result = "";
//   for (const ch of message) {
//     result = ch + result;
//   }
//   return result;
// }
// console.log(decryptMessage("!!!reeb gniknird ekil eW"));
// let count = 0;
// function getSuccessRate(statistic) {
//   for (const ch of statistic) {
//     if (ch === "1") {
//       count++;
//     }
//     if (typeof statistic === "string") {
//       let statLenght = statistic.length;
//       console.log(statLenght);
//     } else return 0;
//   }
//   console.log(count);
//   console.log(percent);
// }
// getSuccessRate("1111000000");

// Функция что считает процент едениниц в строке из нулей и единици
// function getSuccessRate(statistic) {
//   let count = 0;
//   if (typeof statistic === "string") {
//     let statLenght = statistic.length;
//     if (statLenght == 0) {
//       return 0;
//     } else {
//       for (const ch of statistic)
//         if (ch === "1") {
//           count++;
//         }
//       const percent = (count / statLenght) * 100;
//       console.log(percent);
//       return percent;
//     }
//   }
// }
// getSuccessRate("01");

// function makeAbbr(words) {
//   if (typeof words !== "string") {
//     return "";
//   }

//   if (words.trim() === "") {
//     return "";
//   }

//   const wordsInput = words.split(" ");
//   let abbreviation = "";

//   for (const word of wordsInput) {
//     abbreviation += word[0].toUpperCase();
//   }

//   return abbreviation;
// }

// // Пример использования
// console.log(makeAbbr("Пример текста для аббревиатуры")); // Вывод: "ПТДА"
// console.log(makeAbbr("Пример")); // Вывод: "П"
// console.log(makeAbbr("")); // Вывод: ""
// console.log(makeAbbr(123)); // Вывод: ""

// function makeAbbr(words) {
//   if (typeof words !== "string") {
//     return "";
//   }

//   if (words.trim() === "") {
//     return "";
//   }

//   const words = words.split(" ");
//   let abbreviation = "";

//   for (const word of words) {
//     abbreviation += word[0].toUpperCase();
//   }

//   return abbreviation;
// }

// Пример использования
// console.log(makeAbbr("Паоара Арарара Срарарао Аорараар")); // Вывод: "ПТДА"
// console.log(makeAbbr("Пример")); // Вывод: "П"
// console.log(makeAbbr("")); // Вывод: ""
// console.log(makeAbbr(123)); // Вывод: ""

// function removeVowels(text) {
//   if (typeof text !== "string") {
//     return text; // Возвратить входной текст без изменений, если это не строка
//   }

//   // Используем регулярное выражение для удаления гласных букв (A, E, I, O, U) независимо от регистра
//   const withoutVowels = text.replace(/[AEIOUaeiou]/g, "");

//   return withoutVowels;
// }

// // Пример использования
// console.log(removeVowels("Пример текста с гласными буквами")); // Вывод: "Прмр текст с глсным бквм"
// console.log(removeVowels("Hello World")); // Вывод: "Hll Wrld"
// console.log(removeVowels("123")); // Вывод: "123"
// console.log(removeVowels(123)); // Вывод: 123

// function removeVowels(doc) {
//   let result = "";
//   const vowels = "aeiouAEIOU";
//   for (const ch of doc) {
//     if (ch !== "a") {
//       result = result + ch;
//     }
//   }
//   console.log(result);
// }
// removeVowels("aaaaeeeeiiibddddb");

// function removeVowels(doc) {
//   const vowels = "aeiouAEIOU";
//   let result = "";
//   for (const ch of doc) {
//     if (vowels.indexOf(ch) === -1) {
//       result = result + ch;
//     }
//   }
//   console.log(result);
//   return result;
// }

// removeVowels("aaaaaaaaaaaaaa");

// function isWerewolf(target) {
//   let direct = "";
//   let reversed = "";
//   for (const ch of target) {
//     if (typeof ch === "string") {
//       direct += ch;
//       reversed = ch + reversed;
//       console.log(reversed, direct);
//     }
//   }
//   return typeof (direct === reversed);
// }
// isWerewolf("Was it a rat I saw?");

// function isWerewolf(target) {
//   const cleanString = target.toLowerCase().replace(/[^a-z]/g, "");

//   const reversedString = cleanString.split("").reverse().join("");

//   return cleanString === reversedString;
// }

// console.log(isWerewolf("A man, a plan, a canal, Panama")); // Вывод: true, это палиндром
// console.log(isWerewolf("hello world")); // Вывод: false, это не палиндром

// function isWerewolf(target) {
//   let direct = "";
//   let reversed = "";
//   const lowerTarget = target.toLowerCase();

//   for (const letter of lowerTarget) {
//     if (isLetter(letter)) {
//       direct += letter;
//       reversed = letter + reversed;
//     }
//   }
//   return reversed === direct;
// }

// function isLetter(letter) {
//   const abc = "qazwsxedcrfvtgbyhnujmikikolp";
//   return abc.includes(letter);
// }
// ARRAYS ====================================================================
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const words = ["word1", "word2", "word3", "word4", "word5"];

// console.log(numbers, words);
// console.log(["Vlad", 28, true]);

// const userName = "Vladislav";

// console.log(userName.split(""), [...userName], Array.from(userName));

// for (let i = 0; i < words.length; i++) {
//   console.log(words[i]);
// }

// for (const ch of numbers) {
//   console.log(ch);
// }

// const numbers = [0, 1, 2, 3, 4];

// console.log(numbers);

// // numbers[5] = 55;

// numbers[numbers.length] = 55;
// // push() - добавляет элемент в конец массива. Метот pop() - удаляет последний элемент из массива
// numbers.push(100, 101, 102);
// const number = numbers.pop();
// // метод unshift() - добавляет элемент в начало массива. метод shift() - удаляет элемент
// numbers.unshift(100, 101, 102);
// const number1 = numbers.shift();

// console.log(numbers);
// console.log(number);
// console.log(number1);
// ===========================================
// const words = ["first", "name", "and", "last", "name"];

// console.log(words);

// console.log(
//   words.includes("and"), // true
//   words.includes("and"), // false
//   words.includes("a") // true
// );
// console.log(
//   words.indexOf("name"), // 1
//   words.indexOf("name", 3) // 4
// );

// console.log(
//   words.lastIndexOf("name"), // 4
//   words.lastIndexOf("name") // 1
// );
// ===========================================

// const pharse = "My name is Vladislav";
// const words = pharse.split(" ", 4); // параметр "2" передает в массив только первые два элемента массива
// // чтобы превратить массив в строку можно использовать метод join() в параметре можно указать символ который будет между словами

// console.log(words);
// console.log(words.join("-"));

// // Также элементы массива можно получить методом slice() В параметрах можно указать КРОМЕ каких элементов мы получим

// console.log(words.slice(2, -2)); // параметры 2, 2 значат что мы получим все элементы КРОМЕ первых двух и последних двух и так как в массиве всего 4 элемента - мы получим пусто массив

// const result = getSum([2, 3, 7, 6, 7, 1, 10, 14, 18, 21, 24, 2, 2, 2]);

// console.log(result);

// function getSum(numbers) {
//   if (numbers.lenght === 0) {
//     return 0; // возвращает 0 если массиве нет ни одного элемента
//   }
//   let sum = 0;
//   let min = numbers[0];
//   let max = numbers[0];
//   for (const n of numbers) {
//     if (n < min) {
//       min = n;
//     }
//     if (n > max) {
//       max = n;
//     }
//     sum += n;
//   }
//   //   console.log("максимальное значение в массиве", max);
//   //   console.log("минимальное значение в массиве", min);
//   console.log("Сумма всех чисел в массиве", sum);
//   //   console.log("Длинна массива", numbers.length);
//   return sum; // возвращает сумму всех чисел в массиве. чтобы вернуть среднее нужно sum / numbers.lenght;
//   //   // return Math.floor(sum / numbers.length); // округляет до меньшего целого
//   //   // return Math.ceil(sum / numbers.length); // округляет до большего целого
//   //   return Math.round(sum / numbers.length); // округляет к ближайшему целому
// }

// ========================= ЗАДАЧИ ===========================
// ============================ 1 ==============================
// function createArray(N) {
//   let numbers = [];
//   for (let i = 1; i <= N; i++) {
//     if (N === 0) {
//       return numbers;
//     }
//     numbers.push(i);
//   }
//   console.log(numbers);
//   return numbers;
// }
// createArray(0);
// ===========================================================
// =============================== 2 ==============================
// function makeStickers(detailsCount, robotPart) {
//   let array = [];
//   for (let i = 1; i <= detailsCount; i++) {
//     if (detailsCount === 0) {
//       return array;
//     }
//     array.push(`${robotPart} detail #${i}`);
//   }
//   return array;
// }
// makeStickers(10, "Ear");
// ============================= 3 ================================
// function doublePower(currentPowers) {
//   let doubleArray = [];
//   for (const double of currentPowers) {
//     doubleArray.push(double * 2);
//   }
//   console.log(doubleArray);
//   return doubleArray;
// }
// doublePower([100, 200, 300, 400]);
// ============================ 4 =================================

// let arr = [].length
// function isSorted(boxNumbers) {
//   for (let i = 1; i < boxNumbers.length; i++) {
//     if (boxNumbers[i] < boxNumbers[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isSorted([3, 1, 2, 3, 4, 5, 6, 8]));
// ========================== 5 ===================================

// 'forward' означає y + 1 (крок уперед);
// 'back' означає y - 1 (крок назад);
// 'right' означає x + 1 (крок праворуч);
// 'left' означає x - 1 (крок ліворуч).

// function getLocation(coordinates, commands) {
//   let x = coordinates[0];
//   let y = coordinates[1];
//   let newCoordinates;
//   for (const N of commands) {
//     if (N.includes("forward")) {
//       y = y + 1;
//     }
//     if (N.includes("back")) {
//       y = y - 1;
//     }
//     if (N.includes("left")) {
//       x = x - 1;
//     }
//     if (N.includes("right")) {
//       x = x + 1;
//     }
//   }
//   console.log(x, y);
//   return (newCoordinates = [x, y]);
// }

// console.log(getLocation([0, 0], ["back", "left"]));
// ============================ 6 ============================
// function compareRobots(firstRobotResults, secondRobotResults) {
//   let sumOfFirst = 0;
//   let sumOfSecond = 0;
//   for (const N of firstRobotResults) {
//     sumOfFirst += N;
//   }
//   for (const N of secondRobotResults) {
//     sumOfSecond += N;
//   }
//   console.log(sumOfFirst);
//   console.log(sumOfSecond);
//   if (sumOfFirst > sumOfSecond) {
//     return "First robot for sale!";
//   }
//   if (sumOfFirst === sumOfSecond) {
//     return "Both robots for sale!";
//   } else {
//     return "Second robot for sale!";
//   }
// }
// compareRobots([2, 3, 5], [2, 4, 6]);

// ====================== Доп задачи ================================
// ====================== 1 ============================
// function checkNumber(number) {
//   const Plus = number > 0;
//   console.log(Plus);
//   const Even = number % 2 === 0;
//   console.log(Even);
//   const MultiOf10 = number % 10 === 0;
//   console.log(MultiOf10);

//   return [Plus, Even, MultiOf10];
// }
// console.log(checkNumber(-12));
// ==================== 2 ==================================
// function getArraysSum(arr1, arr2) {
//   let sum1 = 0;
//   let sum2 = 0;
//   for (const N of arr1) {
//     sum1 += N;
//   }
//   for (const N of arr2) {
//     sum2 += N;
//   }
//   console.log(sum1 + sum2);
//   return sum1 + sum2;
// }
// getArraysSum([1, 1, 1, 1, 1], [1, 1, 1, 1, 1]);

// ========================== 3 ============================
// function combineArrays(first, second) {
//   let sumArr = [];
//   for (let i = 0; i < first.length && second.length; i++) {
//     sumArr.push(first[i] + second[i]);
//   }
//   return sumArr;
// }
// console.log(combineArrays([3, 1, 1, 1, 5, 2, 3], [1, 1, 1, 1, 1, 1, 4]));
// ========================== 4 ================================
// function splitString(str) {
//   const parts = [];

//   for (let i = 0; i < str.length; i += 2) {
//     parts.push(str.slice(i, i + 2));
//   }

//   if (str.length % 2 === 1) {
//     parts[parts.length - 1] += "_";
//   }

//   return parts;
// }

// Пример использования
// const inputString = "HelloWorldhelloss";
// const result = splitString(inputString);
// console.log(result); // Выводит ["He", "ll", "oW", "or", "ld"]
// ================ 5 =====================
// function splitString(str) {
//   let cutWords = [];
//   for (let i = 0; i < str.length; i += 2) {
//     cutWords.push(str.slice(i, i + 2));
//   }
//   if (str.length % 2 === 1) {
//     cutWords[cutWords.length - 1] += "_";
//   }
//   return cutWords;
// }
// console.log(splitString("hello world"));
// ====================== 6 =============================
// function scrollingText(word) {
//   const wordInUpperCase = word.toUpperCase();
//   const wordLength = word.length;
//   const combinations = [];

//   for (let i = 0; i < wordLength; i++) {
//     const rotatedWord = wordInUpperCase.slice(i) + wordInUpperCase.slice(0, i);
//     combinations.push(rotatedWord);
//   }

//   return combinations;
// }

// Пример использования
// const inputWord = "Albiony";
// const result = scrollingText(inputWord);
// console.log(result); // Выводит массив ["ROBOT", "OBOTR", "BOTRO", "OTROB", "TROBO"]
// ============================= 7 =======================================================
// function scrollingText(word) {
//   const wordUpperCase = word.toUpperCase();
//   console.log("слово в верхнем регистре - ", wordUpperCase);
//   const wordLength = word.length;
//   console.log("длинна слова -", wordLength);
//   let wordComboArr = [];
//   for (let i = 0; i < wordLength; i++) {
//     let rotatedWord = wordUpperCase.slice(i) + wordUpperCase.slice(0, i);
//     wordComboArr.push(rotatedWord);
//   }
//   return wordComboArr;
// }
// console.log(scrollingText("word"));

// ================================= 8 ==============================================

// Принимает в себя плюсовое число и проверяет особенное оно или нет. Число считается особенным если каждая его цифра не больше 5ти.
// function isSpecialNumber(n) {
//   let numberToString = n.toString();
//   for (let i = 0; i < numberToString.length; i++) {
//     if (numberToString[i] < numberToString[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isSpecialNumber(1234561));
// =================================================

// function isJumping(number) {
//   let numberToString = number.toString();
//   for (let i = 1; i < numberToString.length; i++) {
//     let minus = numberToString[i] - numberToString[i - 1];
//     console.log(minus);
//     if (minus !== 1 && minus !== -1) {
//       return "NOT JUMPING";
//     }
//     if (numberToString[i] === numberToString[i - 1]) {
//       return "NOT JUMPING";
//     }
//   }
//   return "JUMPING";
// }
// console.log(isJumping(1111));

// Функия которая вовращает false если в строке phares содердится хоть одна буква из blacklist
// function hasNoneLetters(phrase, blacklist) {
//   const stringLower = phrase.toLowerCase();
//   const blackList = blacklist.toLowerCase();
//   console.log(stringLower, blackList);
//   for (const letter of stringLower) {
//     if (blackList.includes(letter)) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(hasNoneLetters("abcd", "def"));
// ========================== 2 ==============================================================
// Функия должна удалять из переданной строки все Z и S в любых регистрах
// function removeZS(string) {
//   let newString = string.replace(/S/gi, "").replace(/Z/gi, "");
//   return newString;
// }
// console.log(removeZS("zzzmates"));

// let someString = "New Some String";
// let newSomeString = someString.replace(/S/gi, "");
// console.log(newSomeString);
// ================= 3 -=======================================
// Функия должна вовращать последнюю букву переданной строки
// function getLastCharacter(input) {
//   let letters = [];
//   for (const letter of input) {
//     letters.push(letter);
//   }
//   return letters[letters.length - 1];
// }
// console.log(getLastCharacter("Some string"));
// ====================== 4 =========================
// Функия вовращает сумму всех чисел в массиве

// function getSum(numbers) {
//   let sum = 0;
//   for (const N of numbers) {
//     sum += N;
//   }
//   console.log(sum);
//   return sum;
// }
// getSum([1, 1, 1, 1, 1, 1, 1, 1, 1]);

// ========================= 5 ===========================
// Функия должна возвращаеть новый массив без слов которые начинаются на гласную букву
// function removeVowelKeys(keys) {
//   let vowels = "aeiouyAEIOUY";
//   let newArr = [];
//   for (const words of keys) {
//     console.log(words[0]);
//     if (!vowels.includes(words[0].toLowerCase())) {
//       newArr.push(words);
//     }
//   }
//   console.log(newArr);
//   return newArr;
// }
// removeVowelKeys(["Word", "NwWrd", "A", "u", "What?", "You"]);
// ========================== 6 =====================================
// Функия должна возвращать самую длинную строку из массива
// function getLongestString(strings) {
//   let longestString = "";
//   let longestStrings = [];
//   for (const string of strings) {
//     if (string.length > longestString.length) {
//       longestString = string;
//       longestStrings = [string];
//     } else if (longestString.length === string.length) {
//       longestStrings.push(string);
//     }
//   }
//   console.log(longestStrings);
//   return longestStrings[0];
// }
// console.log(
//   getLongestString([
//     "string",
//     "string2",
//     "string22",
//     "string22222",
//     "string33333",
//   ])
// );

let person = {
  name: "Wilson",
  age: 17,
  adult: false,
};
let adultContent = ["18+ image", "18+ videos", "18+ gifs"];

if (person.age >= 18) {
  person.adult = true;
  console.log("Adult");
} else {
  console.log("child");
}
console.log(person);

if (person.adult === true) {
  console.log(adultContent);
} else {
  console.log("YOU ARE CHILD AND YOU CANT WATCH ADULT CONTENT");
}
console.log(typeof person.adult, person.adult);
console.log(typeof person.name, person.name);
console.log(typeof person.age, person.age);
