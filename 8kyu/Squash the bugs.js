Squash the bugs
|
Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.

BUGSFUNDAMENTALS
function findLongest(str) {
  
  let spl = str.split(" ");
  let longest = 0
  spl.map(item=> item.length>longest?longest=item.length: longest)
   return longest
   
}
