$(function() {
	// $('body').scrollspy({ target: '#navbar' })
		$(document).scroll(function() {
			$nav = $(".navbar");
			$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
			$nav.toggleClass('navbar-dark', $(this).scrollTop() < $nav.height());
			$nav.toggleClass('navbar-light', $(this).scrollTop() > $nav.height());
			
		});
});