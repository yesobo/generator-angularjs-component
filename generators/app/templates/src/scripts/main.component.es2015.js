import <%= input.capitalizedComponentName %> from './<%= input.name %>.component';

/**
 * @ngdoc component
 * @name ('<%= input.componentName %>'
 * @module 'bankia.ui.<%= input.name %>'
 * @description
 *
 */
const component = angular
  .module('bankia.ui.<%= input.name %>', [])
  .component('<%= input.componentName %>', <%= input.capitalizedComponentName %>)
  // EventEmmitter wrapper mirrors angular 2. Used by component's controller
  .value('EventEmitter', payload => ( { $event: payload }))
  .name;

export default component;
