// public parts of the plugin (i.e. parts that reside in the public folder and will be transfered to the client)
// must be AMD modules (RequireJS)
define(function(require) {

    // Include our custom CSS (LESS also works)
    require('plugins/simple_clock/clock.css');

    // Create an Angular module for this plugin
    var module = require('ui/modules').get('simple_clock');
    // Add a controller to this module
    module.controller('ClockController', function($scope, $timeout) {
        var setTime = function() {
            $scope.time = Date.now();
            $timeout(setTime, 1000);
        };
        setTime();
    });

    function ClockProvider(Private) {
        // Load TemplateVisType
        var TemplateVisType = Private(require('ui/template_vis_type/TemplateVisType'));

        // Return a new instance describing this visualization
        return new TemplateVisType({
            name: 'trClock',
            title: 'Clock',
            icon: 'fa-clock-o',
            description: 'Add a digital clock to your dashboards.',
            requiresSearch: false,
            template: require('plugins/simple_clock/clock.html'),
            params: {
                editor: require('plugins/simple_clock/clock-editor.html'),
                defaults: {
                    format: 'HH:mm:ss'
                }
            }
        });
    }

    // Register the above provider to the visualization registry
    require('ui/registry/vis_types').register(ClockProvider);

    return ClockProvider;

});
