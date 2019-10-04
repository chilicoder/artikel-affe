'use strict';

define("artikel-affe/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/der-die-das.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/der-die-das.js should pass ESLint\n\n12:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n17:30 - \'b\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/der-die-das.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/der-die-das.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
});
define("artikel-affe/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('artikel-affe/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'artikel-affe/templates/application.hbs should pass TemplateLint.\n\nartikel-affe/templates/application.hbs\n  2:0  error  Incorrect indentation for `{{outlet}}` beginning at L2:C0. Expected `{{outlet}}` to be at an indentation of 2 but was found at 0.  block-indentation\n');
  });
  QUnit.test('artikel-affe/templates/der-die-das.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'artikel-affe/templates/der-die-das.hbs should pass TemplateLint.\n\nartikel-affe/templates/der-die-das.hbs\n  4:0  error  Incorrect indentation for `<div>` beginning at L4:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  5:4  error  Incorrect indentation for `{{currentWord}}` beginning at L5:C4. Expected `{{currentWord}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  9:4  error  Incorrect indentation for `{{#each}}` beginning at L9:C4. Expected `{{#each}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  10:4  error  Incorrect indentation for `<div>` beginning at L10:C4. Expected `<div>` to be at an indentation of 6 but was found at 4.  block-indentation\n  11:4  error  Incorrect indentation for `<button>` beginning at L11:C4. Expected `<button>` to be at an indentation of 6 but was found at 4.  block-indentation\n  16:4  error  Incorrect indentation for `<div>` beginning at L16:C4. Expected `<div>` to be at an indentation of 6 but was found at 4.  block-indentation\n  17:4  error  Incorrect indentation for `<div>` beginning at L17:C4. Expected `<div>` to be at an indentation of 6 but was found at 4.  block-indentation\n  18:4  error  Incorrect indentation for `{{a.article}}` beginning at L18:C4. Expected `{{a.article}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  4:26  error  elements cannot have inline styles  no-inline-styles\n');
  });
  QUnit.test('artikel-affe/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'artikel-affe/templates/index.hbs should pass TemplateLint.\n\n');
  });
});
define("artikel-affe/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/der-die-das-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/der-die-das-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/der-die-das-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/der-die-das-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
});
define("artikel-affe/tests/test-helper", ["artikel-affe/app", "artikel-affe/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("artikel-affe/tests/unit/controllers/der-die-das-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | der-die-das', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:der-die-das');
      assert.ok(controller);
    });
  });
});
define("artikel-affe/tests/unit/routes/der-die-das-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | der-die-das', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:der-die-das');
      assert.ok(route);
    });
  });
});
define("artikel-affe/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('artikel-affe/config/environment', [], function() {
  var prefix = 'artikel-affe';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('artikel-affe/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
