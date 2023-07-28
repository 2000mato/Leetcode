/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // attributing numeric values to numerals
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    // empty value starts at 0, will be added to depending on the order of the numerals
    let total= 0;
    
    for (let i =0; i < s.length; i++){
        
        // if current num is less than next number, it should be subtracted from next number
        if (i <s.length -1 && romanValues[s[i]] < romanValues[s[i+1]]){
            total -= romanValues[s[i]];
        }
        // otherwise , order is correct as to how numerals are usually presented, and can add together fine
        else
            {
                total += romanValues[s[i]]
            }
        
    }
    return total;
};