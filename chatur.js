console.log("the auhtir is s hegade");
const text = document.getElementById("text");
let send = document.getElementById("send");
let to = document.getElementById("total");
let ul = document.getElementById("ul");
let mp3 = document.getElementById("mp3");
let mi;
var c = 0;
var time;

setInterval(() => {
  let dateobj = new Date();
  let hours = dateobj.getHours();
  let minutes = dateobj.getMinutes();
  let seconds = dateobj.getSeconds();
  let ly = hours >= 12 && (minutes >= 1 || seconds >= 1) ? "PM" : "AM";
  time = hours + ":" + minutes + ":" + seconds + " " + ly;
}, 1000);

const regX = /^hii|^hi|hello$|hellow$|hi$/gi;
const regX1 = /^how|you$|how$/gi;
const regX2 = /^who|^pm\Wof\Windia|pmofindia/gi;
const regX5 = /^version/gi;
const regX6 = /ha$|hu$|ok$|s$|yes$/gi;
const regX7 = /^what\Wis|^corona|corona$/gi;
const regX8 = /^message/gi;

send.addEventListener("click", () => {
  console.log("we  are clicked");
  if (text.value == "") {
    alert("fill this to continue");
    text.focus();
    return false;
  } else {
    let li = document.createElement("li");
    let t2 = document.createTextNode(time);
    let l2 = document.createElement("li");
    l2.appendChild(t2);
    ul.appendChild(l2);
    let txt = document.createTextNode(text.value);
    li.appendChild(txt);
    ul.appendChild(li);
    l2.setAttribute("class", "t2");
    li.setAttribute("class", "me1");

    if (regX.test(text.value)) {
      ++c;
      if (c >= 2) {
        text.value = "co";
      } else {
        text.value = "hi";
      }
    } else if (regX1.test(text.value)) {
      text.value = "how are you";
    } else if (regX2.test(text.value)) {
      text.value = "who is the pm of india";
    } else if (regX5.test(text.value)) {
      mi = true;
      text.value = "mimic";
    } else if (regX6.test(text.value) && mi) {
      text.value = "vr";
      mi = false;
    } else if (regX7.test(text.value)) {
      text.value = text.value;
    } else if (regX8.test(text.value)) {
      text.value = "message";
    }

    const xhr = new XMLHttpRequest();
    xhr.open("post", "chatur.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = () => {
      let reo = null;

      try {
        reo = JSON.parse(xhr.responseText);
        console.log("hf");
        console.log(xhr.responseText);
      } catch (e) {
        console.error("not able pass json");
      }
      let myhtml = "";
      console.log(reo.go);

      let lii = document.createElement("li");
      let replay = document.createTextNode(reo.go);
      let l3 = document.createElement("li");
      let t3 = document.createTextNode(time);
      l3.appendChild(t3);
      ul.appendChild(l3);
      lii.appendChild(replay);
      ul.appendChild(lii);
      lii.setAttribute("class", "re");
      l3.setAttribute("class", "t1");

      text.value = "";
      let total = document.getElementsByTagName("li");
      to.innerHTML = `${total.length / 2}`;

      let tag = document.getElementsByTagName("li");
      Array.from(tag).forEach((element, index) => {
        element.addEventListener("click", (e) => {
          let hell = e.currentTarget.innerHTML;
          text.value = hell;
        });
      });
    };
    let parm = `replay=${text.value.toLowerCase()}`;
    console.log(parm);
    xhr.send(parm);
    return true;
  }
});

window.addEventListener("scroll", () => {
  const sc = document.documentElement.scrollHeight - window.innerHeight;
  const si = window.scrollY;
  console.log(si);
  if (si == sc) {
    // alert("reached  end of the page")
    const bottom = document.getElementById("bottom");
    // bottom.setAttribute("class","relative");
  }
});
