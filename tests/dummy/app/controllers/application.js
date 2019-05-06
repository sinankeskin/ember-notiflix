import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    showAlert(message) {
      alert(message);
    }
  }
});
