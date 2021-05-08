const cart = {
   items:[],
   getItems(){
      console.table(this.items);
   },
   add(product){

      for(const item of this.items){
         if(product.name === item.name){
            item.quantity+=1;
            return;
         }
      }
      const newProduct = {...product, quantity:1}

      this.items.push(newProduct)
   },
   remove(productName){
      const {items} = this;
      for(let i=0; i<items.length;i+=1){
      
         const item = items[i];
         if(productName === item.name){
            if(item.quantity ===1){

               items.splice(i,1)
               return;
            }
            item.quantity-=1;
         }
      }
   },
   clear(){
      items = [];
   },
   countTotalPrice(){
      let totalPrice = 0;
      for(const {price, quantity} of this.items){
         totalPrice += price*quantity;
      }
      console.log(`Total: ${totalPrice}$`);
   },
   increaseQuantity(){},
   decreaseQuantiy(){},
}
cart.add({name:'apple', price: 50})
cart.add({name:'apple', price: 50})
cart.add({name:'lemon', price: 60})
cart.add({name:'pineapple', price: 70})
cart.add({name:'pineapple', price: 70})
cart.add({name:'orange', price: 80})
// cart.remove('orange')
cart.remove('apple')
cart.countTotalPrice()
cart.getItems()