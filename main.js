let lights = [];
for (let i = 1; i < 13; i++) {
  lights.push(document.body.querySelector(`#lit${i}`));
}
let mode = 1;
let rate = 500;
let delay = 60;
let bool = true;
let fade =  setTimeout(() => {
  msgFeed.classList.remove("fade-out")
}, 1000);
let pattern = setInterval(() => {
  if (bool) {
    for (let i = 0; i < lights.length; i += 2) {
      lights[i].style.fill = "white";
    }
    setTimeout(() => {
      for (let i = 0; i < lights.length; i += 2) {
      lights[i].style.fill = "#fa0000";
    }}, rate);
    bool = false;
  } else {
    for (let i = 1; i < lights.length; i += 2) {
      lights[i].style.fill = "white";
    }
    setTimeout(() => {
      for (let i = 1; i < lights.length; i += 2) {
      lights[i].style.fill = "#fa0000";
    }}, rate);
    bool = true;
  }
}, rate);

const msgFeed = document.body.querySelector(`#msg-feedback`);
const btnMode = document.body.querySelector(`#btn-mode`);
btnMode.addEventListener("click", btnModeFunct);
function btnModeFunct() {
  // Change + Update Mode
  changeMode();
  updateMode();
  msgFeed.classList.remove("fade-out");
  msgFeed.innerText = "Mode Switched";
  fade = setTimeout(() => {
    msgFeed.classList.add("fade-out");
  }, delay)
};

document.body.querySelector(`#btn-spd-up`).addEventListener("click", btnspdUp);
function btnspdUp() {
  // Maximum Speed Alert
  if (rate == 100) {
    msgFeed.innerText = "Maximum Speed";
    msgFeed.classList.remove("fade-out")
    fade = setTimeout(() => {
      msgFeed.classList.add("fade-out");
    }, delay)
  } else {
    // Change rate
    rate -= 100;
    // Update Pattern
    updateMode();
    // Display Text + Fade
    msgFeed.innerText = "Speed Increased";
    msgFeed.classList.remove("fade-out")
    fade = setTimeout(() => {
      msgFeed.classList.add("fade-out");
    }, delay)
  }
}

document.body.querySelector(`#btn-spd-down`).addEventListener("click", btnspdDown);
function btnspdDown() {
  // Minimum Speed Alert
  if (rate == 1000) {
    msgFeed.innerText = "Minimum Speed";
    msgFeed.classList.remove("fade-out")
    fade = setTimeout(() => {
      msgFeed.classList.add("fade-out");
    }, delay)
  } else {
    // Change rate
    rate += 100;
    // Update Pattern
    updateMode();
    // Display Text + Fade
    msgFeed.innerText = "Speed Decreased";
    msgFeed.classList.remove("fade-out")
    fade = setTimeout(() => {
      msgFeed.classList.add("fade-out");
    }, delay)
  }
}

function changeMode() {
  if (mode < 4) {
    mode += 1;
  } else {
    mode = 1;
  }
}

function updateMode() {
  if (mode == 1) {    
    // Clear Cache
    clearInterval(pattern);
    
    // alternate evens and odds
    let bool = true;
    pattern = setInterval(() => {
      if (bool) {
        for (let i = 0; i < lights.length; i += 2) {
          lights[i].style.fill = "white";
        }
        setTimeout(() => {
          for (let i = 0; i < lights.length; i += 2) {
            lights[i].style.fill = "#fa0000";
          }}, rate);
          bool = false;
        } else {
          for (let i = 1; i < lights.length; i += 2) {
            lights[i].style.fill = "white";
          }
          setTimeout(() => {
            for (let i = 1; i < lights.length; i += 2) {
              lights[i].style.fill = "#fa0000";
            }}, rate);
            bool = true;
          }
        }, rate);
        
      } else if (mode == 2) {
        // Clear Cache
        clearInterval(pattern);
        
        // alternate rows
        pattern = setInterval(() => {
          setTimeout(() => {
            lights[0].style.fill = lights[0].style.fill == "white" ? "#fa0000" : "white";
            lights[1].style.fill = lights[1].style.fill == "white" ? "#fa0000" : "white";
            lights[2].style.fill = lights[2].style.fill == "white" ? "#fa0000" : "white";
          }, 0)
          setTimeout(() => {
            lights[3].style.fill = lights[3].style.fill == "white" ? "#fa0000" : "white";
            lights[4].style.fill = lights[4].style.fill == "white" ? "#fa0000" : "white";
            lights[5].style.fill = lights[5].style.fill == "white" ? "#fa0000" : "white";
          }, rate / 4)
          setTimeout(() => {
            lights[6].style.fill = lights[6].style.fill == "white" ? "#fa0000" : "white";
            lights[7].style.fill = lights[7].style.fill == "white" ? "#fa0000" : "white";
            lights[8].style.fill = lights[8].style.fill == "white" ? "#fa0000" : "white";
          }, 2 * (rate / 4))
          setTimeout(() => {
              lights[9].style.fill = lights[9].style.fill == "white" ? "#fa0000" : "white";
              lights[10].style.fill = lights[10].style.fill == "white" ? "#fa0000" : "white";
              lights[11].style.fill = lights[11].style.fill == "white" ? "#fa0000" : "white";
          }, 3 * (rate / 4))
        }, rate)
        
      } else if (mode == 3) {
        // Clear Cache
    clearInterval(pattern);
    
    // alternate columns
    pattern = setInterval(() => {
      setTimeout(() => {
        for (let i = 0; i < lights.length; i += 3) {
          lights[i].style.fill = lights[i].style.fill == "white" ? "#fa0000" : "white";
        }
      }, 0);
      setTimeout(() => {
        for (let i = 1; i < lights.length; i += 3) {
          lights[i].style.fill = lights[i].style.fill == "white" ? "#fa0000" : "white";
        }
      }, rate / 3);
      setTimeout(() => {
        for (let i = 2; i < lights.length; i += 3) {
          lights[i].style.fill = lights[i].style.fill == "white" ? "#fa0000" : "white";
        }
      }, 2 * (rate / 3))
    }, rate)
    
  } else if (mode == 4) {
    // Clear Cache
    clearInterval(pattern);
    
    // Flashing
    pattern = setInterval(() => {
      for (let i = 0; i < lights.length; i++) {
        lights[i].style.fill = lights[i].style.fill == "white" ? "#fa0000" : "white";
      }
    }, rate);
  }
}