import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  notiflix: service('notiflix'),
  tagName: '',
  title: '',
  message: '',
  okBtnText: '',
  cancelBtnText: '',
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
    this._displayConfirm();
  },
  _displayConfirm() {
    this.notiflix.confirm(
      this.title,
      this.message,
      this.okBtnText,
      this.cancelBtnText,
      this.onClick
    );
  }
});
