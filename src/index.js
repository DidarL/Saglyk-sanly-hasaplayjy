  import './index.css';
import state from './redux/state.js';
import {reRenderEntireTree} from './render.js';

reRenderEntireTree();


{
  let i=0;
  const soz = document.querySelector('.span1');
  setInterval(()=>{i++;
    let iWidth = window.innerWidth;
    let t = iWidth - i;
    if(i===iWidth+2400)i=1
    soz.style.left = t + 'px';
  },10);
  window.onscroll = function show_header() {
    var header = document.querySelector('header');
    if(window.pageYOffset > 61){header.classList.add('header_fixed');}
    else{header.classList.remove('header_fixed'); }
  }  
}

export const talkde = (elem) =>{
  document.querySelector('.Talkde').textContent = elem;
}