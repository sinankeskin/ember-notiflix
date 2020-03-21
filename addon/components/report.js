import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

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
  type = 'success';
  /**
   * Title of the report
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
   * Button text to close report
   *
   * Default: OK
   *
   * @argument btnText
   * @type string
   */
  btnText = 'OK';
  /**
   * onClick callback
   *
   * @argument onClick
   * @type function
   */
  onClick() {}

  constructor() {
    super(...arguments);

    this._displayReport();
  }

  _displayReport() {
    this.notiflix.report(this.type, this.title, this.message, this.btnText, this.onClick);
  }
}
