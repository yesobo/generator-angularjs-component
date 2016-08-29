(() => {
    'use strict';

    /**
     * @ngdoc directive
     * @name ('<%= input.componentName %>'
     * @module 'bankia.ui.<%= input.name %>'
     * @restrict E
     * @description
     *
     */
    angular
        .module('bankia.ui.<%= input.name %>')
        .component('<%= input.componentName %>', {
          bindings: {

          },
          template: `
              <div>
                {{ $ctrl.user }}
                <child-component user="$ctrl.user" on-update="$ctrl.updateUser($event);"></child-component>
              </div>
            `,
          controller: function () {
              this.user = {
                name: 'Todd',
                location: 'England, UK'
              };
              this.updateUser = function (event) {
                this.user = event.user;
              };
            }
        });
})();
