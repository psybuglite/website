(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[769],{6132:function(e,t,l){"use strict";var C=l(4836);t.__esModule=!0,t.default=void 0;var n=C(l(6115)),a=C(l(7867)),r=C(l(8416)),i=C(l(7294)),c=C(l(5697)),s=function(e){function t(){for(var t,l=arguments.length,C=new Array(l),a=0;a<l;a++)C[a]=arguments[a];return t=e.call.apply(e,[this].concat(C))||this,(0,r.default)((0,n.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,a.default)(t,e);var l=t.prototype;return l.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},l.toggleTheme=function(e){window.__setPreferredTheme(e)},l.render=function(){return i.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(i.default.Component);s.propTypes={children:c.default.func.isRequired};var o=s;t.default=o},3071:function(e,t,l){"use strict";var C=l(4836)(l(6132));t.L=C.default},1977:function(e,t,l){"use strict";l.d(t,{Z:function(){return c}});var C=l(7294),n=l(1883),a=l(3071);var r=e=>{let{menuLinks:t}=e;return(0,C.useEffect)((()=>{}),[]),C.createElement("header",{className:"w-full fixed"},C.createElement("div",{className:"w-[1392px] mx-auto flex justify-between items-start py-4"},C.createElement(C.Fragment,null,C.createElement(n.Link,{to:"/"},C.createElement("span",{className:"logo"},C.createElement("svg",{width:"40",height:"95",viewBox:"0 0 40 95",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M23.5553 0.760654C21.4018 0.37215 19.1986 0.339595 17.0368 0.662991V43.8158H15.5553V0.942056C13.2266 1.47234 10.9718 2.42491 8.90877 3.79977C3.3432 7.50881 0 13.7544 0 20.4426V74.3661C0 81.0544 3.3432 87.2999 8.90877 91.009C15.6255 95.4852 24.3745 95.4852 31.0912 91.009C36.6568 87.2999 40 81.0544 40 74.3661L40 20.4426C40 13.7544 36.6568 7.50882 31.0912 3.79977C29.2035 2.54176 27.1553 1.6373 25.0368 1.0864V43.7996H23.5553V0.760654ZM10.5745 70.3153V60.4477C12.1249 60.2356 14.0684 60.2437 15.6817 60.7962C16.6292 61.1207 17.4126 61.6151 17.9599 62.3133C18.4989 63.0008 18.8739 63.9674 18.8739 65.3623C18.8739 67.1709 19.3706 68.6251 20.2479 69.7441C21.1169 70.8524 22.2947 71.5502 23.5262 71.972C25.9554 72.8039 28.7841 72.6303 30.6339 72.244L31.4932 72.0646V71.1869V59.5378V58.6546L30.6275 58.4793C29.3098 58.2124 27.4135 58.1179 25.6537 58.3272C24.7701 58.4323 23.8813 58.6185 23.0976 58.9208C22.3263 59.2183 21.5658 59.6633 21.0528 60.3434L22.7772 61.6442C22.9522 61.4122 23.2984 61.1584 23.8749 60.9361C24.4392 60.7184 25.1395 60.5636 25.9088 60.4721C27.0849 60.3322 28.3297 60.3506 29.3332 60.4636V70.277C27.7828 70.4891 25.8393 70.481 24.226 69.9285C23.2785 69.604 22.4951 69.1095 21.9478 68.4114C21.4088 67.7239 21.0339 66.7572 21.0339 65.3623C21.0339 63.5537 20.5372 62.0996 19.6598 60.9806C18.7908 59.8722 17.613 59.1744 16.3815 58.7527C13.9523 57.9207 11.1236 58.0943 9.27376 58.4806L8.41453 58.66V59.5378V71.1869V72.0321L9.23506 72.2352C14.2746 73.4825 17.6224 71.7597 18.7963 70.4523L17.1891 69.0092C16.6565 69.6024 14.4404 71.022 10.5745 70.3153Z"}))))),C.createElement("nav",null,C.createElement("ul",{className:"flex flex-col items-end"},t.map((e=>C.createElement("li",{key:e.name,className:"py-2 rounded-full dark:text-[#eee]"},C.createElement(n.Link,{to:e.link,className:"py-2 px-4 rounded-full bg-black text-white hover:bg-[#DC5132]",activeClassName:"bg-active"},e.name)))),C.createElement("li",{className:"mr-2 mt-2 bg-black dark:bg-white rounded-full"},C.createElement(a.L,null,(e=>{let{theme:t,toggleTheme:l}=e;return C.createElement("label",{className:"relative cursor-pointer block p-3 "},C.createElement("input",{className:"opacity-0 absolute",type:"checkbox",onChange:e=>l(e.target.checked?"light":"dark"),checked:"light"===t})," ",C.createElement("span",{className:"block"},"light"===t?C.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C.createElement("g",{"clip-path":"url(#clip0_2569_1744)"},C.createElement("path",{d:"M8.20154 20C7.01999 20 5.84282 19.7414 4.74009 19.2272C2.7545 18.3013 1.24834 16.6576 0.499013 14.5988C-0.250316 12.5401 -0.1531 10.3128 0.772849 8.32719C1.69876 6.34159 3.34248 4.83539 5.40119 4.0861C7.03542 3.49133 8.78093 3.42837 10.4491 3.90394C10.6301 3.95553 10.7564 4.11887 10.7608 4.30702C10.7652 4.49516 10.6467 4.66424 10.4684 4.72431C10.4228 4.73966 10.3773 4.75548 10.3318 4.77204C7.28981 5.8793 5.71565 9.25505 6.82291 12.2972C7.35925 13.7708 8.43741 14.9474 9.85873 15.6102C11.28 16.273 12.8744 16.3426 14.348 15.8062C14.348 15.8062 14.3481 15.8062 14.3481 15.8062C14.3935 15.7897 14.4385 15.7726 14.4833 15.755C14.6585 15.6864 14.858 15.7398 14.9755 15.8868C15.0931 16.0337 15.1013 16.24 14.9958 16.3959C14.0235 17.8326 12.6459 18.9063 11.0118 19.5011C10.0964 19.8342 9.14752 20 8.20154 20ZM8.20443 4.44786C7.35656 4.44786 6.5104 4.59675 5.6951 4.89351C3.85203 5.56434 2.38052 6.91274 1.55159 8.69031C0.722699 10.4679 0.635638 12.4619 1.3065 14.3049C1.97732 16.148 3.32568 17.6195 5.10326 18.4484C6.88087 19.2773 8.87482 19.3644 10.7179 18.6935C11.7658 18.3121 12.6959 17.7107 13.4591 16.9276C12.1226 17.1559 10.7504 16.974 9.49557 16.3889C7.86622 15.6291 6.63035 14.2803 6.01542 12.591C4.88824 9.49397 6.18505 6.09549 8.93192 4.48442C8.6898 4.46009 8.44698 4.44786 8.20443 4.44786Z",fill:"white"}),C.createElement("path",{d:"M14.6822 6.60558C14.5931 6.60558 14.5045 6.57793 14.4296 6.52352C14.2973 6.4274 14.2311 6.26449 14.2587 6.10333L14.5771 4.2469L13.2284 2.93217C13.1113 2.818 13.0691 2.64728 13.1197 2.49175C13.1702 2.33622 13.3047 2.22287 13.4665 2.19936L15.3304 1.92853L16.164 0.239504C16.2364 0.092841 16.3858 0 16.5493 0C16.7128 0 16.8622 0.092841 16.9346 0.239504L17.7681 1.92853L19.6321 2.19936C19.794 2.22287 19.9284 2.33622 19.9789 2.49175C20.0295 2.64728 19.9873 2.81804 19.8702 2.93217L18.5215 4.2469L18.8398 6.10333C18.8675 6.26453 18.8012 6.4274 18.6689 6.52356C18.5365 6.61968 18.3612 6.63233 18.2164 6.55625L16.5493 5.67979L14.8821 6.55625C14.8192 6.58925 14.7506 6.60558 14.6822 6.60558ZM16.5492 4.76469C16.6179 4.76469 16.6866 4.78114 16.7492 4.81406L17.8457 5.39056L17.6363 4.16953C17.6124 4.03017 17.6586 3.88796 17.7599 3.78926L18.647 2.92451L17.421 2.74637C17.2811 2.72602 17.1601 2.63814 17.0975 2.51132L16.5492 1.40043L16.001 2.51136C15.9384 2.63818 15.8174 2.72606 15.6775 2.74641L14.4516 2.92455L15.3386 3.7893C15.4399 3.888 15.4861 4.03021 15.4622 4.16957L15.2528 5.3906L16.3493 4.81414C16.4119 4.78118 16.4806 4.76469 16.5492 4.76469Z",fill:"#A99AFF"}),C.createElement("path",{d:"M10.5144 13.0626C10.4254 13.0626 10.3367 13.035 10.2619 12.9806C10.1296 12.8844 10.0633 12.7215 10.0909 12.5603L10.334 11.1435L9.30459 10.14C9.18745 10.0259 9.14531 9.85514 9.19585 9.69961C9.24639 9.54408 9.38083 9.43074 9.54268 9.40722L10.9653 9.20049L11.6016 7.91138C11.674 7.76472 11.8233 7.67188 11.9868 7.67188C12.1504 7.67188 12.2997 7.76472 12.3721 7.91138L13.0083 9.20049L14.431 9.40722C14.5928 9.43074 14.7273 9.54408 14.7778 9.69965C14.8283 9.85518 14.7862 10.0259 14.6691 10.1401L13.6396 11.1435L13.8827 12.5604C13.9104 12.7216 13.8441 12.8845 13.7118 12.9806C13.5795 13.0767 13.4041 13.0894 13.2593 13.0133L11.9869 12.3444L10.7144 13.0133C10.6515 13.0463 10.5828 13.0626 10.5144 13.0626ZM10.5277 10.1324L11.0955 10.6858C11.1968 10.7845 11.243 10.9267 11.2191 11.0661L11.085 11.8476L11.7868 11.4786C11.912 11.4128 12.0615 11.4128 12.1867 11.4786L12.8886 11.8476L12.7545 11.0661C12.7306 10.9267 12.7768 10.7845 12.878 10.6858L13.4458 10.1323L12.6612 10.0183C12.5212 9.99798 12.4003 9.9101 12.3377 9.78328L11.9868 9.07222L11.6359 9.78328C11.5733 9.9101 11.4524 9.99798 11.3124 10.0183L10.5277 10.1324Z",fill:"#A99AFF"})),C.createElement("defs",null,C.createElement("clipPath",{id:"clip0_2569_1744"},C.createElement("rect",{width:"20",height:"20",fill:"white"})))):C.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C.createElement("g",{"clip-path":"url(#clip0_2570_1749)"},C.createElement("path",{d:"M3.23239 17.197C3.12243 17.197 3.01247 17.1551 2.92856 17.0712C2.76079 16.9034 2.76079 16.6313 2.92856 16.4635L5.46626 13.9258L6.07395 14.5335L3.53622 17.0712C3.45231 17.1551 3.34235 17.197 3.23239 17.197Z",fill:"#414141"}),C.createElement("path",{d:"M4.01855 10.4297H0.429688C0.192383 10.4297 0 10.2373 0 10C0 9.7627 0.192383 9.57031 0.429688 9.57031H4.01855V10.4297Z",fill:"#414141"}),C.createElement("path",{d:"M5.4663 6.07427L2.92856 3.53653C2.76079 3.36872 2.76079 3.09665 2.92856 2.92884C3.09638 2.76103 3.36841 2.76103 3.53626 2.92884L6.07395 5.46657L5.4663 6.07427Z",fill:"#414141"}),C.createElement("path",{d:"M9.5709 4.01855V0.452422C9.57051 0.444883 9.57031 0.437305 9.57031 0.429688C9.57031 0.192383 9.7627 0 10 0C10.0038 0 10.0077 3.90625e-05 10.0116 0.00015625C10.2438 0.00601563 10.4303 0.196094 10.4303 0.429727V4.01859H9.5709V4.01855Z",fill:"#414141"}),C.createElement("path",{d:"M13.9258 5.46657L16.4635 2.92884C16.6313 2.76103 16.9034 2.76103 17.0712 2.92884C17.2389 3.09665 17.2389 3.36872 17.0712 3.53653L14.5335 6.07427L13.9258 5.46657Z",fill:"#414141"}),C.createElement("path",{d:"M19.5703 10.4297H15.9814V9.57034H19.5638C19.8038 9.56761 20 9.7605 20 9.99995C20 10.2373 19.8076 10.4297 19.5703 10.4297Z",fill:"#414141"}),C.createElement("path",{d:"M16.7673 17.197C16.6573 17.197 16.5474 17.1551 16.4635 17.0712L13.9258 14.5335L14.5335 13.9258L17.0712 16.4635C17.2389 16.6313 17.2389 16.9034 17.0712 17.0712C16.9873 17.1551 16.8773 17.197 16.7673 17.197Z",fill:"#414141"}),C.createElement("path",{d:"M10.001 20C9.76367 20 9.57129 19.8076 9.57129 19.5703V15.9814H10.4307V19.5703C10.4307 19.8076 10.2383 20 10.001 20Z",fill:"#414141"}),C.createElement("path",{d:"M17.3423 12.5765L16.0678 12.0486C16.2853 11.4051 16.4034 10.7161 16.4034 10.0001C16.4034 9.28434 16.2851 8.59578 16.0677 7.9525L17.3426 7.42445C17.5618 7.33363 17.6659 7.0823 17.5751 6.86305C17.4843 6.64383 17.233 6.53965 17.0137 6.63051L15.7385 7.15867C15.1162 5.90547 14.0957 4.88348 12.8436 4.2591L13.3758 2.97437C13.4666 2.75512 13.3625 2.50379 13.1432 2.41297C12.9239 2.32211 12.6726 2.42625 12.5818 2.64551L12.0506 3.92789C11.4043 3.7082 10.712 3.58895 9.99228 3.58895C9.27822 3.58895 8.59115 3.70641 7.94912 3.92281L7.42177 2.64973C7.33099 2.43051 7.07966 2.32633 6.86036 2.41719C6.64111 2.50801 6.53701 2.75934 6.62783 2.97859L7.15529 4.25195C5.89853 4.87477 4.874 5.89762 4.24911 7.15312L2.98681 6.63027C2.76755 6.53941 2.51622 6.64355 2.4254 6.86281C2.33458 7.08207 2.43868 7.3334 2.65794 7.42422L3.91845 7.94633C3.69978 8.59133 3.58115 9.28211 3.58115 10.0001C3.58115 10.7183 3.69986 11.4094 3.91872 12.0546L2.65822 12.5767C2.43896 12.6675 2.33486 12.9189 2.42568 13.1381C2.49419 13.3036 2.65419 13.4035 2.82283 13.4035C2.87759 13.4035 2.93333 13.3929 2.98708 13.3707L4.24947 12.8478C4.87431 14.1027 5.89841 15.1252 7.15462 15.7479L6.62716 17.0212C6.53634 17.2405 6.64044 17.4918 6.8597 17.5827C6.91345 17.6049 6.96915 17.6155 7.02396 17.6155C7.19255 17.6155 7.35259 17.5155 7.42111 17.3501L7.94841 16.0771C8.5906 16.2937 9.27794 16.4112 9.99224 16.4112C10.7122 16.4112 11.4047 16.2919 12.0513 16.0721L12.5797 17.3477C12.6482 17.5132 12.8082 17.6131 12.9769 17.6131C13.0316 17.6131 13.0874 17.6025 13.1411 17.5803C13.3604 17.4895 13.4645 17.2381 13.3736 17.0189L12.8443 15.7408C14.0958 15.1165 15.1157 14.0949 15.7379 12.8421L17.0135 13.3705C17.0672 13.3928 17.1229 13.4033 17.1777 13.4033C17.3463 13.4033 17.5063 13.3034 17.5749 13.138C17.6656 12.9187 17.5615 12.6673 17.3423 12.5765ZM9.99224 15.5518C6.93099 15.5518 4.44048 13.0613 4.44048 10.0001C4.44048 6.93883 6.93099 4.44832 9.99224 4.44832C13.0535 4.44832 15.544 6.93883 15.544 10.0001C15.544 13.0613 13.0535 15.5518 9.99224 15.5518Z",fill:"#313131"})),C.createElement("defs",null,C.createElement("clipPath",{id:"clip0_2570_1749"},C.createElement("rect",{width:"20",height:"20",fill:"white"}))))))})))))))};var i=()=>C.createElement("footer",{className:"w-full"},C.createElement("div",{className:"flex pt-16 justify-center"},C.createElement(n.Link,{to:"/"},C.createElement("span",{className:"logo"},C.createElement("svg",{width:"40",height:"95",viewBox:"0 0 40 95",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M23.5553 0.760654C21.4018 0.37215 19.1986 0.339595 17.0368 0.662991V43.8158H15.5553V0.942056C13.2266 1.47234 10.9718 2.42491 8.90877 3.79977C3.3432 7.50881 0 13.7544 0 20.4426V74.3661C0 81.0544 3.3432 87.2999 8.90877 91.009C15.6255 95.4852 24.3745 95.4852 31.0912 91.009C36.6568 87.2999 40 81.0544 40 74.3661L40 20.4426C40 13.7544 36.6568 7.50882 31.0912 3.79977C29.2035 2.54176 27.1553 1.6373 25.0368 1.0864V43.7996H23.5553V0.760654ZM10.5745 70.3153V60.4477C12.1249 60.2356 14.0684 60.2437 15.6817 60.7962C16.6292 61.1207 17.4126 61.6151 17.9599 62.3133C18.4989 63.0008 18.8739 63.9674 18.8739 65.3623C18.8739 67.1709 19.3706 68.6251 20.2479 69.7441C21.1169 70.8524 22.2947 71.5502 23.5262 71.972C25.9554 72.8039 28.7841 72.6303 30.6339 72.244L31.4932 72.0646V71.1869V59.5378V58.6546L30.6275 58.4793C29.3098 58.2124 27.4135 58.1179 25.6537 58.3272C24.7701 58.4323 23.8813 58.6185 23.0976 58.9208C22.3263 59.2183 21.5658 59.6633 21.0528 60.3434L22.7772 61.6442C22.9522 61.4122 23.2984 61.1584 23.8749 60.9361C24.4392 60.7184 25.1395 60.5636 25.9088 60.4721C27.0849 60.3322 28.3297 60.3506 29.3332 60.4636V70.277C27.7828 70.4891 25.8393 70.481 24.226 69.9285C23.2785 69.604 22.4951 69.1095 21.9478 68.4114C21.4088 67.7239 21.0339 66.7572 21.0339 65.3623C21.0339 63.5537 20.5372 62.0996 19.6598 60.9806C18.7908 59.8722 17.613 59.1744 16.3815 58.7527C13.9523 57.9207 11.1236 58.0943 9.27376 58.4806L8.41453 58.66V59.5378V71.1869V72.0321L9.23506 72.2352C14.2746 73.4825 17.6224 71.7597 18.7963 70.4523L17.1891 69.0092C16.6565 69.6024 14.4404 71.022 10.5745 70.3153Z"}))))),C.createElement("div",{className:"w-[1392px] mx-auto flex justify-center py-4"},C.createElement("div",{className:"flex flex-col justify-center dark:text-[#eee]"},C.createElement("p",{className:"py-2 text-center"},"Lets Talk"),C.createElement("a",{href:"mailto:dennistdickson@gmail.com",className:"flex email underline"},C.createElement("span",{className:"mr-2"},C.createElement("svg",{width:"26",height:"24",viewBox:"0 0 26 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C.createElement("path",{d:"M4.28314 4H21.4154C22.5933 4 23.557 4.9 23.557 6V18C23.557 19.1 22.5933 20 21.4154 20H4.28314C3.10529 20 2.1416 19.1 2.1416 18V6C2.1416 4.9 3.10529 4 4.28314 4Z",stroke:"#212121","stroke-linecap":"round","stroke-linejoin":"round"}),C.createElement("path",{d:"M23.557 6L12.8493 13L2.1416 6",stroke:"#212121","stroke-linecap":"round","stroke-linejoin":"round"}))),"dennistdickson@gmail.com"))),C.createElement("div",{className:"flex justify-center py-8"},C.createElement("span",{className:"mx-8 relative"},C.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://dribbble.com/psybuglite"},C.createElement("svg",{width:"43",height:"40",viewBox:"0 0 43 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C.createElement("path",{d:"M26.5703 21.4473C28.2506 25.4177 29.4987 29.5053 30.3094 33.6813C31.4663 33.0225 32.5473 32.2313 33.5303 31.3137C36.0826 28.9297 37.7299 25.9257 38.3119 22.6657C35.8046 21.6969 33.0583 21.1609 30.1801 21.1609C28.9496 21.1609 27.7439 21.2597 26.5703 21.4473Z",fill:"#EA4C89"}),C.createElement("path",{d:"M33.5439 8.7C33.5388 8.6956 33.5341 8.6908 33.5294 8.6864C30.2935 5.6644 25.9911 4 21.4151 4C19.6256 4 17.8781 4.2556 16.2197 4.7464C18.8774 7.8564 21.2155 11.1752 23.2196 14.6828C26.9947 13.1856 30.4717 11.1576 33.5439 8.7Z",fill:"#EA4C89"}),C.createElement("path",{d:"M34.8903 10.1165C31.6677 12.7017 28.066 14.7965 24.1475 16.3625C24.7252 17.4485 25.2709 18.5521 25.7857 19.6721C27.224 19.4165 28.6909 19.2861 30.1797 19.2861C33.0635 19.2861 35.8681 19.7705 38.5296 20.7237C38.5412 20.4833 38.5476 20.2421 38.5476 20.0005C38.5476 16.3693 37.261 12.9241 34.8903 10.1165Z",fill:"#EA4C89"}),C.createElement("path",{d:"M10.8701 32.6124C13.8696 34.8088 17.5444 36 21.4155 36C23.8761 36 26.2571 35.518 28.4359 34.6036C27.6191 30.184 26.3115 25.92 24.567 21.8616C18.5038 23.4068 13.5085 27.392 10.8701 32.6124Z",fill:"#EA4C89"}),C.createElement("path",{d:"M21.0917 20.9996C21.9727 20.6516 22.8713 20.3564 23.7836 20.114C23.3022 19.0844 22.7912 18.0692 22.2537 17.0684C17.6254 18.6732 12.7586 19.4868 7.75892 19.4868C6.59735 19.4868 5.44349 19.442 4.29819 19.3548C4.28877 19.5688 4.2832 19.784 4.2832 20.0004C4.2832 24.274 6.06539 28.292 9.30126 31.314C9.30211 31.3148 9.3034 31.316 9.30468 31.3168C10.4239 29.2324 11.8874 27.3376 13.6709 25.672C15.8145 23.67 18.3111 22.098 21.0917 20.9996Z",fill:"#EA4C89"}),C.createElement("path",{d:"M21.3141 15.3841C19.2809 11.8677 16.9025 8.55006 14.2217 5.47046C12.4151 6.25206 10.7507 7.33246 9.30092 8.68646C6.7088 11.1073 5.05039 14.1677 4.49316 17.4865C5.57036 17.5689 6.65912 17.6117 7.75901 17.6117C12.5171 17.6113 17.0828 16.8249 21.3141 15.3841Z",fill:"#EA4C89"}))),C.createElement("span",{className:"absolute top-0 -right-4 link-arrow"},C.createElement("svg",{width:"18",height:"16",viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C.createElement("path",{d:"M5.40918 11.3334L12.5476 4.66675",stroke:"#414141","stroke-width":"0.666667","stroke-linecap":"round","stroke-linejoin":"round"}),C.createElement("path",{d:"M5.40918 4.66675H12.5476V11.3334",stroke:"#414141","stroke-width":"0.666667","stroke-linecap":"round","stroke-linejoin":"round"})))),C.createElement("span",{className:"mx-8 relative"},C.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://linkedin.com/in/psybug"},C.createElement("svg",{width:"44",height:"40",viewBox:"0 0 44 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C.createElement("path",{d:"M39.1216 36.0001V35.9989H39.1301V24.2629C39.1301 18.5217 37.8067 14.0989 30.6197 14.0989C27.1645 14.0989 24.8461 15.8697 23.8995 17.5481H23.7997V14.6349H16.9854V35.9989H24.0811V25.4201C24.0811 22.6349 24.6465 19.9413 28.3398 19.9413C31.9791 19.9413 32.0331 23.1201 32.0331 25.5985V36.0001H39.1216Z",fill:"#0073B1"}),C.createElement("path",{d:"M5.43066 14.636H12.535V36H5.43066V14.636Z",fill:"#0073B1"}),C.createElement("path",{d:"M8.97999 4C6.70824 4 4.86523 5.7212 4.86523 7.8428C4.86523 9.9644 6.70824 11.7216 8.97999 11.7216C11.2517 11.7216 13.0947 9.9644 13.0947 7.8428C13.093 5.7212 11.25 4 8.97999 4Z",fill:"#0073B1"}))),C.createElement("span",{className:"absolute top-0 -right-4 link-arrow"},C.createElement("svg",{width:"18",height:"16",viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C.createElement("path",{d:"M5.40918 11.3334L12.5476 4.66675",stroke:"#414141","stroke-width":"0.666667","stroke-linecap":"round","stroke-linejoin":"round"}),C.createElement("path",{d:"M5.40918 4.66675H12.5476V11.3334",stroke:"#414141","stroke-width":"0.666667","stroke-linecap":"round","stroke-linejoin":"round"}))))),C.createElement("div",{className:"w-[1392px] text-[12px] mx-auto dark:text-[#eee] flex justify-between py-4"},C.createElement("div",{className:"flex"},C.createElement("p",null,"This site is built with"),C.createElement("div",{className:"mx-1 flex items-center"},C.createElement("span",{className:"mr-1"},C.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C.createElement("rect",{width:"16",height:"16",rx:"8",fill:"#E4E4E4"}),C.createElement("path",{d:"M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM3.54286 12.4571C2.34286 11.2571 1.71429 9.65714 1.71429 8.11429L7.94286 14.2857C6.34286 14.2286 4.74286 13.6571 3.54286 12.4571ZM9.37143 14.1143L1.88571 6.62857C2.51429 3.82857 5.02857 1.71429 8 1.71429C10.1143 1.71429 11.9429 2.74286 13.0857 4.28571L12.2286 5.02857C11.2571 3.71429 9.71429 2.85714 8 2.85714C5.77143 2.85714 3.88571 4.28571 3.14286 6.28571L9.71429 12.8571C11.3714 12.2857 12.6286 10.8571 13.0286 9.14286H10.2857V8H14.2857C14.2857 10.9714 12.1714 13.4857 9.37143 14.1143Z",fill:"#663399"}))),C.createElement("span",{className:"svg"},C.createElement("svg",{width:"39",height:"13",viewBox:"0 0 39 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C.createElement("path",{d:"M14.5738 4.42854H16.1552V9.78568H14.5738V9.08925C14.009 9.89282 13.2747 9.94639 12.8229 9.94639C11.072 9.94639 9.94238 8.66068 9.94238 7.10711C9.94238 5.49997 11.072 4.26782 12.7099 4.26782C13.1617 4.26782 14.009 4.32139 14.5173 5.12497V4.42854H14.5738ZM11.6368 7.10711C11.6368 7.96425 12.2581 8.60711 13.2182 8.60711C14.1219 8.60711 14.7997 7.96425 14.7997 7.10711C14.7997 6.24997 14.1784 5.60711 13.2182 5.60711C12.3145 5.60711 11.6368 6.24997 11.6368 7.10711Z",fill:"black"}),C.createElement("path",{d:"M19.2613 5.71408V9.7855H17.6799V5.71408H17.0586V4.42836H17.6799V2.60693H19.2613V4.42836H20.3344V5.71408H19.2613Z",fill:"black"}),C.createElement("path",{d:"M24.0625 5.71425C23.6671 5.39282 23.3282 5.33925 23.1588 5.33925C22.7634 5.33925 22.5375 5.49997 22.5375 5.76782C22.5375 5.92854 22.594 6.08925 23.0458 6.24997L23.4412 6.35711C23.893 6.51782 24.5708 6.67854 24.8532 7.10711C25.0226 7.32139 25.1356 7.64282 25.1356 8.01782C25.1356 8.49997 24.9662 8.98211 24.5143 9.35711C24.0625 9.73211 23.4977 9.94639 22.8199 9.94639C21.6338 9.94639 21.0125 9.41068 20.6172 9.03568L21.4644 8.12497C21.8033 8.44639 22.2551 8.76782 22.707 8.76782C23.1588 8.76782 23.4977 8.55354 23.4977 8.17854C23.4977 7.85711 23.2153 7.69639 22.9894 7.64282L22.6505 7.53568C22.2551 7.37497 21.8033 7.21425 21.4644 6.89282C21.182 6.62497 21.0126 6.30354 21.0126 5.87497C21.0126 5.33925 21.295 4.91068 21.5774 4.64282C22.0292 4.32139 22.594 4.26782 23.0458 4.26782C23.4412 4.26782 24.119 4.32139 24.8532 4.85711L24.0625 5.71425Z",fill:"black"}),C.createElement("path",{d:"M27.5072 5.12493C28.072 4.37493 28.8627 4.26779 29.3146 4.26779C30.9525 4.26779 32.0821 5.49993 32.0821 7.10707C32.0821 8.71422 30.9525 9.94636 29.2581 9.94636C28.9192 9.94636 28.072 9.89279 27.4507 9.08922V9.78564H25.9258V0.785645H27.5072V5.12493ZM27.3378 7.10707C27.3378 7.96422 27.9591 8.60707 28.9192 8.60707C29.8229 8.60707 30.5007 7.96422 30.5007 7.10707C30.5007 6.24993 29.8794 5.60707 28.9192 5.60707C27.9591 5.60707 27.3378 6.24993 27.3378 7.10707Z",fill:"black"}),C.createElement("path",{d:"M34.6798 8.98204L31.9688 4.42847H33.8326L35.5835 7.48204L37.1649 4.42847H38.9723L34.4539 12.6249H32.6465L34.6798 8.98204Z",fill:"black"}),C.createElement("path",{d:"M9.54659 5.33929H7.96514H5.59298V6.83929H7.68274C7.34386 7.85714 6.55314 8.55357 5.08466 8.55357C3.44673 8.55357 2.26065 7.26786 2.26065 5.71429C2.26065 4.16071 3.39025 2.82143 5.02818 2.82143C5.93186 2.82143 6.83554 3.25 7.40034 3.94643L8.69938 3.14286C7.85218 2.01786 6.49666 1.375 5.02818 1.375C2.54305 1.375 0.509766 3.30357 0.509766 5.71429C0.509766 8.125 2.43009 10.0536 5.02818 10.0536C7.62626 10.0536 9.54659 8.125 9.54659 5.71429C9.60307 5.55357 9.54659 5.44643 9.54659 5.33929Z",fill:"black"})))),C.createElement("p",null,"and hosted on"),C.createElement("div",{className:"ml-1 flex items-center"},C.createElement("span",{className:"mr-1"},C.createElement("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.62749 3.61755C4.8785 3.72357 6.63303 4.4646 6.85863 4.56243C6.87306 4.56868 6.8898 4.57551 6.90099 4.56448C7.05213 4.44362 7.24645 4.37258 7.44082 4.37258C7.52827 4.37258 7.61578 4.38499 7.70318 4.40982C7.7154 4.41326 7.73019 4.41664 7.74062 4.40951C7.74817 4.40428 7.75274 4.3973 7.75772 4.38961L9.48508 1.71709L8.95871 1.19133C8.6223 0.855259 8.45407 0.687223 8.25949 0.625759C8.09557 0.573966 7.91958 0.573966 7.75566 0.625759C7.56109 0.687223 7.39285 0.855259 7.05644 1.19133L4.62749 3.61755ZM4.38114 8.79637L2.37247 5.87012L4.24868 3.99596C4.42398 4.07255 5.05921 4.34072 5.63026 4.58182L5.64053 4.58612C6.07534 4.76966 6.47122 4.93679 6.59539 4.99039C6.60792 4.99578 6.61932 5.0007 6.62482 5.01311C6.6281 5.0206 6.62651 5.03045 6.62482 5.03846C6.61213 5.09842 6.60587 5.15839 6.60587 5.21835C6.60587 5.43867 6.69224 5.64483 6.84338 5.80118C6.8558 5.81339 6.84332 5.83134 6.83233 5.84709L6.83172 5.84796L6.8291 5.85181L6.82648 5.85576L4.92184 8.80314C4.91671 8.81109 4.91188 8.81853 4.90392 8.82371C4.89381 8.83033 4.87963 8.82735 4.86792 8.82438C4.79372 8.8056 4.71417 8.79339 4.64084 8.79339C4.57264 8.79339 4.49803 8.80617 4.42305 8.81956L4.42238 8.81971C4.41432 8.8212 4.40673 8.82253 4.40002 8.81766C4.39268 8.81237 4.38628 8.80386 4.38114 8.79637ZM11.8028 6.29865C11.7471 6.23679 11.678 6.18164 11.5954 6.13948C11.5935 6.1385 11.5916 6.13779 11.5898 6.13707C11.5864 6.13573 11.5831 6.1345 11.5801 6.13163C11.5703 6.12245 11.5665 6.10598 11.5686 6.0928L11.8913 4.12056L13.4059 5.63354L11.8309 6.30291C11.8266 6.30481 11.8219 6.30573 11.8171 6.30573C11.8141 6.30573 11.8123 6.30573 11.8108 6.30522C11.8087 6.30445 11.8067 6.3025 11.8028 6.29865ZM12.1293 6.72205L13.792 6.01934L15.4113 7.63682C15.7477 7.97281 15.916 8.14096 15.9775 8.33527C15.9866 8.36394 15.9941 8.39303 16 8.42232L12.1303 6.78561L12.1242 6.78314C12.1086 6.77678 12.0906 6.76955 12.0906 6.7536C12.0906 6.73795 12.109 6.73041 12.1243 6.7241L12.1293 6.72205ZM15.9339 8.94154L11.9023 7.2383C11.8889 7.23265 11.8725 7.22614 11.8594 7.2324C11.8549 7.2345 11.8523 7.23804 11.8494 7.24194L11.8481 7.24368C11.733 7.39614 11.5623 7.49314 11.3637 7.52114C11.3444 7.52114 11.341 7.54556 11.3381 7.56634L11.3368 7.57536L10.8924 10.2985L10.8914 10.3043C10.8889 10.3182 10.8862 10.3333 10.8959 10.3429C11.0542 10.4637 11.1478 10.6413 11.1694 10.8404C11.1694 10.8595 11.192 10.8632 11.2127 10.8666L11.2144 10.8669L11.2168 10.8673L11.2238 10.8685L11.2251 10.8688L13.5863 11.36L15.4114 9.53693C15.6874 9.26122 15.8504 9.09835 15.9339 8.94154ZM11.0521 11.3462L13.1662 11.7797L10.1643 14.7783L10.6785 11.6234L10.6791 11.6191C10.6797 11.6153 10.6802 11.611 10.6816 11.6074C10.6856 11.5972 10.6966 11.5929 10.707 11.5888L10.712 11.5868C10.8261 11.5394 10.9229 11.4641 11.0024 11.3711C11.0125 11.3593 11.0247 11.3483 11.04 11.3456C11.0434 11.3451 11.0487 11.3454 11.0521 11.3462ZM9.52909 15.4129C9.64931 14.6764 10.0974 11.9485 10.1495 11.6312C10.1505 11.6253 10.1531 11.6187 10.1556 11.6124C10.161 11.5986 10.1662 11.5854 10.1545 11.5797C9.94356 11.4963 9.7876 11.3113 9.72675 11.0974C9.72598 11.0946 9.72542 11.0918 9.72495 11.0892C9.72372 11.0826 9.72259 11.0768 9.71725 11.0715C9.7097 11.0641 9.69579 11.0597 9.68546 11.0576L5.54091 10.2038C5.53115 10.2018 5.51924 10.1998 5.5104 10.2045C5.50023 10.2099 5.49474 10.2193 5.48894 10.2292L5.48811 10.2306L5.47964 10.2451C5.46896 10.2634 5.45925 10.2801 5.4478 10.2965L5.44647 10.2983L5.44375 10.3018C5.43943 10.3073 5.43512 10.3127 5.43455 10.3195C5.43368 10.3288 5.43969 10.3368 5.44559 10.3445C5.44708 10.3465 5.44852 10.3484 5.44991 10.3504L9.19057 15.751L9.52909 15.4129ZM5.06312 10.6697L8.82217 16.1186C8.57285 16.3651 8.42582 16.4955 8.25954 16.5481C8.09562 16.5999 7.91958 16.5999 7.75566 16.5481C7.56109 16.4866 7.39285 16.3186 7.05644 15.9825L3.29977 12.23L4.28082 10.7096C4.28567 10.7021 4.29006 10.6953 4.29737 10.6901C4.30802 10.6826 4.32323 10.6862 4.33567 10.6901C4.43666 10.7212 4.53192 10.7339 4.6336 10.7339C4.76481 10.7339 4.88939 10.7077 5.02003 10.6554C5.03107 10.6509 5.04252 10.6483 5.05136 10.6562C5.05557 10.6599 5.05993 10.6651 5.06312 10.6697ZM2.93757 11.868L3.878 10.4107C3.88265 10.4035 3.88618 10.3967 3.88136 10.3895C3.88017 10.3878 3.87728 10.3846 3.876 10.383C3.85976 10.3616 3.84352 10.3401 3.82728 10.3154C3.82537 10.3125 3.82351 10.3094 3.82161 10.3061C3.81391 10.2929 3.80563 10.2788 3.79154 10.2788C3.78679 10.2788 3.78209 10.2798 3.77772 10.2817L2.07547 11.0069L2.93757 11.868ZM3.50598 9.85964L1.69427 10.6263L0.603841 9.53709C0.418533 9.35196 0.283993 9.21756 0.190505 9.10194L3.5054 9.78859C3.50931 9.78942 3.51354 9.79008 3.51785 9.7908C3.53851 9.79413 3.56112 9.79788 3.56112 9.81696C3.56112 9.83774 3.53659 9.84743 3.51563 9.85569L3.50598 9.85964ZM0 8.54184L3.73826 9.32447L3.73921 9.32462C3.7455 9.32595 3.7512 9.32713 3.75673 9.32375C3.76583 9.3181 3.77233 9.30744 3.77741 9.29805C3.82039 9.21823 3.88153 9.14483 3.94268 9.07778C3.95531 9.06532 3.94285 9.04849 3.93153 9.03326L3.92842 9.02905L3.92597 9.02561C3.74866 8.7719 2.22954 6.57986 1.99956 6.24269L0.603867 7.63682C0.267427 7.97291 0.0991989 8.14096 0.0376676 8.33527C0.0163406 8.40267 0.00378473 8.47207 0 8.54184ZM8.15339 4.71375L9.85174 2.08341L11.4471 3.67698L11.063 6.05433C11.0627 6.05622 11.0624 6.05843 11.0622 6.06074C11.0616 6.06618 11.061 6.07223 11.059 6.07649C11.0553 6.08485 11.047 6.08675 11.0383 6.08875C11.0353 6.08941 11.0323 6.09008 11.0293 6.09105C10.9485 6.11742 10.8736 6.15456 10.8092 6.20257C10.8061 6.20483 10.8037 6.20745 10.8012 6.21001C10.7964 6.21514 10.7918 6.21986 10.7844 6.22032C10.7794 6.22063 10.7711 6.21955 10.7665 6.2176L8.33606 5.18603L8.33113 5.18398C8.31577 5.17767 8.29734 5.17008 8.29734 5.15439C8.28424 5.02461 8.24105 4.89488 8.17342 4.78136L8.16813 4.77269C8.15627 4.75356 8.14353 4.73314 8.15339 4.71375ZM8.20952 5.67468C8.19627 5.66904 8.17974 5.66458 8.16839 5.67335C8.16243 5.67802 8.15863 5.68361 8.15437 5.68987C7.99533 5.92578 7.7322 6.06423 7.44811 6.06423C7.41037 6.06423 7.37272 6.05879 7.3302 6.05269L7.31136 6.05002C7.29128 6.05002 7.2789 6.06951 7.26781 6.08695L7.26457 6.09208L5.39203 8.98765C5.39096 8.9893 5.38983 8.99094 5.38864 8.99268C5.38782 8.99386 5.387 8.99499 5.38618 8.99617C5.37524 9.01197 5.36271 9.03002 5.37509 9.04223C5.38233 9.04936 5.38952 9.04936 5.39671 9.04936C5.40364 9.04936 10.1102 7.0446 10.471 6.89087L10.4759 6.88881C10.4908 6.88271 10.5072 6.87589 10.5072 6.86024V6.79628C10.5072 6.75801 10.513 6.71969 10.5194 6.6865C10.5208 6.67917 10.5222 6.67004 10.5194 6.66301C10.514 6.64993 10.5007 6.64429 10.4877 6.6388L8.20952 5.67468ZM5.63581 9.6205C5.61937 9.56484 5.60248 9.50754 5.60027 9.50718L10.7302 7.32211C10.7302 7.32211 10.7375 7.32217 10.7447 7.3293C10.7728 7.357 10.7965 7.37608 10.8192 7.39326C10.8225 7.39578 10.8264 7.39798 10.8302 7.40024C10.8408 7.40634 10.8518 7.41276 10.8525 7.42394C10.8527 7.42773 10.8523 7.43066 10.8517 7.43445L10.412 10.1308C10.4115 10.1336 10.4111 10.1364 10.4107 10.1394L10.4104 10.1415C10.4076 10.1627 10.4045 10.1864 10.3848 10.1864C10.1463 10.2003 9.93525 10.3356 9.81138 10.5397L9.80938 10.543C9.80363 10.5527 9.79813 10.5619 9.78807 10.5669C9.77959 10.5712 9.76824 10.5693 9.75905 10.5674L5.66826 9.72442C5.66636 9.72401 5.65132 9.67302 5.63581 9.6205Z",fill:"url(#paint0_radial_2859_545)"}),C.createElement("defs",null,C.createElement("radialGradient",{id:"paint0_radial_2859_545",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(8 0.586912) rotate(90) scale(16 18.432)"},C.createElement("stop",{"stop-color":"#00CEBF"}),C.createElement("stop",{offset:"1","stop-color":"#008FC9"}))))),C.createElement("span",{className:"svg"},C.createElement("svg",{width:"34",height:"12",viewBox:"0 0 34 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C.createElement("path",{d:"M1.35766 2.84672L1.40146 3.59124C1.88321 3.0219 2.54015 2.71533 3.28467 2.71533C4.64234 2.71533 5.34306 3.50365 5.34306 5.0365V9.32847H3.94161V5.12409C3.94161 4.68613 3.85402 4.42336 3.67883 4.24817C3.50365 4.0292 3.24088 3.89781 2.80292 3.89781C2.23358 3.89781 1.79562 4.16058 1.48905 4.72993V9.32847H0V2.84672H1.35766ZM9.67883 9.41606C8.80292 9.41606 8.0146 9.15328 7.48905 8.54015C6.87591 7.9708 6.61314 7.22628 6.61314 6.26277V6.08759C6.61314 5.43066 6.70073 4.86131 6.9635 4.33577C7.18425 3.8485 7.54188 3.43591 7.99286 3.14821C8.44385 2.86051 8.96874 2.71011 9.50365 2.71533C10.3796 2.71533 11.0803 3.0219 11.562 3.59124C12.0831 4.26618 12.347 5.10449 12.3066 5.9562V6.52555H8.05839C8.10219 7.09489 8.27737 7.48905 8.58394 7.83942C8.89051 8.14598 9.28467 8.27737 9.76642 8.27737C10.4234 8.27737 10.9927 8.0146 11.3869 7.48905L12.1752 8.23358C11.9204 8.60738 11.5734 8.90909 11.1679 9.10949C10.7299 9.32847 10.2482 9.45985 9.67883 9.45985V9.41606ZM9.50365 3.94161C9.10949 3.94161 8.80292 4.07299 8.54015 4.37956C8.28924 4.70997 8.13736 5.10486 8.10219 5.51825H10.8613V5.43066C10.8687 5.01643 10.7291 4.61298 10.4672 4.29197C10.2482 4.07299 9.9416 3.94161 9.50365 3.94161ZM15.2409 1.31387V2.89051H16.3796V3.94161H15.2409V7.53285C15.2409 7.79562 15.2847 7.9708 15.3723 8.05839C15.5036 8.18978 15.6788 8.23358 15.8978 8.23358L16.4234 8.18978V9.28467C16.1117 9.38679 15.7875 9.44573 15.4599 9.45985C14.365 9.45985 13.7956 8.84671 13.7956 7.57664V3.94161H12.7007V2.84672H13.7518V1.27007H15.1971L15.2409 1.31387ZM19.0511 9.37226H17.6058V0.175183H19.0511V9.37226ZM22.1606 9.37226H20.7153V2.84672H22.1606V9.32847V9.37226ZM20.6277 1.22628C20.6277 0.963504 20.7153 0.788321 20.8467 0.656934C20.9781 0.481752 21.1971 0.437956 21.4599 0.437956C21.7226 0.437956 21.8978 0.481752 22.073 0.656934C22.2044 0.788321 22.292 0.963504 22.292 1.22628C22.292 1.44526 22.2044 1.62044 22.073 1.75182C21.9416 1.88321 21.7226 1.9708 21.4599 1.9708C21.1971 1.9708 21.0219 1.88321 20.8467 1.75182C20.7153 1.62044 20.6277 1.44526 20.6277 1.22628ZM24.2628 9.37226V3.94161H23.2993V2.84672H24.2628V2.23358C24.2628 1.53285 24.4818 0.963504 24.8759 0.569343C25.2701 0.175183 25.8394 0 26.5401 0C26.8029 0 27.0657 -8.48387e-08 27.3723 0.0875912L27.3285 1.22628C27.1392 1.20725 26.9484 1.20725 26.7591 1.22628C26.0584 1.22628 25.708 1.53285 25.708 2.27737V2.84672H27.0219V3.94161H25.708V9.32847H24.2628V9.37226ZM30.3942 7.27007L31.708 2.89051H33.2409L30.6569 10.3358C30.2628 11.4307 29.6058 12 28.6423 12C28.4039 11.9882 28.1681 11.944 27.9416 11.8686V10.7299H28.2482C28.5985 10.7299 28.8613 10.7299 29.0803 10.5547C29.2902 10.3858 29.4431 10.1565 29.5182 9.89781L29.6934 9.32847L27.4161 2.89051H28.9927L30.3942 7.27007Z",fill:"black","fill-opacity":"0.85"})))),C.createElement("p",null,".")),C.createElement("p",null,"Dennis Tamunotonye Dickson © 2023")));var c=e=>{let{children:t}=e;return C.createElement(n.StaticQuery,{query:"1947816842",render:e=>C.createElement(C.Fragment,null,C.createElement(r,{menuLinks:e.site.siteMetadata.menuLinks,siteTitle:e.site.siteMetadata.title}),C.createElement("div",{className:"dark:text-[#eee]"},t),C.createElement(i,null))})}},8416:function(e,t,l){var C=l(4062);e.exports=function(e,t,l){return(t=C(t))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,l){var C=l(8698).default;e.exports=function(e,t){if("object"!==C(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var n=l.call(e,t||"default");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,l){var C=l(8698).default,n=l(5036);e.exports=function(e){var t=n(e,"string");return"symbol"===C(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(l){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(l)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=453af3d2a85764c44c6ae1c6894a953e54de37db-57e097d0b55709c9d849.js.map