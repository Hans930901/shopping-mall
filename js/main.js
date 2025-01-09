$(function(){
$(".banner_img").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
$(".product_list").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false
  });
});