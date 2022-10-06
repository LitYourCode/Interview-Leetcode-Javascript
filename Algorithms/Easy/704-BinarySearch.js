/*{

Given an array of integers nums which is sorted in ascending order,
and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.


}*/


var search = function(nums, target) {
    // if target exist return index
    // otherwise return -1 
    // algorithm o(lon n) 
    
    let startIndex = 0
    let endIndex = nums.length - 1
    let middleIndex;
    
    if(!(nums.includes(target))){
        return -1;  
     }
    
        
    while(startIndex <= endIndex){
        middleIndex = Math.floor((startIndex + endIndex)/2)
        
        if(target === nums[middleIndex]) {
            return middleIndex
        }
        
        else if(target < nums[middleIndex]){
            endIndex = middleIndex - 1
        }
        
        else if(target > nums[middleIndex]){
            startIndex = middleIndex + 1
        }
        
        else{
            return -1
        }
        
    }
}