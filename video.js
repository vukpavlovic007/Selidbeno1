var video_wrapper = $('.youtube-video-place');

if(video_wrapper.length){
   $('.video__btn').on('click', function() {
      video_wrapper.html('<iframe class="width_and_height_max" src="https://www.youtube.com/embed/gfiPOgsNO2M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameborder="0" class="js-video-iframe" src="' + 
      video_wrapper.data('yt-url') + '"></iframe>');
   });
}