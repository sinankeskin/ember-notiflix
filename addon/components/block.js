import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

/**
 * Block component
 *
 * Usage:
 *
 * #### Handlebars
 * ```hbs
 * <Block @type="standard" @elements="li.items" @message="Loading..." />
 * ```
 * #### JavaScript
 * ```js
 * this.notiflix.block(type, elements, message);
 * ```
 * @class Block
 * @public
 */
export default class BlockComponent extends Component {
  /**
   * Injected Notiflix service
   *
   * @property notiflix
   * @type ember/service
   */
  @service
  notiflix;
  /**
   * Type of block screen
   *
   * Values: standard | hourglass | circle | arrows | dots | pulse
   *
   * Default: standard
   *
   * @argument type
   * @type string
   */
  type = 'standard';
  /**
   * Elements to block. (ID or Class)
   *
   * @argument elements
   * @type string
   */
  elements = '';
  /**
   * Message to show
   *
   * @argument message
   * @type string
   */
  message = '';

  constructor() {
    super(...arguments);

    this._displayBlock();
  }

  _displayBlock() {
    this.notiflix.block(this.type, this.elements, this.message);
  }

  /**
   * To remove block immediately or after delay time (milliseconds)
   *
   * @method remove
   * @param {string} element
   * @param {number} delay, optional
   */
  remove(elements, delay) {
    this.notiflix.Block.Remove(elements, delay);
  }
}
