(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports=a(20)},,,,,function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var i=a(0),n=a.n(i),s=a(3),c=a.n(s),r=(a(14),a(1)),o=a.n(r),l=a(4),h=a(5),m=a(6),u=a(8),p=a(7),d=(a(16),a(17),function(t){var e=t.city,a=t.temperature,i=t.humidity,s=t.windspeed,c=t.iconURL;return n.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},n.a.createElement("main",{className:"pa4 black-80"},n.a.createElement("div",{className:"measure "},n.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},n.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},e),n.a.createElement("div",{className:"mt3"},n.a.createElement("label",{className:"db fw6 lh-copy f6"},"Temprature: ".concat(a," \xb0C")),n.a.createElement("label",{className:"db fw6 lh-copy f6"},"Humidity: ".concat(i,"%")),n.a.createElement("label",{className:"db fw6 lh-copy f6"},"Windspeed: ".concat(s,"Km/h")),n.a.createElement("img",{id:"inputImg",alt:"",src:"https://".concat(c),width:"64px",hight:"64px"}))))))}),y=(a(18),function(t){var e=t.onInputChange,a=t.onButtonSubmit;return n.a.createElement("div",null,n.a.createElement("p",{className:"f3"},"This Magic will find your city weather. Give it a try!"),n.a.createElement("div",{className:"center"},n.a.createElement("div",{className:"form2 center pa4 br3 shadow-5"},n.a.createElement("input",{placeholder:"Enter a city name",className:"f4 pa2 w-70 center",type:"tex",onChange:e}),n.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-blue",onClick:a},"Find"))))}),f=function(t){Object(u.a)(a,t);var e=Object(p.a)(a);function a(){var t;return Object(h.a)(this,a),(t=e.call(this)).fetchDataByCity=function(){var t=Object(l.a)(o.a.mark((function t(e,a){var i,n,s,c,r,l,h,m,u,p,d,y,f;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("fetch data for",e),"https://cors-anywhere.herokuapp.com/",i="https://www.google.com/search?q=weather+".concat(e),t.next=4,fetch("https://cors-anywhere.herokuapp.com/"+i);case 4:return n=t.sent,t.next=7,n.text();case 7:for(s=(s=t.sent).substr(s.indexOf("Weather Result")),c=s.indexOf('id="wob_ttm" style="display:none">'),r=s.substr(c+'id="wob_ttm" style="display:none">'.length,2).split("").filter((function(t){return t>=0&&t<=9})).join(""),l=s.indexOf('<span id="wob_hm">'),h=s.substr(l+'<span id="wob_hm">'.length,2),m=s.indexOf('d="wob_tws">'),u=s.substr(m+'d="wob_tws">'.length,2),p=s.indexOf("gstatic"),d=p;s[d]+s[d+1]+s[d+2]!=="png";)d++;return y=s.substr(p,d-p+3),f=a.concat([{name:e,temperature:r,humidity:h,windspeed:u,icon:y}]),console.log("finished",e),t.abrupt("return",f);case 22:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),t.onInputChange=function(e){t.setState({input:e.target.value})},t.onButtonSubmit=function(e){t.fetchDataByCity(t.state.input,[]).then((function(e){t.setState({city:e})}))},t.removeCity=function(){var e=t.state.city;e.pop(),t.setState({city:e})},t.state={cities:[],city:[],input:""},t}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var t=this;console.log("Lets bring some data!"),this.fetchDataByCity("Tel-Aviv",[]).then((function(e){t.fetchDataByCity("New-York",e).then((function(e){t.setState({cities:e})}))})),console.log("Done!")}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfnS75QwwkgQCc01HRB3SQOQDrAbqCW4D_3g&usqp=CAU",className:"App-logo",alt:"logo"}),n.a.createElement("p",null,"Let's See Some Weather!")),n.a.createElement("div",{className:"AppBody"},n.a.createElement(d,{city:this.state.cities[0]?this.state.cities[0].name:"",temperature:this.state.cities[0]?this.state.cities[0].temperature:"",humidity:this.state.cities[0]?this.state.cities[0].humidity:"",windspeed:this.state.cities[0]?this.state.cities[0].windspeed:"",iconURL:this.state.cities[0]?this.state.cities[0].icon:""}),n.a.createElement(d,{city:this.state.cities[1]?this.state.cities[1].name:"",temperature:this.state.cities[1]?this.state.cities[1].temperature:"",humidity:this.state.cities[1]?this.state.cities[1].humidity:"",windspeed:this.state.cities[1]?this.state.cities[1].windspeed:"",iconURL:this.state.cities[1]?this.state.cities[1].icon:""})),n.a.createElement(y,{onButtonSubmit:this.onButtonSubmit,onInputChange:this.onInputChange}),0!==this.state.city.length?n.a.createElement("div",null,n.a.createElement(d,{city:this.state.city[0]?this.state.city[0].name:"",temperature:this.state.city[0]?this.state.city[0].temperature:"",humidity:this.state.city[0]?this.state.city[0].humidity:"",windspeed:this.state.city[0]?this.state.city[0].windspeed:"",iconURL:this.state.city[0]?this.state.city[0].icon:""})):n.a.createElement("div",null))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(19);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.02a1cdee.chunk.js.map