$(function () {
  $('header').data('size', 'big');
});

$(window).scroll(function () {
  if ($(document).scrollTop() > 0)
{
    if ($('header').data('size') == 'big')
    {

      //$('.site__title').attr('class', 'site__title--hidden');
      $('.site__title--hidden').attr('class', 'site__title');
      $('.header__nav').attr('class', 'header__nav--fixed');
      $('.header__item').attr('class', 'header__item--fixed');
      $('header').addClass('fixed');
      $('header').stop().animate({
          height:'120px',
        }, 300);
      $('.site__logo').stop().animate({
        width: '80px',
      }, 300);
      $('section').css('padding-top', '140px');
    }
  } else {
    if ($('header').data('size') == 'small')
      {
      $('header').data('size', 'big');

      $('.site__title').attr('class', 'site__title--hidden');
      $('header').data('size', 'small');

      //$('header').removeClass('fixed');
      $('.site__logo').stop().animate({
        width: '300px',
      }, 100);
    }
  }
});
