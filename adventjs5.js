function organizeShoes(shoes) {
    let shoesCounter = {};
  
    for (let shoe of shoes) {
      let size = shoe.size;
      if (!shoesCounter[size]) {
        shoesCounter[size] = { left: 0, right: 0 };
      }
      shoe.type === 'I' ? shoesCounter[size].left++ : shoesCounter[size].right++;
    }
  
    let pairedSizes = [];
  
    for (let size in shoesCounter) {
      let left = shoesCounter[size].left;
      let right = shoesCounter[size].right;
  
      let pairs = Math.min(left, right);
  
      pairedSizes.push(...Array(pairs).fill(Number(size)));
    }
  
    return pairedSizes;
  }