/* eslint-disable no-unused-vars */

// repeat function
repeat=(str,num)=>{
    let newStr='';
    for(let i=0;i<num;i++){
        newStr+=str;
    }
    return newStr;
};

// sum function
sum=(arr)=>{
    let sum=0;
    for(let i in arr){
        sum+=arr[i];
    };
    return sum;
};

// join function
join=(arr,sep)=>{
    let newStr='';
    for(let i=0;i<arr.length;i++){
        newStr+=arr[i];
        if(sep&&i<arr.length-1){
            newStr+=sep;
        };
    };
    return newStr;
};

/*
join=(arr,sep)=>{
    if(sep){
        return arr.join(sep);
    }else{
        return arr.join();
    };
};
*/

/*
// gridGenerator function - first attempt - only solves for
// grids with odd nums
gridGenerator=(num)=>{
    let grid='';
    let counter=1;
    if(num>0){
        for(let a=0;a<num;a++){
            for(let b=0;b<num;b++){
                if(counter%2!=0){
                    grid+='#';
                }else{
                    grid+=' ';
                };
                counter+=1;
            };
            if(a<num){
                grid+='\n';
            };
        };
    };
    return grid;
};
*/

gridGenerator=(num)=>{
    let grid='';
    if(num>0){
        for(let a=0;a<num;a++){
            for(let b=0;b<num;b++){
                if((a+b)%2==0){
                    grid+='#';
                }else{
                    grid+=' ';
                };
            };
            if(a<num){
                grid+='\n';
            };
        };
    };
    return grid;
};