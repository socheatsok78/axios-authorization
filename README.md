# axios-authorization

Axios authorization plugin

## Install

```sh
npm install @socheatsok78/axios-authorization
# or
yarn add @socheatsok78/axios-authorization
```

## Usage

```js
import axios from 'axios'
import { useAuthorization, TokenType } from '@socheatsok78/axios-authorization'

useAuthorization(axios)

// Set the authorization as Bearer token to request header of current `axios` instance.
axios.setAuthorization('token', TokenType.Bearer) 

// To unset the authorization token
axios.unsetAuthorization() 
```
## License

Licensed under the [MIT License](LICENSE).
