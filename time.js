function Time() {
  var watch = new Date();
  var h = watch.getHours();
  var m = watch.getMinutes();
  h = checkTime(h);
  m = checkTime(m);
  document.getElementById('time').innerHTML =h + ":" + m;
  var t = setTimeout(Time, 500);
}

function checkTime(i) {
  if (i < 10) i = "0" + i;
  return i;
}
