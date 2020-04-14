/** @documenter yuidoc */
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import Component from '@glimmer/component';

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
  @computed('args.type')
  get type() {
    return this.args.type || this._type;
  }
  /**
   * Title of the report
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
   * Button text to close report
   *
   * Default: OK
   *
   * @argument btnText
   * @type string
   */
  @computed('args.btnText')
  get btnText() {
    return this.args.btnText || 'OK';
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

    this._displayReport();
  }

  _displayReport() {
    if (this.options) {
      this.notiflix._reportMerge(this.options);
    }

    this.notiflix.report(this.type, this.title, this.message, this.btnText, this.onClick);
  }
}
