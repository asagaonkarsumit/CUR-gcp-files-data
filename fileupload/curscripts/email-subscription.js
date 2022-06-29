function emailSuscribe(obj, key) {
  if (obj[0]) {
    obj[0].disabled = true;
  }
  if (obj[1]) {
    obj[1].disabled = true;
    obj[1].innerHTML = "loading";
  }
  if (obj.querySelector(".error-div")) {
    obj.querySelector(".error-div").style.visibility = "hidden";
  }
  var sWidth = screen.width;
  apiUrl = `https://sub.projectwhite.space/api/v1.0/subscribe/${key}`;
  var device = "Desktop";
  sWidth > 768
    ? (device = "Desktop")
    : sWidth > 480
    ? (device = "Tablet")
    : (device = "Mobile");
  fetch(apiUrl, {
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ email: obj[0].value, device: device }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (obj.querySelector(".error-div")) {
        obj.querySelector(".error-div").style.visibility = "visible";
        obj.querySelector(".error-div").innerHTML = data.message;
      }
      console.log("Success:", data);
    })
    .catch((error) => {
      if (obj.querySelector(".error-div")) {
        obj.querySelector(".error-div").style.visibility = "visible";
        obj.querySelector(".error-div").innerHTML = data.error;
      }
    })
    .finally(() => {
      if (obj[0]) {
        obj[0].disabled = false;
      }
      if (obj[1]) {
        obj[1].disabled = false;
        obj[1].innerHTML = " Submit ";
      }
    });
}
function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}
function ModalHtml(data) {
  var html = ` <div class= "fixed hidden inset-0 bg-gray-600 bg-opacity-50  justify-center items-center overflow-y-auto h-full w-full" id="my-modal" >
                                    <div class= "relative  mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" >
                                    <div class="mt-3 text-center">
                                           <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100" style="background: var(--cur-color-25)";>
                                           
                                           
    <svg class="h-6 w-6 text-green-600" style="color:var(--cur-color-600);" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                        </div>
                                        <h3 class="text-lg leading-6 font-medium text-gray-900">${data?.message}</h3>
                                        <div class="mt-2 px-7 ">
                                           
                                        </div>
                                        <div class="items-center px-4 py-3">
                                            <button id="ok-btn"  style="background: var(--cur-color-600);"
                                                class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none  ">
                                                OK
                                            </button>
                                        </div>
                                    </div>
                                    </div >
            </div > `;

  return html;
}
function subscribeEmail(obj, key) {
  var editable_div = obj.querySelector("[contenteditable = false]");
  var blockId = editable_div?.id;

  number_block = blockId.slice(8, blockId.search("-"));
  var templateBlock = document.getElementsByClassName("template")[number_block];
  var lable_name = editable_div.getAttribute("data-btnname");
  if (lable_name != "undefine" && lable_name != null) {
    var link_var = obj.getElementsByTagName("a");
    if (link_var.length != 0) {
      link_var[0].removeAttribute("href");
      link_var[0].removeAttribute("target");
      link_var[0].style.textDecoration = "none";
    }

    var submited_val = templateBlock.querySelector(
      `input[data-btnname=${lable_name}]`
    )?.value;
    console.log(submited_val);
    if (ValidateEmail(submited_val)) {
      var sWidth = screen.width;
      apiUrl = `https://sub.projectwhite.space/api/v1.0/subscribe/${key}`;
      var device = "Desktop";
      sWidth > 768
        ? (device = "Desktop")
        : sWidth > 480
        ? (device = "Tablet")
        : (device = "Mobile");
      fetch(apiUrl, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email: submited_val, device: device }),
      })
        .then((response) => {
          console.log(response);

          return response.json();
        })
        .then((data) => {
          document.body.insertAdjacentHTML("beforeend", ModalHtml(data));
          var buttonOK = document.getElementById("ok-btn");
          buttonOK.onclick = function () {
            var modal = document.getElementById("my-modal");
            modal.outerHTML = "";
            modal.style.display = "none";
          };
        })
        .catch((error) => {
          var data = { message: "Something went wrong please try again" };
          document.body.insertAdjacentHTML("beforeend", ModalHtml(data));
          var buttonOK = document.getElementById("ok-btn");
          var modal = document.getElementById("my-modal");
          modal.style.display = "flex";
          buttonOK.onclick = function () {
            var modal = document.getElementById("my-modal");
            modal.outerHTML = "";
            modal.style.display = "none";
          };
        })
        .finally(() => {
          var modal = document.getElementById("my-modal");
          modal.style.display = "flex";
        });
    } else {
      var data = {
        message: "You have entered an invalid email address!",
      };
      try {
        document.body.insertAdjacentHTML("beforeend", ModalHtml(data));
        var buttonOK = document.getElementById("ok-btn");
        var modal = document.getElementById("my-modal");
        modal.style.display = "flex";
        buttonOK.onclick = function () {
          var modal = document.getElementById("my-modal");
          modal.outerHTML = "";
          modal.style.display = "none";
        };
      } catch (err) {
        console.log(err);
      }
    }
  } else {
    var link_var = obj.getElementsByTagName("a");
    if (link_var.length) {
      window.open(link_var[0]?.href, "_blank");
    }
  }
}

window.onclick = function (event) {
  var modal = document.getElementById("my-modal");

  if (event.target == modal) {
    modal.outerHTML = "";
    modal.style.display = "none";
  }
};
