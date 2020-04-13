import LoadingComponent from './loading';

export default class LoadingCustomComponent extends LoadingComponent {
  constructor() {
    super(...arguments, 'custom');
  }
}
