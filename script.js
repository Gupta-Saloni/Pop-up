var c = true;
$(document).ready(function(){
    $('.clicks').on('click', function(){
        if(c){
            $('#box').addClass('show');
            c = false;
        }else{
            $('#box').removeClass('show');
            c = true;
        }
        
    });
    $('.submission').on('click', function(){
        $('#box').removeClass('show');
        c = true;
    });
});


