window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  var player = GetPlayer();

// Get all text inputs
var inputs = document.querySelectorAll("input[type='text'], textarea");

function checkFieldsDOM() {
    var allFilled = true;

    inputs.forEach(function(input) {
        if (input.value.trim() === "") {
            allFilled = false;
        }
    });

    player.SetVar("EnableSubmit", allFilled);
}

// Listen for real-time typing
inputs.forEach(function(input) {
    input.addEventListener("input", checkFieldsDOM);
});
}

};
