import controller from './<%= input.name %>.controller';

const <%= input.capitalizedComponentName %>Component = {
  bindings: {
    oneWayInput: '<',
    onChangeValue: '&'
  },
  template: `
    <div>
      <input type="text" ng-model="$ctrl.myVariable.myProperty">
    </div>
  `,
  controller
};

export default <%= input.capitalizedComponentName %>Component;
