const submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const artist = document.getElementById("artistinput").value;
  const title = document.getElementById("titleinput").value;
  getLyrics(artist, title);
  getVideo(artist, title);
  document.getElementById("titleinput").value = "";
  document.getElementById("artistinput").value = "";
});
$("html,body").scroll(function () {
  $(this).stop(true, false);
});
