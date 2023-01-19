import dbApi from './dbApi'

export const getFiles = (path) =>{
    return dbApi.get(`/files?location=${path}`)
}

export default {
    getFiles
}