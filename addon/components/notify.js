/** @documenter yuidoc */
import Component from '@glimmer/component';
import { cached } from 'tracked-toolbox';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

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
  @cached
  get type() {
    return this.args.type || this._type;
  }
  /**
   * Message to show
   *
   * @argument message
   * @type string
   */
  @cached
  get message() {
    return this.args.message || '';
  }
  /**
   * onClick callback
   *
   * @argument onClick
   * @type function
   */
  @cached
  get onClick() {
    return this.args.onClick;
  }
  /**
   * Options to merge
   *
   * @argument options
   * @type object
   */
  @cached
  get options() {
    return this.args.options;
  }

  constructor() {
    super(...arguments);

    set(this, '_type', arguments[2] || 'success');

    this._displayNotify();
  }

  _displayNotify() {
    if (this.options) {
      this.notiflix._notifyMerge(this.options);
    }

    this.notiflix.notify(this.type, this.message, this.onClick);
  }
}
