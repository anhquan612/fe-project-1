$(document).ready(function() {
    showDivs(1);
});

var sliceDivClassName = "month";
var sliceIndex = 1;

function showDivs(n) {
    var numOfMonthDivs = document.getElementsByClassName(sliceDivClassName).length+1;
    var cssSelector = '.' + sliceDivClassName;
    var numOfDisplayMonthDivs = 3;
    if (n >= 1 && sliceIndex + numOfDisplayMonthDivs > numOfMonthDivs) {
        return;
    }
    if (n <= -1 && sliceIndex == 2) {
        return;
    }
    sliceIndex += n;
    $(cssSelector).hide();
    for (var i = sliceIndex; i < sliceIndex+numOfDisplayMonthDivs; ++i) {
        $(cssSelector + ':nth-child(' + i + ')').show();
    }
}