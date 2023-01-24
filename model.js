class NeuralNetwork{
    constructor(sensors_count, actions_count){
        //Create all layers
        this.layers=[]
        this.layers.push(new DenseLayer(sensors_count, 8, relu))
        //add more hidden layers
        this.layers.push(new DenseLayer(8, 4, relu))
        this.layers.push(new DenseLayer(4, actions_count, relu))
    }

    apply_activation_function(activation, x){
        for (let i = 0; i<x.length ; i++){
            for (let j = 0; j<x[0].length ; j++){
                x[i][j] = activation(x[i][j])
            }
        }

        return x
    }

    feedForward(givenInputs){
        var layers_outputs = new Array(this.layers.length)
        for (let i=0; i<this.layers.length; i++){
            this.layers[i].inputs = givenInputs
            let xw = dot(givenInputs, this.layers[i].weights)
            let z = sum_vectors_broadcast(xw, this.layers[i].bias)
            let activation = this.apply_activation_function(this.layers[i].activation, z)
            layers_outputs[i] = activation
            this.layers[i].outputs = activation
            givenInputs = activation
        }
        layers_outputs[layers_outputs.length-1] = softmax(layers_outputs[layers_outputs.length-1][0])

        return layers_outputs
    }
}