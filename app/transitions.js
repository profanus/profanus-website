const options = {
  easing: 'spring',
  duration: 500
};

export default function() {
  this.transition(
    this.toRoute('post'),
    this.use('toLeft', options)
  );

  this.transition(
    this.toRoute('recruitment'),
    this.use('toLeft', options)
  );

  this.transition(
    this.toRoute('info'),
    this.use('toLeft', options)
  );

  this.transition(
    this.toRoute('index'),
    this.use('toUp', options)
  );
}
