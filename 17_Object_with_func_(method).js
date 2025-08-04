//  Object with Function (Method)

const user = {
  name: "Tarek",
  greet: function () {
    return "Hello, " + this.name;
  }
};

console.log(user.greet()); // Output: Hello, Tarek
