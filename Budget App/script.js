//budget app
let budgetPatter = (function (params) {

})();

//UI Control
let UIController = (function () {
    //
    let DomStrings = {
        inputtype: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value'
    }

    return {
        getInput: function (){
            return{
                type:document.querySelector(DomStrings.inputtype).value,
                description:document.querySelector(DomStrings.inputDescription).value,
                value: document.querySelector(DomStrings.inputValue).value
            }
        }
    };

})();

// Global app controller
let controller = (function (budgetCtrl, UICtrl) {

    let setupEventListner(){
    //button selector
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
    // keypress for enter === 13
    document.addEventListener('keypress', function (e) {

        if (e.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });
    }

    //control add item
    let ctrlAddItem = function () {
        // get the input data
        let input = UICtrl.getInput();
        console.log(input)
        // add iotem to budget calc

        // add the item to the UI

        //Calculate the budget

        // display the budget on the UI
        console.log('It works');
    };



})(budgetPatter, UIController);

console.log(budgetPatter);

