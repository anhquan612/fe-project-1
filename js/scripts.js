$(document).ready(function() {
    showDivs(1);
});

var slideDivClassName = "month";
var slideIndex = 1;

function showDivs(n) {
    var numOfMonthDivs = document.getElementsByClassName(slideDivClassName).length+1;
    var cssSelector = '.' + slideDivClassName;
    var numOfDisplayMonthDivs = 3;
    if (n >= 1 && slideIndex + numOfDisplayMonthDivs > numOfMonthDivs) {
        return;
    }
    if (n <= -1 && slideIndex == 2) {
        return;
    }
    slideIndex += n;
    $(cssSelector).hide();
    for (var i = slideIndex; i < slideIndex+numOfDisplayMonthDivs; ++i) {
        $(cssSelector + ':nth-child(' + i + ')').show({direction: "right"});
    }
}