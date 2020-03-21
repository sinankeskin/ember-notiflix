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
  title = '';
  /**
   * Message to show
   *
   * @argument message
   * @type string
   */
  message = '';
  /**
   * OK button text
   *
   * @argument okBtnText
   * @type string
   */
  okBtnText = '';
  /**
   * Cancel button text
   *
   * @argument cancelBtnText
   * @type string
   */
  cancelBtnText = '';
  /**
   * OK click callback
   *
   * @argument okClick
   * @type function
   */
  okClick() {}
  /**
   * Cancel click callback
   *
   * @argument cancelClick
   * @type function
   */
  cancelClick() {}

  constructor() {
    super(...arguments);

    this._displayConfirm();
  }

  _displayConfirm() {
    this.notiflix.confirm(this.title, this.message, this.okBtnText, this.cancelBtnText, this.okClick, this.cancelClick);
  }
}
