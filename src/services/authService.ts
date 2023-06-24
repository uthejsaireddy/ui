import axios from "axios"


const baseURL = 'https://dev.examprephub.com/api/smartAct/'

export const signIn = (data: any) => {
    console.log(data)
    return axios.post(`${baseURL}${'auth/signin'}`, data, {
        headers: {
            "Content-Type": "applications/json"
        }
    })
}