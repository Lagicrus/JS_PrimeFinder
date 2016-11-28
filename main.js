var primeCount = 0

function primeChecker(number){
  for (var numberInNumber = 3; numberInNumber < number - 1; numberInNumber+=2){
     if(!(number % numberInNumber == 0))
      return true;
  }
  return false
}
for (var genNumber = 1; genNumber < 10000; genNumber+=2) {
  if(primeChecker(genNumber)) 
    console.log(primeCount++ + " " + number + " is a prime");
}
