const getCurrentTime = () => {
  let time = dayjs().format("HHmmss");
  return time;
};

const convertTimeToBinary = () => {
  let times = getCurrentTime();
  const binaryTimes = times
    .split("")
    .map((times) => (times >>> 0).toString(2).padStart(4, 0));
  return binaryTimes;
};

const addAndRemoveClassColor = () => {
  const binaryTimes = convertTimeToBinary();
  for (let i = 0; i < binaryTimes.length; i++) {
    const times = binaryTimes[i].split("");
    for (let j = 0; j < times.length; j++) {
      let timeString = times[j].toString();
      let element = document
        .getElementsByClassName("col")
        [i].getElementsByClassName("circle")[j];
      if (timeString === "1" && element != undefined) {
        element.classList.add("circle-chocolate");
      } else {
        element.classList.remove("circle-chocolate");
      }
    }
  }
};

setInterval(() => {
  addAndRemoveClassColor();
}, 1000);
