import dbApi from './dbApi'

export const getFiles = (path) =>{
    return dbApi.get(`/files?path=${path}&userid=${localStorage.getItem('actualUserId')}`)
}

export const putDir = (folderName,path) =>{
    dbApi.post('directory',{name:folderName ,path:path})
}

export const getDirectories = (path) =>{
    return dbApi.get(`/directories?path=${path}&userid=${localStorage.getItem('actualUserId')}`)
}

export default {
    getFiles
    ,getDirectories
    ,putDir
}