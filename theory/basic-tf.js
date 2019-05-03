//shape the tensor with 4 rows and 2 columns
const shape = [4,2];
//feed data into the tensor
const data = tf.tensor([4, 6, 5, 9, 13, 25, 1, 57], shape);
//print data2
data.print();

//set variables with zeros method
const data2 = tf.variable(tf.zeros([8]));
//print data2
data2.print();
//assign new values to tensor data2
data2.assign(tf.tensor1d([4, 12, 5, 6, 56, 30, 45, 7]));
//print updated data2
data2.print();

//create two 1-dimensional tensors
const data3 = tf.tensor1d([4, 6, 5, 9]);
const data4 = tf.tensor1d([3, 8, 1, 7]);
//print these tensors
data3.print();
data4.print();
//add values and print
data3.add(data4).print();
//multiply values and print
data3.mul(data4).print();