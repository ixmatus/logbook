define([
  'backbone',
  'react',
  'jsx!components/hello',
  'jsx!components/watchdevice',
  'jsx!components/watchall'
], function(Backbone, React, CompHello, WatchDevice, WatchAll) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '':               'defaultPath',
      'logs':           'watchAll',
      'logs/:aid':      'watchAccount',
      'logs/:aid/:did': 'watchDevice'
    }
  });
  
  return function() {
    
    var appR = new AppRouter();
    
    appR.on('route:defaultPath', function() {
      React.renderComponent(new CompHello(), document.getElementById("content"));
    });

    appR.on('route:watchAll', function() {
      React.renderComponent(new WatchAll(), document.getElementById("content"));
    });

    appR.on('route:watchDevice', function(aid, did) {
      React.renderComponent(new WatchDevice({
        accountID: aid,
        deviceID: did
      }), document.getElementById("content"));
    });
    
    Backbone.history.start({
      pushState: false
    });
  };
});
