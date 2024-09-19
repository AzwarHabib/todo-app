(function(){"use strict";var e={8848:function(e,t,o){var n=o(5130),a=o(6768);function r(e,t,o,n,r,d){const c=(0,a.g2)("TodoList");return(0,a.uX)(),(0,a.Wv)(c)}var d=o(4232);const c={class:"todo-container"},i={class:"input-container"},l={class:"todo-list"},u={class:"todo-content"},p=["onUpdate:modelValue","onChange"],s=["onClick"];function T(e,t,o,r,T,f){return(0,a.uX)(),(0,a.CE)("div",c,[t[2]||(t[2]=(0,a.Lk)("h1",{class:"title"},"Todo List",-1)),(0,a.Lk)("div",i,[(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.newTodo=e),onKeyup:t[1]||(t[1]=(0,n.jR)(((...e)=>r.addTodoItem&&r.addTodoItem(...e)),["enter"])),placeholder:"Add a todo",class:"todo-input"},null,544),[[n.Jo,r.newTodo]])]),(0,a.Lk)("ul",l,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.todos,(e=>((0,a.uX)(),(0,a.CE)("li",{key:e.id,class:"todo-item"},[(0,a.Lk)("div",u,[(0,a.bo)((0,a.Lk)("input",{type:"checkbox","onUpdate:modelValue":t=>e.completed=t,onChange:t=>r.updateTodoItem(e),class:"todo-checkbox"},null,40,p),[[n.lH,e.completed]]),(0,a.Lk)("span",{class:(0,d.C4)({completed:e.completed})},(0,d.v_)(e.description),3)]),(0,a.Lk)("button",{onClick:t=>r.deleteTodoItem(e.id,e.created_at),class:"delete-button"},"Delete",8,s)])))),128))])])}var f=o(144);const y="\nquery listTodoTypeTables {\n  listTodoTypeTables {\n    items {\n      created_at\n      id\n      description\n      completed\n    }\n  }\n}";var b=o(8869);const m="mutation createTodoTypeTable($createtodotypetableinput: CreateTodoTypeTableInput!) {\n  createTodoTypeTable(input: $createtodotypetableinput) {\n    created_at\n    id\n    description\n    completed\n  }\n}\n",h="mutation updateTodoTypeTable($id: String!, $completed: Boolean!,$created_at:String!) {\n  updateTodoTypeTable(input: { id: $id, completed: $completed,created_at:$created_at }) {\n    created_at\n    id\n    \n    completed\n  }\n}\n",v="mutation deleteTodoTypeTable($deleteTodoTypeTableInput: DeleteTodoTypeTableInput!) {\n  deleteTodoTypeTable(input: $deleteTodoTypeTableInput) {\n    created_at\n    id\n  }\n}";var g={setup(){const e=(0,f.KR)([]),t=(0,f.KR)(""),o=async()=>{try{const t=(0,b.D)(),o=await t.graphql({query:y});e.value=o.data.listTodoTypeTables.items}catch(t){console.error("Error fetching todos:",t)}},n=async()=>{if(t.value.trim())try{const e=(0,b.D)(),n={id:Math.random().toString(36).substr(2,9),description:t.value,completed:!1,created_at:(new Date).toISOString()};await e.graphql({query:m,variables:{createtodotypetableinput:n}}).then((()=>{o(),t.value=""})).catch((e=>console.log("Error is:",e)))}catch(e){console.error("Error adding todo:",e)}},r=async(e,t)=>{try{const n=(0,b.D)();await n.graphql({query:v,variables:{deleteTodoTypeTableInput:{id:e,created_at:t}}}),o()}catch(n){console.error("Error deleting todo:",n)}},d=async e=>{try{const t=(0,b.D)();await t.graphql({query:h,variables:{id:e.id,completed:e.completed,created_at:e.created_at}}),console.log("Todo updated:",e)}catch(t){console.error("Error updating todo:",t)}};return(0,a.sV)((()=>{o()})),{todos:e,newTodo:t,addTodoItem:n,deleteTodoItem:r,updateTodoItem:d}}},_=o(1241);const k=(0,_.A)(g,[["render",T],["__scopeId","data-v-48ab0bd4"]]);var w=k,I={name:"App",components:{TodoList:w}};const L=(0,_.A)(I,[["render",r]]);var O=L,x=o(4387);x.E.configure({API:{GraphQL:{endpoint:"https://rymsdnzmenax3p5uufxxfm6rum.appsync-api.ap-south-1.amazonaws.com/graphql",region:"ap-south-1",defaultAuthMode:"apiKey",apiKey:"da2-p7unb63g6vauthbrfxoyt4oycy"}}}),(0,n.Ef)(O).mount("#app")}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,r){if(!n){var d=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],r=e[u][2];for(var c=!0,i=0;i<n.length;i++)(!1&r||d>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[i])}))?n.splice(i--,1):(c=!1,r<d&&(d=r));if(c){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,a,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,d=n[0],c=n[1],i=n[2],l=0;if(d.some((function(t){return 0!==e[t]}))){for(a in c)o.o(c,a)&&(o.m[a]=c[a]);if(i)var u=i(o)}for(t&&t(n);l<d.length;l++)r=d[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},n=self["webpackChunktodo_app"]=self["webpackChunktodo_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(8848)}));n=o.O(n)})();
//# sourceMappingURL=app.b74511a5.js.map