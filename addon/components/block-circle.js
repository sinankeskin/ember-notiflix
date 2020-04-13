import BlockComponent from './block';

export default class BlockCircleComponent extends BlockComponent {
  constructor() {
    super(...arguments, 'circle');
  }
}
