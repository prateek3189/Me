//Require reference
require.config({
    baseUrl : './javascripts',

    paths: {
      crossroads  : 'libs/crossroads.min',
      handlebars  : 'libs/handlebars.min',
      hasher      : 'libs/hasher.min',
      jquery      : 'libs/jquery.min',
      signals     : 'libs/signals.min',
      text        : 'libs/text'
    },

    //To load the dependencies
    shim : {
      signals: {
          exports: 'signals'
      },
      hasher: {
          deps: ['signals'],
          exports: 'hasher'
      },
      crossroads: {
          deps: ['signals', 'hasher'],
          exports: 'crossroads'
      }
    }
});

require(["routes"]);
