// Creare's 'Implied Consent' EU Cookie Law Banner v:2.4
// Conceived by Robert Kent, James Bavington & Tom Foyster
 
var dropCookie = true;                      // false disables the Cookie, allowing you to style the banner
var cookieDuration = 14;                    // Number of days before the cookie expires, and the banner reappears
var cookieName = 'complianceCookie';        // Name of our cookie
var cookieValue = 'on';                     // Value of cookie
 
function createDiv(){
    var bodytag = document.getElementsByTagName('body')[0];
    var div = document.createElement('div');
    div.setAttribute('id','cookie-law');
    div.innerHTML = '<p>Our website uses cookies. By continuing we assume your permission to deploy cookies, as detailed in our <a href="/privacy.php/" rel="nofollow" title="Privacy &amp; Cookies Policy">privacy and cookies policy</a>. <a class="close-cookie-banner" href="javascript:void(0);" onclick="removeMe();"><span>X</span></a></p>';    
 // Be advised the Close Banner 'X' link requires jQuery
     
    // bodytag.appendChild(div); // Adds the Cookie Law Banner just before the closing </body> tag
    // or
    bodytag.insertBefore(div,bodytag.firstChild); // Adds the Cookie Law Banner just after the opening <body> tag
     
    document.getElementsByTagName('body')[0].className+=' cookiebanner'; //Adds a class tothe <body> tag when the banner is visible
     
    createCookie(window.cookieName,window.cookieValue, window.cookieDuration); // Create the cookie
}
 
 
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000)); 
        var expires = "; expires="+date.toGMTString(); 
    }
    else var expires = "";
    if(window.dropCookie) { 
        document.cookie = name+"="+value+expires+"; path=/"; 
    }
}
 
function checkCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
 
function eraseCookie(name) {
    createCookie(name,"",-1);
}
 
window.onload = function(){
    if(checkCookie(window.cookieName) != window.cookieValue){
        createDiv(); 
    }
}

function removeMe(){
	var element = document.getElementById('cookie-law');
	element.parentNode.removeChild(element);
}

// JavaScript Document

$(document).ready(function(){




$.backstretch("css/page_pics/hm_fadeout.png");





$("#preloader").fadeOut(500);

var scrollsettings = {
		showArrows: false,
		autoReinitialise: true
	};
var scrollpane = $('#ajax_content')


$('.navi ul li a, a.about, a.imprint, a.privacy').live('click',function(){
	
	scrollpane.jScrollPane(scrollsettings);
	var api = scrollpane.data('jsp');
	api.getContentPane().html('');
	
	url = $(this).attr('href')+'?ajax=true';
	
	
	$('#ajax_container').animate({
			    opacity: 'show',
				   right: 0,
				   width: 700
				   },1000, function(){
					   
					   $.ajax({
						  url: url,
						  success: function(data) {		  
						  
						   scrollpane.jScrollPane(scrollsettings);
						   var api = scrollpane.data('jsp');
						   api.getContentPane().html(data);

		   
		}
		});	
					   
					   
					   });
				   
	

	
		   
		return false;  
	});
		


closecontainer = function (){
	container_width = $('#ajax_container').width();
	$('#ajax_content').width(container_width-20);
	
		$('#ajax_container').animate({
				   opacity: 'hide',
				   right: 0,
				   width: 0
				   },1000,function(){
					    //$('#ajax_content_wrapper').html('<div id="ajax_content"></div>');
						 //scrollpane.jScrollPane(scrollsettings);			
						 //$('#ajax_content').html('');
					   
					   
					   })
}

$('#ajax_container .xclose').click(function(){
	closecontainer();				   
	});
	
	
closecontainer();
	


  
				

$(function() {
		$( "#slider-y" ).slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 1920,
			value: 480,
			slide: function( event, ui ) {
				$( "#y" ).val( ui.value );
			}
		});
		//$( "#y" ).val( $( "#slider-y" ).slider( "value" ) );
	});
	
	$(function() {
		$( "#slider-x" ).slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 1920,
			value: 640,
			slide: function( event, ui ) {
				$( "#x" ).val( ui.value );
			}
		});
		//$( "#x" ).val( $( "#slider-x" ).slider( "value" ) );
	});

$(".catagories span").click(function(){
	$(".catagories span, .catagories input").removeClass("act");
	$(this).toggleClass("act");
});

$(".catagories input").change(function(){
	$(".catagories span").removeClass("act");
	$(".catagories span.flickr").toggleClass("act");
	$(".catagories span.flickr").text($(this).val());
});

$(".catagories input").click(function(){
	$(".catagories span").removeClass("act");
	$(".catagories span.flickr").toggleClass("act");
	$(this).toggleClass("act");
	$(".catagories span.flickr").text($(this).val());
});

$(".actions .color").click(function(){	
	$("#preloader").fadeIn(500);
	$('.generator-result').fadeOut(250)
	$.ajax({
 		  url: 'index.php?generator=1&x='+$( "#x" ).val()+'&y='+$( "#y" ).val()+'&cat='+$(".catagories span.act").text(),
		  success: function(data) {
			  $("#preloader").fadeOut(500);
			   $('.generator-result').html(data+'<div class="close"></div>');
			   $('.generator-result').css({
				   width: 0,
				   height: 0,
				   marginLeft: Number($( "#x" ).val())/2*-1,
				   marginTop: Number($( "#y" ).val())/2*-1
			   });
			   
			   $('.generator-result').animate({
				   width:  Number($( "#x" ).val()),
				   height:  Number($( "#y" ).val()), 
				   opacity: 'show'
			   })
			   
		  }
	
	});
});

$(".actions .gray").click(function(){
	$("#preloader").fadeIn(500);
	$('.generator-result').fadeOut(250)
	$.ajax({
 		  url: 'index.php?generator=1&gray=1&x='+$( "#x" ).val()+'&y='+$( "#y" ).val()+'&cat='+$(".catagories span.act").text(),
		  success: function(data) {
			  $("#preloader").fadeOut(500);
			   $('.generator-result').html(data+'<div class="close"></div>');
			   $('.generator-result').css({
				   width: 0,
				   height: 0,
				   marginLeft: Number($( "#x" ).val())/2*-1,
				   marginTop: Number($( "#y" ).val())/2*-1
			   });
			   
			   $('.generator-result').animate({
				   width:  Number($( "#x" ).val()),
				   height:  Number($( "#y" ).val()), 
				   opacity: 'show'
			   })
			   
		  }
	
	});
});

$(".close, #wrapper").live('click', function(){
	$('.generator-result').fadeOut(250)
});





draw_logo = function(){
	$('.logo').html('<span class="l">l</span><span class="o">o</span><span class="r">r</span><span class="e">e</span><span class="m">m</span><span class="p">p</span><span class="i">i</span><canvas id="lorempixum_x" width="24" height="24"></canvas><span class="e2">e</span><span class="l2">l</span>');
	
	var canvas=document.getElementById("lorempixum_x");
	var logo=canvas.getContext("2d");
	var size=8;
	 logo.fillStyle = "rgba(255, 255, 255, 1)";
	 logo.fillRect (0, 0, size, size);
	 logo.fillRect (size, size, size, size);
	 logo.fillRect (size*2, size*2, size, size);
	 logo.fillRect (0, size*2, size, size);
	 logo.fillRect (size*2, 0, size, size);
}

if ($('html').hasClass('canvas')){
	draw_logo();
}

  
ankerurl = location.href.split('#')[1];
     
if(ankerurl=='images' || ankerurl=='imprint' || ankerurl=='privacy' || ankerurl=='about' || ankerurl=='comments') {

		
  $('#ajax_container').animate({
			    opacity: 'show',
				   right: 0,
				   width: 700
				   },1000, function(){
					   
					   $.ajax({
						  url: ankerurl+'.php?ajax=true',
						  success: function(data) {		  
						  
						   scrollpane.jScrollPane(scrollsettings);
						   var api = scrollpane.data('jsp');
						   api.getContentPane().html(data);

		   
	 }
	});	
 });
}







$('.poll form').submit(function(event){
	
	content = $(this).serialize();
	action = $(this).attr('action');

	var pollcategory = $.url(action+'&'+content).param('entry.0.group');

	if(pollcategory){
		$('.poll form').fadeOut(300,function(){
			$(this).html('thank you!');
			$(this).fadeIn(300,function(){
				$(this).delay(1000).fadeOut();
				$('.counter').delay(1000).fadeIn();
			});

		});
	}
	else{
		event.preventDefault();
	}

	console.log(pollcategory)


	//


})




	


});