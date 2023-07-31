function print_table(n, i = 1) {
        if (i == 11) 
            return;
        console.log(n + " * " + i + " = " + n * i);
        i++;  
        print_table(n, i);
    }
     
    const n = parseInt(prompt('Enter an integer: '));
    print_table(n);
