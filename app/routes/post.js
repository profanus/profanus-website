import Ember from 'ember';
const { Route, inject, RSVP } = Ember;

export default Route.extend({
  ajax: inject.service('ajax'),
  model(params) {
    // jscs:disable
    let id = params['post_id'];
    // jscs:enable
    let ajax = this.get('ajax');

    return RSVP.hash({
      post: ajax.request(`/posts/${id}/description.json`),
      content: ajax.request(`/posts/${id}/content.md`, {
        processData: false,
        dataType: 'html',
        contentType: 'text/plain'
      })
    }).then(({ post, content }) => {
      post.id = id;
      post.content = content;

      return post;
    });
  }
});
