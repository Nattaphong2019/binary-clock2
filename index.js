const dayjs = require("dayjs");

const getCurrentTime = () => {
  let time = dayjs().format("HHmmss");
  return time;
};

console.log(getCurrentTime());
