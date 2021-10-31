const bulb = document.querySelector(".bulb");
const body = document.querySelector("body");
const headers = document.querySelectorAll(".header");
const edHeader = document.querySelectorAll(".edHeader");
const skillCard = document.querySelectorAll(".skillCard");
const ContactHeader = document.querySelector(".Contact-header");
const profilename = document.querySelector(".name");
const shade = document.querySelectorAll(".shade");
const underline = document.querySelectorAll(".underline");
const socialIcon = document.querySelectorAll(".socialIcon");
const turnOffLight = () => {
  bulb.classList.add("off");
  bulb.classList.remove("on");
  for (i = 0; i < headers.length; i++) {
    headers[i].style.color = "black";
  }
  //   edHeader.style.color = "#4591c4";
  for (i = 0; i < edHeader.length; i++) {
    edHeader[i].style.color = "#4591c4";
  }
  //   skillCard.style.backgroundColor = "#32719c";
  console.log(skillCard);
  for (i = 0; i < skillCard.length; i++) {
    skillCard[i].style.backgroundColor = "#7dcaff";
  }
  for (i = 0; i < shade.length; i++) {
    shade[i].style.backgroundColor = "#7dcaff";
  }
  for (i = 0; i < underline.length; i++) {
    underline[i].style.backgroundColor = "#7dcaff";
  }
  for (i = 0; i < socialIcon.length; i++) {
    socialIcon[i].style.color = "#277cb8";
  }
  profilename.style.color = "#7dcaff";
  ContactHeader.style.color = "black";
  body.style.backgroundColor = "white";
};

const turnOnLight = () => {
  bulb.classList.add("on");
  bulb.classList.remove("off");
  for (i = 0; i < headers.length; i++) {
    headers[i].style.color = "white";
  }
  //   edHeader.style.color = "#4591c4";
  for (i = 0; i < edHeader.length; i++) {
    edHeader[i].style.color = "#fec15c";
  }
  //   skillCard.style.backgroundColor = "#32719c";
  console.log(skillCard);
  for (i = 0; i < skillCard.length; i++) {
    skillCard[i].style.backgroundColor = "#ffaf2a";
  }
  for (i = 0; i < shade.length; i++) {
    shade[i].style.backgroundColor = "#242834";
  }
  for (i = 0; i < underline.length; i++) {
    underline[i].style.backgroundColor = "#fec15c";
  }
  for (i = 0; i < socialIcon.length; i++) {
    socialIcon[i].style.color = "#ffaf2a";
  }
  profilename.style.color = "#ffaf2a";
  ContactHeader.style.color = "white";
  body.style.backgroundColor = "#333647";
};

var state = true;
bulb.onclick = () => {
  console.log(bulb.classList);
  if (state) {
    state = !state;
    turnOffLight();
  } else {
    state = !state;
    turnOnLight();
  }
};
