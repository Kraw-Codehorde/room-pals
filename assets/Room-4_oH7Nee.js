import{o as h,r as i,j as s,L as x,P as u,B as j}from"./index-80mjPk9w.js";import{u as g,G as e,T as n,h as r}from"./homeStyles.module-em0qPJhe.js";import{B as p}from"./Button-EgG2oo1c.js";const T=()=>{const{id:o}=h(),{fetchData:c}=g([],`/current-song?room_code=${o}`),[m,l]=i.useState("...loading"),d=(a,t)=>a===200?(console.log("song",t.song_name),s.jsx("div",{children:s.jsxs(e,{container:!0,spacing:2,direction:"column",alignItems:"center",children:[s.jsxs(e,{item:!0,xs:12,sm:6,md:4,children:[s.jsx(n,{variant:"h4",className:r.mainText,children:"Room"}),s.jsxs(n,{className:r.mainText,children:["Room Code: ",o]})]}),s.jsx(j,{component:"img",src:t.cover_art_url,sx:{height:150,width:150}}),s.jsx(e,{item:!0,xs:12,sm:6,md:4,children:s.jsxs(n,{variant:"h7",className:r.mainText,children:["Playing: ",t.song_name]})}),s.jsx(e,{item:!0,xs:12,sm:6,md:4,children:s.jsxs(n,{variant:"h7",className:r.mainText,children:["Artist: ",t.artist_name]})})]})})):a===204?s.jsx("div",{children:"No songs currently being played"}):s.jsx("div",{children:"...error"});return i.useEffect(()=>{(async()=>{const t=await c();l(d(t.status,t.data))})()},[]),s.jsx(s.Fragment,{children:s.jsxs(e,{container:!0,spacing:2,direction:"column",children:[m,s.jsx(e,{item:!0,xs:12,sm:6,md:4,children:s.jsx(p,{variant:"contained",color:"primary",component:x,to:u.HOME,children:"HOME"})})]})})};export{T as default};
