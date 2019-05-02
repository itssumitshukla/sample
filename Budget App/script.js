//budget


var budgetPatter = (function (params) {
    var x = 23;

    var add = function (a){
        return x + a;
    }

    return {
        publicTest: function(b){
            console.log(add(b))
        }
    }
})();

console.log(budgetPatter)