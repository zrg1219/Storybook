function say(words){
    var msg = new SpeechSynthesisUtterance(words);
    window.speechSynthesis.speak(msg);
}

$(document).ready(function(){
    $('.button').on('click', function(){
      console.log('clicked');
        say($(".text").text());
    });
});
