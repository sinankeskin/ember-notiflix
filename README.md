ember-notiflix
==============================================================================

This addon provides all Notiflix functionalities (notify, report, loading and confirm) and [Notiflix](https://www.notiflix.com/) is a pure JavaScript notification library with no dependency.

This addon expose all functionalities as an Ember Service. If you want to reach all functions (in your controllers, components or routes) you should inject the service to your code like down below.

```javascript
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class MyComponent extends Component {
  @service
  notiflix;
}
```


Compatibility
------------------------------------------------------------------------------

* Nodejs 8 or above
* Ember.js v3.8 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-notiflix
```
Configuration
------------------------------------------------------------------------------

You can change all initial global configuration settings via `config/environment.js` file. Notice that seperate notify, report, loading and confirm sections.

Please check the [Notiflix documentation](https://www.notiflix.com/documentation) for more initial configuration details.

```javascript
ENV['ember-notiflix'] = {
    notify: {},
    report: {},
    loading: {
      customSvgUrl: 'https://cdn.shopify.com/s/files/1/0496/1029/files/Freesample.svg?5153',
      svgSize: '80px'
    },
    confirm: {}
  };
```

In your code, you can override the initial global settings via merge functions in any time.

### Merge
##### Base - ( You can change the type with one of these values: notify, report, loading, confirm )
``` javascript
this.notiflix.merge('notify', {
  width: '300px',
  borderRadius: '6px'
});
```
##### Notify
``` javascript
this.notiflix.notifyMerge({
  width: '300px',
  borderRadius: '6px'
});
```
##### Report
``` javascript
this.notiflix.reportMerge({
  width: '300px',
  borderRadius: '6px'
});
```
##### Loading
``` javascript
this.notiflix.loadingMerge({
  width: '300px',
  borderRadius: '6px'
});
```
##### Confirm
``` javascript
this.notiflix.confirmMerge({
  customSvgUrl: 'https://cdn.shopify.com/s/files/1/0496/1029/files/Freesample.svg?5153',
  svgSize: '80px'
});
```


Usage
------------------------------------------------------------------------------

### Notify
##### Base - ( You can change the type with one of these values: success[default], failure, warning, info )
``` handlebars
{{!--
    Since Ember 3.4 we can create a component without a dash in name,
    all "-base" named components deprecated now.
--}}
<Notify @type="success" @message="Success" @onClick={{action "showAlert" "Message"}} />
```
``` javascript
this.notiflix.notify(type, message, callback);
```

##### Success
``` handlebars
<NotifySuccess @message="Success" @onClick={{action "showAlert" "Message"}} />
```
``` javascript
this.notiflix.notifySuccess(message, callback);
```

##### Failure
``` handlebars
<NotifyFailure @message="Failure" @onClick={{action "showAlert" "Message"}} />
```
``` javascript
this.notiflix.notifyFailure(message, callback);
```

##### Warning
``` handlebars
<NotifyWarning @message="Warning" @onClick={{action "showAlert" "Message"}} />
```
``` javascript
this.notiflix.notifyWarning(message, callback);
```

##### Info
``` handlebars
<NotifyInfo @message="Info" @onClick={{action "showAlert" "Message"}} />
```
``` javascript
this.notiflix.notifyInfo(message, callback);
```

### Report
##### Base - ( You can change the type with one of these values: success[default], failure, warning, info )
``` handlebars
{{!--
    Since Ember 3.4 we can create a component without a dash in name,
    all "-base" named components deprecated now.
--}}
<Report @type="success" @title="Success" @message="Message" @btnText="OK" @onClick={{action "showAlert" "Message"}} />
```
``` javascript
this.notiflix.report(type, title, message, btnText, callback);
```

##### Success
``` handlebars
<ReportSuccess @title="Success" @message="Message" @btnText="OK" @onClick={{action "showAlert" "Message"}} />
```
``` javascript
this.notiflix.reportSuccess(title, message, btnText, callback);
```

##### Failure
``` handlebars
<ReportFailure @title="Failure" @message="Message" @btnText="OK" @onClick={{action "showAlert" "Message"}} />
```
``` javascript
this.notiflix.reportFailure(title, message, btnText, callback);
```
##### Warning
``` handlebars
<ReportWarning @title="Warning" @message="Message" @btnText="OK" @onClick={{action "showAlert" "Message"}} />
```
``` javascript
this.notiflix.reportWarning(title, message, btnText, callback);
```
##### Info
``` handlebars
<ReportInfo @title="Info" @message="Message" @btnText="OK" @onClick={{action "showAlert" "Message"}} />
```
``` javascript
this.notiflix.reportInfo(title, message, btnText, callback);
```

### Loading
##### Base - ( You can change the type with one of these values: standard[default], hourglass, circle, arrows, dots, pulse )
``` handlebars
{{!--
    Since Ember 3.4 we can create a component without a dash in name,
    all "-base" named components deprecated now.
--}}
<Loading @type="standard" @message="Loading..." />
```
``` javascript
this.notiflix.loading(type, message);
```
##### Standard
``` handlebars
<LoadingStandard @message="Loading..." />
```
``` javascript
this.notiflix.loadingStandard(message);
```
##### Hourglass
``` handlebars
<LoadingHourglass @message="Loading..." />
```
``` javascript
this.notiflix.loadingHourglass(message);
```
##### Circle
``` handlebars
<LoadingCircle @message="Loading..." />
```
``` javascript
this.notiflix.loadingCircle(message);
```
##### Arrows
``` handlebars
<LoadingArrows @message="Loading..." />
```
``` javascript
this.notiflix.loadingArrows(message);
```
##### Dots
``` handlebars
<LoadingDots @message="Loading..." />
```
``` javascript
this.notiflix.loadingDots(message);
```
##### Pulse
``` handlebars
<LoadingPulse @message="Loading..." />
```
``` javascript
this.notiflix.loadingPulse(message);
```
##### Custom
``` handlebars
<LoadingCustom @message="Loading..." />
```
``` javascript
this.notiflix.loadingCustom(message);
```

You can change the message in the loading screen in any time.
``` javascript
this.notiflix.loadingChange('Loading... %20');
```

You can remove the loading screen immediately,
``` javascript
this.notiflix.loadingRemove();
```

or you can remove the loading screen after some delay.
``` javascript
this.notiflix.loadingRemove(600); // milliseconds
```

### Confirm
##### Base
``` handlebars
{{!--
    Since Ember 3.4 we can create a component without a dash in name,
    all "-base" named components deprecated now.
--}}
<Confirm @title="Notiflix Confirm" @message="Do you agree with me?" @okBtnText="Yes" @cancelBtnText="No" @onClick={{action "showAlert" "Message"}} />
```
``` javascript
this.notiflix.confirm(title, message, okBtnText, cancelBtnText, okClick, cancelClick);
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


TODO
------------------------------------------------------------------------------
- [X] Custom Loading
- [X] Loading change
- [X] Loading remove
- [X] Initial settings
- [X] Merge functions
- [X] Confirm cancel callback (onClick changed to okClick)

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
