let todos = [
    {
        name: "mengembalikan baju",
        completed: false
    },
    {
        name: "mencuci baju",
        completed: true
    },
]

function showForm() {
    const form = document.querySelector('[data-form]')
    form.classList.remove('hidden')
}

function closeForm() {
    const form = document.querySelector('[data-form]')
    form.classList.add('hidden')
}

const form = document.querySelector('[data-form]')
const inputTodo = document.querySelector('[data-input-todo]')
const dataTodo = document.querySelectorAll('[data-todo]')
const checkedTodo = document.querySelectorAll('[data-checked]')
const parentContainer = document.querySelector('[data-container]')
const dataList = document.querySelectorAll('[data-list]')

form.addEventListener('submit', e => {
    e.preventDefault()
    addTodo(inputTodo.value)
    console.log(inputTodo.value)
})

function addTodo(item) {
    if (item !== '') {
        const todo = {
            name: item,
            checked: false
        };
        todos.push(todo)
        renderTodos(todos)

        inputTodo.value = ''
    }
}

function renderTodos(todos) {
    dataList.forEach(data => {
        data.remove()
    });

    todos.forEach(item => {
        const checked = item.completed ? 'checked' : null;

        // make a div for list
        const div = document.createElement('div')
        div.setAttribute('class', 'border bg-gray-200 rounded flex flex-row items-center p-1 justify-between select-none')
        div.setAttribute('data-list', '')
        parentContainer.insertBefore(div, parentContainer.children[0])

        // make a todo list
        // make checkbox
        const inputCheckbox = document.createElement('input')
        inputCheckbox.setAttribute('type', 'checkbox')
        inputCheckbox.setAttribute('class', 'ml-1 form-tick flex-initial bg-white bg-check h-6 w-24px min-w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none')
        inputCheckbox.setAttribute('data-checked', '')
        div.appendChild(inputCheckbox)

        // make a span todo list
        const span = document.createElement('span')
        span.setAttribute('class', 'font-light truncate max-h-16')
        span.setAttribute('data-todo', '')
        div.appendChild(span)

        // make a delete button
        const button = document.createElement('button')
        // make a svg
        const svg = document.createElement('svg')
        const dataSvg = document.querySelector('[data-svg]')
        const dataPath = document.querySelector('[data-path]')
        
    })
}