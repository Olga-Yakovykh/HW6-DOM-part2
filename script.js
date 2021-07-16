let input = document.querySelector ('#inp');
let button = document.querySelector ('#btn');
const ul = document.querySelector('#list');

button.addEventListener ('click', (event) => {
    let myArray = document.querySelector('input').value.split(',');

    const arr = myArray;

    let li = ul.innerHTML;


    arr.forEach((value) => {
        
        li += `<li>  ${value}  </li>`;

        ul.append(li);

        ul.innerHTML=li;

        input.value = "";

    })  

});


ul.addEventListener('click', (event) => {

    if (event.target.tagName === 'LI') {

        event.target.classList.toggle('active'); 
    }
});
 

 