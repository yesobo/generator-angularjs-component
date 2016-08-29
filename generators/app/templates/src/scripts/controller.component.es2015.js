class <%= input.capitalizedComponentName %>Controller {
  constructor(EventEmitter) {

  }
  $onInit() {
    // component initialisation
  }
  $onChanges(changes) {
    if (changes.oneWayInput) {
      this.oneWayInput = angular.copy(this.oneWayInput);
    }
  }
  $postLink() {
    // component post-link
  }
  $onDestroy() {
    // component $destroy function
  }
  onCustomEvent() {
    this.onChangeValue(
      EventEmitter({
        user: this.oneWayInput
      })
    );
  }
}

<%= input.capitalizedComponentName %>Controller.$inject = ['EventEmitter'];

export default <%= input.capitalizedComponentName %>Controller;
