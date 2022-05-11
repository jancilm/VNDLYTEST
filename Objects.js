module.exports = {
    fields:{
        countofelements:'.//div[@class="card"]//div[@class="col-lg-5"]',
        styleattribute:'.//div[@class="card"]//div[@class="col-lg-5"]',
        completebutton:'.//div[@class="card"]//button[@data-testid="todo-list-item-complete"]',
        toastmessage:'.//div[@class="toast-body"]',
        deletebutton:'(.//div[@class="card"]//button[@data-testid="todo-list-item-delete"])[1]',
        firsttodo:'(.//div[@class="card"]//div[@class="col-lg-5"])[1]',
        clonetodo:'(.//div[@class="card"]//button[@data-testid="todo-list-item-duplicate"])[1]',
        firsttodopriority:'(.//div[@data-testid="todo-list-item-priority"]/span)[1]',
        descriptioninput:'.//input[@id="new-todo-text"]',
        submitbutton:'.//div[@class="modal-footer"]//button[@id="clone-todo"]',
        clonepriority:'.//div[@class="modal-body"]//label[@for="new-todo-priority"]/following-sibling::label',
        addbutton:'.//button[contains(text(),"Add Todo")]',
        selectpri:'//select[@id="new-todo-priority"]',
        addsubmit:'.//div[@class="modal-footer"]//button[@id="add-todo"]',
        dateinputfield:'.//div[@class="react-datepicker__input-container"]/input',
        hidetodo:'.//input[@id="hide-completed"]',
    }
}