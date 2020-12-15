/** @documenter yuidoc */
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

/**
 * Confirm component
 *
 * Usage:
 *
 * #### Handlebars
 * ```hbs
 * <Confirm @title="Notiflix Confirm" @message="Do you agree with me?" @okBtnText="Yes" @cancelBtnText="No" @onClick={{fn this.showAlert "Message"}} @cancelClick={{fn this.showAlert "Message"}} />
 * ```
 * #### JavaScript
 * ```js
 * this.notiflix.confirm(title, message, okBtnText, cancelBtnText, okClick, cancelClick);
 * ```
 * @class Confirm
 * @public
 */
export default class ConfirmComponent extends Component {
  /**
   * Injected Notiflix service
   *
   * @property notiflix
   * @type Notiflix
   */
  @service
  notiflix;
  /**
   * Title of the confirm
   *
   * @argument title
   * @type string
   */
  get title() {
    return this.args.title || '';
  }
  /**
   * Message to show
   *
   * @argument message
   * @type string
   */
  get message() {
    return this.args.message || '';
  }
  /**
   * OK button text
   *
   * @argument okBtnText
   * @type string
   */
  get okBtnText() {
    return this.args.okBtnText || '';
  }
  /**
   * Cancel button text
   *
   * @argument cancelBtnText
   * @type string
   */
  get cancelBtnText() {
    return this.args.cancelBtnText || '';
  }
  /**
   * OK click callback
   *
   * @argument okClick
   * @type function
   */
  get okClick() {
    return this.args.okClick;
  }
  /**
   * Cancel click callback
   *
   * @argument cancelClick
   * @type function
   */
  get cancelClick() {
    return this.args.cancelClick;
  }
  /**
   * Options to merge
   *
   * @argument options
   * @type object
   */
  get options() {
    return this.args.options;
  }

  constructor() {
    super(...arguments);

    this._displayConfirm();
  }

  _displayConfirm() {
    if (this.options) {
      this.notiflix._confirmMerge(this.options);
    }

    this.notiflix.confirm(this.title, this.message, this.okBtnText, this.cancelBtnText, this.okClick, this.cancelClick);
  }
}
