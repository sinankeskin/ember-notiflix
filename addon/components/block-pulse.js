import BlockComponent from './block';

export default class BlockPulseComponent extends BlockComponent {
  constructor() {
    super(...arguments, 'pulse');
  }
}
