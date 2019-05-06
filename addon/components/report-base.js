import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  notiflix: service('notiflix'),
  tagName: '',
  type: '',
  title: '',
  message: '',
  btnText: '',
  onClick: null,
  init() {
    this._super(...arguments);
    this.notiflix.merge('report', {
      width: '240px',
      fontSize: '24px'
    });
  },
  didInsertElement() {
    this._super(...arguments);
    this._displayReport();
  },
  _displayReport() {
    this.notiflix.report(
      this.type,
      this.title,
      this.message,
      this.btnText,
      this.onClick
    );
  }
});
