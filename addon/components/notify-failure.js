import NotifyComponent from './notify';

export default class NotifyFailureComponent extends NotifyComponent {
  constructor() {
    super(...arguments, 'failure');
  }
}
