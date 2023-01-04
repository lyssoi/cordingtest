/* 1. 해당 자리의 숫자 구하는 함수 만들기
   2. 자릿수 구하는 함수 만들기
   3. 제일 큰 자릿수 구하는 함수 만들기
   4. 정렬하는 함수 만들기. */

function getDigit(num,i){
    return Math.floor(Math.abs(num)/Math.pow(10,i))%10;
}

function digitCount(num){
    if(num===0){return 1;}
    return Math.floor(Math.log10(Math.abs(num)))+1;
}

function mostDigits(nums){
    let maxDigits = 0;
    for(let i=0;i<nums.length;i++){
    maxDigits =  Math.max(maxDigits,digitCount(nums[i]))
}
return maxDigits;
}

function radixSort(nums){
    let maxDigitCount =  mostDigits(nums);
    for(j=0;j<maxDigitCount;j++){
        let digitBuckets = Array.from({length:10},()=>[]);
        for(i=0;i<nums.length;i++){
            let digit = getDigit(nums[i],j);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets)
    }
    return nums;
}

console.log(radixSort([23,345,5467,12,2345,9852]))