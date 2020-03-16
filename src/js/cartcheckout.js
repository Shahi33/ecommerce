//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
    // if(animating) return false;
    // animating = true;
    // current_fs = $(this).parent().parent().parent().parent().parent();
    // next_fs = $(this).parent().parent().parent().parent().parent().next();
    current_fs = $(this).parents('fieldset');
    next_fs=$(this).parents('fieldset').next();

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("actively");

    //show the next fieldset
    // next_fs.show();
    next_fs.show();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    current_fs.hide();

});

$(".submit").click(function(){
    return false;
});



// vertical settings
function accountsettings(evt, settingName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tabslinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(settingName).style.display = "block";
    evt.currentTarget.className += " active-tab";


}
// Get the element with id="defaultOpen" and click on it

// document.getElementById("defaultOpen").click();
