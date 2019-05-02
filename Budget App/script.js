//budget app
let budgetPatter = (function (params) {

})();

//UI Control
let UIController = (function () {

})();

// Global app controller
let controller = (function (budgetCtrl, UICtrl) {

    //control add item
    let ctrlAddItem = function (){

    };

    //button selector
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem); 
    {
        console.log('button was click')
    };

    // get the input data

    // add iotem to budget calc

    // add the item to the UI

    //Calculate the budget

    // display the budget on the UI

    // keypress for enter === 13
    document.addEventListener('keypress', function(e){
        
        if(e.keyCode=== 13 || event.which === 13){
            ctrlAddItem();
        }

    });

})(budgetPatter, UIController);

console.log(budgetPatter);