$(function() {
	// $('body').scrollspy({ target: '#navbar' })
	$(document).scroll(function() {
		$nav = $(".navbar");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
		$nav.toggleClass('navbar-dark', $(this).scrollTop() < $nav.height());
		$nav.toggleClass('navbar-light', $(this).scrollTop() > $nav.height());
		
	});

	var scroll = new SmoothScroll('a[href*="#"]', {ignore: '[data-scroll-ignore]'});
    var lazyLoadInstance = new LazyLoad();
});