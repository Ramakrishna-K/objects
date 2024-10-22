let obj = {

    boys:20,
    girls:25,
    total:[20,25],
    marks :{
        st1:'Ramakrishna',
        rank: 1,
    },
    pincode:500030
}

let values = Object.keys(obj);
 console.log(values)

 let x = (Object.keys(obj).includes("girls"))
  if(x==true){
    console.log('valid')
    let add={staf:10}
    console.log(Object.assign(obj,add))
  }
  else{
    console.log("NOt valide")
  }