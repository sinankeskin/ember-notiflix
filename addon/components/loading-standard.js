import LoadingComponent from './loading';

export default class LoadingStandardComponent extends LoadingComponent {
  constructor() {
    super(...arguments, 'standard');
  }
}
