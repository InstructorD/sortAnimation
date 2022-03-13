let steps=0;
let fibb = (num, memo = {})=>{
  if(num === 0) return 0;
  if(num === 1) return 1;
  if(num === 2) return 1;
  if(!memo[num]){
    memo[num] = fibb(num-1, memo)+fibb(num-2, memo);
  }
  steps++
  return memo[num];
}

let fibb2 = (num) => {
  if (num === 0) return 0;
  if (num === 1) return 1;
  if (num === 2) return 1;
  steps++
  return fibb2(num - 1) + fibb2(num - 2);
}

let sort = (array)=>{
  for(let j = 0; j < array.length; j++){
  for(let i=0; i<array.length; i++){
    if(array[i]>array[i+1]){
      [array[i+1], array[i]] = [array[i], array[i+1]]
    }
  }
  }
  return (array+" steps:"+steps);
}

let fibb3 = (num, memo = [1,1,2])=>{
  if(memo[num]){
  return memo[num]
  }
  if(num < 2){
    return 1
  }
  memo[num]=(fibb(num-1, memo) + fibb(num-2, memo))
  return fibb(num-1, memo) + fibb(num-2, memo);
}

console.log(fibb(43))
