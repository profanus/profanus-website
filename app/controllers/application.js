import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  menuExpanded: false,

  isMenuExpanded: computed('menuExpanded', 'media.isGtSm', function() {
    return this.get('menuExpanded') && !this.get('media.isGtSm');
  }),

  actions: {
    toggleMenu() {
      this.toggleProperty('menuExpanded');
    }
  }
});