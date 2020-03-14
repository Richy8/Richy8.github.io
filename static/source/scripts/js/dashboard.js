(function ($) {
    "use strict"

    /*++++++++++++++++++++++++++
     * PROFILE BAR
     +++++++++++++++++++++++++++*/
    const $dropdown = $('.profile-bar');

    $(document).on('mouseup', function(e){
        if(e.target.classList.contains('user-name')){
        //    console.log('pass');
        }
        else if(!e.target.classList.contains('user-name') 
        && !e.target.parentElement.parentElement.classList.contains('profile-bar')
        && !e.target.parentElement.classList.contains('profile-bar')){
            $dropdown.removeClass('d-block');
        }
    })

    $('.user-name').on('click', function(){
       $dropdown.toggleClass('d-block');
    })

    /*++++++++++++++++++++++++++
    * NOTIFICATION BAR
     +++++++++++++++++++++++++++*/
    const $dropdown_one = $('.notification-bar');

    $(document).on('mouseup', function(e){
        if(e.target.classList.contains('user-notification')){
        //    console.log('pass');
        }
        else if(!e.target.classList.contains('user-notification') 
        && !e.target.parentElement.parentElement.classList.contains('notification-bar')
        && !e.target.parentElement.classList.contains('notification-bar')){
            $dropdown_one.removeClass('d-block');
        }
    })

    $('.user-notification').on('click', function(){
       $dropdown_one.toggleClass('d-block');
    })
   
    /*++++++++++++++++++++++++++
     * DASHBOARD NOTIFICATION BAR
    +++++++++++++++++++++++++++*/
    const $dropdown_two = $('.dashboard-bar');

    $(document).on('mouseup', function(e){
         if(e.target.classList.contains('dashboard-notify')){
         //    console.log('pass');
         }
         else if(!e.target.classList.contains('dashboard-notify') 
         && !e.target.parentElement.parentElement.classList.contains('dashboard-bar')
         && !e.target.parentElement.classList.contains('dashboard-bar')){
             $dropdown_two.removeClass('d-block');
         }
     })
 
    $('.dashboard-notify').on('click', function(){
        $dropdown_two.toggleClass('d-block');
    })


    /*++++++++++++++++++++++++++
     * ELLIPSIS ICON
    +++++++++++++++++++++++++++*/
    $('#ellipsisIcon').click(() => {
        $('.header-right').toggleClass('d-none');
    })

    /*++++++++++++++++++++++++++
    * MENU BAR ICON
    +++++++++++++++++++++++++++*/
    $('#menuIcon').click(() => {
        $('.sidebar-section').toggleClass('show');
    })

    /*++++++++++++++++++++++++++
    * SIDEBAR DROPDOWN
    +++++++++++++++++++++++++++*/
    $('.sidebar-navigation li').on('click', function() {
        if ($(this).children('.caret-icon').length) {
            // $(this).children('.dropdown-nav').toggleClass('drop-bar');
            $(this).toggleClass('drop-bar');
        } else {
            console.log('No log')
        }
        
    })

})(jQuery);