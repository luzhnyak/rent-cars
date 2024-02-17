import{r as i,j as e,u as y,a as v,b as C,c as x,g as S,L as N,i as L}from"./index-DR11ffR_.js";import{I as w,C as W}from"./Card-BFkdE9Z_.js";const k="_container_mo2uy_1",E="_sectionCatalog_mo2uy_7",P="_btn_mo2uy_16",g={container:k,sectionCatalog:E,btn:P},F=s=>s.cars.items,T=s=>s.cars.page,M=s=>s.cars.isLoading,$="_container_cyebt_1",A="_brandWrapper_cyebt_9",B="_priceWrapper_cyebt_13",I="_label_cyebt_17",D="_select_cyebt_25",O="_option_cyebt_38",R="_inputStyle_cyebt_47",H="_btn_cyebt_69",K="_inputWrapper_cyebt_85",z="_inputLabel_cyebt_90",G="_inputFrom_cyebt_96",U="_inputTo_cyebt_111",o={container:$,brandWrapper:A,priceWrapper:B,label:I,select:D,option:O,inputStyle:R,btn:H,inputWrapper:K,inputLabel:z,inputFrom:G,inputTo:U},V=["All","Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"],q=["30","40","50","60","70","80","90","100","120","140","160","180","200"],J="_wrapper_1776v_1",Q="_btn_1776v_8",X="_listWrapper_1776v_30",Y="_list_1776v_30",Z="_item_1776v_50",h={wrapper:J,btn:Q,listWrapper:X,list:Y,item:Z},ee=({items:s,onSelect:a,onClose:c})=>{const r=i.useRef(null);return i.useEffect(()=>{const n=u=>{u.code==="Escape"&&c(!1)},l=u=>{r.current&&!r.current.contains(u.target)&&c(!1)};return window.addEventListener("keydown",n),document.addEventListener("mousedown",l),()=>{window.removeEventListener("keydown",n),document.addEventListener("mousedown",l)}},[c]),e.jsx("div",{className:h.listWrapper,ref:r,children:e.jsx("ul",{className:h.list,children:s.map(n=>e.jsx("li",{className:h.item,onClick:()=>a(n),children:n},n))})})},j=({items:s=[],defaultSelect:a,onSelect:c})=>{const[r,n]=i.useState(!1),[l,u]=i.useState(a),m=b=>{c(b),u(b),n(!1)};return e.jsxs("div",{className:h.wrapper,children:[e.jsxs("button",{className:h.btn,onClick:()=>n(!r),children:[l,e.jsx("svg",{width:"20",height:"20",alt:"dropdown",children:e.jsx("use",{href:`${w}#icon-dropdown`})})]}),r&&e.jsx(ee,{items:s,onSelect:m,onClose:()=>n(!1)})]})},te=()=>{const s=y(),[a,c]=v(),[r,n]=i.useState(a.get("price")),[l,u]=i.useState(a.get("from")),[m,b]=i.useState(a.get("to")),[t]=i.useState({make:a.get("make")??"",price:a.get("price")??"",from:a.get("from")??"",to:a.get("to")??""});for(var _ in t)t[_]||delete t[_];const f=async p=>{if(s(C()),p==="All"){delete t.make,c(t);return}t.make=p,c(t)},d=()=>{r?t.price=r:delete t.price,l?t.from=l:delete t.from,m?t.to=m:delete t.to,c(t)};return e.jsxs("div",{className:o.container,children:[e.jsxs("div",{className:o.brandWrapper,children:[e.jsx("span",{className:o.label,children:"Car brand"}),e.jsx(j,{items:V,defaultSelect:(t==null?void 0:t.make)||"Enter the text",onSelect:f})]}),e.jsxs("div",{className:o.priceWrapper,children:[e.jsx("span",{className:o.label,children:"Price/ 1 hour"}),e.jsx(j,{items:q,defaultSelect:r||"To $",onSelect:n})]}),e.jsxs("div",{children:[e.jsx("span",{className:o.label,children:"Car mileage / km"}),e.jsxs("div",{className:o.inputWrapper,children:[e.jsx("label",{className:o.inputLabel,htmlFor:"from",children:"From"}),e.jsx("input",{id:"from",className:o.inputFrom,type:"number",value:l||"",onChange:p=>u(p.target.value)})]}),e.jsxs("div",{className:o.inputWrapper,children:[e.jsx("label",{className:o.inputLabel,htmlFor:"to",children:"To"}),e.jsx("input",{id:"to",className:o.inputTo,type:"number",value:m||"",onChange:p=>b(p.target.value)})]})]}),e.jsx("button",{className:o.btn,type:"button",onClick:d,children:"Search"})]})},se=()=>{const[s]=v(),a=s.get("make"),c=s.get("price"),r=s.get("from"),n=s.get("to"),l=x(F),u=x(M),m=x(T),[b,t]=i.useState([]),_=y();i.useEffect(()=>{_(S({page:m,make:a}))},[_,m,a]),i.useEffect(()=>()=>{_(C())},[_]),i.useEffect(()=>{let d=[...l];c&&(d=d.filter(p=>p.rentalPrice<=c)),r&&n&&(d=d.filter(p=>p.mileage>=r&&p.mileage<=n)),t(d)},[l,c,r,n]);const f=()=>{_(L())};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:g.container,children:[e.jsx(te,{}),e.jsx("section",{className:g.sectionCatalog,children:b&&b.map(d=>e.jsx(W,{data:d},d.id))}),m<3&&!a&&e.jsx("button",{className:g.btn,type:"button",onClick:f,children:"Load more"})]}),u&&e.jsx(N,{})]})},re=()=>e.jsx("main",{children:e.jsx(se,{})});export{re as default};