import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  notiflix: service(),
  type: '',
  message: '',
  onClick: null,
  init() {
    this._super(...arguments);
  },
  didInsertElement() {
    this._super(...arguments);
    this._displayNotify();
  },
  _displayNotify() {
    this.notiflix.notify(this.type, this.message, this.onClick);
  }
});
