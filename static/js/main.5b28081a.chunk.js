(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={btnSection:"FeedbackOptions_btnSection__1Ufzy",btn:"FeedbackOptions_btn__uiI-p"}},11:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),o=a(4),i=a(5),u=a(6),s=a(10),d=a(9),b=a(1),m=a.n(b),f=function(e){var t=e.options,a=e.onLeaveFeedback;return r.a.createElement("div",{className:m.a.btnSection},t.map((function(e){return r.a.createElement("button",{className:m.a.btn,key:e,type:"button",onClick:function(){return a(e)}},e)})))},p=a(7),v=a.n(p);var E=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:v.a.stats},r.a.createElement("li",null,"Good: ",e.good),r.a.createElement("li",null,"Neutral: ",e.neutral),r.a.createElement("li",null,"Bad: ",e.bad),r.a.createElement("li",null,"Total: ",e.total),r.a.createElement("li",null,"Positive feedback: ",e.positivePercentage,"%")))},g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,e.title),e.children)};g.defaultProps={title:""};var k=g,h=a(8),_=a.n(h);function F(e){var t=e.message;return r.a.createElement("div",null,r.a.createElement("h2",{className:_.a.title},t))}var P=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.update=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(e){return Object.values(e).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(e,t){return Math.round(e/t*100)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,c=this.countTotalFeedback(this.state),l=this.countPositiveFeedbackPercentage(t,c);return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{title:"Please leave feedback"}),r.a.createElement(f,{options:["good","neutral","bad"],onLeaveFeedback:this.update}),r.a.createElement(k,null),r.a.createElement(k,{title:"Statistics"}),c<1?r.a.createElement(F,{message:"No feedback given"}):r.a.createElement(E,{good:t,neutral:a,bad:n,total:c,positivePercentage:l}),r.a.createElement(k,null))}}]),a}(n.Component);l.a.render(r.a.createElement(P,null),document.querySelector("#root"))},7:function(e,t,a){e.exports={stats:"Statistics_stats__1f0bj"}},8:function(e,t,a){e.exports={title:"Notification_title__3dcBG"}}},[[11,1,2]]]);
//# sourceMappingURL=main.5b28081a.chunk.js.map