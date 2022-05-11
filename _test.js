Feature('My First Test');

const object = require('./Pages')

Scenario('Complete a Todo - Already Completed Todo', async({ I }) => {
    await I.amOnPage('https://qa-challenge.beta.vndly.com/');
    await  I.see('Todo List');
    await object.checkalreadycomplete();
});

Scenario('Delete a Todo', async({ I }) => {
    await I.amOnPage('https://qa-challenge.beta.vndly.com/');
    await  I.see('Todo List');
    await object.deleteatodo();
});

Scenario('Add a Todo', async({ I }) => {
    await I.amOnPage('https://qa-challenge.beta.vndly.com/');
    await  I.see('Todo List');
    await object.addTodo();
});

Scenario('Hid Completed Todo', async({ I }) => {
    await I.amOnPage('https://qa-challenge.beta.vndly.com/');
    await  I.see('Todo List');
    await object.hidecompletetodos();
});

Scenario('Complete a Todo - Active Todo', async({ I }) => {
    await I.amOnPage('https://qa-challenge.beta.vndly.com/');
    await  I.see('Todo List');
    await object.checkcomplete();
  });
  

  Scenario('Clone a Todo', async({ I }) => {
    await I.amOnPage('https://qa-challenge.beta.vndly.com/');
    await  I.see('Todo List');
    await object.cloneatodo();
});
