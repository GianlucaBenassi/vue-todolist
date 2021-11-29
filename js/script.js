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
        ],
        newToDoText: ''

    },

    methods:{

        removeToDo: function (index) {
            this.toDoList.splice(index, 1);
        },
        
        addToDo: function () {

            if (this.newToDoText == '') {
                alert('Inserisci del testo prima di procedere!');
            } else {
                this.toDoList.push({
                    text: this.newToDoText,
                    done: false
                });
                this.newToDoText = '';
            }

        },

        changeDone: function (index) {
            if (this.toDoList[index].done) {
                this.toDoList[index].done = false;
            } else {
                this.toDoList[index].done = true;
            }
        }
    }

});