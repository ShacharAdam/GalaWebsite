document.addEventListener("DOMContentLoaded", function() {
  const timeline = document.getElementById("timeline");
  const photos = [
    { year: 2000, src: "photos/CuteLion.jpg" },
    { year: 2005, src: "photos/photo2.jpg" },
    { year: 2010, src: "photos/photo3.jpg" },
    { year: 2015, src: "photos/photo4.jpg" },
    { year: 2020, src: "photos/photo5.jpg" },
  ];

  // Create timeline events
  for (let i = 0; i < photos.length; i++) {
    const event = document.createElement("div");
    event.classList.add("timeline-event");
    event.dataset.year = photos[i].year;
    event.addEventListener("click", showPhoto);
    timeline.appendChild(event);
  }

  // Show photo on event click
  function showPhoto(event) {
    const year = event.target.dataset.year;
    const photo = photos.find(item => item.year == year);

    const photoContainer = document.createElement("div");
    photoContainer.classList.add("photo-container");

    const img = new Image();
    img.src = photo.src;
    img.classList.add("timeline-photo");
    img.onload = function() {
      photoContainer.appendChild(img);
    }

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.addEventListener("click", hidePhoto);
    photoContainer.appendChild(overlay);

    document.body.appendChild(photoContainer);
  }

  // Hide photo on overlay click
  function hidePhoto(event) {
    const photoContainer = document.querySelector(".photo-container");
    photoContainer.parentNode.removeChild(photoContainer);
  }
});

  