$(document).ready(function() {
    $(".template").each(myFunction);

    function myFunction(i, obj, arr) {
        console.log(i);
        if ($(obj).find("[data-selectname]").attr("data-selectname")) {
            var selectObj = $(obj).find("[data-selectname]");
            selectObj.attr("data-templateblock", i);
            if ("search" != $(selectObj).attr("type")) {
                $(selectObj).val($(selectObj).attr("data-default"));
            }

            getWidgetData(selectObj, false);
        }
    }
    // for (var [i, obj] of $(".template").entries()) {
    //     console.log(obj);
    //     if ($(obj).find("[data-selectname]").attr("data-selectname")) {
    //         var selectObj = $(obj).find("[data-selectname]");
    //         selectObj.data("templateblock", i);
    //         console.log($(obj).find("[data-selectname]").attr("data-selectname"));
    //     }
    // }
    // $(".grid-widget-block").hide();
    // $(".loaded-div").show();

    $(".media").change(function() {
        // alert($(this).val());
        $(this).attr("data-order", $(this).val());
        var template_block_number = $(this).attr("data-templateblock");
        // alert(template_block_number);
        var template_block_obj = $(".template")[template_block_number];
        var selected_atrubute_identity = $(this).attr("data-selectname");
        // alert(selected_atrubute_identity);
        $(template_block_obj)
            .find(`[data-selectname=${selected_atrubute_identity}]`)
            .attr("data-page", 1);
        $(template_block_obj)
            .find(`[data-selectname=${selected_atrubute_identity}]`)
            .attr("data-order", $(this).val());
        getWidgetData($(this), false);
    });

    $(".changeCategory").change(function() {
        // alert($(this).val());
        $(this).attr("data-category", $(this).val());
        var template_block_number = $(this).attr("data-templateblock");
        // alert(template_block_number);
        var template_block_obj = $(".template")[template_block_number];
        var selected_atrubute_identity = $(this).attr("data-selectname");
        // alert(selected_atrubute_identity);
        $(template_block_obj)
            .find(`[data-selectname=${selected_atrubute_identity}]`)
            .attr("data-category", $(this).val());
        getWidgetData($(this), false);
    });

    var debounce = null;
    $("#inpute").on("keyup", function(e) {
        clearTimeout(debounce);
        debounce = setTimeout(function() {
            $.ajax({ url: "someurl.jsp", data: { query: "lll" }, type: "GET" });
        }, 5000);
    });

    // getWidgetData();
});

function getval(dd) {
    // alert($(dd).val());

    $(dd).attr("data-search", $(dd).val());
    var template_block_number = $(dd).attr("data-templateblock");
    // alert(template_block_number);
    var template_block_obj = $(".template")[template_block_number];
    var selected_atrubute_identity = $(dd).attr("data-selectname");
    // alert(selected_atrubute_identity);
    $(template_block_obj)
        .find(`[data-selectname=${selected_atrubute_identity}]`)
        .attr("data-page", 1);
    $(template_block_obj)
        .find(`[data-selectname=${selected_atrubute_identity}]`)
        .attr("data-search", $(dd).val());

    getWidgetData($(dd), false);
}

function paginationHandler(current_object, page) {
    // alert($(dd).val());
    event.preventDefault();
    // $(current_object).attr("data-page", page);
    var allTemplates = $(".template");
    allTemplates.map((item, templ_obj) => {
        // alert("kaja");
        if (templ_obj.contains(current_object)) {
            // alert("ddd");

            var selected_atrubute_identity = $(current_object).attr(
                "data-paginationname"
            );

            $(templ_obj)
                .find(`[data-selectname=${selected_atrubute_identity}]`)
                .attr("data-page", page);
            var selectObj = $(templ_obj).find("[data-selectname]");
            getWidgetData($(selectObj), true);
        }
    });

    // getWidgetData($(current_object));
}

function getWidgetData(selectObj, scroll) {
    // alert(selectObj);
    try {
        var template_block_number = selectObj.attr("data-templateblock");
        // alert(template_block_number);
        var template_block_obj = $(".template")[template_block_number];
        var selected_atrubute_identity = selectObj.attr("data-selectname");
        // alert(selected_atrubute_identity);
        $(template_block_obj)
            .find(`[data-loadername=${selected_atrubute_identity}]`)
            .show();
        var current_page = 1;
        var per_page = 10;
        var category = "ISSUES";
        var order = "Latest";
        var widgetName = "Recent Articles";

        selectObj.attr("data-order") ?
            (order = selectObj.attr("data-order")) :
            null;
        selectObj.attr("data-perpage") ?
            (per_page = selectObj.attr("data-perpage")) :
            null;
        selectObj.attr("data-page") ?
            (current_page = selectObj.attr("data-page")) :
            null;
        selectObj.attr("data-category") ?
            (category = selectObj.attr("data-category")) :
            null;
        selectObj.attr("data-widgetname") ?
            (widgetName = selectObj.attr("data-widgetname")) :
            null;
        var core_url = "https://api.projectwhite.space/";
        var domainName = getDomainName(window.location.hostname);
        if (domainName === "nmedia2.com") {
            core_url = `https://api.nmedia2.com`;
        } else {
            core_url = `https://api.projectwhite.space`;
        }

        var url = `${core_url}/api/v1.0/page/${
      document.querySelector('meta[property="page-id"]')?.content
    }/widget/feed?category=${category}&widgetname=${widgetName}&tag=${order}&page=${current_page}&limit=${per_page}`;
        if (selectObj.attr("data-search")) {
            serachText = selectObj.attr("data-search");
            if (serachText != "") {
                url = url + `&searchKey=${serachText}`;
            }
        }
        $.ajax({
            url: url, //API URL
            type: "GET", // GET OR POST,
            beforeSend: function() {
                // This function calls before ajax API Hits
                // Here we have to show our loader
                // $(template_block_obj).find(`.grid-widget-block`).hide();
                // $(template_block_obj)
                //     .find(`[data-loadername=${selected_atrubute_identity}]`)
                //     .show();
            },
            success: function(response, status) {
                // Once our API call send success
                // this function gets called.
                // $(".loader-row").addClass("d-none");
                // let html = "";
                // for (let i = 0; i < response.length; i++) {
                //     const { id, name, email } = response[i];
                //     html += `
                //             <tr>
                //                 <td>${id}</td>
                //                 <td>${name}</td>
                //                 <td>${email}</td>
                //             </tr>
                //         `;
                // }
                // $(".user-table").find("tbody").append(html);

                $(template_block_obj)
                    .find(`.grid-widget-block`)
                    .html(response.items.html);
                var kk = $(template_block_obj)
                    .find(`.grid-widget-block`)
                    .find(`.grid-widget-block`)
                    .html();
                $(template_block_obj).find(`.grid-widget-block`).html(kk);
                // var kk = $(".grid-widget-block").find(".grid-widget-block").html();
                // $(template_block_obj)
                //     .find(`[data-loadername=${selected_atrubute_identity}]`)
                //     .hide();
                $(template_block_obj).find(`.grid-widget-block`).show();

                $(template_block_obj)
                    .find(`.grid-pagination-block`)
                    .html(response.items.html);
                var kk = $(template_block_obj)
                    .find(`.grid-pagination-block`)
                    .find(`.grid-pagination-block`)
                    .html();
                $(template_block_obj).find(`.grid-pagination-block`).html(kk);
                // var kk = $(".grid-widget-block").find(".grid-widget-block").html();
                // $(template_block_obj)
                //     .find(`[data-loadername=${selected_atrubute_identity}]`)
                //     .hide();
                $(template_block_obj).find(`.grid-pagination-block`).show();

                // $(".grid-widget-block").html(response.items.html);
                // var kk = $(".grid-widget-block").find(".grid-widget-block").html();
                // $(".grid-widget-block").html(kk);

                // $(".loaded-div").hide();
                // $(".grid-widget-block").show();
                // template_block_obj.scroll({
                //     top: template_block_obj.scrollHeight, //scroll to the bottom of the element
                //     behavior: "smooth", //auto, smooth, initial, inherit
                // });
                // template_block_obj.scrollTop = 0;

                console.log("executed");
                if (scroll) {
                    $("html,body").animate({
                            scrollTop: $(template_block_obj).offset().top,
                        },
                        "slow"
                    );
                }
                // $(".template").scrollTop(0);

                // $(template_block_obj).scrollTop(0);
                // $(template_block_obj).find(`.grid-widget-block`).scrollTop();
                // $.scrollTo(template_block_obj, 2000);
            },
            error: function(error, status) {
                $(template_block_obj).find(`.grid-pagination-block`).hide();
                $(template_block_obj)
                    .find(`.grid-widget-block`)
                    .html(`<div>${error.responseJSON.message}  </div>`);
                // IF our API get any error
                // this function gets called.
                // $(".loader-row").addClass("d-none");
                // let html = `
                //         <tr>
                //             <td colspan="3">
                //                 <div class="alert alert-danger">
                //                     Error while fetching data
                //                 </div>
                //             </td>
                //         </tr>
                //     `;
                // $(".user-table").find("tbody").append(html);
            },
        });
    } catch (e) {
        console.log(e);
        alert(e);
    }
}