import Route from '@ember/routing/route';

export default Route.extend({
  imageSrc:'assets/images/cow',
  altText:'Cow',
  model () {
    let model = [
      {name:'Cow calf'},
      {name:'Calves'},
      {name:'Cow'},
      {name:'Native Bull'}
    ], i=0;
    model.forEach((vegetable) => {
      i++;
      vegetable.alt=this.altText+i;
      vegetable.src=this.imageSrc+i+'.jpg';
    });
      return model;
  }
});
