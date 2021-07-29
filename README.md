# @socheatsok78/axios-authorization

Axios authorization plugin 🎫 

[![@npm][npm-badge]][npm-url]
[![license][license-badge]](LICENSE)

## Features

- [x] Add support for `BasicToken`
- [x] Add support for `BearerToken`
- [ ] Add support for `Oauth 1.0`
- [ ] Add support for `Oauth 2.0`
- [ ] Add support for `Microsoft NTLM`
- [ ] Add support for `AWS IAM v4`

## Install

```sh
npm install @socheatsok78/axios-authorization
# or
yarn add @socheatsok78/axios-authorization
```

## Usage

```js
import axios from 'axios'
import { useAuthorization } from '@socheatsok78/axios-authorization'

// Register the plugin
useAuthorization(axios)

// Create token object
const token = axios.credentials.create('Bearer', { token: 'your-bearer-token' })

// Set the Authorization token to the request header
axios.credentials.store(token) 

// Remove the Authorization token from the request header
axios.credentials.clear()
```

**Create a `Bearer` token**

```js
import { BearerToken } from '@socheatsok78/axios-authorization'

// Create Bearer token object
const token = axios.credentials.create('Bearer', { token: 'your-bearer-token' })

// or

const token = new BearerToken({
    token: 'your-bearer-token',
    prefix: 'Bearer' // optional
})

// Set the Authorization token to the request header
axios.credentials.store(token) 
```
**Create a `Basic` token**

```js
import { BasicToken } from '@socheatsok78/axios-authorization'

// Create Basic token object
const token = axios.credentials.create('Basic', {
    username: 'your-username',
    password: 'your-secure-password'
})

// or

const token = new BasicToken({
    username: 'your-username',
    password: 'your-secure-password'
})

// Set the Authorization token to the request header
axios.credentials.store(token) 
```

## License

Licensed under the [MIT License](LICENSE).

<!-- variables -->
[npm-badge]: https://img.shields.io/npm/dw/@socheatsok78/axios-authorization
[npm-url]: https://npm.im/@socheatsok78/axios-authorization
[license-badge]: https://img.shields.io/github/license/socheatsok78/axios-authorization
