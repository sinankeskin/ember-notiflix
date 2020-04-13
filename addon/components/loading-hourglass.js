import LoadingComponent from './loading';

export default class LoadingHourglassComponent extends LoadingComponent {
  constructor() {
    super(...arguments, 'hourglass');
  }
}
