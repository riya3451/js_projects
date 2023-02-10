function displayTime() {
  const date = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //   console.log(date);

  let hrs = date.getHours();
  //   console.log(d);

  const min = date.getMinutes();
  //   console.log(m);

  const sec = date.getSeconds();
  //   console.log(s);
  const pe = "AM";

  let day = date.getDay();
  day = days[day];
  console.log(day);

  let mon = date.getMonth() + 1;

  // for (let i = 0; i < days.length; i++) {
  //   mon = mon + i;
  //   mon = days[i];
  // }

  const t = date.getDate();
  // console.log(t);

  const yr = date.getFullYear();
  // console.log(yr);

  const session = document.getElementById("period");

  if (hrs > 12) {
    session.innerHTML = "PM";
    hrs = hrs - 12;
  } else {
    session.innerHTML = "AM";
  }
  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
  document.getElementById("dayname").innerHTML = day;
  document.getElementById("daynum").innerHTML = t;
  document.getElementById("month").innerHTML = mon;
  document.getElementById("year").innerHTML = yr;
}

const int = setInterval(displayTime, 1000);
