
Sum Mixed Array

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

FUNDAMENTALSSTRINGSNUMBERSARRAYS

function sumMix(x){
  return  x.reduce((acc,val)=> (typeof val===Number?acc+=val:acc+=Number(val)),0)
}
const sumAll = x=> x.reduce((a,c)=>+a + +c)
