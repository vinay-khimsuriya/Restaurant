  import React from 'react';
  import ReactDOM from 'react-dom'; 
   
   const heading=React.createElement('div',{id:'heading'},[
        React.createElement('h1',{id:'h1'},"My Project"),
        React.createElement('p',{id:'p1'},"this is my practice session. i do"),
        React.createElement('p',{id:'p2'},"lorem lorem lorem lorem lorem"),
        React.createElement('pre',{id:'h1'},"(document.getElementById('root'));"),
        React.createElement('ul',{id:'ul'},[
            React.createElement('li',{id:'li'},"Vinay"),
            React.createElement('li',{id:'li'},"khimsuriya"),
            React.createElement('li',{id:'li'},"Boss")])]);
    const root=ReactDOM.createRoot(document.getElementById('root'));
        
    root.render(heading);