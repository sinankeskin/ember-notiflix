import Service from '@ember/service';

export default Service.extend({
  notiflix: null,
  init() {
    this._super(...arguments);

    this.notiflix = this.notiflix || (window ? window.Notiflix : null);
    this.notiflix.Notify.Init({});
  },
  merge(type, options) {
    switch (type) {
      case 'notify':
        this.notiflix.Notify.Merge(options);
        break;
      default:
        break;
    }
  },
  notify(type, message) {
    switch (type) {
      case 'success':
        this.notiflix.Notify.Success(message);
        break;
      case 'failure':
        this.notiflix.Notify.Failure(message);
        break;
      default:
        break;
    }
  }
});
