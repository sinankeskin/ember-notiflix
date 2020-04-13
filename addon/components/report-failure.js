import ReportComponent from './report';

export default class ReportFailureComponent extends ReportComponent {
  constructor() {
    super(...arguments, 'failure');
  }
}
