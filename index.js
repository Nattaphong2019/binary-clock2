const dayjs = require("dayjs");

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

convertTimeToBinary();
