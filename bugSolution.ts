function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

//Solution 1: Accessing individual elements
console.log(greeter(user[0])); //Accesses the first element of the array
console.log(greeter(user[1])); //Accesses the second element of the array

//Solution 2: Joining array elements into a string
console.log(greeter(user.join(" "))); //Joins array elements with a space in between

//Solution 3: Using generics if the function needs to handle both strings and arrays
function greeterGeneric<T extends string | string[]>(person: T): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(" ");
  }
}
console.log(greeterGeneric(user));
console.log(greeterGeneric("Jane"));