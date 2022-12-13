$('#main_iframe').ready(function () {
    $('#loader').css('display', 'inline');
});
$('#main_iframe').load(function () {
    $('#loader').css('display', 'none');
});
