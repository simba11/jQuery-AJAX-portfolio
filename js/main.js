$(function() {
	/** showing and hiding elements based on clicks **/
	$('#about, #work, #blog, #contact').hide();
	$('#skills, #hobbies').hide();

	$('.side-brand').click(function() {
		$('#about, #work, #blog, #contact').hide();
		$('.sidr li.active').removeClass('active');
		$('#main-page').show();
	});

	$('.about-btn').click(function() {
		$('#contact, #work, #blog, #main-page').hide();
		$('#about').show();
		$('.sidr .about-nav').addClass('active');
		$('body').css('background-image', 'none');
	});

	$('.work-btn').click(function() {
		$('#about, #main-page, #blog, #contact').hide();
		$('#work').show();
		$('.sidr .work-nav').addClass('active');
		$('body').css('background-image', 'none');

	});

	$('.blog-btn').click(function() {
		$('#about, #work, #contact, #main-page').hide();
		$('#blog').show();
		$('.sidr .blog-nav').addClass('active');
		$('body').css('background-image', 'none');
	});

	$('.contact-btn').click(function() {
		$('#about, #work, #blog, #main-page').hide();
		$('#contact').show();
		$('.sidr .contact-nav').addClass('active');
		$('body').css('background-image', 'none');
	});

	$('.bio-btn').click(function() {
		$('#skills, #hobbies').hide();
		$('#bio').show();
	});
	$('.skills-btn').click(function() {
		$('#bio, #hobbies').hide();
		$('#skills').show();
	});
	$('.hobbies-btn').click(function() {
		$('#skills, #bio').hide();
		$('#hobbies').show();
	});
	/** scrolling through brand characteristics **/
	$('#do').scrollbox();
	/** sidebar lib **/
   	$('.side-nav').sidr();
   	/** changing active state on sidebar **/
	$('.sidr li').click(function(e) {	
	    $('.sidr li.active').removeClass('active');
	    var $this = $(this);
	    if (!$this.hasClass('active')) {
	        $this.addClass('active');
	    }
	    e.preventDefault();
	});
	/** about nav (is this DRY?) **/
	$('.about-nav li a').click(function(e) {
		var $this = $(this);
	    if (!$this.hasClass('current')) {
	    	$('.about-nav a.current').removeClass('current');
	        $this.addClass('current');
	    }
	    e.preventDefault();
	});
});

