/** @documenter yuidoc */
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import Component from '@glimmer/component';

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
  @computed('args.title')
  get title() {
    return this.args.title || '';
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
   * OK button text
   *
   * @argument okBtnText
   * @type string
   */
  @computed('args.okBtnText')
  get okBtnText() {
    return this.args.okBtnText || '';
  }
  /**
   * Cancel button text
   *
   * @argument cancelBtnText
   * @type string
   */
  @computed('args.cancelBtnText')
  get cancelBtnText() {
    return this.args.cancelBtnText || '';
  }
  /**
   * OK click callback
   *
   * @argument okClick
   * @type function
   */
  @computed('args.okClick')
  get okClick() {
    return this.args.okClick;
  }
  /**
   * Cancel click callback
   *
   * @argument cancelClick
   * @type function
   */
  @computed('args.cancelClick')
  get cancelClick() {
    return this.args.cancelClick;
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

    this._displayConfirm();
  }

  _displayConfirm() {
    if (this.options) {
      this.notiflix._confirmMerge(this.options);
    }

    this.notiflix.confirm(this.title, this.message, this.okBtnText, this.cancelBtnText, this.okClick, this.cancelClick);
  }
}
