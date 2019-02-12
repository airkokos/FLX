function reverseNumber(num) {
    let endNumber;
    let reversedNumber = 0;
    let tenNumber = 10;  
       
        while(num!==0){
            endNumber = num % tenNumber;
            reversedNumber = reversedNumber * tenNumber + endNumber;
            num=parseInt(num / tenNumber);
            }
    
    return reversedNumber;
  }
reverseNumber(123); //=> 321
reverseNumber(-456); //=> -654
reverseNumber(10000); //=> 1
