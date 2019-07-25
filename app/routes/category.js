import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    let arr = [
      { name:'Animals', route: 'animals' },
      { name:'Vegetables', route: 'vegetables' },
      { name:'Birds', route: 'birds' },
      { name:'Tools' }
    ];
    // eslint-disable-next-line no-console
    console.log(arr.filterBy('route'));
    return arr.filterBy('route');
  }
});
