function findLongestSubstring(str){
    // add whatever parameters you deem necessary - good luck!
    /*start포인터를 사용하여 substring의 시작점을 조정
    dictionary를 이용하여 문자의 위치를 저장함
    (중복된 문자를 만났을때, 그 다음부터 시작하기 위함)
    문자열의 길이를 재고, 가장 긴 길이만 저장함
    */
    let longest = 0;
    let start = 0;
    let strIndex = {};

    for(let i=0;i<str.length;i++){
        let char = str[i];
        if(strIndex[char]){
            start = Math.max(start,strIndex[char]+1)
            //start위치와 strIndex[char]의 위치를 비교하여, strIndex[char]이 start보다 먼저 있는 경우 무시하기 위함
        }
        longest = Math.max(longest,start-i+1);
        strIndex[char]=i;
    }
    return longest;
  }