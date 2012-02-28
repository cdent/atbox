/* 
 * Create an atbox using tiddlysockets.
 */
$(function() {
    $.ajaxSetup({
        beforeSend: function(xhr) {
                        xhr.setRequestHeader("X-ControlView", "false");
                    }
    });

    var socketuri = 'http://tiddlyspace.com:8081'
        , atdiv = $('<ul id="atbox" class="box">')
        , host = window.location.host
        , spacename = window.location.host.split('.')[0];
    if (typeof(io) === 'undefined') {
        atdiv.addClass('nosocket');
    } 
    $('body').append(atdiv);

    var atbox = new Tiddlers(atdiv,
        socketuri,
        'http://' + host + '/search?q=tag:@' + spacename,
        ['tags/@' + spacename],
        {sizer: 5});
    atbox.start();

});

