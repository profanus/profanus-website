import Ember from 'ember';

const { Component, computed } = Ember;

const OfficerLink = Component.extend({
  tagName: 'a',
  name: '',
  character: '',

  url: computed('name', 'character', function() {
    let { name, character } = this.getProperties('name', 'character');
    let urlFragment = character || name;

    return `http://eu.battle.net/wow/en/character/ragnaros/${urlFragment}/advanced`;
  }),

  attributeBindings: ['url:href', 'character:title']
});

OfficerLink.reopenClass({
  positionalParams: ['name', 'character']
});

export default OfficerLink;
