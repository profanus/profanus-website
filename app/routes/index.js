import Ember from 'ember';

const { Route, inject, RSVP } = Ember;

export default Route.extend({
  ajax: inject.service(),
  model() {
    let ajax = this.get('ajax');

    return RSVP.hash({
      posts: ajax.request('/posts.json').then((content) => {
        return RSVP.all(content.posts.map((postId) => {
          return ajax.request(`/posts/${postId}/description.json`).then((post) => {
            post.id = postId;

            return post;
          });
        }));
      }),
      raidLogs: ajax.request('/raid-logs.json').then((content) => content.logs)
    });
  }
});
