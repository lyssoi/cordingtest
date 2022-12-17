function findLongestSubstring(arr){
    // add whatever parameters you deem necessary - good luck!
    /*집합을 만들어서 하나씩 추가하면서 indexof로 요소 찾기. 
    같은 요소가 있다면 그 왼쪽에 있는 요소는 지워버릴것
    이때 길이는 저장*/
    let findArr = [];
    let strLen = 0;
    let pointer =0;
    let longStrLen=0;
    let indexPointer = 0;
    
    while(pointer<arr.length){
        if(findArr.indexof('arr[pointer]')!==-1){
            findArr.push(arr[pointer])
            strLen = findArr.length;
            pointer++;
        }
        else{
            indexPointer = indexof(findArr[pointer]);
            findArr = findArr.slice(indexPointer);
        longStrLen = Math.max(strLen,findArr.length);
        pointer++;}
    }
    return longStrLen;
  }