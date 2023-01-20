function fibs(num){
    sequence = []
    for (let i=0; i < num; i++){
        if (i === 0){
            sequence.push(0)
        }
        else if (i === 1){
            sequence.push(1)
        }
        else{
            let newVal = sequence[i-1] + sequence[i-2]
            sequence.push(newVal)
        }
    }
    console.log(sequence)
}

let array = []
function fibsRec(num){
    if (num <= 0){
        return
    }
    else if (num === 1){
        array[num-1] = 0
        return 0
    }
    else if (num === 2){
        array[num-1] = 1
        return 1
    }
    else{
        newNum = fibsRec(num-2) + fibsRec(num-1)
        array[num-1] = newNum
        return newNum
    }
}

fibsRec(12)
console.log(array)