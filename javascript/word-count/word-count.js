//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (str) => {
  const word =  str.split(" ").join(' ')
  let count = str.split(' ').length  
  console.log(word)
  console.log(count)
     const finalCount = {
     [word.pop()] : [count]
   }
   
   return finalCount
};
