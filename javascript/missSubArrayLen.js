function missSubArrayLen(arr,num){
    let start=0;
    let end = 0;
    let total=0;
    let minLen=Infinity;
    
    while(start<arr.length){
        if(total<num && end<arr.length){
            total+=arr[end];
            end++;
        }
        else if(total>=num){
            total-=arr[start];
            minLen=Math.min(minLen,end-start);
            start++;
        }
        else {break;}
    }
    
    return minLen ===Infinity ? 0 : minLen;
    
} 
