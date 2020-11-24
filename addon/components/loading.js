/** @documenter yuidoc */
import { computed, set } from '@ember/object';

import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

/**
 * Loading component
 *
 * Usage:
 *
 * #### Handlebars
 * ```hbs
 * <Loading @type="standard" @message="Loading..." />
 * ```
 * #### JavaScript
 * ```js
 * this.notiflix.loading(type, message);
 * ```
 * @class Loading
 * @public
 */
export default class LoadingComponent extends Component {
  /**
   * Injected Notiflix service
   *
   * @property notiflix
   * @type ember/service
   */
  @service
  notiflix;
  /**
   * Type of loading screen
   *
   * Values: standard | hourglass | circle | arrows | dots | pulse
   *
   * Default: standard
   *
   * @argument type
   * @type string
   */
  @computed('_type', 'args.type')
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

    set(this, '_type', arguments[2] || 'standard');

    this._displayLoading();
  }

  _displayLoading() {
    if (this.options) {
      this.notiflix._loadingMerge(this.options);
    }

    this.notiflix.loading(this.type, this.message);
  }

  /**
   * To change message on screen
   *
   * @method change
   * @param {string} message
   */
  change(message) {
    this.notiflix.Loading.Change(message);
  }

  /**
   * To remove screen immediately or after delay time (milliseconds)
   *
   * @method remove
   * @param {number} delay, optional
   */
  remove(delay) {
    this.notiflix.Loading.Remove(delay);
  }
}
