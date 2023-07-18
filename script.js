const object = cartObj()
let order = ""
let totalPrice = 0
let delivery = 15000
for (const key in object) {
    
    order += `${key} ${object[key].info}`
    totalPrice += object[key].price

        
    }
    

    console.log(`Sizning buyurtmangiz: ${order} | Yetkazib berish xizmati
    bilan bo'lgan narx ${totalPrice + delivery} | Yetkazib berish xizmati narxi: ${delivery}`);