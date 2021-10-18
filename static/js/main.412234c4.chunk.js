(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2JfvH",ImageGalleryItem:"ImageGallery_ImageGalleryItem__2Ufu4"}},16:function(e,t,a){e.exports={ModalBackdrop:"Modal_ModalBackdrop__2pfsA",ModalContent:"Modal_ModalContent__3zoBz"}},26:function(e,t,a){e.exports={Item:"ImageGalleryItem_Item__2Ugnk"}},28:function(e,t,a){},29:function(e,t,a){e.exports={Btn:"Button_Btn__2tSeL"}},30:function(e,t,a){e.exports={Loader:"Loader_Loader__1O-B1"}},35:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),i=(a(35),a(17)),l=a(4),s=a(5),u=a(7),d=a(6),h=a(11),m=(a(36),a(8)),b=a.n(m),g=a(1),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchItem:""},e.handleInputSearch=function(t){e.setState({searchItem:t.target.value})},e.hendleSubmit=function(t){t.preventDefault(),""!==e.state.searchItem.trim()?(e.props.onSubmit(e.state.searchItem),e.reset()):h.b.error("Enter a word to search for!")},e.reset=function(){e.setState({searchItem:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:b.a.Searchbar,children:Object(g.jsxs)("form",{className:b.a.SearchForm,onSubmit:this.hendleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(g.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(g.jsx)("input",{className:b.a.SearchFormInput,onChange:this.handleInputSearch,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),j=a(26),p=a.n(j);function O(e){var t=e.img,a=e.onModalClick;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("img",{className:p.a.Item,src:t.webformatURL,alt:t.tags,onClick:function(){return a(t)}})})}var v=a(13),x=a.n(v);function y(e){var t=e.images,a=e.onModalClick;return Object(g.jsx)("ul",{className:x.a.ImageGallery,children:t.map((function(e){return Object(g.jsx)("li",{className:x.a.ImageGalleryItem,children:Object(g.jsx)(O,{img:e,onModalClick:a})},e.id)}))})}var I=a(14),S=a.n(I),w=a(27),k=a(15),C=a.n(k),M="23024324-04436665e5646ea163d34a038";function _(){return _=Object(w.a)(S.a.mark((function e(t){var a,n,r,o=arguments;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:1,e.next=3,C.a.get("?&q=".concat(t,"&page=").concat(a,"&per_page=12&key=").concat(M));case 3:return n=e.sent,r=n.data.hits,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}C.a.defaults.baseURL="https://pixabay.com/api/";var N=a(28),B=a.n(N);function L(e){var t=e.children;return Object(g.jsx)("div",{className:B.a.Container,children:t})}var F=a(29),G=a.n(F);function U(e){var t=e.onClick;return Object(g.jsx)("button",{className:G.a.Btn,onClick:t,type:"button",children:"Load more"})}var D=a(30),E=a.n(D),A=function(e){return Object(g.jsx)("div",{id:E.a.Loader,children:Object(g.jsxs)("svg",{width:e.width,height:e.height,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:e.color,"aria-label":e.label,children:[Object(g.jsxs)("circle",{cx:"15",cy:"15",r:e.radius+6,children:[Object(g.jsx)("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),Object(g.jsx)("animate",{attributeName:"fillOpacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),Object(g.jsxs)("circle",{cx:"60",cy:"15",r:e.radius,attributeName:"fillOpacity",from:"1",to:"0.3",children:[Object(g.jsx)("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),Object(g.jsx)("animate",{attributeName:"fillOpacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),Object(g.jsxs)("circle",{cx:"105",cy:"15",r:e.radius+6,children:[Object(g.jsx)("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),Object(g.jsx)("animate",{attributeName:"fillOpacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})})};A.defaultProps={height:80,width:80,color:"purple",label:"audio-loading",radius:9};var J=A,K=a(16),R=a.n(K),q=document.querySelector("#modal-root"),z=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdrop=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(g.jsx)("div",{className:R.a.ModalBackdrop,onClick:this.handleBackdrop,children:Object(g.jsx)("div",{className:R.a.ModalContent,children:this.props.children})}),q)}}]),a}(n.Component),H=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],searchItem:"",largeImage:{},page:1,loading:!1,showModal:!1},e.handleFormSubmit=function(t){e.setState({page:1,searchItem:t,images:[]})},e.handleBtnLoadMoreClick=function(){e.setState({loading:!0}),e.fetchSearchItem().then((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){return console.log(e)})).finally((function(){return e.setState({loading:!1})}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onOpenImageClick=function(t){e.setState({loading:!0,largeImage:t}),console.log(e.state.largeImage),e.toggleModal(),e.setState({loading:!1})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;this.state.searchItem!==t.searchItem&&(this.setState({loading:!0}),this.fetchSearchItem().catch((function(e){return console.log(e)})).finally((function(){return a.setState({loading:!1})})))}},{key:"fetchSearchItem",value:function(){var e=this,t=this.state;return function(e){return _.apply(this,arguments)}(t.searchItem,t.page).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),page:e.page+1}}))}))}},{key:"render",value:function(){var e=this.state,t=e.searchItem,a=e.largeImage,n=e.images,r=e.loading,o=e.showModal;return Object(g.jsxs)(L,{children:[Object(g.jsx)(h.a,{}),Object(g.jsx)(f,{onSubmit:this.handleFormSubmit}),0!==n.length?Object(g.jsx)(y,{images:n,onModalClick:this.onOpenImageClick}):""!==t&&Object(g.jsx)("h1",{children:"Nothing was found"}),r&&Object(g.jsx)(J,{}),n.length>0&&Object(g.jsx)(U,{onClick:this.handleBtnLoadMoreClick}),o&&Object(g.jsxs)(z,{onClose:this.toggleModal,children:[r&&Object(g.jsx)(J,{}),Object(g.jsx)("img",{src:a.largeImageURL,alt:a.tags,onClose:this.toggleModal})]})]})}}]),a}(n.Component);c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(H,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__h1Vbd",SearchFormButton:"Searchbar_SearchFormButton__23ydN",SearchFormInput:"Searchbar_SearchFormInput__3MsJA"}}},[[57,1,2]]]);
//# sourceMappingURL=main.412234c4.chunk.js.map