(function (window) {
    var speakWord = "Goodbye";
    var goodbyeSpeaker = {};
    goodbyeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    };

    window.goodbyeSpeaker = goodbyeSpeaker;

})(window);
