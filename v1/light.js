// connect pre define styles
let styles = document.createElement("link");
styles.type = "text/css";
styles.rel = "stylesheet";
styles.href = "https://cdn.jsdelivr.net/gh/MDHein/WiScript@main/v1/style.css";
document.head.appendChild(styles);

function ImageView() {
 let element = document.createElement("img");
 getElementAttributes(element);
 element.setImage = function(url) {
  this.src = url;
 }
 element.setType = function(text) {
  this.style.objectFit = text;
 }
 return element;
}
function TextView() {
 let element = document.createElement("span");
 getElementAttributes(element);
 element.setText("TextView");
 return element;
}
function LargeText() {
 let element = document.createElement("h2");
 getElementAttributes(element);
 element.setText("Large TextView");
 return element;
}
function ParagraphView() {
 let element = document.createElement("p");
 getElementAttributes(element);
 return element;
}
function EditText() {
 let element = document.createElement("input");
 getElementAttributes(element);
 element.setType = function(text) {
  this.setAttribute("type", text);
 }
 element.setHint = function (text) {
  this.placeholder = text;
 }
 return element;
}
function TextArea() {
 let element = document.createElement("textarea");
 getElementAttributes(element);
 return element;
}
function Button() {
 let element = document.createElement("button");
 getElementAttributes(element);
 element.setClass("wi-button");
 element.setText("Button");
 return element;
}
function ProgressView() {
 let element = document.createElement("div");
 getElementAttributes(element);
 element.setClass("wi-progress-view");
 return element;
}
function View() {
 let element = document.createElement("div");
 getElementAttributes(element);
 return element;
}
function Toolbar() {
 let element = document.createElement("header");
 getElementAttributes(element);
 element.setClass("wi-toolbar");
 element.setHeight("60px");
 return element;
}
function HorizontalLayout() {
 let element = document.createElement("div");
 getElementAttributes(element);
 element.setClass("wi-horizontal-layout");
 return element;
}
function VerticalLayout() {
 let element = document.createElement("div");
 getElementAttributes(element);
 element.setClass("wi-vertical-layout");
 return element;
}
function LinearLayout() {
 let element = document.createElement("div");
 getElementAttributes(element);
 element.setClass("wi-vertical-layout");
 return element;
}

function createElement(e) {
 let element = document.createElement(e);
 getElementAttributes(element);
 return element;
}
// Working with css attribute
function getElement(e) {
 let element = document.querySelector(e);
 getElementAttributes(element);
 return element;
}

function getElementById(e) {
 let element = document.getElementById(e);
 getElementAttributes(element);
 return element;
}
function getElementByClass(e) {
 let element = document.querySelector(e);
 getElementAttributes(element);
 return element;
}
function getElementByTag(e) {
 let element = document.querySelector(e);
 getElementAttributes(element);
 return element;
}
function getElementsByClass(e) {
 let elements = document.querySelectorAll(e);
 for (var i in elements) {
  let element = elements[i];
  if (element) {
   getElementAttributes(element);
  }
 }
 return elements;
}
function getElementsByTag(e) {
 let elements = document.getElementsByTagName(e);
 for (var i in elements) {
  let element = elements[i];
  if (element) {
   getElementAttributes(element);
  }
 }
 return elements;
}

function getElementAttributes(view) {
 view.addIn = function(text) {
  text.appendChild(this);
 };
 view.addNew = function(text) {
  this.appendChild(text);
 };
 view.setId = function(text) {
  this.id = text;
 };
 view.setText = function(text) {
  this.textContent = text;
 };
 view.setTitle = function(text) {
  this.title = text;
 };
 view.setAlt = function(text) {
  this.alt = text;
 };
 view.setInnerHtml = function(text) {
  this.innerHTML = text;
 };
 view.setWidth = function(text) {
  this.style.width = text;
 };
 view.setHeight = function(text) {
  this.style.height = text;
 };
 view.setPadding = function(text) {
  this.style.padding = text;
 };
 view.setMargin = function(text) {
  this.style.margin = text;
 };
 view.setColor = function(text) {
  this.style.color = text;
 };
 view.setBackground = function(text) {
  this.style.background = text;
 };
 view.setBackgroundImage = function(text) {
  this.style.background = `url('${text}')`;
  this.style.backgroundRepeat = "no-repeat";
 };
 view.setDimBackgroundImage = function(text) {
  this.style.background = `linear-gradient(to bottom, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.9) 100%), url('${text}') no-repeat center top`;
  this.style.backgroundRepeat = "no-repeat";
 };
 view.setBackgroundSize = function(text) {
  this.style.backgroundSize = text;
 }
 view.setBackgroundPosition = function(text) {
  this.style.backgroundPosition = text;
 }
 view.setScroll = function(text) {
  this.style.overflow = text;
 };
 view.setBorder = function(text) {
  this.style.border = text;
 };
 view.setLayer = function(text) {
  this.style.zIndex = text;
 };
 view.setClass = function(text) {
  this.setAttribute("class",
   text);
 };
 view.preferLeft = function() {
  this.style.marginRight = "auto";
 };
 view.preferCenter = function() {
  this.style.marginLeft = "auto";
  this.style.marginRight = "auto";
 };
 view.preferRight = function() {
  this.style.marginLeft = "auto";
 };
 view.preferBold = function() {
  this.style.fontWeight = "bold";
 };
 view.preferCircle = function() {
  this.style.borderRadius = "50%";
 };
 view.preferRound = function() {
  this.style.borderRadius = "8px";
 };
 view.preferBlur = function() {
  this.setAttribute("class", "wi-blur");
 };
 view.preferTransparent = function() {
  this.style.background = "transparent";
 };
 view.preferFlex = function() {
  this.style.flex = "1";
 };
 view.preferXScroll = function() {
  this.style.overflowX = "auto";
 };
 view.preferYScroll = function() {
  this.style.overflowY = "auto";
 };
 view.preferScroll = function() {
  this.style.overflow = "auto";
 };
 view.noScroll = function() {
  this.style.overflow = "hidden";
 };
 view.noBorder = function() {
  this.style.border = "none";
 }
 view.noOutline = function() {
  this.style.outline = "none";
 }
 view.noBackground = function() {
  this.style.background = "none";
 }
 view.noWidth = function() {
  this.style.width = "0";
 }
 view.noHeight = function() {
  this.style.height = "0";
 }
 view.fillWidth = function() {
  this.style.width = "100%";
 }
 view.fillHeight = function() {
  this.style.height = "100%";
 }
 view.setGravity = function(text) {
  this.style.display = 'flex';
  this.style.justifyContent = text;
  this.style.alignItems = text;
 };
 view.preferGravityCenter = function() {
  this.style.display = 'flex';
  this.style.justifyContent = 'center';
  this.style.alignItems = 'center';
 };

 view.preferGravityVertical = function() {
  this.style.display = 'flex';
  this.style.alignItems = 'center';
  this.style.flexDirection = 'column';
 };
 view.preferVertical = function() {
  this.style.display = 'flex';
  this.style.flexDirection = 'column';
 };
 view.preferHorizontal = function() {
  this.style.display = 'flex';
  this.style.flexDirection = 'row';
 };
 view.preferGravityHorizontal = function() {
  this.style.display = 'flex';
  this.style.justifyContent = 'center';
  this.style.alignItems = 'center';
 };

 view.onClick = function(callback) {
  this.addEventListener("click",
   callback);
 };
 view.onDoubleClick = function(callback) {
  this.addEventListener("dblclick",
   callback);
 };
 view.onChange = function(callback) {
  this.addEventListener("change",
   callback);
 };
 view.onCopy = function(callback) {
  this.addEventListener("copy",
   callback);
 };
 view.onPaste = function(callback) {
  this.addEventListener("paste",
   callback);
 };
 view.onCut = function(callback) {
  this.addEventListener("cut",
   callback);
 };
 view.onDrag = function(callback) {
  this.addEventListener("drag",
   callback);
 };
 view.onDragEnter = function(callback) {
  this.addEventListener("dragenter",
   callback);
 };
 view.onDragStart = function(callback) {
  this.addEventListener("dragstart",
   callback);
 };
 view.onDragEnd = function(callback) {
  this.addEventListener("dragend",
   callback);
 };
 view.onDragLeave = function(callback) {
  this.addEventListener("dragleave",
   callback);
 };
 view.onDragOver = function(callback) {
  this.addEventListener("dragover",
   callback);
 };
 view.onDrop = function(callback) {
  this.addEventListener("drop",
   callback);
 };
 view.onFocus = function(callback) {
  this.addEventListener("focus",
   callback);
 };
 view.onBlur = function(callback) {
  this.addEventListener("blur",
   callback);
 };
 view.onFullScreenChange = function(callback) {
  this.addEventListener("fullscreenchange",
   callback);
 };
 view.onInput = function(callback) {
  this.addEventListener("input",
   callback);
 };
 view.onInvalid = function(callback) {
  this.addEventListener("invalid",
   callback);
 };
 view.onKeyUp = function(callback) {
  this.addEventListener("keyup",
   callback);
 };
 view.onKeyDown = function(callback) {
  this.addEventListener("keydown",
   callback);
 };
 view.onKeyPress = function(callback) {
  this.addEventListener("keypress",
   callback);
 };
 view.onLoad = function(callback) {
  this.addEventListener("load",
   callback);
 };
 view.onMouseUp = function(callback) {
  this.addEventListener("mouseup",
   callback);
 };
 view.onMouseDown = function(callback) {
  this.addEventListener("mousedown",
   callback);
 };
 view.onMouseEnter = function(callback) {
  this.addEventListener("mouseenter",
   callback);
 };
 view.onMouseOver = function(callback) {
  this.addEventListener("mouseover",
   callback);
 };
 view.onMouseMove = function(callback) {
  this.addEventListener("mousemove",
   callback);
 };
 view.onMouseLeave = function(callback) {
  this.addEventListener("mouseleave",
   callback);
 };
 view.onMouseOut = function(callback) {
  this.addEventListener("mouseout",
   callback);
 };
 view.onOffline = function(callback) {
  this.addEventListener("offline",
   callback);
 };
 view.onOnline = function(callback) {
  this.addEventListener("online",
   callback);
 };
 view.onResize = function(callback) {
  this.addEventListener("resize",
   callback);
 };
 view.onReset = function(callback) {
  this.addEventListener("reset",
   callback);
 };
 view.onScroll = function(callback) {
  this.addEventListener("scroll",
   callback);
 };
 view.onSearch = function(callback) {
  this.addEventListener("search",
   callback);
 };
 view.onSelect = function(callback) {
  this.addEventListener("select",
   callback);
 };
 view.onShow = function(callback) {
  this.addEventListener("show",
   callback);
 };
 view.onToggle = function(callback) {
  this.addEventListener("toggle",
   callback);
 };
 view.onTouchStart = function(callback) {
  this.addEventListener("touchstart",
   callback);
 };
 view.onTouchEnd = function(callback) {
  this.addEventListener("touchend",
   callback);
 };
 view.onTouchMove = function(callback) {
  this.addEventListener("touchmove",
   callback);
 };
 view.onTransitionEnd = function(callback) {
  this.addEventListener("transitionend",
   callback);
 };
 view.onWheel = function(callback) {
  this.addEventListener("wheel",
   callback);
 };
}
function setMargins(views, size) {
 if (views.length > 0) {
  for (let v of views) {
   if (v) {
    v.style.margin = size;
   }
  }
 }
}
function setPaddings(views, size) {
 if (views.length > 0) {
  for (let v of views) {
   if (v) {
    v.style.padding = size;
   }
  }
 }
}
// just show short message
function showToast(s) {
 let toastHTML = `<span id="wiToast">${s}</span>`;
 document.body.insertAdjacentHTML("beforeend",
  toastHTML);
 let toast = getElement("#wiToast");
 setTimeout(function() {
  toast.remove();
 },
  2000);
 toast.offsetWidth;
 toast.style.opacity = 1;
}

// Showing Alert Message
function showAlert(s) {
 let alertHtml = `<div id="wiAlert"><div><p>${s}</p><button id="alertClose">OK</button></div></div>`;
 document.body.insertAdjacentHTML("beforeend", alertHtml);
 let wiAlert = getElement("#wiAlert");
 let alertClose = getElement("#alertClose");
 alertClose.onClick(function() {
  wiAlert.remove();
 });
}

function initToolbar() {
 let tb = `<header class="wi-toolbar"><div class="brand"><img id="appIcon" src="#"
 /><a id="appName" href="#">BrandName</a></div><nav></nav><div class="mobile-menu"><div class="line1"></div><div class="line2"></div></div></header>`;

 let mobileNav = `<nav class="mobile-nav"></nav>`;

 document.body.insertAdjacentHTML("beforeend", tb);
 document.body.insertAdjacentHTML("beforeend", mobileNav);

 let menuIcon = getElement(".mobile-menu");
 let mobileMenu = getElement(".mobile-nav");
 let isOpen = false;
 menuIcon.onClick(function() {
  menuIcon.classList.toggle("change");
  if (isOpen) {
   isOpen = false;
   mobileMenu.setWidth("0");
  } else {
   isOpen = true;
   mobileMenu.setWidth("100%");
  }
 });
}
function createToolbarItem(name, action) {
 let item = `<a href="${action}">${name}</a>`
 let box1 = getElement(".wi-toolbar nav");
 let box2 = getElement(".mobile-nav");
 box1.insertAdjacentHTML("beforeend",
  item);
 box2.insertAdjacentHTML("beforeend",
  item);
}
function createMenuItem(name, action) {
 let item = `<a href="${action}">${name}</a>`
 let box1 = getElement(".wi-toolbar nav");
 let box2 = getElement(".mobile-nav");
 box1.insertAdjacentHTML("beforeend",
  item);
 box2.insertAdjacentHTML("beforeend",
  item);
}
function createDrawerItem(name, action) {
 let item = `<a href="${action}">${name}</a>`
 let box1 = getElement(".wi-toolbar nav");
 let box2 = getElement(".mobile-nav");
 box1.insertAdjacentHTML("beforeend",
  item);
 box2.insertAdjacentHTML("beforeend",
  item);
}
function setAppIcon(i) {
 let icon = getElement("#appIcon");
 icon.src = i;
}
function setAppName(s) {
 let name = getElement("#appName");
 name.innerHTML = s;
}

function createLink() {
 let element = document.createElement("a");
 getElementAttributes(element);
 return element;
}
// ANIMATE VIEWS
function animateView(views) {
 const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
 }
 const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
   if (entry.isIntersecting) {
    entry.target.classList.add("animate-view");
    observer.unobserve(entry.target);
   }
  })
 }, options);
 views.forEach(v => {
  observer.observe(v);
 });
}
function slideFromRight(views) {
 const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
 }
 const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
   if (entry.isIntersecting) {
    entry.target.classList.add("slide-from-right");
    observer.unobserve(entry.target);
   }
  })
 }, options);
 views.forEach(element => {
  observer.observe(element);
 });
}

async function getJson(url) {
 let response = await fetch(url);
 if (!response.ok) {
  throw new Error('JSON: Network response was not ok');
 }
 return response.json();
}
async function getText(url) {
 let response = await fetch(url);
 if (!response.ok) {
  throw new Error('Text: Network response was not ok');
 }
 return response.text();
}

function copyText(text) {
 navigator.clipboard.writeText(text)
 .then(() => {
  showToast("Text copied to clipboard");
 })
 .catch((err) => {
  // Handle errors
  console.error("Failed to copy: ", err);
 });
}

function cutText(input) {
 let text = input.value;
 navigator.clipboard.writeText(text)
 .then(() => {
  showToast("Text cut to clipboard");
  input.value = "";
 })
 .catch((err) => {
  // Handle errors
  console.error("Failed to cut: ", err);
 });
}
function pasteText(text) {
 navigator.clipboard.readText()
 .then((text) => {
  showToast("Text pasted from clipboard");
 })
 .catch((err) => {
  // Handle errors
  console.error("Failed to paste: ", err);
 });
}
function viewLink(link) {
 window.location.href = link;
}

function wiInit() {
 // initialize requirements...
 initToolbar();
 console.log("/*---WiScript init---*/");
 setTimeout(function() {
  // to do
 }, 2000);
}