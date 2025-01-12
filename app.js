   


   let bill =430
  //1 /////if statement  
//    if(bill>=50 && bill<=300){
//      console.log(bill*0.15)

//    }
//    else{
//     console.log(bill*0.2)
//    }
 
////ternary operateur
  const tip= bill>=50 && bill<=300 ? bill *0.15 : bill*0.2
      console.log("tip:",tip)


      console.log(`the bill was ${bill},the tip was ${tip},and the total value ${bill+tip}`)
    