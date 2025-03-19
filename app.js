const list = document.querySelector('div');
const modal = document.querySelector('.modal');

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

        const delete1 = document.createElement('button');
        const update1 = document.createElement('button');

        delete1.textContent = 'delete';
        update1.textContent = 'update';

        list.appendChild(delete1);
        list.appendChild(update1);

        delete1.addEventListener('click', async function () {
            const deletepack = await fetch(`https://dummyjson.com/todos/${arr[i].id}`, {
                method: 'DELETE',
            });
            list.removeChild(par);
            list.removeChild(delete1);
            list.removeChild(update1);


        })


        update1.addEventListener('click', async function () {
            modal.style = "display:block";
            document.querySelector('.put').addEventListener('click', async function(){
                modal.style = "display:none"
                let valueinmodal = document.querySelector('.inputupdate').value;
                const obj2 ={
                    todo: valueinmodal
                }
                const updatepack = await fetch(`https://dummyjson.com/todos/${arr[i].id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(obj2),
    
                });
    
                const json3 = await updatepack.json();
                console.log(json3);
    
    
                par.textContent = valueinmodal;
            })
            
        })

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



