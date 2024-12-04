function createFrame(names) {
    const maxLength = Math.max(...names.map(name => name.length));
    
    const border = '*'.repeat(maxLength + 4);
    let result = border + '\n'; 
    
    for (let name of names) {
        result += '* ' + name + ' '.repeat(maxLength - name.length) + ' *\n'; 
    }
    
    result += border; 
    
    return result;
}