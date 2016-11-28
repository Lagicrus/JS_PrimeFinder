var primeCount = 0

function primeChecker(number){
  if (number % 2 != 0){
      var prime = false;
      for (var numberInNumber = 2; numberInNumber < number; numberInNumber++){
        if (number % numberInNumber == 0 && numberInNumber != number){
            prime = true;
          }
        }
      if (prime == false){
        primeCount += 1;
        console.log(primeCount + " " + number + " is a prime");
      }
    }
  }

for (var genNumber = 0; genNumber < 10000; genNumber++) {
  primeChecker(genNumber);
}
