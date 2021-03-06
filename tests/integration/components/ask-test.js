import { module, test } from 'qunit';

import { hbs } from 'ember-cli-htmlbars';
import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';

module('Integration | Component | ask', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Ask />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <Ask>
        template block text
      </Ask>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
