window.addEventListener("load", function() {
    var sliderDIVS = document.getElementsByClassName("blogger-home-container");
    for (var j = 0; j < sliderDIVS.length; j++) {
        if (sliderDIVS[j].querySelector(".blogger-home-glider-ra")) {
            sliderDIVS[j]
                .querySelector(".blogger-home-glider-ra")
                .addEventListener("glider-slide-visible", function(event) {
                    var glider = Glider(this);
                    console.log("Slide Visible %s", event.detail.slide);
                });

            sliderDIVS[j]
                .querySelector(".blogger-home-glider-ra")
                .addEventListener("glider-slide-hidden", function(event) {
                    console.log("Slide Hidden %s", event.detail.slide);
                });

            sliderDIVS[j]
                .querySelector(".blogger-home-glider-ra")
                .addEventListener("glider-refresh", function(event) {
                    console.log("Refresh");
                });

            sliderDIVS[j]
                .querySelector(".blogger-home-glider-ra")
                .addEventListener("glider-loaded", function(event) {
                    console.log("Loaded");
                });

            window._ = new Glider(
                sliderDIVS[j].querySelector(".blogger-home-glider-ra"), {
                    slidesToShow: "auto", //'auto',

                    slidesToScroll: 1,
                    itemWidth: 400,
                    draggable: true,
                    scrollLock: false,
                    dots: "#dots",
                    rewind: false,
                    arrows: {
                        prev: sliderDIVS[j].getElementsByClassName("glider-prev")[0],
                        next: sliderDIVS[j].getElementsByClassName("glider-next")[0],
                    },

                    responsive: [{
                            breakpoint: 800,
                            settings: {
                                slidesToShow: 2.1, //'auto',

                                slidesToScroll: "auto",
                                itemWidth: 400,
                                draggable: false,
                                scrollLock: false,
                                dots: "#dots",
                                rewind: false,
                            },
                        },

                        {
                            breakpoint: 700,
                            settings: {
                                slidesToShow: 2.1, //'auto',

                                slidesToScroll: "auto",

                                draggable: false,
                                scrollLock: false,
                                dots: "#dots",
                                rewind: false,
                            },
                        },

                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 1.1, //'auto',

                                slidesToScroll: "auto",

                                draggable: false,
                                scrollLock: false,
                                dots: "#dots",
                                rewind: false,
                            },
                        },
                        {
                            breakpoint: 100,
                            settings: {
                                slidesToShow: 1.1, //'auto',

                                slidesToScroll: "auto",

                                draggable: false,
                                scrollLock: false,
                                dots: "#dots",
                                rewind: false,
                            },
                        },
                    ],
                }
            );
        }
    }
});

window.addEventListener("load", function() {
    var sliderDIVS = document.getElementsByClassName("template");
    for (var j = 0; j < sliderDIVS.length; j++) {
        if (screen.width < 700) {
            if (sliderDIVS[j].querySelector(".img4a1-main-grid")) {
                sliderDIVS[j]
                    .querySelector(".img4a1-main-grid")
                    .addEventListener("glider-slide-visible", function(event) {
                        var glider = Glider(this);
                        console.log("Slide Visible %s", event.detail.slide);
                    });

                sliderDIVS[j]
                    .querySelector(".img4a1-main-grid")
                    .addEventListener("glider-slide-hidden", function(event) {
                        console.log("Slide Hidden %s", event.detail.slide);
                    });

                sliderDIVS[j]
                    .querySelector(".img4a1-main-grid")
                    .addEventListener("glider-refresh", function(event) {
                        console.log("Refresh");
                    });

                sliderDIVS[j]
                    .querySelector(".img4a1-main-grid")
                    .addEventListener("glider-loaded", function(event) {
                        console.log("Loaded");
                    });

                window._ = new Glider(
                    sliderDIVS[j].querySelector(".img4a1-main-grid"), {
                        slidesToShow: "auto", //'auto',

                        slidesToScroll: 1,
                        itemWidth: 400,
                        draggable: true,
                        scrollLock: false,
                        dots: "#dots",
                        rewind: false,
                        arrows: {
                            prev: sliderDIVS[j].getElementsByClassName("glider-prevd")[0],
                            next: sliderDIVS[j].getElementsByClassName("glider-nextd")[0],
                        },

                        responsive: [{
                                breakpoint: 800,
                                settings: {
                                    slidesToShow: 2.1, //'auto',

                                    slidesToScroll: "auto",
                                    itemWidth: 400,
                                    draggable: false,
                                    scrollLock: false,
                                    dots: "#dots",
                                    rewind: false,
                                },
                            },

                            {
                                breakpoint: 700,
                                settings: {
                                    slidesToShow: 2.1, //'auto',

                                    slidesToScroll: "auto",

                                    draggable: false,
                                    scrollLock: false,
                                    dots: "#dots",
                                    rewind: false,
                                },
                            },

                            {
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: 1.1, //'auto',

                                    slidesToScroll: "auto",

                                    draggable: false,
                                    scrollLock: false,
                                    dots: "#dots",
                                    rewind: false,
                                },
                            },
                            {
                                breakpoint: 100,
                                settings: {
                                    slidesToShow: 1.1, //'auto',

                                    slidesToScroll: "auto",

                                    draggable: false,
                                    scrollLock: false,
                                    dots: "#dots",
                                    rewind: false,
                                },
                            },
                        ],
                    }
                );
            }
        }
    }
});