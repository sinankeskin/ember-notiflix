import NotifyComponent from './notify';

export default class NotifyWarningComponent extends NotifyComponent {
  constructor() {
    super(...arguments, 'warning');
  }
}
