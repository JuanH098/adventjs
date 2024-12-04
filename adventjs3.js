function organizeInventory(inventory) {
    const result = {}
  
    inventory.map(({ name, quantity, category }) => {
        result[category] ??= {}
      result[category][name] = (result[category][name] || 0) + quantity
    });
  
    return result
  }