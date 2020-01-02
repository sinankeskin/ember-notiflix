import { action } from '@ember/object';
import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  @action
  showAlert(message) {
    alert(message);
  }
}
