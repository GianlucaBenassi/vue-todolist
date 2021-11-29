const app = new Vue({
    el: '#root',

    data: {
        toDoList: [
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Pulire casa',
                done: false
            },
            {
                text: 'Fare gli esercizi di Boolean',
                done: true
            },
            {
                text: 'Cucinare la cena',
                done: false
            },
            {
                text: 'Finire una serie tv',
                done: false
            }
        ]
    },

    methods:{

    }
});