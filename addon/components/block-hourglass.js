import BlockComponent from './block';

export default class BlockHourglassComponent extends BlockComponent {
  constructor() {
    super(...arguments, 'hourglass');
  }
}
