
let input = document.querySelector ('#inp');
let button = document.querySelector ('#btn');
const ul = document.querySelector('#list');

button.addEventListener ('click', () => {

    let result = document.querySelector('#inp').value;
    const arr =[result];
    let li = document.createElement('li');

    arr.forEach((value) => {

        li.innerHTML = `<li> ${value} </li>`;
        ul.append(li);
        input.value = "";

    })


                                // через createElement

    // let result = document.querySelector('#inp').value;
    // let elem = document.createElement('li');
    
    // elem.innerText = result;
    // document.querySelector('ul').append(elem);
    // input.value = "";

});

ul.addEventListener('click', (event) => {

    if (event.target.tagName === 'LI') {

        event.target.classList.toggle('active'); 
    }
});
 

 