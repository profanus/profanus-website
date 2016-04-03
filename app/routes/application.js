import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionTo() {
      let args = Array.prototype.slice.call(arguments);
      let actualArguments = args.filter((a) => a !== null && a !== undefined);
      this.transitionTo(...actualArguments);
    }
  }
});
