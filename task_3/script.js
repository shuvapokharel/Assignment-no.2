    var animal = {
      makeSound: function () {
        return "Some sound";
      }
    };

    var dog = {
      name: "Buddy"
    };

    dog.__proto__ = animal;

    console.log(dog.makeSound()); 