import Ember from 'ember';
import config from './config/environment';

const { Router } = Ember;

const AppRouter = Router.extend({
  location: config.locationType
});

AppRouter.map(function() {
  this.route('post', { path: '/posts/:post_id' });
  this.route('info');
  this.route('rules');
});

export default AppRouter;
