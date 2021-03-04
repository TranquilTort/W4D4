window.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById('form');
  const shoppingCart = document.getElementById('shopping-cart');
  const shoppingItems = document.querySelectorAll('li');
  const shoppingItemsArr = Array.from(shoppingItems);

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
    console.log('Quan'+quantity);
    location.reload();



    // for(let i=0; i<localStorage.length; i++){
    //   let alreadyInCart = false;
    //   if (shoppingItemsArr.length > 0) {
    //     for (let j = 0; j < shoppingItemsArr.length; j++) {
    //       if (shoppingItemsArr[j].innerHTML.includes(localStorage.key(i))) {
    //         alreadyInCart = true;
    //         console.log('contains already')
    //         shoppingItems[j].innerText = `${localStorage.getItem(localStorage.key(i))} ${localStorage.key(i)}`;
    //       }
    //     }
    // }
    //       if (!alreadyInCart) {
    //       let listItem = document.createElement('li');
    //       console.log('new li')
    //       listItem.innerText= `${localStorage.getItem(localStorage.key(i))} ${localStorage.key(i)}`;
    //       listItem.setAttribute('id',`${localStorage.key(i)}`);

    //       let removeButton = document.createElement('button');
    //       removeButton.setAttribute('class','remove');
    //       removeButton.innerText='REMOVE';
    //       removeButton.setAttribute('id',`${localStorage.key(i)}remove`);
    //       listItem.append(removeButton);
    //       shoppingCart.appendChild(listItem);
    //       }
    // }

  });
  const itemUl = document.createElement('ul');
  shoppingCart.appendChild(itemUl);
  for(let i = 0; i<localStorage.length; i++){
    let liItem = document.createElement('li');
    const itemNumber = localStorage.getItem(localStorage.key(i));
    const itemName = localStorage.key(i);
    liItem.innerText= `${itemName} ${itemNumber}`
    const rmButton = document.createElement('button');
    rmButton.innerText= 'Remove';
    liItem.appendChild(rmButton);
    itemUl.appendChild(liItem);

    //add remove button listeners
    rmButton.addEventListener('click', event=>{
      localStorage.removeItem(itemName);
      location.reload();//refreshes page

    });
  }



  // document.addEventListener('click',(event)=>{
  //   if(event.target.id.includes('remove')){
  //     let rmid = event.target.id;
  //     rmid=rmid.slice(0,-6);
  //     console.log(rmid);
  //     let removedLi = document.getElementById(rmid);
  //     localStorage.clear(rmid);
  //     console.log('REMOVED');
  //     removedLi.remove();
  //   }
  // })

   const removeItem = () => {

  };

});
