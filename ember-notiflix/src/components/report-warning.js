import ReportComponent from './report';

export default class ReportWarningComponent extends ReportComponent {
  constructor() {
    super(...arguments, 'warning');
  }
}
