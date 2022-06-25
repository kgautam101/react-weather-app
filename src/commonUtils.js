export const convertToUpper = (string) => {
  if (string.split(" ").length > 1) {
    return (
      string.split(" ")[0].charAt(0).toUpperCase() +
      string.split(" ")[0].slice(1) +
      " " +
      string.split(" ")[1].charAt(0).toUpperCase() +
      string.split(" ")[1].slice(1)
    );
  } else
    return (
      string.split(" ")[0].charAt(0).toUpperCase() +
      string.split(" ")[0].slice(1)
    );
};
export const isWarm = (weather) => {
  if (weather?.main?.temp > 24) {
    return true;
  } else return false;
};
export const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  return `${day} ${date} ${month} ${year}`;
};
