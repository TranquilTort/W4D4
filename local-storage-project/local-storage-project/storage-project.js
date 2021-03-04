window.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById('form');


  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    // const options = document.querySelectorAll('option');
    // //console.log(options);
    // const optionsArr = Array.from(options);
    // optionsArr.forEach(el=>{
    //   console.log(el);

    // });
    const selected = document.getElementById('items').value;
    console.log(selected);
    const quantity = document.getElementById('quantity').value;
    console.log(quantity);

    if(localStorage.getItem(selected)===null){
      localStorage.setItem(selected,quantity);
    }else{
      let itemValue = localStorage.getItem(selected);
      localStorage.setItem(selected,`${Number(quantity)+Number(itemValue)}`);
    }
    const shoppingCart = document.getElementById('shopping-cart');
    const shoppingItems = document.querySelectorAll('li');
    const shoppingItemsArr = Array.from(shoppingItems);
    console.log(shoppingItemsArr)
    
    
    for(let i=0; i<localStorage.length; i++){
      let alreadyInCart = false;
      if (shoppingItemsArr.length > 0) {
      for (let j = 0; j < shoppingItemsArr.length; j++) {
        if (shoppingItemsArr[j].innerHTML.includes(localStorage.key(i))) {
          alreadyInCart = true;
          console.log('contains already')
          shoppingItems[j].innerText = `${localStorage.getItem(localStorage.key(i))} ${localStorage.key(i)}`;
          
        }
        
      }
    } 
          if (!alreadyInCart) {
          let listItem = document.createElement('li');
          console.log('new li')
          listItem.innerText= `${localStorage.getItem(localStorage.key(i))} ${localStorage.key(i)}`;
          shoppingCart.appendChild(listItem);
          }
      
      
    }

  });
  // const showCart = () => {

  // };

  // const storeItem = () => {

  // };

  // const removeItem = () => {

  // };

});
