/**
 * Created by yulia on 1/8/2016.
 */
/*** Site Search expand-collapse...*/
(function (window) {
    var input = $('#nav-search-input');
    var label = $('.nav-search-label');
    label.click(function () {
        input.addClass('search-expanded');
        label.addClass('search-active');
        $('#search-terms').focus();
    });
    document.addEventListener('click', function (e) {
        if ($(e.target).closest('#nav-search-input').length === 0
            && $(e.target).closest('#site-search-button').length === 0) {
            $('#nav-search-input').removeClass('search-expanded');
            $('.nav-search-label').removeClass('search-active');
        }
    });

    $('.glyphicon-remove').click(function () {
        $('#nav-search-input').removeClass('search-expanded');
        $('.nav-search-label').removeClass('search-active');
    });

}(window));

$(document).on("scrollstart", function () {
    console.log("Started scrolling!");
});

$(window).load(function () {
    if (!userAnonymous) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('#inspiration-pic').height()) {
                $('#inspiration-pic').css("display", "none").fadeOut('slow');
                $('#img-content').removeClass('main-img-content');
                $('#img-content').addClass('content-fixed-top');
                $('.page-content').css('margin-top', '60px');

                var lastScrollTop = 0;
                $(window).scroll(function () {
                    var st = $(this).scrollTop();
                    if (st > lastScrollTop) {

                        $('#img-content').addClass('hidden');
                    } else {
                        $('#img-content').removeClass('hidden');
                    }
                    lastScrollTop = st;
                });
            }
        })
    }
});

var sign_in_validate = function (form_id) {
    // get all the inputs into an array.
    var $inputs = $('#' + form_id + ' :input');

    // not sure if you wanted this, but I thought I'd add it.
    // get an associative array of just the values.
    var values = {};
    $inputs.each(function () {
        values[this.name] = $(this).val();
    });
    console.log(values);

    $.post(sing_in_url, values, function (data) {
        if (data.valid) {
            $('#' + form_id).submit()
        } else {
            console.log('non valid');
        }
    })
};


$('#id_sign_in_form').submit(function () {
    console.log('aaaaaaaa______')
});


