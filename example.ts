//find the prime number or not
let num:number = 12;

const findPrimeOrNot=(num:number):boolean=>{
  let flag:number | undefined;
  for(let i:number=2;i<num;i++){
    if(num%i===0){
      flag = 1;
    }
  }
 return flag===1?'not prime number':'prime number';
}
findPrimeOrNot(num)
