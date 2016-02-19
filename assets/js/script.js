$(function() {
	$(document).click(function (event) {
		var click = $(event.target);
		var isNavOpen = $(".navbar-collapse").hasClass("in");
		if (isNavOpen === true && !click.hasClass("navbar-toggle")) {
			$("button.navbar-toggle").click();
		}
	});

	$(".navbar a").on("click", function(event){
		event.preventDefault();
		var hash = this.hash;
		var offset = {scrollTop: $(hash).offset().top};
		var speed = 1000;
		var hashedUrl = function(){
			window.location.hash = hash;
		};

		$("html, body").animate(
			offset,
			speed,
			hashedUrl
			);
	});
});