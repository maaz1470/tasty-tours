window.onload = function () {

    const head = document.head;
    const body = document.body;

    function isHomePage() {
        const currentPage = window.location.href;

        const homePage = 'https://maaz1470.github.io/tasty-tours/'

        if (currentPage == homePage) {
            return true;
        } else {
            return false;
        }
    }

    



    function loadFacades() {
        // CSS load here



        // JS Load Here
        const thia_sticky = document.createElement('script')
        thia_sticky.src = 'js/theia-sticky-sidebar.js'
        body.appendChild(thia_sticky)

        const google_tag_manager = document.createElement('script')
        google_tag_manager.src = 'https://www.googletagmanager.com/gtag/js?id=UA-56826266-1'
        google_tag_manager.async = true
        body.appendChild(google_tag_manager)


        const fareharbor = document.createElement('script')
        fareharbor.src = 'https://fareharbor.com/embeds/api/v1/?autolightframe=yes'
        body.appendChild(fareharbor)


        const cookieBar = document.createElement('script')
        cookieBar.src = 'js/jquery.cookiebar.js'
        body.appendChild(cookieBar)

        if (!isHomePage()) {

            const notify_func = document.createElement('script')
            notify_func.src = 'js/notify_func.js'
            body.appendChild(notify_func)


            const recaptcha = document.createElement('script')
            recaptcha.src = 'https://www.google.com/recaptcha/api.js';
            recaptcha.async = true;
            recaptcha.defer = true
            head.appendChild(recaptcha)


            const validate = document.createElement('script')
            validate.src = 'assets/validate.js'
            body.appendChild(validate)


            const map = document.createElement('script')
            map.src = 'https://maps.googleapis.com/maps/api/js'
            body.appendChild(map)


            const infoBox = document.createElement('script')
            infoBox.src = 'js/infobox.js'
            body.appendChild(infoBox)
        }
    }


    function activeFacades() {
        setTimeout(() => {
            // Theia Sticky
            jQuery('.left-imgbox').theiaStickySidebar({
                additionalMarginTop: 80
            });
            jQuery('.right-imgbox').theiaStickySidebar({
                additionalMarginTop: 80
            });

            // Google Tag Manager
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'UA-56826266-1');


            // Get Button JS
            (function () {
                var options = {
                    facebook: "1559531520928567", // Facebook page ID
                    email: "info@tastytours.com", // Email
                    email_color: "#A8CE50", // Email button color
                    call_to_action: "Send Us a Message", // Call to action
                    button_color: "#FF6550", // Color of button
                    position: "right", // Position may be 'right' or 'left'
                    order: "email,facebook", // Order of buttons
                };
                var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
                var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
                s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
                var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
            })();

            // Cookie Bar Js
            $(document).ready(function () {
                'use strict';
                $.cookieBar({
                    fixed: true
                });
            });


            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=1365407963556488';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));


            const map_contact = document.createElement('script')
            map_contact.src = 'js/map_contact.js'
            body.appendChild(map_contact)

        }, 1000)
    }

    window.addEventListener('scroll', function () {
        console.log(window.scrollY)
        if (window.scrollY > 800) {
            if (!window.rh) {
                window.rh = true;
                loadFacades();
                activeFacades();
            }
        }
    })


    setTimeout(() => {
        const google_font = document.createElement('link')
        google_font.href = 'https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Montserrat:wght@300;400;500;600;700&display=swap'
        google_font.rel = 'stylesheet'
        head.appendChild(google_font)
    }, 7000)


}