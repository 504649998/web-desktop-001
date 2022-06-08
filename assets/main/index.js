System.register("chunks:///_virtual/button.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,o,e,u,r;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,e=t._decorator,u=t.Node,r=t.Component}],execute:function(){var c;o._RF.push({},"2eb17QA6nZH86fwf0W4HdQg","button",void 0);var s=e.ccclass;e.property,t("button",s("button")(c=function(t){function o(){return t.apply(this,arguments)||this}n(o,t);var e=o.prototype;return e.start=function(){this.node.on(u.EventType.MOUSE_DOWN,(function(t){console.debug("good")}))},e.update=function(t){},o}(r))||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/Line_Ini.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){"use strict";var t,o,e,r,i;return{setters:[function(n){t=n.inheritsLoose},function(n){o=n.cclegacy,e=n._decorator,r=n.Graphics,i=n.Component}],execute:function(){var c;o._RF.push({},"d79b0Olk3RAno4T5l/kU2ku","Line_Ini",void 0);var s=e.ccclass;e.property,n("Line_Ini",s("Line_Ini")(c=function(n){function o(){return n.apply(this,arguments)||this}t(o,n);var e=o.prototype;return e.start=function(){var n=this.node.getComponent(r);n.lineWidth=4,n.strokeColor.fromHEX("#5E1010"),n.fillColor.fromHEX("#5E1010")},e.update=function(n){},o}(i))||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./button.ts","./Line_Ini.ts","./Main.ts"],(function(){"use strict";return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Main.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,o,n,r,i,a,s,c;return{setters:[function(e){t=e.inheritsLoose},function(e){o=e.cclegacy,n=e._decorator,r=e.Graphics,i=e.Button,a=e.Node,s=e.Label,c=e.Component}],execute:function(){var l;o._RF.push({},"aa3e1EcTm1H64/JohXWqK5A","Main",void 0);var u=n.ccclass;n.property,e("Main",u("Main")(l=function(e){function o(){return e.apply(this,arguments)||this}t(o,e);var n=o.prototype;return n.onLoad=function(){},n.start=function(){var e=this.node.getChildByName("PIn"),t=this.node.getChildByName("PNote"),o=this.node.getChildByName("Grap").getComponent(r),n=-11.5,c=-149.5,l=0,u=[0,0,0,0,0],p=[0,0,0,0,0],h=0,m=this.node.getChildByName("Start").getComponent(i),d=[];function g(e){p[e]=p[e]+1,t.children[e+5].getComponent(s).string=p[e].toString()+"/"+u[e].toString(),function(e){switch(o.color.fromHEX("#FF0000"),o.clear(),e){case 0:o.moveTo(n,c),o.lineTo(-343.501,99),o.stroke();break;case 1:o.moveTo(n,c),o.lineTo(-176,105),o.stroke();break;case 2:o.moveTo(n,c),o.lineTo(-8.5,106.5),o.stroke();break;case 3:o.moveTo(n,c),o.lineTo(147.5,108),o.stroke();break;case 4:o.moveTo(n,c),o.lineTo(323,108),o.stroke()}o.color.fromHEX("#4B1313")}(e)}m.node.on(a.EventType.MOUSE_DOWN,(function(){for(var o=0;o<u.length;o++)u[o]=parseInt(e.children[o].children[0].getComponent(s).string),t.children[o+5].getComponent(s).string="0/"+u[o].toString(),h+=u[o];var n=setInterval((function(){if(l==h)return clearInterval(n),void alert("simulation is complite,please refresh or exit!");for(var e=l%5,t=0;t<d.length;t++)d[t]==e&&(e=(e+1)%5,t=-1);g(e),p[e]==u[e]&&d.push(e),l++}),4e3)}))},n.update=function(e){},o}(c))||l);o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});