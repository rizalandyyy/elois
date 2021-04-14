/*!
 * WooCommerce Add to Cart JS
 */
jQuery(function(a) {
    return "undefined" == typeof wc_add_to_cart_params ? !1 : void a(document).on("click", ".add_to_cart_button", function() {
        var b = a(this);
        if (b.is(".ajax_add_to_cart")) {
            if (!b.attr("data-product_id")) return !0;
            b.removeClass("added"), b.addClass("loading");
            var c = {};
            return a.each(b.data(), function(a, b) { c[a] = b }), a(document.body).trigger("adding_to_cart", [b, c]), a.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "add_to_cart"), c, function(c) {
                if (c) {
                    var d = window.location.toString();
                    if (d = d.replace("add-to-cart", "added-to-cart"), c.error && c.product_url) return void(window.location = c.product_url);
                    if ("yes" === wc_add_to_cart_params.cart_redirect_after_add) return void(window.location = wc_add_to_cart_params.cart_url);
                    b.removeClass("loading");
                    var e = c.fragments,
                        f = c.cart_hash;
                    e && a.each(e, function(b) { a(b).addClass("updating") }), a(".shop_table.cart, .updating, .cart_totals").fadeTo("400", "0.6").block({ message: null, overlayCSS: { opacity: .6 } }), b.addClass("added"), wc_add_to_cart_params.is_cart || 0 !== b.parent().find(".added_to_cart").length || b.after(' <a href="' + wc_add_to_cart_params.cart_url + '" class="added_to_cart wc-forward" title="' + wc_add_to_cart_params.i18n_view_cart + '">' + wc_add_to_cart_params.i18n_view_cart + "</a>"), e && a.each(e, function(b, c) { a(b).replaceWith(c) }), a(".widget_shopping_cart, .updating").stop(!0).css("opacity", "1").unblock(), a(".shop_table.cart").load(d + " .shop_table.cart:eq(0) > *", function() { a(".shop_table.cart").stop(!0).css("opacity", "1").unblock(), a(document.body).trigger("cart_page_refreshed") }), a(".cart_totals").load(d + " .cart_totals:eq(0) > *", function() { a(".cart_totals").stop(!0).css("opacity", "1").unblock() }), a(document.body).trigger("added_to_cart", [e, f, b])
                }
            }), !1
        }
        return !0
    })
});;
jQuery(function() {
    jQuery(":input").on("focus", function() {
        var input = jQuery(this);
        var inputID = input.attr("id") || "(no input ID)";
        var inputName = input.attr("name") || "(no input name)";
        var inputClass = input.attr("class") || "(no input class)";
        var form = jQuery(this.form);
        var formID = form.attr("id") || "(no form ID)";
        var formName = form.attr("name") || "(no form name)";
        var formClass = form.attr("class") || "(no form class)";
        window[gtm4wp_datalayer_name].push({ 'event': 'gtm4wp.formElementEnter', 'inputID': inputID, 'inputName': inputName, 'inputClass': inputClass, 'formID': formID, 'formName': formName, 'formClass': formClass });
    }).on("blur", function() {
        var input = jQuery(this);
        var inputID = input.attr("id") || "(no input ID)";
        var inputName = input.attr("name") || "(no input name)";
        var inputClass = input.attr("class") || "(no input class)";
        var form = jQuery(this.form);
        var formID = form.attr("id") || "(no form ID)";
        var formName = form.attr("name") || "(no form name)";
        var formClass = form.attr("class") || "(no form class)";
        window[gtm4wp_datalayer_name].push({ 'event': 'gtm4wp.formElementLeave', 'inputID': inputID, 'inputName': inputName, 'inputClass': inputClass, 'formID': formID, 'formName': formName, 'formClass': formClass });
    });
});;
(function($) {
    'use strict';
    $(document).ready(function() {
        $('body').on('adding_to_cart', function(event, $button, data) { if ($button && $button.hasClass('vc_gitem-link')) { $button.addClass('vc-gitem-add-to-cart-loading-btn').parents('.vc_grid-item-mini').addClass('vc-woocommerce-add-to-cart-loading').append($('<div class="vc_wc-load-add-to-loader-wrapper"><div class="vc_wc-load-add-to-loader"></div></div>')); } }).on('added_to_cart', function(event, fragments, cart_hash, $button) {
            if ('undefined' === typeof($button)) { $button = $('.vc-gitem-add-to-cart-loading-btn'); }
            if ($button && $button.hasClass('vc_gitem-link')) { $button.removeClass('vc-gitem-add-to-cart-loading-btn').parents('.vc_grid-item-mini').removeClass('vc-woocommerce-add-to-cart-loading').find('.vc_wc-load-add-to-loader-wrapper').remove(); }
        });
    });
})(window.jQuery);