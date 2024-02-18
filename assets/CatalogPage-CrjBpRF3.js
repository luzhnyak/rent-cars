import{r as i,j as e,u as j,a as C,b as S,c as g,g as N,d as v,i as L,B as k}from"./index-C8vPNzUL.js";import{I as y,C as W}from"./Card-DbWI5uf_.js";const E=t=>t.cars.items,P=t=>t.cars.page,q=t=>t.cars.isLoading,F=t=>t.cars.error,T="_container_mo2uy_1",M="_sectionCatalog_mo2uy_7",B="_btn_mo2uy_16",x={container:T,sectionCatalog:M,btn:B},A="_container_1qw2a_1",$="_brandWrapper_1qw2a_9",I="_priceWrapper_1qw2a_13",D="_label_1qw2a_17",O="_select_1qw2a_25",R="_option_1qw2a_38",H="_inputStyle_1qw2a_47",K="_btn_1qw2a_69",z="_inputWrapper_1qw2a_85",G="_inputLabel_1qw2a_90",U="_inputFrom_1qw2a_96",V="_inputTo_1qw2a_111",c={container:A,brandWrapper:$,priceWrapper:I,label:D,select:O,option:R,inputStyle:H,btn:K,inputWrapper:z,inputLabel:G,inputFrom:U,inputTo:V},J=["All","Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"],Q=["30","40","50","60","70","80","90","100","120","140","160","180","200"],X="_wrapper_fgkw8_1",Y="_btn_fgkw8_8",Z="_listWrapper_fgkw8_30",ee="_list_fgkw8_30",te="_item_fgkw8_50",f={wrapper:X,btn:Y,listWrapper:Z,list:ee,item:te},se=({items:t,onSelect:a,onClose:o})=>{const r=i.useRef(null);return i.useEffect(()=>{const n=u=>{u.code==="Escape"&&o(!1)},l=u=>{r.current&&!r.current.contains(u.target)&&o(!1)};return window.addEventListener("keydown",n),document.addEventListener("mousedown",l),()=>{window.removeEventListener("keydown",n),document.addEventListener("mousedown",l)}},[o]),e.jsx("div",{className:f.listWrapper,ref:r,children:e.jsx("ul",{className:f.list,children:t.map(n=>e.jsx("li",{className:f.item,onClick:()=>a(n),children:n},n))})})},w=({items:t=[],defaultSelect:a,onSelect:o})=>{const[r,n]=i.useState(!1),[l,u]=i.useState(a),m=h=>{o(h),u(h),n(!1)};return e.jsxs("div",{className:f.wrapper,children:[e.jsxs("button",{className:f.btn,onClick:()=>n(!r),children:[l,e.jsx(y,{id:"icon-dropdown",width:"20",height:"20"})]}),r&&e.jsx(se,{items:t,onSelect:m,onClose:()=>n(!1)})]})},ne=()=>{const t=j(),[a,o]=C(),[r,n]=i.useState(a.get("price")),[l,u]=i.useState(a.get("from")),[m,h]=i.useState(a.get("to")),[s]=i.useState({make:a.get("make")??"",price:a.get("price")??"",from:a.get("from")??"",to:a.get("to")??""});for(var _ in s)s[_]||delete s[_];const b=async p=>{if(t(S()),p==="All"){delete s.make,o(s);return}s.make=p,o(s)},d=()=>{r?s.price=r:delete s.price,l?s.from=l:delete s.from,m?s.to=m:delete s.to,o(s)};return e.jsxs("div",{className:c.container,children:[e.jsxs("div",{className:c.brandWrapper,children:[e.jsx("span",{className:c.label,children:"Car brand"}),e.jsx(w,{items:J,defaultSelect:(s==null?void 0:s.make)||"Enter the text",onSelect:b})]}),e.jsxs("div",{className:c.priceWrapper,children:[e.jsx("span",{className:c.label,children:"Price/ 1 hour"}),e.jsx(w,{items:Q,defaultSelect:r||"To $",onSelect:n})]}),e.jsxs("div",{children:[e.jsx("span",{className:c.label,children:"Car mileage / km"}),e.jsxs("div",{className:c.inputWrapper,children:[e.jsx("label",{className:c.inputLabel,htmlFor:"from",children:"From"}),e.jsx("input",{id:"from",className:c.inputFrom,type:"number",value:l||"",onChange:p=>u(p.target.value)})]}),e.jsxs("div",{className:c.inputWrapper,children:[e.jsx("label",{className:c.inputLabel,htmlFor:"to",children:"To"}),e.jsx("input",{id:"to",className:c.inputTo,type:"number",value:m||"",onChange:p=>h(p.target.value)})]})]}),e.jsx("button",{className:c.btn,type:"button",onClick:d,children:"Search"})]})},ae=()=>{const[t]=C(),a=t.get("make"),o=t.get("price"),r=t.get("from")??1,n=t.get("to")??999999999,l=g(E),u=g(q),m=g(P),[h,s]=i.useState([]),_=j();i.useEffect(()=>{_(N({page:m,make:a}))},[_,m,a]),i.useEffect(()=>()=>{_(S())},[_]),i.useEffect(()=>{let d=[...l];o&&(d=d.filter(p=>p.rentalPrice<=o)),r&&n&&(d=d.filter(p=>p.mileage>=r&&p.mileage<=n)),s(d)},[l,o,r,n]);const b=()=>{_(L())};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:x.container,children:[e.jsx(ne,{}),e.jsx("section",{className:x.sectionCatalog,children:h&&h.map(d=>e.jsx(W,{data:d},d.id))}),m<3&&!a&&e.jsx("button",{className:x.btn,type:"button",onClick:b,children:"Load more"})]}),u&&e.jsx(v,{})]})},ce=()=>{const t=g(F);return i.useEffect(()=>{t&&k.error("Sorry, an error occurred on our website. Please try reloading the page.")},[t]),e.jsx("main",{children:e.jsx(ae,{})})};export{ce as default};
