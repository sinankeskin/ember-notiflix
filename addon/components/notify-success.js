import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  notiflix: service('notiflix'),
  tagName: '',
  message: '',
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
    this.notiflix.notify('success', this.message);
  }
});
