const stages = {
  traditional: {
    label: "01 — TRADITIONAL PAINTING",
    title: "Traditional Warli Painting",
    description: "The original traditional artwork and its visual elements.",
    image: "assets/traditional-painting.jpg",
    type: "image"
  },

  illustration: {
    label: "02 — 2D DIGITAL ILLUSTRATION",
    title: "2D Warli Illustration",
    description: "A digitally recreated version that preserves the visual language of Warli art.",
    image: "assets/warli-illustration.png",
    type: "image"
  },

  animation: {
    label: "03 — ANIMATION",
    title: "Animated Warli Artwork",
    description: "The traditional visual elements brought to life through digital animation.",
    image: "assets/warli-animation.mp4",
    type: "video"
  }
};

const imageViewer = document.getElementById("imageViewer");
const videoViewer = document.getElementById("videoViewer");
const stageLabel = document.getElementById("stageLabel");
const stageTitle = document.getElementById("stageTitle");
const stageDescription = document.getElementById("stageDescription");
const buttons = document.querySelectorAll(".stage-btn");

function showStage(name) {
  const stage = stages[name];

  stageLabel.textContent = stage.label;
  stageTitle.textContent = stage.title;
  stageDescription.textContent = stage.description;

  buttons.forEach(button => {
    button.classList.toggle("active", button.dataset.stage === name);
  });

  if (stage.type === "video") {
    imageViewer.style.display = "none";
    videoViewer.style.display = "block";
    videoViewer.querySelector("source").src = stage.image;
    videoViewer.load();
    videoViewer.play().catch(() => {});
  } else {
    videoViewer.pause();
    videoViewer.style.display = "none";
    imageViewer.style.display = "block";
    imageViewer.src = stage.image;
  }
}

buttons.forEach(button => {
  button.addEventListener("click", () => showStage(button.dataset.stage));
});

showStage("traditional");
