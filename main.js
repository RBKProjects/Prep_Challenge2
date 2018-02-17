// use the following helper functions in your solution
function each(coll, f) {
	if (Array.isArray(coll)) {
	  for (var i = 0; i < coll.length; i++) {
		f(coll[i], i);
	  }
	} else {
	  for (var key in coll) {
		f(coll[key], key);
	  }
	}
  }
  
  function filter(array, predicate) {
	var acc = [];
	each(array, function(element, i) {
	  if (predicate(element, i)) {
		acc.push(element);
	  }
	});
	return acc;
  }
  
  function map(array, func) {
	var acc = [];
	each(array, function(element, i) {
	  acc.push(func(element, i));
	});
	return acc;
  }
  
  function reduce(array, f, acc) {
	if (acc === undefined) {
	  acc = array[0];
	  array = array.slice(1);
	}
	each(array, function(element, i) {
	  acc = f(acc, element, i);
	});
	return acc;
  }
  
  // Remember to relax :)
  



//=======================================================================
/*                                  Q1                                 */
//=======================================================================
  //Depending on data modeling concept that you have learned:
  // create a factory function called makeCar that represents cars,
  // what different attributes cars may have? create two cars object from your factory function and save them in one array called cars!

  function makeCar(){
    // TODO: Your code here
  }
  
  // write function displayCar that can be used to display one car

  function displayCar(car) {
    // TODO: Your code here
  }
  

//=============================================================================
/*                                  Q2                                       */
//=============================================================================
  //write a function that takes a string as an input and returns an array
  //containing the length of each word in that string.
  //solve it using the most appropriate helper functions(reduce,each,map,filter)
  // wordLengths("hello its me") // [5,3,2]
  
  function wordLengths(str){
	//your code is here
   }
  

//=============================================================================
/*                                  Q3                                       */
//=============================================================================
  // Using reduce, write a function countOccurrences that accepts two parameters: a string, 
  // and a character (e.g. "a"), and returns number of times that character occured:
  // countOccurrences("hello", "l"); // 2
  // countOccurrences("hello, world!", "l"); // 3

  function countOccurrences(string, character) {
    // your code is here
  }


//=============================================================================
/*                              Q4                                           */
//=============================================================================
  //write a function that takes a string as an input and returns an array
  //with only the words of length longer than 3.
  //Note: solve it using one of the helpers functions(reduce,each,map,filter)
  //wordsLongerThanThree("hello its me again") // [ "hello", "again" ]

  function wordsLongerThanThree(str){
    //your code is here
  }
  
  
//=============================================================================
/*                                  Q5                                       */
//=============================================================================
	//I have a bucket of sloths. Each sloth is special and has a long name.
	// Below is an array called bucketOfSloths, containing all the information about my sloths.
	var bucketOfSloths = [
		{name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2},
		{name: {first: "Slow", last: "Pumpkin"}, age: 3},
		{name: {first: "Bullet", middle: "Proof", last: "Sloth"}, age: 4},
		{name: {first: "Boos", middle: "Boos", last: "Bun"}, age: 5},
		{name: {first: "Jungle", last: "Fuzz"}, age: 2}
	];

	// a- write a function fullName that takes index number and array as input and return the full name as string
	//	fullName(bucketOfSloths,0) //==> "Furry Danger Assassin"
		
		
	function fullName(array , index){
		//your code is here
	}


	//  b- Write a function that takes an array of objects (like bucketOfSloths)
	// 	and returns the sloth (should return an object)
	// 	with the longest name (first, middle & last). 	
	//	Note : 1- you can only use each for looping, 2- It might be helpful to use a fullName function,
	//  longestName(bucketOfSloths);
	// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

	function longestName(bucketOfSloths,fullName) {
		// TODO: Your code here
	}

  