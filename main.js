document.addEventListener('DOMContentLoaded', function() {
    var scene = document.querySelector('a-scene');
    var splash = document.querySelector('#splash');
    scene.addEventListener('loaded', function (e) {
        splash.style.display = 'none';
    });

    document.querySelector('#wizard').addEventListener('click', function (e) {
        document.querySelector('#light').emit('wizard-clicked');
        document.querySelector('#green').emit('wizard-clicked');
        document.querySelector('#b').emit('wizard-clicked');
        document.querySelector('#c').emit('wizard-clicked');
        document.querySelector('#warrior').emit('wizard-clicked');
        document.querySelector('#blue').emit('wizard-clicked');
    });
});