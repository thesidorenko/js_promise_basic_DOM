var e=document.querySelector(".logo"),t=function(e){var t=document.createElement("div");t.classList.add("message"),e?(t.classList.add("error-message"),t.textContent="Promise was rejected!"):t.textContent="Promise was resolved!",document.body.appendChild(t)},n=new Promise(function(t){e.addEventListener("click",function(){t()})}),o=new Promise(function(e,t){setTimeout(function(){t();// eslint-disable-line prefer-promise-reject-errors
},3e3)});n.then(function(){return t(!1)}),o.catch(function(){return t(!0)});//# sourceMappingURL=index.a5153be2.js.map

//# sourceMappingURL=index.a5153be2.js.map
