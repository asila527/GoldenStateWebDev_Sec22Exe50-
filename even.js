let allEvens = (arr) => {
    return arr.every(x => x % 2 === 0);
  }
  
  console.log(allEvens([2, 4, 6]));
  console.log(allEvens([2, 4, 7]));