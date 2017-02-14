const circle = $('.circle');
const whiteboard = $('#whiteboard');

let clicked = false;

whiteboard.on('mouseover', () => {
  TweenMax.to(circle, 2, { scale: 0.008, transformOrigin: 'center', ease: 'easeOut' });
})

circle.on('click', () => {
  console.log('clicked')
  if (clicked) {
    clicked = false;
  } else {
    clicked = true;
  }
})

whiteboard.on('click', () => {
  clicked = false;
  TweenMax.to(circle, 1, { fill: '#FFFFFF' })
})

circle.on('mouseover', () => {
  clicked = true;
  TweenMax.to(circle, 1, { fill: '#13459a' })
})

whiteboard.on('mousemove', function(e) {
  if(clicked) {
    const xpos = e.clientX;
    const ypos = e.clientY;
    TweenMax.to(circle, 0.7, { x: xpos-244 });
    TweenMax.to(circle, 0.7, { y: ypos-247.5 });
  }
});
