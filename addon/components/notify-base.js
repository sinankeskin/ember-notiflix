import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  notiflix: service('notiflix'),
  tagName: '',
  type: '',
  message: '',
  onClick: null,
  init() {
    this._super(...arguments);
    this.notiflix.merge('notify', {
      width: '240px',
      fontSize: '24px'
    });
  },
  didInsertElement() {
    this._super(...arguments);
    this._displayNotify();
  },
  _displayNotify() {
    this.notiflix.notify(this.type, this.message, this.onClick);
  }
});
