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

      
    /* HANDLE CLICK OF USER ROLE
    ===============================*/
    let role = $('.modal .new-user .role');
    $(role).on('click', function () {
        $(role).removeClass('active-role');
        $('.input-role').val(false);

        $(this).children('input').val(true);
        $(this).addClass('active-role');
    });

    let edit_role = $('.modal .edit-role .role');
    $(edit_role).on('click', function () {
        $(edit_role).removeClass('active-role');
        $('.user-input-role').val(false);

        $(this).children('input').val(true);
        $(this).addClass('active-role');
    });


     /* HANDLE UPLOAD OF FEATURED IMAGE
    =====================================*/
    $('.upload-icon').on('click', function () {
        $('.featured-img-input').trigger('click');
        $('.featured-img-input').on('change', function(e) {

            let image_file = e.target.files;
            let image_name = e.target.files[0].name;
            let image_size = e.target.files[0].size;

            if (image_file && image_file[0] && image_name.match(/\.(jpg|jpeg)$/)){
                if (image_size < 1200000) {
                    let reader = new FileReader();
                    reader.onload = evt => {
                        $('.display-featured-img').attr('src', evt.target.result);
                    }
                    reader.readAsDataURL(image_file[0]);
                }else {
                    $('.post-alert').removeClass('d-none');
                    $('.post-alert-msg').text('Upload image less than 1.2mb');
                }
            }else{
                $('.post-alert').removeClass('d-none');
                $('.post-alert-msg').text('Upload jpg or jpeg files only');
            }
        })
    })

})(jQuery);