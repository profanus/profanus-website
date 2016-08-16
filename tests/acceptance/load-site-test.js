import { test } from 'qunit';
import moduleForAcceptance from 'profanus/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | load site');

// smoke test to see that the app actually boots
test('can visit the recruitment page', function(assert) {
  visit('/recruitment');

  andThen(function() {
    assert.equal(currentURL(), '/recruitment');
  });
});
