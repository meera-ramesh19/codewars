Abbreviate a Two Word Name

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

FUNDAMENTALSSTRINGSARRAYS


function abbrevName(name){
  let initials=''
    // code away
  name=name.split(' ')
  return name.map(item=>item.charAt(0).toUpperCase()).join('.')
  }
    