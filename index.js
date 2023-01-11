let age = 2023;
let questionAge = prompt('Введите Ваш год рождения?')
let questionCiti = prompt('Введите город в котором вы проживаете?')
let questionSport = prompt('Введите Ваш любимый вид спорта?(soccer, basketball, boks)')
if(questionAge){
    alert(age - questionAge)
}else if(questionAge === null){
    alert('Плохо, что вы не захотели ввести свой возраст')
}

//
if(questionCiti === 'Киев'){
    alert('Ты живешь в Столице Украины')
}else if (questionCiti === 'Вашингтон'){
    alert('Ты живешь в Столице Америки')
}else if(questionCiti === 'Лондон'){
    alert('Ты живешь в Столице Англии')
}else if(questionCiti === null){
    alert('Плохо, что вы не захотели ввести свой город')
}else{
    alert('Ты живешь в городе ' + questionCiti)
}

//
if (questionSport === 'boks'){
    alert('Круто! Ты хочешь стать как Александр Хижняк?')
}else if(questionSport === 'basketball'){
    alert('Круто! Ты хочешь стать как Кобби Брайн?')
}else if(questionSport === 'soccer'){
    alert('Круто! Ты хочешь стать как Роналду?')
}else if(questionSport === null){
    alert('Плохо, что вы не захотели ввести свой любимый вид спорта')
}
