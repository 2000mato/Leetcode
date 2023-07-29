/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // # of sig elements in m
    let i = m-1; 
    // # of sig elements in j
    let j = n-1; 
    // # of combined elements in m & n 
    let k = m + n -1;
    
    // the above values are decremented because they start from the end of the array of 
    //sig elements and move backward, since the arrays are presorted
    
    
    // while there stil elements to compare in both arrays ...
    while ( i>= 0 && j >= 0){
        if (nums1[i] > nums2[j]){
            // nums1 index of k is the value of nums1 index of i, decrement i to move to next element
            nums1[k] = nums1[i];
            i--;
        } else {
            // nums2 index j added to nums1 at index k, j is decremented to move on to next element
            nums1[k] = nums2[j];
            j--
        }
        // k is decremented as well, as either array will have lost a sig element to be considered
        k--;
    }
    
    // while loop for any remaining nums2 values, which should be the smallest value
    while (j >= 0){
        nums1[k] = nums2[j];
        k--;
        j--;
    }
    
};