---
sidebar_position: 6
---

# Lista de iconos

Puede obtener una lista de los iconos completos en [Bootstrap Icons](https://icons.getbootstrap.com/#icons).

Para agregar a su aplicación, todos los nombres de los íconos se transformaron en `camel case` usando [lodash](https://lodash.com/docs/#camelCase),
siempre comenzando con la primera letra en mayúsculas.

Por ejemplo, para usar el icono [bell-fill](https://icons.getbootstrap.com/icons/bell-fill/):

```jsx
import { BellFill } from 'fleet-icons/icon/BellFill';

const App = () => {
  return (
    <BellFill />
  )
}
```
