/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // j is the placeholder representing position and instances of !val
    let j = 0
    // while i represents position in the array
    for (let i = 0; i <nums.length; i++){
        if (nums[i] != val){
            // if !val , move it to the front, then incrememnt j
            nums[j] = nums[i];
            j++
        }
    }
    return j;
};