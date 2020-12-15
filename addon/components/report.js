/** @documenter yuidoc */
import Component from '@glimmer/component';
import { cached } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

/**
 * Report component
 *
 * Usage:
 *
 * #### Handlebars
 * ```hbs
 * <Report @type="success" @title="Success" @message="Message" @btnText="OK" @onClick={{fn this.showAlert "Message"}} />
 * ```
 * #### JavaScript
 * ```js
 * this.notiflix.report(type, title, message, btnText, callback);
 * ```
 * @class Report
 * @public
 */
export default class ReportComponent extends Component {
  /**
   * Injected Notiflix service
   *
   * @property notiflix
   * @type ember/service
   */
  @service
  notiflix;
  /**
   * Type of report
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
   * Title of the report
   *
   * @argument title
   * @type string
   */
  @cached
  get title() {
    return this.args.title || '';
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
   * Button text to close report
   *
   * Default: OK
   *
   * @argument btnText
   * @type string
   */
  @cached
  get btnText() {
    return this.args.btnText || 'OK';
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

    this._displayReport();
  }

  _displayReport() {
    if (this.options) {
      this.notiflix._reportMerge(this.options);
    }

    this.notiflix.report(this.type, this.title, this.message, this.btnText, this.onClick);
  }
}
