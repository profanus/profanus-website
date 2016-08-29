import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  actions: {
    willTransition() {
      this.controllerFor('application').set('menuExpanded', false);
    }
  }
});