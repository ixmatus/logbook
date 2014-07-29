(function() {
    // :-(
    // make this file work in the mainConfigFile option as well as directly in the browser
    if (!window.require) {
        window.require = {
            config: function(config) {
                window.require = config;
            }
        };
    }

    require.config({
      baseUrl: '/static/src/',
      paths: {
        jquery:     'vendors/jquery/dist/jquery.min',
        underscore: 'vendors/underscore-amd/underscore-min',
        backbone:   'vendors/backbone-amd/backbone-min',
        mustache:   'vendors/mustache/mustache',
        text:       'vendors/text/text',
        foundation: 'vendors/foundation/js/foundation.min',
        modernizr:  'vendors/modernizr/modernizr',
        react:      'vendors/jsx-requirejs-plugin/js/react-with-addons-0.10.0',
        jsx:        'vendors/jsx-requirejs-plugin/js/jsx',
        JSXTransformer: 'vendors/jsx-requirejs-plugin/js/JSXTransformer-0.10.0',

        /* This let's us switch easily between the compiled version
           and the non-compiled version
        */

        //app:       '../dist/app.min'
      },

      shim: {
        modernizr: {
          deps: ['jquery']
        },
        foundation: {
          deps: ['jquery', 'modernizr']
        },
      },

      jsx: {
        fileExtension: ".jsx"
      }
    });
    require(["app"]);
}());
