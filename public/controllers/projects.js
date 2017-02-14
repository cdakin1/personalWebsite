const img = $('.projectImg');

img.on('mouseover', (e) => {
  TweenMax.to(e.target, 0.5, { scale: 1.1, transformOrigin: 'center' });
})

img.on('mouseleave', (e) => {
  TweenMax.to(e.target, 0.5, { scale: 1, transformOrigin: 'center' });
})
