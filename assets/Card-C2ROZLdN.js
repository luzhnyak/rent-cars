import{r as m,d as $,j as s,u as I,c as E,e as L,f as M}from"./index-DL3din6t.js";const S=t=>t.favorites.items,A="_wrapper_eyb12_1",P="_image_eyb12_7",R="_titleWrapper_eyb12_15",T="_title_eyb12_15",z="_make_eyb12_32",B="_model_eyb12_36",D="_price_eyb12_40",q="_optionsWrapper_eyb12_45",H="_option_eyb12_45",K="_btn_eyb12_70",U="_btnFav_eyb12_85",Y="_btnFavActive_eyb12_100",n={wrapper:A,image:P,titleWrapper:R,title:T,make:z,model:B,price:D,optionsWrapper:q,option:H,btn:K,btnFav:U,btnFavActive:Y},G="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='icon-close'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='2.4'%20d='M24%208l-16%2016'%3e%3c/path%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='2.4'%20d='M8%208l16%2016'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-dropdown'%20viewBox='0%200%2020%2020'%3e%3cpath%20d='M5%2012.5L10%207.5L15%2012.5'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/symbol%3e%3csymbol%20id='icon-fav'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='1.7778'%20d='M27.787%206.147c-0.681-0.681-1.49-1.222-2.38-1.591s-1.844-0.559-2.807-0.559c-0.963%200-1.917%200.19-2.807%200.559s-1.698%200.909-2.38%201.591l-1.413%201.413-1.413-1.413c-1.376-1.376-3.241-2.148-5.187-2.148s-3.811%200.773-5.187%202.148c-1.376%201.376-2.148%203.241-2.148%205.187s0.773%203.811%202.148%205.187l11.787%2011.787%2011.787-11.787c0.681-0.681%201.222-1.49%201.591-2.38s0.559-1.844%200.559-2.807c0-0.963-0.19-1.917-0.559-2.807s-0.909-1.699-1.591-2.38z'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",J="_backdrop_glbs4_1",O="_modal_glbs4_11",Q="_btnClose_glbs4_25",V="_image_glbs4_45",X="_title_glbs4_57",Z="_model_glbs4_65",ss="_optionsWrapper_glbs4_69",es="_option_glbs4_69",ns="_description_glbs4_95",os="_optionsTitle_glbs4_103",ts="_conditionsWrapper_glbs4_112",is="_conditionsItem_glbs4_119",as="_blue_glbs4_132",cs="_btn_glbs4_25",e={backdrop:J,modal:O,btnClose:Q,image:V,title:X,model:Z,optionsWrapper:ss,option:es,description:ns,optionsTitle:os,conditionsWrapper:ts,conditionsItem:is,blue:as,btn:cs},ls=document.querySelector("#root-modal"),rs=({onClose:t,data:r})=>{const a=m.useRef(null),{id:h,make:u,model:i,year:_,address:x,accessories:N,functionalities:v,rentalCompany:g,rentalPrice:y,img:w,type:k,mileage:d,engineSize:f,fuelConsumption:b,description:C,rentalConditions:j}=r,p=x.split(",")[1],W=x.split(",")[2],c=j.split(`
`);return m.useEffect(()=>{const o=F=>{F.code==="Escape"&&t(!1)},l=F=>{a.current&&!a.current.contains(F.target)&&t(!1)};return window.addEventListener("keydown",o),document.addEventListener("mousedown",l),document.body.classList.add("body-scroll-lock"),()=>{window.removeEventListener("keydown",o),document.addEventListener("mousedown",l),document.body.classList.remove("body-scroll-lock")}},[t]),$.createPortal(s.jsx("div",{className:e.backdrop,children:s.jsxs("div",{ref:a,className:e.modal,onClick:o=>o.stopPropagation(),children:[s.jsx("button",{className:e.btnClose,onClick:()=>t(!1),children:s.jsx("svg",{width:"24",height:"24",alt:"Close",children:s.jsx("use",{xlinkHref:`${G}#icon-close`})})}),s.jsxs("div",{className:e.content,children:[s.jsx("img",{className:e.image,src:w,alt:i}),s.jsxs("h3",{className:e.title,children:[`${u} `,s.jsx("span",{className:e.model,children:i}),`, ${_}`]}),s.jsxs("div",{className:e.optionsWrapper,children:[s.jsx("span",{className:e.option,children:p}),s.jsx("span",{className:e.option,children:W}),s.jsxs("span",{className:e.option,children:["Id: ",h]}),s.jsxs("span",{className:e.option,children:["Year: ",_]}),s.jsxs("span",{className:e.option,children:["Type: ",k]})]}),s.jsxs("div",{className:e.optionsWrapper,children:[s.jsxs("span",{className:e.option,children:["Fuel Consumption: ",b]}),s.jsxs("span",{className:e.option,children:["Engine Size: ",f,g]})]}),s.jsx("p",{className:e.description,children:C}),s.jsx("h4",{className:e.optionsTitle,children:"Accessories and functionalities:"}),s.jsx("div",{className:e.optionsWrapper,children:N.map((o,l)=>s.jsx("span",{className:e.option,children:o},l))}),s.jsx("div",{className:e.optionsWrapper,children:v.map((o,l)=>s.jsx("span",{className:e.option,children:o},l))}),s.jsx("h4",{className:e.optionsTitle,children:"Rental Conditions: "}),s.jsxs("div",{className:e.conditionsWrapper,children:[s.jsxs("span",{className:e.conditionsItem,children:[c[0].split(":")[0],":"," ",s.jsx("span",{className:e.blue,children:c[0].split(":")[1]})]}),s.jsx("span",{className:e.conditionsItem,children:c[1]})]}),s.jsxs("div",{className:e.conditionsWrapper,children:[s.jsx("span",{className:e.conditionsItem,children:c[2]}),s.jsxs("span",{className:e.conditionsItem,children:["Mileage:"," ",s.jsx("span",{className:e.blue,children:new Intl.NumberFormat("en-US").format(d)})]}),s.jsxs("span",{className:e.conditionsItem,children:["Price: ",s.jsxs("span",{className:e.blue,children:[y,"$"]})]})]}),s.jsx("a",{className:e.btn,href:"tel:+380730000000",children:"Rental car"})]})]})}),ls)},ps=({data:t})=>{const{id:r,make:a,model:h,year:u,address:i,accessories:_,rentalCompany:x,rentalPrice:N,img:v,type:g,mileage:y}=t,w=i==null?void 0:i.split(",")[1],k=i==null?void 0:i.split(",")[2],d=I(),[f,b]=m.useState(!1),[C,j]=m.useState(!1),p=E(S);m.useEffect(()=>{p.find(o=>o.id===r)?b(!0):b(!1)},[p,d,r]);const W=()=>{p.find(o=>o.id===r)?d(L(t.id)):d(M(t))},c=()=>{j(!0)};return s.jsxs("div",{className:n.wrapper,children:[s.jsxs("div",{className:"",children:[s.jsx("img",{className:n.image,src:v,alt:h,width:"274"}),s.jsxs("div",{className:n.titleWrapper,children:[s.jsxs("h3",{className:n.title,children:[`${a} `,s.jsx("span",{className:n.model,children:h}),`, ${u}`]}),s.jsxs("span",{className:n.price,children:["$",N]})]}),s.jsxs("div",{children:[s.jsxs("div",{className:n.optionsWrapper,children:[s.jsx("span",{className:n.option,children:w}),s.jsx("span",{className:n.option,children:k}),s.jsx("span",{className:n.option,children:x}),s.jsx("span",{className:n.option,children:"Premium"})]}),s.jsxs("div",{className:n.optionsWrapper,children:[s.jsx("span",{className:n.option,children:g}),s.jsx("span",{className:n.option,children:a}),s.jsx("span",{className:n.option,children:y}),s.jsx("span",{className:n.option,children:_[0]})]})]}),s.jsx("button",{className:n.btn,onClick:c,children:"Learn more"})]}),s.jsx("button",{className:f?n.btnFavActive:n.btnFav,onClick:o=>W(),children:s.jsx("svg",{width:"18",height:"18",children:s.jsx("use",{href:"/icons.svg#icon-fav"})})}),C&&s.jsx(rs,{onClose:j,data:t})]})};export{ps as C,S as s};