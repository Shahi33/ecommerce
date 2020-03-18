$(function() {
    var $slider = $("#slider-range");
    //Get min and max values
    var priceMin = $slider.attr("data-price-min"),
        priceMax = $slider.attr("data-price-max");

    //Set min and max values where relevant
    $("#price-filter-min, #price-filter-max").map(function(){
        $(this).attr({
            "min": priceMin,
            "max": priceMax
        });
    });
    $("#price-filter-min").attr({
        "placeholder": "min " + priceMin,
        "value": priceMin
    });
    $("#price-filter-max").attr({
        "placeholder": "max " + priceMax,
        "value": priceMax
    });

    $slider.slider({
        range: true,
        min: Math.max(priceMin, 0),
        max: priceMax,
        values: [priceMin, priceMax],
        slide: function(event, ui) {
            // $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            $("#price-filter-min").val(ui.values[0]);
            $("#price-filter-max").val(ui.values[1]);
        }
    });

    // Amount is a read only field for textual representation of the range
    //$("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));

    //this code was an attempt to stop entering wrong values - but I think this is better ux...
    // $("#price-filter-min, #price-filter-max").map(function(){
    // $(this).on("keypress", function(e) {
    // 	if ($(this).val() > priceMax && e.keyCode != 46 && e.keyCode != 8) {
    // 		// e.preventDefault();
    // 		$(this).val(priceMax);
    // 	} else if ($(this).val() < priceMin && e.keyCode != 46 && e.keyCode != 8) {
    // 		// e.preventDefault();
    // 		$(this).val(priceMin);
    // 	}
    // });
    // });

    $("#price-filter-min, #price-filter-max").map(function(){
        $(this).on("input", function() {
            updateSlider();
        });
    });
    function updateSlider(){
        $slider.slider("values", [$("#price-filter-min").val(), $("#price-filter-max").val()]);
    }

});
