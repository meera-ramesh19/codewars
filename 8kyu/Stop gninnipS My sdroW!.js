


Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

spinWords( "This is a test") => returns "This is a test"

spinWords( "This is another test" )=> returns "This is rehtona test"

ALGORITHMSSTRINGSFORMATTING



function spinWords(str){
  //TODO Have fun :)
  str=str.split(' ')
  let newstr=''
  str.map(function(item){
    
   if(item.length >4 ){
      
      newstr += item.split('').reverse().join('')+" "
   }
     else {newstr=newstr+item+" "}
  
  })
  return newstr.trim()
}



//refactor
 
 function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}
