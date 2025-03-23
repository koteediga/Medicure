(function ($) {
	"use strict";
	var medical = {
		initialised: false,
		version: 1.0,
		Solar: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			// Functions Calling
			
			this.loader();
			this.testimonial();
			this.timer();
			this.partners();
			this.product();
			this.product_gallary();
			this.quantity();
			this.edit_account();
			this.menu();
			this.sub_menu();
			this.counter();
        },
        // loader start
        loader: function () {
            jQuery(window).on("load", function() {
                jQuery(".cv-ellipsis").fadeOut(), jQuery(".cv-preloader").delay(200).fadeOut("slow")
            });
        },
        // loader end
        // testimonial start
        testimonial: function () {
            if($('.cv-testimonial').length > 0){
                var swiper = new Swiper('.cv-testimonial .swiper-container', {
                    slidesPerView: 2,
                    spaceBetween: 0, 
                    loop:true,
                    autoplay:true,
                    speed:1500,         
                    navigation: {
                        nextEl: '.cv-testimonial .swiper-button-next',
                        prevEl: '.cv-testimonial .swiper-button-prev',
                    },
                    breakpoints: {
                        767: {
                          slidesPerView: 1,
                          spaceBetween: 0
                        }
                    }
                });
            }
        },
        // testimonial end
        // timer js start
        timer: function () {
            if($('#me_timer').length > 0){
                var countDownDate = new Date("May 5, 2021 3:37:25").getTime();
                var x = setInterval(function() {
                var now = new Date().getTime();
                var distance = countDownDate - now;
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                document.getElementById("me_timer").innerHTML = "<span>" + days + "</span>" + "<span>" + hours + "</span>"
                +"<span>"+ minutes +"</span>"+"<span>"+ seconds + "</span>";
                    
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById("me_timer").innerHTML = "EXPIRED";
                }
                }, 1000);
            }
        },
        // timer js end
        // partner slider start
        partners: function () {
            if($('.cv-partners').length > 0){
                var swiper = new Swiper('.cv-partners .swiper-container', {
                    slidesPerView: 5,
                    spaceBetween: 30, 
                    loop:true,
                    autoplay:true,
                    speed:1500,
                    breakpoints: {
                        480: {
                          slidesPerView: 2,
                          spaceBetween: 15
                        },
                        767: {
                            slidesPerView: 3,
                            spaceBetween: 15
                        },
                        991: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        }
                    }
                });
            }
        },
        // partner slider end
        // partner slider start
        product: function () {
            if($('.cv-product-slider').length > 0){
                var swiper = new Swiper('.cv-product-slider .swiper-container', {
                    slidesPerView: 4,
                    spaceBetween: 30, 
                    loop:true,
                    autoplay:true,
                    speed:1500,         
                    navigation: {
                        nextEl: '.cv-product-slider .swiper-button-next',
                        prevEl: '.cv-product-slider .swiper-button-prev',
                    },
                    breakpoints: {
                        480: {
                          slidesPerView: 1,
                          spaceBetween: 0
                        },
                        767: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        },
                        991: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }
                });
            }
        },
        // partner slider end
        // product gallary start
        product_gallary: function () {
            jQuery(window).on("load", function() {
                if($('.cv-product-all').length > 0){
                    $('.cv-gallery-grid').isotope({
                        itemSelector: '.cv-product-item',
                        filter: '*'
                    });
                    $('.cv-product-nav > ul > li').on( 'click', 'a', function() {
                        // filter button click
                        var filterValue = $( this ).attr('data-filter');
                        $('.cv-gallery-grid').isotope({ filter: filterValue });
            
                        //active class added
                        $('a').removeClass('cv-product-active');
                        $(this).addClass('cv-product-active');
                    });
                }
            });
        },
        // product gallary end
        // quantity start
        quantity: function () {
            $('.cv-add').on('click',function(){
                if ($(this).prev().val() < 50000) {
                    $(this).prev().val(+$(this).prev().val() + 1);
                }
            });
            $('.cv-sub').on('click',function(){
                if ($(this).next().val() > 1) {
                    if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
                }
            });
        },
        // quantity end
        // edit account start
        edit_account: function () {
            if($('.cv-account-text').length > 0){
                $(".cv-edit-click").on('click',function(){
                    $(".cv-account-text").addClass("cv-edit-open");
                })
                $(".cv-close-edit").on('click',function(){
                    $(".cv-account-text").removeClass("cv-edit-open");
                })
            }
        },
        // edit account end
        // menu start
        menu: function () {
            if($('.cv-nav-bar').length > 0){
                $(".cv-toggle-nav").on('click',function(e){
                    event.stopPropagation();
                    $(".cv-nav-bar").toggleClass("cv-open-menu");
                });
                $("body").on('click',function(){
                    $(".cv-nav-bar").removeClass("cv-open-menu");
                });
                $(".cv-menu").on('click',function(){
                    event.stopPropagation();
                });
            }
        },
        // menu end
        // sub menu start
        sub_menu: function () {
            if($('.cv-menu').length > 0){
                var w = window.innerWidth;
                if (w <= 1199) {
                    $(".cv-children-menu").on('click',function(){
                        $(this).find(".cv-sub-mmenu").slideToggle();
                        $(this).find(".cv-mega-menu").slideToggle("slow");
                    });
                };
            }
        },
        // sub menu end
        // Counter Start
        counter: function() {
            if ($('.cv-counter-wrap').length > 0) {
                var a = 0;
                $(window).scroll(function() {
                    var topScroll = $('.cv-counter-wrap').offset().top - window.innerHeight;
                    if (a == 0 && $(window).scrollTop() > topScroll) {
                        $('.count_no').each(function() {
                            var $this = $(this),
                                countTo = $this.attr('data-count');
                            $({
                                countNum: $this.text()
                            }).animate({
                                countNum: countTo
                            }, {
                                duration: 5000,
                                easing: 'swing',
                                step: function() {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function() {
                                    $this.text(this.countNum);
                                }
                            });
                        });
                        a = 1;
                    }
                });
            };
        },
        // Counter end
	};	
	medical.init();
	
})(jQuery);	
// Contact Form Submission
function checkRequire(formId , targetResp){
    targetResp.html('');
    var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
    var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
    var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
    var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
    var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
    var check = 0;
    $('#er_msg').remove();
    var target = (typeof formId == 'object')? $(formId):$('#'+formId);
    target.find('input , textarea , select').each(function(){
        if($(this).hasClass('require')){
            if($(this).val().trim() == ''){
                check = 1;
                $(this).focus();
                $(this).parent('div').addClass('form_error');
                targetResp.html('You missed out some fields.');
                $(this).addClass('error');
                return false;
            }else{
                $(this).removeClass('error');
                $(this).parent('div').removeClass('form_error');
            }
        }
        if($(this).val().trim() != ''){
            var valid = $(this).attr('data-valid');
            if(typeof valid != 'undefined'){
                if(!eval(valid).test($(this).val().trim())){
                    $(this).addClass('error');
                    $(this).focus();
                    check = 1;
                    targetResp.html($(this).attr('data-error'));
                    return false;
                }else{
                    $(this).removeClass('error');
                }
            }
        }
    });
    return check;
}
$(".submitForm").on('click', function() {
    var _this = $(this);
    var targetForm = _this.closest('form');
    var errroTarget = targetForm.find('.response');
    var check = checkRequire(targetForm , errroTarget);
    
    if(check == 0){
       var formDetail = new FormData(targetForm[0]);
        formDetail.append('form_type' , _this.attr('form-type'));
        $.ajax({
            method : 'post',
            url : 'ajaxmail.php',
            data:formDetail,
            cache:false,
            contentType: false,
            processData: false
        }).done(function(resp){
            console.log(resp);
            if(resp == 1){
                targetForm.find('input').val('');
                targetForm.find('textarea').val('');
                errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
            }else{
                errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
            }
        });
    }
});