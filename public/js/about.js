$(function(){$.get("https://api.github.com/users/Tosone/repos").then(function(e){var n=[];for(var a in e)n.push(e[a].languages_url);return n}).then(function(o){var t=[];new Promise(function(n,e){for(var a in o)new Promise(function(n,e){$.get(o[a]).then(function(e){n(e)})}).then(function(e){t.push(e),o.length==t.length&&n(t)})}).then(function(e){$(".loading").hide(),$(".container").css("opacity","1"),$("body").css("overflow","auto");var n={},a=0,o={C:"#555555","C++":"#f34b7d","C#":"#178600",PHP:"#4F5D95",JavaScript:"#f1e05a",CSS:"#563d7c",HTML:"#e44b23",Lua:"#000080",Python:"#3572A5",Makefile:"#427819"};for(var t in e)for(var l in e[t])"C"==l||"Python"==l||(n[l]?n[l]+=e[t][l]:n[l]=e[t][l]);console.log(n);var i=n;for(var t in n=[],o)i[t]&&n.push({label:t,value:i[t],color:o[t]});for(var t in n)a+=n[t].value;for(var t in n)n[t].value=(n[t].value/a*100).toFixed(2);var r=new Chart($("#pieChart")[0].getContext("2d")).Pie(n,{animateScale:!0,legendTemplate:'<% for (var i=0; i<segments.length; i++){%><%if(segments[i].label){%><% if(i==0){ %><span style="background-color:<%=segments[i].fillColor%>" class="legend-lang"></span><%=segments[i].label%><%}else{%><%=\', \'%><span style="background-color:<%=segments[i].fillColor%>" class="legend-lang"></span><%=segments[i].label%><%}%><%}%><%}%>'});$("#language").html(r.generateLegend())})})});