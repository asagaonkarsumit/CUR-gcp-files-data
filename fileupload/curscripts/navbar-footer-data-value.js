var PageData = {};
// var kk = document.querySelectorAll('meta[name="sumit"]');
// kk[0].content;
function APICall() {
  return new Promise((reolve, reject) => {
    // alert("sss");
    var url = `${document.getElementById("page-data-script").src}`;

    var apiUrl = `${url}`;
    fetch(apiUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        PageData = data;

        console.log(data);
        reolve();
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("loader")
          ? (document.getElementById("loader").style.display = "none")
          : null;
        reject();
      });
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  executeParser();
});
executeParser = function () {
  //   var navDiv = document.getElementById("navbarDiv");
  //   navDiv.style.marginBottom = "100vh";
  //   document.body.style.overflow = "hidden";
  $(function () {
    $("header").load(
      `${window.location.protocol}//${window.location.hostname}/${
        document.querySelector('meta[property="navbar"]').content
      }`
    );
  });
  $(function () {
    $("footer").load(
      `${window.location.protocol}//${window.location.hostname}/${
        document.querySelector('meta[property="footer"]').content
      }`
    );
  });
  APICall()
    .then(() => {
      //   alert(document.getElementById("page-data-script").src);
      // alert("data loadded");
      // console.log(PageData);
      // console.log(PageData);
      var parentdivs = [
        ...document.querySelectorAll('[data-divType="PARENT"]'),
      ];

      if (parentdivs?.length) {
        parentdivs.map((parentBlock, parentIndex) => {
          var childDivs = [
            ...parentBlock.querySelectorAll('[data-divType="CHILD"]'),
          ];
          if (childDivs?.length) {
            childDivs.map((childMap, childIndex) => {
              // console.log(
              //   `${parentIndex} sd ${childIndex} `,
              //   PageData["resources"][parentIndex]["data"][childIndex]
              // );
              try {
                if (PageData["resources"][parentIndex]["dynamic"]) {
                  var widgetData =
                    PageData["resources"][parentIndex]["data"][childIndex];
                  DataParser(widgetData, childMap);
                }
              } catch (error) {
                alert(error);
                console.log(error);
              }

              //   alert("");
            });
          }
        });
      }
    })
    .catch(() => {
      console.log("err");
    })
    .finally(() => {
      //   alert("dd");
      //   var navDiv = document.getElementById("navbarDiv");
      //   navDiv.style.marginBottom = "0";
      //   document.body.style.overflow = "scroll";
      document.body.style.visibility = "visible";
      //   if (document.getElementsByClassName("top-class")) {
      //     document.getElementsByClassName("top-class")[0].style.visibility =
      //       "visible";
      //   }

      //   document.getElementById("loader")
      //     ? (document.getElementById("loader").style.display = "none")
      //     : null;
    });
};

function DataParser(widgetData, htmlObj) {
  var widgetHtml = htmlObj.querySelector("[data-blocks]");

  if (widgetHtml) {
    var blockCounts = parseInt(widgetHtml.getAttribute("data-blocks"));

    for (var i = 0; i < blockCounts; i++) {
      try {
        updateImageLinkLink(i, htmlObj, widgetData);
        updateTitle(i, htmlObj, widgetData);
        updateDesc(i, htmlObj, widgetData);
        updateTags(i, htmlObj, widgetData);
        updateSiteName(i, htmlObj, widgetData);
        updateFaviconIconLink(i, htmlObj, widgetData);
      } catch (error) {
        console.log(error);
      }
    }
  }
}

function updateCanonicalLink(block, htmlObj, widgetData) {
  var conalicalObj = htmlObj.querySelector(
    `[data-block${block}='canonical_link-string-href']`
  );
  if (conalicalObj) {
    conalicalObj.href = widgetData[i]?.canonical_link
      ? widgetData[i]?.canonical_link
      : conalicalObj.href;
  }
}
function updateImageLinkLink(block, htmlObj, widgetData) {
  var imageObj = htmlObj.querySelector(
    `[data-block${block}='image_link-string-src']`
  );
  if (imageObj) {
    imageObj.src = widgetData[block]?.image_link
      ? widgetData[block]?.image_link
      : imageObj.src;
  }
}

function updateTitle(block, htmlObj, widgetData) {
  var TitleObj = htmlObj.querySelector(
    `[data-block${block}='title-string-editor']`
  );
  if (TitleObj) {
    var fonstSize = "2.437rem";
    var sizeCalculated = false;
    if (widgetData[block]?.title) {
      if (isHTML(widgetData[block]?.title)) {
        TitleObj.firstElementChild.innerHTML = widgetData[block]?.title
          ? widgetData[block]?.title
          : "";
      } else {
        var editorDiv = TitleObj.getElementsByClassName("ql-editor")[0];
        [...editorDiv.children].map((item) => {
          if (item?.firstElementChild) {
            var elements = item?.firstElementChild;
            if (elements.hasAttribute("style")) {
              if (!sizeCalculated) {
                fonstSize = elements.style.fontSize;
                sizeCalculated = true;
              }
            }
          }
        });

        var htmlText = `<p><a href="${widgetData[block]?.canonical_link}" style="font-size: ${fonstSize};" >
          <strong>${widgetData[block]?.title}</strong></a></p>`;
        TitleObj.firstElementChild.innerHTML = htmlText;
      }
    }
  }
}
function updateDesc(block, htmlObj, widgetData) {
  var descObj = htmlObj.querySelector(
    `[data-block${block}='description-string-editor']`
  );
  if (descObj) {
    if (widgetData[block]?.description) {
      if (isHTML(widgetData[block]?.description)) {
        var fonstSize = "1.625rem;";
        var sizeCalculated = false;
        descObj.firstElementChild.innerHTML = widgetData[block]?.description
          ? widgetData[block]?.description
          : "";
      } else {
        var editorDiv = descObj.getElementsByClassName("ql-editor")[0];
        [...editorDiv.children].map((item) => {
          if (item?.firstElementChild) {
            var elements = item?.firstElementChild;
            if (elements.hasAttribute("style")) {
              if (!sizeCalculated) {
                fonstSize = elements.style.fontSize;
                sizeCalculated = true;
              }
            }
          }
        });
        var textHtml = ` <p><span style="font-size: ${fonstSize};">${widgetData[block]?.description} </span></p>`;
        descObj.firstElementChild.innerHTML = textHtml;
      }
    }
  }
}

function updateTags(block, htmlObj, widgetData) {
  var tagsObj = [
    ...htmlObj.querySelectorAll(`[data-block${block}='tags-list-text'] `),
  ];
  if (tagsObj) {
    if (widgetData[block]?.tags) {
      if (widgetData[block]?.tags?.length) {
        tagsObj.map((tagele, index) => {
          if (widgetData[block]?.tags[index]) {
            tagele.innerHTML = widgetData[block]?.tags[index]
              ? widgetData[block]?.tags[index]
              : "";
          } else {
            tagele.parentElement.outerHTML
              ? (tagele.parentElement.outerHTML = "")
              : (tagele.innerHTML = "");
          }
        });
      }
    }
  }
}

function updateSiteName(block, htmlObj, widgetData) {
  var siteNameObj = htmlObj.querySelector(
    `[data-block${block}='site_name-string-text']`
  );

  if (siteNameObj) {
    siteNameObj.innerHTML = widgetData[block]?.site_name
      ? widgetData[block]?.site_name
      : "";
  }
}

function updateFaviconIconLink(block, htmlObj, widgetData) {
  var faviObj = htmlObj.querySelector(
    `[data-block${block}='favicon_icon_link-string-src']`
  );
  if (faviObj) {
    faviObj.src = widgetData[block]?.favicon_icon_link
      ? widgetData[block]?.favicon_icon_link
      : "";
  }
}

function isHTML(str) {
  var a = document.createElement("div");
  a.innerHTML = str;

  for (var c = a.childNodes, i = c.length; i--; ) {
    if (c[i].nodeType == 1) return true;
  }

  return false;
}
