function createRandomMatrix(rows, columns){
    let m = new Array(rows)

    for (var i = 0; i < rows; i++) {
        m[i] = new Array(columns);
        for (let j = 0; j < columns; j++){
            m[i][j] = (Math.random()*2-1)
        }
    }

    return m 
}

function createEmptyMatrix(rows, columns){
    let m = new Array(rows)

    for (var i = 0; i < rows; i++) {
        m[i] = new Array(columns)
        for (let j = 0; j < columns; j++){
            m[i][j] = 0
        }
    }

    return m  
}

function add_row_axis(x){
    let new_x = new Array(1)
    new_x[0] = x
    
    return new_x
}

function dot(m1, m2){
    if (m1.length < 1){
        console.log("array should be 2 dimensional")
        return
    }

    if (m1.length < 1){
        console.log("array should be 2 dimensional")
        return
    }

    n_size = m1.length
    m_size = m1[0].length //equals to m2.lenght
    h_size = m2[0].length

    if (m1[0].length != m2.length){
        console.log("the last dimension of the first should be equal to the first dimension of the second")
        return
    }

    dot_prod_matrix = createEmptyMatrix(m1.length, m2[0].length)
    for (let k = 0; k<h_size; k++){
        for(let i = 0; i<n_size; i++){
            let partial_result = 0
            for (let j=0; j<m_size; j++){
                partial_result += m1[i][j]*m2[j][k]
            }
            dot_prod_matrix[i][k] = partial_result
        }
    }

    return dot_prod_matrix
}

function sum_vectors_broadcast(m1, b){
    if (m1.length != b.length){
        console.log("to be able to broad cast the first dimension should be equal")
        return
    }

    for (let j=0; j<m1[0].length; j++){
        for (let i=0; i<m1.length; i++){
            m1[i][j] += b[i][0]
        }
    }

    return m1
}

function get_max_arg(x){
    let max = -1
    let max_index = 0

    for (let i=0; i<x.length; i++){
        if (x[i]>max){
            max = x[i]
            max_index = i
        }
    }

    return max_index
}
