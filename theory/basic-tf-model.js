//define model
function simpleAdd(inputOne, inputTwo) {
    //tidy is used to free up GPU memory once the functions returns
    return tf.tidy(() => {
        const x1 = inputOne;
        const x2 = inputTwo;
        const y = x1.add(x2);
        return y;
    });
}

//create two 1d tensors
const data1 = tf.tensor1d([1, 2, 3, 4]);
const data2 = tf.tensor1d([5, 6, 7, 8]);

//using model to do input to output
const result = simpleAdd(data1, data2);
//print the result
result.print();