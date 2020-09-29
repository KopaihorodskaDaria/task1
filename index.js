// Створємо масив із словами
var words = [ "програма", "макака", "прекрасний", "мед"];
  // Вмбораєво випадкове слово
var word = words[Math.floor(Math.random() * words.length)];
  // Створюємо кінцевий масив
var answerArray = [];

for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_"; 
}

var remainingLetters = word.length;
// Цикл  гри
while (remainingLetters > 0) { // Показуємо стан гри alert(answerArray.join(" "));
    // Варіан відповіді
    var guess = prompt("Вгадай літеру, або виходь з гри.");
    if (guess === null) {
    // Виходим із цикла break;
    } else if (guess.length !== 1) { 
    alert("Введіть лише одну літеру");
    } else {
    // обновляєм
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) { 
            answerArray[j] = guess; remainingLetters--;
            }
        }
    }      // кінець гри
}
        // відповідь і привітання
alert(answerArray.join(" "));
alert("Чудово. Було загадано слово" + word);