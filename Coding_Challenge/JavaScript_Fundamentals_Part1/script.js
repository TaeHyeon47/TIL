////////////////////////////////
///// Coding Challenge #3 /////
///////////////////////////////
// There are two gymnastics teams, Dolphins and Koalas.
// They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 😀

/////////// My Answer //////////////
const avgDolphins = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 106) / 3;
console.log(avgDolphins);
console.log(avgKoalas);

if (avgDolphins >= 100 && avgKoalas >= 100) {
  if (avgDolphins > avgKoalas) {
    console.log("Dolphins Team Winner");
  } else if (avgDolphins < avgKoalas) {
    console.log("Koalas Team Winner");
  } else {
    console.log("Draw");
  }
}

console.log(avgDolphins);

/////////// Other Answer ///////////
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy!");
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy");
}

////////////////////////////////
///// Coding Challenge #4 /////
///////////////////////////////
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant.
// In his country, it's usual to tip 15% if the bill value is between 50 and 300.
// If the value is different, the tip is 20%.

// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this.
// It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement,
// and then try to convert it to a ternary operator!)
// 2. Printastringtotheconsolecontainingthebillvalue,thetip,andthefinalvalue (bill + tip).
// Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430

const bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`bill value : ${bill}`);
console.log(`tip value : ${tip}`);
console.log(`Total value : ${tip + bill}`);
