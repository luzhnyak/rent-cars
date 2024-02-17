import{r as i,j as e,u as y,a as v,b as C,c as f,g as w,L,i as S}from"./index-BI2VifKY.js";import{C as N}from"./Card-DUM0P40X.js";const k="_container_mo2uy_1",W="_sectionCatalog_mo2uy_7",E="_btn_mo2uy_16",x={container:k,sectionCatalog:W,btn:E},P=s=>s.cars.items,F=s=>s.cars.page,M=s=>s.cars.isLoading,T="_container_cyebt_1",B="_brandWrapper_cyebt_9",A="_priceWrapper_cyebt_13",$="_label_cyebt_17",q="_select_cyebt_25",D="_option_cyebt_38",I="_inputStyle_cyebt_47",O="_btn_cyebt_69",R="_inputWrapper_cyebt_85",H="_inputLabel_cyebt_90",K="_inputFrom_cyebt_96",z="_inputTo_cyebt_111",o={container:T,brandWrapper:B,priceWrapper:A,label:$,select:q,option:D,inputStyle:I,btn:O,inputWrapper:R,inputLabel:H,inputFrom:K,inputTo:z},G=["All","Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"],U=["30","40","50","60","70","80","90","100","120","140","160","180","200"],V="_wrapper_1h9qj_1",J="_btn_1h9qj_8",Q="_listWrapper_1h9qj_20",X="_list_1h9qj_20",Y="_item_1h9qj_40",b={wrapper:V,btn:J,listWrapper:Q,list:X,item:Y},Z="data:image/svg+xml,%3csvg%20width='12'%20height='8'%20viewBox='0%200%2012%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%206.5L6%201.5L11%206.5'%20stroke='%23121417'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",ee=({items:s,onSelect:a,onClose:c})=>{const r=i.useRef(null);return i.useEffect(()=>{const n=u=>{u.code==="Escape"&&c(!1)},l=u=>{r.current&&!r.current.contains(u.target)&&c(!1)};return window.addEventListener("keydown",n),document.addEventListener("mousedown",l),()=>{window.removeEventListener("keydown",n),document.addEventListener("mousedown",l)}},[c]),e.jsx("div",{className:b.listWrapper,ref:r,children:e.jsx("ul",{className:b.list,children:s.map(n=>e.jsx("li",{className:b.item,onClick:()=>a(n),children:n},n))})})},j=({items:s=[],defaultSelect:a,onSelect:c})=>{const[r,n]=i.useState(!1),[l,u]=i.useState(a),m=h=>{c(h),u(h),n(!1)};return e.jsxs("div",{className:b.wrapper,children:[e.jsxs("button",{className:b.btn,onClick:()=>n(!r),children:[l,e.jsx("img",{src:Z,alt:"dropdown"})]}),r&&e.jsx(ee,{items:s,onSelect:m,onClose:()=>n(!1)})]})},te=()=>{const s=y(),[a,c]=v(),[r,n]=i.useState(a.get("price")),[l,u]=i.useState(a.get("from")),[m,h]=i.useState(a.get("to")),[t]=i.useState({make:a.get("make")??"",price:a.get("price")??"",from:a.get("from")??"",to:a.get("to")??""});for(var _ in t)t[_]||delete t[_];const g=async p=>{if(s(C()),p==="All"){delete t.make,c(t);return}t.make=p,c(t)},d=()=>{r?t.price=r:delete t.price,l?t.from=l:delete t.from,m?t.to=m:delete t.to,c(t)};return e.jsxs("div",{className:o.container,children:[e.jsxs("div",{className:o.brandWrapper,children:[e.jsx("span",{className:o.label,children:"Car brand"}),e.jsx(j,{items:G,defaultSelect:(t==null?void 0:t.make)||"Enter the text",onSelect:g})]}),e.jsxs("div",{className:o.priceWrapper,children:[e.jsx("span",{className:o.label,children:"Price/ 1 hour"}),e.jsx(j,{items:U,defaultSelect:r||"To $",onSelect:n})]}),e.jsxs("div",{children:[e.jsx("span",{className:o.label,children:"Car mileage / km"}),e.jsxs("div",{className:o.inputWrapper,children:[e.jsx("label",{className:o.inputLabel,htmlFor:"from",children:"From"}),e.jsx("input",{id:"from",className:o.inputFrom,type:"number",value:l||"",onChange:p=>u(p.target.value)})]}),e.jsxs("div",{className:o.inputWrapper,children:[e.jsx("label",{className:o.inputLabel,htmlFor:"to",children:"To"}),e.jsx("input",{id:"to",className:o.inputTo,type:"number",value:m||"",onChange:p=>h(p.target.value)})]})]}),e.jsx("button",{className:o.btn,type:"button",onClick:d,children:"Search"})]})},se=()=>{const[s]=v(),a=s.get("make"),c=s.get("price"),r=s.get("from"),n=s.get("to"),l=f(P),u=f(M),m=f(F),[h,t]=i.useState([]),_=y();i.useEffect(()=>{_(w({page:m,make:a}))},[_,m,a]),i.useEffect(()=>()=>{_(C())},[_]),i.useEffect(()=>{let d=[...l];c&&(d=d.filter(p=>p.rentalPrice<=c)),r&&n&&(d=d.filter(p=>p.mileage>=r&&p.mileage<=n)),t(d)},[l,c,r,n]);const g=()=>{_(S())};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:x.container,children:[e.jsx(te,{}),e.jsx("section",{className:x.sectionCatalog,children:h&&h.map(d=>e.jsx(N,{data:d},d.id))}),m<3&&!a&&e.jsx("button",{className:x.btn,type:"button",onClick:g,children:"Load more"})]}),u&&e.jsx(L,{})]})},re=()=>e.jsx("main",{children:e.jsx(se,{})});export{re as default};
