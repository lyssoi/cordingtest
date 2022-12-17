function naiveSearch (long,short){
    let counter = 0;

    for(i=0;i<long.length;i++){
        for(j=0;j<short.length;i++){
            if(short[j]!==long[i+j]){
                break;
            }
            counter++;
        }
    }
    return counter;
}
