// Location Finder Example

function isTimeConsumption(t) {
  time = 999;
  return time <= t;
}

function isValidLocation(loc) {
  location = "Sivakasi";
  return loc == location;
}

function locationFinder() {
  loc = "Sivakasi";
  timed = 1000;
  return new Promise((locFound, locNotFound) => {
    setTimeout(() => {
      if (isValidLocation(loc) && isTimeConsumption(timed)) {
        locFound("Location Found");
      } else {
        locNotFound("Location not Found");
      }
    }, timed);
  });
}

locationFinder()
  .then((resolveMsg) => {
    console.log(resolveMsg);
  })
  .catch(function (error) {
    console.log(error);
  });
