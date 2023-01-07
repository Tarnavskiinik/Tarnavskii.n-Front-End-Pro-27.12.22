let x,y;
let question = prompt('Выбирите действие? (add, sub, mult, div)')
x = parseInt(prompt("Введите первое число"));
y = parseInt(prompt("Введите второе число"));
if(question === 'add'){
    alert(x + "+" + y + "=" + (x+y));
}
else if(question === 'sub'){
    alert (x + "-" + y + "=" + (x-y))
}
else if(question ==='mult'){
    alert(x + "*" + y + "=" + (x*y))
}
else if(question ==='div'){
    alert(x + "/" + y + "=" + (x/y))
}
else{
    console.log();('Error');
}









