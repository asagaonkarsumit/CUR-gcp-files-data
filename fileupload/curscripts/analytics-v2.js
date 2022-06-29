function emailAPICall() {
  var id = "";

  id = document.querySelector('meta[property="page-id"]')?.content;

  var url = "https://api.projectwhite.space/";
  var domainName = getDomainName(window.location.hostname);
  if (domainName === "nmedia2.com") {
    url = `https://api.nmedia2.com`;
  } else {
    url = `https://api.projectwhite.space`;
  }

  var apiUrl = `${url}/api/v1.0/content/views`;
  fetch(apiUrl, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ link: window.location.href, content_id: id }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getDomainName(hostName) {
  return hostName.substring(
    hostName.lastIndexOf(".", hostName.lastIndexOf(".") - 1) + 1
  );
}

window.onload = emailAPICall;
