"use strict";
!function() {
    window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);
    var t = navigator.userAgent.toLowerCase()
      , R = new Date
      , H = $(document)
      , V = $(window)
      , J = $("html")
      , X = $("body")
      , Z = J.hasClass("desktop")
      , K = -1 !== t.indexOf("msie") ? parseInt(t.split("msie")[1], 10) : -1 !== t.indexOf("trident") ? 11 : -1 !== t.indexOf("edge") && 12
      , n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      , Q = {
        bootstrapTooltip: $('[data-toggle="tooltip"]'),
        bootstrapModal: $(".modal"),
        bootstrapTabs: $(".tabs-custom"),
        customToggle: $("[data-custom-toggle]"),
        customWaypoints: $("[data-custom-scroll-to]"),
        captcha: $(".recaptcha"),
        campaignMonitor: $(".campaign-mailform"),
        copyrightYear: $(".copyright-year"),
        checkbox: $('input[type="checkbox"]'),
        bootstrapDateTimePicker: $("[data-time-picker]"),
        lightGallery: $('[data-lightgallery="group"]'),
        lightGalleryItem: $('[data-lightgallery="item"]'),
        lightDynamicGalleryItem: $('[data-lightgallery="dynamic"]'),
        materialParallax: $(".parallax-container"),
        mailchimp: $(".mailchimp-mailform"),
        popover: $('[data-toggle="popover"]'),
        preloader: $(".preloader"),
        rdNavbar: $(".rd-navbar"),
        rdMailForm: $(".rd-mailform"),
        rdInputLabel: $(".form-label"),
        regula: $("[data-constraints]"),
        radio: $('input[type="radio"]'),
        search: $(".rd-search"),
        statefulButton: $(".btn-stateful"),
        viewAnimate: $(".view-animate"),
        wow: $(".wow"),
        maps: $(".google-map-container"),
        selectFilter: $("select"),
        slick: $(".slick-slider"),
        swiper: document.querySelectorAll(".swiper-container"),
        counter: document.querySelectorAll(".counter"),
        progressLinear: document.querySelectorAll(".progress-linear"),
        progressCircle: document.querySelectorAll(".progress-circle"),
        countdown: document.querySelectorAll(".countdown")
    };
    function _(t) {
        return t.offset().top + t.outerHeight() >= V.scrollTop() && t.offset().top <= V.scrollTop() + V.height()
    }
    V.on("load", function() {
        if (Q.preloader.length && pageTransition({
            target: document.querySelector(".page"),
            delay: 0,
            duration: 500,
            classIn: "fadeIn",
            classOut: "fadeOut",
            classActive: "animated",
            conditions: function(t, a) {
                return a && !/(\#|javascript:void\(0\)|callto:|tel:|mailto:|:\/\/)/.test(a) && !t.currentTarget.hasAttribute("data-lightgallery")
            },
            onTransitionStart: function(t) {
                setTimeout(function() {
                    Q.preloader.removeClass("loaded")
                }, .75 * t.duration)
            },
            onReady: function() {
                Q.preloader.addClass("loaded"),
                !0
            }
        }),
        Q.counter)
            for (var t = 0; t < Q.counter.length; t++) {
                var a = Q.counter[t]
                  , e = aCounter({
                    node: a,
                    duration: a.getAttribute("data-duration") || 1e3
                })
                  , r = function() {
                    Util.inViewport(this) && !this.classList.contains("animated-first") && (this.counter.run(),
                    this.classList.add("animated-first"))
                }
                .bind(a);
                (function() {
                    this.counter.params.to = parseInt(this.textContent, 10),
                    this.counter.run()
                }
                ).bind(a);
                r(),
                window.addEventListener("scroll", r)
            }
        if (Q.progressLinear)
            for (t = 0; t < Q.progressLinear.length; t++) {
                var o = Q.progressLinear[t];
                (e = aCounter({
                    node: o.querySelector(".progress-linear-counter"),
                    duration: o.getAttribute("data-duration") || 1e3,
                    onStart: function() {
                        this.custom.bar.style.width = this.params.to + "%"
                    }
                })).custom = {
                    container: o,
                    bar: o.querySelector(".progress-linear-bar"),
                    onScroll: function() {
                        Util.inViewport(this.custom.container) && !this.custom.container.classList.contains("animated") && (this.run(),
                        this.custom.container.classList.add("animated"))
                    }
                    .bind(e),
                    onBlur: function() {
                        this.params.to = parseInt(this.params.node.textContent, 10),
                        this.run()
                    }
                    .bind(e)
                },
                e.custom.onScroll(),
                document.addEventListener("scroll", e.custom.onScroll)
            }
        if (Q.progressCircle)
            for (t = 0; t < Q.progressCircle.length; t++) {
                o = Q.progressCircle[t];
                (e = aCounter({
                    node: o.querySelector(".progress-circle-counter"),
                    duration: 500,
                    onUpdate: function(t) {
                        this.custom.bar.render(3.6 * t)
                    }
                })).params.onComplete = e.params.onUpdate,
                e.custom = {
                    container: o,
                    bar: aProgressCircle({
                        node: o.querySelector(".progress-circle-bar")
                    }),
                    onScroll: function() {
                        Util.inViewport(this.custom.container) && !this.custom.container.classList.contains("animated") && (this.run(),
                        this.custom.container.classList.add("animated"))
                    }
                    .bind(e),
                    onBlur: function() {
                        this.params.to = parseInt(this.params.node.textContent, 10),
                        this.run()
                    }
                    .bind(e)
                },
                e.custom.onScroll(),
                window.addEventListener("scroll", e.custom.onScroll)
            }
        if (Q.materialParallax.length)
            if (K || n)
                for (t = 0; t < Q.materialParallax.length; t++) {
                    var i = $(Q.materialParallax[t]);
                    i.addClass("parallax-disabled"),
                    i.css({
                        "background-image": "url(" + i.data("parallax-img") + ")"
                    })
                }
            else
                Q.materialParallax.parallax()
    }),
    $(function() {
        function t(t) {
            var a = t.$wrapperEl[0].children[t.activeIndex];
            t.realPrevious = Array.prototype.indexOf.call(a.parentNode.children, a)
        }
        function a(t) {
            for (var a = t.el.querySelectorAll("[data-slide-bg]"), e = 0; e < a.length; e++) {
                var r = a[e];
                r.style.backgroundImage = "url(" + r.getAttribute("data-slide-bg") + ")"
            }
        }
        function e(t) {
            function r(a) {
                return function() {
                    var t;
                    (t = a.getAttribute("data-caption-duration")) && (a.style.animationDuration = t + "ms"),
                    a.classList.remove("not-animated"),
                    a.classList.add(a.getAttribute("data-caption-animate")),
                    a.classList.add("animated")
                }
            }
            function a(t) {
                for (var a = 0; a < t.length; a++) {
                    var e = t[a];
                    e.classList.remove("animated"),
                    e.classList.remove(e.getAttribute("data-caption-animate")),
                    e.classList.add("not-animated")
                }
            }
            function e(t) {
                for (var a = 0; a < t.length; a++) {
                    var e = t[a];
                    e.getAttribute("data-caption-delay") ? setTimeout(r(e), Number(e.getAttribute("data-caption-delay"))) : r(e)()
                }
            }
            t.params.caption = {
                animationEvent: "slideChangeTransitionEnd"
            },
            a(t.$wrapperEl[0].querySelectorAll("[data-caption-animate]")),
            e(t.$wrapperEl[0].children[t.activeIndex].querySelectorAll("[data-caption-animate]")),
            "slideChangeTransitionEnd" === t.params.caption.animationEvent ? t.on(t.params.caption.animationEvent, function() {
                a(t.$wrapperEl[0].children[t.previousIndex].querySelectorAll("[data-caption-animate]")),
                e(t.$wrapperEl[0].children[t.activeIndex].querySelectorAll("[data-caption-animate]"))
            }) : (t.on("slideChangeTransitionEnd", function() {
                a(t.$wrapperEl[0].children[t.previousIndex].querySelectorAll("[data-caption-animate]"))
            }),
            t.on(t.params.caption.animationEvent, function() {
                e(t.$wrapperEl[0].children[t.activeIndex].querySelectorAll("[data-caption-animate]"))
            }))
        }
        function r(t) {
            var a = location.href.split("/");
            a = a[a.length - 1],
            t.forEach(function(t) {
                a === t.getAttribute("href") && t.classList.add("active")
            })
        }
        function d(t, a) {
            var e, r = 0;
            if (t.length) {
                for (var o = 0; o < t.length; o++) {
                    var i = $(t[o]);
                    if ((e = i.regula("validate")).length)
                        for (O = 0; O < e.length; O++)
                            r++,
                            i.siblings(".form-validation").text(e[O].message).parent().addClass("has-error");
                    else
                        i.siblings(".form-validation").text("").parent().removeClass("has-error")
                }
                return a && a.length ? n(a) && 0 === r : 0 === r
            }
            return !0
        }
        function n(t) {
            return 0 !== t.find(".g-recaptcha-response").val().length || (t.siblings(".form-validation").html("Please, prove that you are not robot.").addClass("active"),
            t.closest(".form-wrap").addClass("has-error"),
            t.on("propertychange", function() {
                var t = $(this);
                0 < t.find(".g-recaptcha-response").val().length && (t.closest(".form-wrap").removeClass("has-error"),
                t.siblings(".form-validation").removeClass("active").html(""),
                t.off("propertychange"))
            }),
            !1)
        }
        function o(t) {
            Q.bootstrapTooltip.tooltip("dispose"),
            window.innerWidth < 576 ? Q.bootstrapTooltip.tooltip({
                placement: "bottom"
            }) : Q.bootstrapTooltip.tooltip({
                placement: t
            })
        }
        function i(t, a) {
            $(t).lightGallery({
                thumbnail: "false" !== $(t).attr("data-lg-thumbnail"),
                selector: "[data-lightgallery='item']",
                autoplay: "true" === $(t).attr("data-lg-autoplay"),
                pause: parseInt($(t).attr("data-lg-autoplay-delay")) || 5e3,
                addClass: a,
                mode: $(t).attr("data-lg-animation") || "lg-slide",
                loop: "false" !== $(t).attr("data-lg-loop")
            })
        }
        function s(t, a) {
            $(t).on("click", function() {
                $(t).lightGallery({
                    thumbnail: "false" !== $(t).attr("data-lg-thumbnail"),
                    selector: "[data-lightgallery='item']",
                    autoplay: "true" === $(t).attr("data-lg-autoplay"),
                    pause: parseInt($(t).attr("data-lg-autoplay-delay")) || 5e3,
                    addClass: a,
                    mode: $(t).attr("data-lg-animation") || "lg-slide",
                    loop: "false" !== $(t).attr("data-lg-loop"),
                    dynamic: !0,
                    dynamicEl: JSON.parse($(t).attr("data-lg-dynamic-elements")) || []
                })
            })
        }
        function p(a, o, i, n) {
            var t = {};
            try {
                t = JSON.parse(a),
                n(new google.maps.LatLng(t.lat,t.lng), o, i)
            } catch (t) {
                i.geocoder.geocode({
                    address: a
                }, function(t, a) {
                    if (a === google.maps.GeocoderStatus.OK) {
                        var e = t[0].geometry.location.lat()
                          , r = t[0].geometry.location.lng();
                        n(new google.maps.LatLng(parseFloat(e),parseFloat(r)), o, i)
                    }
                })
            }
        }
        if (window.onloadCaptchaCallback = function() {
            for (var t = 0; t < Q.captcha.length; t++) {
                var a = $(Q.captcha[t])
                  , e = function() {
                    var t, a, e, r = this.querySelector("iframe"), o = this.firstElementChild, i = o.firstElementChild;
                    i.style.transform = "",
                    o.style.height = "auto",
                    o.style.width = "auto",
                    t = this.getBoundingClientRect(),
                    a = r.getBoundingClientRect(),
                    (e = t.width / a.width) < 1 && (i.style.transform = "scale(" + e + ")",
                    o.style.height = a.height * e + "px",
                    o.style.width = a.width * e + "px")
                }
                .bind(Q.captcha[t]);
                grecaptcha.render(a.attr("id"), {
                    sitekey: a.attr("data-sitekey"),
                    size: a.attr("data-size") ? a.attr("data-size") : "normal",
                    theme: a.attr("data-theme") ? a.attr("data-theme") : "light",
                    callback: function() {
                        $(".recaptcha").trigger("propertychange")
                    }
                }),
                a.after("<span class='form-validation'></span>"),
                Q.captcha[t].hasAttribute("data-auto-size") && (e(),
                window.addEventListener("resize", e))
            }
        }
        ,
        Q.captcha.length && $.getScript("//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en"),
        navigator.platform.match(/(Mac)/i) && J.addClass("mac-os"),
        K && (12 === K && J.addClass("ie-edge"),
        11 === K && J.addClass("ie-11"),
        K < 10 && J.addClass("lt-ie-10"),
        K < 11 && J.addClass("ie-10")),
        Q.bootstrapTooltip.length) {
            var l = Q.bootstrapTooltip.attr("data-placement");
            o(l),
            V.on("resize orientationchange", function() {
                o(l)
            })
        }
        if (Q.bootstrapModal.length)
            for (var c = 0; c < Q.bootstrapModal.length; c++) {
                var u = $(Q.bootstrapModal[c]);
                u.on("hidden.bs.modal", $.proxy(function() {
                    var t = $(this)
                      , a = t.find("video")
                      , e = t.find("iframe");
                    if (a.length && a[0].pause(),
                    e.length) {
                        var r = e.attr("src");
                        e.attr("src", "").attr("src", r)
                    }
                }, u))
            }
        if (Q.popover.length && (window.innerWidth < 767 && Q.popover.attr("data-placement", "bottom"),
        Q.popover.popover()),
        Q.bootstrapTabs.length)
            for (c = 0; c < Q.bootstrapTabs.length; c++) {
                var g = $(Q.bootstrapTabs[c]);
                g.find(".slick-slider").length && g.find(".tabs-custom-list > li > a").on("click", $.proxy(function() {
                    var t = $(this);
                    setTimeout(function() {
                        t.find(".tab-content .tab-pane.active .slick-slider").slick("setPosition")
                    }, 300)
                }, g));
                for (var m = Q.bootstrapTabs[c].querySelectorAll(".nav li a"), h = 0; h < m.length; h++) {
                    var f = m[h];
                    0 === h && (f.parentElement.classList.remove("active"),
                    $(f).tab("show")),
                    f.addEventListener("click", function(t) {
                        t.preventDefault(),
                        $(this).tab("show")
                    })
                }
            }
        var v, b;
        if (Q.statefulButton.length && $(Q.statefulButton).on("click", function() {
            var t = $(this).button("loading");
            setTimeout(function() {
                t.button("reset")
            }, 2e3)
        }),
        Q.customWaypoints.length)
            for (c = 0; c < Q.customWaypoints.length; c++) {
                (Y = $(Q.customWaypoints[c])).on("click", function(t) {
                    t.preventDefault(),
                    $("body, html").stop().animate({
                        scrollTop: $("#" + $(this).attr("data-custom-scroll-to")).offset().top
                    }, 1e3, function() {
                        V.trigger("resize")
                    })
                })
            }
        if (Q.copyrightYear.length && Q.copyrightYear.text(R.getFullYear()),
        Q.maps.length && function(t, a) {
            function e() {
                !t.hasClass("lazy-loaded") && _(t) && (a.call(t),
                t.addClass("lazy-loaded"))
            }
            e(),
            V.on("scroll", e)
        }(Q.maps, function() {
            for (var t, a = 0; a < Q.maps.length; a++)
                if (Q.maps[a].hasAttribute("data-key")) {
                    t = Q.maps[a].getAttribute("data-key");
                    break
                }
            $.getScript("//maps.google.com/maps/api/js?" + (t ? "key=" + t + "&" : "") + "sensor=false&libraries=geometry,places&v=quarterly", function() {
                var e = document.getElementsByTagName("head")[0]
                  , r = e.insertBefore;
                e.insertBefore = function(t, a) {
                    t.href && -1 !== t.href.indexOf("//fonts.googleapis.com/css?family=Roboto") || r.call(e, t, a)
                }
                ;
                for (var t = new google.maps.Geocoder, a = 0; a < Q.maps.length; a++) {
                    var o = parseInt(Q.maps[a].getAttribute("data-zoom"), 10) || 11
                      , i = Q.maps[a].hasAttribute("data-styles") ? JSON.parse(Q.maps[a].getAttribute("data-styles")) : []
                      , n = Q.maps[a].getAttribute("data-center") || "New York"
                      , l = new google.maps.Map(Q.maps[a].querySelectorAll(".google-map")[0],{
                        zoom: o,
                        styles: i,
                        scrollwheel: !1,
                        center: {
                            lat: 0,
                            lng: 0
                        }
                    });
                    Q.maps[a].map = l,
                    Q.maps[a].geocoder = t,
                    Q.maps[a].keySupported = !0,
                    Q.maps[a].google = google,
                    p(n, null, Q.maps[a], function(t, a, e) {
                        e.map.setCenter(t)
                    });
                    var s = Q.maps[a].querySelectorAll(".google-map-markers li");
                    if (s.length)
                        for (var c = [], d = 0; d < s.length; d++) {
                            var u = s[d];
                            p(u.getAttribute("data-location"), u, Q.maps[a], function(t, a, e) {
                                var r = a.getAttribute("data-icon") || e.getAttribute("data-icon")
                                  , o = (a.getAttribute("data-icon-active") || e.getAttribute("data-icon-active"),
                                a.getAttribute("data-description") || "")
                                  , i = new google.maps.InfoWindow({
                                    content: o
                                });
                                a.infoWindow = i;
                                var n = {
                                    position: t,
                                    map: e.map
                                };
                                r && (n.icon = r);
                                var s = new google.maps.Marker(n);
                                a.gmarker = s,
                                c.push({
                                    markerElement: a,
                                    infoWindow: i
                                }),
                                s.isActive = !1,
                                google.maps.event.addListener(i, "closeclick", function(t, a) {
                                    var e;
                                    t.gmarker.isActive = !1,
                                    e = t.getAttribute("data-icon") || a.getAttribute("data-icon"),
                                    t.gmarker.setIcon(e)
                                }
                                .bind(this, a, e)),
                                google.maps.event.addListener(s, "click", function(t, a) {
                                    if (0 !== t.infoWindow.getContent().length) {
                                        for (var e, r, o = t.gmarker, i = 0; i < c.length; i++) {
                                            var n;
                                            c[i].markerElement === t && (r = c[i].infoWindow),
                                            (e = c[i].markerElement.gmarker).isActive && c[i].markerElement !== t && (e.isActive = !1,
                                            n = c[i].markerElement.getAttribute("data-icon") || a.getAttribute("data-icon"),
                                            e.setIcon(n),
                                            c[i].infoWindow.close())
                                        }
                                        o.isActive = !o.isActive,
                                        o.isActive ? ((n = t.getAttribute("data-icon-active") || a.getAttribute("data-icon-active")) && o.setIcon(n),
                                        r.open(l, s)) : ((n = t.getAttribute("data-icon") || a.getAttribute("data-icon")) && o.setIcon(n),
                                        r.close())
                                    }
                                }
                                .bind(this, a, e))
                            })
                        }
                }
            })
        }),
        Q.radio.length)
            for (c = 0; c < Q.radio.length; c++)
                $(Q.radio[c]).addClass("radio-custom").after("<span class='radio-custom-dummy'></span>");
        if (Q.checkbox.length)
            for (c = 0; c < Q.checkbox.length; c++)
                $(Q.checkbox[c]).addClass("checkbox-custom").after("<span class='checkbox-custom-dummy'></span>");
        if (Q.selectFilter.length)
            for (c = 0; c < Q.selectFilter.length; c++) {
                var y = $(Q.selectFilter[c]);
                y.select2({
                    dropdownParent: $(".page"),
                    placeholder: y.attr("data-placeholder") || null,
                    minimumResultsForSearch: y.attr("data-minimum-results-search") || 1 / 0,
                    containerCssClass: y.attr("data-container-class") || null,
                    dropdownCssClass: y.attr("data-dropdown-class") || null
                })
            }
        if (Q.bootstrapDateTimePicker.length)
            for (c = 0; c < Q.bootstrapDateTimePicker.length; c++) {
                var w = $(Q.bootstrapDateTimePicker[c]);
                (q = {
                    date: "date" === w.attr("data-time-picker"),
                    time: "time" === w.attr("data-time-picker"),
                    shortTime: !0
                }).date ? (q.format = "MM/DD/YY",
                q.minDate = new Date) : q.time ? q.format = "HH:mm" : q.format = "dddd DD MMMM YYYY - HH:mm",
                w.bootstrapMaterialDatePicker(q)
            }
        if (Z && $().UItoTop({
            easingType: "easeOutQuad",
            containerClass: "ui-to-top fa fa-angle-up"
        }),
        Q.rdNavbar.length) {
            var C = Q.rdNavbar
              , k = {
                "-": 0,
                "-sm-": 576,
                "-md-": 768,
                "-lg-": 992,
                "-xl-": 1200,
                "-xxl-": 1600
            }
              , A = {};
            for (var x in k) {
                var S = A[k[x]] = {};
                C.attr("data" + x + "layout") && (S.layout = C.attr("data" + x + "layout")),
                C.attr("data" + x + "device-layout") && (S.deviceLayout = C.attr("data" + x + "device-layout")),
                C.attr("data" + x + "hover-on") && (S.focusOnHover = "true" === C.attr("data" + x + "hover-on")),
                C.attr("data" + x + "auto-height") && (S.autoHeight = "true" === C.attr("data" + x + "auto-height")),
                C.attr("data" + x + "stick-up-offset") && (S.stickUpOffset = C.attr("data" + x + "stick-up-offset")),
                C.attr("data" + x + "stick-up") ? S.stickUp = "true" === C.attr("data" + x + "stick-up") : C.attr("data" + x + "stick-up") && (S.stickUp = "true" === C.attr("data" + x + "stick-up"))
            }
            Q.rdNavbar.RDNavbar({
                anchorNav: !0,
                stickUpClone: !!Q.rdNavbar.attr("data-stick-up-clone") && "true" === Q.rdNavbar.attr("data-stick-up-clone"),
                responsive: A,
                callbacks: {
                    onStuck: function() {
                        var t = this.$element.find(".rd-search input");
                        t && t.val("").trigger("propertychange")
                    },
                    onDropdownOver: function() {
                        return !0
                    },
                    onUnstuck: function() {
                        if (null !== this.$clone) {
                            var t = this.$clone.find(".rd-search input");
                            t && (t.val("").trigger("propertychange"),
                            t.trigger("blur"))
                        }
                    }
                }
            });
            var T = document.querySelectorAll(".rd-dropdown-link")
              , I = document.querySelectorAll(".rd-megamenu-list-link");
            r(T),
            r(I);
            var M = 0;
            V.scroll(function(t) {
                var a = $(this).scrollTop();
                M < a ? (Q.rdNavbar.addClass("scroll-bottom"),
                Q.rdNavbar.addClass("scroll-static")) : Q.rdNavbar.removeClass("scroll-bottom"),
                0 === a && Q.rdNavbar.removeClass("scroll-static"),
                M = a
            })
        }
        if (V.on("re"),
        Q.search.length && Q.search.submit(function() {
            return !1
        }),
        Q.viewAnimate.length)
            for (c = 0; c < Q.viewAnimate.length; c++) {
                var E = $(Q.viewAnimate[c]).not(".active");
                H.on("scroll", $.proxy(function() {
                    _(this) && this.addClass("active")
                }, E)).trigger("scroll")
            }
        if (Q.swiper.length)
            for (c = 0; c < Q.swiper.length; c++) {
                var L = Q.swiper[c]
                  , q = {
                    loop: "true" === L.getAttribute("data-loop") || !1,
                    effect: K ? "slide" : L.getAttribute("data-effect") || "slide",
                    direction: L.getAttribute("data-direction") || "horizontal",
                    speed: L.getAttribute("data-speed") ? Number(L.getAttribute("data-speed")) : 1e3,
                    allowTouchMove: !Z,
                    preventIntercationOnTransition: !0,
                    runCallbacksOnInit: !1,
                    watchSlidesProgress: !0,
                    separateCaptions: "true" === L.getAttribute("data-separate-captions") || !1
                };
                L.getAttribute("data-autoplay") && (q.autoplay = {
                    delay: Number(L.getAttribute("data-autoplay")) || 3e3,
                    stopOnLastSlide: !1,
                    disableOnInteraction: !0,
                    reverseDirection: !1
                }),
                "true" === L.getAttribute("data-keyboard") && (q.keyboard = {
                    enabled: "true" === L.getAttribute("data-keyboard"),
                    onlyInViewport: !0
                }),
                "true" === L.getAttribute("data-mousewheel") && (q.mousewheel = {
                    releaseOnEdges: !0,
                    sensitivity: .1
                }),
                L.querySelector(".swiper-button-next, .swiper-button-prev") && (q.navigation = {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }),
                L.querySelector(".swiper-pagination") && (q.pagination = {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: !0
                }),
                L.querySelector(".swiper-scrollbar") && (q.scrollbar = {
                    el: ".swiper-scrollbar",
                    hide: !0,
                    draggable: !0
                }),
                q.on = {
                    init: function() {
                        a(this),
                        t(this),
                        e(this),
                        this.on("slideChangeTransitionEnd", function() {
                            t(this)
                        })
                    }
                },
                $("[data-custom-effect='parallax']").length && (q.on = {
                    init: function() {
                        a(this),
                        t(this),
                        e(this),
                        this.on("slideChangeTransitionEnd", function() {
                            t(this)
                        })
                    },
                    slideChangeTransitionStart: function() {
                        for (var t = 0; t < this.slides.length; t++)
                            this.slides[t].querySelector("[data-caption-animate]").style.transform = "translateX(-30px)",
                            this.slides[t].querySelector("[data-caption-animate]").style.transition = ".3s ease-out all"
                    },
                    slideChangeTransitionEnd: function() {
                        for (var t = 0; t < this.slides.length; t++)
                            this.slides[t].querySelector("[data-caption-animate]").style.transform = "translateX(0)"
                    },
                    progress: function() {
                        for (var t = 0; t < this.slides.length; t++) {
                            var a = this.slides[t].progress * (.5 * this.width);
                            this.slides[t].querySelector(".slide-bgimg").style.transform = "translateX(" + a + "px)"
                        }
                    },
                    touchStart: function() {
                        for (var t = 0; t < this.slides.length; t++)
                            this.slides[t].style.transition = ""
                    },
                    setTransition: function(t) {
                        for (var a = 0; a < this.slides.length; a++)
                            this.slides[a].style.transition = t + "ms",
                            this.slides[a].querySelector(".slide-bgimg").style.transition = t + "ms"
                    }
                }),
                new Swiper(Q.swiper[c],q)
            }
        if (Q.slick.length)
            for (c = 0; c < Q.slick.length; c++) {
                var P = $(Q.slick[c]);
                P.on("init", function(t) {
                    i($('[data-lightgallery="group"]'), "lightGallery-in-carousel"),
                    i($('[data-lightgallery="item"]'), "lightGallery-in-carousel")
                }),
                P.slick({
                    slidesToScroll: parseInt(P.attr("data-slide-to-scroll"), 10) || 1,
                    asNavFor: P.attr("data-for") || !1,
                    dots: "true" === P.attr("data-dots"),
                    infinite: "true" === P.attr("data-loop"),
                    focusOnSelect: !0,
                    arrows: "true" === P.attr("data-arrows"),
                    swipe: "true" === P.attr("data-swipe"),
                    autoplay: "true" === P.attr("data-autoplay"),
                    vertical: "true" === P.attr("data-vertical"),
                    centerMode: "true" === P.attr("data-center-mode"),
                    centerPadding: P.attr("data-center-padding") ? P.attr("data-center-padding") : "0.50",
                    mobileFirst: !0,
                    responsive: [{
                        breakpoint: 0,
                        settings: {
                            slidesToShow: parseInt(P.attr("data-items"), 10) || 1
                        }
                    }, {
                        breakpoint: 479,
                        settings: {
                            slidesToShow: parseInt(P.attr("data-xs-items"), 10) || 1
                        }
                    }, {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: parseInt(P.attr("data-sm-items"), 10) || 1
                        }
                    }, {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: parseInt(P.attr("data-md-items"), 10) || 1
                        }
                    }, {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: parseInt(P.attr("data-lg-items"), 10) || 1
                        }
                    }, {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: parseInt(P.attr("data-xl-items"), 10) || 1
                        }
                    }, {
                        breakpoint: 1599,
                        settings: {
                            slidesToShow: parseInt(P.attr("data-xxl-items"), 10) || 1
                        }
                    }]
                }).on("afterChange", function(t, a, e, r) {
                    var o = $(this).attr("data-child");
                    o && ($(o + " .slick-slide").removeClass("slick-current"),
                    $(o + " .slick-slide").eq(e).addClass("slick-current"))
                })
            }
        if (J.hasClass("wow-animation") && Q.wow.length && Z && (new WOW).init(),
        Q.rdInputLabel.length && Q.rdInputLabel.RDInputLabel(),
        Q.regula.length && function(t) {
            regula.custom({
                name: "PhoneNumber",
                defaultMessage: "Invalid phone number format",
                validator: function() {
                    return "" === this.value || /^(\+\d)?[0-9\-\(\) ]{5,}$/i.test(this.value)
                }
            }),
            regula.custom({
                name: "City",
                defaultMessage: "Invalid city or state format",
                validator: function() {
                    return "" === this.value || /([A-Za-z]+(?: [A-Za-z]+)*),? ([A-Za-z]{2})/i.test(this.value)
                }
            });
            for (var r = 0; r < t.length; r++) {
                var a = $(t[r]);
                a.addClass("form-control-has-validation").after("<span class='form-validation'></span>"),
                a.parent().find(".form-validation").is(":last-child") && a.addClass("form-control-last-child")
            }
            t.on("input change propertychange blur", function(t) {
                var a, e = $(this);
                if (("blur" === t.type || e.parent().hasClass("has-error")) && !e.parents(".rd-mailform").hasClass("success"))
                    if ((a = e.regula("validate")).length)
                        for (r = 0; r < a.length; r++)
                            e.siblings(".form-validation").text(a[r].message).parent().addClass("has-error");
                    else
                        e.siblings(".form-validation").text("").parent().removeClass("has-error")
            }).regula("bind");
            var e = [{
                type: regula.Constraint.Required,
                newMessage: "The text field is required."
            }, {
                type: regula.Constraint.Email,
                newMessage: "The email is not a valid email."
            }, {
                type: regula.Constraint.Numeric,
                newMessage: "Only numbers are required"
            }, {
                type: regula.Constraint.Selected,
                newMessage: "Please choose an option."
            }];
            for (r = 0; r < e.length; r++) {
                var o = e[r];
                regula.override({
                    constraintType: o.type,
                    defaultMessage: o.newMessage
                })
            }
        }(Q.regula),
        Q.mailchimp.length)
            for (c = 0; c < Q.mailchimp.length; c++) {
                var F = $(Q.mailchimp[c])
                  , D = F.find('input[type="email"]');
                F.attr("novalidate", "true"),
                D.attr("name", "EMAIL"),
                F.on("submit", $.proxy(function(e, t) {
                    t.preventDefault();
                    var n = this
                      , a = {}
                      , r = n.attr("action").replace("/post?", "/post-json?").concat("&c=?")
                      , o = n.serializeArray()
                      , i = $("#" + n.attr("data-form-output"));
                    for (c = 0; c < o.length; c++)
                        a[o[c].name] = o[c].value;
                    return $.ajax({
                        data: a,
                        url: r,
                        dataType: "jsonp",
                        error: function(t, a) {
                            i.html("Server error: " + a),
                            setTimeout(function() {
                                i.removeClass("active")
                            }, 4e3)
                        },
                        success: function(t) {
                            i.html(t.msg).addClass("active"),
                            e[0].value = "";
                            var a = $('[for="' + e.attr("id") + '"]');
                            a.length && a.removeClass("focus not-empty"),
                            setTimeout(function() {
                                i.removeClass("active")
                            }, 6e3)
                        },
                        beforeSend: function(t) {
                            if (!function() {
                                var t, a = 0, e = n.find("[data-constraints]");
                                if (e.length) {
                                    for (var r = 0; r < e.length; r++) {
                                        var o = $(e[r]);
                                        if ((t = o.regula("validate")).length)
                                            for (var i = 0; i < t.length; i++)
                                                a++,
                                                o.siblings(".form-validation").text(t[i].message).parent().addClass("has-error");
                                        else
                                            o.siblings(".form-validation").text("").parent().removeClass("has-error")
                                    }
                                    return 0 === a
                                }
                                return !0
                            }())
                                return !1;
                            i.html("Submitting...").addClass("active")
                        }
                    }),
                    !1
                }, F, D))
            }
        if (Q.campaignMonitor.length)
            for (c = 0; c < Q.campaignMonitor.length; c++) {
                var N = $(Q.campaignMonitor[c]);
                N.on("submit", $.proxy(function(t) {
                    var a = {}
                      , e = this.attr("action")
                      , r = this.serializeArray()
                      , o = $("#" + Q.campaignMonitor.attr("data-form-output"))
                      , i = $(this);
                    for (s = 0; s < r.length; s++)
                        a[r[s].name] = r[s].value;
                    $.ajax({
                        data: a,
                        url: e,
                        dataType: "jsonp",
                        error: function(t, a) {
                            o.html("Server error: " + a),
                            setTimeout(function() {
                                o.removeClass("active")
                            }, 4e3)
                        },
                        success: function(t) {
                            o.html(t.Message).addClass("active"),
                            setTimeout(function() {
                                o.removeClass("active")
                            }, 6e3)
                        },
                        beforeSend: function(t) {
                            if (!d(i.find("[data-constraints]")))
                                return !1;
                            o.html("Submitting...").addClass("active")
                        }
                    });
                    for (var n = i[0].getElementsByTagName("input"), s = 0; s < n.length; s++) {
                        n[s].value = "";
                        var l = document.querySelector('[for="' + n[s].getAttribute("id") + '"]');
                        l && l.classList.remove("focus", "not-empty")
                    }
                    return !1
                }, N))
            }
        if (Q.rdMailForm.length) {
            var O, G = {
                MF000: "Successfully sent!",
                MF001: "Recipients are not set!",
                MF002: "Form will not work locally!",
                MF003: "Please, define email field in your form!",
                MF004: "Please, define type of your form!",
                MF254: "Something went wrong with PHPMailer!",
                MF255: "Aw, snap! Something went wrong."
            };
            for (c = 0; c < Q.rdMailForm.length; c++) {
                var z = $(Q.rdMailForm[c])
                  , W = !1;
                z.attr("novalidate", "novalidate").ajaxForm({
                    data: {
                        "form-type": z.attr("data-form-type") || "contact",
                        counter: c
                    },
                    beforeSubmit: function(t, a, e) {
                        var r = $(Q.rdMailForm[this.extraData.counter])
                          , o = r.find("[data-constraints]")
                          , i = $("#" + r.attr("data-form-output"))
                          , n = r.find(".recaptcha")
                          , s = !0;
                        if (i.removeClass("active error success"),
                        !d(o, n))
                            return !1;
                        if (n.length) {
                            var l = n.find(".g-recaptcha-response").val()
                              , c = {
                                CPT001: 'Please, setup you "site key" and "secret key" of reCaptcha',
                                CPT002: "Something wrong with google reCaptcha"
                            };
                            W = !0,
                            $.ajax({
                                method: "POST",
                                url: "bat/reCaptcha.php",
                                data: {
                                    "g-recaptcha-response": l
                                },
                                async: !1
                            }).done(function(t) {
                                "CPT000" !== t && (i.hasClass("snackbars") ? (i.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + c[t] + "</span></p>"),
                                setTimeout(function() {
                                    i.removeClass("active")
                                }, 3500),
                                s = !1) : i.html(c[t]),
                                i.addClass("active"))
                            })
                        }
                        if (!s)
                            return !1;
                        r.addClass("form-in-process"),
                        i.hasClass("snackbars") && (i.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>'),
                        i.addClass("active"))
                    },
                    error: function(t) {
                        var a = $("#" + $(Q.rdMailForm[this.extraData.counter]).attr("data-form-output"))
                          , e = $(Q.rdMailForm[this.extraData.counter]);
                        a.text(G[t]),
                        e.removeClass("form-in-process"),
                        W && grecaptcha.reset()
                    },
                    success: function(t) {
                        var a = $(Q.rdMailForm[this.extraData.counter])
                          , e = $("#" + a.attr("data-form-output"))
                          , r = a.find("select");
                        a.addClass("success").removeClass("form-in-process"),
                        W && grecaptcha.reset(),
                        t = 5 === t.length ? t : "MF255",
                        e.text(G[t]),
                        "MF000" === t ? e.hasClass("snackbars") ? e.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + G[t] + "</span></p>") : e.addClass("active success") : e.hasClass("snackbars") ? e.html(' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>' + G[t] + "</span></p>") : e.addClass("active error"),
                        a.clearForm(),
                        r.length && r.select2("val", ""),
                        a.find("input, textarea").trigger("blur"),
                        setTimeout(function() {
                            e.removeClass("active error success"),
                            a.removeClass("success")
                        }, 3500)
                    }
                })
            }
        }
        if (Q.lightGallery.length)
            for (c = 0; c < Q.lightGallery.length; c++)
                i(Q.lightGallery[c]);
        if (Q.lightGalleryItem.length) {
            for (var B = [], U = 0; U < Q.lightGalleryItem.length; U++)
                $(Q.lightGalleryItem[U]).parents(".owl-carousel").length || $(Q.lightGalleryItem[U]).parents(".swiper-slider").length || $(Q.lightGalleryItem[U]).parents(".slick-slider").length || B.push(Q.lightGalleryItem[U]);
            Q.lightGalleryItem = B;
            for (c = 0; c < Q.lightGalleryItem.length; c++)
                v = Q.lightGalleryItem[c],
                b = void 0,
                $(v).lightGallery({
                    selector: "this",
                    addClass: b,
                    counter: !1,
                    youtubePlayerParams: {
                        modestbranding: 1,
                        showinfo: 0,
                        rel: 0,
                        controls: 0
                    },
                    vimeoPlayerParams: {
                        byline: 0,
                        portrait: 0
                    }
                })
        }
        if (Q.lightDynamicGalleryItem.length)
            for (c = 0; c < Q.lightDynamicGalleryItem.length; c++)
                s(Q.lightDynamicGalleryItem[c]);
        if (Q.customToggle.length)
            for (c = 0; c < Q.customToggle.length; c++) {
                var Y;
                (Y = $(Q.customToggle[c])).on("click", $.proxy(function(t) {
                    t.preventDefault();
                    var a = $(this);
                    $(a.attr("data-custom-toggle")).add(this).toggleClass("active")
                }, Y)),
                "true" === Y.attr("data-custom-toggle-hide-on-blur") && X.on("click", Y, function(t) {
                    t.target !== t.data[0] && $(t.data.attr("data-custom-toggle")).find($(t.target)).length && 0 === t.data.find($(t.target)).length && $(t.data.attr("data-custom-toggle")).add(t.data[0]).removeClass("active")
                }),
                "true" === Y.attr("data-custom-toggle-disable-on-blur") && X.on("click", Y, function(t) {
                    t.target !== t.data[0] && 0 === $(t.data.attr("data-custom-toggle")).find($(t.target)).length && 0 === t.data.find($(t.target)).length && $(t.data.attr("data-custom-toggle")).add(t.data[0]).removeClass("active")
                })
            }
        if (Q.countdown.length)
            for (c = 0; c < Q.countdown.length; c++) {
                var j = Q.countdown[c];
                aCountdown({
                    node: j,
                    from: j.getAttribute("data-from"),
                    to: j.getAttribute("data-to"),
                    count: j.getAttribute("data-count"),
                    tick: 100
                })
            }
        svg4everybody()
    })
}();
