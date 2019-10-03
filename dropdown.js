
$(document).ready(function(){
    
    $(".accordion").click(function(event){

        $(this).parent().children(".panel").slideToggle();
        console.log("This is clicked");
        
    });
});