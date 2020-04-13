import LoadingComponent from './loading';

export default class LoadingCircleComponent extends LoadingComponent {
  constructor() {
    super(...arguments, 'circle');
  }
}
