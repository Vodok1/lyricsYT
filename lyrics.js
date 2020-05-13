function getLyrics(artistInput, titleInput) {
  $.get(`https://api.lyrics.ovh/v1/${artistInput}/${titleInput}`, function (
    data
  ) {
    const lyricsData = data.lyrics;
    const $lyrics = $(".lyrics");
    console.log(data.lyrics);
    document.querySelector(".lyrics").innerHTML = data.lyrics.replace(
      new RegExp("\n", "g"),
      "<br>"
    );
  });
}
