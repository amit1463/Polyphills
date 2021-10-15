// Polyphill for split

const mySplit = (str,args) => {

    let newStr = str.replaceAll(args,"*");

    // console.log(newStr);

    let arr = [];

    if(args === ""){

      for(let char of str){

       arr.push(char)

      }

    }

    else if(newStr.includes("*")){

      let p1=0,p2;

      for(let i=0;i<newStr.length;i++){

        if(newStr.charAt(i) === "*"){

          p2=i;

          arr.push(newStr.slice(p1,p2));

          p1=p2+1;

        }

      }

      arr.push(newStr.slice(p2+1))

    }

    else{

      arr.push(str);

    }

    return arr;

}

let str = "Hello/-how/ar-e/you"
console.log("mySplit -- ",mySplit(str,"/")); // self made 
console.log("Inbuilt split -- ",str.split("/")); // Inbuilt split


// polyphill for join


const newJoin = function (arr,sepr) {

  let str = "";

  if(sepr === "") {
    for(let i of arr){
        str+=i
    }

  }else if(sepr === undefined){
    for(let i of arr){

        str+=i + ","

    }
      
  }else{

      for(let i of arr){

          str+=i + sepr

      }

  }

   let a =  str.slice(0,str.indexOf(arr[arr.length - 1])) + arr[arr.length - 1]

   if(sepr===""){
     return str;
   }else{
     return a
   }

}

let arr = [2,4,5,253,2167,32]


console.log("newJoin --- ",newJoin(arr,"-")) // self-made

console.log('Inbuilt Join --- ',arr.join("-")); // inbulit


// polyphill for reverse
function myReverse(arr){
    let newArr =[];
    for(let i=arr.length-1;i>=0;i--){
      newArr.push(arr[i]);
    }
    return newArr;
  }
  
  let arr = [3,5,6,7,777,745645,474545];
  console.log("newReverse -- ",myReverse(arr)) // self-made
  console.log("Inbuilt reverse -- ",arr.reverse()) // inbuilt

