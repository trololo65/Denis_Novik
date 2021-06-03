

$('.h,.a,.s,.p,.c').on('click', function() {
  var el = $(this);
  var dest = el.attr('href'); // получаем направление
  if (dest !== undefined && dest !== '') { // проверяем существование
    $('html').animate({
        scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
      }, 500 // скорость прокрутки
    );
  }
  return false;
});

$(document).ready(function(){
	$('.header--burger').click(function(event){
		$('.header--burger,.header--menu,.language').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.link').click(function(event){
		$('.header--burger,.header--menu,.language').removeClass('active');
		$('body').removeClass('lock');
	});
})

