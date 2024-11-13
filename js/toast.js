export const toast = (
  statusToast,
  messageToast,
  positions = ["top", "right"]
) => {
  if (statusToast == "success") {
    Toastify({
      text: messageToast,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: positions[0], // `top` or `bottom`
      position: positions[1], // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #008080)", // Green-blue gradient for success
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  } else {
    Toastify({
      text: messageToast,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: positions[0], // `top` or `bottom`
      position: positions[1], // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #ff5f6d, #ffc371)", // Red-orange gradient for warning
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }
};
