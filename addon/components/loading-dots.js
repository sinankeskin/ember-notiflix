import LoadingComponent from './loading';

export default class LoadingDotsComponent extends LoadingComponent {
  constructor() {
    super(...arguments, 'dots');
  }
}
