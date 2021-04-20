---
sidebar_position: 6
---

# Icon List

You can get a list of the full icons at [Bootstrap Icons](https://icons.getbootstrap.com/#icons).
To add to your application, all icon names were transformed into `camel case` using [lodash](https://lodash.com/docs/#camelCase),
always starting with the first letter in uppercase.

For example to use the [bell-fill](https://icons.getbootstrap.com/icons/bell-fill/) icon:

```jsx
import { BellFill } from 'fleet-icons/icon/BellFill';

const App = () => {
  return (
    <BellFill />
  )
}
```
