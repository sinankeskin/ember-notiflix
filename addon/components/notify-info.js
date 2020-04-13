import NotifyComponent from './notify';

export default class NotifyInfoComponent extends NotifyComponent {
  constructor() {
    super(...arguments, 'info');
  }
}
