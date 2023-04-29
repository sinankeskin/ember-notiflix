import BlockComponent from './block';

export default class BlockStandardComponent extends BlockComponent {
  constructor() {
    super(...arguments, 'standard');
  }
}
