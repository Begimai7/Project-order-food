import { axiosIntstance } from "../config/axiosInstance"

export const signUpReq = (data) => {
  return axiosIntstance.post('/auth/register', data)
}
export const signInReq = (data) => {
  return axiosIntstance.post('/auth/login', data)
}
