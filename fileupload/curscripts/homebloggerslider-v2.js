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
                                slidesToShow: "auto", //'auto',

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