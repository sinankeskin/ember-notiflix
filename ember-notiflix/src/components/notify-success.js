import NotifyComponent from './notify';

export default class NotifySuccessComponent extends NotifyComponent {
  constructor() {
    super(...arguments, 'success');
  }
}
