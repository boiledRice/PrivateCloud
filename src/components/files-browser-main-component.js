import { getDirectories } from "../api/filesFoldersApi";
import { getFiles } from "../api/filesFoldersApi";
import { setDir } from "../service/directories.js";

// let activePath; //aktualne prohlizena slozka
// let activeFile; //aktualne prohlizeny soubor
// let pathHeader; //komponenta - nadpis;cesta k aktalni slozce
// let filesGrid;  //komponenta - prohlizeni aktualni slozky
// let fileView; //komponenta - prohlizeni souboru

class FilesBrowser extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.innerText= `
    .main_container{
        width:100%;
        height:fit-content;
        background-color: aqua;
        margin:0;
        padding:0;
    }

    .two_column_container{
        display:flex
    }
    .fg_container{
        flex: 65;
    }
    .fv_container{
        flex: 35;
        background-color:red;
    }
}  `;
    this.shadow.appendChild(style);
    // const styleLink = document.createElement('style');
    // styleLink.innerText = '@import "./../styles/filebrowser.scss"';
    // shadow.appendChild(styleLink);


    //struktura stranky a elementy
    const container = document.createElement("div");
    container.setAttribute("class", "main_container");

    const pathHeaderContainer = document.createElement("div");
    pathHeaderContainer.setAttribute("class", "ph_container");
    this.activePath = '/';
    this.pathHeader = document.createElement('nav-path');
    this.pathHeader.setAttribute("path", this.activePath);
    pathHeaderContainer.appendChild(this.pathHeader);
    
    const twoColumnContainer = document.createElement("div");
    twoColumnContainer.setAttribute("class", "two_column_container");

    
    // this.fileView = document.createElement('file-view');

    const filesGridContainer = document.createElement("div");
    filesGridContainer.setAttribute("class", "fg_container");
    this.filesGrid = document.createElement('files-grid');
    this.filesGrid.addEventListener("click", (e) => {
        this.activePath=this.filesGrid.path;
        this.pathHeader.setAttribute("path",this.activePath);
        this.activeFile = this.filesGrid.activeFile;
        // this.fileView.setAttribute("file_name",this.activeFile.name);
        this.fileView.setAttribute("content",this.activeFile.content);
        // this.fileView.displayFile(this.activeFile);
    }
    )
    this.filesGrid.setAttribute("path",this.activePath);
    filesGridContainer.appendChild(this.filesGrid);
    this.fileView = document.createElement('content-view');
    const fileViewContainer = document.createElement("div");
    fileViewContainer.setAttribute("class", "fv_container");
    fileViewContainer.appendChild(this.fileView);

    twoColumnContainer.appendChild(filesGridContainer);
    twoColumnContainer.appendChild(fileViewContainer);

    container.appendChild(pathHeaderContainer);
    container.appendChild(twoColumnContainer);
    
    this.shadow.appendChild(container);





    //create folder dialog - hidden for default
    // const createDirDialog = document.createElement("create-dir-dialog");
    // createDirDialog.shadowRoot
    //   .getElementById("cancel_btn")
    //   .addEventListener("click", (e) => this.hideElement(createDirDialog));

    //style
    // const style = document.createElement("style");
    // style.textContent = `
    //         .file-grid{
    //             display: flex;
    //             flex-wrap: wrap;
    //             flex-direction: row;
    //         }
    //         .folder_up{
    //             width:70px;
    //             padding:20px;
    //         }
    //     `;
    // shadow.appendChild(style);
    // this.render();
    // const createDirButton = documnent.createElement('button')
    // createDirButton.innerText = 'create directory'
    // createDirButton.addEventListener(this.click)
  }
}

//   static get observedAttributes() {
//     return ["path"];
//   }

//   attributeChangedCallback(name, oldValue, newValue) {
//     const shadow = this.shadowRoot;
//     if (name == "path") {
//       path = this.getAttribute("path");
//       this.render();
//     }
//   }

//   render() {
//     container.innerHTML = "";
//     pathHeader.innerText = path;

//     //pokud slozka neni korenova, pridame tlacitko 'o slozku vys'
//     if (path.substring(0, path.length - 1).indexOf("/") > -1) {
//       const folderUp = document.createElement("div");
//       // folderUp.setAttribute("part", "folder_up");
//       folderUp.setAttribute("class", "folder_up");
//       folderUp.innerHTML = `
//             <img class='folder_up_icon' src='./../src/images/arrow_back.svg'/>
//             `;
//       folderUp.addEventListener("click", (e) => {
//         this.changePath(
//           path.substring(
//             0,
//             path.substring(0, path.length - 1).lastIndexOf("/") + 1
//           )
//         );
//       });
//       container.appendChild(folderUp);
//     }
//     //getting folders from REST API
//     const folders = getDirectories(path);
//     //adding tiles to the root
//     folders.then((folders) => {
//       folders.forEach((folder) => {
//         setDir(folder);
//         const dirElement = document.createElement("dir-tile");
//         dirElement.setAttribute("class", "dir-tile");
//         dirElement.setAttribute("dir_name", folder.name);
//         dirElement.addEventListener("click", (e) => {
//           this.changePath(path + folder.name + "/");
//         });
//         container.appendChild(dirElement);
//       });
//     });

//     //getting files from REST API
//     const files = getFiles(path);
//     //adding tiles to the root
//     files.then((files) => {
//       files.forEach((file) => {
//         // setFile(file)
//         const fileElement = document.createElement("file-tile");
//         fileElement.setAttribute("file_name", file.name);
//         container.appendChild(fileElement);
//       });
//     });
//   }
//   changePath(path) {
//     this.setAttribute("path", path);
//   }
//   hideElement(element) {
//     element.style.display = "none";
//   }
// }
customElements.define("files-browser", FilesBrowser);
