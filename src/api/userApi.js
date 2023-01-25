import dbApi from './dbApi'

export const getUser = (username, password) =>{
    // return dbApi.get(`/users?username=${username}&password=${password}`);
    const request = dbApi.get(`/users?username=${username}&password=${password}`)
    request.then((users) => {
        return 1;
        // if(users.length1=1){
        //   return false;
        // }else{
        //   return users[0].userid;
        // }
      });
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