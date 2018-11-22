const div=document.createElement('div')
div.innerHTML="Hello!"
document.body.appendChild(div)
div.style.textAlign='center'
let ul=document.createElement('ul')
for(i=0;i<3;i++){
    let li=document.createElement('li');
    li.innerText="wassssup!"
    ul.appendChild(li)
}
div.appendChild(ul)
