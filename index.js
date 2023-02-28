
const inputText = document.querySelector('#input');
const addBtn = document.querySelector('#buttonadd');
const delBtn = document.querySelector('#buttondell');
const result = document.querySelector('#result');

function handleClick(e){
  console.log(e);
     this.style.color = 'red'
}

if(addBtn && result && inputText){
  addBtn.addEventListener('click' , ()=>{
      const el = document.createElement('div');
      el.textContent = inputText.value;
      el.addEventListener('click', handleClick)
      result.appendChild(el);
  })
}else{
  console.log('not found ...')
}
if(delBtn && result){
  delBtn.addEventListener('click', ()=>{
    if(result.children.length > 0){
      result.children[result.children.length - 1].remove();
    }
  })
}
