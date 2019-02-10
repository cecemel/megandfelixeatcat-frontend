import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | admin/persons/new', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:admin/persons/new');
    assert.ok(controller);
  });
});
