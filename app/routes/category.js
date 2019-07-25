import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return [
      { name:'Animals', route: 'animals' },
      { name:'Vegetables', route: 'vegetables' },
      { name:'Birds', route: 'birds' }
    ];
  }
});
