// Here's a step-by-step guide on how to solve pattern questions using JavaScript, along with a code example:

// Step 1: Understand the pattern
// The first step in solving a pattern question is to understand the pattern itself.Read the pattern carefully, and try to identify any repeating sequences or rules that govern the pattern.

// Example 1 pattern:
/*
*
**
***
****
*****

*/


    // Here, the pattern consists of rows of asterisks, with each row having one more asterisk than the previous row.

//         Step 2: Plan your approach
// Once you understand the pattern, plan your approach for generating it using JavaScript.Think about how you will use loops, conditions, and string manipulation to create the pattern.

// For the example pattern, we can use a nested loop to generate the rows and asterisks.We'll use an outer loop to generate the rows, and an inner loop to generate the asterisks within each row.

// Step 3: Write the code
// Start by writing the basic structure of your code.Declare any variables you need and initialize them if necessary.Then, write the outer loop that will generate the rows of the pattern.Inside the outer loop, write the inner loop that will generate the asterisks for each row.


// 👀Example pattern code


// let rows = 5;

// for (let i = 1; i <= rows; i++) {
//     let pattern = "";

//     for (let j = 1; j <= i; j++) {
//         pattern += "*";
//     }

//     console.log(pattern);
// }



// Step 4: Test your code
// Once you have written your code, test it by running it and checking the output.Make sure that the pattern generated by your code matches the pattern given in the problem statement.

// When we run the example code, we should see the following output:

/*
*
**
***
****
*****

*/


//     Step 5: Refine your code
// If your code is not generating the correct pattern, go back and debug it.Check that your loop conditions are correct and that you are using the right variables and operators.You may need to make small tweaks to your code until it generates the correct pattern.

//     Step 6: Optimize your code
// Once you have a working solution, look for ways to optimize your code.Can you use fewer loops or make your code more efficient ? Think about ways to make your code more readable and maintainable.

//     Step 7: Document your code
// Finally, document your code by adding comments that explain what each part of the code does.This will make it easier for others to understand and modify your code in the future.

// By following these steps, you can easily solve pattern questions using JavaScript.With practice, you'll become more confident in your problem-solving skills and be able to tackle more complex patterns.


// 👀👀

// 👀Example 2: Right - aligned triangle pattern

/*
    *
   **
  ***
 ****
*****


*/

//     Plan:

// Use two nested loops, one for rows and another for columns
// Add spaces before the asterisks to right - align the triangle



// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let pattern = "";

//     // Add spaces before asterisks
//     for (let j = 1; j <= rows - i; j++) {
//         pattern += " ";
//     }

//     // Add asterisks
//     for (let j = 1; j <= i; j++) {
//         pattern += "*";
//     }

//     console.log(pattern);
// }



//👀 Example 3: Pyramid pattern

/*
    *
   ***
  *****
 *******
*********


*/

//     Plan:

// Use two nested loops, one for rows and another for columns
// Add spaces before and after the asterisks to form a pyramid shape



// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let pattern = "";

//     // Add spaces before asterisks
//     for (let j = 1; j <= rows - i; j++) {
//         pattern += " ";
//     }

//     // Add asterisks
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         pattern += "*";
//     }

//     // Add spaces after asterisks
//     for (let j = 1; j <= rows - i; j++) {
//         pattern += " ";
//     }

//     console.log(pattern);
// }


// 👀 Example 4: Diamond pattern

/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *


*/

//     Plan:

// Use two nested loops, one for rows and another for columns
// Use conditional statements to add spaces and asterisks to form a diamond shape


// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let pattern = "";

//     // Add spaces before asterisks
//     for (let j = 1; j <= rows - i; j++) {
//         pattern += " ";
//     }

//     // Add asterisks
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         pattern += "*";
//     }

//     console.log(pattern);
// }

// for (let i = rows - 1; i >= 1; i--) {
//     let pattern = "";

//     // Add spaces before asterisks
//     for (let j = 1; j <= rows - i; j++) {
//         pattern += " ";
//     }

//     // Add asterisks
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         pattern += "*";
//     }

//     console.log(pattern);
// }



// 👀Example 5: Half Pyramid Pattern

/*

*
**
***
****
*****

*/


//     Plan:

// Use a loop to print the required number of rows
// Use another loop to print the required number of asterisks in each row


// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern += "*";
//     }
//     console.log(pattern);
// }
//👀 Example 6: Inverted Half Pyramid Pattern

/*

*****
****
***
**
*

*/

//     Plan:

// Use a loop to print the required number of rows
// Use another loop to print the required number of asterisks in each row, in a decreasing order



// let rows = 5;
// for (let i = rows; i >= 1; i--) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern += "*";
//     }
//     console.log(pattern);
// }
// Example 7: Hollow Rectangle Pattern

/*
******
*    *
*    *
*    *
******

*/

//     Plan:

// Use two nested loops to print the required number of rows and columns
// Use conditional statements to check if a position is at the border or not



// let rows = 5;
// let columns = 6;
// for (let i = 1; i <= rows; i++) {
//     let pattern = "";
//     for (let j = 1; j <= columns; j++) {
//         if (i == 1 || i == rows || j == 1 || j == columns) {
//             pattern += "*";
//         } else {
//             pattern += " ";
//         }
//     }
//     console.log(pattern);
// }


// Example 8👀: Number Pattern

/*
1
12
123
1234
12345

*/ 

// Plan:

// Use a loop to print the required number of rows
// Use another loop to print the required numbers in each row



// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern += j;
//     }
//     console.log(pattern);
// }


