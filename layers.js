class DenseLayer{
    constructor(input_size, ouput_size, activation){
        this.input_size = input_size
        this.ouput_size = ouput_size
        this.activation = activation

        // y = mx+b
        this.weights = createRandomMatrix(input_size, ouput_size) //M 
        this.bias = createRandomMatrix(1, ouput_size) // B
    }
}