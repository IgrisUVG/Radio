function radioTitle() {

    // this is the URL of the json.xml file located on your server.
    var url = 'http://radio.yshivangoga.ru/json.xsl';

    $.ajax({
        type: 'GET',
        url: url,
        async: true,
        jsonpCallback: 'parseMusic',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function (json) {
            // this is the element we're updating that will hold the track title
            $('#track-title').text(json['/mp3128']['title']);
            // this is the element we're updating that will hold the listeners count
            $('#listeners').text(json['/mp3128']['listeners']);
        },
        error: function (e) {
            console.log(e.message);
        }
    });

}

$(document).ready(function () {
    setTimeout(function () {
        radioTitle();
    }, 1000);
    setInterval(function () {
        radioTitle();
    }, 1000); // we're going to update our html elements / player every 15 seconds

});
