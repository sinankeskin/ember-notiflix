ember-notiflix
==============================================================================

This addon provides all Notiflix functionalities.


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-notiflix
```


Usage
------------------------------------------------------------------------------

### Notify
##### Base - ( You can change the type from one of these values: success[default], failure, warning, info )
`{{notify-base type="success" message="Success" onClick=(action "showAlert" "Message")}}`
##### Success
`{{notify-success message="Success" onClick=(action "showAlert" "Message")}}`
##### Failure
`{{notify-failure message="Failure"}}`
##### Warning
`{{notify-warning message="Warning"}}`
##### Info
`{{notify-info message="Info"}}`

### Report
##### Base - ( You can change the type from one of these values: success[default], failure, warning, info )
`{{report-base type="success" title="Success" message="Message" btnText="OK" onClick=(action "showAlert" "Message")}}`
##### Success
`{{report-success title="Success" message="Message" btnText="OK" onClick=(action "showAlert" "Message")}}`
##### Failure
`{{report-failure title="Failure" message="Message" btnText="OK"}}`
##### Warning
`{{report-warning title="Warning" message="Message" btnText="OK"}}`
##### Info
`{{report-info title="Info" message="Message" btnText="OK"}}`

### Confirm
##### Base
`{{confirm-base title="Notiflix Confirm" message="Do you agree with me?" okBtnText="Yes" cancelBtnText="No" onClick=(action "showAlert" "Message")}}`

### Report
##### Base - ( You can change the type from one of these values: standard[default], hourglass, circle, arrows, dots, pulse )
`{{loading-base type="standard" message="Loading..."}}`
##### Standard
`{{loading-standard message="Loading..."}}`
##### Hourglass
`{{loading-hourglass message="Loading..."}}`
##### Circle
`{{loading-circle message="Loading..."}}`
##### Arrows
`{{loading-arrows message="Loading..."}}`
##### Dots
`{{loading-dots message="Loading..."}}`
##### Pulse
`{{loading-pulse message="Loading..."}}`

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


TODO
------------------------------------------------------------------------------
- [ ] Custom Loading
- [ ] Loading change
- [ ] Loading remove

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
