
module.exports = function(kibana) {
  return new kibana.Plugin({
     uiExports: {
        visTypes: [
          'plugins/simple_clock/clock'
        ]
      }
  });
};
