let calculateUniqueCharacter = (sentence) => {
   uniqueCharacter = {};

   for (let character of sentence) {
      uniqueCharacter[character] = uniqueCharacter[character] + 1 || 1;
   }
   return uniqueCharacter;
};

//contoh pemanggilan fungsi
let unique = "halodunia !#@$";
let isUnique = calculateUniqueCharacter(unique);
console.log(isUnique);
