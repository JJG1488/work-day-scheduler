// --------------------- task list for this file ----------------------------
// change to htmlH1InnerText.innerHTML = DateTime.local(); to reflect the current time (FORMAT IT)

let htmlH1InnerText = document.querySelector("#html-h1");
let DateTime = luxon.DateTime;
console.log(DateTime);

htmlH1InnerText.innerHTML = DateTime.local();