import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionTo() {
      let args = Array.prototype.slice.call(arguments, 0, -1);
      this.transitionTo(...args);
    }
  }
});
