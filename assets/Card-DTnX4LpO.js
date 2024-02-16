import{r as d,d as F,j as s,a as I,b as $,e as E,f as S}from"./index-tkOkBo6n.js";const M="_wrapper_ghsyr_1",A="_image_ghsyr_7",P="_titleWrapper_ghsyr_15",R="_title_ghsyr_15",T="_make_ghsyr_32",D="_model_ghsyr_36",z="_price_ghsyr_40",B="_optionsWrapper_ghsyr_45",q="_option_ghsyr_45",K="_btn_ghsyr_66",U="_btnFav_ghsyr_81",Y="_fav_ghsyr_93",Z="_btnFavActive_ghsyr_99",n={wrapper:M,image:A,titleWrapper:P,title:R,make:T,model:D,price:z,optionsWrapper:B,option:q,btn:K,btnFav:U,fav:Y,btnFavActive:Z},G=o=>o.favorites.items,H="_backdrop_12tms_1",J="_modal_12tms_11",O="_btnClose_12tms_47",Q="_image_12tms_61",V="_title_12tms_69",X="_model_12tms_77",ss="_optionsWrapper_12tms_81",es="_option_12tms_81",ns="_description_12tms_104",ts="_optionsTitle_12tms_112",os="_conditionsWrapper_12tms_121",as="_conditionsItem_12tms_127",is="_blue_12tms_140",cs="_btn_12tms_47",ls="_content_12tms_161",e={backdrop:H,modal:J,btnClose:O,image:Q,title:V,model:X,optionsWrapper:ss,option:es,description:ns,optionsTitle:ts,conditionsWrapper:os,conditionsItem:as,blue:is,btn:cs,content:ls},rs="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%206L6%2018'%20stroke='%23121417'%20stroke-width='1.8'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6%206L18%2018'%20stroke='%23121417'%20stroke-width='1.8'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",ps=document.querySelector("#root-modal"),ds=({onClose:o,data:m})=>{const i=d.useRef(null),{id:N,make:u,model:a,year:h,address:_,accessories:v,functionalities:g,rentalCompany:b,rentalPrice:y,img:C,type:f,mileage:r,engineSize:w,fuelConsumption:x,description:k,rentalConditions:j}=m,p=_.split(",")[1],W=_.split(",")[2],c=j.split(`
`);return d.useEffect(()=>{const t=L=>{L.code==="Escape"&&o(!1)},l=L=>{i.current&&!i.current.contains(L.target)&&o(!1)};return window.addEventListener("keydown",t),document.addEventListener("mousedown",l),document.body.classList.add("body-scroll-lock"),()=>{window.removeEventListener("keydown",t),document.addEventListener("mousedown",l),document.body.classList.remove("body-scroll-lock")}},[o]),F.createPortal(s.jsx("div",{className:e.backdrop,children:s.jsxs("div",{ref:i,className:e.modal,onClick:t=>t.stopPropagation(),children:[s.jsx("button",{className:e.btnClose,onClick:()=>o(!1),children:s.jsx("img",{src:rs,width:24,alt:"Close"})}),s.jsxs("div",{className:e.content,children:[s.jsx("img",{className:e.image,src:C,alt:a}),s.jsxs("h3",{className:e.title,children:[`${u} `,s.jsx("span",{className:e.model,children:a}),`, ${h}`]}),s.jsxs("div",{className:e.optionsWrapper,children:[s.jsx("span",{className:e.option,children:p}),s.jsx("span",{className:e.option,children:W}),s.jsxs("span",{className:e.option,children:["Id: ",N]}),s.jsxs("span",{className:e.option,children:["Year: ",h]}),s.jsxs("span",{className:e.option,children:["Type: ",f]})]}),s.jsxs("div",{className:e.optionsWrapper,children:[s.jsxs("span",{className:e.option,children:["Fuel Consumption:",x]}),s.jsxs("span",{className:e.option,children:["Engine Size: ",w,b]})]}),s.jsx("p",{className:e.description,children:k}),s.jsx("h4",{className:e.optionsTitle,children:"Accessories and functionalities:"}),s.jsx("div",{className:e.optionsWrapper,children:v.map((t,l)=>s.jsx("span",{className:e.option,children:t},l))}),s.jsx("div",{className:e.optionsWrapper,children:g.map((t,l)=>s.jsx("span",{className:e.option,children:t},l))}),s.jsx("h4",{className:e.optionsTitle,children:"Rental Conditions: "}),s.jsxs("div",{className:e.conditionsWrapper,children:[s.jsxs("span",{className:e.conditionsItem,children:[c[0].split(":")[0],":"," ",s.jsx("span",{className:e.blue,children:c[0].split(":")[1]})]}),s.jsx("span",{className:e.conditionsItem,children:c[1]})]}),s.jsxs("div",{className:e.conditionsWrapper,children:[s.jsx("span",{className:e.conditionsItem,children:c[2]}),s.jsxs("span",{className:e.conditionsItem,children:["Mileage:"," ",s.jsx("span",{className:e.blue,children:new Intl.NumberFormat("en-US").format(r)})]}),s.jsxs("span",{className:e.conditionsItem,children:["Price: ",s.jsxs("span",{className:e.blue,children:[y,"$"]})]})]}),s.jsx("button",{className:e.btn,type:"button",children:"Rental car"})]})]})}),ps)},hs=({data:o})=>{const{id:m,make:i,model:N,year:u,address:a,accessories:h,rentalCompany:_,rentalPrice:v,img:g,type:b,mileage:y}=o,C=a==null?void 0:a.split(",")[1],f=a==null?void 0:a.split(",")[2],r=I(),[w,x]=d.useState(!1),[k,j]=d.useState(!1),p=$(G);d.useEffect(()=>{p.find(t=>t.id===m)?x(!0):x(!1)},[p,r]);const W=()=>{p.find(t=>t.id===m)?r(E(o.id)):r(S(o))},c=()=>{j(!0)};return s.jsxs("div",{className:n.wrapper,children:[s.jsxs("div",{className:"",children:[s.jsx("img",{className:n.image,src:g}),s.jsxs("div",{className:n.titleWrapper,children:[s.jsxs("h3",{className:n.title,children:[`${i} `,s.jsx("span",{className:n.model,children:N}),`, ${u}`]}),s.jsxs("span",{className:n.price,children:["$",v]})]}),s.jsxs("div",{children:[s.jsxs("div",{className:n.optionsWrapper,children:[s.jsx("span",{className:n.option,children:C}),s.jsx("span",{className:n.option,children:f}),s.jsx("span",{className:n.option,children:_}),s.jsx("span",{className:n.option,children:"Premium"})]}),s.jsxs("div",{className:n.optionsWrapper,children:[s.jsx("span",{className:n.option,children:b}),s.jsx("span",{className:n.option,children:i}),s.jsx("span",{className:n.option,children:y}),s.jsx("span",{className:n.option,children:h[0]})]})]}),s.jsx("button",{className:n.btn,onClick:c,children:"Learn more"})]}),s.jsx("button",{className:w?n.btnFavActive:n.btnFav,onClick:t=>W(),children:s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z"})})}),k&&s.jsx(ds,{onClose:j,data:o})]})};export{hs as C,G as s};