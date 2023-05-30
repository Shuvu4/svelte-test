let name = prompt("Как тебя зовут?");
alert(`Добро пожаловать, ${name}!`)
let quiz = {
data: [
{
q: "Как включить компьютер?",
o: [
    "Нажать кнопку на мыши",
    "Нажать кнопку включения",
    "Пнуть компьютер",
    "Нажать кнопку `Enter`",
],
a: 1
},
{
q: "Какое устройство выводит информацию на экран?",
o: [
    "Монитор",
    "Клавиатура",
    "Камера",
    "Колонки",
],
a: 0
},
{
q: "Какие компании производят процессоры?",
o: [
    "Logitech, Razer",
    "Ryzen, Core",
    "Intel, AMD",
    "Coca Cola, Fantola",
],
a: 2
},
{
q: "Какая программа ставит расширение '.docx'?",
o: [
    "Excel",
    "Python",
    "PowerPoint",
    "Word",
],
a: 3
},
{
q: "Какое из устройств в перечне служит для воспроизведения звука?",
o: [
    "Наушники",
    "Монитор",
    "Мышь",
    "Микрофон",
],
a: 0
}
],

hWrap: null, 
hQn: null, 
hAns: null, 
now: 0, 
score: 0, 
    
init: () => {
    quiz.hWrap = document.getElementById("quizWrap");
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);
    quiz.draw();
},
    
draw: () => {
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz";
        radio.id = "quizo" + i;
        quiz.hAns.appendChild(radio);
        let label = document.createElement("label");
        label.innerHTML = quiz.data[quiz.now].o[i];
        label.setAttribute("for", "quizo" + i);
        label.dataset.idx = i;
        label.addEventListener("click", () => {
        quiz.select(label);
});

quiz.hAns.appendChild(label);
}
},
select: (option) => {
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
        label.removeEventListener("click", quiz.select);
    }
    
    let correct = option.dataset.idx == quiz.data[quiz.now].a;
    if (correct) {
      quiz.score++;
      option.classList.add("correct");
    } else {
      option.classList.add("wrong");
    }
    
    quiz.now++;
    setTimeout(() => {
      if (quiz.now < quiz.data.length) { quiz.draw(); }
      else {
        quiz.hQn.innerHTML = `${name}, Вы ответили на ${quiz.score} из ${quiz.data.length} правильно.`;
        quiz.hAns.innerHTML = "";
}
}, 1000);
},
reset : () => {
    quiz.now = 0;
    quiz.score = 0;
    quiz.draw();
}
};
window.addEventListener("load", quiz.init);