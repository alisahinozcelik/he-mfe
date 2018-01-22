> Modern frameworklerde asıl ilke "component" kavramıdır. Ana fikir; birleştirilebilir, tekrar kullanılabilir, performanslı atomik UI parçaları  geliştirmek.

![component tree](https://cdn-images-1.medium.com/max/1600/0*7Q98xHzNuTqoz9Uo.png)

```typescript
import {Component} from 'angular2/core';

@Component({
  selector: 'my-hello',
  template: ` //optionally use templateUrl to load my.hello.html
    <label>Name:</label>
    <input type="text" [(ngModel)]="yourName" placeholder="Enter a name here">
    <hr>
    <h1 [hidden]="!yourName">Hello {{yourName}}!</h1>
  `,
  styles:[` //optionally use styleUrls to load my.hello.css
    label{color:red;}
  `]
})
export class MyHello {
    yourName: string = 'John Doe';
}
```

```jsx
import React, { Component, PropTypes } from 'react';

class Timer extends Component {
    getInitialState() {
        return {
            secondsElapsed: Number(this.props.startTime) || 0
        };
    }
    tick() {
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        });
    }
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        //component styles
        var divStyle = {
          color: 'white',
          backgroundColor: 'red',
        };
        //component HTML/JSX
        return ( 
          <div style={divStyle} startTime="10"> 
              Seconds Elapsed: {this.state.secondsElapsed} 
          </div>
        );
    }
};
```

![vue](https://vuejs.org/images/vue-component.png)

Yanlış
```ts
@Component()
class AComponent {
    constructor() {
        location.reload();
    }
} 
```
Doğru
```ts
@Component()
class AComponent {
    constructor(
        browserService: BrowserService
    ) {
        browserService.reloadWindow();
    }
} 
```

Yanlış
```ts
document.querySelectorAll("span").forEach(el => el.style.backgroundColor = "red");
```

Doğru
```ts
@Component()
class SpanComponent {
    constructor(
        public el: ElementRef
    ) {
    }

    public changeColor(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
} 
```

![bindings](https://image.slidesharecdn.com/qew2fe1qfouq3ez0irrw-signature-a5e16f8a5f9bf5c06bfd992151090953475efa37da75f9eed6674474188d6d90-poli-141218052940-conversion-gate02/95/angular-js-10-638.jpg?cb=1418892818)

![React Lifecycle](https://cdn-images-1.medium.com/max/1600/0*VoYsN6eq7I_wjVV5.png)

![Angular](https://i.ytimg.com/vi/r7kc3CiauDg/maxresdefault.jpg)

![Vue](http://whatpixel.com/images/2016/vuejs-learning-resources/01-vue-js-diagram-mvvm.jpg)

![Vuex](https://v1.vuejs.org/images/state.png)