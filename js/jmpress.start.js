$(function() {
  $.jmpress("template", "rotation", {
    children: function(idx) {
      return {r: 250, phi: idx*40, rotateY: idx*40, scale: 0.2, rotateX: 90}
    }
  });
  $.jmpress("template", "main", {
    children: [
      {},
      {x: 1000, rotate: 0},
      {x: 2000, rotate: 90},
      {x: 3000, rotate: 0},
      {x: 4000, rotate: 90},
      {x: 5000, rotate: 0},
      {x: 6000, rotate: 90},
      {x: 7000, rotate: 0},
      {x: 8000, rotate: 90},
      {x: 9000, rotate: 0},
      {x: 10000, rotate: 90},
      {x: 11000, rotate: 0}
    ]
  });
  $('article').jmpress({
    stepSelector: "section",
    viewPort: {
      height: 500,
      width: 1000,
      maxScale: 1
    },
    presentationMode: {
      url: "presentation-screen.html",
      notesUrl: "notes.html"
    }
  });
});
$('article').jmpress("route", ".basic");
$('article').jmpress("route", ".anilib");