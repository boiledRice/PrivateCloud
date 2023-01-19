import {getFiles} from '../api/filesApi'
import {setFile} from '../service/files.js'

class FilesGrid extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'})
        //main container
        const container = document.createElement('div')
        container.setAttribute('class','file-grid')
       
        //getting files from REST API
        const files = getFiles('')
        //adding tiles to the root
        files.then(files => {
                    files.forEach(file => {
                        setFile(file)
                        const fileElement = document.createElement('file-tile')
                        fileElement.setAttribute('file_name',file.name)
                        container.appendChild(fileElement)
                    })
                })

        //style
        const style = document.createElement('style')
        style.textContent = `
            .file-grid{
                display: flex;
                flex-direction: row;
            }
        `
        shadow.appendChild(style);
        shadow.appendChild(container);
    }
    // function getFileTiles(){
    //     const apiCall= getFiles('');
    //     apiCall.then(files => {
    //         return files
    //         files.forEach(file => {
    //             setFile(file)
    //             const fileElement = document.createElement('file-tile')
    //             fileElement.setAttribute('file_name',file.name)
    //             container.appendChild(fileElement)
    //         });
    //     })
    // }

}
customElements.define('files-grid', FilesGrid)