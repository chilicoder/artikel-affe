'use strict';



;define("artikel-affe/app", ["exports", "artikel-affe/resolver", "ember-load-initializers", "artikel-affe/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("artikel-affe/components/bs-accordion", ["exports", "ember-bootstrap/components/bs-accordion"], function (_exports, _bsAccordion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
;define("artikel-affe/components/bs-accordion/item", ["exports", "ember-bootstrap/components/bs-accordion/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("artikel-affe/components/bs-accordion/item/body", ["exports", "ember-bootstrap/components/bs-accordion/item/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("artikel-affe/components/bs-accordion/item/title", ["exports", "ember-bootstrap/components/bs-accordion/item/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("artikel-affe/components/bs-alert", ["exports", "ember-bootstrap/components/bs-alert"], function (_exports, _bsAlert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
;define("artikel-affe/components/bs-button-group", ["exports", "ember-bootstrap/components/bs-button-group"], function (_exports, _bsButtonGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
;define("artikel-affe/components/bs-button-group/button", ["exports", "ember-bootstrap/components/bs-button-group/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("artikel-affe/components/bs-button", ["exports", "ember-bootstrap/components/bs-button"], function (_exports, _bsButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
;define("artikel-affe/components/bs-carousel", ["exports", "ember-bootstrap/components/bs-carousel"], function (_exports, _bsCarousel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
;define("artikel-affe/components/bs-carousel/slide", ["exports", "ember-bootstrap/components/bs-carousel/slide"], function (_exports, _slide) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
;define("artikel-affe/components/bs-collapse", ["exports", "ember-bootstrap/components/bs-collapse"], function (_exports, _bsCollapse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
;define("artikel-affe/components/bs-dropdown", ["exports", "ember-bootstrap/components/bs-dropdown"], function (_exports, _bsDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
;define("artikel-affe/components/bs-dropdown/button", ["exports", "ember-bootstrap/components/bs-dropdown/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("artikel-affe/components/bs-dropdown/menu", ["exports", "ember-bootstrap/components/bs-dropdown/menu"], function (_exports, _menu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
;define("artikel-affe/components/bs-dropdown/menu/divider", ["exports", "ember-bootstrap/components/bs-dropdown/menu/divider"], function (_exports, _divider) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
;define("artikel-affe/components/bs-dropdown/menu/item", ["exports", "ember-bootstrap/components/bs-dropdown/menu/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("artikel-affe/components/bs-dropdown/menu/link-to", ["exports", "ember-bootstrap/components/bs-dropdown/menu/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("artikel-affe/components/bs-dropdown/toggle", ["exports", "ember-bootstrap/components/bs-dropdown/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("artikel-affe/components/bs-form", ["exports", "ember-bootstrap/components/bs-form"], function (_exports, _bsForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
;define("artikel-affe/components/bs-form/element", ["exports", "ember-bootstrap/components/bs-form/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("artikel-affe/components/bs-form/element/control", ["exports", "ember-bootstrap/components/bs-form/element/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
;define("artikel-affe/components/bs-form/element/control/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/control/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("artikel-affe/components/bs-form/element/control/input", ["exports", "ember-bootstrap/components/bs-form/element/control/input"], function (_exports, _input) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
;define("artikel-affe/components/bs-form/element/control/radio", ["exports", "ember-bootstrap/components/bs-form/element/control/radio"], function (_exports, _radio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});
;define("artikel-affe/components/bs-form/element/control/textarea", ["exports", "ember-bootstrap/components/bs-form/element/control/textarea"], function (_exports, _textarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
;define("artikel-affe/components/bs-form/element/errors", ["exports", "ember-bootstrap/components/bs-form/element/errors"], function (_exports, _errors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
;define("artikel-affe/components/bs-form/element/feedback-icon", ["exports", "ember-bootstrap/components/bs-form/element/feedback-icon"], function (_exports, _feedbackIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
;define("artikel-affe/components/bs-form/element/help-text", ["exports", "ember-bootstrap/components/bs-form/element/help-text"], function (_exports, _helpText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
;define("artikel-affe/components/bs-form/element/label", ["exports", "ember-bootstrap/components/bs-form/element/label"], function (_exports, _label) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
;define("artikel-affe/components/bs-form/element/layout/horizontal", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal"], function (_exports, _horizontal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
;define("artikel-affe/components/bs-form/element/layout/horizontal/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("artikel-affe/components/bs-form/element/layout/inline", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline"], function (_exports, _inline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
;define("artikel-affe/components/bs-form/element/layout/inline/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("artikel-affe/components/bs-form/element/layout/vertical", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical"], function (_exports, _vertical) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
;define("artikel-affe/components/bs-form/element/layout/vertical/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("artikel-affe/components/bs-form/group", ["exports", "ember-bootstrap/components/bs-form/group"], function (_exports, _group) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
;define("artikel-affe/components/bs-modal-simple", ["exports", "ember-bootstrap/components/bs-modal-simple"], function (_exports, _bsModalSimple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
;define("artikel-affe/components/bs-modal", ["exports", "ember-bootstrap/components/bs-modal"], function (_exports, _bsModal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
;define("artikel-affe/components/bs-modal/body", ["exports", "ember-bootstrap/components/bs-modal/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("artikel-affe/components/bs-modal/dialog", ["exports", "ember-bootstrap/components/bs-modal/dialog"], function (_exports, _dialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
;define("artikel-affe/components/bs-modal/footer", ["exports", "ember-bootstrap/components/bs-modal/footer"], function (_exports, _footer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
;define("artikel-affe/components/bs-modal/header", ["exports", "ember-bootstrap/components/bs-modal/header"], function (_exports, _header) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
;define("artikel-affe/components/bs-modal/header/close", ["exports", "ember-bootstrap/components/bs-modal/header/close"], function (_exports, _close) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
;define("artikel-affe/components/bs-modal/header/title", ["exports", "ember-bootstrap/components/bs-modal/header/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("artikel-affe/components/bs-nav", ["exports", "ember-bootstrap/components/bs-nav"], function (_exports, _bsNav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
;define("artikel-affe/components/bs-nav/item", ["exports", "ember-bootstrap/components/bs-nav/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("artikel-affe/components/bs-nav/link-to", ["exports", "ember-bootstrap/components/bs-nav/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("artikel-affe/components/bs-navbar", ["exports", "ember-bootstrap/components/bs-navbar"], function (_exports, _bsNavbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
;define("artikel-affe/components/bs-navbar/content", ["exports", "ember-bootstrap/components/bs-navbar/content"], function (_exports, _content) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
;define("artikel-affe/components/bs-navbar/link-to", ["exports", "ember-bootstrap/components/bs-navbar/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("artikel-affe/components/bs-navbar/nav", ["exports", "ember-bootstrap/components/bs-navbar/nav"], function (_exports, _nav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
;define("artikel-affe/components/bs-navbar/toggle", ["exports", "ember-bootstrap/components/bs-navbar/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("artikel-affe/components/bs-popover", ["exports", "ember-bootstrap/components/bs-popover"], function (_exports, _bsPopover) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
;define("artikel-affe/components/bs-popover/element", ["exports", "ember-bootstrap/components/bs-popover/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("artikel-affe/components/bs-progress", ["exports", "ember-bootstrap/components/bs-progress"], function (_exports, _bsProgress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
;define("artikel-affe/components/bs-progress/bar", ["exports", "ember-bootstrap/components/bs-progress/bar"], function (_exports, _bar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
;define("artikel-affe/components/bs-tab", ["exports", "ember-bootstrap/components/bs-tab"], function (_exports, _bsTab) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
;define("artikel-affe/components/bs-tab/pane", ["exports", "ember-bootstrap/components/bs-tab/pane"], function (_exports, _pane) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
;define("artikel-affe/components/bs-tooltip", ["exports", "ember-bootstrap/components/bs-tooltip"], function (_exports, _bsTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
;define("artikel-affe/components/bs-tooltip/element", ["exports", "ember-bootstrap/components/bs-tooltip/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("artikel-affe/components/ember-popper-targeting-parent", ["exports", "ember-popper/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("artikel-affe/components/ember-popper", ["exports", "ember-popper/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("artikel-affe/controllers/der-die-das", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    setNextIndex() {
      const newIndex = Math.floor(Math.random() * this.model.length);
      this.set('currentIndex', newIndex);
    },

    articles: Ember.computed(function () {
      return ['Der', 'Die', 'Das'];
    }),
    lastAnswers: Ember.computed(function () {
      return [];
    }),
    currentIndex: 0,
    currentWord: Ember.computed('currentIndex', function () {
      return this.model[this.currentIndex].word;
    }),
    statistics: Ember.computed('lastAnswers.[]', function () {
      const lastAnswers = this.lastAnswers;
      if (lastAnswers.length === 0) return {};
      let rollingStreak = 0;
      let longestStreak = 0;

      for (let i = 0; i < lastAnswers.length; i++) {
        rollingStreak = lastAnswers[i].result ? rollingStreak + 1 : 0;
        longestStreak = Math.max(rollingStreak, longestStreak);
      }

      const last10 = lastAnswers.slice(0, 10);
      const last10right = last10.filter(i => i.result);
      const last100 = lastAnswers.slice(0, 100);
      const last100right = last100.filter(i => i.result);
      const last100der = last100.filter(i => i.article === 'Der');
      const last100die = last100.filter(i => i.article === 'Die');
      const last100das = last100.filter(i => i.article === 'Das');
      const last100derRight = last100der.filter(i => i.result);
      const last100dieRight = last100die.filter(i => i.result);
      const last100dasRight = last100das.filter(i => i.result);
      let statistics = {
        streak: {
          right: last10right.length,
          total: last10.length,
          longestStreak: longestStreak
        },
        percents: {
          total: new Intl.NumberFormat('en-EN', {
            style: 'percent'
          }).format(last100right.length / Math.max(last100.length, 1)),
          der: new Intl.NumberFormat('en-EN', {
            style: 'percent'
          }).format(last100derRight.length / Math.max(last100der.length, 1)),
          die: new Intl.NumberFormat('en-EN', {
            style: 'percent'
          }).format(last100dieRight.length / Math.max(last100die.length, 1)),
          das: new Intl.NumberFormat('en-EN', {
            style: 'percent'
          }).format(last100dasRight.length / Math.max(last100das.length, 1))
        }
      };
      return statistics;
    }),
    checkArticle: function (a) {
      const rightAnswer = this.model[this.currentIndex];
      this.lastAnswers.unshiftObject({
        result: rightAnswer.article === a,
        answer: a,
        article: rightAnswer.article,
        word: rightAnswer.word,
        translation: rightAnswer.translation
      });
      this.setNextIndex();
    }
  });

  _exports.default = _default;
});
;define("artikel-affe/helpers/app-version", ["exports", "artikel-affe/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("artikel-affe/helpers/bs-contains", ["exports", "ember-bootstrap/helpers/bs-contains"], function (_exports, _bsContains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(_exports, "bsContains", {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
;define("artikel-affe/helpers/bs-eq", ["exports", "ember-bootstrap/helpers/bs-eq"], function (_exports, _bsEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(_exports, "eq", {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
;define("artikel-affe/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("artikel-affe/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("artikel-affe/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("artikel-affe/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("artikel-affe/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("artikel-affe/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "artikel-affe/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("artikel-affe/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("artikel-affe/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
;define("artikel-affe/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("artikel-affe/initializers/export-application-global", ["exports", "artikel-affe/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("artikel-affe/initializers/load-bootstrap-config", ["exports", "artikel-affe/config/environment", "ember-bootstrap/config"], function (_exports, _environment, _config) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize()
  /* container, application */
  {
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  var _default = {
    name: 'load-bootstrap-config',
    initialize
  };
  _exports.default = _default;
});
;define("artikel-affe/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("artikel-affe/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("artikel-affe/router", ["exports", "artikel-affe/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('der-die-das');
  });
  var _default = Router;
  _exports.default = _default;
});
;define("artikel-affe/routes/der-die-das", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // http://frequencylists.blogspot.com/2016/01/the-2980-most-frequently-used-german.html
  let data = "1. Time \u2013 Die Zeit ~ Die Zeiten\n2. Man \u2013 Der Man ~ Die M\xE4nner\n3. Hand \u2013 Die Hand ~ Die H\xE4nde\n4. Day \u2013 Der Tag ~ Die Tagen\n5. Way \u2013 Der Weg ~ Die Wege\n6. Eye \u2013 Das Auge ~ Die Augen\n7. Thing \u2013 Das Ding ~ Die Dinge\n8. Head \u2013 Der Kopf ~ Die K\xF6pfe\n9. Year \u2013 Das Jahr ~ Die Jahre\n10. Room \u2013 Die Raum ~ Die R\xE4ume\n11. Door \u2013 Die T\xFCr ~ Die T\xFCren\n12. Woman \u2013 Die Frau ~ Die Frauen\n13. Face \u2013 Das Gesicht ~ Die Gesichter\n14. Mother \u2013 Die Mutter ~ Die M\xFCtter\n15. People \u2013 Das Volk ~ Die V\xF6lker\n16. Night \u2013 Die Nacht ~ Die N\xE4chte\n17. House \u2013 Das Haus ~ Die H\xE4user\n18. Father \u2013 Der Vater ~ Die V\xE4ter\n19. Life \u2013 Das Leben ~ Die Leben\n20. Back \u2013 Der R\xFCcken ~ Die R\xFCcken\n21. Voice \u2013 Die Stimme ~ Die Stimmen\n22. Girl \u2013 Das M\xE4dchen ~ Die M\xE4dchen\n23. Place \u2013 Der Ort ~ Die Orte\n24. Boy \u2013 Der Junge ~ Die Jungen\n25. Car \u2013 Das Auto ~ Die Autos\n26. Side \u2013 Die Seite ~ Die Seiten\n27. Arm \u2013 Der Arm ~ Die Arme\n28. Child \u2013 Das Kind ~ Die Kinder\n29. Word \u2013 Das Wort ~ Die Worte\n30. Moment \u2013 Der Moment ~ Die Momente\n31. Hair \u2013 Das Haar ~ Die Haare\n32. Foot \u2013 Der Fu\xDF ~ Die F\xFC\xDFe\n33. Water \u2013 Das Wasser ~ Die Wasser\n34. Light \u2013 Das Licht ~ Die Lichter\n35. World \u2013 Die Welt ~ Die Welt\n36. Name \u2013 Der Name ~ Die Namen\n37. Friend \u2013 Der Freund ~ Die Freunde\n38. Window \u2013 Das Fenster ~ Die Fenster\n39. Body \u2013 Der K\xF6rper ~ Die K\xF6rper\n40. Table \u2013 Der Tisch ~ Die Tabellen\n41. Morning \u2013 Der Morgen ~ Die Morgen\n42. Bed \u2013 Das Bett ~ Die Betten\n43. Wall \u2013 Die Mauer ~ Die W\xE4nde\n44. Street \u2013 Die Stra\xDFe ~ Die Stra\xDFen\n45. School \u2013 Die Schule ~ Die Schulen\n46. Air \u2013 Die Luft ~ Die L\xFCfte\n47. Floor \u2013 Der Boden ~ Die B\xF6den\n48. Hour \u2013 Die Stunde ~ Die Stunden\n49. End \u2013 Das Ende ~ Die Enden\n50. Family \u2013 Die Familie ~ Die Familien\n51. Guy \u2013 Der Kerl ~ Die Kerle\n52. Kind \u2013 Die Art ~ Die Arten\n53. Minute \u2013 Die Minute ~ Die Minuten\n54. Story \u2013 Die Geschichte ~ Die Geschichten\n55. God \u2013 Der Gott ~ Die G\xF6tter\n56. Week \u2013 Die Woche ~ Die Wochen\n57. Work \u2013 Die Arbeit ~ Die Werke\n58. Shoulder \u2013 Die Schulter ~ Die Schultern\n59. Part \u2013 Der Teil ~ Die Teile\n60. Mind \u2013 Der Geist ~ Die Gem\xFCter\n61. Book \u2013 Das Buch ~ Die B\xFCcher\n62. Finger \u2013 Der Finger ~ Die Finger\n63. Mouth \u2013 Der Mund ~ Die M\xFCndungen\n64. Kid \u2013 Das Kind ~ Die Kinder\n65. Glass \u2013 Das Glas ~ Die Brille\n66. Tree \u2013 Der Baum ~ Die B\xE4ume\n67. Sound \u2013 Der Klang ~ Die Ger\xE4usche\n68. Line \u2013 Die Linie ~ Die Linien\n69. Wife \u2013 Die Ehefrau ~ Die Ehefrauen\n70. Heart \u2013 Das Herz ~ Die Herzen\n71. Money \u2013 Das Geld ~ Die Gelder\n72. Phone \u2013 Das Telefon ~ Die Telefone\n73. Look \u2013 Das Aussehen ~ Die Blicke\n74. Leg \u2013 Das Bein ~ Die Beine\n75. Chair \u2013 Der Stuhl ~ Die St\xFChle\n76. Office \u2013 Das B\xFCro ~ Die B\xFCros\n77. Brother \u2013 Der Bruder ~ Die Br\xFCder\n78. Question \u2013 Die Frage ~ Die Fragen\n79. City \u2013 Die Stadt ~ Die St\xE4dte\n80. Month \u2013 Der Monat ~ Die Monate\n81. Baby \u2013 Das Baby ~ Die Babys\n82. Home \u2013 Das Zuhause ~ Die H\xE4user\n83. Dog \u2013 Der Hund ~ Die Hunde\n84. Road \u2013 Die Stra\xDFe ~ Die Stra\xDFen\n85. Idea \u2013 Die Idee ~ Die Ideen\n86. Kitchen \u2013 Die K\xFCche ~ Die K\xFCchen\n87. Lot \u2013 Das Los ~ Die Lose\n88. Son \u2013 Der Sohn ~ Die S\xF6hne\n89. Job \u2013 Der Beruf ~ Die Jobs\n90. Paper \u2013 Das Papier ~ Die Papiere\n91. Sister \u2013 Die Schwester ~ Die Schwestern\n92. Smile \u2013 Das L\xE4cheln ~ Die L\xE4cheln\n93. Point \u2013 Der Punkt ~ Die Punkte\n94. Thought \u2013 Der Gedanke ~ Die Gedanken\n95. Love \u2013 Die Liebe ~ Die Liebe\n96. Town \u2013 Die Stadt ~ Die St\xE4dte\n97. Death \u2013 Der Tod ~ Die Todesf\xE4lle\n98. Ground \u2013 Der Boden ~ Die Gr\xFCnde\n99. Others \u2013 Die Anderen ~ Die Anderen\n100. Fire \u2013 Das Feuer ~ Die Feuer\n101. Step \u2013 Der Schritt ~ Die Schritte\n102. Blood \u2013 Das Blut ~ Die Blut\n103. Fact \u2013 Die Tatsache ~ Die Fakten\n104. Breath \u2013 Der Atem ~ Die Atem\n105. Lip \u2013 Die Lippe ~ Die Lippen\n106. Sun \u2013 Die Sonne ~ Die Sonnen\n107. Building \u2013 Geb\xE4ude ~ Die Geb\xE4ude\n108. Number \u2013 Die Anzahl ~ Die Nummern\n109. Husband \u2013 Der Ehemann ~ Die Ehem\xE4nner\n110. Parent \u2013 Das Elternteil ~ Die Eltern\n111. Corner \u2013 Die Ecke ~ Die Ecken\n112. Problem \u2013 Das Problem ~ Die Probleme\n113. Couple \u2013 Das Ehepaar ~ Die Paare\n114. Daughter \u2013 Die Tochter ~ Die T\xF6chter\n115. Bag \u2013 Der Beutel ~ Die Taschen\n116. Hell \u2013 Die H\xF6lle ~ Die H\xF6llen\n117. Rest \u2013 Die Rast ~ Die Reste\n118. Business \u2013 Das Gesch\xE4ft ~ Die Unternehmen\n119. Sky \u2013 Der Himmel ~ Der Himmel\n120. Box \u2013 Die Kiste ~ Die Boxs\n121. Person \u2013 Die Person ~ Die Personen\n122. Reason \u2013 Der Grund ~ Die Gr\xFCnde\n123. Right \u2013 Das Recht ~ Die Rechte\n124. Skin \u2013 Die Haut ~ Die H\xE4ute\n125. Dad \u2013 Der Vater ~ Die V\xE4ter\n126. Case \u2013 Der Fall ~ Die F\xE4lle\n127. Piece \u2013 Das St\xFCck ~ Die St\xFCcke\n128. Doctor \u2013 Der Doktor ~ Die Doktoren\n129. Edge \u2013 Die Ecke ~ Die Kanten\n130. Mom \u2013 Die Mama ~ Die M\xFCtter\n131. Picture \u2013 Das Bild ~ Die Bilder\n132. Sense \u2013 Der Sinn ~ Die Sinne\n133. Ear \u2013 Das Ohr ~ Die Ohren\n134. Second \u2013 Der Zweite ~ Die Sekunden\n135. Lady \u2013 Die Dame ~ Die Damen\n136. Neck \u2013 Der Hals ~ Die H\xE4lse\n137. Wind \u2013 Der Wind ~ Die Winde\n138. Desk \u2013 Der Schreibtisch ~ Die Schreibtische\n139. Gun \u2013 Die Waffe ~ Die Waffen\n140. Stone \u2013 Der Stein ~ Die Steine\n141. Coffee \u2013 Der Kaffee ~ Die Kaffee\n142. Ship \u2013 Das Schiff ~ Die Schiffe\n143. Earth \u2013 Die Erde ~ Die Erden\n144. Food \u2013 Das Essen ~ Die Lebensmittel\n145. Horse \u2013 Das Pferd ~ Die Pferde\n146. Field \u2013 Das Feld ~ Die Felder\n147. War \u2013 Der Krieg ~ Die Kriege\n148. Afternoon \u2013 Der Nachmittag ~ Die Nachmittage\n149. Sir \u2013 Die Sir ~ Die Damen Und Herren\n150. Space \u2013 Der Raum ~ Die R\xE4ume\n151. Evening \u2013 Der Abend ~ Die Abende\n152. Letter \u2013 Der Brief ~ Die Briefe\n153. Bar \u2013 Die Bar ~ Die Bars\n154. Dream \u2013 Der Traum ~ Die Tr\xE4ume\n155. Apartment \u2013 Die Wohnung ~ Die Wohnungen\n156. Chest \u2013 Die Brust ~ Die Truhen\n157. Game \u2013 Das Spiel ~ Die Spiele\n158. Summer \u2013 Der Sommer ~ Die Sommer\n159. Matter \u2013 Der Grund ~ Die Angelegenheiten\n160. Silence \u2013 Die Stille ~ Die Stille\n161. Top \u2013 Die Spitze ~ Die Spitzen\n162. Rock \u2013 Der Fels ~ Die Steine\n163. Power \u2013 Die Macht ~ Die Befugnisse\n164. Clothes \u2013 Die Kleider ~ Die Clotheses\n165. Sign \u2013 Das Schild ~ Die Zeichen\n166. Attention \u2013 Die Aufmerksamkeit ~ Die Aufmerksamkeit\n167. Music \u2013 Die Musik ~ Die Musiken\n168. State \u2013 Der Staat ~ Die Staaten\n169. Pocket \u2013 Die Tasche ~ Die Taschen\n170. Dinner \u2013 Das Abendessen ~ Die Abendessen\n171. Hall \u2013 Die Halle ~ Die Hallen\n172. Pain \u2013 Der Schmerz ~ Die Schmerzen\n173. Age \u2013 Das Alter ~ Das Alter\n174. River \u2013 Der Fluss ~ Die Fl\xFCsse\n175. Chance \u2013 Die Chance ~ Die Chancen\n176. Nose \u2013 Die Nase ~ Die Nasen\n177. Shadow \u2013 Der Schatten ~ Die Schatten\n178. Police \u2013 Die Polizei ~ Die Politiken\n179. Memory \u2013 Das Ged\xE4chtnis ~ Die Erinnerungen\n180. Color \u2013 Die Farbe ~ Die Farben\n181. Knee \u2013 Das Knie ~ Die Knie\n182. Wood \u2013 Das Holz ~ Der Wald\n183. Shirt \u2013 Das Hemd ~ Die Hemden\n184. Party \u2013 Die Party ~ Die Parteien\n185. Country \u2013 Das Land ~ Die L\xE4nder\n186. Truck \u2013 Der Lkw ~ Die Lastwagen\n187. Tooth \u2013 Der Zahn ~ Die Tooths\n188. Bill \u2013 Die Rechnung ~ Die Rechnungen\n189. Scene \u2013 Die Szene ~ Szenen\n190. Land \u2013 Das Land ~ Die L\xE4ndereien\n191. Star \u2013 Der Stern ~ Die Sterne\n192. Bird \u2013 Der Vogel ~ Die V\xF6gel\n193. Bedroom \u2013 Das Schlafzimmer ~ Die Schlafzimmer\n194. Uncle \u2013 Der Onkel ~ Die Onkel\n195. Sort \u2013 Die Art ~ Die Sorten\n196. Group \u2013 Die Gruppe ~ Die Gruppen\n197. Truth \u2013 Die Wahrheit ~ Die Wahrheiten\n198. Trouble \u2013 Die Schwierigkeiten ~ Die Probleme\n199. Crowd \u2013 Die Menge ~ Die Menschenmengen\n200. Station \u2013 Der Bahnhof ~ Die Stationen\n201. Tear \u2013 Die Rei\xDF ~ Die Tr\xE4nen\n202. Class \u2013 Die Klasse ~ Die Klassen\n203. Sea \u2013 Das Meer ~ Die Meere\n204. Animal \u2013 Das Tier ~ Die Tiere\n205. Center \u2013 Das Zentrum ~ Die Zentren\n206. Feeling \u2013 Das Gef\xFChl ~ Die Gef\xFChle\n207. Store \u2013 Das Gesch\xE4ft ~ Die L\xE4den\n208. Mountain \u2013 Der Berg ~ Die Berge\n209. News \u2013 Die Nachrichten ~ Die Newses\n210. Shoe \u2013 Der Schuh ~ Die Schuhe\n211. Cat \u2013 Die Katze ~ Die Katzen\n212. Screen \u2013 Der Bildschirm ~ Die Schirme\n213. Bottle \u2013 Die Flasche ~ Die Flaschen\n214. Call \u2013 Der Anruf ~ Die Anrufe\n215. Living \u2013 Die Lebenden ~ Die Livings\n216. Cheek \u2013 Die Wange ~ Die Wangen\n217. Student \u2013 Der Sch\xFCler ~ Die Studenten\n218. Ball \u2013 Der Ball ~ Die B\xE4lle\n219. Sight \u2013 Die Sehensw\xFCrdigkeit ~ Die Sehensw\xFCrdigkeiten\n220. Hill \u2013 Der H\xFCgel ~ Die H\xFCgel\n221. Company \u2013 Das Unternehmen ~ Die Betriebe\n222. Church \u2013 Die Kirche ~ Die Kirchen\n223. Rain \u2013 Der Regen ~ Die Regenzeit\n224. Suit \u2013 Der Anzug ~ Die Anz\xFCge\n225. One \u2013 Der Eine ~ Die Einen\n226. Direction \u2013 Die Richtung ~ Die Richtungen\n227. Will \u2013 Der Wille ~ Die Testamente\n228. Throat \u2013 Der Hals ~ Die Kehlen\n229. Middle \u2013 Die Mitte ~ Die Middles\n230. Answer \u2013 Die Antwort ~ Die Antworten\n231. Stuff \u2013 Das Zeug ~ Die Stoffe\n232. Hospital \u2013 Das Krankenhaus ~ Die Krankenh\xE4user\n233. Camera \u2013 Die Kamera ~ Die Kameras\n234. Dress \u2013 Das Kleid ~ Die Kleider\n235. Card \u2013 Die Karte ~ Die Karten\n236. Yard \u2013 Der Hof ~ Die Werften\n237. Dark \u2013 Die Dunkelheit ~ Die Dunkelheiten\n238. Shit \u2013 Die Schei\xDFe ~ Die Schei\xDFe\n239. Image \u2013 Das Bild ~ Die Bilder\n240. Machine \u2013 Die Maschine ~ Die Maschinen\n241. Distance \u2013 Die Distanz ~ Die Abst\xE4nde\n242. Area \u2013 Das Gebiet ~ Die Bereiche\n243. Narrator \u2013 Der Erz\xE4hler ~ Die Erz\xE4hler\n244. Ice \u2013 Das Eis ~ Die Ices\n245. Snow \u2013 Der Schnee ~ Der Schnee\n246. Note \u2013 Die Notiz ~ Die Notizen\n247. Mirror \u2013 Der Spiegel ~ Die Spiegel\n248. King \u2013 Der K\xF6nig ~ Die K\xF6nige\n249. Fear \u2013 Die Angst ~ Die \xC4ngste\n250. Officer \u2013 Der Offizier ~ Die Offiziere\n251. Hole \u2013 Das Loch ~ Die L\xF6cher\n252. Shot \u2013 Der Schuss ~ Die Sch\xFCsse\n253. Guard \u2013 Der W\xE4chter ~ Die Wachen\n254. Conversation \u2013 Die Unterhaltung ~ Die Gespr\xE4che\n255. Boat \u2013 Das Boot ~ Die Boote\n256. System \u2013 Das System ~ Die Systeme\n257. Care \u2013 Die Pflege ~ Die Sorgen\n258. Bit \u2013 Die Bit ~ Die Bits\n259. Movie \u2013 Der Film ~ Kino\n260. Bone \u2013 Der Knochen ~ Die Knochen\n261. Page \u2013 Die Seite ~ Die Seiten\n262. Captain \u2013 Der Kapit\xE4n ~ Die Kapit\xE4ne\n263. Aunt \u2013 Die Tante ~ Die Tanten\n264. Darkness \u2013 Dunkelheit ~ Die Dunkelheiten\n265. Control \u2013 Die Kontrolle ~ Die Steuerelemente\n266. Drink \u2013 Das Getr\xE4nk ~ Die Getr\xE4nke\n267. Hotel \u2013 Das Hotel ~ Die Hotels\n268. Coat \u2013 Der Mantel ~ Die M\xE4ntel\n269. Stair \u2013 Die Treppen ~ Die Treppe\n270. Order \u2013 Die Bestellung ~ Die Auftr\xE4ge\n271. Rose \u2013 Die Rose ~ Die Rosen\n272. Miss \u2013 Der Fehl ~ Die Fehlsch\xFCsse\n273. Hat \u2013 Der Hut ~ Die H\xFCte\n274. Gold \u2013 Das Gold ~ Die Goldmedaillen\n275. Cigarette \u2013 Die Zigarette ~ Die Zigaretten\n276. Cloud \u2013 Die Wolke ~ Die Wolken\n277. View \u2013 Die Aussicht ~ Die Ansichten\n278. Driver \u2013 Der Fahrer ~ Die Fahrer\n279. Cup \u2013 Die Tasse ~ Die Tassen\n280. Figure \u2013 Die Figur ~ Die Figuren\n281. Expression \u2013 Der Ausdruck ~ Die Ausdr\xFCcke\n282. Path \u2013 Der Pfad ~ Die Wege\n283. Key \u2013 Der Schl\xFCssel ~ Die Schl\xFCssel\n284. Computer \u2013 Der Computer ~ Die Computer\n285. Flower \u2013 Die Blume ~ Die Blumen\n286. Ring \u2013 Der Ring ~ Die Ringe\n287. Bathroom \u2013 Das Bad ~ Die Badezimmer\n288. Metal \u2013 Das Metall ~ Die Metalle\n289. Moon \u2013 Der Mond ~ Die Monde\n290. Song \u2013 Das Lied ~ Die Lieder\n291. Soldier \u2013 Der Soldat ~ Die Soldaten\n292. Radio \u2013 Das Radio ~ Die Funkger\xE4te\n293. History \u2013 Die Geschichte ~ Die Geschichten\n294. Wave \u2013 Die Welle ~ Die Wellen\n295. Plan \u2013 Der Plan ~ Die Pl\xE4ne\n296. College \u2013 Das College ~ Die Fachhochschulen\n297. Fish \u2013 Der Fisch ~ Die Fische\n298. Garden \u2013 Der Garten ~ Die G\xE4rten\n299. Train \u2013 Der Zug ~ Die Z\xFCge\n300. Shop \u2013 Das Gesch\xE4ft ~ Die L\xE4den\n301. Cop \u2013 Der Polizist ~ Die Polizisten\n302. Art \u2013 Die Kunst ~ Die K\xFCnste\n303. Beer \u2013 Das Bier ~ Die Biere\n304. North \u2013 Norden ~ Die Norths\n305. Island \u2013 Die Insel ~ Die Inseln\n306. Bus \u2013 Der Bus ~ Die Busse\n307. Smell \u2013 Der Geruch ~ Die Ger\xFCche\n308. Noise \u2013 Das Ger\xE4usch ~ Die Ger\xE4usche\n309. Mama \u2013 Die Mama ~ The Mamas\n310. Park \u2013 Der Park ~ Die Parks\n311. South \u2013 Der S\xFCden ~ Die Souths\n312. Pair \u2013 Das Paar ~ Die Paare\n313. Lord \u2013 Der Herr ~ Die Herren\n314. Plate \u2013 Der Teller ~ Die Platten\n315. Jacket \u2013 Die Jacke ~ Die Jacken\n316. Help \u2013 Die Hilfe ~ Die Hilft\n317. Daddy \u2013 Der Papa ~ Die V\xE4ter\n318. Grass \u2013 Das Gras ~ Die Gr\xE4ser\n319. Thanks \u2013 Die Dank ~ Die Thankses\n320. Heat \u2013 Die Hitze ~ Die Heats\n321. Sleep \u2013 Der Schlaf ~ Die Schlafpl\xE4tze\n322. Brain \u2013 Das Gehirn ~ Die Gehirne\n323. Service \u2013 Der Service ~ Der Dienstleistungen\n324. Trip \u2013 Die Reise ~ Die Ausfl\xFCge\n325. Beat \u2013 Der Beat ~ Die Beats\n326. Knife \u2013 Das Messer ~ Die Messer\n327. Spot \u2013 Der Platz ~ Die Flecken\n328. Message \u2013 Die Nachricht ~ Die Nachrichten\n329. Mark \u2013 Die Note ~ Die Noten\n330. Teacher \u2013 Der Lehrer ~ Die Lehrer\n331. Gaze \u2013 Der Blick ~ Die Blicke\n332. Village \u2013 Das Dorf ~ Die D\xF6rfer\n333. Winter \u2013 Der Winter ~ Die Winter\n334. Front \u2013 Die Front ~ Die Fronten\n335. Law \u2013 Das Gesetz ~ Die Gesetze\n336. Surface \u2013 Die Oberfl\xE4che ~ Die Oberfl\xE4chen\n337. Bank \u2013 Die Bank ~ Die Banken\n338. Team \u2013 Das Team ~ Die Teams\n339. Maximum \u2013 Das Maximum ~ Die Maxima\n340. Position \u2013 Die Position ~ Die Positionen\n341. Stomach \u2013 Der Bauch ~ Die M\xE4gen\n342. Turn \u2013 Die Wende ~ Die Windungen\n343. West \u2013 Der Westen ~ Die Wests\n344. Lunch \u2013 Das Mittagessen ~ Die Mittagessen\n345. Change \u2013 Der Wechsel ~ Die Ver\xE4nderungen\n346. Creature \u2013 Die Kreatur ~ Gesch\xF6pfe\n347. Soul \u2013 Die Seele ~ Die Seelen\n348. Leaf \u2013 Das Blatt ~ Die Bl\xE4tter\n349. Show \u2013 Die Show ~ Die Shows\n350. Gate \u2013 Die Gate ~ Die Tore\n351. Palm \u2013 Die Palme ~ Die Handfl\xE4chen\n352. Plastic \u2013 Der Kunststoff ~ Die Kunststoff\n353. Force \u2013 Die Kraft ~ Die Kr\xE4fte\n355. Beach \u2013 Der Strand ~ Die Str\xE4nde\n356. President \u2013 Der Pr\xE4sident ~ Die Pr\xE4sidenten\n357. Shape \u2013 Die Form ~ Die Formen\n358. Smoke \u2013 Der Rauch ~ Die Raucht\n359. Wheel \u2013 Das Rad ~ Die R\xE4der\n360. Silver \u2013 Das Silber ~ Die Silber\n361. Roof \u2013 Das Dach ~ Die D\xE4cher\n362. Weight \u2013 Das Gewicht ~ Die Gewichte\n363. Tongue \u2013 Die Zunge ~ Die Zungen\n364. Tea \u2013 Der Tee ~ Die Tees\n365. Track \u2013 Die Strecke ~ Die Spuren\n366. Angle \u2013 Der Winkel ~ Die Winkel\n367. Form \u2013 Die Form ~ Formen\n368. Tone \u2013 Der Ton ~ Die T\xF6ne\n369. Circle \u2013 Der Kreis ~ Die Kreise\n370. Spring \u2013 Der Fr\xFChling ~ Die Federn\n371. Porch \u2013 Die Vorhalle ~ Die Veranden\n372. Sheet \u2013 Das Blatt ~ Die Bl\xE4tter\n373. Member \u2013 Das Mitglied ~ Die Angeh\xF6rigen\n374. Pool \u2013 Das Schwimmbecken ~ Die Pools\n375. Need \u2013 Das Bed\xFCrfnis ~ Die Bed\xFCrfnisse\n376. Hope \u2013 Die Hoffnung ~ Die Hoffnungen\n377. Lake \u2013 Der See ~ Die Seen\n378. Breast \u2013 Die Brust ~ Die Br\xFCste\n379. Surprise \u2013 Die \xDCberraschung ~ Die \xDCberraschungen\n380. Interest \u2013 Die Interesse ~ Die Interessen\n381. Bottom \u2013 Der Boden ~ Die B\xF6den\n382. Spirit \u2013 Der Geist ~ Die Geister\n383. Block \u2013 Der Block ~ Die Bl\xF6cke\n384. Language \u2013 Die Sprache ~ Die Sprachen\n385. Bridge \u2013 Die Br\xFCcke ~ Die Br\xFCcken\n386. Dust \u2013 Staub ~ Die St\xE4ube\n387. Cell \u2013 Die Zelle ~ Die Zellen\n388. Wine \u2013 Wein ~ Die Weine\n389. Boot \u2013 Das Boot ~ Die Stiefel\n390. Choice \u2013 Die Wahl ~ Die Entscheidungen\n391. Row \u2013 Die Reihe ~ Die Reihen\n392. Talk \u2013 Das Gespr\xE4ch ~ Die Gespr\xE4che\n393. Plane \u2013 Das Flugzeug ~ Die Flugzeuge\n394. Watch \u2013 Die Uhr ~ Die Uhren\n395. Information \u2013 Die Information ~ Die Informationen\n396. Grandmother \u2013 Die Gro\xDFmutter ~ Die Gro\xDFm\xFCtter\n397. Wing \u2013 Der Fl\xFCgel ~ Die Fl\xFCgel\n398. Bob \u2013 Die Bob ~ Die Bobs\n399. Club \u2013 Der Club ~ Die Vereine\n400. Master \u2013 Der Meister ~ Die Meister\n401. Grace \u2013 Die Gnade ~ Die Gnaden\n402. Forest \u2013 Der Wald ~ Die W\xE4lder\n403. Size \u2013 Die Gr\xF6\xDFe ~ Die Gr\xF6\xDFen\n404. Set \u2013 Der Satz ~ Die S\xE4tze\n405. Marriage \u2013 Die Ehe ~ Die Ehen\n406. Forehead \u2013 Die Stirn ~ Die Stirn\n407. Storm \u2013 Sturm ~ Die St\xFCrme\n408. Doorway \u2013 Die T\xFCr\xF6ffnung ~ Die T\xFCren\n409. Situation \u2013 Die Situation ~ Die Situationen\n410. Counter \u2013 Der Z\xE4hler ~ Die Z\xE4hler\n411. Neighbor \u2013 Der Nachbar ~ Die Nachbarn\n412. Photo \u2013 Das Foto ~ Die Fotos\n413. Stage \u2013 Die B\xFChne ~ Die Stufen\n414. Meeting \u2013 Das Treffen ~ Die Sitzungen\n415. Nurse \u2013 Die Krankenschwester ~ Die Krankenschwestern\n416. Security \u2013 Die Sicherheit ~ Die Wertpapiere\n417. Weapon \u2013 Die Waffe ~ Waffen\n418. Event \u2013 Das Ereignis ~ Die Events\n419. Ceiling \u2013 Die Decke ~ Die Decken\n420. Engine \u2013 Der Motor ~ Die Motoren\n421. Gift \u2013 Das Geschenk ~ Die Geschenke\n422. Restaurant \u2013 Das Restaurant ~ Die Restaurants\n423. Board \u2013 Die Tafel ~ Die Bretter\n424. Hallway \u2013 Der Flur ~ Die Flure\n425. Army \u2013 Die Armee ~ Die Armeen\n426. Effort \u2013 Der Aufwand ~ Bem\xFChungen\n427. East \u2013 Der Osten ~ Die Easts\n428. Agent \u2013 Der Agent ~ Die Mittel\n429. Future \u2013 Die Zukunft ~ Die Futures\n430. Pant \u2013 Die Hose ~ Die Hose\n431. Leather \u2013 Das Leder ~ Die Leder\n432. Flight \u2013 Der Flug ~ Die Fl\xFCge\n433. Sex \u2013 Das Geschlecht ~ Die Sexs\n434. Court \u2013 Das Gericht ~ Die Gerichte\n435. Course \u2013 Der Kurs ~ Die Kurse\n436. Dirt \u2013 Der Dreck ~ Die Dirts\n437. Egg \u2013 Das Ei ~ Die Eier\n438. Chin \u2013 Das Kinn ~ Die Kinne\n439. Stranger \u2013 Der Fremde ~ Die Fremden\n440. Pleasure \u2013 Die Freude ~ Die Freuden\n441. Detail \u2013 Das Detail ~ Die Details\n442. Crew \u2013 Die Besatzung ~ Die Besatzungen\n443. Fall \u2013 Der Herbst ~ Die Wasserf\xE4lle\n444. Guest \u2013 Der Gast ~ Die G\xE4ste\n445. Experience \u2013 Das Erlebnis ~ Erfahrungen\n446. Joke \u2013 Der Witz ~ Die Witze\n447. Sand \u2013 Der Sand ~ Der Sand\n448. Fist \u2013 Die Faust ~ Die F\xE4uste\n449. Action \u2013 Die Aktion ~ Die Aktionen\n450. Walk \u2013 Das Wandern ~ Die Wanderungen\n451. Wedding \u2013 Die Hochzeit ~ Die Hochzeiten\n452. Deal \u2013 Der Deal ~ Die Angebote\n453. Nature \u2013 Die Natur ~ Die Natur\n454. Planet \u2013 Der Planet ~ Die Planeten\n455. Cousin \u2013 Der Cousin ~ Die Cousinen\n456. Movement \u2013 Die Bewegung ~ Die Bewegungen\n457. Flesh \u2013 Das Fleisch ~ Die Konkretisiert\n458. Record \u2013 Der Datensatz ~ Datens\xE4tze\n459. Camp \u2013 Das Camp ~ Die Lager\n460. Newspaper \u2013 Die Zeitung ~ Die Zeitung\n461. Ray \u2013 Der Strahl ~ Die Strahlen\n462. Human \u2013 Der Mensch ~ Die Menschen\n463. Couch \u2013 Das Sofa ~ Die Liegen\n464. Motion \u2013 Die Bewegung ~ Die Bewegungen\n465. Grandfather \u2013 Der Gro\xDFvater ~ Die Gro\xDFv\xE4ter\n466. Photograph \u2013 Die Fotografie ~ Die Photographes\n467. Secret \u2013 Das Geheimnis ~ Geheimnisse\n468. Beauty \u2013 Die Sch\xF6nheit ~ Die Sch\xF6nheiten\n469. Presence \u2013 Das Vorhandensein ~ Die Pr\xE4senzen\n470. Bell \u2013 Die Glocke ~ Die Glocken\n471. Folk \u2013 Die Volks ~ Die Leute\n472. Button \u2013 Der Knopf ~ Die Kn\xF6pfe\n473. List \u2013 Die Liste ~ Die Listen\n474. Level \u2013 Das Level ~ Die Niveaus\n475. Date \u2013 Das Datum ~ Die Daten\n476. Subject \u2013 Das Thema ~ Die F\xE4cher\n477. Difference \u2013 Der Unterschied ~ Die Unterschiede\n478. Pause \u2013 Die Pause ~ Die Pausen\n479. Van \u2013 Der Van ~ Die Wagen\n480. Blade \u2013 Die Klinge ~ Die Klingen\n481. Television \u2013 Das Fernsehen ~ Die Fernseher\n482. Cover \u2013 Die Titelseite ~ Die Abdeckungen\n483. Past \u2013 Die Vergangenheit ~ Die Vergangenheit\n484. Farm \u2013 Der Bauernhof ~ Die Bauernh\xF6fe\n485. Lap \u2013 Die Runden ~ Die Runden\n486. Band \u2013 Die Band ~ Die Bands\n487. Lawyer \u2013 Der Anwalt ~ Die Anw\xE4lte\n488. Magazine \u2013 Das Magazin ~ Die Zeitschriften\n489. Branch \u2013 Der Ast ~ Die Zweige\n490. Frame \u2013 Der Rahmen ~ Die Rahmen\n491. Deck \u2013 Das Deck ~ Die Decks\n492. Effect \u2013 Der Effekt ~ Die Effekte\n493. Dance \u2013 Der Tanz ~ Die T\xE4nze\n494. Vision \u2013 Die Sicht ~ Die Visionen\n495. Ghost \u2013 Das Gespenst ~ Die Geister\n496. Ass \u2013 Der Esel ~ Die Esel\n497. Character \u2013 Der Charakter ~ Die Charaktere\n498. Glance \u2013 Der Blick ~ Die Blicke\n499. GoodBye \u2013 Das Auf Wiedersehen ~ Die Verabschiedungen\n500. Parking \u2013 Das Park ~ Die Parkpl\xE4tze\n501. Breakfast \u2013 Das Fr\xFChst\xFCck ~ Das Fr\xFChst\xFCck\n502. Gesture \u2013 Die Geste ~ Die Gesten\n503. Luck \u2013 Das Gl\xFCck ~ Die Lucks\n504. Blanket \u2013 Die Decke ~ Die Decken\n505. Gas \u2013 Das Gas ~ Die Gase\n506. Corridor \u2013 Der Korridor ~ Die Flure\n507. Professor \u2013 Der Professor ~ Die Professoren\n508. Play \u2013 Das Spiel ~ Die Spiele\n509. Mistake \u2013 Der Fehler ~ Die Fehler\n510. University \u2013 Die Universit\xE4t ~ Die Universit\xE4ten\n511. Ocean \u2013 Der Ozean ~ Die Ozeane\n512. Century \u2013 Das Jahrhundert ~ Die Jahrhunderte\n513. Honey \u2013 Der Honig ~ Honige\n514. Pile \u2013 Der Stapel ~ Die Pf\xE4hle\n515. Bowl \u2013 Die Schale ~ Die Schalen\n516. Base \u2013 Basis ~ Die Basen\n517. Fence \u2013 Der Zaun ~ Die Z\xE4une\n518. Rule \u2013 Die Regel ~ Die Regeln\n519. Laughter \u2013 Das Gel\xE4chter ~ Die Gel\xE4chter\n520. Anger \u2013 Die Wut ~ Die Angers\n521. Sweat \u2013 Der Schwei\xDF ~ Die Schwei\xDFausbr\xFCche\n522. Accident \u2013 Der Unfall ~ Die Unf\xE4lle\n523. Weather \u2013 Das Wetter ~ Die Wind Und Wetter\n524. Decision \u2013 Die Entscheidung ~ Die Entscheidungen\n525. Angel \u2013 Der Engel ~ Die Engel\n526. Strength \u2013 Die St\xE4rke ~ Die St\xE4rken\n527. Chicken \u2013 Das Huhn ~ Die H\xFChner\n528. Study \u2013 Die Studium ~ Die Studien\n529. Tape \u2013 Das Band ~ Die B\xE4nder\n530. Wrist \u2013 Das Handgelenk ~ Die Handgelenke\n531. Stop \u2013 Der Halt ~ Die Anschl\xE4ge\n532. Hip \u2013 Die H\xFCfte ~ Die H\xFCften\n533. Government \u2013 Die Regierung ~ Die Regierungen\n534. Belly \u2013 Der Bauch ~ Die B\xE4uche\n535. Queen \u2013 Die K\xF6nigin ~ Die K\xF6niginnen\n536. Report \u2013 Bericht ~ Die Berichte\n537. Tail \u2013 Der Schweif ~ Die Schw\xE4nze\n538. Plant \u2013 Die Pflanze ~ Die Pflanzen\n539. Flame \u2013 Die Flamme ~ Die Flammen\n540. Heaven \u2013 Der Himmel ~ Die Himmel\n541. Belt \u2013 Der G\xFCrtel ~ Die G\xFCrtel\n542. Neighborhood \u2013 Die Nachbarschaft ~ Die Nachbarschaften\n543. Energy \u2013 Die Energie ~ Die Energien\n544. Green \u2013 Das Gr\xFCn ~ Die Gr\xFCnen\n545. Quarter \u2013 Das Viertel ~ Die Viertel\n546. Enemy \u2013 Der Feind ~ Die Feinde\n547. Move \u2013 Die Bewegung ~ Die Z\xFCge\n548. Entrance \u2013 Der Eingang ~ Die Zug\xE4nge\n549. Library \u2013 Die Bibliothek ~ Die Bibliotheken\n550. Writer \u2013 Der Verfasser ~ Die Autoren\n551. Peace \u2013 Der Frieden ~ Die Peaces\n552. Touch \u2013 Die Ber\xFChrung ~ Die Ber\xFChrungen\n553. Pot \u2013 Der Topf ~ Die T\xF6pfe\n554. Type \u2013 Der Typ ~ Die Typen\n555. Cause \u2013 Der Grund ~ Die Gr\xFCnde\n556. Rope \u2013 Das Seil ~ Die Seile\n557. Muscle \u2013 Der Muskel ~ Die Muskeln\n558. Painting \u2013 Das Gem\xE4lde ~ Die Gem\xE4lde\n559. Curtain \u2013 Die Gardine ~ Die Vorh\xE4nge\n560. Meal \u2013 Die Mahlzeit ~ Die Essen\n561. Act \u2013 Der Akt ~ Die Handlungen\n562. Wolf \u2013 Der Wolf ~ Die W\xF6lfe\n563. Cabin \u2013 Die Kaj\xFCte ~ Die Kabinen\n564. Charge \u2013 Die Ladung ~ Die Ladungen\n565. Clock \u2013 Die Uhr ~ Die Uhren\n566. Passenger \u2013 Der Passagier ~ Die Passagiere\n567. Buddy \u2013 Der Kumpel ~ Die Freunde\n568. Drug \u2013 Das Medikament ~ Die Arzneimittel\n569. Use \u2013 Die Verwendung ~ Die Verwendungen\n570. Bench \u2013 Die Bank ~ Die B\xE4nke\n571. Traffic \u2013 Der Verkehr ~ Die Verkehre\n572. Relief \u2013 Das Relief ~ Die Reliefs\n573. Cap \u2013 Die Kappe ~ Die Kappen\n574. Pack \u2013 Das Rudel ~ Die Packungen\n575. Weekend \u2013 Das Wochenende ~ Die Wochenenden\n576. Stand \u2013 Der Stand ~ Die St\xE4nde\n577. Elevator \u2013 Der Aufzug ~ Die Aufz\xFCge\n578. Birthday \u2013 Der Geburtstag ~ Die Geburtstage\n579. Lily \u2013 Die Lilie ~ Die Lilien\n580. Iron \u2013 Das B\xFCgeleisen ~ Die Eisen\n581. Meat \u2013 Das Fleisch ~ Das Fleisch\n582. Eyebrow \u2013 Die Augenbraue ~ Die Augenbrauen\n583. Response \u2013 Die Antwort ~ Die Antworten\n584. Speed \u2013 Die Geschwindigkeit ~ Die Geschwindigkeiten\n585. Purpose \u2013 Die Absicht ~ Die Zwecke\n586. Skirt \u2013 Der Rock ~ Die R\xF6cke\n587. Square \u2013 Das Quadrat ~ Die Quadrate\n588. Drive \u2013 Die Fahrt ~ Die Antriebe\n589. Article \u2013 Den Artikel ~ Die Artikel\n590. English \u2013 Das Englisch ~ Die Englishes\n591. Tower \u2013 Der Turm ~ Die T\xFCrme\n592. Battle \u2013 Der Kampf ~ Die Schlachten\n593. Film \u2013 Der Film ~ Die Filme\n594. Race \u2013 Das Rennen ~ Die Rennen\n595. Shock \u2013 Der Schock ~ Die Schocks\n596. Section \u2013 Die Sektion ~ Die Abschnitte\n597. Manner \u2013 Die Methode ~ Die Sitten\n598. Sword \u2013 Das Schwert ~ Die Schwerter\n599. Stick \u2013 Der Stock ~ Die St\xF6cke\n600. File \u2013 Die Datei ~ Die Dateien\n601. Bread \u2013 Das Brot ~ Die Brote\n602. Oil \u2013 Das \xD6l ~ Die \xD6le\n603. Chain \u2013 Die Kette ~ Die Ketten\n604. Department \u2013 Die Abteilung ~ Die Abteilungen\n605. Project \u2013 Projekt ~ Die Projekte\n606. Murder \u2013 Der Mord ~ Die Morde\n607. Bear \u2013 Der B\xE4r ~ Die B\xE4ren\n608. Test \u2013 Der Test ~ Die Tests\n609. Visit \u2013 Der Besuch ~ Die Besuche\n610. Milk \u2013 Die Milch ~ Die Milch\n611. Boss \u2013 Der Chef ~ Die Bosse\n612. Elbow \u2013 Der Ellbogen ~ Die Ellbogen\n613. Desire \u2013 Das Verlangen ~ Die W\xFCnsche\n614. Patient \u2013 Der Patient ~ Die Patienten\n615. Grin \u2013 Das Grinsen ~ Die Grins\n616. Lover \u2013 Der Liebhaber ~ Die Liebhaber\n617. Price \u2013 Der Preis ~ Die Preise\n618. Map \u2013 Die Karte ~ Die Karten\n619. Knowledge \u2013 Das Wissen ~ Die Erkenntnisse\n620. Beginning \u2013 Der Anfang ~ Die Anf\xE4nge\n621. Cold \u2013 Die K\xE4lte ~ Die Erk\xE4ltung\n622. Closet \u2013 Der Schrank ~ Die Schr\xE4nke\n623. Dawn \u2013 Die Morgend\xE4mmerung ~ Im Morgengrauen\n624. Temple \u2013 Der Tempel ~ Die Tempel\n625. Joy \u2013 Der Spa\xDF ~ Die Freuden\n626. Duty \u2013 Die Pflicht ~ Die Aufgaben\n627. Practice \u2013 Die \xDCbung ~ Die Praktiken\n628. Heel \u2013 Die Ferse ~ Die Fersen\n629. Valley \u2013 Das Tal ~ Die T\xE4ler\n630. Fight \u2013 Der Kampf ~ Die K\xE4mpfe\n631. Wire \u2013 Das Kabel ~ Die Dr\xE4hte\n632. Jeans \u2013 Die Jeans ~ Die Jeanses\n633. Kiss \u2013 Der Kuss ~ Die K\xFCsse\n634. Jaw \u2013 Der Kiefer ~ Die Backen\n635. Run \u2013 Die Lauf ~ Die L\xE4ufe\n636. Hold \u2013 Der Halt ~ Die Lader\xE4ume\n637. Relationship \u2013 Das Verh\xE4ltnis ~ Die Beziehungen\n638. Object \u2013 Das Objekt ~ Die Objekte\n639. Attack \u2013 Der Angriff ~ Die Angriffe\n640. Dish \u2013 Das Gericht ~ Das Geschirr\n641. Highway \u2013 Die Autobahn ~ Die Autobahnen\n642. Shade \u2013 Die Schattierung ~ Die Schatten\n643. Crime \u2013 Das Verbrechen ~ Die Verbrechen\n644. White \u2013 Das Wei\xDF ~ Die Wei\xDFen\n645. Partner \u2013 Der Partner ~ Die Partner\n646. Priest \u2013 Der Priester ~ Die Priester\n647. Lawn \u2013 Der Rasen ~ Der Rasen\n648. Laugh \u2013 Das Lachen ~ Die Lachen\n649. Trunk \u2013 Der Kofferraum ~ Die St\xE4mme\n650. Cry \u2013 Das Weinen ~ Die Schreie\n651. Program \u2013 Das Programm ~ Die Programme\n652. Ride \u2013 Die Fahrt ~ Die Fahrten\n653. Shelf \u2013 Das Regal ~ Die Regale\n654. Gentleman \u2013 Der Gentleman ~ The Gentlemans\n655. Being \u2013 Das Sein ~ Die Wesen\n656. Steel \u2013 Der Stahl ~ Die St\xE4hle\n657. Sidewalk \u2013 Der B\xFCrgersteig ~ Die B\xFCrgersteige\n658. Uniform \u2013 Die Uniform ~ Die Uniformen\n659. Pattern \u2013 Das Muster ~ Die Muster\n660. Evidence \u2013 Der Beweis ~ Die Beweise\n661. Player \u2013 Der Spieler ~ Die Spieler\n662. Novel \u2013 Der Roman ~ Die Romane\n663. Pillow \u2013 Das Kissen ~ Die Kissen\n664. Lamp \u2013 Die Lampe ~ Die Lampen\n665. Drawer \u2013 Die Schublade ~ Die Schubladen\n666. Danger \u2013 Die Gefahr ~ Die Gefahren\n667. Detective \u2013 Der Detektiv ~ Die Detektive\n668. Instant \u2013 Die Instant ~ Die Zeitpunkte\n669. Thinking \u2013 Das Denken ~ Die Gedanken\n670. Crack \u2013 Der Riss ~ Die Risse\n671. Prayer \u2013 Das Gebet ~ Die Gebete\n672. Towel \u2013 Das Handtuch ~ Die Handt\xFCcher\n673. Glove \u2013 Der Handschuh ~ Die Handschuhe\n674. Bay \u2013 Die Bucht ~ Die Buchten\n675. Audience \u2013 Das Publikum ~ Das Publikum\n676. Can \u2013 Die Dose ~ Die Dosen\n677. Condition \u2013 Die Bedingung ~ Die Bedingungen\n678. Trail \u2013 Der Pfad ~ Die Wanderwege\n679. Waist \u2013 Die Taille ~ Die Taille\n680. Pressure \u2013 Der Druck ~ Die Dr\xFCcke\n681. Telephone \u2013 Das Telefon ~ Die Telefone\n682. Sink \u2013 Das Waschbecken ~ Die Waschbecken\n683. Return \u2013 Die R\xFCckkehr ~ Die Renditen\n684. Breeze \u2013 Die Brise ~ Die L\xFCfte\n685. Taste \u2013 Der Geschmack ~ Die Geschm\xE4cker\n686. Fault \u2013 Der Fehler ~ Die Fehler\n687. Stream \u2013 Der Strom ~ B\xE4che\n688. Result \u2013 Das Ergebnis ~ Die Ergebnisse\n689. Author \u2013 Der Autor ~ Die Autoren\n690. Tip \u2013 Das Trinkgeld ~ Die Spitzen\n691. Shower \u2013 Die Dusche ~ Die Duschen\n692. Toe \u2013 Die Zehe ~ Die Zehen\n693. Season \u2013 Die Jahreszeit ~ Die Jahreszeiten\n694. Half \u2013 Die H\xE4lfte ~ Die H\xE4lften\n695. Fool \u2013 Der Dummkopf ~ Die Narren\n696. Tunnel \u2013 Der Tunnel ~ Die Tunnel\n697. Client \u2013 Der Klient ~ Die Clients\n698. Garage \u2013 Die Garage ~ Die Garagen\n699. Mission \u2013 Die Mission ~ Die Missionen\n700. Chief \u2013 Der Chef ~ Die H\xE4uptlinge\n701. Bullet \u2013 Die Kugel ~ Die Kugeln\n702. Market \u2013 Der Markt ~ Die M\xE4rkte\n703. Loss \u2013 Der Verlust ~ Die Verluste\n704. Series \u2013 Die Reihe ~ Die Serieses\n705. Pen \u2013 Der Stift ~ Die Stifte\n706. Term \u2013 Der Begriff ~ Die Begriffe\n707. Poem \u2013 Das Gedicht ~ Die Gedichte\n708. Prince \u2013 Der Prinz ~ Die F\xFCrsten\n709. Clay \u2013 Der Ton ~ Die Tone\n710. Lock \u2013 Das Schloss ~ Die Schl\xF6sser\n711. Reality \u2013 Die Realit\xE4t ~ Die Wirklichkeiten\n712. Snake \u2013 Die Schlange ~ Die Schlangen\n713. Apple \u2013 Der Apfel ~ Die \xC4pfel\n714. Mask \u2013 Die Maske ~ Die Masken\n715. Customer \u2013 Dem Kunden ~ Die Kunden\n716. Birth \u2013 Die Geburt ~ Die Geburten\n717. Break \u2013 Die Pause ~ Die Pausen\n718. Wonder \u2013 Das Wunder ~ Wunder\n719. Sunlight \u2013 Das Sonnenlicht ~ Die Sunlights\n720. Tank \u2013 Der Panzer ~ Die Tanks\n721. Staff \u2013 Das Personal ~ Die Mitarbeiter\n722. Lie \u2013 Die L\xFCge ~ Die L\xFCgen\n723. Faith \u2013 Der Glaube ~ Die Glaubensrichtungen\n724. Honor \u2013 Die Ehre ~ Ehrungen\n725. Cream \u2013 Die Creme ~ Die Cremes\n726. Sake \u2013 Das Wohl ~ Die Willen\n727. Victim \u2013 Das Opfer ~ Die Opfer\n728. Possibility \u2013 Die M\xF6glichkeit ~ Die M\xF6glichkeiten\n729. Contact \u2013 Der Kontakt ~ Die Kontakte\n730. Mood \u2013 Die Stimmung ~ Die Stimmungen\n731. Thumb \u2013 Der Daumen ~ Die Daumen\n732. Reading \u2013 Das Lesen ~ Die Messwerte\n733. Fun \u2013 Der Spa\xDF ~ Die Funs\n734. Candle \u2013 Die Kerze ~ Die Kerzen\n735. Cave \u2013 Die H\xF6hle ~ Die H\xF6hlen\n736. Post \u2013 Die Post ~ Die Pfosten\n737. Prison \u2013 Das Gef\xE4ngnis ~ Die Gef\xE4ngnisse\n738. Emotion \u2013 Die Emotion ~ Die Emotionen\n739. Leader \u2013 Der F\xFChrer ~ Die F\xFChrer\n740. Degree \u2013 Der Grad ~ Grade\n741. Feature \u2013 Die Eigenschaft ~ Die Funktionen\n742. Ticket \u2013 Das Ticket ~ Die Tickets\n743. Alien \u2013 Das Alien ~ Die Aliens\n744. Lesson \u2013 Der Unterricht ~ Die Stunden\n745. Desert \u2013 Die W\xFCste ~ Die W\xFCsten\n746. Cut \u2013 Der Schnitt ~ Die Schnitte\n747. Mess \u2013 Die Unordnung ~ Die Kasinos\n748. Warning \u2013 Die Warnung ~ Die Warnungen\n749. Tale \u2013 Das M\xE4rchen ~ Die Geschichten\n750. Funeral \u2013 Das Begr\xE4bnis ~ Die Beerdigungen\n751. Cab \u2013 Das Taxi ~ Die Kabinen\n752. Reporter \u2013 Der Reporter ~ Die Reporter\n753. Present \u2013 Das Geschenk ~ Die Geschenke\n754. Theater \u2013 Das Theater ~ Die Theater\n755. Length \u2013 Die L\xE4nge ~ Die L\xE4ngen\n756. Mud \u2013 Der Schlamm ~ Die Schl\xE4mme\n757. Science \u2013 Die Wissenschaft ~ Die Wissenschaften\n758. Drop \u2013 Der Fall ~ Die Tropfen\n759. String \u2013 Die Schnur ~ Die Streicher\n760. Speech \u2013 Die Rede ~ Die Reden\n761. Copy \u2013 Die Kopie ~ Die Kopien\n762. Cow \u2013 Die Kuh ~ Die K\xFChe\n763. Worker \u2013 Der Arbeiter ~ Die Arbeiter\n764. Thigh \u2013 Der Oberschenkel ~ Die Thighes\n765. Lab \u2013 Das Labor ~ Die Labore\n766. Roll \u2013 Die Rolle ~ Die Walzen\n767. Fruit \u2013 Das Obst ~ Die Fr\xFCchte\n768. Patch \u2013 Der Patch ~ Die Patches\n769. Silk \u2013 Die Seide ~ Die Seide\n770. Buck \u2013 Der Buck ~ Die B\xF6cke\n771. Brick \u2013 Die Ziegel ~ Die Ziegel\n772. Rifle \u2013 Das Gewehr ~ Die Gewehre\n773. Career \u2013 Die Karriere ~ Die Karrieren\n774. Issue \u2013 Das Thema ~ Die Probleme\n775. Opportunity \u2013 Die Gelegenheit ~ Die Chancen\n776. Director \u2013 Der Direktor ~ Die Direktoren\n777. Monster \u2013 Das Monster ~ Die Monster\n778. Vehicle \u2013 Das Fahrzeug ~ Die Fahrzeuge\n779. Alley \u2013 Die Gasse ~ Die Gassen\n780. Sleeve \u2013 Die H\xFClse ~ Die \xC4rmel\n781. Grave \u2013 Das Grab ~ Die Gr\xE4ber\n782. Bush \u2013 Der Busch ~ Die B\xFCsche\n783. Dining \u2013 Der Speisesaal ~ Die Dinings\n784. Opening \u2013 Die Er\xF6ffnung ~ Die \xD6ffnungen\n785. Twin \u2013 Der Zwilling ~ Die Zwillinge\n786. Barn \u2013 Die Scheune ~ Die Scheunen\n787. Pound \u2013 Das Pfund ~ Die Pfunde\n788. Site \u2013 Der Standort ~ Die Websites\n789. Flash \u2013 Der Blitz ~ Die Blitze\n790. Judge \u2013 Der Richter ~ Die Richter\n791. Mass \u2013 Die Masse ~ Die Massen\n792. Process \u2013 Der Prozess ~ Die Prozesse\n793. Tie \u2013 Das Band ~ Die Bande\n794. Purse \u2013 Der Geldbeutel ~ Die Geldbeutel\n795. Pipe \u2013 Das Rohr ~ Die R\xF6hren\n796. Dragon \u2013 Der Drache ~ Die Drachen\n797. Horizon \u2013 Der Horizont ~ Die Horizonte\n798. Tray \u2013 Die Schale ~ Die Traies\n799. Envelope \u2013 Der Umschlag ~ Die Umschl\xE4ge\n800. Check \u2013 Die Pr\xFCfung ~ Die Kontrollen\n801. Adult \u2013 Die Erwachsene ~ Die Erwachsenen\n802. Emergency \u2013 Der Notfall ~ Die Emergencys\n803. Material \u2013 Das Material ~ Die Materialien\n804. Childhood \u2013 Die Kindheit ~ Die Kindheit\n805. Habit \u2013 Die Angewohnheit ~ Die Gewohnheiten\n806. Artist \u2013 Der K\xFCnstler ~ Die Artisten\n807. Address \u2013 Die Adresse ~ Die Adressen\n808. Scent \u2013 Der Duft ~ Die D\xFCfte\n809. Universe \u2013 Das Universum ~ Die Universen\n810. Nod \u2013 Das Kopfnicken ~ Die Nickt\n811. Shell \u2013 Die Muschel ~ Die Schalen\n812. Community \u2013 Die Gemeinde ~ Die Gemeinden\n813. Start \u2013 Der Anfang ~ Beginnt Der\n814. Wound \u2013 Die Wunde ~ Die Wunden\n815. Mouse \u2013 Die Maus ~ Die M\xE4use\n816. Pilot \u2013 Der Pilot ~ Die Piloten\n817. Grade \u2013 Die Klasse ~ Die Noten\n818. Video \u2013 Das Video ~ Die Videos\n819. Basket \u2013 Der Korb ~ Die K\xF6rbe\n820. Wagon \u2013 Der Wagen ~ Die Wagen\n821. Attempt \u2013 Der Versuch ~ Die Versuche\n822. Sofa \u2013 Das Sofa ~ Die Sofas\n823. Cake \u2013 Der Kuchen ~ Die Kuchen\n824. Fellow \u2013 Der Kerl ~ Die Kerle\n825. Affair \u2013 Die Aff\xE4re ~ Die Angelegenheiten\n826. Shore \u2013 Die K\xFCste ~ Die Ufer\n827. General \u2013 Die Allgemeine ~ Die Gener\xE4le\n828. Root \u2013 Der Ursprung ~ Die Wurzeln\n829. Robe \u2013 Die Robe ~ Die Gew\xE4nder\n830. Concern \u2013 Die Sorge ~ Die Bedenken\n831. Press \u2013 Die Presse ~ Die Pressen\n832. Rat \u2013 Die Ratte ~ Die Ratten\n833. Society \u2013 Die Gesellschaft ~ Die Gesellschaften\n834. Style \u2013 Der Stil ~ Die Stile\n835. County \u2013 Die Kreis ~ Die Landkreise\n836. Command \u2013 Der Befehl ~ Die Befehle\n837. Visitor \u2013 Der Besucher ~ Die Besucher\n838. Model \u2013 Das Model ~ Die Modelle\n839. Chamber \u2013 Die Kammer ~ Die Kammern\n840. Beast \u2013 Das Biest ~ Die Tiere\n841. Bunch \u2013 Das B\xFCndel ~ Die Trauben\n842. Background \u2013 Der Hintergrund ~ Die Hintergr\xFCnde\n843. Unit \u2013 Die Einheit ~ Die Einheiten\n844. Furniture \u2013 Die M\xF6bel ~ Die M\xF6bel\n845. Nail \u2013 Der Nagel ~ Die N\xE4gel\n846. Scream \u2013 Der Schrei ~ Die Schreie\n847. Property \u2013 Die Eigenschaft ~ Eigenschaften\n848. Equipment \u2013 Die Ausr\xFCstung ~ Die Ausr\xFCstungen\n849. Driveway \u2013 Die Auffahrt ~ Die Einfahrten\n850. Grip \u2013 Der Griff ~ Die Griffe\n851. Tube \u2013 Das Rohr ~ Die R\xF6hren\n852. Ash \u2013 Die Asche ~ Die Asche\n853. Fan \u2013 Der Fan ~ Die Fans\n854. Opinion \u2013 Die Meinung ~ Die Ansichten\n855. Data \u2013 Die Daten ~ Die Daten\n856. Connection \u2013 Die Verbindung ~ Die Verbindungen\n857. Trick \u2013 Der Trick ~ Die Tricks\n858. Mystery \u2013 Das Mysterium ~ Die Geheimnisse\n859. Period \u2013 Die Periode ~ Die Perioden\n860. Writing \u2013 Das Schreiben ~ Die Schriften\n861. Horror \u2013 Der Horror ~ Die Schrecken\n862. Candy \u2013 Die S\xFC\xDFigkeit ~ Die Bonbons\n863. Bitch \u2013 Die Bitch ~ Die H\xFCndinnen\n864. Health \u2013 Die Gesundheit ~ Die Healths\n865. Manager \u2013 Der Gesch\xE4ftsf\xFChrer ~ Die Manager\n866. Safety \u2013 Die Sicherheit ~ Die Sicherheiten\n867. Height \u2013 Die H\xF6he ~ Die H\xF6hen\n868. Appearance \u2013 Die Erscheinung ~ Die Erscheinungen\n869. Sigh \u2013 Der Seufzer ~ Die Sighes\n870. Mine \u2013 Die Mine ~ Die Bergwerke\n871. Cloth \u2013 Die Kleidung ~ Die T\xFCcher\n872. Reaction \u2013 Die Reaktion ~ Die Reaktionen\n873. Source \u2013 Die Quelle ~ Die Quellen\n874. Self \u2013 Das Ich ~ Die Selfs\n875. Pistol \u2013 Die Pistole ~ Die Pistolen\n876. Airport \u2013 Der Flughafen ~ Die Flugh\xE4fen\n877. Hero \u2013 Der Held ~ Die Helden\n878. Promise \u2013 Das Versprechen ~ Die Versprechen\n879. Bow \u2013 Der Bogen ~ Die B\xF6gen\n880. Tent \u2013 Das Zelt ~ Die Zelte\n881. Booth \u2013 Der Messestand ~ Die St\xE4nde\n882. Cash \u2013 Das Geld ~ Die Kassen\n883. Avenue \u2013 Die Stra\xDFe ~ Die Alleen\n884. TShirt \u2013 Das TShirt ~ Die TShirts\n885. Carpet \u2013 Der Teppich ~ Die Teppiche\n886. Basement \u2013 Der Keller ~ Die Keller\n887. Girlfriend \u2013 Die Freundin ~ Die Freundinnen\n888. Beard \u2013 Der Bart ~ Die B\xE4rte\n889. Brow \u2013 Die Stirn ~ Die Augenbrauen\n890. Display \u2013 Der Bildschirm ~ Die Anzeigen\n891. Signal \u2013 Das Signal ~ Die Signale\n892. Servant \u2013 Der Diener ~ Die Diener\n893. Whisper \u2013 Das Fl\xFCstern ~ Das Fl\xFCstern\n894. Doubt \u2013 Der Zweifel ~ Die Zweifel\n895. Account \u2013 Das Konto ~ Die Accounts\n896. Magic \u2013 Die Magie ~ Die Magie\n897. Hank \u2013 Die Hank ~ Die Str\xE4nge\n898. Limb \u2013 Das Glied ~ Die Schenkel\n899. Bastard \u2013 Der Bastard ~ Die Bastarde\n900. Skull \u2013 Der Sch\xE4del ~ Die Sch\xE4del\n901. Sentence \u2013 Der Satz ~ Die S\xE4tze\n902. Collar \u2013 Der Kragen ~ Die Kragen\n903. Horn \u2013 Das Horn ~ Die H\xF6rner\n904. Oak \u2013 Die Eiche ~ Die Eichen\n905. Ankle \u2013 Der Kn\xF6chel ~ Die Kn\xF6chel\n906. Doll \u2013 Die Puppe ~ Die Puppen\n907. Sandwich \u2013 Das Sandwich ~ Die Sandwiches\n908. Robin \u2013 Das Rotkehlchen ~ Die Rotkehlchen\n909. Justice \u2013 Die Justiz ~ Die Richter\n910. Pride \u2013 Der Stolz ~ Die Rudel\n911. Youth \u2013 Die Jugend ~ Die Jugendlichen\n912. Secretary \u2013 Der Sekret\xE4r ~ Die Sekret\xE4re\n913. Research \u2013 Die Forschung ~ Die Forschungen\n914. Sport \u2013 Der Sport ~ Die Sport\n915. Task \u2013 Die Aufgabe ~ Die Aufgaben\n916. Grant \u2013 Der Zuschuss ~ Die Zusch\xFCsse\n917. Sheriff \u2013 Der Sheriff ~ Die Sheriffs\n918. Midnight \u2013 Die Mitternachts ~ Die Mittern\xE4chte\n919. Chip \u2013 Der Chip ~ Die Chips\n920. Theory \u2013 Die Theorie ~ Theorien\n921. Alarm \u2013 Den Wecker ~ Die Alarme\n922. Collection \u2013 Die Sammlung ~ Die Sammlungen\n923. Cross \u2013 Das Kreuz ~ Die Kreuze\n924. Pine \u2013 Die Kiefer ~ Die Kiefern\n925. Generation \u2013 Die Generation ~ Die Generationen\n926. Authority \u2013 Die Autorit\xE4t ~ Die Beh\xF6rden\n927. Papa \u2013 Die Papa ~ Die Papas\n928. Journey \u2013 Die Reise ~ Die Reisen\n929. Pearl \u2013 Die Perle ~ Die Perlen\n930. Toilet \u2013 Die Toilette ~ Die Toiletten\n931. Killer \u2013 Der M\xF6rder ~ Die M\xF6rder\n932. Tool \u2013 Das Werkzeug ~ Die Werkzeuge\n933. Medicine \u2013 Die Medizin ~ Die Medikamente\n934. Sugar \u2013 Der Zucker ~ Die Zucker\n935. Princess \u2013 Die Prinzessin ~ Die Prinzessinnen\n936. Argument \u2013 Das Argument ~ Die Argumente\n937. Cliff \u2013 Die Klippe ~ Die Klippen\n938. Cart \u2013 Der Wagen ~ Die Wagen\n939. Crystal \u2013 Der Kristall ~ Die Kristalle\n940. Bean \u2013 Die Bohne ~ Die Bohnen\n941. Cage \u2013 Der K\xE4fig ~ Die K\xE4fige\n942. Chocolate \u2013 Die Schokolade ~ Die Pralinen\n943. Coast \u2013 Die K\xFCste ~ Die K\xFCsten\n944. Decade \u2013 Das Jahrzehnt ~ Die Jahrzehnte\n945. Meaning \u2013 Die Bedeutung ~ Die Bedeutungen\n946. Gear \u2013 Das Getriebe ~ Die Zahnr\xE4der\n947. Suitcase \u2013 Der Koffer ~ Die Koffer\n948. Operation \u2013 Die Operation ~ Die Operationen\n949. Breathing \u2013 Das Atem ~ Die Breathings\n950. Role \u2013 Die Rolle ~ Die Rollen\n951. Version \u2013 Die Version ~ Fassungen\n952. Prisoner \u2013 Der Gefangene ~ Die Gefangenen\n953. Match \u2013 Das Match ~ Die Spiele\n954. Beam \u2013 Der Strahl ~ Die Strahlen\n955. Castle \u2013 Die Burg ~ Die Schl\xF6sser\n956. Rush \u2013 Der Ansturm ~ Die Binsen\n957. Lane \u2013 Die Fahrspur ~ Die Bahnen\n958. Clothing \u2013 Die Bekleidung ~ Die Garnituren\n959. Pole \u2013 Der Pol ~ Die Pole\n960. Freedom \u2013 Die Freiheit ~ Die Freiheiten\n961. Skill \u2013 Das K\xF6nnen ~ Die F\xE4higkeiten\n962. Passion \u2013 Die Leidenschaft ~ Die Leidenschaften\n963. Activity \u2013 Die Aktivit\xE4t ~ Die Aktivit\xE4ten\n964. Fuck \u2013 Zum Teufel ~ Die Fickt\n965. Platform \u2013 Die Platform ~ Die Plattformen\n966. Salt \u2013 Das Salz ~ Die Salze\n967. Bike \u2013 Das Fahrrad ~ Die Fahrr\xE4der\n968. Stack \u2013 Der Stapel ~ Die Stapel\n969. Companion \u2013 Der Begleiter ~ Die Gef\xE4hrten\n970. Fate \u2013 Das Schicksal ~ Die Schicksale\n971. Rage \u2013 Die Wut ~ Die W\xFCtet\n972. Supply \u2013 Die Versorgung ~ Die Lieferungen\n973. Whale \u2013 Der Wal ~ Die Wale\n974. Pig \u2013 Das Schwein ~ Die Schweine\n975. Rabbit \u2013 Der Hase ~ Die Hasen\n976. Aisle \u2013 Der Gang ~ Die G\xE4nge\n977. Monitor \u2013 Der Bildschirm ~ Die Monitore\n978. Helmet \u2013 Der Helm ~ Die Helme\n979. Respect \u2013 Der Respekt ~ Die Beziehung\n980. Excitement \u2013 Die Aufregung ~ Die Aufregungen\n981. Lobby \u2013 Die Lobby ~ Die Lobbys\n982. Boyfriend \u2013 Der Freund ~ Die Freunde\n983. Fur \u2013 Das Fell ~ Die Felle\n984. Range \u2013 Der Bereich ~ Die Bereiche\n985. Dick \u2013 Die Dick ~ Die Schw\xE4nze\n986. Code \u2013 Der Code ~ Die Codes\n987. Chapter \u2013 Das Kapitel ~ Die Kapitel\n988. Reflection \u2013 Die Reflexion ~ Die Reflexionen\n989. Mail \u2013 Die Post ~ Die EMails\n990. Fly \u2013 Der Flug ~ Die Fliegen\n991. Cabinet \u2013 Das Kabinett ~ Die Schr\xE4nke\n992. Toy \u2013 Das Spielzeug ~ Die Spielzeuge\n993. Baseball \u2013 Die Baseball ~ The Baseballs\n994. Inside \u2013 Das Innere ~ Die Innenseiten\n995. Pace \u2013 Die Geschwindigkeit ~ Die Schritte\n996. Handle \u2013 Der Griff ~ Die Griffe\n997. Lead \u2013 Die F\xFChrung ~ Die Zuleitungen\n998. Amount \u2013 Die Summe ~ Die Betr\xE4ge\n999. Nerve \u2013 Der Nerv ~ Die Nerven\n1000. Terror \u2013 Der Schrecken ~ Die Schrecken\n1001. Sweater \u2013 Der Pullover ~ Die Pullover\n1002. Quality \u2013 Die Qualit\xE4t ~ Die Qualit\xE4ten\n1003. Hunter \u2013 Der J\xE4ger ~ Die J\xE4ger\n1004. Paint \u2013 Die Farbe ~ Die Anstriche\n1005. Buster \u2013 Die Buster ~ The Busters\n1006. Cotton \u2013 Die Baumwolle ~ Die Baumwollstoffe\n1007. Sergeant \u2013 Der Wachtmeister ~ Die Feldwebel\n1008. Credit \u2013 Der Kredit ~ Die Kredite\n1009. Blow \u2013 Der Schlag ~ Die Schl\xE4ge\n1010. Devil \u2013 Der Teufel ~ Die Teufel\n1011. Threat \u2013 Die Bedrohung ~ Die Drohungen\n1012. Success \u2013 Der Erfolg ~ Erfolge\n1013. Eve \u2013 Dem Vorabend ~ Die Eves\n1014. Cable \u2013 Das Kabel ~ Die Kabel\n1015. Pan \u2013 Die Pfanne ~ Die Pfannen\n1016. Clerk \u2013 Der Angestellte ~ Die Schreiber\n1017. Title \u2013 Den Titel ~ Die Titel\n1018. Meter \u2013 Das Messger\xE4t ~ Die Z\xE4hler\n1019. Shame \u2013 Die Schande ~ Die Schande\n1020. Needle \u2013 Die Nadel ~ Die Nadeln\n1021. Lung \u2013 Die Lunge ~ Die Lungen\n1022. Warrior \u2013 Der Krieger ~ Die Krieger\n1023. Circumstance \u2013 Der Umstand ~ Die Umst\xE4nde\n1024. Studio \u2013 Das Studio ~ Die Studios\n1025. Panic \u2013 Die Panik ~ Die Panik\n1026. Lack \u2013 Der Mangel ~ Das Fehlt\n1027. Farmer \u2013 Der Bauer ~ Die Bauern\n1028. Accent \u2013 Der Akzent ~ Die Akzente\n1029. Bomb \u2013 Die Bombe ~ Die Bomben\n1030. Panel \u2013 Die Platte ~ Die Paneele\n1031. Ability \u2013 Die F\xE4higkeit ~ Die Das K\xF6nnen\n1032. Fortune \u2013 Das Gl\xFCck ~ Die Geschicke\n1033. Victor \u2013 Der Sieger ~ Die Sieger\n1034. Feather \u2013 Die Feder ~ Die Federn\n1035. Grandma \u2013 Die Oma ~ Die Gro\xDFm\xFCtter\n1036. Glow \u2013 Das Gl\xFChen ~ Die Gl\xFCht\n1037. Behavior \u2013 Das Verhalten ~ Die Verhaltensweisen\n1038. Passage \u2013 Der Durchgang ~ Die Durchg\xE4nge\n1039. Slave \u2013 Die Slave ~ Die Sklaven\n1040. Lieutenant \u2013 Der Leutnant ~ Die Leutnants\n1041. Barrel \u2013 Der Lauf ~ Die F\xE4sser\n1042. Warmth \u2013 Die W\xE4rme ~ Die Warmths\n1043. Impression \u2013 Der Eindruck ~ Die Eindr\xFCcke\n1044. Mason \u2013 Der Maurer ~ Die Maurer\n1045. Bride \u2013 Die Braut ~ Die Br\xE4ute\n1046. Package \u2013 Das Paket ~ Die Pakete\n1047. Fog \u2013 Der Nebel ~ Die Nebel\n1048. Walking \u2013 Das Gehen ~ Die Wanderungen\n1049. Balance \u2013 Die Balance ~ Die Salden\n1050. Sock \u2013 Die Socke ~ Die Socken\n1051. Robot \u2013 Der Roboter ~ Die Roboter\n1052. Potato \u2013 Die Kartoffel ~ Die Kartoffeln\n1053. Item \u2013 Der Gegenstand ~ Die Gegenst\xE4nde\n1054. Bath \u2013 Das Bad ~ Die B\xE4der\n1055. Diamond \u2013 Der Diamant ~ Die Diamanten\n1056. Corpse \u2013 Die Leiche ~ Die Leichen\n1057. Explanation \u2013 Die Erkl\xE4rung ~ Die Erl\xE4uterungen\n1058. Structure \u2013 Die Struktur ~ Die Strukturen\n1059. Exit \u2013 Der Ausgang ~ Die Ausg\xE4nge\n1060. Pad \u2013 Das Pad ~ Die Pads\n1061. Stove \u2013 Der Herd ~ Die \xD6fen\n1062. Blue \u2013 Das Blaue ~ Der Blues\n1063. American \u2013 Die Amerikaner ~ Die Amerikaner\n1064. Ruby \u2013 Der Rubin ~ Die Rubinen\n1065. Lightning \u2013 Der Blitz ~ Blitze\n1066. Pit \u2013 Die Grube ~ Die Gruben\n1067. Colonel \u2013 Der Oberst ~ Die Obersten\n1068. Dock \u2013 Das Dock ~ Die Docks\n1069. Creek \u2013 Der Bach ~ Die B\xE4che\n1070. Advice \u2013 Der Ratschlag ~ Die Ratschl\xE4ge\n1071. Tourist \u2013 Der Tourist ~ Die Touristen\n1072. Grief \u2013 Die Trauer ~ Die Schmerzen\n1073. Defense \u2013 Die Verteidigung ~ Die Abwehrkr\xE4fte\n1074. Bite \u2013 Der Biss ~ Die Bisse\n1075. Museum \u2013 Das Museum ~ Die Museen\n1076. Favor \u2013 Die Gunst ~ Wohltaten\n1077. Supper \u2013 Das Abendessen ~ Die Abendessen\n1078. Comfort \u2013 Der Komfort ~ Komfort\n1079. Dean \u2013 Der Dekan ~ Die Dekane\n1080. Value \u2013 Der Wert ~ Die Werte\n1081. March \u2013 Der Marsch ~ Die M\xE4rsche\n1082. Estate \u2013 Das Anwesen ~ Die St\xE4nde\n1083. Poet \u2013 Der Poet ~ Die Dichter\n1084. Palace \u2013 Der Palast ~ Die Pal\xE4ste\n1085. Soup \u2013 Die Suppe ~ Die Suppen\n1086. Nation \u2013 Die Nation ~ Die Nationen\n1087. Jar \u2013 Das Gef\xE4ss ~ Die Gl\xE4ser\n1088. Standing \u2013 Der St\xE4ndige ~ Die Tabellenf\xFChrung\n1089. Sack \u2013 Der Sack ~ Die S\xE4cke\n1090. Demon \u2013 Der D\xE4mon ~ Die D\xE4monen\n1091. Conference \u2013 Die Konferenz ~ Die Konferenzen\n1092. Juice \u2013 Der Saft ~ Die S\xE4fte\n1093. Responsibility \u2013 Die Verantwortung ~ Die Zust\xE4ndigkeiten\n1094. Brush \u2013 Der Pinsel ~ Die B\xFCrsten\n1095. Route \u2013 Die Route ~ Die Strecken\n1096. Cheese \u2013 Der K\xE4se ~ Die K\xE4se\n1097. Hood \u2013 Die Haube ~ Die Hauben\n1098. Duck \u2013 Die Ente ~ Die Ente\n1099. Saint \u2013 Der Heilige ~ Die Heiligen\n1100. Pass \u2013 Der Pass ~ Die P\xE4sse\n1101. Target \u2013 Das Ziel ~ Die Ziele\n1102. Orange \u2013 Die Orange ~ Die Orangen\n1103. Culture \u2013 Die Kultur ~ Die Kulturen\n1104. Tour \u2013 Die Reise ~ Die Touren\n1105. Commander \u2013 Der Kommandant ~ Die Kommandeure\n1106. Hook \u2013 Der Haken ~ Die Haken\n1107. Mist \u2013 Der Nebel ~ Die Nebel\n1108. Training \u2013 Das Training ~ Die Trainings\n1109. Search \u2013 Die Suche ~ Die Suche\n1110. Coin \u2013 Die M\xFCnze ~ Die M\xFCnzen\n1111. Miracle \u2013 Das Wunder ~ Die Wunder\n1112. Advantage \u2013 Der Vorteil ~ Die Vorteile\n1113. Exchange \u2013 Der Austausch ~ Die B\xF6rsen\n1114. Fiction \u2013 Die Fiktion ~ Fiktionen\n1115. Pond \u2013 Der Teich ~ Die Teiche\n1116. Assistant \u2013 Der Assistent ~ Die Assistenten\n1117. Design \u2013 Das Design ~ Die Entw\xFCrfe\n1118. Fishing \u2013 Die Angel ~ Die Fishings\n1119. Slope \u2013 Die Piste ~ Die Pisten\n1120. Earl \u2013 Der Graf ~ Die Grafen\n1121. Comment \u2013 Kommentar ~ Kommentare\n1122. Waiter \u2013 Der Kellner ~ Die Kellner\n1123. Grocery \u2013 Von Lebensmittel ~ Die Lebensmittel\n1124. Ladder \u2013 Die Leiter ~ Die Leitern\n1125. Curve \u2013 Die Kurve ~ Die Kurven\n1126. Volume \u2013 Das Volumen ~ Die Volumina\n1127. Risk \u2013 Das Risiko ~ Die Risiken\n1128. Nightmare \u2013 Der Albtraum ~ Die Alptr\xE4ume\n1129. Existence \u2013 Die Existenz ~ Die Existenzen\n1130. Trace \u2013 Die Spur ~ Die Spuren\n1131. Disease \u2013 Die Krankheit ~ Die Krankheiten\n1132. Support \u2013 Die Unterst\xFCtzung ~ Die St\xFCtzen\n1133. Witness \u2013 Der Zeuge ~ Die Zeugen\n1134. Stock \u2013 Die Aktie ~ Die Best\xE4nde\n1135. Device \u2013 Das Ger\xE4t ~ Die Vorrichtungen\n1136. Landscape \u2013 Die Landschaft ~ Die Landschaften\n1137. Holiday \u2013 Der Urlaub ~ Die Feiertage\n1138. Ace \u2013 Das Ass ~ Die Asse\n1139. Piano \u2013 Das Klavier ~ Die Klaviere\n1140. Gut \u2013 Die Eingeweide ~ Die Eingeweide\n1141. Talent \u2013 Das Talent ~ Die Talente\n1142. Imagination \u2013 Die Phantasie ~ Die Vorstellungen\n1143. Black \u2013 Die Schwarze ~ Die Schwarzen\n1144. Reed \u2013 Der Reed ~ Das Schilf\n1145. Lid \u2013 Der Deckel ~ Die Deckel\n1146. Hint \u2013 Der Hinweis ~ Die Hinweise\n1147. Walker \u2013 Der Wanderer ~ Die Wanderer\n1148. Chill \u2013 Die K\xE4lte ~ Sch\xFCttelfrost\n1149. Trial \u2013 Die Studie ~ Die Pr\xFCfungen\n1150. Interview \u2013 Das Interview ~ Die Interviews\n1151. Approach \u2013 Der Ansatz ~ Die Ans\xE4tze\n1152. Scar \u2013 Die Narbe ~ Die Narben\n1153. Fashion \u2013 Die Mode ~ Die Mode\n1154. Channel \u2013 Der Kanal ~ Die Kan\xE4le\n1155. Footstep \u2013 Die Tritt ~ Die Schritte\n1156. Pickup \u2013 Der Aufnehmer ~ Die Pickups\n1157. Hawk \u2013 Der Habicht ~ Die Falken\n1158. Trailer \u2013 Der Anh\xE4nger ~ Die Anh\xE4nger\n1159. Statue \u2013 Die Statue ~ Die Statuen\n1160. Pill \u2013 Die Pille ~ Die Pillen\n1161. Bug \u2013 Der K\xE4fer ~ Die Bugs\n1162. Bucket \u2013 Der Eimer ~ Die Eimer\n1163. Vacation \u2013 Den Urlaub ~ Die Urlaub\n1164. Species \u2013 Die Arten ~ Die Specieses\n1165. Column \u2013 Die Kolumne ~ Die Spalten\n1166. Damage \u2013 Der Schaden ~ Die Sch\xE4den\n1167. Instrument \u2013 Das Instrument ~ Die Instrumente\n1168. Port \u2013 Der Hafen ~ Die Ports\n1169. Layer \u2013 Die Schicht ~ Die Schichten\n1170. Strip \u2013 Der Streifen ~ Die Streifen\n1171. Garbage \u2013 Der M\xFCll ~ Die Garbages\n1172. Rib \u2013 Die Rippe ~ Die Rippen\n1173. Notebook \u2013 Das Notebook ~ Die Notizb\xFCcher\n1174. Corn \u2013 Der Mais ~ Die H\xFChneraugen\n1175. Offer \u2013 Das Angebot ~ Die Angebote\n1176. Drawing \u2013 Die Zeichnung ~ Die Zeichnungen\n1177. Statement \u2013 Die Aussage ~ Die Aussagen\n1178. Intelligence \u2013 Die Intelligenz ~ Die Intelligenzen\n1179. Excuse \u2013 Die Entschuldigung ~ Die Ausreden\n1180. Landing \u2013 Die Landung ~ Die Landungen\n1181. Copyright \u2013 Der Urheberrechts ~ Die Urheberrechte\n1182. Rod \u2013 Die Stange ~ Die St\xE4be\n1183. Fantasy \u2013 Die Fantasie ~ Die Phantasien\n1184. Curiosity \u2013 Die Neugier ~ Die Kuriosit\xE4ten\n1185. Gown \u2013 Das Kleid ~ Die Kleider\n1186. Border \u2013 Die Grenze ~ Die Grenzen\n1187. Poetry \u2013 Die Poesie ~ Die Dichtungen\n1188. Firm \u2013 Die Firma ~ Die Firmen\n1189. Rise \u2013 Der Aufgang ~ Der Anstieg\n1190. Handful \u2013 Die Handvoll ~ Die H\xE4nde Voll\n1191. China \u2013 Die China ~ Die Chinas\n1192. French \u2013 Die Franzosen ~ Die Frenches\n1193. Mean \u2013 Die Durchschnitts ~ Die Mittel\n1194. Deer \u2013 Das Reh ~ Die Hirsche\n1195. Print \u2013 Die Druck ~ Die Drucke\n1196. Rail \u2013 Die Schiene ~ Die Schienen\n1197. Rate \u2013 Die Rate ~ Die Preise\n1198. Courage \u2013 Der Mut ~ Die Courages\n1199. Arrival \u2013 Die Ankunft ~ Die Ank\xFCnfte\n1200. Wish \u2013 Der Wunsch ~ W\xFCnsche\n1201. Ridge \u2013 Der Grat ~ Die Grate\n1202. Idiot \u2013 Der Idiot ~ Die Idioten\n1203. Bull \u2013 Der Bulle ~ Die Bullen\n1204. Seed \u2013 Die Saat ~ Die Samen\n1205. Progress \u2013 Der Fortschritt ~ Die Fortschritte\n1206. Feel \u2013 Das Gef\xFChl ~ Es F\xFChlt Sich An\n1207. Shorts \u2013 Die Shorts ~ Die Shortses\n1208. Citizen \u2013 Der B\xFCrger ~ Die B\xFCrger\n1209. Trash \u2013 Der M\xFCll ~ Die Trashes\n1210. Log \u2013 Das Protokoll ~ Die Protokolle\n1211. Patience \u2013 Die Geduld ~ Die Patiencen\n1212. Bat \u2013 Die Fledermaus ~ Die Flederm\xE4use\n1213. Football \u2013 Der Fu\xDFball ~ Die Fu\xDFb\xE4lle\n1214. Routine \u2013 Die Routine ~ Die Routinen\n1215. Explosion \u2013 Die Explosion ~ Die Explosionen\n1216. Content \u2013 Der Inhalt ~ Die Inhalte\n1217. Scientist \u2013 Der Wissenschaftler ~ Die Wissenschaftler\n1218. Failure \u2013 Das Versagen ~ Die Ausf\xE4lle\n1219. Sin \u2013 Die S\xFCnde ~ Die S\xFCnden\n1220. Butt \u2013 Der Hintern ~ Die F\xFC\xDFe\n1221. Confusion \u2013 Die Verwirrung ~ Die Verwirrungen\n1222. Understanding \u2013 Das Verst\xE4ndnis ~ Die Absprachen\n1223. Trade \u2013 Der Handel ~ Das Handwerk\n1224. Refrigerator \u2013 Der K\xFChlschrank ~ Die K\xFChlschr\xE4nke\n1225. Mister \u2013 Der Herr ~ Die Misters\n1226. Flashlight \u2013 Die Taschenlampe ~ Die Taschenlampen\n1227. Net \u2013 Das Internet ~ Die Netze\n1228. Sailor \u2013 Der Seemann ~ Die Matrosen\n1229. Attitude \u2013 Die Attit\xFCde ~ Die Haltungen\n1230. Guilt \u2013 Die Schuld ~ Die Schuldgef\xFChle\n1231. Crying \u2013 Das Weinen ~ Die Geschrei\n1232. Sip \u2013 Die Sip ~ Sips\n1233. Travel \u2013 Die Reise ~ Die Reisen\n1234. Cookie \u2013 Der Keks ~ Die Kekse\n1235. Escape \u2013 Die Flucht ~ Die Fluchten\n1236. Instruction \u2013 Die Anleitung ~ Die Anleitungen\n1237. Fabric \u2013 Das Gewebe ~ Die Stoffe\n1238. Marble \u2013 Der Marmor ~ Die Murmeln\n1239. Glimpse \u2013 Der Blick ~ Die Einblicke\n1240. Dusk \u2013 Die D\xE4mmerung ~ Die D\xE4mmerungen\n1241. Cottage \u2013 Die H\xFCtte ~ Die Ferienh\xE4user\n1242. Monkey \u2013 Der Affe ~ Die Affen\n1243. Makeup \u2013 Das Makeup ~ Die MakeUps\n1244. Doc \u2013 Die Doc ~ Die Docs\n1245. Blouse \u2013 Die Bluse ~ Die Blusen\n1246. Rhythm \u2013 Der Rhythmus ~ Die Rhythmen\n1247. Steam \u2013 Der Dampf ~ Die D\xE4mpfe\n1248. Phrase \u2013 Der Satz ~ Die Phrasen\n1249. Nut \u2013 Die Mutter ~ Die Muttern\n1250. Pencil \u2013 Der Bleistift ~ Die Stifte\n1251. Cook \u2013 Der Koch ~ Die K\xF6che\n1252. Flag \u2013 Die Flagge ~ Die Fahnen\n1253. Coach \u2013 Der Trainer ~ Die Trainer\n1254. Swing \u2013 Die Schaukel ~ Die Schaukeln\n1255. Speaker \u2013 Der Lautsprecher ~ Die Lautsprecher\n1256. Bolt \u2013 Der Bolzen ~ Die Bolzen\n1257. Fat \u2013 Das Fett ~ Die Fette\n1258. Rug \u2013 Der Teppich ~ Die Teppiche\n1259. Knock \u2013 Die Klopf ~ Die Schl\xE4ge\n1260. Spell \u2013 Der Zauber ~ Die Zauberspr\xFCche\n1261. Taxi \u2013 Das Taxi ~ Die Taxis\n1262. Round \u2013 Die Runde ~ Die Runden\n1263. Straw \u2013 Der Strohhalm ~ Die Halme\n1264. Hatch \u2013 Die Luke ~ Die Luken\n1265. Fork \u2013 Die Gabel ~ Die Gabeln\n1266. Evil \u2013 Das B\xF6se ~ Die \xDCbel\n1267. Maid \u2013 Das Dienstm\xE4dchen ~ Die Zimmerm\xE4dchen\n1268. Relative \u2013 Die Relative ~ Die Verwandten\n1269. Witch \u2013 Die Hexe ~ Die Hexen\n1270. Courtyard \u2013 Der Hof ~ Die H\xF6fe\n1271. Sensation \u2013 Die Sensation ~ Die Empfindungen\n1272. Bubble \u2013 Die Blase ~ Die Blasen\n1273. Reader \u2013 Der Leser ~ Die Leser\n1274. Curl \u2013 Die Locke ~ Die Locken\n1275. Pie \u2013 Der Kuchen ~ Die Torten\n1276. Jet \u2013 Der Strahl ~ Die Jets\n1277. Shift \u2013 Die Verschiebung ~ Die Verschiebungen\n1278. Union \u2013 Die Union ~ Die Gewerkschaften\n1279. Teenager \u2013 Der Teenager ~ Die Teenager\n1280. Plain \u2013 Die Ebene ~ Die Ebenen\n1281. Waitress \u2013 Die Kellnerin ~ Die Kellnerinnen\n1282. Reply \u2013 Die Antwort ~ Die Antworten\n1283. Rumor \u2013 Das Ger\xFCcht ~ Ger\xFCchte\n1284. Gravity \u2013 Die Schwerkraft ~ Die Gewichte\n1285. Shelter \u2013 Die Zuflucht ~ Die Unterst\xE4nde\n1286. Adventure \u2013 Das Abenteuer ~ Die Abenteuer\n1287. Lion \u2013 Der L\xF6we ~ Die L\xF6wen\n1288. Spine \u2013 Die Wirbels\xE4ule ~ Die Stacheln\n1289. Confidence \u2013 Das Vertrauen ~ Die Vertraulichkeiten\n1290. Depth \u2013 Die Tiefe ~ Die Tiefen\n1291. Reach \u2013 Die Reichweite ~ Die Reichweiten\n1292. Hammer \u2013 Der Hammer ~ Die H\xE4mmer\n1293. Bible \u2013 Die Bibel ~ Die Bibeln\n1294. Contract \u2013 Der Vertrag ~ Die Vertr\xE4ge\n1295. Wallet \u2013 Der Geldbeutel ~ Die Brieftaschen\n1296. Jungle \u2013 Der Dschungel ~ Die Dschungel\n1297. Factory \u2013 Die Fabrik ~ Die Fabriken\n1298. Indian \u2013 Die Indische ~ Die Indianer\n1299. Balcony \u2013 Der Balkon ~ Die Balkone\n1300. Rice \u2013 Der Reis ~ Die Reis\n1301. Knot \u2013 Der Knoten ~ Die Knoten\n1302. Cord \u2013 Die Schnur ~ Die Schn\xFCre\n1303. Colleague \u2013 Der Kollege ~ Die Kollegen\n1304. Intention \u2013 Die Absicht ~ Die Absichten\n1305. Stare \u2013 Die Stare ~ Die Blicke\n1306. Motel \u2013 Das Motel ~ Die Motels\n1307. Attorney \u2013 Der Anwalt ~ Die Anw\xE4lte\n1308. Darling \u2013 Der Liebling ~ Die Lieblinge\n1309. Discussion \u2013 Die Diskussion ~ Die Diskussionen\n1310. Atmosphere \u2013 Atmosph\xE4re ~ Die Atmosph\xE4ren\n1311. Performance \u2013 Die Leistung ~ Die Auff\xFChrungen\n1312. Tension \u2013 Die Spannung ~ Die Spannungen\n1313. Text \u2013 Der Text ~ Die Texte\n1314. Strand \u2013 Der Strang ~ Die Litzen\n1315. Noon \u2013 Die Mittags ~ Die Noons\n1316. Vein \u2013 Die Vene ~ Die Venen\n1317. Expert \u2013 Der Experte ~ Die Experten\n1318. Gang \u2013 Die Gruppe ~ Die Banden\n1319. Policeman \u2013 Der Polizist ~ Die Police\n1320. Cancer \u2013 Der Krebs ~ Die Krebs\n1321. Fox \u2013 Der Fuchs ~ Die Foxs\n1322. Divorce \u2013 Die Scheidung ~ Die Scheidungen\n1323. Pulse \u2013 Die Impuls ~ Die Pulse\n1324. Absence \u2013 Die Abwesenheit ~ Die Abwesenheiten\n1325. Violence \u2013 Die Gewalt ~ Die Gewalten\n1326. Humor \u2013 Der Humor ~ Die K\xF6rpers\xE4fte\n1327. Stool \u2013 Der Stuhl ~ Die St\xFChle\n1328. Gravel \u2013 Der Kies ~ Die Kiese\n1329. Treasure \u2013 Der Schatz ~ Sch\xE4tze\n1330. Butter \u2013 Die Butter ~ Die Butter\n1331. Switch \u2013 Der Schalter ~ Die Schalter\n1332. Cigar \u2013 Die Zigarre ~ Die Zigarren\n1333. Canvas \u2013 Die Leinwand ~ Die Leinw\xE4nde\n1334. Happiness \u2013 Die Fr\xF6hlichkeit ~ Die Seligkeiten\n1335. Guide \u2013 Der F\xFChrer ~ Die F\xFChrungen\n1336. Pin \u2013 Der Stift ~ Die Stifte\n1337. Actor \u2013 Der Schauspieler ~ Die Akteure\n1338. Whole \u2013 Das Ganze ~ Die L\xF6cher\n1339. Arrangement \u2013 Die Vereinbarung ~ Die Vereinbarungen\n1340. Brown \u2013 Die Braune ~ Die Braunt\xF6ne\n1341. Host \u2013 Der Gastgeber ~ Die Gastgeber\n1342. Ribbon \u2013 Das Farbband ~ Die B\xE4nder\n1343. Scarf \u2013 Der Schal ~ Die Schals\n1344. Scale \u2013 Die Skala ~ Die Waagen\n1345. Proof \u2013 Der Beweis ~ Die Beweise\n1346. Arrow \u2013 Der Pfeil ~ Die Pfeile\n1347. Temperature \u2013 Die Temperatur ~ Die Temperaturen\n1348. Technology \u2013 Die Technologie ~ Technologien\n1349. Permission \u2013 Die Erlaubnis ~ Die Berechtigungen\n1350. Location \u2013 Der Ort ~ Die Standorte\n1351. Claw \u2013 Die Klaue ~ Die Krallen\n1352. Cowboy \u2013 Der Cowboy ~ Die Cowboies\n1353. Agency \u2013 Die Agentur ~ Die Agenturen\n1354. Construction \u2013 Die Konstruktion ~ Die Konstruktionen\n1355. Hunting \u2013 Das Jagd ~ Die Jagden\n1356. Vegetable \u2013 Das Gem\xFCse ~ Das Gem\xFCse\n1357. Tin \u2013 Die Dose ~ Die Dosen\n1358. Helicopter \u2013 Der Hubschrauber ~ Die Hubschrauber\n1359. Trap \u2013 Die Falle ~ Die Fallen\n1360. Pat \u2013 Das Pat ~ Die Streicheleinheiten\n1361. Gap \u2013 Die L\xFCcke ~ Die L\xFCcken\n1362. Pet \u2013 Das Haustier ~ Die Haustiere\n1363. Education \u2013 Die Bildung ~ Die Ausbildungen\n1364. Shopping \u2013 Das Einkaufen ~ Die Eink\xE4ufe\n1365. Shed \u2013 Der Schuppen ~ Die Schuppen\n1366. Agreement \u2013 Die Vereinbarung ~ Vereinbarungen\n1367. Soil \u2013 Die Erde ~ Die B\xF6den\n1368. Duke \u2013 Der Herzog ~ Die Herz\xF6ge\n1369. Shotgun \u2013 Die Schrotflinte ~ Die Schrotflinten\n1370. Notion \u2013 Die Vorstellung ~ Die Begriffe\n1371. Rear \u2013 Es Gibt ~ Die Hintern\n1372. Ceremony \u2013 Die Zeremonie ~ Die Zeremonien\n1373. Spoon \u2013 Der L\xF6ffel ~ Die L\xF6ffel\n1374. Tub \u2013 Die Wanne ~ Die Wannen\n1375. Clue \u2013 Der Schl\xFCssel ~ Die Hinweise\n1376. Iris \u2013 Die Iris ~ Die Iris\n1377. Incident \u2013 Der Vorfall ~ Die Vorf\xE4lle\n1378. Crash \u2013 Der Absturz ~ Die Abst\xFCrze\n1379. Journal \u2013 Das Tagebuch ~ Die Zeitschriften\n1380. Access \u2013 Die Zugriffs ~ Die Zugriffe\n1381. Brass \u2013 Erz ~ Die Brasses\n1382. Mommy \u2013 Die Mama ~ Die Mamas\n1383. Sidebar \u2013 Die Seitenleiste ~ Die Seitenleisten\n1384. Sheep \u2013 Das Schaf ~ Die Schafe\n1385. Engineer \u2013 Der Ingenieur ~ Die Ingenieure\n1386. Hull \u2013 Der Rumpf ~ Die R\xFCmpfe\n1387. Odor \u2013 Der Geruch ~ Die Ger\xFCche\n1388. Appointment \u2013 Der Termin ~ Die Termine\n1389. Invitation \u2013 Die Einladung ~ Die Einladungen\n1390. Rag \u2013 Die Lappen ~ Die Lumpen\n1391. Good \u2013 Das Gute ~ Die G\xFCter\n1392. Dude \u2013 Der Kumpel ~ Die Dudes\n1393. Treatment \u2013 Die Behandlung ~ Behandlungen\n1394. Wisdom \u2013 Die Weisheit ~ Die Weisheiten\n1395. Prize \u2013 Der Preis ~ Die Preise\n1396. Element \u2013 Das Element ~ Die Elemente\n1397. Giant \u2013 Der Gigant ~ Die Riesen\n1398. Napkin \u2013 Die Serviette ~ Die Servietten\n1399. Laundry \u2013 Die W\xE4sche ~ Die W\xE4schereien\n1400. Option \u2013 Die Option ~ Die Optionen\n1401. Rack \u2013 Das Regal ~ Die Zahnstangen\n1402. Request \u2013 Die Anforderung ~ Die Anfragen\n1403. Jail \u2013 Das Gef\xE4ngnis ~ Die Gef\xE4ngnisse\n1404. Grandpa \u2013 Der Opa ~ Die Gro\xDFv\xE4ter\n1405. Ranch \u2013 Die Ranch ~ Die Ranches\n1406. Dot \u2013 Der Punkt ~ Die Punkte\n1407. Script \u2013 Das Skript ~ Die Skripte\n1408. Mall \u2013 Die Einkaufshalle ~ Die Einkaufszentren\n1409. Ford \u2013 Der Ford ~ Die Furten\n1410. Exercise \u2013 Die \xDCbung ~ Die \xDCbungen\n1411. Widow \u2013 Die Witwe ~ Die Witwen\n1412. Crow \u2013 Die Kr\xE4he ~ Die Kr\xE4hen\n1413. Thread \u2013 Der Faden ~ Die F\xE4den\n1414. Suicide \u2013 Die Selbstmord ~ Die Selbstmorde\n1415. Notice \u2013 Die Notiz ~ Die Bekanntmachungen\n1416. Sunset \u2013 Der Sonnenuntergang ~ Die Sonne Geht Unter\n1417. Gallery \u2013 Die Gallerie ~ Die Galerien\n1418. Vessel \u2013 Das Schiff ~ Die Gef\xE4\xDFe\n1419. Thunder \u2013 Der Donner ~ Der Donner\n1420. Soap \u2013 Die Seife ~ Seifen\n1421. Whiskey \u2013 Der Whisky ~ Die Whiskys\n1422. Female \u2013 Das Weibchen ~ Die Weibchen\n1423. Mayor \u2013 Der B\xFCrgermeister ~ Die B\xFCrgermeister\n1424. Stroke \u2013 Der Hub ~ Die Striche\n1425. Click \u2013 Der Klick ~ Die Klicks\n1426. Reputation \u2013 Der Ruf ~ Der Ruf\n1427. Miller \u2013 Der M\xFCller ~ Die M\xFCller\n1428. Council \u2013 Der Rat ~ Die R\xE4te\n1429. Schedule \u2013 Der Stundenplan ~ Der Spielplan\n1430. Cemetery \u2013 Der Friedhof ~ Die Friedh\xF6fe\n1431. Struggle \u2013 Der Kampf ~ Die K\xE4mpfe\n1432. Instinct \u2013 Der Instinkt ~ Die Instinkte\n1433. Calm \u2013 Die Ruhe ~ Die Beruhigt\n1434. Employee \u2013 Der Arbeitnehmer ~ Die Angestellten\n1435. Nest \u2013 Das Nest ~ Die Nester\n1436. Limit \u2013 Das Limit ~ Die Grenzwerte\n1437. German \u2013 Der Deutsche ~ Die Deutschen\n1438. Monk \u2013 Der M\xF6nch ~ Die M\xF6nche\n1439. Worm \u2013 Der Wurm ~ Die W\xFCrmer\n1440. Document \u2013 Das Dokument ~ Die Dokumente\n1441. Sadness \u2013 Die Traurigkeit ~ Die Traurigkeiten\n1442. Hut \u2013 Die H\xFCtte ~ Die H\xFCtten\n1443. Lifetime \u2013 Die Lebensdauer ~ Die Lebensdauern\n1444. Dancer \u2013 Die T\xE4nzerin ~ Die T\xE4nzer\n1445. Insurance \u2013 Die Versicherung ~ Die Versicherungen\n1446. Difficulty \u2013 Die Schwierigkeit ~ Die Schwierigkeiten\n1447. Mattress \u2013 Die Matratze ~ Die Matratzen\n1448. Male \u2013 Der Mann ~ Die M\xE4nnchen\n1449. Clinic \u2013 Die Klinik ~ Die Kliniken\n1450. Ad \u2013 Die Ad ~ Die Anzeigen\n1451. Mug \u2013 Der Becher ~ Die Becher\n1452. Kit \u2013 Das Kit ~ Die Kits\n1453. Communication \u2013 Die Kommunikation ~ Die Kommunikations\n1454. Disaster \u2013 Das Ungl\xFCck ~ Die Katastrophen\n1455. Tile \u2013 Die Fliese ~ Die Fliesen\n1456. Receiver \u2013 Der Empf\xE4nger ~ Die Empf\xE4nger\n1457. Roar \u2013 Das Gebr\xFCll ~ Die Br\xFCllt\n1458. Troop \u2013 Die Truppe ~ Die Truppen\n1459. Coffin \u2013 Der Sarg ~ Die S\xE4rge\n1460. Friendship \u2013 Die Freundschaft ~ Die Freundschaften\n1461. Investigation \u2013 Die Ermittlung ~ Die Untersuchungen\n1462. Sale \u2013 Der Verkauf ~ Die Verk\xE4ufe\n1463. Goal \u2013 Das Ziel ~ Die Ziele\n1464. Ambulance \u2013 Der Krankenwagen ~ Die Krankenwagen\n1465. Moonlight \u2013 Das Mondlicht ~ Die Mondlicht\n1466. Ward \u2013 The Ward ~ Die Schutzzauber\n1467. Trousers \u2013 Die Hosen ~ Die Trouserses\n1468. Wool \u2013 Die Wolle ~ Die Wolle\n1469. Mac \u2013 Die Mac ~ Die Macs\n1470. Minister \u2013 Der Minister ~ Die Minister\n1471. Entry \u2013 Der Eintritt ~ Die Eintr\xE4ge\n1472. Thief \u2013 Der Dieb ~ Die Diebe\n1473. Briefcase \u2013 Die Aktentasche ~ Die Aktentaschen\n1474. Pity \u2013 Das Mitleid ~ Die Bemitleidet\n1475. Fingertip \u2013 Die Finger ~ Die Fingerspitzen\n1476. Navy \u2013 Die Marine ~ Die Marinen\n1477. Insect \u2013 Das Insekt ~ Die Insekten\n1478. Velvet \u2013 The Velvet ~ Die Samt\n1479. Bee \u2013 Die Biene ~ Die Bienen\n1480. Cane \u2013 Der Stock ~ Die St\xF6cke\n1481. Gene \u2013 Das Gen ~ Die Gene\n1482. Salad \u2013 Der Salat ~ Die Salate\n1483. Windshield \u2013 Die Windschutzscheibe ~ Die Windschutzscheiben\n1484. Outfit \u2013 Das Outfit ~ Die Outfits\n1485. Shuttle \u2013 Der Shuttle ~ Die Shuttles\n1486. Shout \u2013 Der Schrei ~ Die Rufe\n1487. Fury \u2013 Die Wut ~ Die Furien\n1488. Challenge \u2013 Die Herausforderung ~ Die Herausforderungen\n1489. Satisfaction \u2013 Die Zufriedenheit ~ Die Zufriedenheiten\n1490. Motor \u2013 Der Motor ~ Die Motoren\n1491. Product \u2013 Das Produkt ~ Die Produkte\n1492. Weed \u2013 Das Unkraut ~ Das Unkraut\n1493. Stretch \u2013 Die Strecke ~ Die Strecken\n1494. Gym \u2013 Das Fitnesscenter ~ Die FitnessStudios\n1495. Capital \u2013 Das Kapital ~ Die Hauptst\xE4dte\n1496. Rim \u2013 Der Rand ~ Die Felgen\n1497. Paw \u2013 Die Pfote ~ Die Pfoten\n1498. Fort \u2013 Die Festung ~ Die Forts\n1499. Cost \u2013 Die Kosten ~ Die Kosten\n1500. Poster \u2013 Das Plakat ~ Die Poster\n1501. Vampire \u2013 Der Vampir ~ Die Vampire\n1502. Shaft \u2013 Die Welle ~ Die Wellen\n1503. Identity \u2013 Die Identit\xE4t ~ Die Identit\xE4ten\n1504. Pavement \u2013 Der B\xFCrgersteig ~ Die B\xFCrgersteige\n1505. Asshole \u2013 Das Arschloch ~ Die Arschl\xF6cher\n1506. Strap \u2013 Der Gurt ~ Die Gurte\n1507. Parlor \u2013 Das Wohnzimmer ~ Die Stuben\n1508. Harbor \u2013 Der Hafen ~ Die H\xE4fen\n1509. Example \u2013 Das Beispiel ~ Beispiele\n1510. Web \u2013 Das Netz ~ Die Stege\n1511. Golf \u2013 Der Golf ~ Die Golfpl\xE4tze\n1512. Crap \u2013 Den Mist ~ Schei\xDFt\n1513. Delight \u2013 Die Freude ~ Die Freuden\n1514. Quilt \u2013 Die Decke ~ Diese Decken\n1515. Tax \u2013 Die Steuer ~ Die Taxs\n1516. Fold \u2013 Die Falte ~ Die Falten\n1517. Portrait \u2013 Das Portr\xE4t ~ Die Portr\xE4ts\n1518. Tissue \u2013 Das Gewebe ~ Die Gewebe\n1519. Belief \u2013 Der Glaube ~ Die \xDCberzeugungen\n1520. Costume \u2013 Das Kost\xFCm ~ Die Kost\xFCme\n1521. Measure \u2013 Das Ma\xDF ~ Ma\xDFnahmen\n1522. Carriage \u2013 Der Wagen ~ Die Wagen\n1523. Guitar \u2013 Die Gitarre ~ Die Gitarren\n1524. Knight \u2013 Der Ritter ~ Die Ritter\n1525. Rank \u2013 Der Rang ~ Die Reihen\n1526. Major \u2013 Der B\xFCrgermeister ~ Die Majors\n1527. Fountain \u2013 Der Brunnen ~ Die Brunnen\n1528. Stall \u2013 Der Stall ~ Die St\xE4nde\n1529. Load \u2013 Die Ladung ~ Die Lasten\n1530. Spark \u2013 Der Funke ~ Die Funken\n1531. Waste \u2013 Der M\xFCll ~ Die Abf\xE4lle\n1532. Champagne \u2013 Der Champagner ~ Die Champagner\n1533. District \u2013 Das Viertel ~ Die Bezirke\n1534. Protection \u2013 Der Schutz ~ Die Schutz\n1535. Judgment \u2013 Das Urteil ~ Die Urteile\n1536. Sympathy \u2013 Die Sympathie ~ Die Sympathien\n1537. Violet \u2013 Das Violett ~ Die Veilchen\n1538. Impact \u2013 Der Aufprall ~ Die Auswirkungen\n1539. Disappointment \u2013 Die Entt\xE4uschung ~ Die Entt\xE4uschungen\n1540. Drinking \u2013 Das Trink ~ Die Drinkings\n1541. Consciousness \u2013 Das Bewusstsein ~ Die Bewussts\n1542. Handkerchief \u2013 Das Taschentuch ~ Die Taschent\xFCcher\n1543. Dancing \u2013 Das Tanzen ~ Die Dancings\n1544. Perfume \u2013 Das Parf\xFCm ~ Die D\xFCfte\n1545. Network \u2013 Das Netzwerk ~ Die Netzwerke\n1546. Claim \u2013 Der Anspruch ~ Die Anspr\xFCche\n1547. Nun \u2013 Die Nonne ~ Die Nonnen\n1548. Crown \u2013 Die Krone ~ Die Kronen\n1549. Railing \u2013 Das Gel\xE4nder ~ Die Gel\xE4nder\n1550. License \u2013 Die Lizenz ~ Die Lizenzen\n1551. Mercy \u2013 Die Barmherzigkeit ~ Die Barmherzigkeit\n1552. Balloon \u2013 Der Ballon ~ Die Ballons\n1553. Chaos \u2013 Das Chaos ~ Die Chaoses\n1554. Fever \u2013 Das Fieber ~ Die Fieber\n1555. Locker \u2013 Das Schlie\xDFfach ~ Die Schlie\xDFf\xE4cher\n1556. Session \u2013 Die Sitzung ~ Die Sitzungen\n1557. Burst \u2013 Die Burst ~ Die Bursts\n1558. Peak \u2013 Der Spitzer ~ Die Peaks\n1559. Drum \u2013 Die Trommel ~ Die Trommeln\n1560. Focus \u2013 Der Fokus ~ Die Schwerpunkte\n1561. Frog \u2013 Der Frosch ~ Die Fr\xF6sche\n1562. Benefit \u2013 Der Vorteil ~ Die Vorteile\n1563. Remark \u2013 Die Bemerkung ~ Die Bemerkungen\n1564. Tide \u2013 Die Gezeiten ~ Die Gezeiten\n1565. Suspicion \u2013 Der Verdacht ~ Der Verdacht\n1566. Jeep \u2013 Der Jeep ~ Die Jeeps\n1567. Worry \u2013 Die Sorge ~ Die Sorgen\n1568. Literature \u2013 Die Literatur ~ Die Literaturen\n1569. Archer \u2013 Der Bogensch\xFCtze ~ Die Bogensch\xFCtzen\n1570. Household \u2013 Der Haushalt ~ Die Haushalte\n1571. Powder \u2013 Das Pulver ~ Die Pulver\n1572. Shepherd \u2013 Der Hirte ~ Die Hirten\n1573. Lens \u2013 Die Linse ~ Die Linsen\n1574. Favorite \u2013 Der Favorit ~ Die Favoriten\n1575. Madame \u2013 Die Madame ~ Die Madames\n1576. Mansion \u2013 Die Villa ~ Die Herrenh\xE4user\n1577. Boom \u2013 Der Boom ~ Die Ausleger\n1578. Lace \u2013 Die Spitze ~ Die Schn\xFCrsenkel\n1579. Review \u2013 Die \xDCberpr\xFCfung ~ Die Bewertungen\n1580. Reception \u2013 Die Rezeption ~ Die Empf\xE4nge\n1581. Scrap \u2013 Der Schrott ~ Die Fetzen\n1582. Bead \u2013 Der Wulst ~ Die Perlen\n1583. Glare \u2013 Die Blendung ~ Die Blicke\n1584. Flow \u2013 Die Str\xF6mung ~ Die Str\xF6me\n1585. Cafe \u2013 Das Cafe ~ Die Caf\xE9s\n1586. Status \u2013 Der Status ~ Die Zust\xE4nde\n1587. Pounding \u2013 Das Pochen ~ Die Poundings\n1588. Rocket \u2013 Die Rakete ~ Die Raketen\n1589. Canyon \u2013 Die Schlucht ~ Die Schluchten\n1590. Sorrow \u2013 Die Trauer ~ Die Leiden\n1591. Spider \u2013 Die Spinne ~ Die Spinnen\n1592. Blast \u2013 Die Explosion ~ Die Blasten\n1593. Personality \u2013 Die Pers\xF6nlichkeit ~ Die Pers\xF6nlichkeiten\n1594. Campus \u2013 Der Campus ~ Die Campus\n1595. Curse \u2013 Der Fluch ~ Die Fl\xFCche\n1596. Staircase \u2013 Das Treppenhaus ~ Die Treppenh\xE4user\n1597. Urge \u2013 Der Drang ~ Die Triebe\n1598. Frustration \u2013 Die Frustration ~ Die Frustrationen\n1599. Pump \u2013 Die Pumpe ~ Die Pumpen\n1600. Ease \u2013 Die Leichtigkeit ~ Die Kungen\n1601. Count \u2013 Die Z\xE4hlung ~ Die Grafen\n1602. Solution \u2013 Die L\xF6sung ~ Die L\xF6sungen\n1603. Jewelry \u2013 Der Schmuck ~ Die Schmuck\n1604. Siren \u2013 Die Sirene ~ Die Sirenen\n1605. Hit \u2013 Der Schlag ~ Die Treffer\n1606. Tradition \u2013 Die Tradition ~ Die Traditionen\n1607. Curb \u2013 Das Leer ~ Die Bordsteine\n1608. Variety \u2013 Die Vielfalt ~ Die Sorten\n1609. Pirate \u2013 Der Pirat ~ Die Piraten\n1610. Description \u2013 Die Beschreibung ~ Beschreibungen\n1611. Dear \u2013 Der Liebe ~ Die Lieben\n1612. Anxiety \u2013 Die Angst ~ Die \xC4ngste\n1613. Pitch \u2013 Die Tonh\xF6he ~ Die Stellpl\xE4tze\n1614. Pizza \u2013 Die Pizza ~ Die Pizzas\n1615. Elephant \u2013 Der Elefant ~ Die Elefanten\n1616. Politics \u2013 Die Politik ~ Die Politicses\n1617. Tennis \u2013 Der Tennis ~ Die Tennises\n1618. Hunger \u2013 Der Hunger ~ Die Hungert\n1619. Genius \u2013 Das Genie ~ Die Genies\n1620. Goat \u2013 Die Ziege ~ Die Ziegen\n1621. Victory \u2013 Der Sieg ~ Die Siege\n1622. Combination \u2013 Die Kombination ~ Kombinationen\n1623. Affiliation \u2013 Die Zugeh\xF6rigkeit ~ Die Zugeh\xF6rigkeiten\n1624. Momma \u2013 Das Momma ~ Die Mommas\n1625. Cape \u2013 Der Umhang ~ Die Umh\xE4nge\n1626. Headlight \u2013 Der Scheinwerfer ~ Die Scheinwerfer\n1627. Governor \u2013 Der Gouverneur ~ Die Gouverneure\n1628. Oxygen \u2013 Die Sauerstoff ~ Sauerstoffe\n1629. Bishop \u2013 Der Bischof ~ Die Bisch\xF6fe\n1630. Bundle \u2013 Das B\xFCndel ~ Die B\xFCndel\n1631. Development \u2013 Die Entwicklung ~ Die Entwicklungen\n1632. Fingernail \u2013 Der Fingernagel ~ Die Fingern\xE4gel\n1633. Score \u2013 Die Punktzahl ~ Die Noten\n1634. Mate \u2013 Der Steuermann ~ Die Mates\n1635. Rider \u2013 Der Fahrer ~ Die Fahrer\n1636. Orbit \u2013 Die Umlaufbahn ~ Die Bahnen\n1637. Vine \u2013 Der Weinstock ~ Die Reben\n1638. Suite \u2013 Die Suite ~ Die Suiten\n1639. Bartender \u2013 Der Barkeeper ~ Die Barkeeper\n1640. Coke \u2013 Der Koks ~ Die Kokse\n1641. Tune \u2013 Die Melodie ~ Die Melodien\n1642. Glory \u2013 Die Herrlichkeit ~ Die Herrlichkeiten\n1643. Rabbi \u2013 Der Rabbi ~ Die Rabbiner\n1644. Surgery \u2013 Die Operation ~ Die Operationen\n1645. Cattle \u2013 Das Vieh ~ Die Rinder\n1646. Ritual \u2013 Das Ritual ~ Die Rituale\n1647. Greeting \u2013 Die Begr\xFC\xDFung ~ Die Gr\xFC\xDFe\n1648. Slice \u2013 Die Scheibe ~ Die Scheiben\n1649. Homer \u2013 Die Homer ~ Die Home Runs\n1650. Fireplace \u2013 Der Kamin ~ Die Kamine\n1651. Jersey \u2013 Das Trikot ~ Die Trikots\n1652. Media \u2013 Die Medien ~ Die Medien\n1653. Pop \u2013 Die Pop ~ The Pops\n1654. Cargo \u2013 Die Fracht ~ Die Ladungen\n1655. Inn \u2013 Das Gasthaus ~ Die Gasth\xF6fe\n1656. Deputy \u2013 Der Stellvertretende ~ Die Abgeordneten\n1657. Despair \u2013 Die Verzweiflung ~ Die Verzweiflungen\n1658. Territory \u2013 Das Territorium ~ Die Gebiete\n1659. Punch \u2013 Der Schlag ~ Die Stempel\n1660. Jazz \u2013 Die Jazz ~ Die Jazzs\n1661. Hug \u2013 Die Umarmung ~ Die Umarmungen\n1662. Whistle \u2013 Die Pfeife ~ Die Pfeifen\n1663. Humanity \u2013 Die Menschlichkeit ~ Geisteswissenschaften\n1664. Craft \u2013 Das Handwerk ~ Das Handwerk\n1665. Daylight \u2013 Das Tageslicht ~ Die Daylighies\n1666. Worth \u2013 Der Wert ~ Die Inneren Werte\n1667. Slip \u2013 Der Slip ~ Die Schieber\n1668. Armor \u2013 Die R\xFCstung ~ Die R\xFCstungen\n1669. Backpack \u2013 Der Rucksack ~ Die Rucks\xE4cke\n1670. Suggestion \u2013 Der Vorschlag ~ Die Vorschl\xE4ge\n1671. Den \u2013 Die H\xF6hle ~ Dens\n1672. Symbol \u2013 Das Symbol ~ Die Symbole\n1673. Colony \u2013 Die Kolonie ~ Die Kolonien\n1674. Conclusion \u2013 Das Fazit ~ Die Schlussfolgerungen\n1675. Nostril \u2013 Das Nasenloch ~ Die Nasenl\xF6cher\n1676. Spear \u2013 Der Speer ~ Die Speere\n1677. Impulse \u2013 Der Impuls ~ Die Impulse\n1678. Tomato \u2013 Die Tomate ~ Die Tomaten\n1679. Calf \u2013 Das Kalb ~ Die K\xE4lber\n1680. Autumn \u2013 Der Herbst ~ Die Herbste\n1681. Discovery \u2013 Der Fund ~ Die Entdeckungen\n1682. Classroom \u2013 Das Klassenzimmer ~ Die Klassenzimmer\n1683. Delivery \u2013 Die Lieferung ~ Die Einteilungen\n1684. Spray \u2013 Das Spray ~ Die Spraies\n1685. Liquid \u2013 Die Fl\xFCssigkeit ~ Die Fl\xFCssigkeiten\n1686. Fuel \u2013 Die Kraftstoff ~ Die Kraftstoffe\n1687. Underwear \u2013 Die Unterw\xE4sche ~ Die Unterw\xE4sche\n1688. Dome \u2013 Die Kuppel ~ Die Kuppeln\n1689. Population \u2013 Die Bev\xF6lkerung ~ Die Populationen\n1690. Affection \u2013 Die Neigung ~ Die Neigungen\n1691. Religion \u2013 Die Religion ~ Die Religionen\n1692. Singer \u2013 Der S\xE4nger ~ Die S\xE4nger\n1693. Attendant \u2013 Der Begleiter ~ Die Teilnehmer\n1694. Illusion \u2013 Die Illusion ~ Die Illusionen\n1695. Link \u2013 Der Link ~ Links\n1696. Lounge \u2013 Das Wohnzimmer ~ Die Lounges\n1697. Interior \u2013 Der Innenraum ~ Die Innenr\xE4ume\n1698. Shrug \u2013 Die Achselzucken ~ Die Zuckt Mit Den Schultern\n1699. Zone \u2013 Die Zone ~ Die Zonen\n1700. Standard \u2013 Der Standard ~ Die Standards\n1701. Coal \u2013 Die Kohlen ~ Die Kohlen\n1702. Chase \u2013 Die Jagd ~ Die Verfolgungsjagden\n1703. Lump \u2013 Der Klumpen ~ Die Klumpen\n1704. Charm \u2013 Der Charm ~ Der Charme\n1705. Legend \u2013 Die Legende ~ Die Legenden\n1706. Consequence \u2013 Die Konsequenz ~ Die Konsequenzen\n1707. Observation \u2013 Die Beobachtung ~ Die Beobachtungen\n1708. Bicycle \u2013 Das Fahrrad ~ Die Fahrr\xE4der\n1709. Harm \u2013 Der Schaden ~ Die Sch\xE4den\n1710. Pay \u2013 Die Zahlung ~ Das Zahlt\n1711. Prospect \u2013 Das Prospekt ~ Die Aussichten\n1712. Subway \u2013 Die UBahn ~ Die UBahnen\n1713. Sample \u2013 Das Muster ~ Die Beispiele\n1714. Cherry \u2013 Die Kirsche ~ Die Kirschen\n1715. Dealer \u2013 Der H\xE4ndler ~ Die H\xE4ndler\n1716. Assignment \u2013 Die Zuordnung ~ Die Zuordnungen\n1717. Hurry \u2013 Die Eile ~ Die Eilt\n1718. Mistress \u2013 Die Geliebte ~ Die M\xE4tressen\n1719. Mound \u2013 Der H\xFCgel ~ Die H\xFCgel\n1720. Nonsense \u2013 Der Unsinn ~ Die Unsinn\n1721. Committee \u2013 Das Komitee ~ Die Aussch\xFCsse\n1722. Echo \u2013 Das Echo ~ Die Echos\n1723. Slack \u2013 Der Durchhang ~ Die Hose\n1724. Decker \u2013 Die Decker ~ Die Decker\n1725. Warehouse \u2013 Das Warenhaus ~ Die Lagerh\xE4user\n1726. Bout \u2013 Der Kampf ~ Die K\xE4mpfe\n1727. Toast \u2013 Der Toast ~ Die Toasts\n1728. Facility \u2013 Die Einrichtung ~ Die Einrichtungen\n1729. Basketball \u2013 Der Basketball ~ Die Basketb\xE4lle\n1730. Mustache \u2013 Der Schnurrbart ~ Die Schnurrb\xE4rte\n1731. Senator \u2013 Der Senator ~ Die Senatoren\n1732. Share \u2013 Das Teilen ~ Die Aktien\n1733. Eyelid \u2013 Das Augenlid ~ Die Augenlider\n1734. Enthusiasm \u2013 Die Begeisterung ~ Die Begeisterung\n1735. Chunk \u2013 Die Chunk ~ Die Brocken\n1736. Turtle \u2013 Die Schildkr\xF6te ~ Die Schildkr\xF6ten\n1737. Alcohol \u2013 Der Alkohol ~ Die Alkohole\n1738. Gum \u2013 Die Gummi ~ Die Gummis\n1739. Turkey \u2013 Der Truthahn ~ Die Truth\xE4hne\n1740. Preacher \u2013 Der Prediger ~ Die Prediger\n1741. Possession \u2013 Der Besitz ~ Die Besitzungen\n1742. Dolly \u2013 Der Dolly ~ Die Dollies\n1743. Linen \u2013 Das Leinen ~ Die Bettw\xE4sche\n1744. Apology \u2013 Die Entschuldigung ~ Die Entschuldigung\n1745. Lecture \u2013 Der Vortrag ~ Die Vortr\xE4ge\n1746. Boulder \u2013 Der Stein ~ Die Felsbrocken\n1747. Heap \u2013 Der Heap ~ Die Haufen\n1748. Photographer \u2013 Der Fotograf ~ Die Fotografen\n1749. Brake \u2013 Die Bremse ~ Die Bremsen\n1750. Demand \u2013 Die Nachfrage ~ Die Forderungen\n1751. Apron \u2013 Die Sch\xFCrze ~ Die Sch\xFCrzen\n1752. Cloak \u2013 Der Mantel ~ Die Umh\xE4nge\n1753. Jury \u2013 Die Jury ~ Jurys\n1754. Hearing \u2013 Die Anh\xF6rung ~ Die Anh\xF6rungen\n1755. Gray \u2013 Das Graue ~ Die Graut\xF6ne\n1756. Crate \u2013 Die Kiste ~ Die Kisten\n1757. Method \u2013 Die Methode ~ Methoden\n1758. Reference \u2013 Die Referenz ~ Die Verweise\n1759. Disgust \u2013 Der Ekel ~ Die Ekelt\n1760. Liquor \u2013 Die Flotte ~ Die Flotten\n1761. Lipstick \u2013 Der Lippenstift ~ Lippenstifte\n1762. Core \u2013 Der Kern ~ Die Kerne\n1763. Individual \u2013 Der Einzelne ~ Die Personen\n1764. Container \u2013 Der Container ~ Die Beh\xE4lter\n1765. Whore \u2013 Die Hure ~ Die Huren\n1766. Infant \u2013 Das Kleinkind ~ Die S\xE4uglinge\n1767. Sunglasses \u2013 Die Sonnenbrille ~ Die Sunglasseses\n1768. Hose \u2013 Der Schlauch ~ Die Schl\xE4uche\n1769. Concert \u2013 Das Konzert ~ Konzerte\n1770. Bullshit \u2013 Das Bullshit ~ Die Bullshits\n1771. Railroad \u2013 Die Eisenbahn ~ Die Eisenbahnen\n1772. Parade \u2013 Die Parade ~ Die Paraden\n1773. Compartment \u2013 Das Fach ~ Die Abteile\n1774. Resident \u2013 Der Bewohner ~ Die Bewohner\n1775. Oven \u2013 Der Backofen ~ Die \xD6fen\n1776. Technician \u2013 Der Techniker ~ Die Techniker\n1777. Procedure \u2013 Das Verfahren ~ Die Verfahren\n1778. Fighter \u2013 Der K\xE4mpfer ~ Die K\xE4mpfer\n1779. Grain \u2013 Das Korn ~ Die K\xF6rner\n1780. Picnic \u2013 Das Picknick ~ Die Picknicks\n1781. Tribe \u2013 Der Stamm ~ Die St\xE4mme\n1782. Bud \u2013 Die Knospe ~ Die Knospen\n1783. Meadow \u2013 Die Wiese ~ Die Wiesen\n1784. Public \u2013 Die \xD6ffentlichkeit ~ Die \xD6ffentlichkeit\n1785. Poison \u2013 Das Gift ~ Die Gifte\n1786. Buffalo \u2013 Der B\xFCffel ~ Die B\xFCffel\n1787. Region \u2013 Die Region ~ Die Regionen\n1788. Production \u2013 Die Produktion ~ Die Produktionen\n1789. Running \u2013 Das Rennen ~ Die Vorlauf\n1790. Loop \u2013 Die Schleife ~ Die Schlaufen\n1791. Sleeping \u2013 Der Schlaf ~ Die \xDCbernachtungspl\xE4tzen\n1792. Soda \u2013 Die Soda ~ Die Limonaden\n1793. Owl \u2013 Die Eule ~ Die Eulen\n1794. Menu \u2013 Das Men\xFC ~ Die Men\xFCs\n1795. Kick \u2013 Der Kick ~ Die Tritte\n1796. Ruin \u2013 Die Ruine ~ Die Ruinen\n1797. Ramp \u2013 Die Rampe ~ Die Rampen\n1798. Streak \u2013 Der Streifen ~ Die Streifen\n1799. Forearm \u2013 Unterarm ~ Die Unterarme\n1800. Bureau \u2013 Das B\xFCro ~ Die B\xFCros\n1801. Knuckle \u2013 Der Achsschenkel ~ Die Kn\xF6chel\n1802. Goose \u2013 Die Gans ~ Die G\xE4nse\n1803. Advance \u2013 Der Vormarsch ~ Die Fortschritte\n1804. Fairy \u2013 Die Fee ~ Die Feen\n1805. Illness \u2013 Die Krankheit ~ Die Krankheiten\n1806. Squad \u2013 Die Mannschaft ~ Die Kader\n1807. Official \u2013 Das Offizielle ~ Die Beamten\n1808. Brand \u2013 Die Marke ~ Die Marken\n1809. Organ \u2013 Die Orgel ~ Die Organe\n1810. Butterfly \u2013 Der Schmetterling ~ Die Schmetterlinge\n1811. Empire \u2013 Das Reich ~ Die Reiche\n1812. Profile \u2013 Das Profil ~ Die Profile\n1813. Liberty \u2013 Die Freiheit ~ Freiheiten\n1814. Disbelief \u2013 Der Unglaube ~ Die Unglauben\n1815. Grove \u2013 Der Hain ~ Die Haine\n1816. Shield \u2013 Das Schild ~ Die Abschirmungen\n1817. Saddle \u2013 Der Sattel ~ Die S\xE4ttel\n1818. Odds \u2013 Die Chancen ~ Die Oddses\n1819. Cluster \u2013 Die Cluster ~ Die Cluster\n1820. Satellite \u2013 Der Satellit ~ Die Satelliten\n1821. Trigger \u2013 Der Abzug ~ Die Ausl\xF6ser\n1822. Puppy \u2013 Der Welpe ~ Die Welpen\n1823. Waiting \u2013 Die Warte ~ Die Erwartungen\n1824. Bulb \u2013 Die Gl\xFChbirne ~ Die Zwiebeln\n1825. Dresser \u2013 Die Kommode ~ Die Kommoden\n1826. Patrol \u2013 Die Patrouille ~ Die Patrouillen\n1827. Eagle \u2013 Der Adler ~ Die Adler\n1828. Privacy \u2013 Der Privatsph\xE4re ~ Die Privatsph\xE4ren\n1829. Fluid \u2013 Das Fluid ~ Fluide\n1830. Herd \u2013 Die Herde ~ Die Herden\n1831. Headache \u2013 Der Kopfschmerz ~ Die Kopfschmerzen\n1832. Amusement \u2013 Der Vergn\xFCgungspark ~ Vergn\xFCgungen\n1833. Wheelchair \u2013 Der Rollstuhl ~ Die Rollst\xFChle\n1834. Policy \u2013 Die Richtlinie ~ Die Politik\n1835. Belle \u2013 Das Belle ~ Die Belles\n1836. Tobacco \u2013 Die Tabak ~ Die Tabake\n1837. Setting \u2013 Die Einstellung ~ Einstellungen\n1838. Tattoo \u2013 Die T\xE4towierung ~ Die Tattoos\n1839. Burden \u2013 Die Last ~ Die Lasten\n1840. Merchant \u2013 Der H\xE4ndler ~ Die Kaufleute\n1841. Slide \u2013 Die Rutsche ~ Die Schieber\n1842. Stain \u2013 Der Fleck ~ Die Flecken\n1843. Eating \u2013 Das Essen ~ Die Eatings\n1844. Bond \u2013 Die Bindung ~ Die Anleihen\n1845. Swimming \u2013 Das Schwimmen ~ Die Swimming\n1846. Foundation \u2013 Die Grundlage ~ Die Grundlagen\n1847. Injury \u2013 Die Verletzung ~ Die Verletzungen Haben\n1848. League \u2013 Die Liga ~ Die Ligen\n1849. Battery \u2013 Die Batterie ~ Die Batterien\n1850. Umbrella \u2013 Der Regenschirm ~ Die Sonnenschirme\n1851. Emperor \u2013 Der Kaiser ~ Die Kaiser\n1852. Pier \u2013 Der Pier ~ Die Pfeiler\n1853. Tap \u2013 Der Wasserhahn ~ Die Wasserh\xE4hne\n1854. Wit \u2013 Der Witz ~ Die Verstand\n1855. Cutter \u2013 Der Cutter ~ Die Schneidwerkzeuge\n1856. Attic \u2013 Der Dachboden ~ Die Dachb\xF6den\n1857. Tiger \u2013 Der Tiger ~ Die Tiger\n1858. Pal \u2013 Die Pal ~ Die Kumpels\n1859. Ancestor \u2013 Der Vorfahr ~ Die Vorfahren\n1860. Concentration \u2013 Die Konzentration ~ Die Konzentrationen\n1861. Mount \u2013 Der Berg ~ Die Halterungen\n1862. Expense \u2013 Der Aufwand ~ Die Kosten\n1863. Blessing \u2013 Der Segen ~ Die Segnungen\n1864. Leave \u2013 Der Urlaub ~ Das Laub\n1865. Ledge \u2013 Die Leiste ~ Die Leisten\n1866. Torch \u2013 Die Fackel ~ Die Fackeln\n1867. Ink \u2013 Die Tinten ~ Die Tinten\n1868. Plot \u2013 Die Handlung ~ Die Grundst\xFCcke\n1869. Rent \u2013 Die Miete ~ Die Mieten\n1870. Mule \u2013 Das Maultier ~ Die Maultiere\n1871. Arch \u2013 Der Bogen ~ Die B\xF6gen\n1872. Environment \u2013 Die Umgebung ~ Die Umgebungen\n1873. Frown \u2013 Das Stirnrunzeln ~ Die Stirn Runzelt\n1874. Inspector \u2013 Der Inspektor ~ Die Inspektoren\n1875. Midst \u2013 Die Mitten ~ Die Midsts\n1876. Embarrassment \u2013 Die Verlegenheit ~ Die Peinlichkeiten\n1877. Complaint \u2013 Die Beschwerde ~ Die Beschwerden\n1878. Portion \u2013 Die Portion ~ Die Portionen\n1879. Chuck \u2013 Das Spannfutter ~ Die Spann\n1880. Clearing \u2013 Die Clearing ~ Die Lichtungen\n1881. Crisis \u2013 Die Krise ~ Die Krisen\n1882. Necklace \u2013 Die Halskette ~ Die Halsketten\n1883. Lantern \u2013 Die Laterne ~ Die Laternen\n1884. Wealth \u2013 Der Reichtum ~ Die Reicht\xFCmer\n1885. Murderer \u2013 Der M\xF6rder ~ Die M\xF6rder\n1886. Civilization \u2013 Die Zivilisation ~ Die Zivilisationen\n1887. Concept \u2013 Das Konzept ~ Die Konzepte\n1888. Lamb \u2013 Das Lamm ~ Die L\xE4mmer\n1889. Stride \u2013 Die Schritt ~ Die Fortschritte\n1890. Cuff \u2013 Die Manschette ~ Die Manschetten\n1891. Virgin \u2013 Die Jungfrau ~ Die Jungfrauen\n1892. Squirrel \u2013 Das Eichh\xF6rnchen ~ Die Eichh\xF6rnchen\n1893. Babe \u2013 Das Kind ~ Die Babes\n1894. Starling \u2013 Der Star ~ Die Stare\n1895. Depression \u2013 Die Depression ~ Die Vertiefungen\n1896. Storage \u2013 Das Speicher ~ Die Speicher\n1897. Altar \u2013 Der Altar ~ Die Alt\xE4re\n1898. Tragedy \u2013 Die Trag\xF6die ~ Die Trag\xF6dien\n1899. Resource \u2013 Die Ressource ~ Die Mittel\n1900. Traveler \u2013 Der Reisende ~ Die Reisenden\n1901. Trust \u2013 Das Vertrauen ~ Die Trusts\n1902. Arc \u2013 Die Bogen ~ Die B\xF6gen\n1903. Kingdom \u2013 Das K\xF6nigreich ~ Die K\xF6nigreiche\n1904. Jewel \u2013 Das Juwel ~ Die Juwelen\n1905. Musician \u2013 Der Musiker ~ Die Musiker\n1906. Airplane \u2013 Das Flugzeug ~ Die Flugzeuge\n1907. Junk \u2013 Die Junk ~ Die Dschunken\n1908. Sunshine \u2013 Der Sonnenschein ~ Die Sonne Scheint\n1909. Lad \u2013 Der Knabe ~ Die Jungs\n1910. Elf \u2013 Der Elf ~ Die Elfen\n1911. Protest \u2013 Der Protest ~ Die Proteste\n1912. Hunt \u2013 Die Jagd ~ Die Jagden\n1913. Executive \u2013 Die Exekutive ~ Die F\xFChrungskr\xE4fte\n1914. Diary \u2013 Das Tagebuch ~ Die Tageb\xFCcher\n1915. Aspect \u2013 Das Aspekt ~ Die Aspekte\n1916. Dial \u2013 Das Zifferblatt ~ Die Zifferbl\xE4tter\n1917. Slipper \u2013 Der Hausschuh ~ Die Pantoffeln\n1918. Actress \u2013 Die Schauspielerin ~ Die Schauspielerinnen\n1919. Shooting \u2013 Das Shooting ~ Die Dreharbeiten\n1920. Earring \u2013 Der Ohrring ~ Die Ohrringe\n1921. Ant \u2013 Die Ameise ~ Die Ameisen\n1922. Patty \u2013 Die Patty ~ Die Bratlinge\n1923. Sauce \u2013 Die Sauce ~ Die So\xDFen\n1924. Missile \u2013 Die Rakete ~ Die Raketen\n1925. Intensity \u2013 Die Intensit\xE4t ~ Die Intensit\xE4ten\n1926. Ditch \u2013 Der Graben ~ Die Gr\xE4ben\n1927. Daisy \u2013 Das G\xE4nsebl\xFCmchen ~ Das G\xE4nsebl\xFCmchen\n1928. Chapel \u2013 Die Kapelle ~ Die Kapellen\n1929. Swamp \u2013 Der Sumpf ~ Die S\xFCmpfe\n1930. Relation \u2013 Die Beziehung ~ Die Beziehungen\n1931. Guess \u2013 Die Vermutung ~ Die Vermutungen\n1932. Crane \u2013 Der Kran ~ Die Kr\xE4ne\n1933. Encounter \u2013 Die Begegnung ~ Die Begegnungen\n1934. Sequence \u2013 Die Sequenz ~ Die Sequenzen\n1935. Fragment \u2013 Das Fragment ~ Die Fragmente\n1936. Draft \u2013 Der Entwurf ~ Die Entw\xFCrfe\n1937. Diner \u2013 Das Diner ~ Diners\n1938. Function \u2013 Die Funktion ~ Die Funktionen\n1939. Organization \u2013 Die Organisation ~ Die Organisationen\n1940. Skeleton \u2013 Das Skelett ~ Die Skelette\n1941. Misery \u2013 Das Elend ~ Das Elend\n1942. Herb \u2013 Das Kraut ~ Die Kr\xE4uter\n1943. Stump \u2013 Der Stumpf ~ Die St\xFCmpfe\n1944. Stake \u2013 Der Einsatz ~ Die Eins\xE4tze\n1945. Puff \u2013 Die Puff ~ Die Windbeutel\n1946. Creation \u2013 Die Kreation ~ Die Kreationen\n1947. Wake \u2013 Das Gefolge ~ Die Totenwache\n1948. Wizard \u2013 Der Zauberer ~ Die Zauberer\n1949. Mat \u2013 Die Matte ~ Die Matten\n1950. Seal \u2013 Die Dichtung ~ Die Dichtungen\n1951. Twilight \u2013 Das Zwielicht ~ Die D\xE4mmerungen\n1952. Grunt \u2013 Das Grunzen ~ Das Grunzen\n1953. Punishment \u2013 Die Strafe ~ Die Strafen\n1954. Clan \u2013 Der Clan ~ Die Clans\n1955. Copper \u2013 Das Kupfer ~ Die Kupfer\n1956. Debris \u2013 Die Tr\xFCmmer ~ Die Debrises\n1957. Painter \u2013 Der Maler ~ Die Maler\n1958. Steering \u2013 Das Steuer ~ Die Lenkungen\n1959. Math \u2013 Die Mathematik ~ Die Mathematik\n1960. Recognition \u2013 Die Erkennung ~ Die Anerkennungen\n1961. Temper \u2013 Die Stimmung ~ Die Gem\xFCter\n1962. Regret \u2013 Das Bedauern ~ Die Reue\n1963. Destination \u2013 Das Ziel ~ Die Ziele\n1964. Mill \u2013 Die M\xFChle ~ Die M\xFChlen\n1965. Error \u2013 Der Fehler ~ Die Fehler\n1966. Romance \u2013 Die Romantik ~ Die Romane\n1967. Topic \u2013 Das Thema ~ Die Themen\n1968. Patio \u2013 Die Terrasse ~ Die Innenh\xF6fe\n1969. Shovel \u2013 Die Schaufel ~ Schaufeln\n1970. Pajamas \u2013 Die Schlafanz\xFCge ~ Die Pajamases\n1971. EMail \u2013 Die Email ~ Die EMails\n1972. Pigeon \u2013 Die Taube ~ Die Tauben\n1973. Dinosaur \u2013 Der Dinosaurier ~ Die Dinosaurier\n1974. Industry \u2013 Die Branche ~ Die Industrie\n1975. Operator \u2013 Der Betreiber ~ Die Betreiber\n1976. Lift \u2013 Der Lift ~ Die Lifte\n1977. Counselor \u2013 Der Ratgeber ~ Die Berater\n1978. Gathering \u2013 Die Versammlung ~ Die Versammlungen\n1979. Principle \u2013 Das Prinzip ~ Die Grunds\xE4tze\n1980. Drama \u2013 Das Drama ~ Die Dramen\n1981. Chick \u2013 Das K\xFCken ~ Die K\xFCken\n1982. Chart \u2013 Das Diagramm ~ Die Charts\n1983. Campaign \u2013 Die Kampagne ~ Die Kampagnen\n1984. Laurel \u2013 Der Lorbeer ~ Die Lorbeeren\n1985. Steak \u2013 Das Steak ~ Die Steaks\n1986. Criminal \u2013 Der Kriminelle ~ Die Verbrecher\n1987. Globe \u2013 Der Globus ~ Die Kugeln\n1988. Bruise \u2013 Der Bluterguss ~ Die Blauen Flecken\n1989. Knob \u2013 Der Knopf ~ Die Noppen\n1990. Killing \u2013 Das T\xF6ten ~ Die Morde\n1991. Sweetheart \u2013 Der Schatz ~ Die Lieblinge\n1992. Opera \u2013 Die Oper ~ Die Opern\n1993. Frost \u2013 Der Frost ~ Die Fr\xF6ste\n1994. Nipple \u2013 Der Nippel ~ Die Brustwarzen\n1995. Reverend \u2013 Der Pfarrer ~ Die Pastoren\n1996. Haze \u2013 Die Tr\xFCbung ~ Die Tr\xFCbungen\n1997. Flood \u2013 Das Hochwasser ~ Die Fluten\n1998. Carol \u2013 Das Weihnachtslied ~ Die Weihnachtslieder\n1999. Weakness \u2013 Die Schw\xE4che ~ Schw\xE4chen\n2000. Cooking \u2013 Das Kochen ~ Die Cookings\n2001. Butcher \u2013 Der Metzger ~ Die Metzger\n2002. Cube \u2013 Der W\xFCrfel ~ Die W\xFCrfel\n2003. Cellar \u2013 Der Keller ~ Die Keller\n2004. Hollow \u2013 Der Hohl ~ Die Hohlr\xE4ume\n2005. Bump \u2013 Der H\xF6cker ~ Die H\xF6cker\n2006. Halt \u2013 Der Halt ~ Die Haltepunkte\n2007. Hay \u2013 Das Heu ~ Hays\n2008. Bark \u2013 Die Rinde ~ Die Rinden\n2009. Survival \u2013 Die \xDCberlebens ~ Die \xDCberreste\n2010. Bunk \u2013 Die Etagen ~ Die Kojen\n2011. Bend \u2013 Die Biegung ~ Die Biegungen\n2012. Approval \u2013 Die Freigabe ~ Die Zulassungen\n2013. Division \u2013 Der Unternehmensbereich ~ Die Abteilungen\n2014. Cocktail \u2013 Der Cocktail ~ Die Cocktails\n2015. Contest \u2013 Der Wettbewerb ~ Die Neuesten Informationen\n2016. Paradise \u2013 Das Paradies ~ Die Paradiese\n2017. Razor \u2013 Das Rasiermesser ~ Die Rasierer\n2018. Catch \u2013 Der Fang ~ Die F\xE4nge\n2019. Blossom \u2013 Die Bl\xFCte ~ Die Bl\xFCten\n2020. Puddle \u2013 Die Pf\xFCtze ~ Die Pf\xFCtzen\n2021. Electricity \u2013 Der Strom ~ Die Elektricit\xE4ten\n2022. Onion \u2013 Die Zwiebel ~ Die Zwiebeln\n2023. Laser \u2013 Die Laser ~ Die Laser\n2024. Cushion \u2013 Das Kissen ~ Die Kissen\n2025. Influence \u2013 Der Einfluss ~ Die Einfl\xFCsse\n2026. Jump \u2013 Der Sprung ~ Die Spr\xFCnge\n2027. Cement \u2013 Der Zement ~ Die Zemente\n2028. Amber \u2013 Die Gelbe ~ The Ambers\n2029. Goddess \u2013 Die G\xF6ttin ~ Die G\xF6ttinnen\n2030. Shack \u2013 The Shack ~ Die Baracken\n2031. Sales \u2013 Die Verk\xE4ufe ~ Die Saleses\n2032. Drift \u2013 Die Drift ~ Die Drifts\n2033. Fighting \u2013 Die K\xE4mpfe ~ Die K\xE4mpfe\n2034. Braid \u2013 Das Geflecht ~ Die Z\xF6pfe\n2035. Theme \u2013 Das Thema ~ Die Themen\n2036. Dignity \u2013 Die W\xFCrde ~ Die Dignit\xE4t\n2037. Lemon \u2013 Die Zitrone ~ Die Zitronen\n2038. Clown \u2013 Der Clown ~ Die Clowns\n2039. Assault \u2013 Der Angriff ~ Die Angriffe\n2040. Goggle \u2013 Die Brille ~ Die Schutzbrillen\n2041. Destruction \u2013 Die Zerst\xF6rung ~ Die Zerst\xF6rungen\n2042. Exception \u2013 Die Ausnahme ~ Die Ausnahmen\n2043. Peach \u2013 Der Pfirsich ~ Die Pfirsiche\n2044. Wash \u2013 Die Wasch ~ Die Wasch\n2045. Release \u2013 Die Befreiung ~ Die Freigaben\n2046. Spy \u2013 Der Spion ~ Die Spione\n2047. Tag \u2013 Die Tag ~ Die Tags\n2048. Bra \u2013 Der Bh ~ Die Bhs\n2049. Debt \u2013 Die Schuld ~ Die Schulden\n2050. Terrace \u2013 Die Terrasse ~ Die Terrassen\n2051. Remains \u2013 Die \xDCberbleibsel ~ Die Remainses\n2052. Logic \u2013 Die Logik ~ Die Logik\n2053. Joint \u2013 Der Joint ~ Die Gelenke\n2054. Pitcher \u2013 Der Krug ~ Die Kr\xFCge\n2055. Perspective \u2013 Die Perspektive ~ Die Perspektiven\n2056. Crop \u2013 Die Ernte ~ Die Ernte\n2057. Graduate \u2013 Der Diplom ~ Die Absolventen\n2058. Chorus \u2013 Der Chor ~ Die Ch\xF6re\n2059. Survivor \u2013 Der \xDCberlebende ~ Die \xDCberlebenden\n2060. Payment \u2013 Die Bezahlung ~ Zahlungen\n2061. Bet \u2013 Die Wette ~ Die Wetten\n2062. Revenge \u2013 Die Rache ~ Die Rache\n2063. Plaza \u2013 Der Platz ~ Die Pl\xE4tze\n2064. Elder \u2013 Der \xC4ltere ~ Die \xC4ltesten\n2065. Ginger \u2013 Der Ingwer ~ Die Ingwer\n2066. Surgeon \u2013 Der Chirurg ~ Die Chirurgen\n2067. Dash \u2013 Der Bindestrich ~ Die Striche\n2068. Sandal \u2013 Die Sandale ~ Die Sandalen\n2069. Hatred \u2013 Der Hass ~ Die Hass\n2070. Departure \u2013 Die Abfahrt ~ Die Abfahrten\n2071. Outline \u2013 Der Umriss ~ Die Umrisse\n2072. Raven \u2013 Der Rabe ~ Die Raben\n2073. Runner \u2013 Der L\xE4ufer ~ Die L\xE4ufer\n2074. Anticipation \u2013 Die Vorfreude ~ Die Erwartungen\n2075. Translation \u2013 Die \xDCbersetzung ~ Die \xDCbersetzungen\n2076. Headquarters \u2013 Das Hauptquartier ~ Die Headquarterses\n2077. Celebration \u2013 Feier ~ Die Feiern\n2078. Agony \u2013 Die Qual ~ Die Qualen\n2079. Sneakers \u2013 Die Turnschuhe ~ Die Sneakerses\n2080. Terminal \u2013 Das Terminal ~ Die Endger\xE4te\n2081. Expectation \u2013 Die Erwartung ~ Die Erwartungen\n2082. Pasture \u2013 Die Weide ~ Die Weiden\n2083. Console \u2013 Die Konsole ~ Die Konsolen\n2084. Strike \u2013 Der Streik ~ Die Streiks\n2085. Rescue \u2013 Die Rettung ~ Die Rettungsaktionen\n2086. Badge \u2013 Das Abzeichen ~ Badges\n2087. Fund \u2013 Der Fonds ~ Die Mittel\n2088. Try \u2013 Der Versuch ~ Die Versuche\n2089. Foyer \u2013 Das Foyer ~ Die Foyeies\n2090. Pastor \u2013 Der Pastor ~ Die Pastoren\n2091. Embrace \u2013 Die Umarmung ~ Die Umarmungen\n2092. Puzzle \u2013 Das Puzzle ~ Die R\xE4tsel\n2093. Canal \u2013 Der Kanal ~ Die Kan\xE4le\n2094. Charity \u2013 Die Wohlfahrt ~ Die Wohlt\xE4tigkeitsorganisationen\n2095. Principal \u2013 Der Direktor ~ Die Auftraggeber\n2096. Applause \u2013 Der Applaus ~ Die Beifall\n2097. Philosophy \u2013 Die Philosophie ~ Die Philosophien\n2098. Trench \u2013 Der Graben ~ Die Gr\xE4ben\n2099. Up \u2013 Die Bis ~ Die H\xF6hen\n2100. Nephew \u2013 Der Neffe ~ Die Neffen\n2101. Essay \u2013 Der Aufsatz ~ Die Aufs\xE4tze\n2102. Repair \u2013 Die Reparatur ~ Die Reparaturen\n2103. Mix \u2013 Der Mix ~ Die Mixs\n2104. Mob \u2013 Der Mob ~ Die Mobs\n2105. Barrier \u2013 Die Barriere ~ Die Barrieren\n2106. Disk \u2013 Die Platte ~ Die Scheiben\n2107. Goodness \u2013 Die G\xFCte ~ Die Goodnesses\n2108. Scout \u2013 Der Scout ~ Die Pfadfinder\n2109. Importance \u2013 Die Wichtigkeit ~ Die Wichtigkeiten\n2110. Destiny \u2013 Das Schicksal ~ Die Schicksale\n2111. Aid \u2013 Die Beihilfen ~ Die Beihilfen\n2112. Microphone \u2013 Das Mikrofon ~ Die Mikrofone\n2113. Label \u2013 Das Etikett ~ Die Etiketten\n2114. Pepper \u2013 Der Pfeffer ~ Die Paprika\n2115. Coyote \u2013 Der Kojote ~ Die Kojoten\n2116. Teaching \u2013 Das Lehren ~ Die Lehren\n2117. Burn \u2013 Der Brennvorgang ~ Die Verbrennungen\n2118. Vest \u2013 Die Weste ~ Die Westen\n2119. Pony \u2013 Das Pony ~ Die Ponys\n2120. Donkey \u2013 Der Esel ~ Die Esel\n2121. Cycle \u2013 Der Kreislauf ~ Die Zyklen\n2122. Gasp \u2013 Das Keuchen ~ Die Keuchen\n2123. Irony \u2013 Die Ironie ~ Die Ironien\n2124. Award \u2013 Die Auszeichnung ~ Die Auszeichnungen\n2125. Grape \u2013 Die Traube ~ Die Trauben\n2126. Hesitation \u2013 Das Z\xF6gern ~ Die Bedenken\n2127. Tavern \u2013 Die Taverne ~ Die Tavernen\n2128. Chore \u2013 Die L\xE4stige Pflicht ~ Die Hausarbeiten\n2129. Sphere \u2013 Die Kugel ~ Die Kugeln\n2130. Sail \u2013 Das Segel ~ Die Segel\n2131. Silhouette \u2013 Die Silhouette ~ Die Silhouetten\n2132. Institute \u2013 Das Institut ~ Die Institute\n2133. Liar \u2013 Der L\xFCgner ~ Die L\xFCgner\n2134. Technique \u2013 Die Technik ~ Die Techniken\n2135. Index \u2013 Der Index ~ Die Indexs\n2136. Plank \u2013 Das Brett ~ Die Bretter\n2137. Jerk \u2013 Der Ruck ~ Die Idioten\n2138. Growth \u2013 Das Wachstum ~ Die Wucherungen\n2139. Stocking \u2013 Der Strumpf ~ Die Str\xFCmpfe\n2140. Blackness \u2013 Die Schw\xE4rze ~ Die Schw\xE4rzen\n2141. Teen \u2013 Der Teenager ~ Die Jugendlichen\n2142. Bracelet \u2013 Das Armband ~ Die Armb\xE4nder\n2143. Jelly \u2013 Gelee ~ Die Gelees\n2144. Diet \u2013 Die Di\xE4t ~ Die Di\xE4ten\n2145. Beef \u2013 Das Fleisch ~ Die Beefs\n2146. Concrete \u2013 Der Beton ~ Die Betone\n2147. Contrast \u2013 Der Kontrast ~ Die Gegens\xE4tze\n2148. Banner \u2013 Das Banner ~ Die Banner\n2149. Resistance \u2013 Der Widerstand ~ Die Widerst\xE4nde\n2150. Stay \u2013 Der Aufenthalt ~ Die Aufenthalte\n2151. Posture \u2013 Die Haltung ~ Die Haltungen\n2152. Vodka \u2013 Der Wodka ~ Die Wodkas\n2153. Album \u2013 Das Album ~ Die Alben\n2154. Era \u2013 Die \xC4ra ~ Die Epochen\n2155. Acquaintance \u2013 Die Bekanntschaft ~ Die Bekannten\n2156. Revolution \u2013 Die Revolution ~ Die Revolutionen\n2157. Nap \u2013 Der Nap ~ Die Noppen\n2158. Veil \u2013 Der Schleier ~ Die Schleier\n2159. Spectacle \u2013 Das Schauspiel ~ Die Brille\n2160. Competition \u2013 Der Wettbewerb ~ Die Wettbewerbe\n2161. Scalp \u2013 Die Kopfhaut ~ Die Kopfhaut\n2162. Holly \u2013 Die Stechpalme ~ The Hollies\n2163. Winner \u2013 Der Gewinner ~ Die Gewinner\n2164. Appetite \u2013 Der Appetit ~ Die Appetit\n2165. Ivy \u2013 Der Efeu ~ Die Efeu\n2166. Cue \u2013 Der Cue ~ Die Stichworte\n2167. Strain \u2013 Der Stamm ~ Die St\xE4mme\n2168. Niece \u2013 Die Nichte ~ Die Nichten\n2169. Galaxy \u2013 Die Galaxie ~ Die Galaxien\n2170. Bedside \u2013 Die Nacht ~ Die Bettseiten\n2171. Madness \u2013 Die Verr\xFCcktheit ~ Die Verr\xFCcktheiten\n2172. Baker \u2013 Der B\xE4cker ~ Die B\xE4cker\n2173. Virus \u2013 Das Virus ~ Die Viren\n2174. Suffering \u2013 Das Leiden ~ Die Leiden\n2175. Slot \u2013 Der Schlitz ~ Die Schlitze\n2176. Folder \u2013 Der Ordner ~ Die Hefte\n2177. Confession \u2013 Das Bekenntnis ~ Die Gest\xE4ndnisse\n2178. Porter \u2013 Der Gep\xE4cktr\xE4ger ~ Die Torh\xFCter\n2179. Dessert \u2013 Das Dessert ~ Die Desserts\n2180. Dump \u2013 Die M\xFCllhalde ~ Die Deponien\n2181. Packet \u2013 Das Paket ~ Die Pakete\n2182. Profit \u2013 Der Gewinn ~ Die Gewinne\n2183. Grandchild \u2013 Der Enkel ~ Die Enkelkinder\n2184. Gossip \u2013 Der Tratsch ~ Der Klatsch\n2185. Mare \u2013 Die Stute ~ Die Stuten\n2186. Dna \u2013 Die Dna ~ Die Dnas\n2187. Torso \u2013 Der Rumpf ~ Die Torsi\n2188. Broom \u2013 Der Besen ~ Die Besen\n2189. Hoof \u2013 Der Huf ~ Die Hufe\n2190. Sensor \u2013 Der Sensor ~ Die Sensoren\n2191. Peasant \u2013 Der Bauer ~ Die Bauern\n2192. Scholar \u2013 Der Gelehrte ~ Die Gelehrten\n2193. Therapy \u2013 Die Therapie ~ Die Therapie\n2194. Peanut \u2013 Die Erdnuss ~ Die Erdn\xFCsse\n2195. Headline \u2013 Die Schlagzeile ~ Schlagzeilen\n2196. Bacon \u2013 Der Speck ~ Die Speck\n2197. Stern \u2013 Das Heck ~ Die Hecks\n2198. Violin \u2013 Die Geige ~ Die Violinen\n2199. Plague \u2013 Die Pest ~ Die Plagen\n2200. Blur \u2013 Die Unsch\xE4rfe ~ Die Unsch\xE4rfen\n2201. Meantime \u2013 Die Zwischenzeit ~ Die Zwischenzeiten\n2202. Deacon \u2013 Der Diakon ~ Die Diakone\n2203. Lance \u2013 Die Lanze ~ Die Lanzen\n2204. Arrest \u2013 Die Festnahme ~ Die Verhaftungen\n2205. Banana \u2013 Die Banane ~ Die Bananen\n2206. Gin \u2013 Der Gin ~ Die Gins\n2207. Willow \u2013 Die Weide ~ Die Weiden\n2208. Shark \u2013 Der Hai ~ Die Haie\n2209. Preparation \u2013 Die Vorbereitung ~ Die Vorbereitungen\n2210. Scratch \u2013 Die Kratz ~ Die Kratzer\n2211. Dressing \u2013 Der Verband ~ Die Verb\xE4nde\n2212. Signature \u2013 Die Unterschrift ~ Unterschriften\n2213. Admiral \u2013 Der Admiral ~ Die Admirale\n2214. Analysis \u2013 Die Analyse ~ Die Analysisies\n2215. Rainbow \u2013 Der Regenbogen ~ Die Regenbogen\n2216. Lizard \u2013 Die Eidechse ~ Die Eidechsen\n2217. Dwarf \u2013 Der Zwerg ~ Die Zwerge\n2218. Stress \u2013 Der Stress ~ Die Belastungen\n2219. Homework \u2013 Die Hausaufgabe ~ Die Hausaufgaben\n2220. Mixture \u2013 Die Mischung ~ Die Mischungen\n2221. Verse \u2013 Der Vers ~ Die Verse\n2222. Conviction \u2013 Die \xDCberzeugung ~ Die \xDCberzeugungen\n2223. Rover \u2013 Der Rover ~ Die Rover\n2224. Wren \u2013 Der Zaunk\xF6nig ~ Die Zaunk\xF6nige\n2225. Compound \u2013 Die Verbindung ~ Die Verbindungen\n2226. Expedition \u2013 Die Expedition ~ Die Expeditionen\n2227. Reward \u2013 Die Belohnung ~ Die Belohnungen\n2228. Pillar \u2013 Die S\xE4ulen ~ Die S\xE4ulen\n2229. Jam \u2013 Die Marmelade ~ Die Marmeladen\n2230. Brandy \u2013 Der Schnaps ~ Die Br\xE4nde\n2231. Residence \u2013 Die Residenz ~ Die Residenzen\n2232. Baron \u2013 Der Baron ~ Die Barone\n2233. Enterprise \u2013 Das Unternehmen ~ Die Unternehmen\n2234. Complex \u2013 Der Komplex ~ Die Complexs\n2235. Candidate \u2013 Der Kandidat ~ Die Kandidaten\n2236. Triumph \u2013 Der Triumph ~ Die Triumphes\n2237. Twist \u2013 Die Wendung ~ Die Drehungen\n2238. Sketch \u2013 Die Skizze ~ Die Skizzen\n2239. Register \u2013 Das Register ~ Die Register\n2240. Heartbeat \u2013 Der Herzschlag ~ Die Herzschl\xE4ge\n2241. Cafeteria \u2013 Die Cafeteria ~ Die Cafeterien\n2242. Fee \u2013 Die Geb\xFChr ~ Die Geb\xFChren\n2243. Hillside \u2013 Die Hang ~ Die H\xE4nge\n2244. Maze \u2013 Das Labyrinth ~ Die Labyrinthe\n2245. Fisherman \u2013 Der Fischer ~ Das Fishermans\n2246. Hum \u2013 Das Brummen ~ Die Summt\n2247. Kitten \u2013 Das K\xE4tzchen ~ Die K\xE4tzchen\n2248. Dread \u2013 The Dread ~ Die Dreads\n2249. Substance \u2013 Die Substanz ~ Die Substanzen\n2250. Melody \u2013 Die Melodie ~ Die Melodien\n2251. Bang \u2013 Der Knall ~ Der Pony\n2252. Dagger \u2013 Der Dolch ~ Die Dolche\n2253. Intent \u2013 Die Absicht ~ Die Absichten\n2254. Con \u2013 Das Con ~ Die Nachteile\n2255. Loneliness \u2013 Die Einsamkeit ~ Die Einsamkeiten\n2256. Motorcycle \u2013 Das Motorrad ~ Die Motorr\xE4der\n2257. Amazement \u2013 Das Staunen ~ Die Amazements\n2258. Peer \u2013 Die Peer ~ Die Peers\n2259. Tech \u2013 Die Tech ~ Die Teches\n2260. Insult \u2013 Die Beleidigung ~ Die Beleidigungen\n2261. Capacity \u2013 Die Kapazit\xE4t ~ Die Kapazit\xE4t\n2262. Awe \u2013 Die Ehrfurcht ~ Die Awes\n2263. Chili \u2013 Die Chili ~ Die Chilis\n2264. Lodge \u2013 Die Lodge ~ Die Logen\n2265. Clip \u2013 Der Clip ~ Die Clips\n2266. Limo \u2013 Die Limousine ~ Die Limousinen\n2267. Mosquito \u2013 Die M\xFCcke ~ Die M\xFCcken\n2268. Dice \u2013 Der W\xFCrfel ~ Die W\xFCrfel\n2269. Shake \u2013 Der Shake ~ Die Shakes\n2270. Feast \u2013 Das Festmahl ~ Die Feste\n2271. Casino \u2013 Das Casino ~ Die Casinos\n2272. Pea \u2013 Die Erbse ~ Die Erbsen\n2273. Murmur \u2013 Das Murmeln ~ Das Murmeln\n2274. Conflict \u2013 Der Konflikt ~ Die Konflikte\n2275. Stem \u2013 Der Stamm ~ Die Stiele\n2276. Comrade \u2013 Der Genosse ~ Die Genossen\n2277. Flock \u2013 Die Herde ~ Die Herden\n2278. Sob \u2013 Sob ~ Das Schluchzen\n2279. Pregnancy \u2013 Die Schwangerschaft ~ Schwangerschaften\n2280. Suspect \u2013 Der Verd\xE4chtige ~ Die Verd\xE4chtigen\n2281. Coincidence \u2013 Das Zusammentreffen ~ Die Zuf\xE4lle\n2282. Ranger \u2013 Der Waldl\xE4ufer ~ Die Ranger\n2283. Cartoon \u2013 Die Karikatur ~ Die Karikaturen\n2284. Roommate \u2013 Der Mitbewohner ~ Die Mitbewohner\n2285. Kindness \u2013 Die Freundlichkeit ~ Die Freundlichkeiten\n2286. Cruiser \u2013 Der Kreuzer ~ Die Kreuzer\n2287. Slab \u2013 Die Bramme ~ Die Brammen\n2288. Conscience \u2013 Das Gewissen ~ Das Gewissen\n2289. Cheer \u2013 Die Cheer ~ Der Jubel\n2290. Cone \u2013 Der Konus ~ Die Kegel\n2291. Circuit \u2013 Die Schaltung ~ Die Schaltkreise\n2292. Ivory \u2013 Das Elfenbein ~ Die Elfenbeinarbeiten\n2293. Carpenter \u2013 Der Zimmermann ~ Die Zimmerleute\n2294. Realm \u2013 Das Reich ~ Die Reiche\n2295. Bum \u2013 Der Penner ~ Die Bums\n2296. Donna \u2013 Die Donna ~ The Donnas\n2297. Reservation \u2013 Die Reservierung ~ Reservierungen\n2298. Entertainment \u2013 Die Unterhaltung ~ Die Unterhaltungen\n2299. Crab \u2013 Die Krabbe ~ Die Krabben\n2300. Groan \u2013 Das St\xF6hnen ~ Das St\xF6hnen\n2301. Academy \u2013 Die Akademie ~ Die Akademien\n2302. Longing \u2013 Die Sehnsucht ~ Die Sehns\xFCchte\n2303. Kip \u2013 Die Kip ~ Die Kips\n2304. Drill \u2013 Der Bohrer ~ Die Bohrer\n2305. Luggage \u2013 Das Gep\xE4ck ~ Die Den Gep\xE4ck\n2306. Canopy \u2013 Der Baldachin ~ Die Baldachine\n2307. Thrill \u2013 Der Nervenkitzel ~ Den Nervenkitzel\n2308. Virtue \u2013 Die Tugend ~ Die Tugenden\n2309. Marsh \u2013 Der Sumpf ~ Die S\xFCmpfe\n2310. Chimney \u2013 Der Schornstein ~ Die Schornsteine\n2311. Anchor \u2013 Die Anker ~ Die Anker\n2312. Harmony \u2013 Die Harmonie ~ Die Harmonien\n2313. Maple \u2013 Das Ahorn ~ Die Ahorne\n2314. Bunny \u2013 Das Kaninchen ~ Die Hasen\n2315. Mode \u2013 Der Modus ~ Die Modi\n2316. Throne \u2013 Der Thron ~ Die Throne\n2317. Application \u2013 Der Antrag ~ Anwendungen\n2318. Physics \u2013 Die Physik ~ Die Physicsies\n2319. Neon \u2013 Das Neon ~ Die Neons\n2320. Airlock \u2013 Die Luftschleuse ~ Die Luftschleusen\n2321. Fatigue \u2013 Die Erm\xFCdungs ~ Die Strapazen\n2322. Thanksgiving \u2013 Die Danksagung ~ Die Danksagungen\n2323. Manuscript \u2013 Das Manuskript ~ Die Handschriften\n2324. Basis \u2013 Die Basis ~ Die Basises\n2325. Memorial \u2013 Das Denkmal ~ Gedenkst\xE4tten\n2326. Cupboard \u2013 Der Schrank ~ Die Schr\xE4nke\n2327. Leap \u2013 Der Sprung ~ Die Spr\xFCnge\n2328. Japanese \u2013 Die Japaner ~ Die Japaneses\n2329. Engineering \u2013 Das Engineering ~ Die Engineerings\n2330. Left \u2013 Die Linke ~ Die Linke\n2331. Ache \u2013 Der Schmerz ~ Die Schmerzen\n2332. Bronze \u2013 Die Bronze ~ Die Bronzen\n2333. Association \u2013 Die Assoziation ~ Die Verb\xE4nde\n2334. Fleet \u2013 Die Flotte ~ Die Flotten\n2335. Marker \u2013 Der Marker ~ Die Marker\n2336. Prey \u2013 Die Beute ~ Die Beute\n2337. Dove \u2013 Die Taube ~ Die Tauben\n2338. Grasp \u2013 Der Griff ~ Die Griffe\n2339. Episode \u2013 Die Episode ~ Die Episoden\n2340. Origin \u2013 Der Ursprung ~ Die Urspr\xFCnge\n2341. Vacuum \u2013 Das Vakuum ~ Die Staubsauger\n2342. Cathedral \u2013 Die Kathedrale ~ Die Kathedralen\n2343. Management \u2013 Das Management ~ Die Unternehmensleitungen\n2344. Down \u2013 Die Nach Unten ~ Die Tiefen\n2345. Continent \u2013 Der Kontinent ~ Die Kontinente\n2346. Dickens \u2013 Zum Teufel ~ Die Dickenses\n2347. Volunteer \u2013 Die Freiwillige ~ Die Freiwilligen\n2348. Soccer \u2013 Fu\xDFball ~ Die Soccers\n2349. Hem \u2013 Der Saum ~ Die S\xE4ume\n2350. Mention \u2013 Die Erw\xE4hnung ~ Nennungen\n2351. Lust \u2013 Die Lust ~ Die Begierden\n2352. Giggle \u2013 Die Kichern ~ Das Kichern\n2353. Classmate \u2013 Die Klassenkameraden ~ Die Klassenkameraden\n2354. Cleaning \u2013 Die Reinigung ~ Die Reinigungen\n2355. Receptionist \u2013 Der Rezeptionist ~ An Der Rezeption\n2356. Caller \u2013 Der Anrufer ~ Die Anrufer\n2357. Pursuit \u2013 Das Streben ~ Die Besch\xE4ftigungen\n2358. Contempt \u2013 Die Verachtung ~ Die Geringsch\xE4tzungen\n2359. Sacrifice \u2013 Das Opfer ~ Die Opfer\n2360. Grandparent \u2013 Die Gro\xDFeltern ~ Die Gro\xDFeltern\n2361. Threshold \u2013 Der Grenzbereich ~ Die Schwellen\n2362. Deed \u2013 Die Tat ~ Die Taten\n2363. Countryside \u2013 Die Landschaft ~ Die Landschaften\n2364. Artifact \u2013 Das Artefakt ~ Die Artefakte\n2365. Wrinkle \u2013 Die Falten ~ Die Falten\n2366. Magician \u2013 Der Magier ~ Die Zauberer\n2367. Pang \u2013 Der Stich ~ Die Stiche\n2368. Italian \u2013 Die Italienische ~ Die Italiener\n2369. Eternity \u2013 Die Ewigkeit ~ Die Ewigkeit\n2370. Slate \u2013 Der Schiefer ~ Die Schiefertafeln\n2371. Stairwell \u2013 Das Treppenhaus ~ Die Treppenh\xE4user\n2372. Announcement \u2013 Die Ank\xFCndigung ~ Die Ank\xFCndigungen\n2373. Motive \u2013 Das Motiv ~ Die Motive\n2374. Mechanic \u2013 Der Mechaniker ~ Die Mechanik\n2375. Ally \u2013 Der Verb\xFCndete ~ Alliierten\n2376. Vase \u2013 Die Vase ~ Die Vasen\n2377. Salesman \u2013 Der Verk\xE4ufer ~ Die Salesmans\n2378. Therapist \u2013 Der Therapeut ~ Die Therapeuten\n2379. Granny \u2013 Die Oma ~ Die Omas\n2380. Maverick \u2013 Der Au\xDFenseiter ~ Die Mavericks\n2381. Bandage \u2013 Die Bandage ~ Die Bandagen\n2382. Ham \u2013 Der Schinken ~ Die Schinken\n2383. Carter \u2013 Der Fuhrmann ~ Die Fuhr\n2384. Investment \u2013 Die Investition ~ Die Investitionen\n2385. Appeal \u2013 Die Beschwerde ~ Die Rechtsmittel\n2386. Innocence \u2013 Die Unschuld ~ Die Innocences\n2387. Calendar \u2013 Der Kalender ~ Die Kalender\n2388. Rooftop \u2013 Die Dach ~ Die D\xE4cher\n2389. Combat \u2013 Der Kampf ~ Die K\xE4mpfe\n2390. Revelation \u2013 Die Offenbarung ~ Die Enth\xFCllungen\n2391. Pancake \u2013 Der Pfannkuchen ~ Die Pfannkuchen\n2392. Asteroid \u2013 Der Asteroid ~ Die Asteroiden\n2393. Postcard \u2013 Die Postkarte ~ Die Postkarten\n2394. Garment \u2013 Das Kleidungsst\xFCck ~ Die Kleidungsst\xFCcke\n2395. Determination \u2013 Die Bestimmung ~ Die Bestimmungen\n2396. Tractor \u2013 Der Traktor ~ Die Traktoren\n2397. Berry \u2013 Die Beere ~ Die Beeren\n2398. Surroundings \u2013 Die Umgebung ~ Die Surroundingses\n2399. Clump \u2013 Der Klumpen ~ Die Klumpen\n2400. Offense \u2013 Die Straftat ~ Die Straftaten\n2401. Introduction \u2013 Die Einleitung ~ Die Einleitungen\n2402. Butler \u2013 Der Butler ~ The Butlers\n2403. Cough \u2013 Der Husten ~ Die Coughes\n2404. Granite \u2013 Der Granit ~ Die Granite\n2405. Ambassador \u2013 Der Botschafter ~ Die Botschafter\n2406. Turning \u2013 Der Wende ~ Die Sp\xE4ne\n2407. Sitting \u2013 Die Sitzung ~ Die Sitzungen\n2408. Compliment \u2013 Das Kompliment ~ Die Komplimente\n2409. Carton \u2013 Der Karton ~ Die Schachteln\n2410. Doorbell \u2013 Die T\xFCrklingel ~ Die T\xFCrklingeln\n2411. Certainty \u2013 Die Gewissheit ~ Die Gewissheiten\n2412. Politician \u2013 Der Politiker ~ Die Politiker\n2413. Gratitude \u2013 Die Dankbarkeit ~ Die Danksagungen\n2414. Current \u2013 Die Jetzige ~ Die Str\xF6me\n2415. Gloom \u2013 Das Dunkel ~ Die D\xFCsterkeit\n2416. Plaster \u2013 Der Putz ~ Die Pflaster\n2417. Settlement \u2013 Die Siedlung ~ Die Siedlungen\n2418. Chop \u2013 Die Chop ~ Die Koteletts\n2419. Homicide \u2013 Die Mordkommission ~ Die T\xF6tungsdelikte\n2420. Aluminum \u2013 Die Aluminium ~ Die Aluminums\n2421. Boulevard \u2013 Der Boulevard ~ Die Boulevards\n2422. Pupil \u2013 Der Sch\xFCler ~ Die Sch\xFClerinnen Und Sch\xFCler\n2423. Float \u2013 Der Schwimmer ~ Die Schwimmer\n2424. Profession \u2013 Der Beruf ~ Berufe\n2425. Retreat \u2013 Der R\xFCckzug ~ Die Exerzitien\n2426. Intersection \u2013 Der Schnittpunkt ~ Die Schnittpunkte\n2427. Scheme \u2013 Die Regelung ~ Die Systeme\n2428. Emptiness \u2013 Die Leere ~ Die Emptinesses\n2429. Publisher \u2013 Der Verlag ~ Die Verleger\n2430. Circus \u2013 Der Zirkus ~ Die Zirkusse\n2431. Dimension \u2013 Die Abmessung ~ Die Dimensionen\n2432. Zoo \u2013 Der Tierpark ~ Die Zoos\n2433. Sickness \u2013 Die Krankheit ~ Die Krankheiten\n2434. Messenger \u2013 Der Bote ~ Die Boten\n2435. Beau \u2013 Das Beau ~ Die Beaus\n2436. Tangle \u2013 Das Gewirr ~ Die Tangles\n2437. Personnel \u2013 Das Personal ~ Die Personnels\n2438. Strategy \u2013 Die Strategie ~ Die Strategien\n2439. Desperation \u2013 Die Verzweiflung ~ Die Verzweiflungen\n2440. Businessman \u2013 Der Gesch\xE4ftsmann ~ Die Business\n2441. Pod \u2013 The Pod ~ Die Schoten\n2442. Drain \u2013 Der Abfluss ~ Die Drain\n2443. Strawberry \u2013 Die Erdbeere ~ Die Erdbeeren\n2444. Anniversary \u2013 Der Jahrestag ~ Die Jahrestage\n2445. Binoculars \u2013 Das Fernglas ~ Die Binocularses\n2446. Gulf \u2013 Die Kluft ~ Die Buchten\n2447. Discipline \u2013 Die Disziplin ~ Die Disziplinen\n2448. Hedge \u2013 Die Hecke ~ Die Hecken\n2449. Moan \u2013 Das St\xF6hnen ~ Das St\xF6hnen\n2450. Income \u2013 Das Einkommen ~ Die Einkommen\n2451. Myth \u2013 Der Mythos ~ Die Mythen\n2452. Shutter \u2013 Der Verschluss ~ Die Fensterl\xE4den\n2453. Raft \u2013 Das Flo\xDF ~ Die Fl\xF6\xDFe\n2454. Physician \u2013 Der Arzt ~ Die \xC4rzte\n2455. Ambition \u2013 Der Ehrgeiz ~ Die Ambitionen\n2456. Camel \u2013 Das Kamel ~ Die Kamele\n2457. Beating \u2013 Das Schlagen ~ Die Schl\xE4ge\n2458. Acid \u2013 Die S\xE4ure ~ Die S\xE4uren\n2459. Cereal \u2013 M\xFCsli ~ Getreide\n2460. Basin \u2013 Das Becken ~ Die Becken\n2461. Nightgown \u2013 Das Nachthemd ~ Die Nachthemden\n2462. Internet \u2013 Das Internet ~ Die Internets\n2463. Cockpit \u2013 Das Cockpit ~ Die Cockpits\n2464. Wreck \u2013 Das Wrack ~ Die Wracks\n2465. Wig \u2013 Die Per\xFCcke ~ Die Per\xFCcken\n2466. Rein \u2013 Darin ~ Die Z\xFCgel\n2467. Recorder \u2013 Der Recorder ~ Die Rekorder\n2468. Pork \u2013 Das Schweinefleisch ~ Die Porks\n2469. Hound \u2013 Der Hund ~ Die Hunde\n2470. Boundary \u2013 Die Grenze ~ Die Grenzen\n2471. Exam \u2013 Die Pr\xFCfung ~ Die Pr\xFCfungen\n2472. Courtesy \u2013 Die H\xF6flichkeit ~ Die H\xF6flichkeiten\n2473. Assistance \u2013 Die Hilfe ~ Die Unterst\xFCtzungen\n2474. Cheekbone \u2013 Die Wangenknochen ~ Die Wangenknochen\n2475. Whip \u2013 Die Peitsche ~ Die Peitschen\n2476. Pilgrim \u2013 Der Pilger ~ Die Pilger\n2477. Grease \u2013 Das Fett ~ Die Fette\n2478. Collapse \u2013 Der Kollaps ~ Die Zusammenbr\xFCche\n2479. Faculty \u2013 Die Fakult\xE4t ~ Die Fakult\xE4ten\n2480. Reminder \u2013 Die Erinnerung ~ Die Erinnerungen\n2481. Sage \u2013 Der Weise ~ Die Weisen\n2482. Asphalt \u2013 Der Asphalt ~ Die Asphalte\n2483. Privilege \u2013 Das Privileg ~ Die Privilegien\n2484. Stairway \u2013 Das Treppenhaus ~ Die Treppen\n2485. Maintenance \u2013 Die Wartung ~ Die Wartungen\n2486. Sweetie \u2013 Die S\xFC\xDFe ~ Die S\xFC\xDFigkeiten\n2487. Orchard \u2013 Der Obstgarten ~ Die Obstg\xE4rten\n2488. Cot \u2013 Das Kinderbett ~ Die Kinderbetten\n2489. Pouch \u2013 Der Beutel ~ Die Taschen\n2490. Lighter \u2013 Das Feuerzeug ~ Die Feuerzeuge\n2491. Kitty \u2013 Die Katze ~ Die K\xE4tzchen\n2492. Formation \u2013 Die Formation ~ Die Formationen\n2493. Snack \u2013 Die Snack ~ Die Snacks\n2494. Talking \u2013 Das Reden ~ Die Gespr\xE4chen\n2495. Op \u2013 Die Op ~ Die Ops\n2496. Shriek \u2013 Der Schrei ~ Die Schreie\n2497. Sculpture \u2013 Die Skulptur ~ Die Skulpturen\n2498. Chairman \u2013 Der Vorsitzende ~ Die Chair\n2499. Sum \u2013 Die Summe ~ Die Summen\n2500. Carrot \u2013 Die Karotte ~ Die Karotten\n2501. Ripple \u2013 Die Welligkeit ~ Die Wellen\n2502. Stripe \u2013 Der Streifen ~ Die Streifen\n2503. Cavern \u2013 Die H\xF6hle ~ Die H\xF6hlen\n2504. Radar \u2013 Die Radar ~ Die Radare\n2505. Ponytail \u2013 Der Pferdeschwanz ~ Die Pferdeschw\xE4nze\n2506. Designer \u2013 Der Designer ~ Die Designer\n2507. Surge \u2013 Die Sto\xDF ~ Die \xDCberspannungen\n2508. Heir \u2013 Der Erbe ~ Die Erben\n2509. Vault \u2013 Der Bunker ~ Die Gew\xF6lbe\n2510. Sissy \u2013 Die Sissy ~ Die Weicheier\n2511. Scotch \u2013 Die Schotten ~ Die Bremsschuhe\n2512. Stillness \u2013 Die Stille ~ Die Stillnesses\n2513. Tunic \u2013 Die Tunika ~ Die Tuniken\n2514. Think \u2013 Der Think ~ Das Denkt\n2515. Penis \u2013 Der Penis ~ Die Penisse\n2516. Native \u2013 Der Einheimische ~ Die Eingeborenen\n2517. Lovemaking \u2013 Das Liebesspiel ~ Die Lovemakings\n2518. Aide \u2013 Der Adjutant ~ Die Helfer\n2519. Bulk \u2013 Der Gro\xDFteil ~ Die Massen\n2520. Poker \u2013 Die Poker ~ Die Poker\n2521. Lime \u2013 Der Kalk ~ Der Limes\n2522. Surveillance \u2013 Das \xDCberwachungs ~ Die Anwendungsbeobachtungen\n2523. Assembly \u2013 Die Versammlung ~ Die Baugruppen\n2524. Grandson \u2013 Der Enkel ~ Die Enkel\n2525. Chopper \u2013 Der Chopper ~ Die Zerhacker\n2526. Carrier \u2013 Der Tr\xE4ger ~ Die Tr\xE4ger\n2527. Engagement \u2013 Die Verlobung ~ Die Engagements\n2528. Kin \u2013 Das Kin ~ Die Kins\n2529. Mum \u2013 Die Mama ~ Die M\xFCtter\n2530. Lighting \u2013 Die Beleuchtung ~ Die Beleuchtung\n2531. Fit \u2013 Die Passform ~ Die Anf\xE4lle\n2532. Pull \u2013 Die Pull ~ Die Zieht\n2533. Verge \u2013 The Verge ~ Die Seitenstreifen\n2534. Farmhouse \u2013 Das Bauernhaus ~ Die Bauernh\xE4user\n2535. Wait \u2013 Das Warten ~ Die Wartezeiten\n2536. Assassin \u2013 Der Attent\xE4ter ~ Die Attent\xE4ter\n2537. Foam \u2013 Der Schaum ~ Die Sch\xE4ume\n2538. Tug \u2013 Der Schlepper ~ Die Schlepper\n2539. Journalist \u2013 Der Journalist ~ Die Journalisten\n2540. Recording \u2013 Die Aufnahme ~ Die Aufnahmen\n2541. Cure \u2013 Die Heilung ~ Die Heilungen\n2542. Descent \u2013 Der Abstieg ~ Die Abfahrten\n2543. Ringing \u2013 Das Klingeln ~ Die Ringings\n2544. Scissors \u2013 Die Schere ~ Die Scissorses\n2545. Twig \u2013 Der Zweig ~ Die Zweige\n2546. Resort \u2013 Der Urlaubsort ~ Die Ferienorte\n2547. Guardian \u2013 Der Besch\xFCtzer ~ Die W\xE4chter\n2548. Opponent \u2013 Der Gegner ~ Die Gegner\n2549. Chef \u2013 Der K\xFCchenchef ~ Die K\xF6che\n2550. Wheat \u2013 Der Weizen ~ Die Weizen\n2551. Hurricane \u2013 Der Hurrikan ~ Die Hurrikane\n2552. Playground \u2013 Der Spielplatz ~ Die Spielpl\xE4tze\n2553. Mushroom \u2013 Der Pilz ~ Die Pilze\n2554. Keyboard \u2013 Die Tastatur ~ Die Keyboaries\n2555. Cedar \u2013 Die Zeder ~ Die Zedern\n2556. Crest \u2013 Das Wappen ~ Die K\xE4mme\n2557. Jasmine \u2013 Der Jasmin ~ Die Jasmin\n2558. Armchair \u2013 Der Sessel ~ Die Sessel\n2559. Attraction \u2013 Die Attraktion ~ Attraktionen\n2560. Blind \u2013 Blinde ~ Die Blinds\n2561. Cylinder \u2013 Zylinder ~ Die Zylinder\n2562. Swallow \u2013 Die Schwalbe ~ Die Schwalben\n2563. Celebrity \u2013 Die Ber\xFChmtheit ~ Die Prominenten\n2564. Wilderness \u2013 Die Wildnis ~ Die Wildnis\n2565. Triangle \u2013 Das Dreieck ~ Die Dreiecke\n2566. Stench \u2013 Der Gestank ~ Die Gestank\n2567. Laboratory \u2013 Das Labor ~ Die Laboratorien\n2568. Array \u2013 Das Array ~ Die Arraies\n2569. Valentine \u2013 The Valentine ~ Die Valentines\n2570. Retirement \u2013 Das Renten ~ Die Pensionierungen\n2571. Ski \u2013 Der Ski ~ Die Skier\n2572. Edition \u2013 Die Ausgabe ~ Die Ausgaben\n2573. Supervisor \u2013 Der Supervisor ~ Die Aufsichtsbeh\xF6rden\n2574. Expanse \u2013 Die Weite ~ Die Weiten\n2575. Ending \u2013 Das Ende ~ Die Endungen\n2576. Moss \u2013 Das Moos ~ Die Moose\n2577. Gale \u2013 Der Sturm ~ Die St\xFCrme\n2578. Loyalty \u2013 Die Treue ~ Die Loyalit\xE4ten\n2579. Lavender \u2013 Der Lavendel ~ Die Lavendel\n2580. Pardon \u2013 Die Begnadigung ~ Die Begnadigungen\n2581. Ashtray \u2013 Der Aschenbecher ~ Die Aschenbecher\n2582. Shard \u2013 Die Scherbe ~ Die Scherben\n2583. Corporation \u2013 Das Unternehmen ~ Die Konzerne\n2584. Distraction \u2013 Die Ablenkung ~ Die Ablenkungen\n2585. Majesty \u2013 Die Majest\xE4t ~ Die Majest\xE4ten\n2586. Pyramid \u2013 Die Pyramide ~ Die Pyramiden\n2587. Fame \u2013 Der Ruhm ~ Die Fames\n2588. Graduation \u2013 Der Schulabschluss ~ Die Unterteilungen\n2589. Distress \u2013 Die Not ~ Die N\xF6te\n2590. Mage \u2013 Der Magier ~ Die Magier\n2591. Independence \u2013 Die Unabh\xE4ngigkeit ~ Die Unabh\xE4ngigkeiten\n2592. Crush \u2013 Der Schwarm ~ Die Zermalmt\n2593. Chuckle \u2013 Das Lachen ~ Die Kichert\n2594. Dime \u2013 Die Dime ~ Die Dimes\n2595. Aim \u2013 Das Ziel ~ Die Ziele\n2596. Gust \u2013 Die B\xF6en ~ Die B\xF6en\n2597. Russian \u2013 Der Russe ~ Die Russen\n2598. Treat \u2013 Der Festlichkeit ~ Die Leckereien\n2599. Foreigner \u2013 Der Ausl\xE4nder ~ Die Ausl\xE4nder\n2600. Salary \u2013 Das Gehalt ~ Die Geh\xE4lter\n2601. Scope \u2013 Der Anwendungsbereich ~ Die Bereiche\n2602. Rebel \u2013 Der Rebell ~ Die Rebellen\n2603. Thug \u2013 Der Schl\xE4ger ~ Die Schl\xE4ger\n2604. Tomb \u2013 Das Grab ~ Die Gr\xE4ber\n2605. Fridge \u2013 Der K\xFChlschrank ~ Die K\xFChlschr\xE4nke\n2606. Socket \u2013 Die Steckdose ~ Die Buchsen\n2607. Dose \u2013 Die Dosis ~ Die Dosen\n2608. Election \u2013 Die Wahl ~ Die Wahlen\n2609. Refugee \u2013 Der Fl\xFCchtling ~ Die Fl\xFCchtlinge\n2610. Phase \u2013 Die Phase ~ Die Phasen\n2611. Pumpkin \u2013 Der K\xFCrbis ~ Die K\xFCrbisse\n2612. Thorn \u2013 Der Dorn ~ Die Dornen\n2613. Hide \u2013 Die Haut ~ Die H\xE4ute\n2614. Sausage \u2013 Die Wurst ~ Die W\xFCrste\n2615. Dig \u2013 Die Dig ~ Die Ausgrabungen\n2616. Tan \u2013 Der Tan ~ Die Br\xE4unt\n2617. Loan \u2013 Das Darlehen ~ Die Kredite\n2618. Spike \u2013 Der Dorn ~ Die Spikes\n2619. Crumb \u2013 Die Krume ~ Die Kr\xFCmel\n2620. Wax \u2013 Das Wachs ~ Waxs\n2621. Growl \u2013 Das Knurren ~ Die Growls\n2622. Rental \u2013 Die Vermietung ~ Vermietungen\n2623. Feed \u2013 Das Futter ~ Die Zuf\xFChrungen\n2624. Escort \u2013 Die Eskorte ~ Die Begleitpersonen\n2625. Astonishment \u2013 Das Erstaunen ~ Die Erstaunlichkeiten\n2626. Flora \u2013 Die Flora ~ Die Floren\n2627. Festival \u2013 Das Fest ~ Die Feste\n2628. Debate \u2013 Die Debatte ~ Die Debatten\n2629. Critic \u2013 Der Kritiker ~ Die Kritiker\n2630. Cast \u2013 Die Besetzung ~ Die Modelle\n2631. Bloom \u2013 Die Bl\xFCte ~ Die Bl\xFCten\n2632. Loft \u2013 Das Loft ~ Die Dachb\xF6den\n2633. Commission \u2013 Die Kommission ~ Die Kommissionen\n2634. Flicker \u2013 Das Flimmern ~ Die Flackert\n2635. Economy \u2013 Die Wirtschaft ~ Die Volkswirtschaften\n2636. Radiation \u2013 Die Strahlung ~ Die Strahlungen\n2637. Bodyguard \u2013 Der Leibw\xE4chter ~ Die Bodyguaries\n2638. Realization \u2013 Die Umsetzung ~ Die Erkenntnisse\n2639. Crater \u2013 Der Krater ~ Die Krater\n2640. Voyage \u2013 Die Reise ~ Die Reisen\n2641. Congress \u2013 Das Kongress ~ Die Kongresse\n2642. Vote \u2013 Die Wahl ~ Die Stimmen\n2643. Proposal \u2013 Der Antrag ~ Vorschl\xE4ge\n2644. Fry \u2013 Der Braten ~ Die Pommes\n2645. Shiver \u2013 Das Zittern ~ G\xE4nsehaut\n2646. Obligation \u2013 Die Verpflichtung ~ Verpflichtungen\n2647. Loser \u2013 Der Verlierer ~ Die Verlierer\n2648. Instructor \u2013 Der Lehrer ~ Die Ausbilder\n2649. Wink \u2013 Die Zuzwinkern ~ Die Zwinkert\n2650. Pebble \u2013 Die Kies ~ Die Kieselsteine\n2651. Necessity \u2013 Die Notwendigkeit ~ Die Notwendigkeiten\n2652. Workshop \u2013 Der Workshop ~ Die Workshops\n2653. Sunrise \u2013 Der Sonnenaufgang ~ Die Sonnenaufgang\n2654. Exhaustion \u2013 Die Ersch\xF6pfung ~ Die Ersch\xF6pfungs\n2655. Cubicle \u2013 Die Zelle ~ Die Schr\xE4nke\n2656. Double \u2013 Der Doppelg\xE4nger ~ Die Doppelg\xE4nger\n2657. Perimeter \u2013 Der Umfang ~ Die Umf\xE4nge\n2658. Comb \u2013 Der Kamm ~ Die K\xE4mme\n2659. Finish \u2013 Das Ende ~ Die Oberfl\xE4chen\n2660. Purchase \u2013 Der Kauf ~ Die K\xE4ufe\n2661. Interval \u2013 Das Intervall ~ Die Intervalle\n2662. Splash \u2013 Der Spritz ~ Die Spritzer\n2663. Convention \u2013 Die Konvention ~ Die Konventionen\n2664. Awareness \u2013 Das Bewusstsein ~ Die Gewahrsein\n2665. Pose \u2013 Die Pose ~ Die Posen\n2666. Cradle \u2013 Die Wiege ~ Die Wiegen\n2667. Ram \u2013 Der St\xF6\xDFel ~ Die Widder\n2668. Gentry \u2013 Der Adel ~ Die Gentries\n2669. Seam \u2013 Die Naht ~ Die N\xE4hte\n2670. Associate \u2013 Das Assoziierte Unternehmen ~ Die Mitarbeiter\n2671. Pane \u2013 Die Scheibe ~ Die Scheiben\n2672. Punk \u2013 Der Punk ~ Die Punks\n2673. Remnant \u2013 Der \xDCberrest ~ Die Reste\n2674. Cracker \u2013 Der Cracker ~ Die Cracker\n2675. Bluff \u2013 Der Bluff ~ Die Klippen\n2676. Dune \u2013 Die D\xFCne ~ Die D\xFCnen\n2677. Dentist \u2013 Der Zahnarzt ~ Die Zahn\xE4rzte\n2678. Refuge \u2013 Die Zuflucht ~ Die Schutzh\xFCtten\n2679. Satin \u2013 Die Satin ~ Die Satins\n2680. Spread \u2013 Die Verbreitung ~ Die Spreads\n2681. Entity \u2013 Das Unternehmen ~ Die Entit\xE4ten\n2682. Mailbox \u2013 Das Postfach ~ Die Mailboxs\n2683. Annoyance \u2013 Der \xC4rger ~ Die \xC4rgernisse\n2684. Hiss \u2013 Das Zischen ~ Die Zischt\n2685. Local \u2013 Das Lokal ~ Die Einheimischen\n2686. Thud \u2013 Der Bums ~ Die Schl\xE4ge\n2687. Dismay \u2013 Die Best\xFCrzung ~ Die Best\xFCrzt\n2688. Flour \u2013 Das Mehl ~ Die Mehle\n2689. Freak \u2013 Der Freak ~ Die Freaks\n2690. Haircut \u2013 Der Haarschnitt ~ Die Abschl\xE4ge\n2691. Sweet \u2013 Die S\xFC\xDFe ~ Die S\xFC\xDFigkeiten\n2692. Orphan \u2013 Die Waise ~ Die Waisen\n2693. Chess \u2013 Das Schach ~ Die Chesses\n2694. Petal \u2013 Die Bl\xFCtenblatt ~ Die Bl\xFCtenbl\xE4tter\n2695. Paperwork \u2013 Die Schreibarbeit ~ Die Papierarbeiten\n2696. Psychiatrist \u2013 Der Psychiater ~ Die Psychiater\n2697. Singing \u2013 Der Gesang ~ Die Ges\xE4nge\n2698. Interrupt \u2013 Das Interrupt ~ Die Interrupts\n2699. Examination \u2013 Die Untersuchung ~ Untersuchungen\n2700. Admiration \u2013 Die Bewunderung ~ Die Bewunderung\n2701. Freezer \u2013 Das Gefrier ~ Die Gefrierger\xE4te\n2702. Illustration \u2013 Die Illustration ~ Abbildungen\n2703. Stew \u2013 Der Eintopf ~ Die Eint\xF6pfe\n2704. Investigator \u2013 Der Ermittler ~ Die Ermittler\n2705. Suburb \u2013 Der Vorort ~ Der Stadtrand\n2706. Biscuit \u2013 Der Keks ~ Die Kekse\n2707. Holster \u2013 Das Holster ~ Die Holster\n2708. Factor \u2013 Der Faktor ~ Die Faktoren\n2709. Intimacy \u2013 Die Intimit\xE4t ~ Die Intimit\xE4ten\n2710. Lash \u2013 Die Peitsche ~ Die Wimpern\n2711. Saving \u2013 Die Einsparung ~ Die Einsparungen\n2712. Software \u2013 Die Software ~ Die Software\n2713. Hen \u2013 Die Henne ~ Die Hennen\n2714. Birch \u2013 Die Birke ~ Die Birken\n2715. Inquiry \u2013 Die Untersuchung ~ Die Anfragen\n2716. Nursery \u2013 Der Kindergarten ~ Die Baumschulen\n2717. Transport \u2013 Der Transport ~ Die Transporte\n2718. Extent \u2013 Das Ausma\xDF ~ Die Ausdehnungen\n2719. Definition \u2013 Die Definition ~ Die Definitionen\n2720. Monument \u2013 Das Monument ~ Die Denkm\xE4ler\n2721. Plum \u2013 Die Pflaume ~ Die Pflaumen\n2722. Void \u2013 Das Nichts ~ Die Hohlr\xE4ume\n2723. Delay \u2013 Die Verz\xF6gerung ~ Die Verz\xF6gerungen\n2724. Inspection \u2013 Die Inspektion ~ Die Inspektionen\n2725. Essence \u2013 Die Essenz ~ Die Essenzen\n2726. Cannon \u2013 Die Kanone ~ Die Kanonen\n2727. Fringe \u2013 Die Fransen ~ Die Fransen\n2728. Stereo \u2013 Die Stereo ~ Die Stereoanlagen\n2729. Fella \u2013 Die Fella ~ Fellas\n2730. Praise \u2013 Das Lob ~ Das Lob\n2731. Penguin \u2013 Der Pinguin ~ Die Pinguine\n2732. Torture \u2013 Die Folter ~ Die Qualen\n2733. Stamp \u2013 Die Briefmarke ~ Die Briefmarken\n2734. Particle \u2013 Die Partikel ~ Die Teilchen\n2735. Translator \u2013 Der \xDCbersetzer ~ Die \xDCbersetzer\n2736. Easter \u2013 Ostern ~ Die Easters\n2737. Freeze \u2013 Das Einfrieren ~ Die Friert\n2738. Pew \u2013 Die Pew ~ Die B\xE4nke\n2739. Wad \u2013 Der Pfropfen ~ Die B\xFCndel\n2740. Panties \u2013 Das H\xF6schen ~ Die Pantieses\n2741. Consideration \u2013 Die Gegenleistung ~ \xDCberlegungen\n2742. Spit \u2013 Der Spie\xDF ~ Die Spie\xDFe\n2743. Cooler \u2013 Der K\xFChler ~ Die K\xFChler\n2744. Grill \u2013 Der Grill ~ Die Grills\n2745. Jug \u2013 Der Krug ~ Die Kr\xFCge\n2746. Nickname \u2013 Der Spitzname ~ Die Spitznamen\n2747. Revolver \u2013 Der Revolver ~ Die Revolver\n2748. Machinery \u2013 Die Maschinen ~ Die Maschinen\n2749. Madam \u2013 Die Damen Und Herren ~ Die Herren\n2750. Pike \u2013 Der Hecht ~ Pikes\n2751. Terrorist \u2013 Der Terrorist ~ Die Terroristen\n2752. Laptop \u2013 Der Laptop ~ Die Laptops\n2753. Offering \u2013 Das Angebot ~ Das Angebot\n2754. Beak \u2013 Der Schnabel ~ Die Schn\xE4bel\n2755. Institution \u2013 Die Institution ~ Die Institutionen\n2756. Comparison \u2013 Der Vergleich ~ Vergleiche\n2757. Maker \u2013 Der Macher ~ Die Macher\n2758. Insight \u2013 Die Einsicht ~ Die Erkenntnisse\n2759. Sibling \u2013 Die Geschwister ~ Die Geschwister\n2760. Wardrobe \u2013 Der Kleiderschrank ~ Die Schr\xE4nke\n2761. Flap \u2013 Die Klappe ~ Die Klappen\n2762. Sole \u2013 Der Einzige ~ Die Sohlen\n2763. Compassion \u2013 Das Mitgef\xFChl ~ Die Barmherzigkeit\n2764. Ego \u2013 Das Ego ~ Die Egos\n2765. Antenna \u2013 Die Antennen ~ Die Antennen\n2766. Cricket \u2013 Die Grille ~ Die Grillen\n2767. Troll \u2013 Der Troll ~ Die Trolle\n2768. Bookstore \u2013 Der B\xFCcherladen ~ Die Buchhandlungen\n2769. Coming \u2013 Die Ankunft ~ Das Kommen\n2770. Objection \u2013 Der Einwand ~ Die Einw\xE4nde\n2771. Holder \u2013 Der Halter ~ Die Inhaber\n2772. Backseat \u2013 R\xFCcksitz ~ Die R\xFCcksitze\n2773. Ignorance \u2013 Die Unwissenheit ~ Die Unwissenheit\n2774. Budget \u2013 Das Budget ~ Die Budgets\n2775. Aircraft \u2013 Das Flugzeug ~ Die Flugzeuge\n2776. Corps \u2013 Das Korps ~ Die Leichen\n2777. Loaf \u2013 Das Brot ~ Die Laibe\n2778. Extension \u2013 Die Erweiterung ~ Die Verl\xE4ngerungen\n2779. Freeway \u2013 Die Autobahn ~ Die Autobahnen\n2780. Solitude \u2013 Die Einsamkeit ~ Die Einsamkeit\n2781. Chemical \u2013 Die Chemische ~ Chemikalien\n2782. Villager \u2013 Der Dorfbewohner ~ Die Dorfbewohner\n2783. Perfection \u2013 Die Perfektion ~ Die Vollkommen\n2784. Pope \u2013 Der Papst ~ Die P\xE4pste\n2785. Semester \u2013 Das Semester ~ Die Semester\n2786. Liver \u2013 Die Leber ~ Die Lebern\n2787. Saucer \u2013 Die Untertasse ~ Die Untertassen\n2788. Urgency \u2013 Die Dringlichkeit ~ Die Dringlichkeiten\n2789. Volcano \u2013 Der Vulkan ~ Die Vulkane\n2790. Spice \u2013 Die W\xFCrze ~ Die Gew\xFCrze\n2791. Hostage \u2013 Die Geisel ~ Die Geiseln\n2792. Choir \u2013 Der Chor ~ Die Ch\xF6re\n2793. Dough \u2013 Der Teig ~ Die Teigrunder\n2794. Commotion \u2013 Die Aufregung ~ Die Unruhen\n2795. Courthouse \u2013 Gerichtsgeb\xE4ude ~ Die Gerichtsgeb\xE4uden\n2796. Salmon \u2013 Der Lachs ~ Die Lachse\n2797. Boxer \u2013 Der Boxer ~ Die Boxer\n2798. Errand \u2013 Die Besorgung ~ Die Besorgungen\n2799. Mechanism \u2013 Wobei Der Mechanismus ~ Die Mechanismen\n2800. Telescope \u2013 Das Teleskop ~ Die Teleskope\n2801. Ferry \u2013 Die F\xE4hre ~ Die F\xE4hren\n2802. Nigger \u2013 Der Nigger ~ Die Nigger\n2803. PasserBy \u2013 Der Passant ~ Die Passanten\n2804. Irritation \u2013 Die Reizung ~ Die Irritationen\n2805. Sedan \u2013 Die Limousine ~ Die Limousinen\n2806. Commitment \u2013 Das Engagement ~ Verpflichtungen\n2807. Coward \u2013 Der Feigling ~ Die Feiglinge\n2808. Git \u2013 Die Git ~ Die Gits\n2809. Flare \u2013 Die Fackel ~ Die Fackeln\n2810. Howl \u2013 Das Heulen ~ Das Heulen\n2811. Fang \u2013 Die Fang ~ Die Rei\xDFz\xE4hne\n2812. Roman \u2013 Die R\xF6misch ~ Die R\xF6mer\n2813. Hue \u2013 Der Farbton ~ Die Farbt\xF6ne\n2814. Discomfort \u2013 Das Unbehagen ~ Die Unannehmlichkeiten\n2815. Vent \u2013 Das Entl\xFCftungs ~ Die L\xFCftungsschlitze\n2816. Canoe \u2013 Das Kanu ~ Die Kanus\n2817. Recipe \u2013 Das Rezept ~ Die Rezepte\n2818. Hamburger \u2013 Der Hamburger ~ Die Hamburger\n2819. Eave \u2013 Die Traufe ~ Die Traufe\n2820. Barber \u2013 Der Barbier ~ Die Barbiere\n2821. Passing \u2013 Das Ableben ~ Die Passings\n2822. Betrayal \u2013 Der Verrat ~ Der Verrat\n2823. Sweatshirt \u2013 Das Sweatshirt ~ Die Sweatshirts\n2824. Tentacle \u2013 Die Tentakel ~ Die Tentakeln\n2825. Surf \u2013 Die Brandung ~ Die Brandungen\n2826. Plaid \u2013 Das Plaid ~ Die Plaids\n2827. Walkway \u2013 Der Gehweg ~ Die Gehwege\n2828. Limp \u2013 Das Hinken ~ Die Hinkt\n2829. Administration \u2013 Die Verwaltung ~ Die Verwaltungen\n2830. Convenience \u2013 Die Bequemlichkeit ~ Bequemlichkeiten\n2831. Diaper \u2013 Die Windel ~ Die Windeln\n2832. Mole \u2013 Der Maulwurf ~ Die Maulw\xFCrfe\n2833. Cleaner \u2013 Der Reiniger ~ Die Reinigungskr\xE4fte\n2834. Swell \u2013 Die D\xFCnung ~ Die Schwillt\n2835. GrownUp \u2013 Der Erwachsene ~ Die Erwachsenen\n2836. Scan \u2013 Die Scan ~ Die Abtastungen\n2837. Clarity \u2013 Die Klarheit ~ Die Klarheiten\n2838. Salon \u2013 Der Salon ~ Die Salons\n2839. Producer \u2013 Der Produzent ~ Die Hersteller\n2840. Flying \u2013 Die Flug ~ Die Flusen\n2841. Plea \u2013 Der Rechtsmittelgrund ~ Die Rechtsmittelgr\xFCnde\n2842. Prairie \u2013 Die Pr\xE4rie ~ Die Pr\xE4rien\n2843. Passport \u2013 Der Pass ~ Die P\xE4sse\n2844. Alternative \u2013 Die Alternative ~ Alternativen\n2845. Vanity \u2013 Die Eitelkeit ~ Die Eitelkeiten\n2846. Dam \u2013 Der Damm ~ Die D\xE4mme\n2847. Abuse \u2013 Der Missbrauch ~ Die Missbr\xE4uche\n2848. Olive \u2013 Die Olive ~ Die Oliven\n2849. Miner \u2013 Der Bergmann ~ Die Bergleute\n2850. Reserve \u2013 Die Reserve ~ Die Reserven\n2851. Backup \u2013 Die Sicherungs ~ Die Sicherungen\n2852. Intercom \u2013 Die Gegensprechanlage ~ Die Gegensprechanlagen\n2853. Shawl \u2013 Das Tuch ~ Die Schals\n2854. Platter \u2013 Der Plattenteller ~ Die Platten\n2855. Implication \u2013 Die Implikation ~ Die Auswirkungen\n2856. Rumble \u2013 Das Poltern ~ Die Rumpelt\n2857. Announcer \u2013 Der Ansager ~ Die Ansager\n2858. Rubble \u2013 Die Tr\xFCmmer ~ Die Tr\xFCmmern\n2859. Axe \u2013 Die Axt ~ Die Achsen\n2860. Transmission \u2013 Die \xDCbertragungs ~ Die \xDCbertragungen\n2861. Crib \u2013 Die Krippe ~ Die Krippen\n2862. Hop \u2013 Die Sprung ~ Der Hopfen\n2863. Graveyard \u2013 Der Friedhof ~ Die Friedh\xF6fe\n2864. Aroma \u2013 Das Aroma ~ Die Aromen\n2865. Dialogue \u2013 Der Dialog ~ Die Dialoge\n2866. Roller \u2013 Die Walze ~ Die Rollen\n2867. Congregation \u2013 Gemeinde ~ Die Gemeinden\n2868. Terrain \u2013 Das Gel\xE4nde ~ Die Terrains\n2869. Transfer \u2013 Der Transfer ~ Die Transfers\n2870. Hardware \u2013 Die Hardware ~ Die Hardwares\n2871. Generator \u2013 Der Generator ~ Die Generatoren\n2872. Luxury \u2013 Die Luxus ~ Der Luxus\n2873. Auditorium \u2013 Das Auditorium ~ Die Auditorien\n2874. Goblin \u2013 Der Kobold ~ Die Goblins\n2875. Peg \u2013 Der Zapfen ~ Die Zapfen\n2876. Defeat \u2013 Die Niederlage ~ Die Niederlagen\n2877. Haven \u2013 The Haven ~ Die Oasen\n2878. Specimen \u2013 Die Probe ~ Die Proben\n2879. Hearth \u2013 Der Herd ~ Die Feuerstellen\n2880. Admission \u2013 Die Zulassung ~ Die Zulassungs\n2881. Obsession \u2013 Die Besessenheit ~ Die Obsessionen\n2882. Launch \u2013 Der Start ~ Die Starts\n2883. Patsy \u2013 Die Patsy ~ Die S\xFCndenb\xF6cke\n2884. Dorm \u2013 Das Wohnheim ~ Die Schlafs\xE4le\n2885. Glen \u2013 The Glen ~ Die T\xE4ler\n2886. Saw \u2013 Die S\xE4ge ~ Die S\xE4gen\n2887. Til \u2013 Die Til ~ Die Tils\n2888. Ape \u2013 Der Affe ~ Die Affen\n2889. Stagger \u2013 Der Staffelungs ~ Die Wankt\n2890. Pussy \u2013 Die Fotze ~ Die Fotzen\n2891. Collector \u2013 Der Sammler ~ Die Kollektoren\n2892. Earthquake \u2013 Das Erdbeben ~ Die Erdbeben\n2893. Flake \u2013 Die Flocke ~ Die Flocken\n2894. Syllable \u2013 Die Silbe ~ Die Silben\n2895. Bouquet \u2013 Das Bouquet ~ Die Blumenstr\xE4u\xDFe\n2896. Selection \u2013 Die Auswahl ~ Die Selektionen\n2897. Vow \u2013 Der Schwur ~ Die Gel\xFCbde\n2898. Granddaughter \u2013 Die Enkelin ~ Die Enkel\n2899. Symptom \u2013 Das Symptom ~ Die Symptome\n2900. Scenario \u2013 Das Szenario ~ Die Szenarien\n2901. Riot \u2013 Der Aufruhr ~ Die Unruhen\n2902. Timing \u2013 Das Timing ~ Die Zeitpunkte\n2903. Burger \u2013 Der Burger ~ Die Burger\n2904. Plus \u2013 Die Plus ~ Die Pluspunkte\n2905. Sparrow \u2013 Der Spatz ~ Die Spatzen\n2906. Embassy \u2013 Die Botschaft ~ Die Botschaften\n2907. Podium \u2013 Das Podium ~ Die Podestpl\xE4tze\n2908. Accusation \u2013 Der Vorwurf ~ Die Vorw\xFCrfe\n2909. Manor \u2013 Das Herrenhaus ~ Die Herrenh\xE4user\n2910. Shuffling \u2013 Das Schlurfen ~ Die Shufflings\n2911. Dolphin \u2013 Der Delfin ~ Die Delphine\n2912. Kettle \u2013 Der Wasserkocher ~ Die Kessel\n2913. Trooper \u2013 Der Soldat ~ Die Soldaten\n2914. Salvation \u2013 Die Rettung ~ Die Rettungen\n2915. Vet \u2013 Der Tierarzt ~ Die Tier\xE4rzte\n2916. Runway \u2013 Die Landebahn ~ Die Start Und Landebahnen\n2917. Poppy \u2013 Der Mohn ~ Der Mohn\n2918. Upstairs \u2013 Im Obergeschoss ~ Die Upstairses\n2919. Lava \u2013 Die Lava ~ Die Laven\n2920. Inspiration \u2013 Die Inspiration ~ Die Inspirationen\n2921. Bosom \u2013 Der Busen ~ Die Busen\n2922. Intruder \u2013 Der Eindringling ~ Die Eindringlinge\n2923. Supermarket \u2013 Der Supermarkt ~ Die Superm\xE4rkte\n2924. Trophy \u2013 Der Pokal ~ Die Troph\xE4en\n2925. Jealousy \u2013 Die Eifersucht ~ Die Eifersucht\n2926. Warden \u2013 Der Aufseher ~ Des Direktors\n2927. Passageway \u2013 Der Durchgang ~ Die Durchg\xE4nge\n2928. Marina \u2013 Der Yachthafen ~ Die Jachth\xE4fen\n2929. Farewell \u2013 Das Lebewohl ~ Die Abschiede\n2930. Belongings \u2013 Die Gegenst\xE4nde ~ Der Zugeh\xF6rigkeit\n2931. Procession \u2013 Die Prozession ~ Die Prozessionen\n2932. Astronaut \u2013 Der Astronaut ~ Die Astronauten\n2933. Crotch \u2013 Der Schritt ~ Die Gabelungen\n2934. Sweep \u2013 Die Sweep ~ Die Sweeps\n2935. Recovery \u2013 Die Erholung ~ Die Wiederfindungen\n2936. Harness \u2013 Der Kabelbaum ~ Die Kabelb\xE4ume\n2937. Anguish \u2013 Die Angst ~ Die \xC4ngste\n2938. Logo \u2013 Das Logo ~ Die Logos\n2939. Litter \u2013 Der Wurf ~ Die W\xFCrfe\n2940. Marine \u2013 Die Marine ~ Die Marines\n2941. Resentment \u2013 Der Groll ~ Die Ressentiments\n2942. CoOp \u2013 Der CoOp ~ Die Genossenschaften\n2943. Drake \u2013 The Drake ~ Die Drachen\n2944. Gypsy \u2013 Der Zigeuner ~ Die Zigeuner\n2945. Imitation \u2013 Die Nachahmung ~ Die Imitationen\n2946. Employer \u2013 Der Arbeitgeber ~ Arbeitgeber\n2947. Freshman \u2013 Der Neuling ~ Die Freshmans\n2948. Phenomenon \u2013 Das Ph\xE4nomen ~ Die Ph\xE4nomene\n2949. Flute \u2013 Die Fl\xF6te ~ Die Fl\xF6ten\n2950. Greek \u2013 Der Grieche ~ Die Griechen\n2951. Condo \u2013 Die Wohnung ~ Die Eigentumswohnungen\n2952. Forefinger \u2013 Der Zeigefinger ~ Die Zeigefingern\n2953. Burial \u2013 Das Begr\xE4bnis ~ Die Bestattungen\n2954. Republic \u2013 Die Republik ~ Die Republiken\n2955. Emerald \u2013 Der Smaragd ~ Die Smaragde\n2956. Bathrobe \u2013 Der Bademantel ~ Die Badem\xE4ntel\n2957. Testimony \u2013 Das Zeugnis ~ Die Zeugenaussagen\n2958. Hinge \u2013 Das Scharnier ~ Die Scharniere\n2959. Bakery \u2013 Die B\xE4ckerei ~ Die B\xE4ckereien\n2960. Context \u2013 Der Kontext ~ Die Kontexte\n2961. Bargain \u2013 Das Schn\xE4ppchen ~ Die Schn\xE4ppchen\n2962. Saying \u2013 Das Sprichwort ~ Die Spr\xFCche\n2963. Foreman \u2013 Der Vorarbeiter ~ Die Foremans\n2964. Swan \u2013 Der Schwan ~ Die Schw\xE4ne\n2965. Flannel \u2013 Die Flanell ~ Die Waschlappen\n2966. Indication \u2013 Die Angabe ~ Die Indikationen\n2967. Significance \u2013 Die Signifikanz ~ Die Bedeutungen\n2968. Beetle \u2013 Der K\xE4fer ~ Die K\xE4fer\n2969. Learning \u2013 Die Lern ~ Die Erkenntnisse\n2970. Pub \u2013 Das Lokal ~ Die Pubs\n2971. Fraction \u2013 Die Fraktion ~ Die Fraktionen\n2972. Trout \u2013 Die Forelle ~ Die Forellen\n2973. Crust \u2013 Die Kruste ~ Die Krusten\n2974. Overcoat \u2013 Die \xDCberzugs ~ Die M\xE4ntel\n2975. Glint \u2013 Das Glitzern ~ Die Reflexen\n2976. Medal \u2013 Die Medaille ~ Die Medaillen\n2977. Perception \u2013 Die Wahrnehmung ~ Die Wahrnehmungen\n2978. Welcome \u2013 Das Willkommen ~ Die Willkommen\n2979. Dictionary \u2013 Das W\xF6rterbuch ~ Die W\xF6rterb\xFCcher\n2980. Metaphor \u2013 Die Metapher ~ Die Metaphern\n2981. Poverty \u2013 Die Armut ~ Die Poverties\n2982. Main \u2013 Die Haupt ~ Netz\n2983. Climb \u2013 Der Anstieg ~ Die Anstiege\n2984. Leash \u2013 Die Leine ~ Die Leinen";

  var _default = Ember.Route.extend({
    model() {
      return data.split('\n').map(str => {
        const right = str.split(' ~')[0];
        const translation = right.split(' ')[1];
        const [article, word] = right.split('– ')[1].split(' ');
        return {
          article,
          word,
          translation
        };
      });
    },

    setupController(controller, model) {
      this._super(...arguments);

      const newIndex = Math.floor(Math.random() * model.length);
      controller.set('currentIndex', newIndex);
    }

  });

  _exports.default = _default;
});
;define("artikel-affe/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    beforeModel() {
      this.transitionTo('der-die-das');
    }

  });

  _exports.default = _default;
});
;define("artikel-affe/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "rb7ec8vh",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"container\"],[8],[0,\"\\n\"],[1,[22,\"outlet\"],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "artikel-affe/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("artikel-affe/templates/components/ember-popper-targeting-parent", ["exports", "ember-popper/templates/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("artikel-affe/templates/components/ember-popper", ["exports", "ember-popper/templates/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("artikel-affe/templates/der-die-das", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "zbhra0dN",
    "block": "{\"symbols\":[\"a\",\"a\"],\"statements\":[[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"bg-light\"],[8],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"col w-100 text-center\"],[8],[7,\"h5\",true],[10,\"class\",\"mx-auto\"],[8],[0,\"Statistics\"],[9],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n\"],[4,\"if\",[[24,[\"lastAnswers\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\",true],[10,\"class\",\"col\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"px-3\"],[8],[0,\"Last ten: \"],[7,\"strong\",true],[8],[1,[24,[\"statistics\",\"streak\",\"right\"]],false],[0,\"/\"],[1,[24,[\"statistics\",\"streak\",\"total\"]],false],[9],[9],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"px-3\"],[8],[0,\"Longest streak: \"],[7,\"strong\",true],[8],[1,[24,[\"statistics\",\"streak\",\"longestStreak\"]],false],[9],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"col\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"px-3\"],[8],[0,\"\\n            \"],[7,\"div\",true],[8],[0,\"Total: \"],[1,[24,[\"statistics\",\"percents\",\"total\"]],false],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"text-danger\"],[8],[0,\"Der: \"],[1,[24,[\"statistics\",\"percents\",\"der\"]],false],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"text-success\"],[8],[0,\"Die: \"],[1,[24,[\"statistics\",\"percents\",\"die\"]],false],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"text-primary\"],[8],[0,\"Das: \"],[1,[24,[\"statistics\",\"percents\",\"das\"]],false],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"col mx-auto w-100 text-center\"],[8],[0,\"\\n    \"],[7,\"h1\",true],[8],[1,[22,\"currentWord\"],false],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"row mb-3\"],[8],[0,\"\\n\"],[4,\"each\",[[24,[\"articles\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"col\"],[8],[0,\"\\n    \"],[7,\"button\",false],[12,\"class\",\"btn btn-primary w-100\"],[3,\"action\",[[23,0,[]],[24,[\"checkArticle\"]],[23,2,[]]]],[8],[1,[23,2,[]],false],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"text-center\"],[8],[0,\"Pick the right article\"],[9],[0,\"\\n\"],[4,\"each\",[[24,[\"lastAnswers\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\",true],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[7,\"div\",true],[10,\"class\",\"col\"],[8],[0,\"\\n            \"],[7,\"div\",true],[11,\"class\",[29,[\"alert alert-\",[28,\"if\",[[23,1,[\"result\"]],\"success\",\"danger\"],null]]]],[10,\"role\",\"alert\"],[8],[0,\"\\n            \"],[1,[23,1,[\"article\"]],false],[0,\" \"],[1,[23,1,[\"word\"]],false],[0,\"  \"],[7,\"span\",true],[10,\"style\",\"font-size: x-small;font-weight: bold;opacity: 0.5;\"],[8],[0,\"(\"],[1,[23,1,[\"translation\"]],false],[0,\")\"],[9],[0,\"\\n            \"],[9],[0,\"    \\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "artikel-affe/templates/der-die-das.hbs"
    }
  });

  _exports.default = _default;
});
;define("artikel-affe/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "VNLD3tjL",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "artikel-affe/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('artikel-affe/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("artikel-affe/app")["default"].create({"name":"artikel-affe","version":"0.0.0+04ce2722"});
          }
        
//# sourceMappingURL=artikel-affe.map
