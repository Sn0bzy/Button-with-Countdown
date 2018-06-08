var secs = 20; // Süre
var wait = secs * 1000;
document.countdownhc.submitbtn.disabled=true;
for(i=1;i<=secs;i++) {
window.setTimeout("update(" + i + ")", i * 1000);
}
window.setTimeout("timer()", wait);
function update(num) {

if(num == (wait/1000)) {
document.countdownhc.submitbtn.value = "Git";
}

else {
printnr = (wait/1000)-num;
document.countdownhc.submitbtn.value = "Lütfen " + printnr + " saniye kaldı";
}}

function timer() {
document.countdownhc.submitbtn.disabled=false;
}
