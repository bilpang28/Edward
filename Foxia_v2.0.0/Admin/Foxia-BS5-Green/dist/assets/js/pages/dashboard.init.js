!function(t){"use strict";function e(){}e.prototype.createStackedChart=function(t,e,a,i,o,r){Morris.Bar({element:t,data:e,xkey:a,ykeys:i,stacked:!0,labels:o,hideHover:"auto",resize:!0,gridLineColor:"rgba(108, 120, 151, 0.1)",barColors:r})},e.prototype.createDonutChart=function(t,e,a){Morris.Donut({element:t,data:e,resize:!0,colors:a})},t(".peity-pie").each(function(){t(this).peity("pie",t(this).data())}),t(".peity-donut").each(function(){t(this).peity("donut",t(this).data())}),t(".peity-line").each(function(){t(this).peity("line",t(this).data())}),e.prototype.init=function(){this.createStackedChart("morris-bar-stacked",[{y:"2008",a:45,b:180,c:100},{y:"2009",a:75,b:65,c:80},{y:"2010",a:100,b:90,c:56},{y:"2011",a:75,b:65,c:89},{y:"2012",a:100,b:90,c:120},{y:"2013",a:75,b:65,c:110},{y:"2014",a:50,b:40,c:85},{y:"2015",a:75,b:65,c:52},{y:"2016",a:50,b:40,c:77},{y:"2017",a:75,b:65,c:90},{y:"2018",a:100,b:90,c:130}],"y",["a","b","c"],["Desktops","Tablets","Mobiles"],["#1699dd","#35bf84","#ebeff2"]);this.createDonutChart("morris-donut-example",[{label:"Marketing",value:12},{label:"Online",value:42},{label:"Offline",value:20}],["#f0f1f4","#35bf84","#1699dd"])},t.Dashboard=new e,t.Dashboard.Constructor=e}(window.jQuery),function(){"use strict";window.jQuery.Dashboard.init()}();