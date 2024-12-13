function createXmasTree(height, ornament) {
    let tree = ''
  
    for (let i = 1; i <= height; i++) {
      let ornaments = ornament.repeat(2 * i - 1)
      
      let spaces = '_'.repeat(height - i)
      
      tree += spaces + ornaments + spaces + '\n'
    }
  
    let trunkSpaces = '_'.repeat(height - 1);
    let trunk = trunkSpaces + '#' + trunkSpaces
    
    tree += trunk  + '\n'
    tree += trunk
  
    return tree
  }