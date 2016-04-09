import Ember from 'ember';

const { Route, inject, RSVP } = Ember;

export default Route.extend({
  ajax: inject.service(),
  model() {
    let ajax = this.get('ajax');

    return ajax.request('/posts.json').then((content) => {
      return RSVP.all(content.posts.map((postId) => {
        return ajax.request(`/posts/${postId}/description.json`).then((post) => {
          post.id = postId;

          if (post['has-content'] !== false) {
            post.hasContent = true;
          } else {
            post.hasContent = false;
          }
          post['has-content'] = undefined;

          return post;
        });
      }));
    });
  }
});
