async function show() {
    const pack = await fetch('https://dummyjson.com/todos', {
        method: 'GET',
    });

    const json1 = await pack.json();
    const arr = json1.todos;

    for (let i = 0; i < arr.length; i++) {
        const par = document.createElement('p');
        par.textContent = arr[i].todo;
        document.querySelector('div').appendChild(par);

    }
}
show();

document.querySelector('button').addEventListener('click', async function () {
    let val = document.querySelector('input').value;
    let obj = {
        todo: val,
        completed: false,
        userId: 5,
    }

    const packForbtn = await fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    });

    const json2 = await packForbtn.json();
    console.log(json2);



    const newpar = document.createElement('p');
    newpar.textContent = json2.todo;
    document.querySelector('div').appendChild(newpar);


})