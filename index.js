const newName = prompt('Enter Your Name :')
const age = +prompt('Enter Your Age :')
const smoke = confirm('Are you smoke?')


if (age < 18){
    if(smoke){
        console.log('Привіт '+ newName +'A батьки знають про це?')
    }
    else{
        console.log('Привіт '+ newName +'! Правильно, зараз головне добре вчитися!')
    }
}
else{
    if(smoke){
        console.log('Привіт '+ newName +', що ж, ти сам обрав цей шлях...')
    }
    else{
        console.log('Привіт '+ newName +', чудово! Ти мабуть ще й спортом займаєшся!')
    }
}

