# ember-notiflix

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

## Compatibility

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v14 or above

## Installation

```
ember install ember-notiflix
```

## Configuration

You can change all initial global configuration settings via `config/environment.js` file. Notice that seperate notify, report, loading, confirm and block sections.

Please check the [Notiflix documentation](https://www.notiflix.com/documentation) for more initial configuration details.

```javascript
ENV['ember-notiflix'] = {
  notify: {},
  report: {},
  loading: {
    customSvgUrl:
      'https://cdn.shopify.com/s/files/1/0496/1029/files/Freesample.svg?5153',
    svgSize: '80px',
  },
  confirm: {},
  block: {},
};
```

> **WARNING**: All merge functions private now. Please use @options instead.

## Usage

### Notify

##### Base - ( You can change the type with one of these values: success[default], failure, warning, info )

```handlebars
{{!--
    Since Ember 3.4 we can create a component without a dash in name,
    all "-base" named components are deprecated now.
--}}
<Notify @type="success" @message="Success" @onClick={{fn this.showAlert "Message"}} @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.notify(type, message, callback, options);
```

##### Success

```handlebars
<NotifySuccess @message="Success" @onClick={{fn this.showAlert "Message"}} @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.notifySuccess(message, callback, options);
```

##### Failure

```handlebars
<NotifyFailure @message="Failure" @onClick={{fn this.showAlert "Message"}} @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.notifyFailure(message, callback, options);
```

##### Warning

```handlebars
<NotifyWarning @message="Warning" @onClick={{fn this.showAlert "Message"}} @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.notifyWarning(message, callback, options);
```

##### Info

```handlebars
<NotifyInfo @message="Info" @onClick={{fn this.showAlert "Message"}} @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.notifyInfo(message, callback, options);
```

### Report

##### Base - ( You can change the type with one of these values: success[default], failure, warning, info )

```handlebars
{{!--
    Since Ember 3.4 we can create a component without a dash in name,
    all "-base" named components are deprecated now.
--}}
<Report @type="success" @title="Success" @message="Message" @btnText="OK" @onClick={{fn this.showAlert "Message"}} @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.report(type, title, message, btnText, callback, options);
```

##### Success

```handlebars
<ReportSuccess @title="Success" @message="Message" @btnText="OK" @onClick={{fn this.showAlert "Message"}} @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.reportSuccess(title, message, btnText, callback, options);
```

##### Failure

```handlebars
<ReportFailure @title="Failure" @message="Message" @btnText="OK" @onClick={{fn this.showAlert "Message"}} @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.reportFailure(title, message, btnText, callback, options);
```

##### Warning

```handlebars
<ReportWarning @title="Warning" @message="Message" @btnText="OK" @onClick={{fn this.showAlert "Message"}} @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.reportWarning(title, message, btnText, callback, options);
```

##### Info

```handlebars
<ReportInfo @title="Info" @message="Message" @btnText="OK" @onClick={{fn this.showAlert "Message"}} @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.reportInfo(title, message, btnText, callback, options);
```

### Loading

##### Base - ( You can change the type with one of these values: standard[default], hourglass, circle, arrows, dots, pulse )

```handlebars
{{!--
    Since Ember 3.4 we can create a component without a dash in name,
    all "-base" named components are deprecated now.
--}}
<Loading @type="standard" @message="Loading..." @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.loading(type, message, options);
```

##### Standard

```handlebars
<LoadingStandard @message="Loading..." @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.loadingStandard(message, options);
```

##### Hourglass

```handlebars
<LoadingHourglass @message="Loading..." @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.loadingHourglass(message, options);
```

##### Circle

```handlebars
<LoadingCircle @message="Loading..." @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.loadingCircle(message, options);
```

##### Arrows

```handlebars
<LoadingArrows @message="Loading..." @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.loadingArrows(message, options);
```

##### Dots

```handlebars
<LoadingDots @message="Loading..." @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.loadingDots(message, options);
```

##### Pulse

```handlebars
<LoadingPulse @message="Loading..." @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.loadingPulse(message, options);
```

##### Custom

```handlebars
<LoadingCustom @message="Loading..." @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.loadingCustom(message, options);
```

You can change the message in the loading screen in any time.

```javascript
this.notiflix.loadingChange('Loading... %20');
```

You can remove the loading screen immediately,

```javascript
this.notiflix.loadingRemove();
```

or you can remove the loading screen after some delay.

```javascript
this.notiflix.loadingRemove(600); // milliseconds
```

### Confirm

##### Base

```handlebars
{{!--
    Since Ember 3.4 we can create a component without a dash in name,
    all "-base" named components are deprecated now.
--}}
<Confirm @title="Notiflix Confirm" @message="Do you agree with me?" @okBtnText="Yes" @cancelBtnText="No" @okClick={{fn this.showAlert "Message"}} @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.confirm(
  title,
  message,
  okBtnText,
  cancelBtnText,
  okClick,
  cancelClick,
  options
);
```

##### Ask

```handlebars
{{!--
    Since Ember 3.4 we can create a component without a dash in name,
    all "-base" named components are deprecated now.
--}}
<Ask @title="'Where is Padmé?" @question="Is she safe? Is she all right?" @answer="It seems, in your anger, you killed her." @okBtnText="Answer" @cancelBtnText="Cancel" @okClick={{fn this.showAlert "Message"}} @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.ask(
  title,
  question,
  answer,
  okBtnText,
  cancelBtnText,
  okClick,
  cancelClick,
  options
);
```

### Block

##### Base - ( You can change the type with one of these values: standard[default], hourglass, circle, arrows, dots, pulse )

```handlebars
{{!--
    Since Ember 3.4 we can create a component without a dash in name,
    all "-base" named components are deprecated now.
--}}
<Block @type="standard" @elements="li.items" @message="Blocking..." @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.block(type, elements, message, options);
```

##### Standard

```handlebars
<BlockStandard @elements="li.items" @message="Blocking..." @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.blockStandard(elements, message, options);
```

##### Hourglass

```handlebars
<BlockHourglass @elements="li.items" @message="Blocking..." @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.blockHourglass(elements, message, options);
```

##### Circle

```handlebars
<BlockCircle @elements="li.items" @message="Blocking..." @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.blockCircle(elements, message, options);
```

##### Arrows

```handlebars
<BlockArrows @elements="li.items" @message="Blocking..." @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.blockArrows(elements, message, options);
```

##### Dots

```handlebars
<BlockDots @elements="li.items" @message="Blocking..." @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.blockDots(elements, message, options);
```

##### Pulse

```handlebars
<BlockPulse @elements="li.items" @message="Blocking..." @options={{hash svgSize=0}} />
```

```javascript
this.notiflix.blockPulse(elements, message, options);
```

You can remove the block screen immediately,

```javascript
this.notiflix.blockRemove(elements);
```

or you can remove the block screen after some delay.

```javascript
this.notiflix.blockRemove(elements, 600); // milliseconds
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## TODO

- [x] Custom Loading
- [x] Loading change
- [x] Loading remove
- [x] Initial settings
- [x] Merge functions
- [x] Confirm cancel callback (onClick changed to okClick)
- [x] Added brand new block components
- [x] Added @options for components and functions
- [x] Added merge functions deprecations message
- [x] Merge functions private now
- [x] Ask component added

## License

This project is licensed under the [MIT License](LICENSE.md).
