// Current day and time
$('#currentDay').text(moment().format('[Today\'s Date: ]dddd, MMMM Do, YYYY'));

// Creates time block
$(function renderTextArea() {
    let timeBlockRows = $('.row');
    let currentTime = Number(moment().format('H'));

    timeBlockRows.each(function (i) {
        let rowText = $(this).children('textarea');
        let storedText = JSON.parse(localStorage.getItem('row ' + i))

        // Changes background color depending on the current time
        if (currentTime === $(this).data('time')) {
            $(this).children('textarea').addClass('present');
            $(this).prevAll().children('textarea').addClass('past');
            $(this).nextAll().children('textarea').addClass('future');
        }
        // Checks for any saved text
        if (storedText === null) {
            return;
        }
        rowText.val(storedText);
    });

    if (currentTime < 9) {
        // Sets background color to green if it's before 9 AM
        $('.container').find('textarea').addClass('future');
    } else if (currentTime > 17) {
        // Sets background color to gray if it's after 5 PM
        $('.container').find('textarea').addClass('past');
    }
});
// Adds Save Button
$('.saveBtn').on('click', function () {
    let textArea = $(this).siblings('textarea').val();
    let rowIndex = $(this).parent().data('index');
    let textValue = textArea;

    localStorage.setItem('row ' + rowIndex, JSON.stringify(textValue));
})
// Adds Clear Button
$('.clearBtn').on('click', function () {
    localStorage.clear();
    location.reload();
})