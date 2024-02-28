 $(window).on('load',function() {
                new $.popup({                
                    title       : '',
                    content         : '<a href="allourtoursandactivities.html"><img src="img/popup_img.webp" alt="Image" class="pop_img"><h3 id="pop_msg">This week special offer <strong>30% OFF</strong> on all Tours & Hotels!</h3></a><small>Autoclose delay in 5 seconds.</small>', 
					html: true,
					autoclose   : true,
					closeOverlay:true,
					closeEsc: true,
					buttons     : false,
                    timeout     : 5000 
                });
            });