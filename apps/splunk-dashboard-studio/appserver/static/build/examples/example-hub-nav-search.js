(self.webpackJsonp=self.webpackJsonp||[]).push([[33],{0:function(t,e){},1:function(t,e){},2:function(t,e){},3:function(t,e){},Dg3K:function(t,e,o){"use strict";var s=o("284h"),i=o("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.themes=e.default=void 0;var n=i(o("J4zp")),r=i(o("VkAN")),a=s(o("ERkP")),l=i(o("aWzz")),p=i(o("2srY")),d=i(o("j/s1")),u=i(o("qiA9"));function c(){var t=(0,r.default)(["\n    padding: 12px 24px;\n    overflow: auto;\n    height: 100%;\n"]);return c=function(){return t},t}function f(){var t=(0,r.default)(["\n    background-color: ",";\n    overflow: hidden;\n    height: ","px;\n    color: #9cdcfe;\n"]);return f=function(){return t},t}var h=(0,o("JRMG").createThemeRegistry)("@splunk/dashboard-core","Code"),m=d.default.div(f(),h.themeVariable("backgroundColor"),(function(t){return t.height?t.height:200})),k=d.default.div(c()),v=function(t){var e=t.height,o=t.options,s=o.content,i=o.language,r=(0,a.useRef)(null),l=(0,a.useState)(!1),d=(0,n.default)(l,2),c=d[0],f=d[1],h=(0,a.useCallback)((function(){if(r.current&&(0,p.default)(document,"createRange")&&(0,p.default)(window,"getSelection"))if(c){window.getSelection().removeAllRanges(),f(!1)}else{var t=document.createRange();t.selectNodeContents(r.current);var e=window.getSelection();e.removeAllRanges(),e.addRange(t),f(!0)}}),[c]),v=(0,a.useCallback)((function(){r.current&&(0,p.default)(document,"createRange")&&(0,p.default)(window,"getSelection")&&(c&&(window.getSelection().removeAllRanges(),f(!1)))}),[c]),y=(0,a.useCallback)((function(t){r.current=t}),[]);return a.default.createElement(m,{height:e},a.default.createElement(k,null,a.default.createElement(u.default,{value:s,language:i,onDoubleClick:h,onClick:v,elementRef:y})))};v.propTypes={options:l.default.shape({content:l.default.string,language:l.default.oneOf(["bash","clike","css","html","json","javascript","js","jsx","typescript","ts","tsx","markup","mathml","svg","xml"])}),height:l.default.number.isRequired},v.defaultProps={options:{content:"",language:"json"}},v.showTitleAndDescription=!0,h.addDefaultTheme("enterprise",{backgroundColor:"#121316"}),h.addTheme("enterpriseDark",{backgroundColor:"#121316"}),h.addTheme("scp",{backgroundColor:"#121316"});var y=v;e.default=y;var j=h.toThemes();e.themes=j},EXpW:function(t,e,o){"use strict";var s=o("TqRt"),i=s(o("ERkP")),n=s(o("t/rw")),r=o("pw/X"),a=s(o("IQ8u"));(0,n.default)(i.default.createElement(r.ExampleCore,{definition:a.default}),{pageTitle:"Example Hub - Search & Data",hideFooter:!0,layout:"fixed"})},IQ8u:function(t){t.exports=JSON.parse('{"visualizations":{"viz_o6DWyd33":{"type":"viz.choropleth.svg","options":{"svg":"<svg width=\\"82\\" height=\\"90\\" viewBox=\\"0 0 82 90\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path d=\\"M53.8413 66.1177L69.3531 61.9834\\" stroke=\\"#4EB2D2\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M80.9598 70.5028L69.3525 61.9856L68.8916 38.7236L80.5001 47.2408L80.9598 70.5028Z\\" fill=\\"#15161B\\" stroke=\\"#4EB2D2\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M65.2 74.818L53.8413 66.1184L53.3804 42.8564L64.9889 51.3723L65.2 74.818Z\\" fill=\\"#111215\\" stroke=\\"#4EB2D2\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M64.8879 51.2753L53.2095 42.8369L69.1159 38.5977L80.5008 47.2784L64.8879 51.2753Z\\" fill=\\"#15161B\\" stroke=\\"#4EB2D2\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M80.4615 47.2139L80.9998 70.5083L65.1995 74.8175L64.9497 51.2732L80.4615 47.2139Z\\" fill=\\"#15161B\\" stroke=\\"#4EB2D2\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M47.9938 79.2869L36.3853 70.7698L51.897 66.6367L63.5055 75.1526L47.9938 79.2869Z\\" fill=\\"#15161B\\" stroke=\\"#A870EF\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M63.5053 75.1521L51.8968 66.6362L50.6016 1.21191L62.2101 9.72906L63.5053 75.1521Z\\" fill=\\"#15161B\\" stroke=\\"#FFC34E\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M46.6988 13.8634L35.0903 5.34621L50.6021 1.21191L62.2106 9.72907L46.6988 13.8634Z\\" fill=\\"#15161B\\" stroke=\\"#FFC34E\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M62.21 9.73047L63.5052 75.1535L47.9935 79.2878L46.6982 13.8648L62.21 9.73047Z\\" fill=\\"#15161B\\" stroke=\\"#FFC34E\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M47.9941 79.2859L36.3856 70.7688L35.0903 5.3457L46.6988 13.8629L47.9941 79.2859Z\\" fill=\\"#15161B\\" stroke=\\"#FFC34E\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M47.8011 79.5005L36.1926 70.9833L34.8911 5.23926L46.4984 13.7564L47.8011 79.5005Z\\" fill=\\"#15161B\\" stroke=\\"#FFC34E\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M46.4984 13.7551L34.8911 5.23797L50.7963 1L62.4048 9.5159L46.4984 13.7551Z\\" fill=\\"#15161B\\" stroke=\\"#FFC34E\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M46.499 13.7548L62.4055 9.51562L63.7082 75.2597L47.8018 79.4989L46.499 13.7548ZM63.5059 75.1523L62.2094 9.72921L46.6976 13.8635L47.9941 79.2866L63.5059 75.1523Z\\" fill=\\"#15161B\\" stroke=\\"#FFC34E\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M30.5392 83.9393L18.9307 75.4221L34.4424 71.2891L46.0509 79.8062L30.5392 83.9393Z\\" fill=\\"#15161B\\" stroke=\\"url(#paint0_radial)\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M46.0502 79.8074L34.4417 71.2903L33.6099 29.2891L45.2184 37.8062L46.0502 79.8074Z\\" fill=\\"#15161B\\" stroke=\\"url(#paint1_radial)\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M29.7076 41.9393L18.0991 33.4234L33.6108 29.2891L45.2193 37.8062L29.7076 41.9393Z\\" fill=\\"#15161B\\" stroke=\\"url(#paint2_radial)\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M45.2192 37.8057L46.0511 79.8069L30.5394 83.9399L29.7075 41.9387L45.2192 37.8057Z\\" fill=\\"#15161B\\" stroke=\\"url(#paint3_radial)\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M30.5395 83.939L18.931 75.4218L18.0991 33.4219L29.7076 41.9378L30.5395 83.939Z\\" fill=\\"#15161B\\" stroke=\\"url(#paint4_radial)\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M30.3465 84.1516L18.738 75.6344L17.8999 33.3135L29.5084 41.8306L30.3465 84.1516Z\\" fill=\\"#15161B\\" stroke=\\"#F494E5\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M29.5089 41.8306L17.9004 33.3134L33.8068 29.0742L45.4141 37.5914L29.5089 41.8306Z\\" fill=\\"#15161B\\" stroke=\\"#F494E5\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M29.5083 41.83L45.4147 37.5908L46.2528 79.9118L30.3464 84.151L29.5083 41.83ZM46.0505 79.8056L45.2186 37.8044L29.7069 41.9387L30.5388 83.9399L46.0505 79.8056Z\\" fill=\\"#15161B\\" stroke=\\"#F494E5\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M28.3228 70.5615L28.5976 84.4558L13.0858 88.5901L12.811 74.6946L28.3228 70.5615Z\\" fill=\\"#15161B\\" stroke=\\"#7EEFDA\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M12.8908 88.8009L1.28228 80.285L1 66.0723L12.6085 74.5894L12.8908 88.8009Z\\" fill=\\"#15161B\\" stroke=\\"#7EEFDA\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M12.6085 74.5901L1 66.0729L16.9064 61.835L28.5149 70.3509L12.6085 74.5901Z\\" fill=\\"#15161B\\" stroke=\\"#7EEFDA\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><path d=\\"M12.6084 74.5898L28.5148 70.3506L28.7958 84.5621L12.8894 88.8013L12.6084 74.5898ZM28.5973 84.4547L28.3225 70.5604L12.8107 74.6947L13.0855 88.589L28.5973 84.4547Z\\" fill=\\"#15161B\\" stroke=\\"#A9F5E7\\" stroke-width=\\"0.792923\\" stroke-miterlimit=\\"10\\" stroke-linejoin=\\"round\\"/><defs><radialGradient id=\\"paint0_radial\\" cx=\\"0\\" cy=\\"0\\" r=\\"1\\" gradientUnits=\\"userSpaceOnUse\\" gradientTransform=\\"translate(32.4908 77.6141) scale(10.9536)\\"><stop stop-color=\\"#A9F5E7\\"/><stop offset=\\"0.1667\\" stop-color=\\"#45D4BA\\"/><stop offset=\\"0.3385\\" stop-color=\\"#602CA1\\"/><stop offset=\\"0.5625\\" stop-color=\\"#A870EF\\"/><stop offset=\\"0.6875\\" stop-color=\\"#FB865C\\"/><stop offset=\\"0.8438\\" stop-color=\\"#FFC34E\\"/><stop offset=\\"1\\" stop-color=\\"#FCD9A3\\"/></radialGradient><radialGradient id=\\"paint1_radial\\" cx=\\"0\\" cy=\\"0\\" r=\\"1\\" gradientUnits=\\"userSpaceOnUse\\" gradientTransform=\\"translate(39.83 54.5481) scale(18.7346)\\"><stop stop-color=\\"#A9F5E7\\"/><stop offset=\\"0.1667\\" stop-color=\\"#45D4BA\\"/><stop offset=\\"0.3385\\" stop-color=\\"#602CA1\\"/><stop offset=\\"0.5625\\" stop-color=\\"#A870EF\\"/><stop offset=\\"0.6875\\" stop-color=\\"#FB865C\\"/><stop offset=\\"0.8438\\" stop-color=\\"#FFC34E\\"/><stop offset=\\"1\\" stop-color=\\"#FCD9A3\\"/></radialGradient><radialGradient id=\\"paint2_radial\\" cx=\\"0\\" cy=\\"0\\" r=\\"1\\" gradientUnits=\\"userSpaceOnUse\\" gradientTransform=\\"translate(31.659 35.6145) scale(10.9536)\\"><stop stop-color=\\"#A9F5E7\\"/><stop offset=\\"0.1667\\" stop-color=\\"#45D4BA\\"/><stop offset=\\"0.3385\\" stop-color=\\"#602CA1\\"/><stop offset=\\"0.5625\\" stop-color=\\"#A870EF\\"/><stop offset=\\"0.6875\\" stop-color=\\"#FB865C\\"/><stop offset=\\"0.8438\\" stop-color=\\"#FFC34E\\"/><stop offset=\\"1\\" stop-color=\\"#FCD9A3\\"/></radialGradient><radialGradient id=\\"paint3_radial\\" cx=\\"0\\" cy=\\"0\\" r=\\"1\\" gradientUnits=\\"userSpaceOnUse\\" gradientTransform=\\"translate(37.8791 60.8727) scale(17.663)\\"><stop stop-color=\\"#A9F5E7\\"/><stop offset=\\"0.1667\\" stop-color=\\"#45D4BA\\"/><stop offset=\\"0.3385\\" stop-color=\\"#602CA1\\"/><stop offset=\\"0.5625\\" stop-color=\\"#A870EF\\"/><stop offset=\\"0.6875\\" stop-color=\\"#FB865C\\"/><stop offset=\\"0.8438\\" stop-color=\\"#FFC34E\\"/><stop offset=\\"1\\" stop-color=\\"#FCD9A3\\"/></radialGradient><radialGradient id=\\"paint4_radial\\" cx=\\"0\\" cy=\\"0\\" r=\\"1\\" gradientUnits=\\"userSpaceOnUse\\" gradientTransform=\\"translate(24.3192 58.6803) scale(18.7346)\\"><stop stop-color=\\"#A9F5E7\\"/><stop offset=\\"0.1667\\" stop-color=\\"#45D4BA\\"/><stop offset=\\"0.3385\\" stop-color=\\"#602CA1\\"/><stop offset=\\"0.5625\\" stop-color=\\"#A870EF\\"/><stop offset=\\"0.6875\\" stop-color=\\"#FB865C\\"/><stop offset=\\"0.8438\\" stop-color=\\"#FFC34E\\"/><stop offset=\\"1\\" stop-color=\\"#FCD9A3\\"/></radialGradient></defs></svg>","backgroundColor":"transparent"}},"viz_3EDzFQmf":{"type":"viz.rectangle","options":{"rx":24,"fill":"transparent","stroke":"#FFFFFF","strokeOpacity":0.5},"eventHandlers":[{"type":"drilldown.customUrl","options":{"url":"https://docs.splunk.com/Documentation/DashApp/latest/DashApp/","newTab":true}}]},"viz_a9qIcXhQ":{"type":"viz.rectangle","options":{"rx":24,"fill":"transparent","stroke":"#FFFFFF","strokeOpacity":0.5}},"viz_8j1d0JLM":{"type":"viz.rectangle","options":{"rx":24,"fill":"transparent","stroke":"#FFFFFF","strokeOpacity":0.5},"eventHandlers":[{"type":"drilldown.customUrl","options":{"url":"/app/splunk-dashboard-studio/example-hub-nav-visualizations"}}]},"viz_DRQ4It9z":{"type":"viz.rectangle","options":{"rx":24,"fill":"transparent","stroke":"#FFFFFF","strokeOpacity":0.5}},"viz_4JKPZDgJ":{"type":"viz.rectangle","options":{"rx":24,"fill":"transparent","stroke":"#FFFFFF","strokeOpacity":0.5},"eventHandlers":[{"type":"drilldown.customUrl","options":{"url":"/app/splunk-dashboard-studio/example-hub-nav-inputs"}}]},"viz_brttng5F":{"type":"viz.rectangle","options":{"rx":24,"fill":"transparent","stroke":"#FFFFFF","strokeOpacity":0.5},"eventHandlers":[{"type":"drilldown.customUrl","options":{"url":"/app/splunk-dashboard-studio/example-hub-nav-defaults"}}]},"viz_M9V2Gulj":{"type":"viz.rectangle","options":{"rx":24,"fill":"transparent","stroke":"#FFFFFF","strokeOpacity":0.5},"eventHandlers":[{"type":"drilldown.customUrl","options":{"url":"/app/splunk-dashboard-studio/example-hub-nav-complete"}}]},"viz_akkGeAuH":{"type":"viz.rectangle","options":{"rx":24,"fill":"transparent","stroke":"#FFFFFF","strokeOpacity":0.5},"eventHandlers":[{"type":"drilldown.customUrl","options":{"url":"/app/splunk-dashboard-studio/example-hub-nav-design"}}]},"viz_Yx8gK8Ei":{"type":"viz.rectangle","options":{"fill":"#1A1C20","stroke":"transparent"}},"viz_AWvqaQV4":{"type":"viz.text","options":{"content":"Ad Hoc Data Source","fontWeight":"bold","fontFamily":"Splunk Platform Sans","fontSize":14}},"viz_bUDVc4a3":{"type":"viz.rectangle","options":{"fill":"#1A1C20","stroke":"transparent"}},"viz_FMXH9pjH":{"type":"viz.text","options":{"content":"Saved Search Data Source","fontWeight":"bold","fontFamily":"Splunk Platform Sans","fontSize":14}},"viz_tjhlMZ1l":{"type":"viz.rectangle","options":{"fill":"#1A1C20","stroke":"transparent"}},"viz_YMNgNdvF":{"type":"viz.text","options":{"content":"Base and Chain Data Source","fontWeight":"bold","fontFamily":"Splunk Platform Sans","fontSize":14}},"viz_8eYnFbOO":{"type":"viz.rectangle","options":{"fill":"#1A1C20","stroke":"transparent"}},"viz_alG6pJau":{"type":"viz.text","options":{"content":"Test Data Source","fontWeight":"bold","fontFamily":"Splunk Platform Sans","fontSize":14}},"viz_2JEMx1Rb":{"type":"viz.text","options":{"content":"Dashboard Examples Hub","fontFamily":"Splunk Platform Sans","fontSize":22,"fontWeight":"bold"}},"viz_hLAeezlQ":{"type":"viz.text","options":{"content":"Empowering dashboard creators with a toolkit for example visualizations and dashboards. ","fontFamily":"Splunk Platform Sans","fontSize":12,"textColor":"#818285"}},"viz_DntlUGlA":{"type":"viz.text","options":{"content":"Visualizations","fontFamily":"Splunk Platform Sans","fontSize":14},"eventHandlers":[{"type":"drilldown.customUrl","options":{"url":"/app/splunk-dashboard-studio/example-hub-nav-visualizations"}}]},"viz_VHlcGf1t":{"type":"viz.text","options":{"content":"Search and Data","fontFamily":"Splunk Platform Sans","fontSize":14}},"viz_nSMAg8Fd":{"type":"viz.text","options":{"content":"Interactivity","fontFamily":"Splunk Platform Sans","fontSize":14},"eventHandlers":[{"type":"drilldown.customUrl","options":{"url":"/app/splunk-dashboard-studio/example-hub-nav-inputs"}}]},"viz_gVx61klY":{"type":"viz.text","options":{"content":"Dashboard Defaults","fontFamily":"Splunk Platform Sans","fontSize":14},"eventHandlers":[{"type":"drilldown.customUrl","options":{"url":"/app/splunk-dashboard-studio/example-hub-nav-defaults"}}]},"viz_cibYqwgn":{"type":"viz.text","options":{"content":"Complete Dashboards","fontFamily":"Splunk Platform Sans","fontSize":14},"eventHandlers":[{"type":"drilldown.customUrl","options":{"url":"/app/splunk-dashboard-studio/example-hub-nav-complete"}}]},"viz_AOR2YfOR":{"type":"viz.text","options":{"content":"Design Best Practices","fontFamily":"Splunk Platform Sans","fontSize":14},"eventHandlers":[{"type":"drilldown.customUrl","options":{"url":"/app/splunk-dashboard-studio/example-hub-nav-design"}}]},"viz_wbrnuCGL":{"type":"viz.text","options":{"content":"Read Documentation","fontFamily":"Splunk Platform Sans","fontSize":14},"eventHandlers":[{"type":"drilldown.customUrl","options":{"url":"https://docs.splunk.com/Documentation/DashApp/latest/DashApp/","newTab":true}}]},"viz_WNeIfZvb":{"type":"viz.text","options":{"content":"Submit feedback to: dashboard-studio@splunk.com","fontFamily":"Splunk Platform Sans","fontSize":14}},"viz_inline":{"type":"viz.img","options":{"preserveAspectRatio":true,"src":"/en-US/static/app/splunk-dashboard-studio/images/examples-hub/search/inline.png"},"eventHandlers":[{"type":"drilldown.customUrl","options":{"url":"/app/splunk-dashboard-studio/example-hub-ad-hoc-data"}}]},"viz_testdata":{"type":"viz.img","options":{"preserveAspectRatio":true,"src":"/en-US/static/app/splunk-dashboard-studio/images/examples-hub/search/test.png"},"eventHandlers":[{"type":"drilldown.customUrl","options":{"url":"/app/splunk-dashboard-studio/example-hub-test-data"}}]},"viz_postprocess":{"type":"viz.img","options":{"preserveAspectRatio":true,"src":"/en-US/static/app/splunk-dashboard-studio/images/examples-hub/search/post.png"},"eventHandlers":[{"type":"drilldown.customUrl","options":{"url":"/app/splunk-dashboard-studio/example-hub-base-chain-data"}}]},"viz_reportsearch":{"type":"viz.img","options":{"preserveAspectRatio":true,"src":"/en-US/static/app/splunk-dashboard-studio/images/examples-hub/search/report.png"},"eventHandlers":[{"type":"drilldown.customUrl","options":{"url":"/app/splunk-dashboard-studio/example-hub-saved-data"}}]},"viz_bJai6pnI":{"type":"viz.rectangle","options":{"rx":28,"fill":"transparent","stroke":"#3993FF","strokeWidth":3}}},"dataSources":{},"inputs":{},"layout":{"type":"absolute","options":{"width":1440,"backgroundColor":"#111215","display":"auto-scale","backgroundImage":{"sizeType":"contain","x":0,"y":0,"src":"/en-US/static/app/splunk-dashboard-studio/images/examples-hub/home/background.png"}},"structure":[{"item":"viz_8j1d0JLM","type":"block","position":{"x":140,"y":190,"w":133,"h":44}},{"item":"viz_bJai6pnI","type":"block","position":{"x":309,"y":185,"w":182,"h":56}},{"item":"viz_o6DWyd33","type":"block","position":{"x":30,"y":37,"w":80,"h":113}},{"item":"viz_3EDzFQmf","type":"block","position":{"x":935,"y":60,"w":220,"h":44}},{"item":"viz_a9qIcXhQ","type":"block","position":{"x":1180,"y":60,"w":231,"h":44}},{"item":"viz_DRQ4It9z","type":"block","position":{"x":315,"y":191,"w":170,"h":44}},{"item":"viz_4JKPZDgJ","type":"block","position":{"x":533,"y":190,"w":114,"h":44}},{"item":"viz_brttng5F","type":"block","position":{"x":703,"y":190,"w":164,"h":44}},{"item":"viz_M9V2Gulj","type":"block","position":{"x":913,"y":190,"w":179,"h":44}},{"item":"viz_Yx8gK8Ei","type":"block","position":{"x":70,"y":280,"w":200,"h":200}},{"item":"viz_AWvqaQV4","type":"block","position":{"x":80,"y":280,"w":164,"h":50}},{"item":"viz_bUDVc4a3","type":"block","position":{"x":510,"y":280,"w":200,"h":200}},{"item":"viz_FMXH9pjH","type":"block","position":{"x":520,"y":280,"w":164,"h":50}},{"item":"viz_tjhlMZ1l","type":"block","position":{"x":290,"y":280,"w":200,"h":200}},{"item":"viz_YMNgNdvF","type":"block","position":{"x":300,"y":280,"w":164,"h":50}},{"item":"viz_8eYnFbOO","type":"block","position":{"x":730,"y":280,"w":200,"h":200}},{"item":"viz_alG6pJau","type":"block","position":{"x":740,"y":280,"w":164,"h":50}},{"item":"viz_2JEMx1Rb","type":"block","position":{"x":141,"y":30,"w":300,"h":50}},{"item":"viz_hLAeezlQ","type":"block","position":{"x":141,"y":60,"w":300,"h":50}},{"item":"viz_uRjuqod5","type":"block","position":{"x":141,"y":100,"w":300,"h":50}},{"item":"viz_DntlUGlA","type":"block","position":{"x":157,"y":190,"w":100,"h":50}},{"item":"viz_VHlcGf1t","type":"block","position":{"x":340,"y":190,"w":115,"h":50}},{"item":"viz_nSMAg8Fd","type":"block","position":{"x":547,"y":190,"w":94,"h":50}},{"item":"viz_gVx61klY","type":"block","position":{"x":718,"y":190,"w":133,"h":50}},{"item":"viz_cibYqwgn","type":"block","position":{"x":928,"y":190,"w":160,"h":50}},{"item":"viz_wbrnuCGL","type":"block","position":{"x":972,"y":60,"w":160,"h":50}},{"item":"viz_WNeIfZvb","type":"block","position":{"x":1200,"y":52,"w":190,"h":50}},{"item":"viz_inline","type":"block","position":{"x":70,"y":310,"w":200,"h":170}},{"item":"viz_testdata","type":"block","position":{"x":730,"y":310,"w":200,"h":170}},{"item":"viz_postprocess","type":"block","position":{"x":290,"y":310,"w":200,"h":170}},{"item":"viz_reportsearch","type":"block","position":{"x":510,"y":310,"w":200,"h":170}}]},"description":"","title":"Examples Nav - Search and Data"}')},MROq:function(t,e,o){var s={"./af":"8GSH","./af.js":"8GSH","./ar":"NcOb","./ar-dz":"1ors","./ar-dz.js":"1ors","./ar-kw":"Sc1Y","./ar-kw.js":"Sc1Y","./ar-ly":"GzvP","./ar-ly.js":"GzvP","./ar-ma":"hH25","./ar-ma.js":"hH25","./ar-sa":"u2jB","./ar-sa.js":"u2jB","./ar-tn":"5Mza","./ar-tn.js":"5Mza","./ar.js":"NcOb","./az":"ZVVJ","./az.js":"ZVVJ","./be":"kQaN","./be.js":"kQaN","./bg":"+n5x","./bg.js":"+n5x","./bm":"TTiN","./bm.js":"TTiN","./bn":"aIF2","./bn.js":"aIF2","./bo":"QWb5","./bo.js":"QWb5","./br":"iQoZ","./br.js":"iQoZ","./bs":"EL7g","./bs.js":"EL7g","./ca":"vd/2","./ca.js":"vd/2","./cs":"K+3W","./cs.js":"K+3W","./cv":"Jt3X","./cv.js":"Jt3X","./cy":"sWi3","./cy.js":"sWi3","./da":"YcFX","./da.js":"YcFX","./de":"BKZ+","./de-at":"Oq9h","./de-at.js":"Oq9h","./de-ch":"hHY4","./de-ch.js":"hHY4","./de.js":"BKZ+","./dv":"w8Ej","./dv.js":"w8Ej","./el":"tSbB","./el.js":"tSbB","./en-SG":"cGzb","./en-SG.js":"cGzb","./en-au":"HgyJ","./en-au.js":"HgyJ","./en-ca":"ZyTy","./en-ca.js":"ZyTy","./en-gb":"exaB","./en-gb.js":"exaB","./en-ie":"yKzn","./en-ie.js":"yKzn","./en-il":"TB59","./en-il.js":"TB59","./en-nz":"iDxo","./en-nz.js":"iDxo","./eo":"4bvN","./eo.js":"4bvN","./es":"GNPT","./es-do":"R7mU","./es-do.js":"R7mU","./es-us":"Nstw","./es-us.js":"Nstw","./es.js":"GNPT","./et":"ZOjb","./et.js":"ZOjb","./eu":"kFC9","./eu.js":"kFC9","./fa":"8Cju","./fa.js":"8Cju","./fi":"vcN1","./fi.js":"vcN1","./fo":"8Ygf","./fo.js":"8Ygf","./fr":"Y8Ij","./fr-ca":"t+Zl","./fr-ca.js":"t+Zl","./fr-ch":"SPXN","./fr-ch.js":"SPXN","./fr.js":"Y8Ij","./fy":"T3MF","./fy.js":"T3MF","./ga":"NowM","./ga.js":"NowM","./gd":"GJYX","./gd.js":"GJYX","./gl":"MdC8","./gl.js":"MdC8","./gom-latn":"5j0y","./gom-latn.js":"5j0y","./gu":"fY0S","./gu.js":"fY0S","./he":"ACAV","./he.js":"ACAV","./hi":"3WqV","./hi.js":"3WqV","./hr":"OnNk","./hr.js":"OnNk","./hu":"EQmw","./hu.js":"EQmw","./hy-am":"MNf7","./hy-am.js":"MNf7","./id":"0yow","./id.js":"0yow","./is":"TmOJ","./is.js":"TmOJ","./it":"xD/0","./it-ch":"foQf","./it-ch.js":"foQf","./it.js":"xD/0","./ja":"jOnb","./ja.js":"jOnb","./jv":"lOtj","./jv.js":"lOtj","./ka":"BAN/","./ka.js":"BAN/","./kk":"iNiw","./kk.js":"iNiw","./km":"TUxt","./km.js":"TUxt","./kn":"hQzt","./kn.js":"hQzt","./ko":"ZNZT","./ko.js":"ZNZT","./ku":"S0Tg","./ku.js":"S0Tg","./ky":"JO+T","./ky.js":"JO+T","./lb":"vn/h","./lb.js":"vn/h","./lo":"gnIm","./lo.js":"gnIm","./lt":"6PD3","./lt.js":"6PD3","./lv":"YKe2","./lv.js":"YKe2","./me":"d3TR","./me.js":"d3TR","./mi":"hTlv","./mi.js":"hTlv","./mk":"ffVN","./mk.js":"ffVN","./ml":"ejL1","./ml.js":"ejL1","./mn":"RIsM","./mn.js":"RIsM","./mr":"CPJk","./mr.js":"CPJk","./ms":"d5Hy","./ms-my":"t4T9","./ms-my.js":"t4T9","./ms.js":"d5Hy","./mt":"1KVU","./mt.js":"1KVU","./my":"LsNb","./my.js":"LsNb","./nb":"h+U8","./nb.js":"h+U8","./ne":"2JSI","./ne.js":"2JSI","./nl":"jsZ8","./nl-be":"+h6j","./nl-be.js":"+h6j","./nl.js":"jsZ8","./nn":"mh29","./nn.js":"mh29","./pa-in":"O6bP","./pa-in.js":"O6bP","./pl":"8Bez","./pl.js":"8Bez","./pt":"DDip","./pt-br":"uHm5","./pt-br.js":"uHm5","./pt.js":"DDip","./ro":"baBi","./ro.js":"baBi","./ru":"ecsu","./ru.js":"ecsu","./sd":"e9KM","./sd.js":"e9KM","./se":"CZRU","./se.js":"CZRU","./si":"TO58","./si.js":"TO58","./sk":"K+Lk","./sk.js":"K+Lk","./sl":"QK6v","./sl.js":"QK6v","./sq":"v3Qg","./sq.js":"v3Qg","./sr":"Ndyf","./sr-cyrl":"PGvg","./sr-cyrl.js":"PGvg","./sr.js":"Ndyf","./ss":"2B8G","./ss.js":"2B8G","./sv":"WF5B","./sv.js":"WF5B","./sw":"4VvY","./sw.js":"4VvY","./ta":"dw3T","./ta.js":"dw3T","./te":"4MAb","./te.js":"4MAb","./tet":"/hi0","./tet.js":"/hi0","./tg":"PoVJ","./tg.js":"PoVJ","./th":"OY2w","./th.js":"OY2w","./tl-ph":"UC+K","./tl-ph.js":"UC+K","./tlh":"cWLW","./tlh.js":"cWLW","./tr":"EqYs","./tr.js":"EqYs","./tzl":"fN8o","./tzl.js":"fN8o","./tzm":"6cYq","./tzm-latn":"pdAN","./tzm-latn.js":"pdAN","./tzm.js":"6cYq","./ug-cn":"J+SV","./ug-cn.js":"J+SV","./uk":"6Olw","./uk.js":"6Olw","./ur":"QNGR","./ur.js":"QNGR","./uz":"hLzJ","./uz-latn":"KqOT","./uz-latn.js":"KqOT","./uz.js":"hLzJ","./vi":"EnIJ","./vi.js":"EnIJ","./x-pseudo":"W7dU","./x-pseudo.js":"W7dU","./yo":"QDhB","./yo.js":"QDhB","./zh-cn":"bjMe","./zh-cn.js":"bjMe","./zh-hk":"JFCg","./zh-hk.js":"JFCg","./zh-tw":"xBDH","./zh-tw.js":"xBDH"};function i(t){var e=n(t);return o(e)}function n(t){if(!o.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=n,t.exports=i,i.id="MROq"},SKaQ:function(t,e,o){"use strict";var s=o("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(o("lSNA")),n=s(o("QILm")),r=s(o("c2re")),a=s(o("+txG")),l=s(o("8yXb")),p=s(o("Su4Q"));function d(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,s)}return o}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?d(Object(o),!0).forEach((function(e){(0,i.default)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var c=a.default.layouts,f=(c.rowcolumn,(0,n.default)(c,["rowcolumn"])),h=u(u({},(0,r.default)(a.default)),{},{layouts:f,visualizations:u(u({},l.default.visualizations),{},{"viz.error":p.default})});e.default=h},Su4Q:function(t,e,o){"use strict";var s=o("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(o("VkAN")),n=s(o("ERkP")),r=s(o("j/s1")),a=s(o("TDR6")),l=s(o("aWzz")),p=o("r0yy");function d(){var t=(0,i.default)(["\n    color: #dc4e41;\n"]);return d=function(){return t},t}function u(){var t=(0,i.default)(["\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    -ms-flex-direction: column;\n    -webkit-flex-direction: column;\n    flex-direction: column;\n    text-align: center;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n"]);return u=function(){return t},t}function c(){var t=(0,i.default)(["\n    margin: 0 5px;\n"]);return c=function(){return t},t}var f=r.default.span(c()),h=r.default.div(u()),m=(0,r.default)(a.default)(d()),k=function(t){return n.default.createElement("div",{style:{width:t.width,height:t.height}},n.default.createElement(h,null,n.default.createElement("div",{style:{padding:10}},n.default.createElement(m,{size:1.5}),n.default.createElement(f,null,(0,p._)("Oops! The dashboard that you tried to convert uses components that are not yet supported in Dashboard Studio. We apologize for any inconvenience.")))))};k.propTypes={height:l.default.number,width:l.default.number};var v=k;e.default=v},"pw/X":function(t,e,o){"use strict";var s=o("284h"),i=o("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.ExampleCore=void 0;var n=i(o("lSNA")),r=s(o("ERkP")),a=i(o("aWzz")),l=o("j/s1"),p=o("mwAw"),d=s(o("GjAW")),u=o("+txG"),c=o("8SuZ"),f=i(o("xr3A")),h=i(o("46C8")),m=i(o("hxbz")),k=i(o("+VMz")),v=i(o("8XJx")),y=o("ihxA"),j=s(o("Dg3K")),b=i(o("SKaQ"));function z(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,s)}return o}function g(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?z(Object(o),!0).forEach((function(e){(0,n.default)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):z(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var w=g(g({},b.default),{},{visualizations:g(g({},b.default.visualizations),{},{"viz.code":j.default})}),F=f.default.create();F.addDefaultProvider(new h.default);var x=m.default.create();x.addDefaultProvider(new v.default),x.addProvider(new k.default);var L=new y.SWACollector,S=function(t){var e=t.themeKey,o=t.definition,s=(0,r.useMemo)((function(){return g(g(g(g({},u.themes[e]),d.themes[e]),p.themes[e]),j.themes[e])}),[e]);return r.default.createElement(c.DashboardContextProvider,{geoRegistry:F,iconRegistry:x,metricsCollectors:L},r.default.createElement(l.ThemeProvider,{theme:s},r.default.createElement(d.default,{width:"100%",height:"calc(100vh - 78px)",definition:o,preset:w})))};e.ExampleCore=S,S.propTypes={themeKey:a.default.string,definition:a.default.object.isRequired},S.defaultProps={themeKey:"enterpriseDark"}}},[["EXpW",0,1]]]);