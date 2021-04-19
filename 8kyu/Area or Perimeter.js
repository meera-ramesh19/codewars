Area or Perimeter

You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

area_or_perimeter(6, 10) --> 32
area_or_perimeter(4, 4) --> 16
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

FUNDAMENTALS



const areaOrPerimeter = function(l , w) {
  // Return your answer
  let result=0
  return (l===w)?result=l*w:result=2*(l+w)
};