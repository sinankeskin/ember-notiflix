import LoadingComponent from './loading';

export default class LoadingPulseComponent extends LoadingComponent {
  constructor() {
    super(...arguments, 'pulse');
  }
}
