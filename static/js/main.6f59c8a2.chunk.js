(this.webpackJsonpspring_ract_redux=this.webpackJsonpspring_ract_redux||[]).push([[0],{40:function(e,t,a){e.exports=a(71)},45:function(e,t,a){},46:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),o=(a(45),a(46),a(47),a(18)),m=a(9),u=a(7),s=a(8),p=a(13),i=a(12),E=a(11),d=a(22),h=a.n(d),y=a(36),b=a(20),f=a.n(b),v=new(function(){function e(){Object(u.a)(this,e)}return Object(s.a)(e,[{key:"getAllEmployees",value:function(){return f.a.get("http://localhost:2222/spring-boot-app/employee")}}]),e}()),g=function(e){Object(p.a)(a,e);var t=Object(i.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.getEmployees()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Employee Detials"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("table",{border:"2"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Id"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Salary"),l.a.createElement("th",null,"Address"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,this.props.employees.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.empId),l.a.createElement("td",null,e.empName),l.a.createElement("td",null,e.salary),l.a.createElement("td",null,e.empAddress),l.a.createElement("td",null,"Edit|Delete"))})))))}}]),a}(n.Component),O=Object(E.b)((function(e){return{employees:e.employees}}),{getEmployees:function(){return function(){var e=Object(y.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getAllEmployees();case 2:a=e.sent,t({type:"GET_ALL_EMPLOYEES",employees:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(g),j=function(e){Object(p.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={empName:"",salary:"",empAddress:""},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Add Employee"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null," Enter Name:"),l.a.createElement("input",{type:"text",name:"empName",placeholder:"Employee Name",value:this.state.empName,onChange:this.changeInput}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null," Enter Salary:"),l.a.createElement("input",{type:"Number",name:"salary",placeholder:"Employee Salary",value:this.state.salary,onChange:this.changeInput}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null," Enter Address:"),l.a.createElement("input",{type:"textarea",name:"empAddress",placeholder:"Employee Address",value:this.state.empAddress,onChange:this.changeInput})))}}]),a}(n.Component),A=function(e){Object(p.a)(a,e);var t=Object(i.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"Edit Employee")}}]),a}(n.Component);var w=function(){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("h3",{className:"alert alert-warning"}," Spring boot and Redux app "),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(o.b,{to:"/employees"},"Home"),"|",l.a.createElement(o.b,{to:"/addemployee"},"Add"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m.a,{path:"/employees",exact:!0,component:O}),l.a.createElement(m.a,{path:"/",exact:!0,component:O}),l.a.createElement(m.a,{path:"/addemployee",exact:!0,component:j}),l.a.createElement(m.a,{path:"/ediemployee",exact:!0,component:A})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(15),k=a(39),N={employees:[],employee:{}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_EMPLOYEES":return Object(k.a)({},e,{employees:t.employees});default:return e}},_=a(38),C=Object(x.c)(S,Object(x.a)(_.a));c.a.render(l.a.createElement(E.a,{store:C},l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.6f59c8a2.chunk.js.map