(this["webpackJsonpfullstack-puhelinluettelo"]=this["webpackJsonpfullstack-puhelinluettelo"]||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),l=t.n(o),c=(t(19),t(2)),u=t(3),i=t.n(u),m="https://shielded-bastion-45608.herokuapp.com/persons",d=function(){return i.a.get(m)},f=function(e){return i.a.post(m,e)},s=function(e,n){return i.a.put("".concat(m,"/").concat(e),n)},h=function(e){return i.a.delete("".concat(m,"/").concat(e))},b=function(e){var n=e.filter,t=e.handleFilterChange;return r.a.createElement("p",null,"Filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},p=function(e){var n=e.handleSave,t=e.newName,a=e.newNumber,o=e.handleNameChange,l=e.handleNumberChange;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:o})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:l})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},v=function(e){var n=e.persons,t=e.filter,a=e.handleDelete,o=r.a.createElement("ul",null,n.filter((function(e){return e.name.toUpperCase().includes(t.toUpperCase())})).map((function(e){return r.a.createElement("li",{key:e.name},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return a(e.id,e.name)}},"Delete"))})));return r.a.createElement("div",null,o)},E=function(e){var n=e.message;return r.a.createElement("div",null,r.a.createElement("h2",null,n))},w=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],l=Object(a.useState)(""),u=Object(c.a)(l,2),i=u[0],m=u[1],w=Object(a.useState)(""),g=Object(c.a)(w,2),k=g[0],C=g[1],j=Object(a.useState)(""),O=Object(c.a)(j,2),N=O[0],y=O[1],S=Object(a.useState)(""),D=Object(c.a)(S,2),T=D[0],F=D[1],B=function(){d().then((function(e){o(e.data)}))};Object(a.useEffect)((function(){B()}),[]);var J=r.a.createElement("span",null,r.a.createElement("h2",null,"Numbers"),r.a.createElement(v,{persons:t,filter:N,handleDelete:function(e,n){window.confirm("Delete ".concat(n,"?"))&&h(e).then((function(){o(t.filter((function(n){return n.id!==e}))),F("".concat(n," was removed from phonebook")),setTimeout((function(){F(null)}),5e3)})).catch((function(){F("Person ".concat(n," was already removed from server")),setTimeout((function(){F(null)}),5e3),o(t.filter((function(n){return n.id!==e})))}))}}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(E,{message:T}),r.a.createElement(b,{filter:N,handleFilterChange:function(e){y(e.target.value)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(p,{handleSave:function(e){e.preventDefault();var n=t.filter((function(e){return e.name===i})),a={name:i,number:k};n?window.confirm("".concat(n[0].name," is already added to the phonebook, would you like to update their contact number?"))&&s(n[0].id,a).then((function(e){o(t.map((function(n){return n.id!==e.id?n:e}))),F("".concat(i,"'s number was edited")),m(""),C(""),setTimeout((function(){F(null)}),5e3),B()})).catch((function(){o(t.filter((function(e){return e.id!==n[0].id})))})):t.filter((function(e){return e.name===i})).length>0?(alert("".concat(i," is already added to phonebook")),m(""),C("")):t.filter((function(e){return e.number===k})).length>0?(alert("".concat(k," is already added to phonebook")),m(""),C("")):f(a).then((function(e){o(t.concat(e.data)),m(""),C(""),F("".concat(e.data.name," was added to phonebook")),setTimeout((function(){F(null)}),5e3)}))},newName:i,newNumber:k,handleNameChange:function(e){m(e.target.value)},handleNumberChange:function(e){C(e.target.value)}}),t.length<=0?r.a.createElement("h2",null,"No numbers found"):J)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.ad8724be.chunk.js.map