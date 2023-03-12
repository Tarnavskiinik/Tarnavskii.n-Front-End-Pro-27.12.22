console.log(products)

const vocabulary = {
  caps: 'Шапки',
  shoes: 'Обувь',
  jacket: 'Куртки',
}
const elShop = document.querySelector('.shop')
if(!elShop){
  throw new Error('Not fined .shop')
}
const elFilter = elShop.querySelector('.shop-filter')
const elContent = elShop.querySelector('.shop-content')
const elProduct = elShop.querySelector('.shop-product')


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
        alert('Товар куплен')
        elContent.innerHTML =''
        elProduct.innerHTML =''
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