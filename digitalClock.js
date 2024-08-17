setInterval(() => {
  let hours = $("#hours");
  let minutes = $("#minutes");
  let seconds = $("#seconds");
  let ampm = $("#ampm");

  let hh = $("#hh");
  let mm = $("#mm");
  let ss = $("#ss");

  let hr_dot = $(".hr_dot");
  let min_dot = $(".min_dot");
  let sec_dot = $(".sec_dot");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let period = h >= 12 ? "PM" : "AM";

  // convert 24hr clock to 12 hr clock

  if (h > 12) {
    h = h - 12;
  } else if(h == 0){
    h = 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.html(h + "<br><span>Hours</span>");
  minutes.html(m + "<br><span>Minutes</span>");
  seconds.html(s + "<br><span>Seconds</span>");
  ampm.html(period);

  var hhOffset = 440 - (440 * h) / 12;
  var mmOffset = 440 - (440 * m) / 60;
  var ssOffset = 440 - (440 * s) / 60;

  hh.css("strokeDashoffset", hhOffset);
  mm.css("strokeDashoffset", mmOffset);
  ss.css("strokeDashoffset", ssOffset);

  hr_dot.css("transform", `rotate(${h * 30}deg)`);
  min_dot.css("transform", `rotate(${m * 6}deg)`);
  sec_dot.css("transform", `rotate(${s * 6}deg)`);
});
