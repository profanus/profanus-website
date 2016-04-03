import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    recruit() {
      window.open('http://goo.gl/forms/wGmIHE0nGx', '_blank');
    }
  }
});
