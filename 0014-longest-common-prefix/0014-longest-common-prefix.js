/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // compare strings at each index
    
    // iterates thru the entire array so we are able to examine each word
    
    //starting with the first character provided to see if it matches 
    let string = strs[0]
    if (strs.includes("")) return "";
    
    for (let i = 0; i < strs.length; i++){
        for (let j = 0; j < strs[i].length; j++){
            while (strs[i].indexOf(string) !== 0){
                string = string.substring(0,string.length - 1)
            }
        }
    }
    return string
};