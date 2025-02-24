const removeFromArray = function(nmbr, ...cond) {
    
    return nmbr.filter(val => !cond.includes(val))

};

// Do not edit below this line
module.exports = removeFromArray;
