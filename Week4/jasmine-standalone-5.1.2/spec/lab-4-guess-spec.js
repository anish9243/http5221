//TESTING WITH JASMINE

describe("Test Suite for Guess-a-Number (1-10)", function () {
  //Tests to Pass
  describe("Test To Pass", function () {
    describe("When the correct number is entered", function () {
      it('Should return "You guessed it!"', function () {
        let guess = 4;
        expect(guessNum(guess)).toEqual("You guessed it!");
      });
    });
    describe("When the correct number is not entered", function () {
      it('Should return "Guess again"', function () {
        let guess = 5;
        expect(guessNum(guess)).toEqual("Guess again.");
      });
    }); // End Test to Pass
  });

  //Test to Fail
  describe("Test To Fail", function () {
    describe("The value entered is not a number", function () {
      it('Should return "A number was not input."', function () {
        let guess = "Three";
        expect(guessNum(guess)).toEqual("A number was not input.");
      });
    });
    describe("The value entered is an empty string", function () {
      it('Should return "A value was not entered."', function () {
        let guess = "";
        expect(guessNum(guess)).toEqual("A value was not entered.");
      });
    });
    describe("he value entered is a number outside of the allowed range of guessing values", function () {
      it('Should return "Way off!!!! Pick a number between 1 and 10."', function () {
        const guess = 15;
        expect(guessNum(guess)).toEqual("Way off!!!! Pick between 1 and 10.");
      });
    });
  }); // End Test to Fail

  //Boundary tests
  describe("Boundary tests ", function () {
    describe("The value entered is 0", function () {
      it('Should return "Way off!!!! Pick between 1 and 10."', function () {
        let guess = 0;
        expect(guessNum(guess)).toEqual("Way off!!!! Pick between 1 and 10.");
      });
    });
    describe("The value entered is 1", function () {
      it('Should return "Guess again."', function () {
        let guess = 1;
        expect(guessNum(guess)).toEqual("Guess again.");
      });
    });
    describe("The value entered is 2", function () {
      it('Should return "Guess again."', function () {
        let guess = 2;
        expect(guessNum(guess)).toEqual("Guess again.");
      });
    });
    describe("The value entered is 11", function () {
      it('Should return "Way off!!!! Pick between 1 and 10."', function () {
        let guess = 11;
        expect(guessNum(guess)).toEqual("Way off!!!! Pick between 1 and 10.");
      });
    });
    describe("The value entered is 10", function () {
      it('Should return "Guess again."', function () {
        let guess = 10;
        expect(guessNum(guess)).toEqual("Guess again.");
      });
    });
    describe("The value entered is 9", function () {
      it('Should return "Guess again."', function () {
        let guess = 9;
        expect(guessNum(guess)).toEqual("Guess again.");
      });
    });
  }); // End Boundary tests
});