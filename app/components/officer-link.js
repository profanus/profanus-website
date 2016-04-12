import Ember from 'ember';

const Component = Ember.Component.extend({
  tagName: 'a',
  name: '',
  character: '',

  url: Ember.computed('name', 'character', function() {
    let { name, character } = this.getProperties('name', 'character');
    let urlFragment = character || name;

    return `http://eu.battle.net/wow/en/character/ragnaros/${urlFragment}/advanced`;
  }),

  attributeBindings: ['url:href', 'character:title']
});

Component.reopenClass({
  positionalParams: ['name', 'character']
});

export default Component;
