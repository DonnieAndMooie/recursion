function mergeSort(list){
    if (list.length === 1){
        return list
    }
    else{
        const mid = (list.length / 2)
        let firstHalf = list.slice(0, mid)
        let secondHalf = list.slice(mid)
        firstHalf = mergeSort(firstHalf)
        secondHalf = mergeSort(secondHalf)

        let i = 0
        let j = 0
        let k = 0
        let sortedList = []
        while (i < firstHalf.length || j < secondHalf.length){
            if (firstHalf[i] < secondHalf[j] || secondHalf[j] === undefined){
                sortedList[k] = firstHalf[i]
                k++
                i++
            }
            else{
                sortedList[k] = secondHalf[j]
                k++
                j++
            }
        }
        return sortedList
    }
}

const sortedList = mergeSort([6,4,3,7,1,5,8,2])
console.log(sortedList)
