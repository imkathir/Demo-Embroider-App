import Route from '@ember/routing/route';

export default Route.extend({
  imageSrc:'assets/images/vegetable',
  altText:'vegetable',
  model () {
    let model = [
      {name:'Tomato'},
      {name:'Onion'},
      {name:'Beans'}
    ], i=0;
    model.forEach((vegetable) => {
      i++;
      vegetable.alt=this.altText+i;
      vegetable.src=this.imageSrc+i+'.jpg';
    });
      return model;
  }
});