// eslint-disable-next-line no-unused-vars
const memo = require('./memo/memo.service.js');

module.exports = function (app) {
    //const app = this; // eslint-disable-line no-unused-vars
    app.configure(memo);
    // Initialize default data
    let todoService = app.service('memo');
    todoService.find({})
        .then(todos => {
            console.log('accessing memo service');
            /* if (todos.total === 0) {
                todoService.create({
                    title: 'TODO',
                    description: 'You have a todo !'
                }).then(result => {
                    console.log('Todo created!', result);
                }).catch(error => {
                    console.error('Error creating todo!', error);
                });
            } */
        });
};
