import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    findDuplicates() {
      let dupString = this.get('dupString') || '';
      let strArray = dupString.split(',') || [];
      let uniqueArray = strArray.filter((item, index) => strArray.indexOf(item) === index)
      this.set('uniqueArray', [...new Set(uniqueArray)]);
      let dupArray = strArray.filter((item, index) => strArray.indexOf(item) !== index)
      dupArray = [...new Set(dupArray)];
      this.set('dupArray', dupArray);
    }
  }
});
