Sum of positive

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

FUNDAMENTALSARRAYSNUMBERS



function positiveSum(arr) {
  let sum=0;
  arr.filter((number)=> number > 0 ? sum+=number:sum+=0);
      return sum;

  
  }