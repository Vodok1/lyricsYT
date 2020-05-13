const submit = document.getElementById("submit");

$("iframe").attr("src", ""); //czyszczenie filmu
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const artist = document.getElementById("artistinput").value;
  const title = document.getElementById("titleinput").value;
  getLyrics(artist, title);
  getVideo(artist, title);
  document.getElementById("titleinput").value = "";
  document.getElementById("artistinput").value = "";
  $(".hero iframe, .lyrics").animate(
    {
      opacity: 1,
    },
    3000
  );
});
//stop autoscroll after user interact
$("body,html").bind(
  "scroll mousedown wheel DOMMouseScroll mousewheel keyup",
  function (e) {
    if (e.which > 0 || e.type == "mousedown" || e.type == "mousewheel") {
      $("html,body").stop();
    }
  }
);
