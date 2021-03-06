import Ember from 'ember';

export default Ember.Mixin.create({
  touchStart: function(e){
    return this.down(e);
  },
  mouseDown: function(e){
    this.down(e);
  },
  touchEnd: function(e){
    return this.up(e);
  },
  mouseUp: function(e){
    return this.up(e);
  },
  touchCancel: function(e){
    return this.up(e);
  },
  mouseLeave: function(e){
    return this.up(e);
  },
  up: Ember.K,
  down: Ember.K,
  contextMenu: Ember.K
});