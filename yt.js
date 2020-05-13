function getVideo(artistInput, titleInput) {
  $.ajax({
    type: "GET",
    url: "https://www.googleapis.com/youtube/v3/search",
    data: {
      key: "#enterAPIKEY",
      q: `${artistInput} ${titleInput}`,
      part: "snippet",
      maxResults: 1,
      type: "video",
      videoEmbeddable: true,
    },
    success: function (data) {
      $.get(
        "https://www.googleapis.com/youtube/v3/videos",
        {
          part: "snippet, contentDetails",
          key: "AIzaSyDNbGaj7BGIuBatl5UCv06rn82yjkedyJY",
          id: data.items[0].id.videoId,
        },
        function (video) {
          if (video.items.length > 0) {
            embedVideo(video.items[0]);
          }
        }
      );
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(jqXHR);
    },
  });
}
function convertTime(duration) {
  var a = duration.match(/\d+/g);

  if (
    duration.indexOf("M") >= 0 &&
    duration.indexOf("H") == -1 &&
    duration.indexOf("S") == -1
  ) {
    a = [0, a[0], 0];
  }

  if (duration.indexOf("H") >= 0 && duration.indexOf("M") == -1) {
    a = [a[0], 0, a[1]];
  }
  if (
    duration.indexOf("H") >= 0 &&
    duration.indexOf("M") == -1 &&
    duration.indexOf("S") == -1
  ) {
    a = [a[0], 0, 0];
  }

  duration = 0;

  if (a.length == 3) {
    duration = duration + parseInt(a[0]) * 3600;
    duration = duration + parseInt(a[1]) * 60;
    duration = duration + parseInt(a[2]);
  }

  if (a.length == 2) {
    duration = duration + parseInt(a[0]) * 60;
    duration = duration + parseInt(a[1]);
  }

  if (a.length == 1) {
    duration = duration + parseInt(a[0]);
  }
  return duration * 1000;
}
function embedVideo(data) {
  const videoID = data.id;
  const videoDuration = convertTime(data.contentDetails.duration);
  console.log(videoDuration);
  $("iframe").attr(
    "src",
    "https://www.youtube.com/embed/" + videoID + "?autoplay=1"
  );
  $("html, body").animate(
    { scrollTop: $(document).height() - $(window).height() },
    videoDuration,
    "linear"
  );
}
