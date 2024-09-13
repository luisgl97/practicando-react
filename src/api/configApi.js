import axios from 'axios'
import { server } from '../config/config'

export const api = axios.create({
    baseURL: server.serverUrl,
})