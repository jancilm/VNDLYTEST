const I = actor(); //Object created for all the existing methods

const objects = require('./Objects');
const assert = require('assert');

module.exports = {

async checkcomplete()
    {
        var i;
        //Gather the no of items in todo list
        let noofelements = await I.grabNumberOfVisibleElements(objects.fields.countofelements)
        //Loop through the items
        for(i=1;i<=parseInt(noofelements);i++){
            //get the style attribute value to check the todo list is not already completed 

                //click on complete button
                console.log("Entered the loop")
                let todonames = await I.grabTextFrom(`(.//div[@class="card"]//div[@class="col-lg-5"])[${i}]`)
                console.log(todonames)
                I.click(`(.//div[@class="card"]//button[@data-testid="todo-list-item-complete"])[${i}]`)
                //get the toast message 
                I.wait(1)
                let toastmessage = await I.grabTextFrom(objects.fields.toastmessage)
                //assert the toast message... hardcoded the item name as of now
                assert.equal(toastmessage,`Todo "${todonames}" completed successfully.`);
                // let styletextaftercompleted = await I.grabAttributeFrom(`(.//div[@class="card"]//div[@class="col-lg-5"])[${i}]`,'style')
                // check if the todo is striked out
                // assert.equal(styletextaftercompleted,'text-decoration: line-through;')
        }
    },

async checkalreadycomplete()
    {
        var i;
        //Gather the no of items in todo list
        let noofelements = await I.grabNumberOfVisibleElements(objects.fields.countofelements)
        //Loop through the items
        for(i=1;i<=parseInt(noofelements);i++){
            //get the style attribute value to check the todo list is not already completed 

                //click on complete button
                console.log("Entered the loop")
                let todonames = await I.grabTextFrom(`(.//div[@class="card"]//div[@class="col-lg-5"])[3]`)
                console.log(todonames)
                I.click(`(.//div[@class="card"]//button[@data-testid="todo-list-item-complete"])[3]`)
                //get the toast message 
                I.wait(1)
                let toastmessage = await I.grabTextFrom(objects.fields.toastmessage)
                //assert the toast message... hardcoded the item name as of now
                assert.equal(toastmessage,`Todo "${todonames}" completion successfully undone.`);
                // let styletextaftercompleted = await I.grabAttributeFrom(`(.//div[@class="card"]//div[@class="col-lg-5"])[${i}]`,'style')
                // check if the todo is striked out
                // assert.equal(styletextaftercompleted,'text-decoration: line-through;')
        }
    },

async deleteatodo()
    {
        console.log("Delete a Todo")
        var i;
        //get the number of elements
        let noofelements = await I.grabNumberOfVisibleElements(objects.fields.countofelements)
        let firstelementname;
        //check if todo list is not 0
        if(noofelements >=1){
            //get the first todo name to be deleted
            firstelementname = await I.grabTextFrom(objects.fields.firsttodo)
            //click on delete button
            I.click(objects.fields.deletebutton)
            I.wait(1)
            //Graab the toast message and compare
            let toastmessage = await I.grabTextFrom(objects.fields.toastmessage)
            assert.equal(toastmessage,`Todo "${firstelementname}" removed successfully.`);
        }

    },

async cloneatodo()
    {
        var i;
        let noofelements = await I.grabNumberOfVisibleElements(objects.fields.countofelements)
        if(noofelements >=1){
            //capture the priority before clone
            let priority = await I.grabTextFrom(objects.fields.firsttodopriority)
            console.log(priority)
            //click on clone
            I.click(objects.fields.clonetodo);
            I.see("Clone Existing Todo");
            I.wait(1)
            //check the date is set to todays date
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = yyyy + '/' + mm + '/' + dd;
            console.log(today)
            //compare the dates
            let displayedate = await I.grabAttributeFrom(`.//div[@class="react-datepicker__input-container"]//input`,'value');
            console.log(displayedate)
            assert.equal(today,displayedate)
            //Fill the description 
            I.fillField(objects.fields.descriptioninput,"Clone Test Todo")
            let cloneprior = await I.grabTextFrom(objects.fields.clonepriority)
            //Compare the priority
            assert.equal(priority,cloneprior)
            I.click(objects.fields.submitbutton);
        }
    },

async addTodo(){
    //grab number of elements before adding a new one
    let noofelements = await I.grabNumberOfVisibleElements(objects.fields.countofelements)
    I.click(objects.fields.addbutton);
    I.fillField(objects.fields.descriptioninput,"Add New Todo")
    I.selectOption(objects.fields.selectpri,"Low");
    I.fillField(objects.fields.dateinputfield,"2022/04/03")
    I.click(objects.fields.addsubmit)
    I.wait(3)
    let recentlyadded = await I.grabTextFrom(`(.//div[@class="card"]//div[@class="col-lg-5"])[last()]`)
    console.log(recentlyadded)
    assert.equal(recentlyadded,"Add New Todo")
    //compare the priority with user input
    let recentlyaddedprio = await I.grabTextFrom(`(.//div[@data-testid="todo-list-item-priority"]/span)[last()]`)
    console.log(recentlyaddedprio)
    assert.equal(recentlyaddedprio,'Low')
    //compare the number of todo lists after the addition of new 
    let noofelementsafter = await I.grabNumberOfVisibleElements(objects.fields.countofelements)
    assert.equal(noofelementsafter,parseInt(noofelements)+1)
},

async hidecompletetodos(){
    //grab number of completed todo before the hide
    let noofcompleted = await I.grabNumberOfVisibleElements(`.//div[contains(@style,'text-decoration: line-through;')]`)
    console.log(noofcompleted)
    //grab the number of overall todo
    let noofelements = await I.grabNumberOfVisibleElements(objects.fields.countofelements)
    console.log(noofelements)
    I.click(objects.fields.hidetodo)
    let noofelementsafter = await I.grabNumberOfVisibleElements(objects.fields.countofelements)
    console.log(noofelementsafter)
    //Compare after the hide.
    assert.equal(noofelementsafter,parseInt(noofelements)-parseInt(noofcompleted))
}

}

