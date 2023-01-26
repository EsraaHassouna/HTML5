var aud = document.getElementById("aud");
var btnPlay = document.getElementById("btnPlay");
var btnPause = document.getElementById("btnPause");
var songs = ["../audio&images/منتدى شباب العالم - الأغنية الرسمية لمنتدى شباب العالم -بحلم بمكان- بمشاركة نجوم العالم - YouTube.MP4" , 
 " ../audio&images/حلوة بلدنا حماقي maxzik.com.mp3",
 "../audio&images/اتدري؟  للفرحة كم صوت ؟  - زين (192 kbps).mp3"];

btnPlay.addEventListener("click", playaudio)
function playaudio() {
    aud.play()
}

btnPause.addEventListener("click", pauseaudio)
function pauseaudio() {
    aud.pause()
}
function playNext(){
    btnNext.addEventListener("click", (e) => {
            for (let i = 0; i <= songs.length; i++) {
                e.target.src = songs[i];
                e.target.play();
            }
    }   )         
}
    
aud.addEventListener("ended", (e) => {
    e.target.src=playNext;
    e.target.play();
})