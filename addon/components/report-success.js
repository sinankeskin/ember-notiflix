import ReportComponent from './report';

export default class ReportInfoComponent extends ReportComponent {
  constructor() {
    super(...arguments, 'success');
  }
}
