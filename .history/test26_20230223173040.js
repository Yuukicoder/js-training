const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';
    var text = "<p> hello"+navigator.userAgent+"</p>"
// detectDeviceType();
console.log(text);