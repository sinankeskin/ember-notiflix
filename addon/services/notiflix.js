import Service from '@ember/service';
import { assert } from '@ember/debug';
import { getOwner } from '@ember/application';

/**
 * Notiflix service
 *
 * Service that responsible for notify, report, loading and confirm functionalities.
 *
 * Usage:
 *
 * ```javascript
 * import Component from '@glimmer/component';
 * import { inject as service } from '@ember/service';
 *
 * export default class MyComponent extends Component {
 *  @service
 *  notiflix;
 * }
 * ```
 * @class Notiflix
 * @public
 */
export default class NotiflixService extends Service {
  notiflix = null;

  get config() {
    const config =
      getOwner(this).resolveRegistration('config:environment') || {};

    return config['ember-notiflix'] || {};
  }

  constructor() {
    super(...arguments);

    this.notiflix = this.notiflix || (window ? window.Notiflix : null);

    assert(
      "Seems like Notiflix library couldn't bind to the window object. Try npm install.",
      this.notiflix != null
    );

    this.notiflix.Notify.Init(this.config['notify'] || {});
    this.notiflix.Report.Init(this.config['report'] || {});
    this.notiflix.Loading.Init(this.config['loading'] || {});
    this.notiflix.Confirm.Init(this.config['confirm'] || {});
    this.notiflix.Block.Init(this.config['block'] || {});
  }

  /**
   * Base merge function for override initial settings.
   *
   * @private
   * @method merge
   * @param {'notify'|'report'|'loading'|'confirm'|'block'} type Type of function to call
   * @param {object} options Options to override
   */
  _merge(type, options) {
    switch (type) {
      case 'notify':
        this._notifyMerge(options);
        break;
      case 'report':
        this._reportMerge(options);
        break;
      case 'loading':
        this._loadingMerge(options);
        break;
      case 'confirm':
        this._confirmMerge(options);
        break;
      case 'block':
        this._blockMerge(options);
        break;
      default:
        break;
    }
  }
  /**
   * Notify functionality only merge function for override initial settings.
   *
   * @private
   * @method _notifyMerge
   * @param {object} options Options to override
   */
  _notifyMerge(options) {
    this.notiflix.Notify.Merge(options);
  }
  /**
   * Report functionality only merge function for override initial settings.
   *
   * @private
   * @method _reportMerge
   * @param {object} options Options to override
   */
  _reportMerge(options) {
    this.notiflix.Report.Merge(options);
  }
  /**
   * Loading functionality only merge function for override initial settings.
   *
   * @private
   * @method _loadingMerge
   * @param {object} options Options to override
   */
  _loadingMerge(options) {
    this.notiflix.Loading.Merge(options);
  }
  /**
   * Confirm functionality only merge function for override initial settings.
   *
   * @private
   * @method _confirmMerge
   * @param {object} options Options to override
   */
  _confirmMerge(options) {
    this.notiflix.Confirm.Merge(options);
  }
  /**
   * Block functionality only merge function for override initial settings.
   *
   * @private
   * @method _blockMerge
   * @param {object} options Options to override
   */
  _blockMerge(options) {
    this.notiflix.Block.Merge(options);
  }
  /**
   * Base notify function.
   *
   * Default Type: 'success'
   *
   * @method notify
   * @param {'success'|'failure'|'warning'|'info'} type Type of function to call
   * @param {string} message Message to show
   * @param {function} callback onClick callback function
   * @param {object} options Options to override
   */
  notify(type, message, callback, options) {
    switch (type) {
      case 'success':
        this.notifySuccess(message, callback, options);
        break;
      case 'failure':
        this.notifyFailure(message, callback, options);
        break;
      case 'warning':
        this.notifyWarning(message, callback, options);
        break;
      case 'info':
        this.notifyInfo(message, callback, options);
        break;
      default:
        this.notifySuccess(message, callback, options);
        break;
    }
  }
  /**
   * Success notify function
   *
   * @method notifySuccess
   * @param {string} message Message to show
   * @param {function} callback onClick callback function
   * @param {object} options Options to override
   */
  notifySuccess(message, callback, options) {
    if (options) {
      this.notiflix.Notify.Merge(options);
    }

    this.notiflix.Notify.Success(message, callback);
  }
  /**
   * Failure notify function
   *
   * @method notifyFailure
   * @param {string} message Message to show
   * @param {function} callback onClick callback function
   * @param {object} options Options to override
   */
  notifyFailure(message, callback, options) {
    if (options) {
      this.notiflix.Notify.Merge(options);
    }

    this.notiflix.Notify.Failure(message, callback);
  }
  /**
   * Warning notify function
   *
   * @method notifyWarning
   * @param {string} message Message to show
   * @param {function} callback onClick callback function
   * @param {object} options Options to override
   */
  notifyWarning(message, callback, options) {
    if (options) {
      this.notiflix.Notify.Merge(options);
    }

    this.notiflix.Notify.Warning(message, callback);
  }
  /**
   * Info notify function
   *
   * @method notifyInfo
   * @param {string} message Message to show
   * @param {function} callback onClick callback function
   * @param {object} options Options to override
   */
  notifyInfo(message, callback, options) {
    if (options) {
      this.notiflix.Notify.Merge(options);
    }

    this.notiflix.Notify.Info(message, callback);
  }
  /**
   * Base report function.
   *
   * Default Type: 'success'
   *
   * @method report
   * @param {'success'|'failure'|'warning'|'info'} type Type of function to call
   * @param {string} title Title to show
   * @param {string} message Message to show
   * @param {string} btnText Button text on screen
   * @param {function} callback onClick callback function
   * @param {object} options Options to override
   */
  report(type, title, message, btnText, callback, options) {
    switch (type) {
      case 'success':
        this.reportSuccess(title, message, btnText, callback, options);
        break;
      case 'failure':
        this.reportFailure(title, message, btnText, callback, options);
        break;
      case 'warning':
        this.reportWarning(title, message, btnText, callback, options);
        break;
      case 'info':
        this.reportInfo(title, message, btnText, callback, options);
        break;
      default:
        this.reportSuccess(title, message, btnText, callback, options);
        break;
    }
  }
  /**
   * Success report function
   *
   * @method reportSuccess
   * @param {string} title Title to show
   * @param {string} message Message to show
   * @param {string} btnText Button text on screen
   * @param {function} callback onClick callback function
   * @param {object} options Options to override
   */
  reportSuccess(title, message, btnText, callback, options) {
    if (options) {
      this.notiflix.Report.Merge(options);
    }

    this.notiflix.Report.Success(title, message, btnText, callback);
  }
  /**
   * Failure report function
   *
   * @method reportFailure
   * @param {string} title Title to show
   * @param {string} message Message to show
   * @param {string} btnText Button text on screen
   * @param {function} callback onClick callback function
   * @param {object} options Options to override
   */
  reportFailure(title, message, btnText, callback, options) {
    if (options) {
      this.notiflix.Report.Merge(options);
    }

    this.notiflix.Report.Failure(title, message, btnText, callback);
  }
  /**
   * Warning report function
   *
   * @method reportWarning
   * @param {string} title Title to show
   * @param {string} message Message to show
   * @param {string} btnText Button text on screen
   * @param {function} callback onClick callback function
   * @param {object} options Options to override
   */
  reportWarning(title, message, btnText, callback, options) {
    if (options) {
      this.notiflix.Report.Merge(options);
    }

    this.notiflix.Report.Warning(title, message, btnText, callback);
  }
  /**
   * Info report function
   *
   * @method reportInfo
   * @param {string} title Title to show
   * @param {string} message Message to show
   * @param {string} btnText Button text on screen
   * @param {function} callback onClick callback function
   * @param {object} options Options to override
   */
  reportInfo(title, message, btnText, callback, options) {
    if (options) {
      this.notiflix.Report.Merge(options);
    }

    this.notiflix.Report.Info(title, message, btnText, callback);
  }
  /**
   * Base loading function.
   *
   * Default Type: 'standard'
   *
   * @method loading
   * @param {'standard'|'hourglass'|'circle'|'arrows'|'dots'|'pulse'|'custom'} type Type of function to call
   * @param {string} message Message to show
   * @param {object} options Options to override
   */
  loading(type, message, options) {
    switch (type) {
      case 'standard':
        this.loadingStandard(message, options);
        break;
      case 'hourglass':
        this.loadingHourglass(message, options);
        break;
      case 'circle':
        this.loadingCircle(message, options);
        break;
      case 'arrows':
        this.loadingArrows(message, options);
        break;
      case 'dots':
        this.loadingDots(message, options);
        break;
      case 'pulse':
        this.loadingPulse(message, options);
        break;
      case 'custom':
        this.loadingCustom(message, options);
        break;
      default:
        this.loadingStandard(message, options);
        break;
    }
  }
  /**
   * Standard loading function
   *
   * @method loadingStandard
   * @param {string} message Message to show
   * @param {object} options Options to override
   */
  loadingStandard(message, options) {
    if (options) {
      this.notiflix.Loading.Merge(options);
    }

    this.notiflix.Loading.Standard(message);
  }
  /**
   * Hourglass loading function
   *
   * @method loadingHourglass
   * @param {string} message Message to show
   * @param {object} options Options to override
   */
  loadingHourglass(message, options) {
    if (options) {
      this.notiflix.Loading.Merge(options);
    }

    this.notiflix.Loading.Hourglass(message);
  }
  /**
   * Circle loading function
   *
   * @method loadingCircle
   * @param {string} message Message to show
   * @param {object} options Options to override
   */
  loadingCircle(message, options) {
    if (options) {
      this.notiflix.Loading.Merge(options);
    }

    this.notiflix.Loading.Circle(message);
  }
  /**
   * Arrows loading function
   *
   * @method loadingArrows
   * @param {string} message Message to show
   * @param {object} options Options to override
   */
  loadingArrows(message, options) {
    if (options) {
      this.notiflix.Loading.Merge(options);
    }

    this.notiflix.Loading.Arrows(message);
  }
  /**
   * Dots loading function
   *
   * @method loadingDots
   * @param {string} message Message to show
   * @param {object} options Options to override
   */
  loadingDots(message, options) {
    if (options) {
      this.notiflix.Loading.Merge(options);
    }

    this.notiflix.Loading.Dots(message);
  }
  /**
   * Pulse loading function
   *
   * @method loadingPulse
   * @param {string} message Message to show
   * @param {object} options Options to override
   */
  loadingPulse(message, options) {
    if (options) {
      this.notiflix.Loading.Merge(options);
    }

    this.notiflix.Loading.Pulse(message);
  }
  /**
   * Custom loading function
   *
   * @method loadingCustom
   * @param {string} message Message to show
   * @param {object} options Options to override
   */
  loadingCustom(message, options) {
    if (options) {
      this.notiflix.Loading.Merge(options);
    }

    this.notiflix.Loading.Custom(message);
  }
  /**
   * Change loading function,
   * changes the message on screen with new message
   *
   * @method loadingChange
   * @param {string} message Message to show
   */
  loadingChange(message) {
    this.notiflix.Loading.Change(message);
  }
  /**
   * Remove loading function,
   * removes the loading screen immediately or after the timeout milliseconds later.
   *
   * @method loadingRemove
   * @param {number} timeout
   */
  loadingRemove(timeout) {
    this.notiflix.Loading.Remove(timeout);
  }
  /**
   * Base confirm function
   *
   * @method confirm
   * @param {string} title Title to show
   * @param {string} message Message to show
   * @param {string} okBtnText OK button text on screen
   * @param {string} cancelBtnText Cancel button text on screen
   * @param {function} okClick okClick callback function
   * @param {function} cancelClick cancelClick callback function
   * @param {object} options Options to override
   */
  confirm(
    title,
    message,
    okBtnText,
    cancelBtnText,
    okClick,
    cancelClick,
    options
  ) {
    if (options) {
      this.notiflix.Confirm.Merge(options);
    }

    this.notiflix.Confirm.Show(
      title,
      message,
      okBtnText,
      cancelBtnText,
      okClick,
      cancelClick
    );
  }
  /**
   * Ask function
   *
   * @method ask
   * @param {string} title Title of the question
   * @param {string} question Question to show
   * @param {string} answer Answer to show
   * @param {string} okBtnText OK button text on screen
   * @param {string} cancelBtnText Cancel button text on screen
   * @param {function} okClick okClick callback function
   * @param {function} cancelClick cancelClick callback function
   * @param {object} options Options to override
   */
  ask(
    title,
    question,
    answer,
    okBtnText,
    cancelBtnText,
    okClick,
    cancelClick,
    options
  ) {
    if (options) {
      this.notiflix.Confirm.Merge(options);
    }

    this.notiflix.Confirm.Ask(
      title,
      question,
      answer,
      okBtnText,
      cancelBtnText,
      okClick,
      cancelClick
    );
  }
  /**
   * Base block function.
   *
   * Default Type: 'standard'
   *
   * @method block
   * @param {'standard'|'hourglass'|'circle'|'arrows'|'dots'|'pulse'} type Type of function to call
   * @param {string} elements Elements to block, (ID or Class)
   * @param {string} message Message to show
   * @param {object} options Options to override
   */
  block(type, elements, message, options) {
    switch (type) {
      case 'standard':
        this.blockStandard(elements, message, options);
        break;
      case 'hourglass':
        this.blockHourglass(elements, message, options);
        break;
      case 'circle':
        this.blockCircle(elements, message, options);
        break;
      case 'arrows':
        this.blockArrows(elements, message, options);
        break;
      case 'dots':
        this.blockDots(elements, message, options);
        break;
      case 'pulse':
        this.blockPulse(elements, message, options);
        break;
      default:
        this.blockStandard(elements, message, options);
        break;
    }
  }
  /**
   * Standard block function
   *
   * @method blockStandard
   * @param {string} elements Elements to block, (ID or Class)
   * @param {string} message Message to show
   * @param {object} options Options to override
   */
  blockStandard(elements, message, options) {
    if (options) {
      this.notiflix.Block.Merge(options);
    }

    this.notiflix.Block.Standard(elements, message);
  }
  /**
   * Hourglass block function
   *
   * @method blockHourglass
   * @param {string} message Message to show
   * @param {object} options Options to override
   */
  blockHourglass(elements, message, options) {
    if (options) {
      this.notiflix.Block.Merge(options);
    }

    this.notiflix.Block.Hourglass(elements, message);
  }
  /**
   * Circle block function
   *
   * @method blockCircle
   * @param {string} elements Elements to block, (ID or Class)
   * @param {string} message Message to show
   * @param {object} options Options to override
   */
  blockCircle(elements, message, options) {
    if (options) {
      this.notiflix.Block.Merge(options);
    }

    this.notiflix.Block.Circle(elements, message);
  }
  /**
   * Arrows block function
   *
   * @method blockArrows
   * @param {string} elements Elements to block, (ID or Class)
   * @param {string} message Message to show
   * @param {object} options Options to override
   */
  blockArrows(elements, message, options) {
    if (options) {
      this.notiflix.Block.Merge(options);
    }

    this.notiflix.Block.Arrows(elements, message);
  }
  /**
   * Dots block function
   *
   * @method blockDots
   * @param {string} elements Elements to block, (ID or Class)
   * @param {string} message Message to show
   * @param {object} options Options to override
   */
  blockDots(elements, message, options) {
    if (options) {
      this.notiflix.Block.Merge(options);
    }

    this.notiflix.Block.Dots(elements, message);
  }
  /**
   * Pulse block function
   *
   * @method blockPulse
   * @param {string} elements Elements to block, (ID or Class)
   * @param {string} message Message to show
   * @param {object} options Options to override
   */
  blockPulse(elements, message, options) {
    if (options) {
      this.notiflix.Block.Merge(options);
    }

    this.notiflix.Block.Pulse(elements, message);
  }
  /**
   * Remove block function,
   * Removes the block screen immediately or after the timeout milliseconds later.
   *
   * @method blockRemove
   * @param {string} elements Elements to block, (ID or Class)
   * @param {number} timeout
   */
  blockRemove(elements, timeout) {
    this.notiflix.Block.Remove(elements, timeout);
  }
}
