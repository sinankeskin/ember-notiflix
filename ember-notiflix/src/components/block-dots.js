import BlockComponent from './block';

export default class BlockDotsComponent extends BlockComponent {
  constructor() {
    super(...arguments, 'dots');
  }
}
