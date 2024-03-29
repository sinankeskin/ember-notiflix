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

    this.notiflix.Notify.init(this.config['notify'] || {});
    this.notiflix.Report.init(this.config['report'] || {});
    this.notiflix.Loading.init(this.config['loading'] || {});
    this.notiflix.Confirm.init(this.config['confirm'] || {});
    this.notiflix.Block.init(this.config['block'] || {});
  }

  /**
   * Base merge function for override initial settings.
   *
   * @public
   * @method merge
   * @param {'notify'|'report'|'loading'|'confirm'|'block'} type Type of function to call
   * @param {object} options Options to override
   */
  merge(type, options) {
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
    this.notiflix.Notify.merge(options);
  }
  /**
   * Report functionality only merge function for override initial settings.
   *
   * @private
   * @method _reportMerge
   * @param {object} options Options to override
   */
  _reportMerge(options) {
    this.notiflix.Report.merge(options);
  }
  /**
   * Loading functionality only merge function for override initial settings.
   *
   * @private
   * @method _loadingMerge
   * @param {object} options Options to override
   */
  _loadingMerge(options) {
    this.notiflix.Loading.merge(options);
  }
  /**
   * Confirm functionality only merge function for override initial settings.
   *
   * @private
   * @method _confirmMerge
   * @param {object} options Options to override
   */
  _confirmMerge(options) {
    this.notiflix.Confirm.merge(options);
  }
  /**
   * Block functionality only merge function for override initial settings.
   *
   * @private
   * @method _blockMerge
   * @param {object} options Options to override
   */
  _blockMerge(options) {
    this.notiflix.Block.merge(options);
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
      this._notifyMerge(options);
    }

    this.notiflix.Notify.success(message, callback);
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
      this._notifyMerge(options);
    }

    this.notiflix.Notify.failure(message, callback);
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
      this._notifyMerge(options);
    }

    this.notiflix.Notify.warning(message, callback);
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
      this._notifyMerge(options);
    }

    this.notiflix.Notify.info(message, callback);
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
      this._reportMerge(options);
    }

    this.notiflix.Report.success(title, message, btnText, callback);
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
      this._reportMerge(options);
    }

    this.notiflix.Report.failure(title, message, btnText, callback);
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
      this._reportMerge(options);
    }

    this.notiflix.Report.warning(title, message, btnText, callback);
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
      this._reportMerge(options);
    }

    this.notiflix.Report.info(title, message, btnText, callback);
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
      this._loadingMerge(options);
    }

    this.notiflix.Loading.standard(message);
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
      this._loadingMerge(options);
    }

    this.notiflix.Loading.hourglass(message);
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
      this._loadingMerge(options);
    }

    this.notiflix.Loading.circle(message);
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
      this._loadingMerge(options);
    }

    this.notiflix.Loading.arrows(message);
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
      this._loadingMerge(options);
    }

    this.notiflix.Loading.dots(message);
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
      this._loadingMerge(options);
    }

    this.notiflix.Loading.pulse(message);
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
      this._loadingMerge(options);
    }

    this.notiflix.Loading.custom(message);
  }
  /**
   * Change loading function,
   * changes the message on screen with new message
   *
   * @method loadingChange
   * @param {string} message Message to show
   */
  loadingChange(message) {
    this.notiflix.Loading.change(message);
  }
  /**
   * Remove loading function,
   * removes the loading screen immediately or after the timeout milliseconds later.
   *
   * @method loadingRemove
   * @param {number} timeout
   */
  loadingRemove(timeout) {
    this.notiflix.Loading.remove(timeout);
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
      this._confirmMerge(options);
    }

    this.notiflix.Confirm.show(
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
      this._confirmMerge(options);
    }

    this.notiflix.Confirm.ask(
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
   * Prompt function
   *
   * @method prompt
   * @param {string} title Title of the question
   * @param {string} question Question to show
   * @param {string} answer Answer to show
   * @param {string} okBtnText OK button text on screen
   * @param {string} cancelBtnText Cancel button text on screen
   * @param {function} okClick okClick callback function
   * @param {function} cancelClick cancelClick callback function
   * @param {object} options Options to override
   */
  prompt(
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
      this._confirmMerge(options);
    }

    this.notiflix.Confirm.prompt(
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
      this._blockMerge(options);
    }

    this.notiflix.Block.standard(elements, message);
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
      this._blockMerge(options);
    }

    this.notiflix.Block.hourglass(elements, message);
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
      this._blockMerge(options);
    }

    this.notiflix.Block.circle(elements, message);
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
      this._blockMerge(options);
    }

    this.notiflix.Block.arrows(elements, message);
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
      this._blockMerge(options);
    }

    this.notiflix.Block.dots(elements, message);
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
      this._blockMerge(options);
    }

    this.notiflix.Block.pulse(elements, message);
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
    this.notiflix.Block.remove(elements, timeout);
  }
}
