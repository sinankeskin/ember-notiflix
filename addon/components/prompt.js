/** @documenter yuidoc */
import Component from '@glimmer/component';
import { cached } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

/**
 * Prompt component
 *
 * Usage:
 *
 * #### Handlebars
 * ```hbs
 * <Prompt @title="Where is Padmé?" @question="Is she safe? Is she all right?" @answer="It seems, in your anger, you killed her." @okBtnText="Answer" @cancelBtnText="Cancel" @okClick={{fn this.showAlert "Message"}} @cancelClick={{fn this.showAlert "Message"}} />
 * ```
 * #### JavaScript
 * ```js
 * this.notiflix.prompt(title, question, answer, okBtnText, cancelBtnText, okClick, cancelClick);
 * ```
 * @class Prompt
 * @public
 */
export default class PromptComponent extends Component {
  /**
   * Injected Notiflix service
   *
   * @property notiflix
   * @type Notiflix
   */
  @service
  notiflix;
  /**
   * Title of the question
   *
   * @argument title
   * @type string
   */
  @cached
  get title() {
    return this.args.title || '';
  }
  /**
   * Question to show
   *
   * @argument question
   * @type string
   */
  @cached
  get question() {
    return this.args.question || '';
  }
  /**
   * Answer to show
   *
   * @argument answer
   * @type string
   */
  @cached
  get answer() {
    return this.args.answer || '';
  }
  /**
   * OK button text
   *
   * @argument okBtnText
   * @type string
   */
  @cached
  get okBtnText() {
    return this.args.okBtnText || '';
  }
  /**
   * Cancel button text
   *
   * @argument cancelBtnText
   * @type string
   */
  @cached
  get cancelBtnText() {
    return this.args.cancelBtnText || '';
  }
  /**
   * OK click callback
   *
   * @argument okClick
   * @type function
   */
  @cached
  get okClick() {
    return this.args.okClick;
  }
  /**
   * Cancel click callback
   *
   * @argument cancelClick
   * @type function
   */
  @cached
  get cancelClick() {
    return this.args.cancelClick;
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

    this._displayPrompt();
  }

  _displayPrompt() {
    if (this.options) {
      this.notiflix._confirmMerge(this.options);
    }

    this.notiflix.prompt(
      this.title,
      this.question,
      this.answer,
      this.okBtnText,
      this.cancelBtnText,
      this.okClick,
      this.cancelClick
    );
  }
}
