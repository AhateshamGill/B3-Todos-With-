    const field = document.querySelector('.form-control')
    const container = document.querySelector('.todo-container')
    const btn = document.querySelector('.btn')
    let myTodos = [];

        btn.addEventListener('click', (e)=>{
            e.preventDefault()
            myTodos.push(field.value)
            field.value = ''
            let head = document.createElement('h6')
            myTodos.forEach((todo)=>{
                container.appendChild(head)
                head.innerHTML = todo
            })
        })