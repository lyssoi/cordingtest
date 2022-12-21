function pivot(arr,start=0,end=arr.length-1){
    const swap = (arr,index1,index2) =>{
        [arr[index1],arr[index2]] = [arr[index2],arr[index1]];
    }
    let pivot = arr[start];
    let swapIndx = start;

    for(i=start+1; i<=end;i++){
        if(pivot>arr[i]){
            swapIndx++;
            swap(arr,swapIndx,i)
        }
    }
    swap(arr,start,swapIndx);   
    return swapIndx;
}

function quickSort(arr,left=0,right=arr.length-1){
    if(left<right){
    let pivotIndex = pivot(arr,left,right);
    quickSort(arr,left,pivotIndex-1);
    quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}