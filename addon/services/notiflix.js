import Service from '@ember/service';

export default Service.extend({
  notiflix: null,
  init() {
    this._super(...arguments);

    this.notiflix = this.notiflix || (window ? window.Notiflix : null);
    this.notiflix.Notify.Init({});
    this.notiflix.Report.Init({});
    this.notiflix.Confirm.Init({});
    this.notiflix.Loading.Init({});
  },
  merge(type, options) {
    switch (type) {
      case 'notify':
        this.notiflix.Notify.Merge(options);
        break;
      case 'report':
        this.notiflix.Report.Merge(options);
        break;
      case 'confirm':
        this.notiflix.Confirm.Merge(options);
        break;
      case 'loading':
        this.notiflix.Loading.Merge(options);
        break;
      default:
        break;
    }
  },
  notify(type, message, callback) {
    switch (type) {
      case 'success':
        this.notiflix.Notify.Success(message, callback);
        break;
      case 'failure':
        this.notiflix.Notify.Failure(message, callback);
        break;
      case 'warning':
        this.notiflix.Notify.Warning(message, callback);
        break;
      case 'info':
        this.notiflix.Notify.Info(message, callback);
        break;
      default:
        this.notiflix.Notify.Success(message, callback);
        break;
    }
  },
  report(type, title, message, btnText, callback) {
    switch (type) {
      case 'success':
        this.notiflix.Report.Success(title, message, btnText, callback);
        break;
      case 'failure':
        this.notiflix.Report.Failure(title, message, btnText, callback);
        break;
      case 'warning':
        this.notiflix.Report.Warning(title, message, btnText, callback);
        break;
      case 'info':
        this.notiflix.Report.Info(title, message, btnText, callback);
        break;
      default:
        this.notiflix.Report.Success(title, message, btnText, callback);
        break;
    }
  },
  confirm(title, message, okBtnText, cancelBtnText, callback) {
    this.notiflix.Confirm.Show(
      title,
      message,
      okBtnText,
      cancelBtnText,
      callback
    );
  },
  loading(type, message) {
    switch (type) {
      case 'standard':
        this.notiflix.Loading.Standard(message);
        break;
      case 'hourglass':
        this.notiflix.Loading.Hourglass(message);
        break;
      case 'circle':
        this.notiflix.Loading.Circle(message);
        break;
      case 'arrows':
        this.notiflix.Loading.Arrows(message);
        break;
      case 'dots':
        this.notiflix.Loading.Dots(message);
        break;
      case 'pulse':
        this.notiflix.Loading.Pulse(message);
        break;
      default:
        this.notiflix.Loading.Standard(message);
        break;
    }
  }
});
