/** @documenter yuidoc */
import Component from '@glimmer/component';
import { cached } from 'tracked-toolbox';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

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
  @cached
  get type() {
    return this.args.type || this._type;
  }
  /**
   * Elements to block. (ID or Class)
   *
   * @argument elements
   * @type string
   */
  @cached
  get elements() {
    return this.args.elements || '';
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

    set(this, '_type', arguments[2] || 'standard');

    this._displayBlock();
  }

  _displayBlock() {
    if (this.options) {
      this.notiflix._blockMerge(this.options);
    }

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
    this.notiflix.blockRemove(elements, delay);
  }
}
