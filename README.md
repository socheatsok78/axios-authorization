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
import { useAuthorization, BearerToken } from '@socheatsok78/axios-authorization'

// Register the plugin
useAuthorization(axios)

// Create token object
import { BearerToken } from '@socheatsok78/axios-authorization'

const token = new BearerToken({
    token: 'your-bearer-token'
})

// Set the Authorization token to the request header
axios.setAuthorization(token) 

// Remove the Authorization token from the request header
axios.unsetAuthorization()
```

**Create a `Bearer` token**

```js
import { BearerToken } from '@socheatsok78/axios-authorization'

// Create Bearer token object
const token = new BearerToken({
    token: 'your-bearer-token'
})

// Set the Authorization token to the request header
axios.setAuthorization(token) 
```
**Create a `Basic` token**

```js
import { BasicToken } from '@socheatsok78/axios-authorization'

// Create Basic token object
const token = new BasicToken({
    username: 'your-username',
    password: 'your-secure-password'
})

// Set the Authorization token to the request header
axios.setAuthorization(token) 
```
## License

Licensed under the [MIT License](LICENSE).
