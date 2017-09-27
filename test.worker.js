var time = 100;
setTimeout(function () { Tick(); }, time);
addEventListener('message', function (message) {
    console.log('in webworker', message);
});
function Tick() {
    setTimeout(function () { Tick(); }, time);
    postMessage("tick");
}
