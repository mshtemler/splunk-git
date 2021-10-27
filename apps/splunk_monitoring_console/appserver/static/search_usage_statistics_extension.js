require(["jquery","underscore","splunkjs/mvc/simplexml/ready!","splunkjs/mvc","splunkjs/mvc/tableview"],(function(__WEBPACK_EXTERNAL_MODULE__0__,__WEBPACK_EXTERNAL_MODULE__1__,__WEBPACK_EXTERNAL_MODULE__2__,__WEBPACK_EXTERNAL_MODULE__5__,__WEBPACK_EXTERNAL_MODULE__6__){return function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s="splunk_monitoring_console-extensions/search_usage_statistics_extension")}({0:function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE__0__},1:function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE__1__},2:function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE__2__},5:function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE__5__},6:function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE__6__},"splunk_monitoring_console-extensions/search_usage_statistics_extension":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__(0),__webpack_require__(1),__webpack_require__(5),__webpack_require__(6),__webpack_require__(2)],void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function($,_,mvc,TableView){var FIELD_NAMES=["Report Name/Search String"],SearchStringCellRender=TableView.BaseCellRenderer.extend({canRender:function(cell){return _.contains(FIELD_NAMES,cell.field)&&_.isString(cell.value)&&cell.value.lastIndexOf("|")>0},render:function($td,cell){_.forEach(cell.value.split("|"),(function(cmdAndArgs,idx){$td.append($("<div>"+(idx>0?"|":"")+cmdAndArgs+"</div>"))}))}});_.forEach(["frequently_run_searches","long_running_searches"],(function(id){var table=mvc.Components.get(id);table&&table.getVisualization((function(tableView){tableView.table.addCellRenderer(new SearchStringCellRender),tableView.table.render()}))}))}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}})}));