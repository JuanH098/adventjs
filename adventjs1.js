function prepareGifts(gifts) {
    // Usamos un Set para eliminar duplicados
    const uniqueGifts = [...new Set(gifts)];

    // Devolvemos la lista ordenada
    return uniqueGifts.sort((a, b) => a - b);
}