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
    this.notiflix.merge('loading', {
      width: '240px',
      fontSize: '24px'
    });
  },
  didInsertElement() {
    this._super(...arguments);
    this._displayLoading();
  },
  _displayLoading() {
    this.notiflix.loading(this.type, this.message);
  }
});
