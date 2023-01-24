# neural-network-from-scratch-on-javascript

This implementation was done for a workshop to show the basic conpcepts of deep learning

## What do we have here?:
  - Activations has a relu and a softmax implementation
  - Layers is where I define a Dense layer which will be the weight plus bias with an activation function the layer will compute the
  dot product from the input weights plus bias and all of that will go through the activation function => activation(X.W+b) and return the
  amount of units desired.
  - Model is just a simple fully connected layer.
  - Vector operations has all the operations needed implementing by hand in js
   - sum vectors
   - dot product between vectors
   - broadcast operation
   - create empty and random matrices.

This implementation was done with no external libraries and was meant to show the concepts at its core.
