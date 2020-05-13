function getVideo(artistInput, titleInput) {
  $.ajax({
    type: "GET",
    url: "https://www.googleapis.com/youtube/v3/search",
    data: {
      key: "AIzaSyDNbGaj7BGIuBatl5UCv06rn82yjkedyJY",
      q: `${artistInput} ${titleInput}`,
      part: "snippet",
      maxResults: 1,
      type: "video",
      videoEmbeddable: true,
    },
    success: function (data) {
      embedVideo(data);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(jqXHR);
    },
  });
}
function embedVideo(data) {
  console.log(data.items[0].id.videoId);
  console.log(data.items[0].id.duration);
  let videoDuration = data.items[0].id.duration;
  $("iframe").attr(
    "src",
    "https://www.youtube.com/embed/" + data.items[0].id.videoId
  );
}
