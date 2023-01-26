// import { getUser } from "../api/userApi";
// import { goTo } from "../router";
// import "./../styles/loginform.scss"

class ContentView extends HTMLElement {

  constructor() {
    super();
    // this.setAttribute("content","");
    this.shadow = this.attachShadow({ mode: "open" });
    this.container = document.createElement("div");
    this.container.setAttribute("class", "main_container");
    this.shadow.appendChild(this.container);
  }
  displayFile(file){
    const container = this.getElementsByClassName("main_container")[0]
    container.innerHTML = file.content;
  }
  static get observedAttributes() {
    return ["content"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const shadow = this.shadowRoot;
    if (name == "content") {
      this.container.innerText=newValue;
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

