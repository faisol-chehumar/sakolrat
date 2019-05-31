const MoltinGateway = require('@moltin/sdk').gateway

const Moltin = MoltinGateway({
  client_id: 'zIHN2cq5oFlPhhCCdD9fDd8v6WimkNWtCmi6t8u08B',
  client_secret: '5z1ZZNK3enQi2slDvL5wwe14XPXmAkduM6Zx4Cegmz'
})

export default Moltin

// const Moltin = MoltinGateway({
//   client_id: 'X'
// })

// import axios from 'axios'
// const KEY = 'motlin-token'

// const CLIENT_ID = 'zIHN2cq5oFlPhhCCdD9fDd8v6WimkNWtCmi6t8u08B'
// const moltin = axios.create({
//   baseURL: 'https://api.moltin.com/v2'
// })

// const implicitLogin = async () => {
//   const formData = new FormData()
//   formData.append('client_id', process.env.REACT_APP_MOTLIN_CLIENT_ID || CLIENT_ID)
//   formData.append('grant_type', 'implicit')
//   const result = await axios.post('https://api.moltin.com/oauth/access_token', formData)
//   const token = result.data
//   return token
// }

// moltin.interceptors.request.use(async (config) => {
//   // check if token exist
//   let token = localStorage.getItem(KEY)
//   if (token !== null) {
//     token = JSON.parse(token)
//     if (token.expires * 1000 < Date.now()) {
//       token = null
//     }
//   }
//   if (token === null) {
//     token = await implicitLogin()
//     localStorage.setItem(KEY, JSON.stringify(token))
//   }
//   config.headers = {
//     ...config.headers,
//     Authorization: `Bearer ${token.access_token}`
//   }
//   return config
// })

// export default moltin
