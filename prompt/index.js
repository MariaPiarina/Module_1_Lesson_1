// Задание 4
const questions = ['Сколько будет 2 + 2?','Чему равен корень из 9?','Сколько будет 2 в 5-й степени?'];
const correctAnswers = ['4','3','32'];
let answer = '';

// Вопрос 1-3
let i = 0;
for (let question of questions) {
    answer = window.prompt(question);
    if (answer === correctAnswers[i]) {
        alert('Правильно!')
    } else {
        alert('Ответ неверный. Следующий вопрос.')
    }
    i++;
}

