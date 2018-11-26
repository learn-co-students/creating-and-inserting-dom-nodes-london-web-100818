//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

let element = document.createElement('div');
element.innerHTML = 'Hai Ho'
document.body.appendChild(element)

let ul = document.createElement('ul');

for (let i = 0; i < 10; i++){
  let li = document.createElement('li');
  li.innerHTML = ("Who goes there");
  ul.appendChild(li);
}

element.appendChild(ul)
