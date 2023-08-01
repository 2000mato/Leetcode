/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // checks if array is empt
   if(nums.length == 0){return 0};
    
    // j is placehoder for last unique element
    let j = 0;
    
    for ( let i = 1; i < nums.length; i++){
        // if current placs in nums is != nums[j], it is unique
        if(nums[i] != nums[j]){
            //therefore, unique counter j increments
            j++;
            // unique element is given priority positioning
            nums[j] = nums[i]
        }
    }
    
    return j +1; // number of unique elements + 1 to offset zero indexing of arrrays 
};