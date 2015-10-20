/* input URL */
$( "#comments" ).hide();

$("#video").keyup(function() {
        var url = $("#video").val();
        $("#ifr").attr("src", url);
        $( "#video" ).load( "ajax/index.html #video" );
        $( "#video" ).hide();
        
});
        
/* Knockout view model */
$("#comentinput").keypress(function(e) {
    if(e.which == 13) {
        $( "#comments" ).show();
    }
});
function AppViewModel() {
        this.comment = ko.observable("");
        this.addcomment = ko.observable("");
}
ko.applyBindings(new AppViewModel());	

/* date */
var d = new Date();
document.getElementById("datetime").innerHTML = d;



