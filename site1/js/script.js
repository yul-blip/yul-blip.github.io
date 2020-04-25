$(document).ready(function() {
    $('.tabs__link').magnificPopup({
        type: 'inline',
        midClick: true
    });
    $('#close-btn').click(function(){
        $.magnificPopup.close();
    });
    $('.review__btn').click(function(){
        $('.review__text').addClass('review__text--height');
        $(this).addClass('review__btn--1');
    });
    $('.review__photo-wrap').magnificPopup({
        type: 'image',
        zoom: {
			enabled: true,
			duration: 300
		}
    });
  });