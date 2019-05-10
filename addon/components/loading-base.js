import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  notiflix: service(),
  type: '',
  message: '',
  init() {
    this._super(...arguments);
  },
  didInsertElement() {
    this._super(...arguments);
    this._displayLoading();
  },
  _displayLoading() {
    this.notiflix.loading(this.type, this.message);
  },
  change(message) {
    this.notiflix.Loading.Change(message);
  },
  remove(delay) {
    this.notiflix.Loading.Remove(delay);
  }
});
