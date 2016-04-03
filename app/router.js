import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('post', { path: '/posts/:post_id' });
  this.route('recruitment');
  this.route('info');
});

export default Router;
