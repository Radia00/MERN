const score = parseInt(prompt('Enter an integer: '));

function gradeCalculator(score){
    
    switch (true) {
        case score >=90 :
            grade = "A"
            break;
        case score >=80 && score <= 89: 
            grade = "B"
            break
        case score >=70 && score <= 79: 
            grade = "C"
            break
        case score >=60 && score <= 69: 
            grade = "D"
            break
        default:
            grade="F"
            break;
    }
    return grade
}

console.log(gradeCalculator(score));
