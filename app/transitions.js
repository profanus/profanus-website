export default function() {
  this.transition(
    this.fromRoute('index'),
    this.toRoute('post'),
    this.use('crossFade'),
    this.reverse('crossFade')
  );
}
