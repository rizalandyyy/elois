! function(a) {
    "use strict";

    function b() { f() }

    function c() {}

    function d() {}

    function e() {}

    function f() {
        a(document).on("click", ".qodef-like", function() {
            var b, c = a(this),
                d = c.attr("id");
            if (c.hasClass("liked")) return !1;
            "undefined" != typeof c.data("type") && (b = c.data("type"));
            var e = { action: "moments_qodef_like", likes_id: d, type: b };
            a.post(qodefLike.ajaxurl, e, function(a) { c.html(a).addClass("liked").attr("title", "You already like this!"), "portfolio_list" !== b && c.children("span").css("opacity", 1) });
            return !1
        })
    }
    var g = {};
    qodef.modules.like = g, g.qodefLikes = f, g.qodefOnDocumentReady = b, g.qodefOnWindowLoad = c, g.qodefOnWindowResize = d, g.qodefOnWindowScroll = e, a(document).ready(b), a(window).load(c), a(window).resize(d), a(window).scroll(e)
}(jQuery);