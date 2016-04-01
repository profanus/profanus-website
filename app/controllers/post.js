import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    transition() {
      this.transitionToRoute('index');
    }
  }
});
