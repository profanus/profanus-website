import Ember from 'ember';
const { Route, inject } = Ember;

export default Route.extend({
  ajax: inject.service('ajax'),

  model() {
    let ajax = this.get('ajax');

    return ajax.request(`/rules.md`, {
      processData: false,
      dataType: 'html',
      contentType: 'text/plain'
    });
  }
});
