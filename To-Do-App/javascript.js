// check off specific todos
$("li").click(function(){
    $(this).toggleClass("completed")
})

//click trash icon to delete to-do item
$("span").click(function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remote();
    });
    e.stopPropagation();
})