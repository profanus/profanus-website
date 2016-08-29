const options = {
  // easing: 'spring',
  duration: 500
};

export default function() {
  this.transition(
    this.toRoute('post'),
    this.use('toLeft', options)
  );

  this.transition(
    this.toRoute('recruitment'),
    this.use('toDown', options)
  );

  this.transition(
    this.toRoute('info'),
    this.use('toDown', options)
  );

  this.transition(
    this.toRoute('rules'),
    this.use('toDown', options)
  );

  this.transition(
    this.toRoute('index'),
    this.use('toUp', options)
  );

  this.transition(
    this.fromRoute('post'),
    this.toRoute('index'),
    this.use('toRight')
  );
}
