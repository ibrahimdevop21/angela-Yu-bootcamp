const our = Number(prompt(`what is the time in hour's?`));
const inute = Number(prompt(`what is the time in minute's?`));
const econds = Number(prompt(`what is the time in second's`));

if ((our >= 0 && our < 24) && (inute < 60 && inute >=0) && (econds < 60 && econds >= 0)) {
  let hour = our ;
  let minute = inute ;
  let seconds = econds +1;
if (minute === 60) {
  minute++;
  hour++;
  alert(`${hour}:${minute}:${seconds}`);
} else if (hour === 24) {
  hour = ("00");
  minute = ("00");
  seconds = ("00");
  alert(`${hour}:${minute}:${seconds}`);
}
} else {
  alert(`You've eneted an invalid time format${our}:${inute}:${econds}`)
}