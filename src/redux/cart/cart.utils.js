export const addCartItems = (existingCartItems, newCartItem) => {
    const itemExisted = existingCartItems.find(
      (item) => item._id === newCartItem._id
    )
    if (itemExisted) {
      return existingCartItems.map((item) => {
        if (item._id === newCartItem._id) {
          let updatedItem = { ...item, quantity: item.quantity + 1};
          updatedItem.totalPrice = updatedItem.quantity * updatedItem.price; 
          return updatedItem;
        } else {
          return item;
        }
      });
    }
  
    return [...existingCartItems, { ...newCartItem, quantity: 1, totalPrice:newCartItem.price}];   
  };

  export const reduceCartItems = (existingCartItems, reducingItem) => {
      if(reducingItem.quantity<1){
          return existingCartItems.filter(item=>item._id!==reducingItem._id);
      }
    return existingCartItems.map(item=>{
        if(item._id===reducingItem._id){
            if(reducingItem.quantity>0){
                let updatedItem = { ...item, quantity: item.quantity - 1};
                updatedItem.totalPrice = updatedItem.quantity * updatedItem.price;
                return updatedItem;
            }
            else {
                return item;
            }
        }
    });
  } 