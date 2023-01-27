// import { getUser } from "../api/userApi";
// import { goTo } from "../router";
// import "./../styles/loginform.scss"

class ContentView extends HTMLElement {

  constructor() {
    super();
    // this.setAttribute("content","");
    this.shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
            .main_container{
                padding: 2em;
            }
            // .file_name{
            // }
        `;
    this.shadow.appendChild(style);

    this.container = document.createElement("div");
    this.container.setAttribute("class", "main_container");

    this.fileName = document.createElement("h2");
    this.fileName.setAttribute("class", "file_name");
    this.content_container = document.createElement("div");
    this.content_container.setAttribute("class", "content");

    this.container.appendChild(this.fileName);
    this.container.appendChild(this.content_container);

    this.shadow.appendChild(this.container);
  }
  displayFile(file){
    // const container = this.getElementsByClassName("content")[0]
    this.fileName.innerText = file.name;
    this.content_container.innerHTML = file.content;
  }
  static get observedAttributes() {
    return ["content"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const shadow = this.shadowRoot;
    if (name == "content") {
      this.container.innerHTML=newValue;
    }
  }
  // connectedCallback() {
  //   const shadow = this.shadowRoot;
  //   shadow.querySelector(".file_name_wrapper").innerText =
  //     this.getAttribute("file_name");
  // }



  // onClick = (e) => {
  //     e.preventDefault()
  //     if(!this.selected){
  //         const { pathname: path} = new URL(e.target.fileLocation)
  //         goTo(path)
  //     }
  // }
}
// function tryLogIn(){
//   const username = document.querySelector('login-form .username_input').value;
//   // const password = document.querySelector('login-form .password_input').value;
//   const test = document.createElement("h2");
//   test.innerText = "test";
//   document.querySelector('login-form').appendChild(test);
// }
customElements.define("content-view", ContentView);

