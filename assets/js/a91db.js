! function(a) { "use strict";

    function b() { qodef.scroll = a(window).scrollTop(), qodef.body.hasClass("qodef-dark-header") && (qodef.defaultHeaderStyle = "qodef-dark-header"), qodef.body.hasClass("qodef-light-header") && (qodef.defaultHeaderStyle = "qodef-light-header") }

    function c() {}

    function d() { qodef.windowWidth = a(window).width(), qodef.windowHeight = a(window).height() }

    function e() { qodef.scroll = a(window).scrollTop() } switch (window.qodef = {}, qodef.modules = {}, qodef.scroll = 0, qodef.window = a(window), qodef.document = a(document), qodef.windowWidth = a(window).width(), qodef.windowHeight = a(window).height(), qodef.body = a("body"), qodef.html = a("html, body"), qodef.htmlEl = a("html"), qodef.menuDropdownHeightSet = !1, qodef.defaultHeaderStyle = "", qodef.minVideoWidth = 1500, qodef.videoWidthOriginal = 1280, qodef.videoHeightOriginal = 720, qodef.videoRatio = 1280 / 720, qodef.qodefOnDocumentReady = b, qodef.qodefOnWindowLoad = c, qodef.qodefOnWindowResize = d, qodef.qodefOnWindowScroll = e, a(document).ready(b), a(window).load(c), a(window).resize(d), a(window).scroll(e), !0) {
        case qodef.body.hasClass("qodef-grid-1300"):
            qodef.boxedLayoutWidth = 1350; break;
        case qodef.body.hasClass("qodef-grid-1200"):
            qodef.boxedLayoutWidth = 1250; break;
        case qodef.body.hasClass("qodef-grid-1000"):
            qodef.boxedLayoutWidth = 1050; break;
        case qodef.body.hasClass("qodef-grid-800"):
            qodef.boxedLayoutWidth = 850; break;
        default:
            qodef.boxedLayoutWidth = 1150 } }(jQuery),
function(a) { "use strict";

    function b() { f(), g(), h(), j(), k(), m(), D().init(), o(), p(), q(), i(), w(), x(), A(), z() }

    function c() { l(), n(), B() }

    function d() { p(), x() }

    function e() {}

    function f() { Modernizr.touch && !qodef.body.hasClass("qodef-no-animations-on-touch") && qodef.body.addClass("qodef-no-animations-on-touch") }

    function g() { var a = navigator.appVersion.toLowerCase();
        a.indexOf("mac") > -1 && qodef.body.hasClass("qodef-smooth-scroll") && qodef.body.removeClass("qodef-smooth-scroll") }

    function h() { fluidvids.init({ selector: ["iframe"], players: ["www.youtube.com", "player.vimeo.com"] }) }

    function i() { var b = a(".qodef-owl-slider");
        b.length && b.each(function() { var b = a(this);
            b.owlCarousel({ items: 1, loop: !0, autoplay: !1, dots: !0, nav: !0, navText: ['<span class="qodef-prev-icon"><i class="fa fa-angle-left"></i></span>', '<span class="qodef-next-icon"><i class="fa fa-angle-right"></i></span>'] }) }) }

    function j() { a(".qodef-preload-background").each(function() { var b = a(this); if ("" !== b.css("background-image") && "none" != b.css("background-image")) { var c = b.attr("style"); if (c = c.match(/url\(["']?([^'")]+)['"]?\)/), c = c ? c[1] : "") { var d = new Image;
                    d.src = c, a(d).load(function() { b.removeClass("qodef-preload-background") }) } } else a(window).load(function() { b.removeClass("qodef-preload-background") }) }) }

    function k() { var b = '<div class="pp_pic_holder">                         <div class="ppt">&nbsp;</div>                         <div class="pp_top">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                         <div class="pp_content_container">                             <div class="pp_left">                             <div class="pp_right">                                 <div class="pp_content">                                     <div class="pp_loaderIcon"></div>                                     <div class="pp_fade">                                         <a href="#" class="pp_expand" title="Expand the image">Expand</a>                                         <div class="pp_hoverContainer">                                             <a class="pp_next" href="#"><span class="fa fa-angle-right"></span></a>                                             <a class="pp_previous" href="#"><span class="fa fa-angle-left"></span></a>                                         </div>                                         <div id="pp_full_res"></div>                                         <div class="pp_details">                                             <div class="pp_nav">                                                 <a href="#" class="pp_arrow_previous">Previous</a>                                                 <p class="currentTextHolder">0/0</p>                                                 <a href="#" class="pp_arrow_next">Next</a>                                             </div>                                             <p class="pp_description"></p>                                             {pp_social}                                             <a class="pp_close" href="#">Close</a>                                         </div>                                     </div>                                 </div>                             </div>                             </div>                         </div>                         <div class="pp_bottom">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                     </div>                     <div class="pp_overlay"></div>';
        a("a[data-rel^='prettyPhoto']").prettyPhoto({ hook: "data-rel", animation_speed: "normal", slideshow: !1, autoplay_slideshow: !1, opacity: .8, show_title: !0, allow_resize: !0, horizontal_padding: 0, default_width: 960, default_height: 540, counter_separator_label: "/", theme: "pp_default", hideflash: !1, wmode: "opaque", autoplay: !0, modal: !1, overlay_gallery: !1, keyboard_shortcuts: !0, deeplinking: !1, custom_markup: "", social_tools: !1, markup: b }) }

    function l() { if (a("[data-qodef_header_style]").length > 0 && qodef.body.hasClass("qodef-header-style-on-scroll")) { var b = a(".qodef-full-width-inner > .wpb_row.qodef-section, .qodef-full-width-inner > .qodef-parallax-section-holder, .qodef-container-inner > .wpb_row.qodef-section, .qodef-container-inner > .qodef-parallax-section-holder, .qodef-portfolio-single > .wpb_row.qodef-section"),
                c = function(a) { void 0 !== a.data("qodef_header_style") ? qodef.body.removeClass("qodef-dark-header qodef-light-header").addClass(a.data("qodef_header_style")) : qodef.body.removeClass("qodef-dark-header qodef-light-header").addClass("" + qodef.defaultHeaderStyle) };
            b.waypoint(function(b) { "down" === b && c(a(this.element)) }, { offset: 0 }), b.waypoint(function(b) { "up" === b && c(a(this.element)) }, { offset: function() { return -a(this.element).outerHeight() } }) } }

    function m() { var b, c, d = a(".qodef-no-animations-on-touch"),
            e = !0,
            f = a(".qodef-grow-in, .qodef-fade-in-down, .qodef-element-from-fade, .qodef-element-from-left, .qodef-element-from-right, .qodef-element-from-top, .qodef-element-from-bottom, .qodef-flip-in, .qodef-x-rotate, .qodef-z-rotate, .qodef-y-translate, .qodef-fade-in, .qodef-fade-in-left-x-rotate");
        d.length && (e = !1), f.length > 0 && e && f.each(function() { a(this).appear(function() { c = a(this).data("animation"), "undefined" != typeof c && "" !== c && (b = c, a(this).addClass(b + "-on")) }, { accX: 0, accY: qodefGlobalVars.vars.qodefElementAppearAmount }) }) }

    function n() { qodef.htmlEl.is(".no-touch") && a(".qodef-parallax-section-holder").length && a(".qodef-parallax-section-holder").each(function() { var b = a(this);
            b.hasClass("qodef-full-screen-height-parallax") && (b.height(qodef.windowHeight), b.find(".qodef-parallax-content-outer").css("padding", 0)); var c = .4 * b.data("qodef-parallax-speed");
            b.parallax("50%", c) }) }

    function o() { a(".qodef-section .qodef-video-wrap .qodef-video").mediaelementplayer({ enableKeyboard: !1, iPadUseNativeControls: !1, pauseOtherPlayers: !1, iPhoneUseNativeControls: !1, AndroidUseNativeControls: !1 }), navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (p(), a(".qodef-section .qodef-mobile-video-image").show(), a(".qodef-section .qodef-video-wrap").remove()) }

    function p() { a(".qodef-section .qodef-video-wrap").each(function() { var b = a(this),
                c = b.closest(".qodef-section").outerWidth();
            b.width(c); var d = b.closest(".qodef-section").outerHeight();
            qodef.minVideoWidth = qodef.videoRatio * (d + 20), b.height(d); var e = c / qodef.videoWidthOriginal,
                f = d / qodef.videoHeightOriginal,
                g = f;
            e > f && (g = e), g * qodef.videoWidthOriginal < qodef.minVideoWidth && (g = qodef.minVideoWidth / qodef.videoWidthOriginal), b.find("video, .mejs-overlay, .mejs-poster").width(Math.ceil(g * qodef.videoWidthOriginal + 2)), b.find("video, .mejs-overlay, .mejs-poster").height(Math.ceil(g * qodef.videoHeightOriginal + 2)), b.scrollLeft((b.find("video").width() - c) / 2), b.find(".mejs-overlay, .mejs-poster").scrollTop((b.find("video").height() - d) / 2), b.scrollTop((b.find("video").height() - d) / 2) }) }

    function q() { var b = a(".qodef-footer-uncover");
        b.length && a(".qodef-content").css("margin-bottom", a(".qodef-footer-inner").height()) }

    function r() { window.addEventListener && window.addEventListener("DOMMouseScroll", t, !1), window.onmousewheel = document.onmousewheel = t, document.onkeydown = u, qodef.body.hasClass("qodef-smooth-scroll") && (window.removeEventListener("mousewheel", smoothScrollListener, !1), window.removeEventListener("DOMMouseScroll", smoothScrollListener, !1)) }

    function s() { window.removeEventListener && window.removeEventListener("DOMMouseScroll", t, !1), window.onmousewheel = document.onmousewheel = document.onkeydown = null, qodef.body.hasClass("qodef-smooth-scroll") && (window.addEventListener("mousewheel", smoothScrollListener, !1), window.addEventListener("DOMMouseScroll", smoothScrollListener, !1)) }

    function t(a) { v(a) }

    function u(a) { for (var b = [37, 38, 39, 40], c = b.length; c--;)
            if (a.keyCode === b[c]) return void v(a) }

    function v(a) { a = a || window.event, a.preventDefault && a.preventDefault(), a.returnValue = !1 }

    function w() { var b = a(".qodef-self-hosted-video");
        b.mediaelementplayer({ audioWidth: "100%" }) }

    function x() { a(".qodef-self-hosted-video-holder .qodef-video-wrap").each(function() { var b = a(this),
                c = b.closest(".qodef-self-hosted-video-holder").outerWidth(),
                d = c / qodef.videoRatio;
            navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (b.parent().width(c), b.parent().height(d)), b.width(c), b.height(d), b.find("video, .mejs-overlay, .mejs-poster").width(c), b.find("video, .mejs-overlay, .mejs-poster").height(d) }) }

    function y(b) { var c = a("#qodef-back-to-top");
        c.removeClass("off on"), "on" === b ? c.addClass("on") : c.addClass("off") }

    function z() { qodef.window.scroll(function() { var b, c = a(this).scrollTop(),
                d = a(this).height();
            b = c > 0 ? c + d / 2 : 1, y(1e3 > b ? "off" : "on") }) }

    function A() { var b = a("#qodef-back-to-top");
        b.on("click", function(a) { a.preventDefault(), qodef.html.animate({ scrollTop: 0 }, qodef.window.scrollTop() / 3, "linear") }) }

    function B() { var b = a("body > .qodef-smooth-transition-loader.qodef-mimic-ajax");
        b.length && (b.fadeOut(500), a(window).bind("pageshow", function(a) { a.originalEvent.persisted && b.fadeOut(500) }), a("a").click(function(c) { var d = a(this);
            1 == c.which && d.attr("href").indexOf(window.location.host) >= 0 && "undefined" == typeof d.data("rel") && "undefined" == typeof d.attr("rel") && !d.hasClass("qodef-like") && ("undefined" == typeof d.attr("target") || "_self" === d.attr("target")) && d.attr("href").split("#")[0] !== window.location.href.split("#")[0] && (c.preventDefault(), b.addClass("qodef-hide-spinner"), b.fadeIn(500, function() { window.location = d.attr("href") })) })) } var C = {};
    qodef.modules.common = C, C.qodefIsTouchDevice = f, C.qodefDisableSmoothScrollForMac = g, C.qodefFluidVideo = h, C.qodefPreloadBackgrounds = j, C.qodefPrettyPhoto = k, C.qodefCheckHeaderStyleOnScroll = l, C.qodefInitParallax = n, C.qodefEnableScroll = s, C.qodefDisableScroll = r, C.qodefWheel = t, C.qodefKeydown = u, C.qodefPreventDefaultValue = v, C.qodefOwlSlider = i, C.qodefInitSelfHostedVideoPlayer = w, C.qodefSelfHostedVideoSize = x, C.qodefInitBackToTop = A, C.qodefBackButtonShowHide = z, C.qodefSmoothTransition = B, C.qodefOnDocumentReady = b, C.qodefOnWindowLoad = c, C.qodefOnWindowResize = d, C.qodefOnWindowScroll = e, a(document).ready(b), a(window).load(c), a(window).resize(d), a(window).scroll(e); var D = qodef.modules.common.qodefInitAnchor = function() { var b = function(b) { a(".qodef-main-menu .qodef-active-item, .qodef-mobile-nav .qodef-active-item, .qodef-vertical-menu .qodef-active-item, .qodef-fullscreen-menu .qodef-active-item").removeClass("qodef-active-item"), b.parent().addClass("qodef-active-item"), a(".qodef-main-menu a, .qodef-mobile-nav a, .qodef-vertical-menu a, .qodef-fullscreen-menu a").removeClass("current"), b.addClass("current") },
            c = function() { a("[data-qodef-anchor]").waypoint(function(c) { "down" === c && b(a("a[href='" + window.location.href.split("#")[0] + "#" + a(this.element).data("qodef-anchor") + "']")) }, { offset: "50%" }), a("[data-qodef-anchor]").waypoint(function(c) { "up" === c && b(a("a[href='" + window.location.href.split("#")[0] + "#" + a(this.element).data("qodef-anchor") + "']")) }, { offset: function() { return -(a(this.element).outerHeight() - 150) } }) },
            d = function() { var b = window.location.hash.split("#")[1]; "" !== b && a('[data-qodef-anchor="' + b + '"]').length > 0 && a("a[href='" + window.location.href.split("#")[0] + "#" + b + "'").trigger("click") },
            e = function(a, b) { var c; return qodef.windowWidth > 1024 ? ("qodef-sticky-header-on-scroll-down-up" == qodef.modules.header.behaviour && (a > qodef.modules.header.stickyAppearAmount ? qodef.modules.header.isStickyVisible = !0 : qodef.modules.header.isStickyVisible = !1), "qodef-sticky-header-on-scroll-up" == qodef.modules.header.behaviour && (a > qodef.scroll ? qodef.modules.header.isStickyVisible = !1 : ""), c = qodef.modules.header.isStickyVisible ? qodefGlobalVars.vars.qodefStickyHeaderTransparencyHeight : qodefPerPageVars.vars.qodefHeaderTransparencyHeight) : c = "down" === b ? a > qodef.modules.header.stickyMobileAppearAmount ? 0 : qodef.modules.header.stickyMobileAppearAmount : qodefGlobalVars.vars.qodefMobileHeaderHeight, c },
            f = function() { qodef.document.on("click", ".qodef-main-menu a, .qodef-vertical-menu a, .qodef-fullscreen-menu a, .qodef-btn, .qodef-anchor, .qodef-mobile-nav a", function() { var c, d = a(this),
                        f = d.prop("hash").split("#")[1]; if ("" !== f && a('[data-qodef-anchor="' + f + '"]').length > 0) { var g = a('[data-qodef-anchor="' + f + '"]').offset().top,
                            h = g > qodef.scroll ? "down" : "up"; return c = a('[data-qodef-anchor="' + f + '"]').offset().top - e(g, h), b(d), qodef.html.stop().animate({ scrollTop: Math.round(c) }, 1e3, function() { history.pushState && history.pushState(null, null, "#" + f) }), !1 } }) }; return { init: function() { a("[data-qodef-anchor]").length && (f(), c(), a(window).load(function() { d() })) } } } }(jQuery),
function(a) { "use strict";

    function b() { h() }

    function c() { g() }

    function d() {}

    function e() {}

    function f(b, c, d) {
        function e(a, c) { b[a] = "undefined" != typeof b[a] ? b[a] : c }
        c = "undefined" != typeof c ? c : ".qodef-content", d = "undefined" != typeof d ? d : ".qodef-content", b = "undefined" != typeof b ? b : {}, e("url", window.location.href), e("type", "POST"), e("success", function(e) { var f = a(e),
                g = f.find(".qodef-meta");
            g.length && m(g); var h = f.find(d); return h.length ? void n(b.url, h, c) : (q = !0, !1) }), e("ajaxReq", "yes"), a.ajax({ url: b.url, type: b.type, data: { ajaxReq: b.ajaxReq }, success: b.success }) }

    function g() { p.loader.length && (p.loader.fadeOut(p.loaderTime), a(window).bind("pageshow", function(a) { a.originalEvent.persisted && p.loader.fadeOut(p.loaderTime) })) }

    function h() { if (qodef.body.removeClass("page-not-loaded"), p.loader = a("body > .qodef-smooth-transition-loader.qodef-ajax"), p.loader.length) { if (qodef.body.hasClass("woocommerce") || qodef.body.hasClass("woocommerce-page")) return !1;
            i(), a(document).on("click", 'a[target!="_blank"]:not(.no-ajax):not(.no-link)', function(b) { var c = a(this); if (1 == b.ctrlKey) return window.open(c.attr("href"), "_blank"), !1; if (c.parents(".qodef-ptf-load-more").length) return !1; if (c.parents(".qodef-blog-load-more-button").length) return !1; if (c.parents("qodef-post-info-comments").length) { var d = c.attr("href").split("#")[1]; return a("html, body").scrollTop(a("#" + d).offset().top), !1 } if (window.location.href.split("#")[0] == c.attr("href").split("#")[0]) return !1; if (0 === c.closest(".qodef-no-animation").length) { if (document.location.href.indexOf("?s=") >= 0) return !0; if (c.attr("href").indexOf("wp-admin") >= 0) return !0; if (c.attr("href").indexOf("wp-content") >= 0) return !0; if (-1 !== jQuery.inArray(c.attr("href").split("#")[0], qodefGlobalVars.vars.no_ajax_pages)) return document.location.href = c.attr("href"), !1; if ("http://#" === c.attr("href") || "#" === c.attr("href")) return !1; var e = c.attr("href"),
                        f = e.indexOf(window.location.protocol + "//" + window.location.host); if (0 === f) { if (!q) return !1;
                        b.preventDefault(), b.stopImmediatePropagation(), b.stopPropagation(), c.is(".current") || j(c) } } }) } }

    function i() { window.history.pushState && a(window).bind("popstate", function() { var a = location.href;!r && q && (q = !1, f({ url: a })) }) }

    function j(a) { q = !1, p.loader.fadeIn(p.loaderTime), f({ url: a.attr("href") }) }

    function k(b) { var c = a("nav a[href='" + b + "'], .widget_nav_menu a[href='" + b + "']");
        a(".qodef-main-menu a, .qodef-mobile-nav a, .qodef-mobile-nav h4, .qodef-vertical-menu a, .popup_menu a, .widget_nav_menu a").removeClass("current").parent().removeClass("qodef-active-item"), a(".widget_nav_menu ul.menu > li").removeClass("current-menu-item"), c.each(function() { var b = a(this);
            0 === b.closest(".second").length ? b.parent().addClass("qodef-active-item") : b.closest(".second").parent().addClass("qodef-active-item"), b.closest(".qodef-mobile-nav").length > 0 && (b.closest(".level0").addClass("qodef-active-item"), b.closest(".level1").addClass("qodef-active-item"), b.closest(".level2").addClass("qodef-active-item")), b.closest(".widget_nav_menu").length > 0 && b.closest(".widget_nav_menu").find(".menu-item").addClass("current-menu-item"), b.addClass("current") }) }

    function l(b) { a(document).off(), a(window).off(), qodef.body.off().find("*").off(), qodef.qodefOnDocumentReady(), qodef.qodefOnWindowLoad(), a(window).resize(qodef.qodefOnWindowResize), a(window).scroll(qodef.qodefOnWindowScroll); var c = ["common", "ajax", "header", "title", "shortcodes", "woocommerce", "portfolio", "blog", "like"],
            d = []; "undefined" != typeof b && b.length ? c.forEach(function(a) {-1 === b.indexOf(a) && d.push(a) }, this) : d = c; for (var e = 0; e < d.length; e++) "undefined" != typeof qodef.modules[d[e]] && (qodef.modules[d[e]].qodefOnDocumentReady(), qodef.modules[d[e]].qodefOnWindowLoad(), a(window).resize(qodef.modules[d[e]].qodefOnWindowResize), a(window).scroll(qodef.modules[d[e]].qodefOnWindowScroll));
        a(document).trigger("qodef.ajaxPageLoad") }

    function m(b) { var c = b.find(".qodef-seo-title").text(),
            d = b.find(".qodef-page-transition").text(),
            e = b.find(".qodef-seo-description").text(),
            f = b.find(".qodef-seo-keywords").text(); "undefined" != typeof d && (p.type = d), a('head meta[name="description"]').length ? a('head meta[name="description"]').attr("content", e) : "undefined" != typeof e && a('<meta name="description" content="' + e + '">').prependTo(a("head")), a('head meta[name="keywords"]').length ? a('head meta[name="keywords"]').attr("content", f) : "undefined" != typeof f && a('<meta name="keywords" content="' + f + '">').prependTo(a("head")), document.title = c; var g = b.find(".qodef-body-classes").text(),
            h = g.split(",");
        qodef.body.removeClass(); for (var i = 0; i < h.length; i++) "qodef-page-not-loaded" !== h[i] && qodef.body.addClass(h[i]); if (a("#wp-admin-bar-edit").length > 0) { var j = b.find("#qodef-page-id").text(),
                k = a("#wp-admin-bar-edit a").attr("href"),
                l = k.replace(/(post=).*?(&)/, "$1" + j + "$2");
            a("#wp-admin-bar-edit a").attr("href", l) } }

    function n(b, c, d) { d = "undefined" != typeof d ? d : ".qodef-content"; var e = qodef.body.find(d);
        c.height(e.height()).css({ position: "absolute", opacity: 0, overflow: "hidden" }).insertBefore(e), c.waitForImages(function() {-1 !== b.indexOf("#") && a('<a class="qodef-temp-anchor qodef-anchor" href="' + b + '" style="display: none"></a>').appendTo("body"), l(), "fade" == p.type && (e.stop().fadeTo(p.time, 0, function() { e.remove(), window.history.pushState ? (b !== window.location.href && window.history.pushState({ path: b }, "", b), "undefined" != typeof _gaq && _gaq.push(["_trackPageview", b])) : document.location.href = window.location.protocol + "//" + window.location.host + "#" + b.split(window.location.protocol + "//" + window.location.host)[1], k(b), qodef.body.animate({ scrollTop: 0 }, p.time, "swing") }), setTimeout(function() { c.css("position", "relative").height("").stop().fadeTo(p.time, 1, function() { q = !0, r = !1, p.loader.fadeOut(p.loaderTime, function() { var b = a(".qodef-temp-anchor");
                        b.length && b.trigger("click").remove() }) }) }, !p.simultaneous * p.time)) }) } var o = {};
    qodef.modules.ajax = o; var p = {};
    o.animation = p, o.qodefFetchPage = f, o.qodefInitAjax = h, o.qodefHandleLinkClick = j, o.qodefInsertFetchedContent = n, o.qodefInitBackBehavior = i, o.qodefSetActiveState = k, o.qodefReinitiateAll = l, o.qodefHandleMeta = m, o.qodefOnDocumentReady = b, o.qodefOnWindowLoad = c, o.qodefOnWindowResize = d, o.qodefOnWindowScroll = e, a(document).ready(b), a(window).load(c), a(window).resize(d), a(window).scroll(e); var q = !0,
        r = !0;
    p.type = null, p.time = 500, p.simultaneous = !0, p.loader = null, p.loaderTime = 500 }(jQuery),
function(a) { "use strict";

    function b() { f(), g(), h(), i(), j(), k(), l(), m(), n(), o(), q().init() }

    function c() { m() }

    function d() { n() }

    function e() {}

    function f() { var b, c = a(".qodef-page-header"),
            d = a(".qodef-sticky-header"),
            e = a(".qodef-fixed-wrapper"),
            f = a(".qodef-page-header").find(".qodef-fixed-wrapper").length ? a(".qodef-page-header").find(".qodef-fixed-wrapper").offset().top : null; switch (!0) {
            case qodef.body.hasClass("qodef-sticky-header-on-scroll-up"):
                qodef.modules.header.behaviour = "qodef-sticky-header-on-scroll-up"; var g = a(document).scrollTop();
                b = qodefGlobalVars.vars.qodefTopBarHeight + qodefGlobalVars.vars.qodefLogoAreaHeight + qodefGlobalVars.vars.qodefMenuAreaHeight + qodefGlobalVars.vars.qodefStickyHeaderHeight; var h = function() { var c = a(document).scrollTop();
                    c > g && c > b || b > c ? (qodef.modules.header.isStickyVisible = !1, d.removeClass("header-appear").find(".qodef-main-menu .second").removeClass("qodef-drop-down-start")) : (qodef.modules.header.isStickyVisible = !0, d.addClass("header-appear")), g = a(document).scrollTop() };
                h(), a(window).scroll(function() { h() }); break;
            case qodef.body.hasClass("qodef-sticky-header-on-scroll-down-up"):
                qodef.modules.header.behaviour = "qodef-sticky-header-on-scroll-down-up", 0 !== qodefPerPageVars.vars.qodefStickyScrollAmount ? qodef.modules.header.stickyAppearAmount = qodefPerPageVars.vars.qodefStickyScrollAmount : qodef.modules.header.stickyAppearAmount = 0 !== qodefGlobalVars.vars.qodefStickyScrollAmount ? qodefGlobalVars.vars.qodefStickyScrollAmount : qodefGlobalVars.vars.qodefTopBarHeight + qodefGlobalVars.vars.qodefLogoAreaHeight + qodefGlobalVars.vars.qodefMenuAreaHeight; var h = function() { qodef.scroll < qodef.modules.header.stickyAppearAmount ? (qodef.modules.header.isStickyVisible = !1, d.removeClass("header-appear").find(".qodef-main-menu .second").removeClass("qodef-drop-down-start")) : (qodef.modules.header.isStickyVisible = !0, d.addClass("header-appear")) };
                h(), a(window).scroll(function() { h() }); break;
            case qodef.body.hasClass("qodef-fixed-on-scroll"):
                qodef.modules.header.behaviour = "qodef-fixed-on-scroll"; var i = function() { qodef.scroll < f ? (e.removeClass("fixed"), c.css("margin-bottom", 0)) : (e.addClass("fixed"), c.css("margin-bottom", e.height())) };
                i(), a(window).scroll(function() { i() }) } }

    function g() { var b, c = a(".qodef-wrapper"),
            d = a(".qodef-side-menu"),
            e = a("a.qodef-side-menu-button-opener"),
            f = !1,
            g = !1,
            h = !1;
        qodef.body.hasClass("qodef-side-menu-slide-from-right") ? (a(".qodef-cover").remove(), b = "qodef-right-side-menu-opened", c.prepend('<div class="qodef-cover"/>'), f = !0) : qodef.body.hasClass("qodef-side-menu-slide-with-content") ? (b = "qodef-side-menu-open", g = !0) : qodef.body.hasClass("qodef-side-area-uncovered-from-content") && (b = "qodef-right-side-menu-opened", h = !0), a("a.qodef-side-menu-button-opener, a.qodef-close-side-menu").click(function(i) { if (i.preventDefault(), e.hasClass("opened")) { if (e.removeClass("opened"), qodef.body.removeClass(b), h) var j = setTimeout(function() { d.css({ visibility: "hidden" }), clearTimeout(j) }, 400) } else { e.addClass("opened"), qodef.body.addClass(b), f && a(".qodef-wrapper .qodef-cover").click(function() { qodef.body.removeClass("qodef-right-side-menu-opened"), e.removeClass("opened") }), h && d.css({ visibility: "visible" }); var k = a(window).scrollTop();
                a(window).scroll(function() { if (Math.abs(qodef.scroll - k) > 400 && (qodef.body.removeClass(b), e.removeClass("opened"), h)) var a = setTimeout(function() { d.css({ visibility: "hidden" }), clearTimeout(a) }, 400) }) }
            g && (i.stopPropagation(), c.click(function() { i.preventDefault(), e.removeClass("opened"), qodef.body.removeClass("qodef-side-menu-open") })) }) }

    function h() { var b = a(".qodef-side-menu");
        b.length && b.niceScroll({ scrollspeed: 60, mousescrollstep: 40, cursorwidth: 0, cursorborder: 0, cursorborderradius: 0, cursorcolor: "transparent", autohidemode: !1, horizrailenabled: !1 }) }

    function i() {
        function b(a) { var b = 0;
            a || (a = window.event), a.wheelDelta ? b = a.wheelDelta / 120 : a.detail && (b = -a.detail / 3), b && c(b), a.preventDefault && a.preventDefault(), a.returnValue = !1 }

        function c(b) { 0 > b ? Math.abs(h) <= i && (h += 20 * b, a(f).css("margin-top", h)) : -20 >= h && (h += 20 * b, a(f).css("margin-top", h)) } if (a(".qodef-vertical-menu-area").length) { var d = qodef.windowHeight,
                e = a(".qodef-vertical-menu-area"),
                f = a(".qodef-vertical-menu-area .qodef-vertical-menu-area-inner"),
                g = f.outerHeight() + parseInt(e.css("padding-top")) + parseInt(e.css("padding-bottom")),
                h = 0,
                i = g - d;
            a(e).hover(function() { qodef.modules.common.qodefDisableScroll(), window.addEventListener && (window.addEventListener("mousewheel", b, !1), window.addEventListener("DOMMouseScroll", b, !1)), window.onmousewheel = document.onmousewheel = b }, function() { qodef.modules.common.qodefEnableScroll(), window.removeEventListener("mousewheel", b, !1), window.removeEventListener("DOMMouseScroll", b, !1) }) } }

    function j() { if (a("a.qodef-fullscreen-menu-opener").length) { var b, c = a("a.qodef-fullscreen-menu-opener"),
                d = a(".qodef-fullscreen-menu-holder-outer"),
                e = !1,
                f = !1,
                g = a(".qodef-fullscreen-above-menu-widget-holder"),
                h = a(".qodef-fullscreen-below-menu-widget-holder"),
                i = a(".qodef-fullscreen-menu-holder-outer nav > ul > li > a"),
                j = a(".qodef-fullscreen-menu > ul li.has_sub > a"),
                k = a(".qodef-fullscreen-menu ul li:not(.has_sub) a");
            d.height(qodef.windowHeight).niceScroll({ scrollspeed: 30, mousescrollstep: 20, cursorwidth: 0, cursorborder: 0, cursorborderradius: 0, cursorcolor: "transparent", autohidemode: !1, horizrailenabled: !1 }), a(window).resize(function() { d.height(qodef.windowHeight) }), qodef.body.hasClass("qodef-fade-push-text-right") ? (b = "qodef-push-nav-right", e = !0) : qodef.body.hasClass("qodef-fade-push-text-top") && (b = "qodef-push-text-top", f = !0), (e || f) && (g.length && g.children().css({ "-webkit-animation-delay": "0ms", "-moz-animation-delay": "0ms", "animation-delay": "0ms" }), i.each(function(b) { a(this).css({ "-webkit-animation-delay": 70 * (b + 1) + "ms", "-moz-animation-delay": 70 * (b + 1) + "ms", "animation-delay": 70 * (b + 1) + "ms" }) }), h.length && h.children().css({ "-webkit-animation-delay": 70 * (i.length + 1) + "ms", "-moz-animation-delay": 70 * (i.length + 1) + "ms", "animation-delay": 70 * (i.length + 1) + "ms" })), c.on("click", function(d) { d.preventDefault(), c.hasClass("opened") ? (c.removeClass("opened"), qodef.body.removeClass("qodef-fullscreen-menu-opened"), qodef.body.removeClass("qodef-fullscreen-fade-in").addClass("qodef-fullscreen-fade-out"), qodef.body.addClass(b), qodef.body.hasClass("page-template-full_screen-php") || qodef.modules.common.qodefEnableScroll(), a("nav.qodef-fullscreen-menu ul.sub_menu").slideUp(200, function() { a("nav.popup_menu").getNiceScroll().resize() })) : (c.addClass("opened"), qodef.body.addClass("qodef-fullscreen-menu-opened"), qodef.body.removeClass("qodef-fullscreen-fade-out").addClass("qodef-fullscreen-fade-in"), qodef.body.removeClass(b), qodef.body.hasClass("page-template-full_screen-php") || qodef.modules.common.qodefDisableScroll(), a(document).keyup(function(d) { 27 == d.keyCode && (c.removeClass("opened"), qodef.body.removeClass("qodef-fullscreen-menu-opened"), qodef.body.removeClass("qodef-fullscreen-fade-in").addClass("qodef-fullscreen-fade-out"), qodef.body.addClass(b), qodef.body.hasClass("page-template-full_screen-php") || qodef.modules.common.qodefEnableScroll(), a("nav.qodef-fullscreen-menu ul.sub_menu").slideUp(200, function() { a("nav.popup_menu").getNiceScroll().resize() })) })) }), j.on("tap click", function(b) { if (b.preventDefault(), a(this).parent().hasClass("has_sub")) { var c = a(this).parent().find("> ul.sub_menu");
                    c.is(":visible") ? (c.slideUp(200, function() { d.getNiceScroll().resize() }), a(this).parent().removeClass("open_sub")) : (a(this).parent().addClass("open_sub"), c.slideDown(200, function() { d.getNiceScroll().resize() })) } return !1 }), k.click(function(d) { return "http://#" === a(this).attr("href") || "#" === a(this).attr("href") ? !1 : void(1 == d.which && (c.removeClass("opened"), qodef.body.removeClass("qodef-fullscreen-menu-opened"), qodef.body.removeClass("qodef-fullscreen-fade-in").addClass("qodef-fullscreen-fade-out"), qodef.body.addClass(b), a("nav.qodef-fullscreen-menu ul.sub_menu").slideUp(200, function() { a("nav.popup_menu").getNiceScroll().resize() }), qodef.modules.common.qodefEnableScroll())) }) } }

    function k() { var b = a(".qodef-mobile-header .qodef-mobile-menu-opener"),
            c = a(".qodef-mobile-header .qodef-mobile-nav"),
            d = a('.qodef-mobile-nav .mobile_arrow, .qodef-mobile-nav h4, .qodef-mobile-nav a[href*="#"]'),
            e = 200;
        b.length && c.length && b.on("tap click", function(a) { a.stopPropagation(), a.preventDefault(), c.is(":visible") ? c.slideUp(e) : c.slideDown(e) }), d.length && d.each(function() { a(this).on("tap click", function(b) { var c = a(this).nextAll("ul").first(); if (c.length) { b.preventDefault(), b.stopPropagation(); var d = a(this).parent("li");
                    c.is(":visible") ? (c.slideUp(e), d.removeClass("qodef-opened")) : (c.slideDown(e), d.addClass("qodef-opened")) } }) }), a(".qodef-mobile-nav a, .qodef-mobile-logo-wrapper a").on("click tap", function(b) { "http://#" !== a(this).attr("href") && "#" !== a(this).attr("href") && c.slideUp(e) }) }

    function l() { if (qodef.body.hasClass("qodef-sticky-up-mobile-header")) { var b, c = a(".qodef-top-bar"),
                d = a(".qodef-mobile-header"),
                e = a("#wpadminbar"),
                f = d.length ? d.height() : 0,
                g = c.is(":visible") ? c.height() : 0,
                h = e.length ? e.height() : 0,
                i = a(document).scrollTop();
            qodef.modules.header.stickyMobileAppearAmount = g + f + h, b = qodef.modules.header.stickyMobileAppearAmount, a(window).scroll(function() { var c = a(document).scrollTop();
                c > b ? (d.addClass("qodef-animate-mobile-header"), d.css("margin-bottom", f)) : (d.removeClass("qodef-animate-mobile-header"), d.css("margin-bottom", 0)), c > i && c > b || b > c ? (d.removeClass("mobile-header-appear"), e.length && d.find(".qodef-mobile-header-inner").css("top", 0)) : d.addClass("mobile-header-appear"), i = a(document).scrollTop() }) } }

    function m() { var b = a(".qodef-drop-down > ul > li.narrow");
        b.each(function(b) { var c = qodef.windowWidth - 16,
                d = a(this).offset().left,
                e = a(this).find(".second .inner ul").width(),
                f = 0;
            f = qodef.body.hasClass("boxed") ? qodef.boxedLayoutWidth - (d - (c - qodef.boxedLayoutWidth) / 2) : c - d; var g;
            a(this).find("li.sub").length > 0 && (g = f - e), (e > f || e > g) && (a(this).find(".second").addClass("right"), a(this).find(".second .inner ul").addClass("right")) }) }

    function n() { var b = a(".qodef-drop-down > ul > li");
        b.each(function(c) { if (a(b[c]).find(".second").length > 0) { var d = a(b[c]).find(".second"); if (a(b[c]).hasClass("wide")) { var e = a(this).find(".inner > ul"),
                        f = parseInt(e.css("padding-left").slice(0, -2)) + parseInt(e.css("padding-right").slice(0, -2)),
                        g = e.outerWidth();
                    a(this).hasClass("left_position") || a(this).hasClass("right_position") || d.css("left", 0); var h = 0; if (a(this).find(".second > .inner > ul > li").each(function() { var b = a(this).height();
                            b > h && (h = b) }), a(this).find(".second > .inner > ul > li").css("height", ""), a(this).find(".second > .inner > ul > li").height(h), a(this).hasClass("wide_background")) { if (!a(this).hasClass("left_position") && !a(this).hasClass("right_position")) { var i = d.offset().left;
                            d.css("left", -i), d.css("width", qodef.windowWidth) } } else if (!a(this).hasClass("left_position") && !a(this).hasClass("right_position")) { var i = (qodef.windowWidth - 2 * (qodef.windowWidth - e.offset().left)) / 2 + (g + f) / 2;
                        d.css("left", -i) } } if (qodef.menuDropdownHeightSet || (a(b[c]).data("original_height", d.height() + "px"), d.height(0)), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) a(b[c]).on("touchstart mouseenter", function() { d.css({ height: a(b[c]).data("original_height"), overflow: "visible", visibility: "visible", opacity: "1" }) }).on("mouseleave", function() { d.css({ height: "0px", overflow: "hidden", visibility: "hidden", opacity: "0" }) });
                else if (qodef.body.hasClass("qodef-dropdown-animate-height")) a(b[c]).mouseenter(function() { d.css({ visibility: "visible", height: "0px", opacity: "0" }), d.stop().animate({ height: a(b[c]).data("original_height"), opacity: 1 }, 200, function() { d.css("overflow", "visible") }) }).mouseleave(function() { d.stop().animate({ height: "0px" }, 0, function() { d.css({ overflow: "hidden", visibility: "hidden" }) }) });
                else { var j = { interval: 0, over: function() { d.css({ display: "block" }), setTimeout(function() { d.find("li").css({ visibility: "visible" }), d.addClass("qodef-drop-down-start"), d.stop().css({ height: a(b[c]).data("original_height") }), d.css({ visibility: "visible" }) }, 150) }, timeout: 150, out: function() { d.removeClass("qodef-drop-down-start"), d.css({ visibility: "hidden" }), d.find("li").css({ visibility: "hidden" }), d.stop().css({ height: "0px" }), d.css({ display: "none" }) } };
                    a(b[c]).hoverIntent(j) } } }), a(".qodef-drop-down ul li.wide ul li a").on("click", function(b) { if (1 == b.which) { var c = a(this);
                setTimeout(function() { c.mouseleave() }, 500) } }), qodef.menuDropdownHeightSet = !0 }

    function o() {
        function b() { c.click(function(b) { b.preventDefault(); var c, d, e, f = a(".qodef-search-cover .qodef-form-holder-outer");
                a(this).closest(".qodef-grid").length ? (d = a(this).closest(".qodef-grid").children().first(), e = d.parent()) : (d = a(this).closest(".qodef-menu-area").children().first(), e = d), a(this).closest(".qodef-sticky-header").length > 0 && (d = a(this).closest(".qodef-sticky-header").children().first()), a(this).closest(".qodef-mobile-header").length > 0 && (d = a(this).closest(".qodef-mobile-header").children().children().first()), e.parent().hasClass("qodef-logo-area") ? c = qodefGlobalVars.vars.qodefLogoAreaHeight : e.parent().hasClass("qodef-top-bar") ? c = qodefGlobalVars.vars.qodefTopBarHeight : e.parent().hasClass("qodef-menu-area") ? c = qodefGlobalVars.vars.qodefMenuAreaHeight : e.hasClass("qodef-sticky-header") ? c = qodefGlobalVars.vars.qodefMenuAreaHeight : e.parent().hasClass("qodef-mobile-header") && (c = a(".qodef-mobile-header-inner").height()), f.height(c), d.stop(!0).fadeIn(600), a('.qodef-search-cover input[type="text"]').focus(), a(".qodef-search-close, .content, footer").click(function(a) { a.preventDefault(), d.stop(!0).fadeOut(450) }), d.blur(function() { d.stop(!0).fadeOut(450) }) }) } var c = a("a.qodef-search-opener"),
            d = !1; if (a("html").hasClass("touch") && (d = !0), c.length > 0 && (qodef.body.hasClass("qodef-search-covers-header") && b(), "undefined" != typeof c.data("hover-color"))) { var e = function(a) { a.data.searchOpener.css("color", a.data.color) },
                f = c.css("color"),
                g = c.data("hover-color");
            c.on("mouseenter", { searchOpener: c, color: g }, e), c.on("mouseleave", { searchOpener: c, color: f }, e) } } var p = {};
    qodef.modules.header = p, p.isStickyVisible = !1, p.stickyAppearAmount = 0, p.stickyMobileAppearAmount = 0, p.behaviour, p.qodefSideArea = g, p.qodefSideAreaScroll = h, p.qodefVerticalMenuScroll = i, p.qodefFullscreenMenu = j, p.qodefInitMobileNavigation = k, p.qodefMobileHeaderBehavior = l, p.qodefSetDropDownMenuPosition = m, p.qodefDropDownMenu = n, p.qodefSearch = o, p.qodefOnDocumentReady = b, p.qodefOnWindowLoad = c, p.qodefOnWindowResize = d, p.qodefOnWindowScroll = e, a(document).ready(b), a(window).load(c), a(window).resize(d), a(window).scroll(e); var q = function() { var b = a(".qodef-vertical-menu-area"),
            c = function() {
                function c() { var b = d.find("ul li.menu-item-has-children"),
                        c = b.find(" > .second, > ul");
                    b.each(function() { var d = a(this).find(" > .second, > ul"),
                            e = this; if (Modernizr.touch) { var f = a(this).find("> a");
                            f.on("click tap", function(f) { f.preventDefault(), f.stopPropagation(), d.hasClass("qodef-float-open") ? (d.removeClass("qodef-float-open"), a(e).removeClass("open")) : (a(this).parents("li").hasClass("open") || (b.removeClass("open"), c.removeClass("qodef-float-open")), d.addClass("qodef-float-open"), a(e).addClass("open")) }) } else a(this).hoverIntent({ over: function() { d.addClass("qodef-float-open"), a(e).addClass("open") }, out: function() { d.removeClass("qodef-float-open"), a(e).removeClass("open") }, timeout: 300 }) }) } var d = b.find(".qodef-vertical-menu"),
                    e = "undefined" != typeof d.data("navigation-type") ? d.data("navigation-type") : ""; switch (e) { default: c() } }; return { init: function() { b.length && c() } } } }(jQuery),
function(a) { "use strict";

    function b() { f() }

    function c() {}

    function d() {}

    function e() {}

    function f() { if (a(".qodef-title.qodef-has-parallax-background").length > 0 && 0 === a(".touch").length) { var b = a(".qodef-title.qodef-has-parallax-background"),
                c = a(".qodef-title.qodef-has-parallax-background.qodef-zoom-out"),
                d = parseInt(b.data("background-width").match(/\d+/)),
                e = b.data("height"),
                f = e / 1e4 * 7,
                g = -(qodef.scroll * f);
            b.css({ "background-position": "center " + (g + qodefGlobalVars.vars.qodefAddForAdminBar) + "px" }), c.css({ "background-size": d - qodef.scroll + "px auto" }), a(window).scroll(function() { g = -(qodef.scroll * f), b.css({ "background-position": "center " + (g + qodefGlobalVars.vars.qodefAddForAdminBar) + "px" }), c.css({ "background-size": d - qodef.scroll + "px auto" }) }) } } var g = {};
    qodef.modules.title = g, g.qodefParallaxTitle = f, g.qodefOnDocumentReady = b, g.qodefOnWindowLoad = c, g.qodefOnWindowResize = d, g.qodefOnWindowScroll = e, a(document).ready(b), a(window).load(c), a(window).resize(d), a(window).scroll(e) }(jQuery),
function(a) { "use strict";

    function b() { f(), g(), k(), O().init(), i(), j(), m(), n(), o(), q(), r(), s(), Q().init(), t(), u(), z(), y(), v(), C(), A(), E(), F(), G(), R().init(), P().init(), S().init(), L(), M(), l() }

    function c() {}

    function d() { t(), u(), C() }

    function e() {}

    function f() { var b = a(".qodef-counter");
        b.length && b.each(function() { var b = a(this);
            b.appear(function() { if (b.parent().addClass("qodef-counter-holder-show"), b.hasClass("zero")) { var a = parseFloat(b.text());
                    b.countTo({ from: 0, to: a, speed: 1500, refreshInterval: 100 }) } else b.absoluteCounter({ speed: 2e3, fadeInDelay: 1e3 }) }, { accX: 0, accY: qodefGlobalVars.vars.qodefElementAppearAmount }) }) }

    function g() { var b = a(".qodef-progress-bar");
        b.length && b.each(function() { var b = a(this);
            b.appear(function() { h(b); var a = b.find(".qodef-progress-content").data("percentage"),
                    c = b.find(".qodef-progress-content"),
                    d = b.find(".qodef-progress-number");
                c.css("width", "0%"), c.animate({ width: a + "%" }, 1500), d.css("left", "0%"), d.animate({ left: a + "%" }, 1500) }) }) }

    function h(b) { var c = parseFloat(b.find(".qodef-progress-content").data("percentage")),
            d = b.find(".qodef-progress-number .qodef-percent");
        d.length && d.each(function() { var b = a(this);
            b.parents(".qodef-progress-number-wrapper").css("opacity", "1"), b.countTo({ from: 0, to: c, speed: 1500, refreshInterval: 50 }) }) }

    function i() { var b = a(".qodef-message");
        b.length && b.each(function() { var b = a(this);
            b.find(".qodef-close").click(function(b) { b.preventDefault(), a(this).parent().parent().fadeOut(500) }) }) }

    function j() { var b = a(".qodef-message.qodef-with-icon");
        b.length && b.each(function() { var b = a(this),
                c = b.find(".qodef-message-text-holder").height(),
                d = b.find(".qodef-message-icon-holder").height();
            c > d ? b.find(".qodef-message-icon-holder").height(c) : b.find(".qodef-message-text-holder").height(d) }) }

    function k() { var b, c, d, e, f, g, h, i, j, k, l, m = a(".qodef-countdown");
        m.length && m.each(function() {
            function m() { s.find(".countdown-amount").css({ "font-size": n + "px", "line-height": n + "px", color: o }), s.find(".countdown-period").css({ "font-size": p + "px", color: q }) } var n, o, p, q, r = a(this).attr("id"),
                s = a("#" + r);
            b = s.data("year"), c = s.data("month"), d = s.data("day"), e = s.data("hour"), f = s.data("minute"), g = s.data("timezone"), h = s.data("month-label"), i = s.data("day-label"), j = s.data("hour-label"), k = s.data("minute-label"), l = s.data("second-label"), n = s.data("digit-size"), p = s.data("label-size"), o = s.data("digit-color"), q = s.data("label-color"), s.countdown({ until: new Date(b, c - 1, d, e, f, 44), labels: ["Years", h, "Weeks", i, j, k, l], format: "ODHMS", timezone: g, padZeroes: !0, onTick: m }) }) }

    function l() { var b = a(".qodef-image-slider");
        b.length && qodef.windowWidth > 600 ? b.each(function() { a(this).animate({ opacity: 1 }, 1e3), a(this).find(".qodef-image-slider-inner").lemmonSlider({ infinite: !0 }), a(this).swipe({ swipeLeft: function(b, c, d, e, f) { a(".controls .next-slide").click() }, swipeRight: function(b, c, d, e, f) { a(".controls .prev-slide").click() }, threshold: 0 }) }) : b.length && b.each(function() { a(this).waitForImages(function() { a(this).animate({ opacity: 1 }, 1e3), a(this).find(".qodef-image-slider-inner ul").owlCarousel({ items: 3, responsive: { 0: { items: 1 }, 480: { items: 1 }, 600: { items: 1 } }, loop: !0, autoplay: !1, mouseDrag: !1, autoHeight: !0, dots: !1, nav: !0, navText: ['<span class="qodef-prev-icon"><span class="arrow_carrot-left"></span></span>', '<span class="qodef-next-icon"><span class="arrow_carrot-right"></span></span>'] }) }) }) }

    function m() { var b = a(".qodef-testimonials");
        b.length && b.each(function() { var b = a(this);
            b.appear(function() { b.css("visibility", "visible") }, { accX: 0, accY: qodefGlobalVars.vars.qodefElementAppearAmount }); var c = "yes" == b.data("pagination"),
                d = !1,
                e = !0,
                f = 0; "undefined" != typeof b.data("autoplay-timeout") && b.data("autoplay-timeout") !== !1 && (f = 1e3 * b.data("autoplay-timeout"), 0 == f && (e = !1)), b.owlCarousel({ items: 3, responsive: { 0: { items: 1 }, 480: { items: 1 }, 768: { items: 2 }, 1024: { items: 3 } }, loop: !0, autoplay: e, autoplayTimeout: f, mouseDrag: !1, dots: c, nav: d, navText: ['<span class="qodef-prev-icon"><i class="fa fa-angle-left"></i></span>', '<span class="qodef-next-icon"><i class="fa fa-angle-right"></i></span>'] }) }) }

    function n() { var b, c, d, e = a(".qodef-carousel-holder"),
            f = !1,
            g = 0;
        e.length && e.each(function() { b = a(this).children(".qodef-carousel"), c = b.data("items"), d = "yes" == b.data("navigation"); var e = b.data("autoplay");
            e > 0 && (f = !0, g = 1e3 * e), b.owlCarousel({ items: c, responsive: { 0: { items: 1 }, 480: { items: 2 }, 768: { items: 3 }, 1024: { items: c } }, loop: !0, autoplay: f, dots: !1, nav: d, navText: ['<span class="qodef-prev-icon"><i class="fa fa-angle-left"></i></span>', '<span class="qodef-next-icon"><i class="fa fa-angle-right"></i></span>'] }) }) }

    function o() { var b = a(".qodef-pie-chart-holder, .qodef-pie-chart-with-icon-holder");
        b.length && b.each(function() { var b, c = a(this),
                d = c.children(".qodef-percentage, .qodef-percentage-with-icon"),
                e = "#282d33",
                f = 15,
                g = 220; "undefined" != typeof d.data("bar-color") && "" !== d.data("bar-color") && (e = d.data("bar-color")), "undefined" != typeof d.data("track-color") && "" !== d.data("track-color") && (b = d.data("track-color")), d.appear(function() { p(c), d.css("opacity", "1"), d.easyPieChart({ barColor: e, trackColor: b, scaleColor: !1, lineCap: "butt", lineWidth: f, animate: 1500, size: g }) }, { accX: 0, accY: qodefGlobalVars.vars.qodefElementAppearAmount }) }) }

    function p(a) { a.css("opacity", "1"); var b = a.find(".qodef-to-counter"),
            c = parseFloat(b.text());
        b.countTo({ from: 0, to: c, speed: 1500, refreshInterval: 50 }) }

    function q() { var b = a(".qodef-pie-chart-doughnut-holder, .qodef-pie-chart-pie-holder");
        b.each(function() { for (var b = a(this), c = b.find("canvas"), d = c.attr("id"), e = document.getElementById(d).getContext("2d"), f = [], g = a(e.canvas), h = 1; 10 >= h; h++) { var i, j = g.data("value-" + h),
                    k = g.data("color-" + h); "undefined" != typeof j && "undefined" != typeof k && (i = { value: j, color: k }, f.push(i)) }
            c.hasClass("qodef-pie") ? new Chart(e).Pie(f, { segmentStrokeColor: "transparent" }) : new Chart(e).Doughnut(f, { segmentStrokeColor: "transparent" }) }) }

    function r() { var b = a(".qodef-tabs");
        b.length && b.each(function() { var b = a(this);
            b.children(".qodef-tab-container").each(function(b) { b += 1; var c = a(this),
                    d = c.attr("id"),
                    e = c.parent().find(".qodef-tabs-nav li:nth-child(" + b + ") a"),
                    f = e.attr("href");
                d = "#" + d, d.indexOf(f) > -1 && e.attr("href", d) }), b.hasClass("qodef-horizontal-tab") ? b.tabs() : b.hasClass("qodef-vertical-tab") && (b.tabs().addClass("ui-tabs-vertical ui-helper-clearfix"), b.find(".qodef-tabs-nav > ul >li").removeClass("ui-corner-top").addClass("ui-corner-left")) }) }

    function s() { var b = a(".qodef-tab-container");
        b.length && b.each(function() { var b = a(this),
                c = b.attr("id"),
                d = ""; "undefined" == typeof b.data("icon-html") && "false" === b.data("icon-html") || (d = b.data("icon-html")); var e = b.parents(".qodef-tabs").find('.qodef-tabs-nav > li > a[href="#' + c + '"]'); "undefined" != typeof e && e.children(".qodef-icon-frame").append(d) }) }

    function t() { var b = a(".qodef-blog-list-holder.qodef-masonry .qodef-blog-list");
        b.length && b.each(function() { var c = a(this);
            b.waitForImages(function() { c.isotope({ layoutMode: "packery", itemSelector: ".qodef-blog-list-masonry-item", packery: { columnWidth: ".qodef-blog-list-masonry-grid-sizer", gutter: ".qodef-blog-list-masonry-grid-gutter" } }), c.addClass("qodef-appeared") }) }) }

    function u() { var b = a(".qodef-custom-font-holder");
        b.length && b.each(function() { var b, c, d = a(this),
                e = 1,
                f = 1;
            qodef.windowWidth < 1200 && (e = .8), qodef.windowWidth < 1024 && (e = .7), qodef.windowWidth < 768 && (e = .6, f = .7), qodef.windowWidth < 600 && (e = .5, f = .6), qodef.windowWidth < 480 && (e = .4, f = .5), "undefined" != typeof d.data("font-size") && d.data("font-size") !== !1 && (b = parseInt(d.data("font-size")), b > 70 ? b = Math.round(b * e) : b > 35 && (b = Math.round(b * f)), d.css("font-size", b + "px")), "undefined" != typeof d.data("line-height") && d.data("line-height") !== !1 && (c = parseInt(d.data("line-height")), c > 70 && qodef.windowWidth < 1200 ? c = "1.2em" : c > 35 && qodef.windowWidth < 768 ? c = "1.2em" : c += "px", d.css("line-height", c)) }) }

    function v() { a(".qodef-google-map").length && a(".qodef-google-map").each(function() { var b, c = a(this); "undefined" != typeof c.data("custom-map-style") && (b = c.data("custom-map-style")); var d; "undefined" != typeof c.data("color-overlay") && c.data("color-overlay") !== !1 && (d = c.data("color-overlay")); var e; "undefined" != typeof c.data("saturation") && c.data("saturation") !== !1 && (e = c.data("saturation")); var f; "undefined" != typeof c.data("lightness") && c.data("lightness") !== !1 && (f = c.data("lightness")); var g; "undefined" != typeof c.data("zoom") && c.data("zoom") !== !1 && (g = c.data("zoom")); var h; "undefined" != typeof c.data("pin") && c.data("pin") !== !1 && (h = c.data("pin")); var i; "undefined" != typeof c.data("height") && c.data("height") !== !1 && (i = c.data("height")); var j; "undefined" != typeof c.data("unique-id") && c.data("unique-id") !== !1 && (j = c.data("unique-id")); var k; "undefined" != typeof c.data("scroll-wheel") && (k = c.data("scroll-wheel")); var l; "undefined" != typeof c.data("addresses") && c.data("addresses") !== !1 && (l = c.data("addresses")); var m = "map_" + j,
                n = "geocoder_" + j,
                o = "qodef-map-" + j;
            w(b, d, e, f, k, g, o, i, h, m, n, l) }) }

    function w(a, b, c, d, e, f, g, h, i, j, k, l) { var m, n = [{ stylers: [{ hue: b }, { saturation: c }, { lightness: d }, { gamma: 1 }] }];
        m = a ? "qodef-style" : google.maps.MapTypeId.ROADMAP; var o = new google.maps.StyledMapType(n, { name: "Qode Google Map" });
        k = new google.maps.Geocoder; var p = new google.maps.LatLng(-34.397, 150.644);
        isNaN(h) || (h += "px"); var q = { zoom: f, scrollwheel: e, center: p, zoomControl: !0, zoomControlOptions: { style: google.maps.ZoomControlStyle.SMALL, position: google.maps.ControlPosition.RIGHT_CENTER }, scaleControl: !1, scaleControlOptions: { position: google.maps.ControlPosition.LEFT_CENTER }, streetViewControl: !1, streetViewControlOptions: { position: google.maps.ControlPosition.LEFT_CENTER }, panControl: !1, panControlOptions: { position: google.maps.ControlPosition.LEFT_CENTER }, mapTypeControl: !1, mapTypeControlOptions: { mapTypeIds: [google.maps.MapTypeId.ROADMAP, "qodef-style"], style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR, position: google.maps.ControlPosition.LEFT_CENTER }, mapTypeId: m };
        j = new google.maps.Map(document.getElementById(g), q), j.mapTypes.set("qodef-style", o); var r; for (r = 0; r < l.length; ++r) x(l[r], i, j, k); var s = document.getElementById(g);
        s.style.height = h }

    function x(a, b, c, d) { if ("" !== a) { var e = '<div id="content"><div id="siteNotice"></div><div id="bodyContent"><p>' + a + "</p></div></div>",
                f = new google.maps.InfoWindow({ content: e });
            d.geocode({ address: a }, function(d, e) { if (e === google.maps.GeocoderStatus.OK) { c.setCenter(d[0].geometry.location); var g = new google.maps.Marker({ map: c, position: d[0].geometry.location, icon: b, title: a.store_title });
                    google.maps.event.addListener(g, "click", function() { f.open(c, g) }), google.maps.event.addDomListener(window, "resize", function() { c.setCenter(d[0].geometry.location) }) } }) } }

    function y() { var b = a(".qodef-accordion-holder");
        b.length && b.each(function() { var b = a(this); if (b.hasClass("qodef-accordion") && b.accordion({ animate: "swing", collapsible: !0, active: 0, icons: "", heightStyle: "content" }), b.hasClass("qodef-toggle")) { var c = a(this),
                    d = c.find(".qodef-title-holder"),
                    e = d.next();
                c.addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"), d.addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom"), e.addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), d.each(function() { var b = a(this);
                    b.hover(function() { b.toggleClass("ui-state-hover") }), b.on("click", function() { b.toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"), b.next().toggleClass("ui-accordion-content-active").slideToggle(400) }) }) } }) }

    function z() { var b = a(".qodef-image-gallery");
        b.length && b.each(function() { var b = a(this).children(".qodef-image-gallery-slider"),
                c = 0 != b.data("autoplay"),
                d = 1e3 * b.data("autoplay"),
                e = "yes" == b.data("navigation"),
                f = "yes" == b.data("pagination");
            b.owlCarousel({ items: 1, loop: !0, autoplay: c, autoplayTimeout: d, dots: f, nav: e, navText: ['<span class="qodef-prev-icon"><i class="fa fa-angle-left"></i></span>', '<span class="qodef-next-icon"><i class="fa fa-angle-right"></i></span>'] }) }) }

    function A() { var b = a(".qodef-portfolio-list-holder-outer.qodef-ptf-standard, .qodef-portfolio-list-holder-outer.qodef-ptf-gallery");
        b.length && b.each(function() { var b = a(this);
            B(b) }) }

    function B(a) { var b = "";
        a.hasClass("qodef-ptf-has-filter") && (b = a.find(".qodef-portfolio-filter-holder-inner ul li").data("class"), b = "." + b); var c = a.find(".qodef-portfolio-list-holder");
        c.mixItUp({ callbacks: { onMixLoad: function() { c.find("article").css("visibility", "visible") }, onMixStart: function() { c.find("article").css("visibility", "visible") }, onMixBusy: function() { c.find("article").css("visibility", "visible") } }, selectors: { filter: b }, animation: { effects: "fade", duration: 600 } }) }

    function C() { var b = a(".qodef-portfolio-list-holder-outer.qodef-ptf-pinterest");
        b.length && b.each(function() { var b = a(this).children(".qodef-portfolio-list-holder");
            D(b), a(window).resize(function() { D(b) }) }) }

    function D(a) { a.waitForImages(function() { a.isotope({ layoutMode: "packery", itemSelector: ".qodef-portfolio-item", packery: { columnWidth: ".qodef-portfolio-list-masonry-grid-sizer" } }) }), a.addClass("qodef-appeared") }

    function E() { var b = a(".qodef-portfolio-filter-holder.qodef-masonry-filter");
        b.length && b.each(function() { var b = a(this),
                c = null;
            b.find("ul li").data("class");
            b.find(".filter:first").addClass("current"), b.find(".filter").click(function() { var d = a(this);
                clearTimeout(c), a(".isotope, .isotope .isotope-item").css("transition-duration", "0.8s"), c = setTimeout(function() { a(".isotope, .isotope .isotope-item").css("transition-duration", "0s") }, 700); var e = a(this).attr("data-filter"); return b.siblings(".qodef-portfolio-list-holder-outer").find(".qodef-portfolio-list-holder").isotope({ filter: e }), b.find(".filter").removeClass("current"), d.addClass("current"), !1 }) }) }

    function F() { var b = a(".qodef-portfolio-list-holder-outer.qodef-portfolio-slider-holder");
        b.length && b.each(function() { var b = a(this),
                c = b.children(".qodef-portfolio-list-holder"),
                d = b.data("items"),
                e = !1;
            c.owlCarousel({ items: d, responsive: { 0: { items: 1 }, 480: { items: 2 }, 768: { items: 3 }, 1025: { items: d } }, loop: !0, autoplay: !0, dots: !1, nav: e, navText: ['<span class="qodef-prev-icon"><i class="fa fa-angle-left"></i></span>', '<span class="qodef-next-icon"><i class="fa fa-angle-right"></i></span>'] }) }) }

    function G() { var b = a(".qodef-portfolio-list-holder-outer.qodef-ptf-load-more");
        b.length && b.each(function() { var b, c, d = a(this),
                e = d.find(".qodef-portfolio-list-holder"),
                f = d.find(".qodef-ptf-list-load-more a"); "undefined" != typeof d.data("max-num-pages") && d.data("max-num-pages") !== !1 && (c = d.data("max-num-pages")), f.on("click", function(g) { var h = I(d); if (b = h.nextPage, g.preventDefault(), g.stopPropagation(), c >= b) { var i = J(h);
                    a.ajax({ type: "POST", data: i, url: qodeCoreAjaxUrl, success: function(c) { b++, d.data("next-page", b); var f = a.parseJSON(c),
                                g = H(f.html);
                            d.waitForImages(function() { setTimeout(function() { d.hasClass("qodef-ptf-pinterest") ? e.isotope().append(g).isotope("appended", g).isotope("reloadItems") : e.mixItUp("append", g) }, 400) }) } }) }
                b === c && f.hide() }) }) }

    function H(b) { var c = a.trim(b),
            d = a(c),
            e = a(); return d.each(function(a, b) { 1 === b.nodeType && (e = e.add(this)) }), e }

    function I(a) { var b = {}; return b.type = "", b.columns = "", b.gridSize = "", b.orderBy = "", b.order = "", b.number = "", b.imageSize = "", b.filter = "", b.filterOrderBy = "", b.category = "", b.selectedProjectes = "", b.showLoadMore = "", b.titleTag = "", b.nextPage = "", b.maxNumPages = "", "undefined" != typeof a.data("type") && a.data("type") !== !1 && (b.type = a.data("type")), "undefined" != typeof a.data("grid-size") && a.data("grid-size") !== !1 && (b.gridSize = a.data("grid-size")), "undefined" != typeof a.data("columns") && a.data("columns") !== !1 && (b.columns = a.data("columns")), "undefined" != typeof a.data("order-by") && a.data("order-by") !== !1 && (b.orderBy = a.data("order-by")), "undefined" != typeof a.data("order") && a.data("order") !== !1 && (b.order = a.data("order")), "undefined" != typeof a.data("number") && a.data("number") !== !1 && (b.number = a.data("number")), "undefined" != typeof a.data("image-size") && a.data("image-size") !== !1 && (b.imageSize = a.data("image-size")), "undefined" != typeof a.data("filter") && a.data("filter") !== !1 && (b.filter = a.data("filter")), "undefined" != typeof a.data("filter-order-by") && a.data("filter-order-by") !== !1 && (b.filterOrderBy = a.data("filter-order-by")), "undefined" != typeof a.data("category") && a.data("category") !== !1 && (b.category = a.data("category")), "undefined" != typeof a.data("selected-projects") && a.data("selected-projects") !== !1 && (b.selectedProjectes = a.data("selected-projects")), "undefined" != typeof a.data("show-load-more") && a.data("show-load-more") !== !1 && (b.showLoadMore = a.data("show-load-more")), "undefined" != typeof a.data("title-tag") && a.data("title-tag") !== !1 && (b.titleTag = a.data("title-tag")), "undefined" != typeof a.data("next-page") && a.data("next-page") !== !1 && (b.nextPage = a.data("next-page")), "undefined" != typeof a.data("max-num-pages") && a.data("max-num-pages") !== !1 && (b.maxNumPages = a.data("max-num-pages")), b }

    function J(a) { var b = { action: "qode_core_portfolio_ajax_load_more", type: a.type, columns: a.columns, gridSize: a.gridSize, orderBy: a.orderBy, order: a.order, number: a.number, imageSize: a.imageSize, filter: a.filter, filterOrderBy: a.filterOrderBy, category: a.category, selectedProjectes: a.selectedProjectes, showLoadMore: a.showLoadMore, titleTag: a.titleTag, nextPage: a.nextPage }; return b }

    function K(b, c) { if (a(".qodef-slider .carousel").not(".qodef-disable-slider-header-style-changing").length > 0) { var d = "";
            b.hasClass("light") && (d = "qodef-light-header"), b.hasClass("dark") && (d = "qodef-dark-header"), "" !== d ? c && qodef.body.removeClass("qodef-dark-header qodef-light-header").addClass(d) : c && qodef.body.removeClass("qodef-dark-header qodef-light-header").addClass(qodef.defaultHeaderStyle) } }

    function L() { var b = a(".qodef-cover-boxes");
        b.length > 0 && b.each(function() { var b = 0,
                c = 1; "undefined" != typeof a(this).data("active-element") && a(this).data("active-element") !== !1 && (c = parseFloat(a(this).data("active-element")), b = c - 1); var d = 3; "undefined" != typeof a(this).data("active-element") && 2 == a(this).data("active-element") && (d = 2), b = c > d ? 0 : b, a(this).find("li").eq(b).addClass("act"); var e = a(this);
            a(this).find("li").each(function() { a(this).hover(function() { a(e).find("li").removeClass("act"), a(this).addClass("act") }) }); var f = a(this).find("ul"),
                g = -1;
            f.find("li").each(function() { var b = a(this).outerHeight(!0);
                g = b > g ? b : g }), f.css({ height: g + "px" }) }) }

    function M() { var b = a(".wpcf7");
        b.length > 0 && b.each(function() { var b = a(this),
                c = b.find(".qodef-guests-number"),
                d = b.find(".qodef-guests-attending");
            c.length > 0 && c.find("select").select2({ placeholder: "Number Of Guests", allowClear: !0, minimumResultsForSearch: -1 }), d.length > 0 && d.find("select").select2({ placeholder: "What Will You Be Attending", allowClear: !0, minimumResultsForSearch: -1 }), (c.length > 0 || d.length > 0) && (b.find("form").hasClass("cf7_custom_style_1") ? a("body").addClass("cf7_custom_style_1") : b.find("form").hasClass("cf7_custom_style_2") && a("body").addClass("cf7_custom_style_2")) }) } var N = {};
    qodef.modules.shortcodes = N, N.qodefInitCounter = f, N.qodefInitProgressBars = g, N.qodefInitCountdown = k, N.qodefInitMessages = i, N.qodefInitMessageHeight = j, N.qodefInitTestimonials = m, N.qodefInitCarousels = n, N.qodefInitPieChart = o, N.qodefInitPieChartDoughnut = q, N.qodefInitTabs = r, N.qodefInitTabIcons = s, N.qodefInitBlogListMasonry = t, N.qodefCustomFontResize = u, N.qodefInitImageGallery = z, N.qodefInitAccordions = y, N.qodefShowGoogleMap = v, N.qodefInitPortfolioListPinterest = C, N.qodefInitPortfolio = A, N.qodefInitPortfolioMasonryFilter = E, N.qodefInitPortfolioSlider = F, N.qodefInitPortfolioLoadMore = G, N.qodefCheckSliderForHeaderStyle = K, N.qodefInitCoverBoxes = L, N.qodefInitRSVP = M, N.qodefInitImageSlider = l, N.qodefOnDocumentReady = b, N.qodefOnWindowLoad = c, N.qodefOnWindowResize = d, N.qodefOnWindowScroll = e, a(document).ready(b), a(window).load(c), a(window).resize(d), a(window).scroll(e); var O = qodef.modules.shortcodes.qodefIcon = function() { var b = a(".qodef-icon-shortcode"),
                c = function(a) { a.hasClass("qodef-icon-animation") && a.appear(function() { a.parent(".qodef-icon-animation-holder").addClass("qodef-icon-animation-show") }, { accX: 0, accY: qodefGlobalVars.vars.qodefElementAppearAmount }) },
                d = function(a) { if ("undefined" != typeof a.data("hover-color")) { var b = function(a) { a.data.icon.css("color", a.data.color) },
                            c = a.find(".qodef-icon-element"),
                            d = a.data("hover-color"),
                            e = c.css("color"); "" !== d && (a.on("mouseenter", { icon: c, color: d }, b), a.on("mouseleave", { icon: c, color: e }, b)) } },
                e = function(a) { if ("undefined" != typeof a.data("hover-background-color")) { var b = function(a) { a.data.icon.css("background-color", a.data.color) },
                            c = a.data("hover-background-color"),
                            d = a.css("background-color"); "" !== c && (a.on("mouseenter", { icon: a, color: c }, b), a.on("mouseleave", { icon: a, color: d }, b)) } },
                f = function(a) { if ("undefined" != typeof a.data("hover-border-color")) { var b = function(a) { a.data.icon.css("border-color", a.data.color) },
                            c = a.data("hover-border-color"),
                            d = a.css("border-color"); "" !== c && (a.on("mouseenter", { icon: a, color: c }, b), a.on("mouseleave", { icon: a, color: d }, b)) } }; return { init: function() { b.length && b.each(function() { c(a(this)), d(a(this)), e(a(this)), f(a(this)) }) } } },
        P = qodef.modules.shortcodes.qodefSocialIconWidget = function() { var b = a(".qodef-social-icon-widget-holder"),
                c = function(a) { if ("undefined" != typeof a.data("hover-color")) { var b = function(a) { a.data.icon.css("color", a.data.color) },
                            c = a,
                            d = a.data("hover-color"),
                            e = c.css("color"); "" !== d && (a.on("mouseenter", { icon: c, color: d }, b), a.on("mouseleave", { icon: c, color: e }, b)) } }; return { init: function() { b.length && b.each(function() { c(a(this)) }) } } },
        Q = qodef.modules.shortcodes.qodefButton = function() { var b = a(".qodef-btn"),
                c = function(a) { if ("undefined" != typeof a.data("hover-color")) { var b = function(a) { a.data.button.css("color", a.data.color) },
                            c = a.css("color"),
                            d = a.data("hover-color");
                        a.on("mouseenter", { button: a, color: d }, b), a.on("mouseleave", { button: a, color: c }, b) } },
                d = function(a) { if ("undefined" != typeof a.data("hover-bg-color")) { var b = function(a) { a.data.button.css("background-color", a.data.color) },
                            c = a.css("background-color"),
                            d = a.data("hover-bg-color");
                        a.on("mouseenter", { button: a, color: d }, b), a.on("mouseleave", { button: a, color: c }, b) } },
                e = function(a) { if ("undefined" != typeof a.data("hover-border-color")) { var b = function(a) { a.data.button.css("border-color", a.data.color) },
                            c = a.css("borderTopColor"),
                            d = a.data("hover-border-color");
                        a.on("mouseenter", { button: a, color: d }, b), a.on("mouseleave", { button: a, color: c }, b) } }; return { init: function() { b.length && b.each(function() { c(a(this)), d(a(this)), e(a(this)) }) } } },
        R = qodef.modules.shortcodes.qodefSlider = function() { var b = a(".qodef-slider .carousel"),
                c = /url\(["']?([^'")]+)['"]?\)/,
                d = { zoom_center: "1.2, 0, 0, 1.2, 0, 0", zoom_top_left: "1.2, 0, 0, 1.2, -150, -150", zoom_top_right: "1.2, 0, 0, 1.2, 150, -150", zoom_bottom_left: "1.2, 0, 0, 1.2, -150, 150", zoom_bottom_right: "1.2, 0, 0, 1.2, 150, 150" },
                e = /\([0-9epx\.\, \t\-]+/gi,
                f = function(a) { return a.match(e)[0].substr(1).split(",").map(function(a) { return parseFloat(a) }) },
                g = ["transform", "-webkit-transform"],
                h = function(a) { var b = null; return g.some(function(c) { return b = a.css(c), null !== b && "" !== b }), b = b && "none" !== b ? b : "matrix(1,0,0,1,0,0)", f(b) },
                i = function(a, b) { for (var c = "matrix(" + b.join(",") + ")", d = g.length - 1; d >= 0; --d) a.css(g[d], c + " rotate(0.01deg)") },
                j = function(a, b, c) { return a + (b - a) * (c / 100) };
            a.fn.transformAnimate = function(b) { var c = { transform: "matrix(1,0,0,1,0,0)" };
                a.extend(c, b), this.css("percentAnim", 0); var d = h(this),
                    e = f(c.transform); return c.step = function(c, f) { var g = a(this),
                        h = d.map(function(a, b) { return j(a, e[b], c) });
                    i(g, h), b.step && b.step.apply(this, [h, f]) }, this.stop().animate({ percentAnim: 100 }, c) }; var k = function(a, b, c, d) { var e = b;
                    d || (qodef.windowWidth > c[0] ? e = b : qodef.windowWidth > c[1] ? e = .75 * b : qodef.windowWidth > c[2] ? e = .6 * b : qodef.windowWidth > c[3] ? e = .55 * b : qodef.windowWidth <= c[3] && (e = .45 * b)), a.css({ height: e + "px" }), a.find(".qodef-slider-preloader").css({ height: e + "px" }), a.find(".qodef-slider-preloader .qodef-ajax-loader").css({ display: "block" }), a.find(".item").css({ height: e + "px" }), 0 === qodefPerPageVars.vars.qodefStickyScrollAmount && (qodef.modules.header.stickyAppearAmount = e) },
                l = function(b) { var c = qodef.windowWidth < 1025 ? qodefGlobalVars.vars.qodefMobileHeaderHeight + a(".qodef-top-bar").height() : 0;
                    b.css({ height: qodef.windowHeight - c + "px" }), b.find(".qodef-slider-preloader").css({ height: qodef.windowHeight - c + "px" }), b.find(".qode-slider-preloader .qodef-ajax-loader").css({ display: "block" }), b.find(".item").css({ height: qodef.windowHeight - c + "px" }), 0 === qodefPerPageVars.vars.qodefStickyScrollAmount && (qodef.modules.header.stickyAppearAmount = qodef.windowHeight) },
                m = function(b) { b.find(".qodef-slide-element-text-small, .qodef-slide-element-text-normal, .qodef-slide-element-text-large, .qodef-slide-element-text-extra-large").each(function() { var b = a(this); "undefined" == typeof b.data("default-font-size") && b.data("default-font-size", parseInt(b.css("font-size"), 10)), "undefined" == typeof b.data("default-line-height") && b.data("default-line-height", parseInt(b.css("line-height"), 10)), "undefined" == typeof b.data("default-letter-spacing") && b.data("default-letter-spacing", parseInt(b.css("letter-spacing"), 10)) }), b.find(".qodef-slide-element-responsive-text").each(function() { "undefined" == typeof a(this).data("default-font-size") && a(this).data("default-font-size", parseInt(a(this).css("font-size"), 10)), "undefined" == typeof a(this).data("default-line-height") && a(this).data("default-line-height", parseInt(a(this).css("line-height"), 10)), "undefined" == typeof a(this).data("default-letter-spacing") && a(this).data("default-letter-spacing", parseInt(a(this).css("letter-spacing"), 10)) }), b.find(".qodef-slide-element-responsive-button").each(function() { "undefined" == typeof a(this).data("default-font-size") && a(this).data("default-font-size", parseInt(a(this).find("a").css("font-size"), 10)), "undefined" == typeof a(this).data("default-line-height") && a(this).data("default-line-height", parseInt(a(this).find("a").css("line-height"), 10)), "undefined" == typeof a(this).data("default-ver-padding") && a(this).data("default-ver-padding", parseInt(a(this).find("a").css("padding-top"), 10)), "undefined" == typeof a(this).data("default-hor-padding") && a(this).data("default-hor-padding", parseInt(a(this).find("a").css("padding-left"), 10)) }), b.find(".qodef-slide-element").each(function() { var b = a(this); "undefined" == typeof b.data("default-margin-top") && b.data("default-margin-top", parseInt(b.css("margin-top"), 10)), "undefined" == typeof b.data("default-margin-bottom") && b.data("default-margin-bottom", parseInt(b.css("margin-bottom"), 10)), "undefined" == typeof b.data("default-margin-left") && b.data("default-margin-left", parseInt(b.css("margin-left"), 10)), "undefined" == typeof b.data("default-margin-right") && b.data("default-margin-right", parseInt(b.css("margin-right"), 10)) }), n(b) },
                n = function(b) { var c = { mobile: 600, tabletp: 800, tabletl: 1024, laptop: 1440 };
                    b.find(".qodef-slider-elements-container").each(function() { var b = a(this),
                            d = b.filter(".qodef-custom-elements").add(b.not(".qodef-custom-elements").find(".qodef-slider-elements-holder-frame")).not(".qodef-grid");
                        d.length && (c.mobile >= qodef.windowWidth && b.attr("data-width-mobile").length ? d.css("width", b.data("width-mobile") + "%") : c.tabletp >= qodef.windowWidth && b.attr("data-width-tablet-p").length ? d.css("width", b.data("width-tablet-p") + "%") : c.tabletl >= qodef.windowWidth && b.attr("data-width-tablet-l").length ? d.css("width", b.data("width-tablet-l") + "%") : c.laptop >= qodef.windowWidth && b.attr("data-width-laptop").length ? d.css("width", b.data("width-laptop") + "%") : b.attr("data-width-desktop").length && d.css("width", b.data("width-desktop") + "%")) }), b.find(".item").each(function() { var b = a(this),
                            d = b.find(".qodef-slider-elements-holder-frame").data("default-width"),
                            e = b.find(".qodef-slide-element");
                        e.each(function() { var b, e = a(this),
                                f = e.data("default-margin-top"),
                                g = e.data("default-margin-bottom"),
                                h = e.data("default-margin-left"),
                                i = e.data("default-margin-right"),
                                j = "undefined" != typeof e.data("resp-scale") ? e.data("resp-scale") : void 0;
                            b = c.mobile >= qodef.windowWidth ? "undefined" == typeof j ? qodef.windowWidth / d : parseFloat(j.mobile) : c.tabletp >= qodef.windowWidth ? "undefined" == typeof j ? qodef.windowWidth / d : parseFloat(j.tabletp) : c.tabletl >= qodef.windowWidth ? "undefined" == typeof j ? qodef.windowWidth / d : parseFloat(j.tabletl) : c.laptop >= qodef.windowWidth ? "undefined" == typeof j ? qodef.windowWidth / d : parseFloat(j.laptop) : "undefined" == typeof j ? qodef.windowWidth / d : parseFloat(j.desktop), e.css({ "margin-top": Math.round(b * f) + "px", "margin-bottom": Math.round(b * g) + "px", "margin-left": Math.round(b * h) + "px", "margin-right": Math.round(b * i) + "px" }) }), e.filter(".qodef-slide-element-responsive-text, .qodef-slide-element-responsive-button, .qodef-slide-element-responsive-image").add(e.find("a.qodef-slide-element-responsive-text, span.qodef-slide-element-responsive-text")).each(function() { var b, e, f, g = a(this),
                                h = "undefined" != typeof g.data("resp-scale") ? g.data("resp-scale") : void 0,
                                i = "undefined" != typeof g.data("resp-left") ? g.data("resp-left") : void 0,
                                j = "undefined" != typeof g.data("resp-top") ? g.data("resp-top") : void 0; if (c.mobile >= qodef.windowWidth ? (b = "undefined" == typeof h ? qodef.windowWidth / d : parseFloat(h.mobile), e = "undefined" == typeof i ? "undefined" != typeof g.data("left") ? g.data("left") + "%" : "" : "" != i.mobile ? i.mobile + "%" : g.data("left") + "%", f = "undefined" == typeof j ? "undefined" != typeof g.data("top") ? g.data("top") + "%" : "" : "" != j.mobile ? j.mobile + "%" : g.data("top") + "%") : c.tabletp >= qodef.windowWidth ? (b = "undefined" == typeof h ? qodef.windowWidth / d : parseFloat(h.tabletp), e = "undefined" == typeof i ? "undefined" != typeof g.data("left") ? g.data("left") + "%" : "" : "" != i.tabletp ? i.tabletp + "%" : g.data("left") + "%", f = "undefined" == typeof j ? "undefined" != typeof g.data("top") ? g.data("top") + "%" : "" : "" != j.tabletp ? j.tabletp + "%" : g.data("top") + "%") : c.tabletl >= qodef.windowWidth ? (b = "undefined" == typeof h ? qodef.windowWidth / d : parseFloat(h.tabletl), e = "undefined" == typeof i ? "undefined" != typeof g.data("left") ? g.data("left") + "%" : "" : "" != i.tabletl ? i.tabletl + "%" : g.data("left") + "%", f = "undefined" == typeof j ? "undefined" != typeof g.data("top") ? g.data("top") + "%" : "" : "" != j.tabletl ? j.tabletl + "%" : g.data("top") + "%") : c.laptop >= qodef.windowWidth ? (b = "undefined" == typeof h ? qodef.windowWidth / d : parseFloat(h.laptop), e = "undefined" == typeof i ? "undefined" != typeof g.data("left") ? g.data("left") + "%" : "" : "" != i.laptop ? i.laptop + "%" : g.data("left") + "%", f = "undefined" == typeof j ? "undefined" != typeof g.data("top") ? g.data("top") + "%" : "" : "" != j.laptop ? j.laptop + "%" : g.data("top") + "%") : (b = "undefined" == typeof h ? qodef.windowWidth / d : parseFloat(h.desktop), e = "undefined" == typeof i ? "undefined" != typeof g.data("left") ? g.data("left") + "%" : "" : "" != i.desktop ? i.desktop + "%" : g.data("left") + "%", f = "undefined" == typeof j ? "undefined" != typeof g.data("top") ? g.data("top") + "%" : "" : "" != j.desktop ? j.desktop + "%" : g.data("top") + "%"), b) { g.show(); var k, l, m, n, o; if (g.is(".qodef-slide-element-responsive-button")) k = g.data("default-font-size"), l = g.data("default-line-height"), m = g.data("default-letter-spacing"), n = g.data("default-ver-padding"), o = g.data("default-hor-padding"), g.css({ left: e, top: f }).find(".qodef-btn").css({ "font-size": Math.round(b * k) + "px", "line-height": Math.round(b * l) + "px", "letter-spacing": Math.round(b * m) + "px", "padding-left": Math.round(b * o) + "px", "padding-right": Math.round(b * o) + "px", "padding-top": Math.round(b * n) + "px", "padding-bottom": Math.round(b * n) + "px" });
                                else if (g.is(".qodef-slide-element-responsive-image"))
                                    if (b != qodef.windowWidth / d) { var p = g.data("upload-width"),
                                            q = g.data("upload-height");
                                        g.filter(".custom-image").css({ left: e, top: f }).add(g.not(".custom-image").find("img")).css({ width: Math.round(b * p) + "px", height: Math.round(b * q) + "px" }) } else { var r = g.data("width");
                                        g.filter(".custom-image").css({ left: e, top: f }).add(g.not(".custom-image").find("img")).css({ width: r + "%", height: "" }) }
                                else k = g.data("default-font-size"), l = g.data("default-line-height"), m = g.data("default-letter-spacing"), g.css({ left: e, top: f, "font-size": Math.round(b * k) + "px", "line-height": Math.round(b * l) + "px", "letter-spacing": Math.round(b * m) + "px" }) } else g.hide() }) }); var d = b.find(".carousel-indicators");
                    b.find(".qodef-slide-element-section-link").css("bottom", d.length ? parseInt(d.css("bottom"), 10) + d.outerHeight() + 10 + "px" : "20px") },
                o = function(b) { b.find(".item").each(function() { var b = a(this).find(".qodef-slide-element-button-inline");
                        b.css("display", "inline-block").wrapAll('<div class="qodef-slide-elements-buttons-wrapper" style="text-align: ' + b.eq(0).css("text-align") + ';"/>') }) },
                p = function(b) { var c = [1600, 1200, 900, 650, 500, 320]; if (m(b), b.hasClass("qodef-full-screen")) l(b), a(window).resize(function() { l(b), n(b) });
                    else if (b.hasClass("qodef-responsive-height")) { var d = b.data("height");
                        k(b, d, c, !1), a(window).resize(function() { k(b, d, c, !1), n(b) }) } else { var d = b.data("height");
                        b.find(".qodef-slider-preloader").css({ height: b.height() + "px" }), b.find(".qodef-slider-preloader .qodef-ajax-loader").css({ display: "block" }), qodef.windowWidth < 1025 ? k(b, d, c, !1) : k(b, d, c, !0), a(window).resize(function() { qodef.windowWidth < 1025 ? k(b, d, c, !1) : k(b, d, c, !0), n(b) }) } },
                q = function(a, b, c) { 1 == b ? (a.find(".left.carousel-control .prev").html(c), a.find(".right.carousel-control .next").html(b + 1)) : b == c ? (a.find(".left.carousel-control .prev").html(b - 1), a.find(".right.carousel-control .next").html(1)) : (a.find(".left.carousel-control .prev").html(b - 1), a.find(".right.carousel-control .next").html(b + 1)) },
                r = function(b) { var c = 1500,
                        d = 1920,
                        e = 1080,
                        f = 1920 / 1080;
                    b.find(".item .qodef-video .qodef-video-wrap").each(function() { var b = qodef.windowWidth,
                            g = a(this).closest(".carousel").height();
                        a(this).width(b), c = f * (g + 20), a(this).height(g); var h = b / d,
                            i = (g - qodefGlobalVars.vars.qodefMenuAreaHeight) / e,
                            j = i;
                        h > i && (j = h), c > j * d && (j = c / d), a(this).find("video, .mejs-overlay, .mejs-poster").width(Math.ceil(j * d + 2)), a(this).find("video, .mejs-overlay, .mejs-poster").height(Math.ceil(j * e + 2)), a(this).scrollLeft((a(this).find("video").width() - b) / 2), a(this).find(".mejs-overlay, .mejs-poster").scrollTop((a(this).find("video").height() - g) / 2), a(this).scrollTop((a(this).find("video").height() - g) / 2) }) },
                s = function(b) { a(".item .qodef-video-wrap .qodef-video-element").mediaelementplayer({ enableKeyboard: !1, iPadUseNativeControls: !1, pauseOtherPlayers: !1, iPhoneUseNativeControls: !1, AndroidUseNativeControls: !1 }), r(b), a(window).resize(function() { r(b) }), navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (a(".qodef-slider .qodef-mobile-video-image").show(), a(".qodef-slider .qodef-video-wrap").remove()) },
                t = function(b) { if (b.hasClass("qodef-slide-peek")) { var c, d = function(a, b) { var d = a.is(".left") ? "left" : "right",
                                    e = h.filter("." + d); if (b) { a.addClass("hovered"); var f = (g.index(g.filter(".active")) + ("left" == d ? -1 : 1) + g.length) % g.length;
                                    e.find(".qodef-slider-peeker-inner").css({ "background-image": g.eq(f).find(".qodef-image, .qodef-mobile-video-image").css("background-image"), width: c + "px" }), e.addClass("shown") } else a.removeClass("hovered"), h.removeClass("shown") },
                            e = function(a, b) { if (b) { a.addClass("hovered"); var d = a.data("slide-to"),
                                        e = g.index(g.filter(".active")); if (e != d) { var f = e > d ? "left" : "right",
                                            i = h.filter("." + f);
                                        i.find(".qodef-slider-peeker-inner").css({ "background-image": g.eq(d).find(".qodef-image, .qodef-mobile-video-image").css("background-image"), width: c + "px" }), i.addClass("shown") } } else a.removeClass("hovered"), h.removeClass("shown") },
                            f = function() { c = g.filter(".active").width(), c += c % 2 ? 1 : 0, g.children(".qodef-image, .qodef-video").css({ position: "absolute", width: c + "px", height: "110%", left: "50%", transform: "translateX(-50%)" }) },
                            g = b.find(".item");
                        f(), a(window).resize(f), b.find(".carousel-inner").append('<div class="qodef-slider-peeker left"><div class="qodef-slider-peeker-inner"></div></div><div class="qodef-slider-peeker right"><div class="qodef-slider-peeker-inner"></div></div>'); var h = b.find(".qodef-slider-peeker"),
                            i = b.find(".carousel-control"),
                            j = b.find(".carousel-indicators > li");
                        i.hover(function() { d(a(this), !0) }, function() { d(a(this), !1) }), j.hover(function() { e(a(this), !0) }, function() { e(a(this), !1) }), b.on("slide.bs.carousel", function() { setTimeout(function() { h.addClass("qodef-slide-peek-in-progress").removeClass("shown") }, 500) }), b.on("slid.bs.carousel", function() { i.filter(".hovered").each(function() { d(a(this), !0) }), setTimeout(function() { j.filter(".hovered").each(function() { e(a(this), !0) }) }, 200), h.removeClass("qodef-slide-peek-in-progress") }) } },
                u = function(b) { if (b.hasClass("qodef-slider-thumbs")) { var d, e, f, g = b.find(".item").length,
                            h = b.find(".item").index(a(".item.active")[0]) + 1;
                        q(b, h, g), b.find(".item.active").prev(".item").length ? (b.find(".item.active").prev("div").find(".qodef-image").length ? (d = c.exec(b.find(".active").prev("div").find(".qodef-image").attr("style")), e = new Image, e.src = d[1]) : (e = b.find(".active").prev("div").find("> .qodef-video").clone(), e.find(".qodef-video-overlay, .mejs-offscreen").remove(), e.find(".qodef-video-wrap").width(150).height(84), e.find(".mejs-container").width(150).height(84), e.find("video").width(150).height(84)), b.find(".left.carousel-control .img .old").fadeOut(300, function() { a(this).remove() }), b.find(".left.carousel-control .img").append(e).find("div.thumb-image, > img, div.qodef-video").fadeIn(300).addClass("old")) : (b.find(".carousel-inner .item:last-child .qodef-image").length ? (d = c.exec(b.find(".carousel-inner .item:last-child .qodef-image").attr("style")), e = new Image, e.src = d[1]) : (e = b.find(".carousel-inner .item:last-child > .qodef-video").clone(), e.find(".qodef-video-overlay, .mejs-offscreen").remove(), e.find(".qodef-video-wrap").width(150).height(84), e.find(".mejs-container").width(150).height(84), e.find("video").width(150).height(84)), b.find(".left.carousel-control .img .old").fadeOut(300, function() { a(this).remove() }), b.find(".left.carousel-control .img").append(e).find("div.thumb-image, > img, div.qodef-video").fadeIn(300).addClass("old")), b.find(".active").next("div.item").length ? (b.find(".active").next("div").find(".qodef-image").length ? (d = c.exec(b.find(".active").next("div").find(".qodef-image").attr("style")), f = new Image, f.src = d[1]) : (f = b.find(".active").next("div").find("> .qodef-video").clone(), f.find(".qodef-video-overlay, .mejs-offscreen").remove(), f.find(".qodef-video-wrap").width(150).height(84), f.find(".mejs-container").width(150).height(84), f.find("video").width(150).height(84)), b.find(".right.carousel-control .img .old").fadeOut(300, function() { a(this).remove() }), b.find(".right.carousel-control .img").append(f).find("div.thumb-image, > img, div.qodef-video").fadeIn(300).addClass("old")) : (b.find(".carousel-inner .item:first-child .qodef-image").length ? (d = c.exec(b.find(".carousel-inner .item:first-child .qodef-image").attr("style")), f = new Image, f.src = d[1]) : (f = b.find(".carousel-inner .item:first-child > .qodef-video").clone(), f.find(".qodef-video-overlay, .mejs-offscreen").remove(), f.find(".qodef-video-wrap").width(150).height(84), f.find(".mejs-container").width(150).height(84), f.find("video").width(150).height(84)), b.find(".right.carousel-control .img .old").fadeOut(300, function() { a(this).remove() }), b.find(".right.carousel-control .img").append(f).find("div.thumb-image, > img, div.qodef-video").fadeIn(300).addClass("old")) } },
                v = function(b, c, e) { b.find(".carousel-inner .item:first-child").addClass("active"), K(a(".carousel .active"), b.hasClass("qodef-header-effect")), b.hasClass("qodef-slider-numbers") && q(b, 1, c), b.find(".item video").length && s(b), u(b), t(b), b.find(".qodef-slide-element-wrapper-link").mouseenter(function() { a(this).removeClass("inheriting") }).mouseleave(function() { a(this).addClass("inheriting") }), b.hasClass("qodef-auto-start") ? (b.carousel({ interval: e, pause: !1 }), b.find(".slide_buttons_holder .qbutton").mouseenter(function() { b.carousel("pause") }).mouseleave(function() { b.carousel("cycle") })) : b.carousel({ interval: 0, pause: !1 }), a(window).scroll(function() { b.hasClass("qodef-full-screen") && qodef.scroll > qodef.windowHeight && qodef.windowWidth > 1024 ? b.carousel("pause") : !b.hasClass("qodef-full-screen") && qodef.scroll > b.height() && qodef.windowWidth > 1024 ? b.carousel("pause") : b.carousel("cycle") }), a(".carousel-inner .item:first-child").hasClass("qodef-animate-image") && qodef.windowWidth > 1024 && b.find(".carousel-inner .item.qodef-animate-image:first-child .qodef-image").transformAnimate({ transform: "matrix(" + d[a(".carousel-inner .item:first-child").data("qodef_animate_image")] + ")", duration: 3e4 }) }; return { init: function() { if (b.length) { if (b.each(function() { var b = a(this),
                                    e = b.data("slide_animation_timeout"),
                                    f = b.find(".item").length; if (o(b), p(b), qodef.htmlEl.hasClass("touch")) { if (b.find(".item:first-child .qodef-mobile-video-image").length > 0) var g = c.exec(b.find(".item:first-child .qodef-mobile-video-image").attr("style"));
                                    else var g = c.exec(b.find(".item:first-child .qodef-image").attr("style")); if (g) { var h = new Image;
                                        h.src = g[1], a(h).load(function() { a(".qodef-slider-preloader").fadeOut(500), v(b, f, e) }) } } else if (b.find(".item:first-child video").length > 0) b.find(".item:first-child video").eq(0).one("loadeddata", function() { a(".qodef-slider-preloader").fadeOut(500), v(b, f, e) });
                                else { var g = c.exec(b.find(".item:first-child .qodef-image").attr("style")); if (g) { var h = new Image;
                                        h.src = g[1], a(h).load(function() { a(".qodef-slider-preloader").fadeOut(500), v(b, f, e) }) } }
                                b.on("slide.bs.carousel", function() { b.addClass("qodef-in-progress"), b.find(".active .qodef-slider-elements-holder-frame, .active .qodef-slide-element-section-link").fadeTo(250, 0) }), b.on("slid.bs.carousel", function() { if (b.removeClass("qodef-in-progress"), b.find(".active .qodef-slider-elements-holder-frame, .active .qodef-slide-element-section-link").fadeTo(0, 1), b.hasClass("qodef-slider-numbers")) { var c = a(".item").index(a(".item.active")[0]) + 1;
                                        q(b, c, f) }
                                    a(".item.qodef-animate-image .qodef-image").stop().css({ transform: "", "-webkit-transform": "" }), a(".item.active").hasClass("qodef-animate-image") && qodef.windowWidth > 1025 && a(".item.qodef-animate-image.active .qodef-image").transformAnimate({ transform: "matrix(" + d[a(".item.qodef-animate-image.active").data("qodef_animate_image")] + ")", duration: 3e4 }), b.hasClass("qodef-slider-thumbs") && u(b) }), b.swipe({ swipeLeft: function() { b.carousel("next") }, swipeRight: function() { b.carousel("prev") }, threshold: 20 }) }), a(".no-touch .carousel").length) { var e = skrollr.init({ smoothScrolling: !1, forceHeight: !1 });
                            e.refresh() }
                        a(window).scroll(function() { a(".qodef-slider .carousel").height() < qodef.scroll ? a(".qodef-slider .carousel").addClass("qodef-disable-slider-header-style-changing") : (a(".qodef-slider .carousel").removeClass("qodef-disable-slider-header-style-changing"), K(a(".qodef-slider .carousel .active"), a(".qodef-slider .carousel").hasClass("qodef-header-effect"))), a(".qodef-slider .carousel").hasClass("qodef-full-screen") && qodef.scroll > qodef.windowHeight && qodef.windowWidth > 1025 ? a(".qodef-slider .carousel").find(".carousel-inner, .carousel-indicators").hide() : !a(".qodef-slider .carousel").hasClass("qodef-full-screen") && qodef.scroll > a(".qodef-slider .carousel").height() && qodef.windowWidth > 1025 ? a(".qodef-slider .carousel").find(".carousel-inner, .carousel-indicators").hide() : a(".qodef-slider .carousel").find(".carousel-inner, .carousel-indicators").show() }) } } } },
        S = qodef.modules.shortcodes.qodefInitIconList = function() { var b = a(".qodef-animate-list"),
                c = function(a) { setTimeout(function() { a.appear(function() { a.addClass("qodef-appeared") }, { accX: 0, accY: qodefGlobalVars.vars.qodefElementAppearAmount }) }, 30) }; return { init: function() { b.length && b.each(function() { c(a(this)) }) } } } }(jQuery),
function(a) { "use strict";

    function b() { f(), g(), h() }

    function c() {}

    function d() {}

    function e() {}

    function f() { a(document).on("click", ".qodef-quantity-minus, .qodef-quantity-plus", function(b) { b.stopPropagation(); var c, d = a(this),
                e = d.siblings(".qodef-quantity-input"),
                f = parseFloat(e.attr("step")),
                g = parseFloat(e.attr("max")),
                h = !1,
                i = parseFloat(e.val());
            d.hasClass("qodef-quantity-minus") && (h = !0), h ? (c = i - f, c >= 1 ? e.val(c) : e.val(0)) : (c = i + f, void 0 === g ? e.val(c) : c >= g ? e.val(g) : e.val(c)), e.trigger("change") }) }

    function g() { a(".woocommerce-ordering .orderby").length && a(".woocommerce-ordering .orderby").select2({ minimumResultsForSearch: -1 }), a("select#calc_shipping_country").length && a("select#calc_shipping_country").select2(), a("select#calc_shipping_state").length && a("select#calc_shipping_state").select2(), a(".qodef-cart-totals").length > 0 && a(document.body).on("updated_shipping_method", function() { var b = a(".qodef-cart-totals").find("select#calc_shipping_country");
            b.length && b.select2({}); var c = a(".qodef-cart-totals").find("select#calc_shipping_state");
            c.length && c.select2({}) }), a("table.variations").length > 0 && a("table.variations").find("td.value").each(function() { a(this).find("select").select2({ minimumResultsForSearch: -1 }).on("select2-opening", function() { a(this).trigger("focusin") }) }) }

    function h() { var b = a(".woocommerce-checkout-review-order");
        b.length > 0 && b.on("click", 'input[name="payment_method"]', function() { a(".payment_methods input.input-radio").length > 1 && (a(".payment_methods input.input-radio").removeClass("checked"), a(this).is(":checked") && a(this).addClass("checked")) }); var c = a("#customer_login"); if (c.length > 0) { var d = c.find("#rememberme");
            d.on("click", function() { a(this).is(":checked") ? (a(this).addClass("checked"), a(this).parents("label").addClass("checked")) : (a(this).removeClass("checked"), a(this).parents("label").removeClass("checked")) }) }
        a(".input-checkbox").on("click", function() { a(this).is(":checked") ? (a(this).addClass("checked"), a(this).siblings("label").addClass("checked")) : (a(this).removeClass("checked"), a(this).siblings("label").removeClass("checked")) }) } var i = {};
    qodef.modules.woocommerce = i, i.qodefInitQuantityButtons = f, i.qodefInitSelect2 = g, i.qodefInitcheckout = h, i.qodefOnDocumentReady = b, i.qodefOnWindowLoad = c, i.qodefOnWindowResize = d, i.qodefOnWindowScroll = e, a(document).ready(b), a(window).load(c), a(window).resize(d), a(window).scroll(e) }(jQuery),
function(a) { "use strict";

    function b() {}

    function c() { g().init() }

    function d() {}

    function e() {} var f = {};
    qodef.modules.portfolio = f, f.qodefOnDocumentReady = b, f.qodefOnWindowLoad = c, f.qodefOnWindowResize = d, f.qodefOnWindowScroll = e, a(document).ready(b), a(window).load(c), a(window).resize(d), a(window).scroll(e); var g = function() { var b = a(".qodef-follow-portfolio-info .small-images.qodef-portfolio-single-holder .qodef-portfolio-info-holder, .qodef-follow-portfolio-info .small-slider.qodef-portfolio-single-holder .qodef-portfolio-info-holder"); if (b.length) var c = b.parent(),
            d = c.offset().top,
            e = c.height(),
            f = a(".qodef-portfolio-media"),
            g = f.height(),
            h = a(".header-appear, .qodef-fixed-wrapper"),
            i = h.length ? h.height() : 0; var j = function() { b.length && g > e && qodef.scroll > d && b.animate({ marginTop: qodef.scroll - d + qodefGlobalVars.vars.qodefAddForAdminBar + i + 20 }) },
            k = function() { b.length && g > e && (qodef.scroll > d ? qodef.scroll + i + qodefGlobalVars.vars.qodefAddForAdminBar + e + 20 < d + g ? (a(".header-appear, .qodef-fixed-wrapper").length && (i = a(".header-appear, .qodef-fixed-wrapper").height()), b.stop().animate({ marginTop: qodef.scroll - d + qodefGlobalVars.vars.qodefAddForAdminBar + i + 20 }), i = 0) : b.stop().animate({ marginTop: g - e }) : b.stop().animate({ marginTop: 0 })) }; return { init: function() { j(), a(window).scroll(function() { k() }) } } } }(jQuery);;
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2019 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */
document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
    function() { for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ") }(),
    function($) { "function" != typeof window.vc_js && (window.vc_js = function() { "use strict";
            vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), vc_gridBehaviour(), vc_rowBehaviour(), vc_prepareHoverBox(), vc_googleMapsPointer(), vc_ttaActivation(), jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500) }), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function($parent) {
            ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function() { var this_element = jQuery(this),
                    sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval"), 10),
                    sliderFx = this_element.attr("data-flex_fx"),
                    slideshow = !0;
                0 === sliderTimeout && (slideshow = !1), this_element.is(":visible") && this_element.flexslider({ animation: sliderFx, slideshow: slideshow, slideshowSpeed: sliderTimeout, sliderSpeed: 800, smoothHeight: !0 }) }) }), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function() { 0 < jQuery(".wpb_googleplus").length && function() { var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://apis.google.com/js/plusone.js"; var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s) }() }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function() { 0 < jQuery(".wpb_pinterest").length && function() { var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://assets.pinterest.com/js/pinit.js"; var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s) }() }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function() { void 0 !== jQuery.fn.vcwaypoint && jQuery(".vc_progress_bar").each(function() { var $el = jQuery(this);
                $el.vcwaypoint(function() { $el.find(".vc_single_bar").each(function(index) { var bar = jQuery(this).find(".vc_bar"),
                            val = bar.data("percentage-value");
                        setTimeout(function() { bar.css({ width: val + "%" }) }, 200 * index) }) }, { offset: "85%" }) }) }), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function() { void 0 !== jQuery.fn.vcwaypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function() { var $el = jQuery(this);
                $el.vcwaypoint(function() { $el.addClass("wpb_start_animation animated") }, { offset: "85%" }) }) }), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function($el) {
            function event(e) { e && e.preventDefault && e.preventDefault(); var element = jQuery(this).closest(".vc_toggle"),
                    content = element.find(".vc_toggle_content");
                element.hasClass("vc_toggle_active") ? content.slideUp({ duration: 300, complete: function() { element.removeClass("vc_toggle_active") } }) : content.slideDown({ duration: 300, complete: function() { element.addClass("vc_toggle_active") } }) }
            $el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click").on("click", event) : $el.find(".vc_toggle_title").off("click").on("click", event) : jQuery(".vc_toggle_title").off("click").on("click", event) }), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function($tab) { if (jQuery.ui) { var $call = $tab || jQuery(".wpb_tabs, .wpb_tour"),
                    ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10",
                    old_version = 1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9;
                $call.each(function(index) { var $tabs, interval = jQuery(this).attr("data-interval"),
                        tabs_array = []; if ($tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({ show: function(event, ui) { wpb_prepare_tab_content(event, ui) }, activate: function(event, ui) { wpb_prepare_tab_content(event, ui) } }), interval && 0 < interval) try { $tabs.tabs("rotate", 1e3 * interval) } catch (err) { window.console && window.console.warn && console.warn("tabs behaviours error", err) }
                    jQuery(this).find(".wpb_tab").each(function() { tabs_array.push(this.id) }), jQuery(this).find(".wpb_tabs_nav li").on("click", function(e) { return e && e.preventDefault && e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1 }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click", function(e) { var index, length;
                        e && e.preventDefault && e.preventDefault(), old_version ? (index = $tabs.tabs("option", "selected"), jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, index < 0 ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)) : (index = $tabs.tabs("option", "active"), length = $tabs.find(".wpb_tab").length, index = jQuery(this).parent().hasClass("wpb_next_slide") ? length <= index + 1 ? 0 : index + 1 : index - 1 < 0 ? length - 1 : index - 1, $tabs.tabs("option", "active", index)) }) }) } }), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function() { jQuery(".wpb_accordion").each(function(index) { var $tabs, active_tab, collapsible, $this = jQuery(this);
                $this.attr("data-interval"), collapsible = !1 === (active_tab = !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab"), 10) && parseInt($this.data("active-tab"), 10) - 1) || "yes" === $this.data("collapsible"), $tabs = $this.find(".wpb_accordion_wrapper").accordion({ header: "> div > h3", autoHeight: !1, heightStyle: "content", active: active_tab, collapsible: collapsible, navigation: !0, activate: vc_accordionActivate, change: function(event, ui) { void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel) } }), !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function() {}) }) }), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function() { var layout_modes = { fitrows: "fitRows", masonry: "masonry" };
            jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function() { var $container = jQuery(this),
                    $thumbs = $container.find(".wpb_thumbnails"),
                    layout_mode = $thumbs.attr("data-layout-mode");
                $thumbs.isotope({ itemSelector: ".isotope-item", layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode] }), $container.find(".categories_filter a").data("isotope", $thumbs).on("click", function(e) { e && e.preventDefault && e.preventDefault(); var $thumbs = jQuery(this).data("isotope");
                    jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({ filter: jQuery(this).attr("data-filter") }) }), jQuery(window).bind("load resize", function() { $thumbs.isotope("layout") }) }) }), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function($parent) {
            ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function() { var $this = jQuery(this); if (!0 !== $this.data("carousel_enabled") && $this.is(":visible")) { $this.data("carousel_enabled", !0);
                    getColumnsCount(jQuery(this));
                    jQuery(this).hasClass("columns_count_1") && 900; var carousel_li = jQuery(this).find(".wpb_thumbnails-fluid li");
                    carousel_li.css({ "margin-right": carousel_li.css("margin-left"), "margin-left": 0 }); var fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid");
                    fluid_ul.width(fluid_ul.width() + 300), jQuery(window).on("resize", function() { screen_size != (screen_size = getSizeName()) && window.setTimeout(function() { location.reload() }, 20) }) } }) }), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function() { jQuery(".wpb_gallery_slides").each(function(index) { var $imagesGrid, this_element = jQuery(this); if (this_element.hasClass("wpb_slider_nivo")) { var sliderTimeout = 1e3 * this_element.attr("data-interval");
                    0 === sliderTimeout && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({ effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse", slices: 15, boxCols: 8, boxRows: 4, animSpeed: 800, pauseTime: sliderTimeout, startSlide: 0, directionNav: !0, directionNavHide: !0, controlNav: !0, keyboardNav: !1, pauseOnHover: !0, manualAdvance: !1, prevText: "Prev", nextText: "Next" }) } else this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function() { $imagesGrid.isotope({ itemSelector: ".isotope-item", layoutMode: "fitRows" }) }) : this_element.find(".wpb_image_grid_ul").isotope({ itemSelector: ".isotope-item", layoutMode: "fitRows" })) }) }), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function() { try { jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({ animationSpeed: "normal", hook: "data-rel", padding: 15, opacity: .7, showTitle: !0, allowresize: !0, counter_separator_label: "/", hideflash: !1, deeplinking: !1, modal: !1, callback: function() {-1 < location.href.indexOf("#!prettyPhoto") && (location.hash = "") }, social_tools: "" }) } catch (err) { window.console && window.console.warn && window.console.warn("vc_prettyPhoto initialize error", err) } }), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function() { return window.console && window.console.warn && window.console.warn("function vc_google_fonts is deprecated, no need to use it"), !1 }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function() { var vcSkrollrOptions, callSkrollInit, $ = window.jQuery;

            function fullWidthRow() { var $elements = $('[data-vc-full-width="true"]');
                $.each($elements, function(key, item) { var $el = $(this);
                    $el.addClass("vc_hidden"); var $el_full = $el.next(".vc_row-full-width"); if ($el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")), $el_full.length) { var padding, paddingRight, el_margin_left = parseInt($el.css("margin-left"), 10),
                            el_margin_right = parseInt($el.css("margin-right"), 10),
                            offset = 0 - $el_full.offset().left - el_margin_left,
                            width = $(window).width(); if ("rtl" === $el.css("direction") && (offset -= $el_full.width(), offset += width, offset += el_margin_left, offset += el_margin_right), $el.css({ position: "relative", left: offset, "box-sizing": "border-box", width: width }), !$el.data("vcStretchContent")) "rtl" === $el.css("direction") ? ((padding = offset) < 0 && (padding = 0), (paddingRight = offset) < 0 && (paddingRight = 0)) : ((padding = -1 * offset) < 0 && (padding = 0), (paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right) < 0 && (paddingRight = 0)), $el.css({ "padding-left": padding + "px", "padding-right": paddingRight + "px" });
                        $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", { el: $el, offset: offset, marginLeft: el_margin_left, marginRight: el_margin_right, elFull: $el_full, width: width }) } }), $(document).trigger("vc-full-width-row", $elements) }

            function fullHeightRow() { var windowHeight, offsetTop, fullHeight, $element = $(".vc_row-o-full-height:first");
                $element.length && (windowHeight = $(window).height(), (offsetTop = $element.offset().top) < windowHeight && (fullHeight = 100 - offsetTop / (windowHeight / 100), $element.css("min-height", fullHeight + "vh")));
                $(document).trigger("vc-full-height-row", $element) }
            $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(), (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function() { "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>') }), vc_initVideoBackgrounds(), callSkrollInit = !1, window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function() { var skrollrSize, skrollrStart, $parallaxElement, parallaxImage, youtubeId;
                callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrSize = 100 * $(this).data("vcParallax"), ($parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrSize + "%"), parallaxImage = $(this).data("vcParallaxImage"), (youtubeId = vcExtractYoutubeId(parallaxImage)) ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), skrollrStart = -(skrollrSize - 100), $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: 0%;") }), callSkrollInit && window.skrollr && (vcSkrollrOptions = { forceHeight: !1, smoothScrolling: !1, mobileCheck: function() { return !1 } }, window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions), window.vcParallaxSkroll) }), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function() { jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid() }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function(el) { for (var find = !1, i = 1; !1 === find;) { if (el.hasClass("columns_count_" + i)) return find = !0, i;
                i++ } }); var screen_size = getSizeName();

        function getSizeName() { var screen_w = jQuery(window).width(); return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && screen_w < 1169 ? "desktop" : 768 < screen_w && screen_w < 959 ? "tablet" : 300 < screen_w && screen_w < 767 ? "mobile" : screen_w < 300 ? "mobile_portrait" : "" } "function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function(event, ui) { var $ui_panel, $google_maps, panel = ui.panel || ui.newPanel,
                $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
                $round_charts = panel.find(".vc_round-chart"),
                $line_charts = panel.find(".vc_line-chart"),
                $carousel = panel.find('[data-ride="vc_carousel"]'); if (vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() { var grid = jQuery(this).data("vcGrid");
                    grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry() }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() { var grid = jQuery(this).data("vcGrid");
                    grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry() }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({ reload: !1 }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({ reload: !1 }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), $ui_panel = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $ui_panel.length && $ui_panel.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready")) { var $frame = $google_maps.find("iframe");
                $frame.attr("src", $frame.attr("src")), $google_maps.addClass("map_ready") }
            panel.parents(".isotope").length && panel.parents(".isotope").each(function() { jQuery(this).isotope("layout") }) }), "function" != typeof window.vc_ttaActivation && (window.vc_ttaActivation = function() { jQuery("[data-vc-accordion]").on("show.vc.accordion", function(e) { var $ = window.jQuery,
                    ui = {};
                ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui) }) }), "function" != typeof window.vc_accordionActivate && (window.vc_accordionActivate = function(event, ui) { if (ui.newPanel.length && ui.newHeader.length) { var $pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),
                    $round_charts = ui.newPanel.find(".vc_round-chart"),
                    $line_charts = ui.newPanel.find(".vc_line-chart"),
                    $carousel = ui.newPanel.find('[data-ride="vc_carousel"]');
                void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() { var grid = jQuery(this).data("vcGrid");
                    grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry() }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({ reload: !1 }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({ reload: !1 }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function() { jQuery(this).isotope("layout") }) } }), "function" != typeof window.initVideoBackgrounds && (window.initVideoBackgrounds = function() { return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds() }), "function" != typeof window.vc_initVideoBackgrounds && (window.vc_initVideoBackgrounds = function() { jQuery("[data-vc-video-bg]").each(function() { var youtubeUrl, youtubeId, $element = jQuery(this);
                $element.data("vcVideoBg") ? (youtubeUrl = $element.data("vcVideoBg"), (youtubeId = vcExtractYoutubeId(youtubeUrl)) && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function(event, $grid) { $element.has($grid).length && vcResizeVideoBackground($element) })) : $element.find(".vc_video-bg").remove() }) }), "function" != typeof window.insertYoutubeVideoAsBackground && (window.insertYoutubeVideoAsBackground = function($element, youtubeId, counter) { if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() { insertYoutubeVideoAsBackground($element, youtubeId, counter++) }, 100); var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
            new YT.Player($container[0], { width: "100%", height: "100%", videoId: youtubeId, playerVars: { playlist: youtubeId, iv_load_policy: 3, enablejsapi: 1, disablekb: 1, autoplay: 1, controls: 0, showinfo: 0, rel: 0, loop: 1, wmode: "transparent" }, events: { onReady: function(event) { event.target.mute().setLoop(!0) } } }), vcResizeVideoBackground($element), jQuery(window).bind("resize", function() { vcResizeVideoBackground($element) }) }), "function" != typeof window.vcResizeVideoBackground && (window.vcResizeVideoBackground = function($element) { var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
                containerH = $element.innerHeight();
            containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px") : (iframeH = (iframeW = containerW) * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px"), iframeW += "px", iframeH += "px", $element.find(".vc_video-bg iframe").css({ maxWidth: "1000%", marginLeft: marginLeft, marginTop: marginTop, width: iframeW, height: iframeH }) }), "function" != typeof window.vcExtractYoutubeId && (window.vcExtractYoutubeId = function(url) { if (void 0 === url) return !1; var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/); return null !== id && id[1] }), "function" != typeof window.vc_googleMapsPointer && (window.vc_googleMapsPointer = function() { var $ = window.jQuery,
                $wpbGmapsWidget = $(".wpb_gmaps_widget");
            $wpbGmapsWidget.on("click", function() { $("iframe", this).css("pointer-events", "auto") }), $wpbGmapsWidget.on("mouseleave", function() { $("iframe", this).css("pointer-events", "none") }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none") }), "function" != typeof window.vc_setHoverBoxPerspective && (window.vc_setHoverBoxPerspective = function(hoverBox) { hoverBox.each(function() { var $this = jQuery(this),
                    perspective = 4 * $this.width() + "px";
                $this.css("perspective", perspective) }) }), "function" != typeof window.vc_setHoverBoxHeight && (window.vc_setHoverBoxHeight = function(hoverBox) { hoverBox.each(function() { var $this = jQuery(this),
                    hoverBoxInner = $this.find(".vc-hoverbox-inner");
                hoverBoxInner.css("min-height", 0); var frontHeight = $this.find(".vc-hoverbox-front-inner").outerHeight(),
                    backHeight = $this.find(".vc-hoverbox-back-inner").outerHeight(),
                    hoverBoxHeight = backHeight < frontHeight ? frontHeight : backHeight;
                hoverBoxHeight < 250 && (hoverBoxHeight = 250), hoverBoxInner.css("min-height", hoverBoxHeight + "px") }) }), "function" != typeof window.vc_prepareHoverBox && (window.vc_prepareHoverBox = function() { var hoverBox = jQuery(".vc-hoverbox");
            vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox) }), jQuery(document).ready(window.vc_prepareHoverBox), jQuery(window).resize(window.vc_prepareHoverBox), jQuery(document).ready(function($) { window.vc_js() }) }(window.jQuery);