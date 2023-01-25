import dbApi from './dbApi'

export const getUser = (username, password) =>{
    return dbApi.get(`/users?username=${username}&password=${password}`);
}

// export const putDir = (folderName,path) =>{
//     dbApi.post('directory',{name:folderName ,path:path})
// }

// export const getDirectories = (path) =>{
//     return dbApi.get(`/directories?path=${path}`)
// }

export default {
    getUser
}