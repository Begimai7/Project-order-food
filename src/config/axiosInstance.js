import axios from "axios";

export const axiosIntstance = axios.create({
  baseURL: "http://ec2-3-122-253-30.eu-central-1.compute.amazonaws.com:5500/api/v1",
  headers: {
    userID: 'begimai',
   "Content-Type": "application/json",
  //  'Authorization': `Bearer ${'token'}`
  }
 })