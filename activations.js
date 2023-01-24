function relu(x){
    if (x>0){
        return x
    }
    
    return 0
}

function softmax(x){
    let denominator = 0
    let density = new Array(x.length)

    for (let i=0; i<x.length; i++){
        denominator+=Math.exp(x[i])
    }

    for (let i=0; i<x.length; i++){
        density[i]=Math.exp(x[i])/denominator
    }

    return density
}
