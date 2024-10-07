//.then()

//fetching using.then
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(json => console.log(json))

// async keywords

 async function getTodos() {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = response.json()
    console.log(todos)

}

getTodos()