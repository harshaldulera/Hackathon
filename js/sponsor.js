console.log('hello');
$('.curr_spon_text').parent().on('click', function(event){
    console.log('hello1');
    $('.sponsor-rect-future').removeClass('pass_s');
    $('.sponsor-rect-future').addClass('curr_s');
    $('.past_hide').addClass('hide');
    $('.new_hide').removeClass('hide');  
    $('.past_spon_text').parent().toggleClass('past_spon');
    $('.past_spon_text').css('font-size','70%');
    $('.past_spon_text').html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Past&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    
    $('.curr_spon_text').css('font-size','100%');
    $('.curr_spon_text').html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Sponsors&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    $('.curr_spon_text').parent().toggleClass('curr_spon');
});

$('.past_spon').on('click', function(event){
    console.log('hello3');
    $('.sponsor-rect-future').removeClass('curr_s');
    $('.sponsor-rect-future').addClass('pass_s');    
    $('.new_hide').addClass('hide');
    $('.past_hide').removeClass('hide');
    $('.past_spon_text').css('font-size','100%');
    $('.past_spon_text').html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Past Sponsors&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    $('.past_spon_text').parent().toggleClass('past_spon');
    $('.curr_spon_text').parent().toggleClass('curr_spon');
    $('.curr_spon_text').css('font-size','70%');
    $('.curr_spon_text').html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our ..&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
   
});