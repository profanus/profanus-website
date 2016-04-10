import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionTo() {
      let args = Array.prototype.slice.call(arguments);
      let actualArguments = args.filter((a) => a !== null && a !== undefined);
      this.transitionTo(...actualArguments);
    }
  },

  ajax: Ember.inject.service(),
  model() {
    return this.get('ajax').request('/raid-logs.json').then(
      (content) => content.logs.slice(0, 2));
  }
});
