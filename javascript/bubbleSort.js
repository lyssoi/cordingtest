function bubblesort(arr){
    let noSwap
    for(i=arr.length;i>0;i--){
        noSwap = true;
        for(j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                let temp =arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr;
}

console.log(bubblesort([3,5,1,45,23,45,12,7,6,87,34]))