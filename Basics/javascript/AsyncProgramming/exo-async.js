//  Bulgur Orderin Machine 

const BulgurKing = (food,drink,sauce) => {
    return new Promise((resolve,reject)=>{
        let foodBool = food.match(/\d/g)==null  // true
        //['1','2','3']  // null
        let drinkBool = drink.match(/\d/g)==null  //  true
        let sauceBool  = drink.match(/\d/g)==null  //  true
        if(foodBool && drinkBool && sauceBool){
            //
            resolve({
                food:food,
                drink:drink,
                sauce:sauce
            })
        }else{
            reject(`food,drink or sauce can not content a Number`)
        }
        
    })
}

BulgurKing('FriedBulgurWithChiken','Ayran','Looksauce')
.then(result=>{
    console.log(result);
})
.catch(err=>console.log(err))

