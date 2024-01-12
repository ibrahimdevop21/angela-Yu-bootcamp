$("h1").css({
  "color": "purple",
  "font-size": "9rem",
  "margin": "50px"
});

$("input").keydown(function(evt){
  $("h1").text(evt.key)}
);