$(function(){
    //fungsi dibawah hanya berjalan untuk semua tag <a> yang diawali (^) dengan hash (#)
    $('.ambil-data').on('click', function(e){
        //masukkan ke dalam kurung kurawalnya $(a[href^])......
        $target = $(this.hash);
        //masukkan baris coding ini dibawahnya $target ......
    $jarak = 56;
    $('html, body').stop().animate(
        {
            'scrollTop' : $target.offset().top - $jarak
        },
        500, //durasi dalam milisekon
        'swing', //efek transisi (opsi : swing / linear)
        function(){
            window.location.hash = target;
        }
    );

    });
    // Scroll to top button appear
    $(document).scroll(function() {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
          $('.scroll-to-top').fadeIn();
        } else {
          $('.scroll-to-top').fadeOut();
        }
      });
    // Closes responsive menu when a scroll trigger link is clicked
    $('.ambil-data').click(function() {
        $('.navbar-collapse').collapse('hide');
      });
});
