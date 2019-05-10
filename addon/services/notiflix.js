import Service from '@ember/service';
import { getOwner } from '@ember/application';
import { computed } from '@ember/object';

export default Service.extend({
  notiflix: null,
  config: computed(function() {
    let config = getOwner(this).resolveRegistration('config:environment') || {};

    return config['ember-notiflix'] || {};
  }),
  init() {
    this._super(...arguments);

    this.notiflix = this.notiflix || (window ? window.Notiflix : null);
    this.notiflix.Notify.Init(this.config['notify']);
    this.notiflix.Report.Init(this.config['report']);
    this.notiflix.Loading.Init(this.config['loading']);
    this.notiflix.Confirm.Init(this.config['confirm']);
  },
  merge(type, options) {
    switch (type) {
      case 'notify':
        this.notifyMerge(options);
        break;
      case 'report':
        this.reportMerge(options);
        break;
      case 'loading':
        this.loadingMerge(options);
        break;
      case 'confirm':
        this.confirmMerge(options);
        break;
      default:
        break;
    }
  },
  notifyMerge(options) {
    this.notiflix.Notify.Merge(options);
  },
  reportMerge(options) {
    this.notiflix.Notify.Merge(options);
  },
  loadingMerge(options) {
    this.notiflix.Notify.Merge(options);
  },
  confirmMerge(options) {
    this.notiflix.Notify.Merge(options);
  },
  notify(type, message, callback) {
    switch (type) {
      case 'success':
        this.notifySuccess(message, callback);
        break;
      case 'failure':
        this.notifyFailure(message, callback);
        break;
      case 'warning':
        this.notifyWarning(message, callback);
        break;
      case 'info':
        this.notifyInfo(message, callback);
        break;
      default:
        this.notifySuccess(message, callback);
        break;
    }
  },
  notifySuccess(message, callback) {
    this.notiflix.Notify.Success(message, callback);
  },
  notifyFailure(message, callback) {
    this.notiflix.Notify.Failure(message, callback);
  },
  notifyWarning(message, callback) {
    this.notiflix.Notify.Warning(message, callback);
  },
  notifyInfo(message, callback) {
    this.notiflix.Notify.Info(message, callback);
  },
  report(type, title, message, btnText, callback) {
    switch (type) {
      case 'success':
        this.reportSuccess(title, message, btnText, callback);
        break;
      case 'failure':
        this.reportFailure(title, message, btnText, callback);
        break;
      case 'warning':
        this.reportWarning(title, message, btnText, callback);
        break;
      case 'info':
        this.reportInfo(title, message, btnText, callback);
        break;
      default:
        this.reportSuccess(title, message, btnText, callback);
        break;
    }
  },
  reportSuccess(title, message, btnText, callback) {
    this.notiflix.Report.Success(title, message, btnText, callback);
  },
  reportFailure(title, message, btnText, callback) {
    this.notiflix.Report.Failure(title, message, btnText, callback);
  },
  reportWarning(title, message, btnText, callback) {
    this.notiflix.Report.Warning(title, message, btnText, callback);
  },
  reportInfo(title, message, btnText, callback) {
    this.notiflix.Report.Info(title, message, btnText, callback);
  },
  loading(type, message) {
    switch (type) {
      case 'standard':
        this.loadingStandard(message);
        break;
      case 'hourglass':
        this.loadingHourglass(message);
        break;
      case 'circle':
        this.loadingCircle(message);
        break;
      case 'arrows':
        this.loadingArrows(message);
        break;
      case 'dots':
        this.loadingDots(message);
        break;
      case 'pulse':
        this.loadingPulse(message);
        break;
      case 'custom':
        this.loadingCustom(message);
        break;
      default:
        this.loadingStandard(message);
        break;
    }
  },
  loadingStandard(message) {
    this.notiflix.Loading.Standard(message);
  },
  loadingHourglass(message) {
    this.notiflix.Loading.Hourglass(message);
  },
  loadingCircle(message) {
    this.notiflix.Loading.Circle(message);
  },
  loadingArrows(message) {
    this.notiflix.Loading.Arrows(message);
  },
  loadingDots(message) {
    this.notiflix.Loading.Dots(message);
  },
  loadingPulse(message) {
    this.notiflix.Loading.Pulse(message);
  },
  loadingCustom(message) {
    this.notiflix.Loading.Custom(message);
  },
  loadingChange(message) {
    this.notiflix.Loading.Change(message);
  },
  loadingRemove(timeout) {
    this.notiflix.Loading.Remove(timeout);
  },
  confirm(title, message, okBtnText, cancelBtnText, callback) {
    this.notiflix.Confirm.Show(
      title,
      message,
      okBtnText,
      cancelBtnText,
      callback
    );
  }
});
