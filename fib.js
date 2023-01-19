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

fibs(8)
fibs(20)
fibs(1)
fibs(3)