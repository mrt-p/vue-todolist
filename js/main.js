var app = new Vue(
    {
    el: '#app',
    data: {
        newTodo: '',
        todos: [
            'Fare i compiti',
            'Fare la spesa',
            'Fare il bucato'
    ]
    },
    methods: {
        addTodo() {
            this.todos.push(this.newTodo);
            this.newTodo = '';
        },
        removeTodo(index) {
        this.todos.splice(index, 1); 
        }
    }
});

