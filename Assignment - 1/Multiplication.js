function table (number) {
    for(var i = 1; i <= 10; i++){
        var res = i*number;
        console.log(`${number} * ${i} = ${res}`);
    } 
}
table(parseInt(prompt('Enter an integer: ')));
