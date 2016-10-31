'use strict';

module.exports = {
  template: require('./thumbnail.html'),
  controllerAs: 'thumbnailCtrl',
  controller: ['$log', 'picService', thumbnailController],
  bindings: {
    pic: '<',
  },
};

function thumbnailController($log, picService){
  $log.debug('init picService');

  this.deletePic = function(){
    $log.debug('thumbnailCtrl.deletePic()');
  };
}
