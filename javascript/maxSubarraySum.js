function maxSubarraySum(arr,num){
    if(arr.length<num){return null}
    let total=0;
    for(let i=0;i<num;i++){
        total+=arr[i];
    }
    let curentTotal =total;

    for(let j=num;j<arr.length;j++){
        curentTotal+=arr[j]-arr[j-num];
        total=Math.max(total,curentTotal);
    }
    
    return total;
  // add whatever parameters you deem necessary - good luck!
}
