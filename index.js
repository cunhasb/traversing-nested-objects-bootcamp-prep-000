/*A CHALLENGE, SHOULD YOU CHOOSE TO ACCEPT IT
Can you modify the breadth-first search algorithm in such a way that it will traverse both nested objects and nested arrays (or even — gasp! — a mix of both)?
Sample collections used: 
const collections = [1,[2,[4,[5,[6,{one:11,two:{three:30,four:40},five:[100,20,300,50]}]],3]]]
collection = {one:1,two:{three:3,four:4},five:[1,2,3,5]}
*/
function find(array, criteriaFn){
  let current = array
  let next = []
  while (current){
    if (criteriaFn(current)){
      return current
    }
    if (Array.isArray(current)){
      for (let i = 0; i < current.length; i++){
        next.push(current[i])
      }
     }
     /* Added this section, which checks to see if element is Object, if so
     it looks up its keys, and adds it to the next array. After that it adds 
     the value pairs of the Objects*/
     
    if (typeof current === 'object'){
      for (let j = 0; j < Object.keys(current).length; j++){
         next.push(Object.keys(current)[j])
         next.push(current[Object.keys(current)[j]])
      }
    }
     current = next.shift()
   }
   return null
  }
