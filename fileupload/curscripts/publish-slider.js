window.addEventListener("load", function() {
    var templateDIVS = document.getElementsByClassName("template");

    for (var j = 0; j < templateDIVS.length; j++) {
        if (templateDIVS[j].querySelector(".glider1")) {
            templateDIVS[j]
                .querySelector(".glider1")
                .addEventListener("glider-slide-visible", function(event) {
                    var glider = Glider(this);
                    console.log("Slide Visible %s", event.detail.slide);
                });

            templateDIVS[j]
                .querySelector(".glider1")
                .addEventListener("glider-slide-hidden", function(event) {
                    console.log("Slide Hidden %s", event.detail.slide);
                });

            templateDIVS[j]
                .querySelector(".glider1")
                .addEventListener("glider-refresh", function(event) {
                    console.log("Refresh");
                });

            templateDIVS[j]
                .querySelector(".glider1")
                .addEventListener("glider-loaded", function(event) {
                    console.log("Loaded");
                });

            window._ = new Glider(templateDIVS[j].querySelector(".glider1"), {
                slidesToShow: "auto", //'auto',

                slidesToScroll: 1,

                draggable: true,
                scrollLock: false,
                dots: "#dots",
                rewind: true,
                arrows: {
                    prev: templateDIVS[j].getElementsByClassName("glider-prev")[0],
                    next: templateDIVS[j].getElementsByClassName("glider-next")[0],
                },

                responsive: [{
                        breakpoint: 800,
                        settings: {
                            slidesToScroll: "auto",
                            itemWidth: 150,
                            slidesToShow: "auto",
                            exactWidth: true,
                        },
                    },

                    {
                        breakpoint: 700,
                        settings: {
                            slidesToScroll: 4,
                            slidesToShow: 4,
                            dots: false,
                            arrows: false,
                        },
                    },

                    {
                        breakpoint: 600,
                        settings: {
                            slidesToScroll: 3,
                            slidesToShow: 3,
                        },
                    },

                    {
                        breakpoint: 500,
                        settings: {
                            slidesToScroll: 2,
                            slidesToShow: 2,
                            dots: false,
                            arrows: false,
                            scrollLock: true,
                        },
                    },
                ],
            });
        }
    }
    for (var j = 0; j < templateDIVS.length; j++) {
        if (templateDIVS[j].querySelector(".glider")) {
            templateDIVS[j]
                .querySelector(".glider")
                .addEventListener("glider-slide-visible", function(event) {
                    var glider = Glider(this);
                    console.log("Slide Visible %s", event.detail.slide);
                });

            templateDIVS[j]
                .querySelector(".glider")
                .addEventListener("glider-slide-hidden", function(event) {
                    console.log("Slide Hidden %s", event.detail.slide);
                });

            templateDIVS[j]
                .querySelector(".glider")
                .addEventListener("glider-refresh", function(event) {
                    console.log("Refresh");
                });

            templateDIVS[j]
                .querySelector(".glider")
                .addEventListener("glider-loaded", function(event) {
                    console.log("Loaded");
                });

            window._ = new Glider(templateDIVS[j].querySelector(".glider"), {
                slidesToShow: "auto", //'auto',

                slidesToScroll: 1,

                draggable: true,
                scrollLock: false,
                dots: "#dots",
                rewind: true,
                arrows: false,

                responsive: [{
                        breakpoint: 800,
                        settings: {
                            slidesToScroll: "auto",
                            itemWidth: 220,
                            slidesToShow: "auto",
                            exactWidth: true,
                        },
                    },

                    {
                        breakpoint: 700,
                        settings: {
                            slidesToScroll: 4,
                            slidesToShow: 4,
                            dots: false,
                            arrows: false,
                        },
                    },

                    {
                        breakpoint: 600,
                        settings: {
                            slidesToScroll: 3,
                            slidesToShow: 3,
                        },
                    },

                    {
                        breakpoint: 500,
                        settings: {
                            slidesToScroll: 1,
                            slidesToShow: 2,
                            dots: false,
                            arrows: false,
                            scrollLock: true,
                        },
                    },
                    {
                        breakpoint: 100,
                        settings: {
                            slidesToScroll: 2,
                            slidesToShow: 1.3,
                            dots: false,
                            arrows: false,
                            scrollLock: true,
                        },
                    },
                ],
            });
        }
    }
    var sliderDIVS = document.getElementsByClassName("slider-container");
    for (var j = 0; j < sliderDIVS.length; j++) {
        if (sliderDIVS[j].querySelector(".glider-ra")) {
            sliderDIVS[j]
                .querySelector(".glider-ra")
                .addEventListener("glider-slide-visible", function(event) {
                    var glider = Glider(this);
                    console.log("Slide Visible %s", event.detail.slide);
                });

            sliderDIVS[j]
                .querySelector(".glider-ra")
                .addEventListener("glider-slide-hidden", function(event) {
                    console.log("Slide Hidden %s", event.detail.slide);
                });

            sliderDIVS[j]
                .querySelector(".glider-ra")
                .addEventListener("glider-refresh", function(event) {
                    console.log("Refresh");
                });

            sliderDIVS[j]
                .querySelector(".glider-ra")
                .addEventListener("glider-loaded", function(event) {
                    console.log("Loaded");
                });

            window._ = new Glider(sliderDIVS[j].querySelector(".glider-ra"), {
                slidesToShow: "auto", //'auto',

                slidesToScroll: 1,
                itemWidth: 150,
                draggable: true,
                scrollLock: false,
                dots: "#dots",
                rewind: true,
                arrows: {
                    prev: sliderDIVS[j].getElementsByClassName("glider-prev")[0],
                    next: sliderDIVS[j].getElementsByClassName("glider-next")[0],
                },

                responsive: [{
                        breakpoint: 800,
                        settings: {
                            slidesToScroll: "auto",
                            itemWidth: 700,
                            slidesToShow: "auto",
                            exactWidth: true,
                        },
                    },

                    {
                        breakpoint: 700,
                        settings: {
                            slidesToScroll: 4,
                            slidesToShow: 4,
                            dots: false,
                            arrows: false,
                        },
                    },

                    {
                        breakpoint: 600,
                        settings: {
                            slidesToScroll: 3,
                            slidesToShow: 3,
                        },
                    },

                    {
                        breakpoint: 500,
                        settings: {
                            slidesToScroll: 1,
                            slidesToShow: 1,
                            dots: false,
                            arrows: false,
                            scrollLock: true,
                        },
                    },
                    {
                        breakpoint: 100,
                        settings: {
                            slidesToScroll: 1,
                            slidesToShow: 1.1,
                            dots: false,
                            arrows: false,
                            scrollLock: true,
                        },
                    },
                ],
            });
        }
    }
});