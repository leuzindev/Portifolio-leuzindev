import axios from "axios";


export const api = axios.create({
    baseURL: 'https://gh-pinned-repos.egoist.dev/?username='
})

export const github = axios.create({
    baseURL: 'https://api.github.com/'
})