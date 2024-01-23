// loops are used to repeatedly execute a block of code until a specified condition is met. They are essential for performing tasks that require repetitive actions, such as iterating over arrays, processing lists, or executing code a specific number of times. JavaScript provides several types of loops, including for, while, and do-while loops.

1-For Loop:
The for loop is commonly used when you know the number of iterations in advance.

for (initialization; condition; update) {
    // code to be executed
}

example-
for (let i = 0; i < 5; i++) {
    console.log(i);
}

2-while loop:
The while loop is used when the number of iterations is not known beforehand and is based on a condition.

while (condition) {
    // code to be executed
}

example-
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

3-do-while loop:
The do-while loop is similar to the while loop, but it ensures that the code block is executed at least once, as the condition is checked after the block is executed.

do {
    // code to be executed
} while (condition);

example-

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
