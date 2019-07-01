import Service from '@ember/service';
import { getOwner } from '@ember/application';
import { computed } from '@ember/object';
import { assert } from '@ember/debug';

export default Service.extend({
  notiflix: null,
  config: computed(function() {
    let config = getOwner(this).resolveRegistration('config:environment') || {};

    return config['ember-notiflix'] || {};
  }),
  init() {
    this._super(...arguments);

    this.notiflix = this.notiflix || (window ? window.Notiflix : null);

    assert(
      "Seems like Notiflix library couldn't bind to the window object. Try npm install.",
      this.notiflix != null
    );

    this.notiflix.Notify.Init(this.config['notify'] || {});
    this.notiflix.Report.Init(this.config['report'] || {});
    this.notiflix.Loading.Init(this.config['loading'] || {});
    this.notiflix.Confirm.Init(this.config['confirm'] || {});
  },
  /**
   * Base merge function for override initial settings.
   *
   * @param {'notify'|'report'|'loading'|'confirm'} type Type of function to call
   * @param {object} options Options to override
   */
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
  /**
   * Notify functionality only merge function for override initial settings.
   *
   * @param {object} options Options to override
   */
  notifyMerge(options) {
    this.notiflix.Notify.Merge(options);
  },
  /**
   * Report functionality only merge function for override initial settings.
   *
   * @param {object} options Options to override
   */
  reportMerge(options) {
    this.notiflix.Notify.Merge(options);
  },
  /**
   * Loading functionality only merge function for override initial settings.
   *
   * @param {object} options Options to override
   */
  loadingMerge(options) {
    this.notiflix.Notify.Merge(options);
  },
  /**
   * Confirm functionality only merge function for override initial settings.
   *
   * @param {object} options Options to override
   */
  confirmMerge(options) {
    this.notiflix.Notify.Merge(options);
  },
  /**
   * Base notify function.
   *
   * @param {'success'|'failure'|'warning'|'info'} type Type of function to call
   * @param {string} message Message to show
   * @param {function} callback onClick callback function
   */
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
  /**
   * Success notify function
   *
   * @param {string} message Message to show
   * @param {function} callback onClick callback function
   */
  notifySuccess(message, callback) {
    this.notiflix.Notify.Success(message, callback);
  },
  /**
   * Failure notify function
   *
   * @param {string} message Message to show
   * @param {function} callback onClick callback function
   */
  notifyFailure(message, callback) {
    this.notiflix.Notify.Failure(message, callback);
  },
  /**
   * Warning notify function
   *
   * @param {string} message Message to show
   * @param {function} callback onClick callback function
   */
  notifyWarning(message, callback) {
    this.notiflix.Notify.Warning(message, callback);
  },
  /**
   * Info notify function
   *
   * @param {string} message Message to show
   * @param {function} callback onClick callback function
   */
  notifyInfo(message, callback) {
    this.notiflix.Notify.Info(message, callback);
  },
  /**
   * Base report function.
   *
   * @param {'success'|'failure'|'warning'|'info'} type Type of function to call
   * @param {string} title Title to show
   * @param {string} message Message to show
   * @param {string} btnText Button text on screen
   * @param {function} callback onClick callback function
   */
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
  /**
   * Success report function
   *
   * @param {string} title Title to show
   * @param {string} message Message to show
   * @param {string} btnText Button text on screen
   * @param {function} callback onClick callback function
   */
  reportSuccess(title, message, btnText, callback) {
    this.notiflix.Report.Success(title, message, btnText, callback);
  },
  /**
   * Failure report function
   *
   * @param {string} title Title to show
   * @param {string} message Message to show
   * @param {string} btnText Button text on screen
   * @param {function} callback onClick callback function
   */
  reportFailure(title, message, btnText, callback) {
    this.notiflix.Report.Failure(title, message, btnText, callback);
  },
  /**
   * Warning report function
   *
   * @param {string} title Title to show
   * @param {string} message Message to show
   * @param {string} btnText Button text on screen
   * @param {function} callback onClick callback function
   */
  reportWarning(title, message, btnText, callback) {
    this.notiflix.Report.Warning(title, message, btnText, callback);
  },
  /**
   * Info report function
   *
   * @param {string} title Title to show
   * @param {string} message Message to show
   * @param {string} btnText Button text on screen
   * @param {function} callback onClick callback function
   */
  reportInfo(title, message, btnText, callback) {
    this.notiflix.Report.Info(title, message, btnText, callback);
  },
  /**
   * Base loading function.
   *
   * @param {'standard'|'hourglass'|'circle'|'arrows'|'dots'|'pulse'|'custom'} type Type of function to call
   * @param {string} message Message to show
   */
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
  /**
   * Standard loading function
   *
   * @param {string} message Message to show
   */
  loadingStandard(message) {
    this.notiflix.Loading.Standard(message);
  },
  /**
   * Hourglass loading function
   *
   * @param {string} message Message to show
   */
  loadingHourglass(message) {
    this.notiflix.Loading.Hourglass(message);
  },
  /**
   * Circle loading function
   *
   * @param {string} message Message to show
   */
  loadingCircle(message) {
    this.notiflix.Loading.Circle(message);
  },
  /**
   * Arrows loading function
   *
   * @param {string} message Message to show
   */
  loadingArrows(message) {
    this.notiflix.Loading.Arrows(message);
  },
  /**
   * Dots loading function
   *
   * @param {string} message Message to show
   */
  loadingDots(message) {
    this.notiflix.Loading.Dots(message);
  },
  /**
   * Pulse loading function
   *
   * @param {string} message Message to show
   */
  loadingPulse(message) {
    this.notiflix.Loading.Pulse(message);
  },
  /**
   * Custom loading function
   *
   * @param {string} message Message to show
   */
  loadingCustom(message) {
    this.notiflix.Loading.Custom(message);
  },
  /**
   * Change loading function,
   * changes the message on screen with new message
   *
   * @param {string} message Message to show
   */
  loadingChange(message) {
    this.notiflix.Loading.Change(message);
  },
  /**
   * Remove loading function,
   * removes the loading screen immediately or after the timeout milliseconds later.
   *
   * @param {number} timeout
   */
  loadingRemove(timeout) {
    this.notiflix.Loading.Remove(timeout);
  },
  /**
   * Base confirm function
   *
   * @param {string} title Title to show
   * @param {string} message Message to show
   * @param {string} okBtnText OK button text on screen
   * @param {string} cancelBtnText Cancel button text on screen
   * @param {function} okClick okClick callback function
   * @param {function} cancelClick cancelClick callback function
   */
  confirm(title, message, okBtnText, cancelBtnText, okClick, cancelClick) {
    this.notiflix.Confirm.Show(
      title,
      message,
      okBtnText,
      cancelBtnText,
      okClick,
      cancelClick
    );
  }
});
