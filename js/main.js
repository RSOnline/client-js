
RenderAuto();
function render()
{
    document.body.appendChild(app.view);
}

app.stop();
    
let data = null;
let b;

socket.emit('get_anim', '{}');
socket.on('get_anim', function(msg) {
    console.log('aff');
    b = AnimationParse(msg);
    Base_Autoplay(b);
});

//  b.x = 320;
//  b.y = 480;