import axios from 'axios'
import { createdBy, orgId } from 'store/constant'
const BaseURL = 'localhost'
const PORT = 8080
const url = `http://${BaseURL}:${PORT}/api/users/flowIse/${createdBy}/${orgId}`

export function getUsersArray() {
    return axios.get(url).then((res) => {
        let Data = res.data.data
        let orgId = Object.keys(Data)[0]
        let userIdArr = Object.values(Data)[0]
        return {
            orgId,
            userIdArr
        }
    })
}

// export function getUsersArray() {
//     return axios.get('http://localhost:3100/api/v1/ip').then(() => {
//         return {
//             orgId: '65536f422886657aeb845dca',
//             userIdArr: [
//                 '65880ad733e3d01588e55ded',
//                 '65536f412886657aeb845dc9',
//                 '655afbf6a86fa408231fa9ab',
//                 '658161561b9641349c6cc9a0',
//                 '6559b39d5c3dcd549c8a0619',
//                 '6576c47847b11e3155938b94',
//                 '658265c79d210324ab9d4abb',
//                 '655994d25c3dcd549c8a05c4',
//                 '6588407329a7b000ccaee7b8',
//                 '6588f8c054f31c775d0b499b'
//             ]
//         }
//     })
// }
