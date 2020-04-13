/** @documenter yuidoc */
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import Component from '@glimmer/component';

/**
 * Notify component
 *
 * Usage:
 *
 * #### Handlebars
 * ```hbs
 * <Notify @type="success" @message="Success" @onClick={{fn this.showAlert "Message"}} />
 * ```
 * #### JavaScript
 * ```js
 * this.notiflix.notify(type, message, callback);
 * ```
 * @class Notify
 * @public
 */
export default class NotifyComponent extends Component {
  /**
   * Injected Notiflix service
   *
   * @property notiflix
   * @type ember/service
   */
  @service
  notiflix;
  /**
   * Type of notify
   *
   * Values: success | failure | warning | info
   *
   * Default: success
   *
   * @argument type
   * @type string
   */
  @computed('args.type')
  get type() {
    return this.args.type || this._type;
  }
  /**
   * Message to show
   *
   * @argument message
   * @type string
   */
  @computed('args.message')
  get message() {
    return this.args.message || '';
  }
  /**
   * onClick callback
   *
   * @argument onClick
   * @type function
   */
  @computed('args.onClick')
  get onClick() {
    return this.args.onClick;
  }
  /**
   * Options to merge
   *
   * @argument options
   * @type object
   */
  @computed('args.options')
  get options() {
    return this.args.options;
  }

  constructor() {
    super(...arguments);

    this._type = arguments[2] || 'success';

    this._displayNotify();
  }

  _displayNotify() {
    if (this.options) {
      this.notiflix.notifyMerge(this.options);
    }

    this.notiflix.notify(this.type, this.message, this.onClick);
  }
}
