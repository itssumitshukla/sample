// check off specific todos
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
});

//click trash icon to delete to-do item
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remote();
    });
    e.stopPropagation();
});

// create new to-do
$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        let toDoText =$(this).val();//get the input from user
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + toDoText + "</li>");//create a new LI
        $(this).val('');// clear input
    }
});

// toggle the plus sign
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});