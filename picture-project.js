const pictures = [
  {
    link: "https://images.hdqwalls.com/download/batman-gotham-4k-7r-2560x1440.jpg",
    hero: "Batman",
    background: "linear-gradient(45deg, black, 25%, #1a1a2b)",
    imgAlt:
      "Digital artwork that depicts Batman standing before a dark, stormy skyline of Gotham City, with bats flying overhead and the Bat-Signal glowing in the moonlight.",
  },
  {
    link: "https://www.pixelstalk.net/wp-content/uploads/image11/Spiderman-in-a-colorful-comic-book-style-leaping-towards-the-viewer.jpg",
    hero: "Spiderman",
    background: "linear-gradient(45deg, darkblue, blue, 60%, red)",
    imgAlt:
      "Digital artwork that depicts Spider-Man in a dynamic pose, swinging forward against a vibrant, multicolored background",
  },
  {
    link: "https://wallpapercave.com/wp/wp12600086.jpg",
    hero: "Spiderman",
    background: "linear-gradient(45deg, darkblue, blue, 60%, red)",
    imgAlt:
      "Image shows Spider-Man in his iconic red and blue suit, swinging through the air with a web in hand against a glowing blue background",
  },
  {
    link: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/17-superman-wall-art-tim-hill.jpg",
    hero: "Superman",
    background: "linear-gradient(45deg, darkblue, 50%, orange, red)",
    imgAlt:
      "An illustration that depicts Superman in his iconic blue suit with a red cape, featuring the bold 'S' emblem on his chest",
  },
  {
    link: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/4-superman-wall-art-tim-hill.jpg",
    hero: "Superman",
    background: "linear-gradient(45deg, darkblue, 50%, orange, red)",
    imgAlt:
      "This digital artwork depicts Superman soaring through the sky in his iconic blue suit with a flowing red cape and the 'S' emblem on his chest. ",
  },
  {
    link: "https://images.hdqwalls.com/wallpapers/bthumb/the-batman-unseen-face-qv.jpg",
    hero: "Batman",
    background: "linear-gradient(45deg, black, 25%, #1a1a2b)",
    imgAlt:
      "This digital artwork depicts Batman in his iconic armored suit, standing before a dark, stormy Gotham City skyline with the Bat-Signal glowing in the moonlight.",
  },
];

let image = null;
let superHero = "Batman";
let imagePosition = true;
let backgroundStyle = true;

let imageZeroToggle = true;
let imageOneToggle = true;
let backgroundToggle = 0;

const mainContainer = document.getElementById("main-container");

const batmanImageOne = document.getElementById("batman-one-image");
const batmanImageTwo = document.getElementById("batman-two-image");
const spidermanImageOne = document.getElementById("spiderman-one-image");
const spidermanImageTwo = document.getElementById("spiderman-two-image");
const supermanImageOne = document.getElementById("superman-one-image");
const supermanImageTwo = document.getElementById("superman-two-image");

const picture = document.createElement("img");

const blurDiv = document.getElementById("blur-style");
const gradientDiv = document.getElementById("gradient-style");

const backgroundEffectButton = document.getElementById(
  "background-effect-button",
);
let num = true;
function prevButton() {
  imagePosition = false;

  if (image == pictures[0].link) {
    image = pictures[5].link;
    superHero = pictures[5].hero;
    picture.alt = pictures[5].imgAlt;
    if (backgroundStyle == true) {
      mainContainer.style.backgroundImage = `url('${pictures[5].link}')`;
      mainContainer.style.backgroundSize = "cover";
      backgroundToggle = 0;
    } else {
      mainContainer.style.background = pictures[5].background;
      backgroundToggle = 0;
    }
    batmanImageOne.classList.remove("greyscale");
    batmanImageOne.classList.remove("no-border");
    batmanImageTwo.classList.remove("no-greyscale");
    batmanImageTwo.classList.remove("white-border");
    // ------------------------------------------------------------------
  } else if (image == pictures[1].link) {
    image = pictures[0].link;
    superHero = pictures[0].hero;
    picture.alt = pictures[0].imgAlt;
    if (backgroundStyle == true) {
      mainContainer.style.backgroundImage = `url('${pictures[0].link}')`;
      mainContainer.style.backgroundSize = "cover";
      backgroundToggle = 1;
    } else {
      mainContainer.style.background = pictures[0].background;
      backgroundToggle = 1;
    }
    batmanImageTwo.classList.add("no-greyscale");
    batmanImageTwo.classList.add("white-border");
    spidermanImageOne.classList.remove("no-greyscale");
    spidermanImageOne.classList.remove("white-border");
    mainContainer.classList.remove("background-spiderman");
    mainContainer.classList.add("background-batman");
    // --------------------------------------------------------------------
  } else if (image == pictures[2].link) {
    image = pictures[1].link;
    superHero = pictures[1].hero;
    picture.alt = pictures[1].imgAlt;
    if (backgroundStyle == true) {
      mainContainer.style.backgroundImage = `url('${pictures[1].link}')`;
      mainContainer.style.backgroundSize = "cover";
      backgroundToggle = 2;
    } else {
      mainContainer.style.background = pictures[1].background;
      backgroundToggle = 2;
    }
    spidermanImageOne.classList.add("no-greyscale");
    spidermanImageOne.classList.add("white-border");
    spidermanImageTwo.classList.remove("no-greyscale");
    spidermanImageTwo.classList.remove("white-border");
    // -------------------------------------------------------------------
  } else if (image == pictures[3].link) {
    image = pictures[2].link;
    superHero = pictures[2].hero;
    picture.alt = pictures[2].imgAlt;
    if (backgroundStyle == true) {
      mainContainer.style.backgroundImage = `url('${pictures[2].link}')`;
      mainContainer.style.backgroundSize = "cover";
      backgroundToggle = 3;
    } else {
      mainContainer.style.background = pictures[2].background;
      backgroundToggle = 3;
    }
    spidermanImageTwo.classList.add("no-greyscale");
    spidermanImageTwo.classList.add("white-border");
    supermanImageOne.classList.remove("no-greyscale");
    supermanImageOne.classList.remove("white-border");
    // ------------------------------------------------------------------
  } else if (image == pictures[4].link) {
    image = pictures[3].link;
    superHero = pictures[3].hero;
    picture.alt = pictures[3].imgAlt;
    if (backgroundStyle == true) {
      mainContainer.style.backgroundImage = `url('${pictures[3].link}')`;
      mainContainer.style.backgroundSize = "cover";
      backgroundToggle = 4;
    } else {
      mainContainer.style.background = pictures[3].background;
      backgroundToggle = 4;
    }
    supermanImageOne.classList.add("no-greyscale");
    supermanImageOne.classList.add("white-border");
    supermanImageTwo.classList.remove("no-greyscale");
    supermanImageTwo.classList.remove("white-border");
    // ---------------------------------------------------------------------
  } else if (image == pictures[5].link) {
    image = pictures[4].link;
    superHero = pictures[4].hero;
    picture.alt = pictures[4].imgAlt;
    if (backgroundStyle == true) {
      mainContainer.style.backgroundImage = `url('${pictures[4].link}')`;
      mainContainer.style.backgroundSize = "cover";
      backgroundToggle = 5;
    } else {
      mainContainer.style.background = pictures[4].background;
      backgroundToggle = 5;
    }
    supermanImageTwo.classList.add("no-greyscale");
    supermanImageTwo.classList.add("white-border");
    batmanImageOne.classList.add("greyscale");
    batmanImageOne.classList.add("no-border");
  }

  // ==================================================================================
  nextButton();
  imagePosition = true;
}

// Next function ------------------------------------------------------------------
function nextButton() {
  const pictureDiv = document.getElementById("picture-div");
  pictureDiv.innerHTML = "";
  // const picture = document.createElement("img");
  if (imagePosition == true) {
    if (image == null) {
      image = pictures[0].link;
      superHero = pictures[0].hero;
      picture.alt = pictures[0].imgAlt;
      if (backgroundStyle == true) {
        imageZeroToggle = true;

        mainContainer.style.backgroundImage = `url('${pictures[0].link}')`;
        mainContainer.style.backgroundSize = "cover";
        backgroundToggle = 1;
      } else {
        mainContainer.style.background = pictures[0].background;
        backgroundToggle = 1;
      }
      mainContainer.style.backgroundSize = "cover";
      batmanImageOne.classList.add("greyscale");
      batmanImageOne.classList.add("no-border");
      batmanImageTwo.classList.add("no-greyscale");
      batmanImageTwo.classList.add("white-border");
      // ----------------------------------------------------------------
    } else if (image == pictures[0].link) {
      image = pictures[1].link;
      superHero = pictures[1].hero;
      picture.alt = pictures[1].imgAlt;
      if (backgroundStyle == true) {
        imageOneToggle = true;
        mainContainer.style.backgroundImage = `url('${pictures[1].link}')`;
        mainContainer.style.backgroundSize = "cover";
        backgroundToggle = 2;
      } else {
        mainContainer.style.background = pictures[1].background;
        backgroundToggle = 2;
      }
      batmanImageTwo.classList.remove("no-greyscale");
      batmanImageTwo.classList.remove("white-border");
      spidermanImageOne.classList.add("no-greyscale");
      spidermanImageOne.classList.add("white-border");
      // --------------------------------------------------------------
    } else if (image == pictures[1].link) {
      image = pictures[2].link;
      superHero = pictures[2].hero;
      picture.alt = pictures[2].imgAlt;
      if (backgroundStyle == true) {
        mainContainer.style.backgroundImage = `url('${pictures[2].link}')`;
        mainContainer.style.backgroundSize = "cover";
        backgroundToggle = 3;
      } else {
        mainContainer.style.background = pictures[1].background;
        backgroundToggle = 3;
      }
      spidermanImageOne.classList.remove("no-greyscale");
      spidermanImageOne.classList.remove("white-border");
      spidermanImageTwo.classList.add("no-greyscale");
      spidermanImageTwo.classList.add("white-border");
      // ------------------------------------------------------------------
    } else if (image == pictures[2].link) {
      image = pictures[3].link;
      superHero = pictures[3].hero;
      picture.alt = pictures[3].imgAlt;
      if (backgroundStyle == true) {
        mainContainer.style.backgroundImage = `url('${pictures[3].link}')`;
        mainContainer.style.backgroundSize = "cover";
        backgroundToggle = 4;
      } else {
        mainContainer.style.background = pictures[3].background;
        backgroundToggle = 4;
      }
      spidermanImageTwo.classList.remove("no-greyscale");
      spidermanImageTwo.classList.remove("white-border");
      supermanImageOne.classList.add("no-greyscale");
      supermanImageOne.classList.add("white-border");
      // -----------------------------------------------------------------
    } else if (image == pictures[3].link) {
      image = pictures[4].link;
      superHero = pictures[4].hero;
      picture.alt = pictures[4].imgAlt;
      if (backgroundStyle == true) {
        mainContainer.style.backgroundImage = `url('${pictures[4].link}')`;
        mainContainer.style.backgroundSize = "cover";
        backgroundToggle = 5;
      } else {
        mainContainer.style.background = pictures[4].background;
        backgroundToggle = 5;
      }
      supermanImageOne.classList.remove("no-greyscale");
      supermanImageOne.classList.remove("white-border");
      supermanImageTwo.classList.add("no-greyscale");
      supermanImageTwo.classList.add("white-border");
      // --------------------------------------------------------------------
    } else if (image == pictures[4].link) {
      image = pictures[5].link;
      superHero = pictures[5].hero;
      picture.alt = pictures[5].imgAlt;
      if (backgroundStyle == true) {
        mainContainer.style.backgroundImage = `url('${pictures[5].link}')`;
        mainContainer.style.backgroundSize = "cover";
        backgroundToggle = 0;
      } else {
        mainContainer.style.background = pictures[5].background;
        backgroundToggle = 0;
      }
      supermanImageTwo.classList.remove("no-greyscale");
      supermanImageTwo.classList.remove("white-border");
      batmanImageOne.classList.remove("greyscale");
      batmanImageOne.classList.remove("no-border");
      // ----------------------------------------------------------------
    } else if (image == pictures[5].link) {
      image = pictures[0].link;
      superHero = pictures[0].hero;
      picture.alt = pictures[0].imgAlt;
      if (backgroundStyle == true) {
        mainContainer.style.backgroundImage = `url('${pictures[0].link}')`;
        mainContainer.style.backgroundSize = "cover";
        backgroundToggle = 1;
      } else {
        mainContainer.style.background = pictures[0].background;
        backgroundToggle = 1;
      }
      batmanImageOne.classList.add("greyscale");
      batmanImageOne.classList.add("no-border");
      batmanImageTwo.classList.add("no-greyscale");
      batmanImageTwo.classList.add("white-border");
    }
  }

  picture.src = image;
  picture.classList.add("image-size");
  const description = document.createElement("figcaption");
  description.innerText = superHero;
  description.classList.add("fig-description");
  pictureDiv.appendChild(picture);
  pictureDiv.appendChild(description);
}

// background effect button //

backgroundEffectButton.addEventListener("click", () => {
  backgroundStyle = !backgroundStyle;
  if (!backgroundStyle) {
    blurDiv.innerHTML = "Gradient";

    blurDiv.classList.remove("blur-effect");
    blurDiv.classList.add("gradient-effect");
  } else {
    blurDiv.innerHTML = "Blur";

    blurDiv.classList.remove("gradient-effect");
    blurDiv.classList.add("blur-effect");
  }

  if (backgroundToggle == 0) {
    if (imageZeroToggle == true) {
      mainContainer.style.background = pictures[5].background;
      imageZeroToggle = !imageZeroToggle;
    } else {
      mainContainer.style.backgroundImage = `url('${pictures[5].link}')`;
      mainContainer.style.backgroundSize = "cover";
      imageZeroToggle = true;
    }
  }

  if (backgroundToggle == 1) {
    if (imageZeroToggle == true) {
      mainContainer.style.background = pictures[0].background;
      imageZeroToggle = !imageZeroToggle;
    } else {
      mainContainer.style.backgroundImage = `url('${pictures[0].link}')`;
      mainContainer.style.backgroundSize = "cover";
      imageZeroToggle = true;
    }
  }

  if (backgroundToggle == 2) {
    if (imageZeroToggle == true) {
      mainContainer.style.background = pictures[1].background;
      imageZeroToggle = !imageZeroToggle;
    } else {
      mainContainer.style.backgroundImage = `url('${pictures[1].link}')`;
      mainContainer.style.backgroundSize = "cover";
      imageZeroToggle = true;
    }
  }

  if (backgroundToggle == 3) {
    if (imageZeroToggle == true) {
      mainContainer.style.background = pictures[2].background;
      imageZeroToggle = !imageZeroToggle;
    } else {
      mainContainer.style.backgroundImage = `url('${pictures[2].link}')`;
      mainContainer.style.backgroundSize = "cover";
      imageZeroToggle = true;
    }
  }

  if (backgroundToggle == 4) {
    if (imageZeroToggle == true) {
      mainContainer.style.background = pictures[3].background;
      imageZeroToggle = !imageZeroToggle;
    } else {
      mainContainer.style.backgroundImage = `url('${pictures[3].link}')`;
      mainContainer.style.backgroundSize = "cover";
      imageZeroToggle = true;
    }
  }

  if (backgroundToggle == 5) {
    if (imageZeroToggle == true) {
      mainContainer.style.background = pictures[4].background;
      imageZeroToggle = !imageZeroToggle;
    } else {
      mainContainer.style.backgroundImage = `url('${pictures[4].link}')`;
      mainContainer.style.backgroundSize = "cover";
      imageZeroToggle = true;
    }
  }

  if (backgroundToggle == 6) {
    if (imageZeroToggle == true) {
      mainContainer.style.background = pictures[5].background;
      imageZeroToggle = !imageZeroToggle;
    } else {
      mainContainer.style.backgroundImage = `url('${pictures[5].link}')`;
      mainContainer.style.backgroundSize = "cover";
      imageZeroToggle = true;
    }
  }
});
