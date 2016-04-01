import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    transition(id) {
      this.transitionToRoute('post', id);
    }
  }
});
