const vocabulary = {
  caps: 'Шапки',
  shoes: 'Обувь',
  jacket: 'Куртки',
}
const $shop = document.querySelector('.shop')
if(!$shop){
  throw new Error('Not fined .shop')
}
const elFilter = $shop.querySelector('.shop-filter')
const elContent = $shop.querySelector('.shop-content')
const elProduct = $shop.querySelector('.shop-product')


function generateShopContent(category){
  const items = products[category];
  elContent.innerHTML = ''
  elProduct.innerHTML =  ''
  for(const item of items){
    const elDiv = document.createElement('div')
    elDiv.innerHTML = ` <h2>${item.name}</h2>`;
    elDiv.addEventListener('click' , () => {
      generateShopProduct(item)
    })
    elContent.appendChild(elDiv)
  }
}

function generateShopProduct(product){
  const elDiv = document.createElement('div')
  elProduct.innerHTML =''
  elDiv.innerHTML = `
      <h2>${product.name}</h2>
      <div>${product.price} UAH</div>
      <p>${product.description}</p>
    `;
  const button = document.createElement('button')
  button.type = 'button'
  button.innerHTML = 'Купить'
  elProduct.appendChild(elDiv)
  elProduct.appendChild(button)
  button.addEventListener('click', () =>{
    document.body.classList.add('open-modal-buy')
  })
}


const elFilterUl = document.createElement('ul');
for(const category in products){
  const elFilterUlItem = document.createElement('li');
  elFilterUlItem.textContent = vocabulary[category] || category;
  elFilterUlItem.addEventListener('click', () => {
    generateShopContent(category)
  });

  elFilterUl.appendChild(elFilterUlItem)

}
elFilter.appendChild(elFilterUl)
//
const $buy = document.querySelector('.buy');
if($buy){
  $buy.addEventListener('click', () =>{
    document.body.classList.add('open-modal-buy')
  })
}
const $form = document.querySelector('.modal-buy>form');
const button = document.querySelector('.but');


// const isEmpty = (name, value){

// }

const validate = {
  name(value){
    if(!value){
      return 'Поле name is empty'
    }
    if(value.split(' ').length < 3){
      return 'Поле name is invalid'
    }
    return true;
  },
  city(value){
    if(!value){
      return 'поле город is empty'
    }
    return true;
  },
  post(value){
    if(isNaN(value)){
      return "введите число"
    }
    if(!value){
      return 'Поле post is empty'
    }
    return true
  },
  payment(value){
    if(!value){
      return 'поле оплты is empty'
    }
    return true;
  },
  quality(value){
    if(!value){
      return 'поле quality is empty'
    }
    if(isNaN){
      return true
    }else {
      alert('вы не ввели значение')
    }
  }
}
if($form) {
  $form.addEventListener('submit', e => {
    e.preventDefault();


    const fields = {};

    const inputs = e.target;
    let isError = false;
    for (let i = 0; i < inputs.length; i++) {
      const {name, value} = inputs[i];

      if (validate[name]) {
        const result = validate[name](value);
        if (result !== true) {
          alert(result);
          isError = true;
          break;
        }
      }
      fields[name] = value;
    }
    if (!isError) {
      elContent.innerHTML = ''
      // elProduct.innerHTML =''
      elFilter.innerHTML = ''
      document.body.classList.remove('open-modal-buy');
      const orderInfo = document.createElement('div')
      const {name, city, post, payment, quality, comments} = fields
      orderInfo.innerHTML = `
          <h2>Информация о заказе</h2>
          <p><b>ФИО:</b> ${name}</p>
          <p><b>Город:</b> ${city}</p>
          <p><b>Почта:</b> ${post}</p>
          <p><b>Способ Оплаты:</b> ${payment}</p>
          <p><b>Количество товаров:</b> ${quality}</p>
          <p><b>Коментарий:</b> ${comments}</p>
        `;
      $shop.appendChild(orderInfo);
      $shop.classList.add('finished')
    }
  })
}
