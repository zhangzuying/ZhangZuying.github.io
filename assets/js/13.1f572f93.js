(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{343:function(a,s,t){"use strict";t.r(s);var n=t(4),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h5",{attrs:{id:"需求-网站中有新数据生成时-前端界面需要有声音提醒"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#需求-网站中有新数据生成时-前端界面需要有声音提醒"}},[a._v("#")]),a._v(" 需求：网站中有新数据生成时，前端界面需要有声音提醒")]),a._v(" "),s("h5",{attrs:{id:"思路-html中-先用audio标签写一个隐藏的音频播放属性-根据不同场景执行audio-play-方法-如果是新消息提醒-前端可写个定时器在规定时间内请求次接口看是否有新增数据-如果有更新可执行audio-play-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路-html中-先用audio标签写一个隐藏的音频播放属性-根据不同场景执行audio-play-方法-如果是新消息提醒-前端可写个定时器在规定时间内请求次接口看是否有新增数据-如果有更新可执行audio-play-方法"}},[a._v("#")]),a._v(" 思路：html中，先用audio标签写一个隐藏的音频播放属性，根据不同场景执行audio.play()方法(如果是新消息提醒，前端可写个定时器在规定时间内请求次接口看是否有新增数据，如果有更新可执行audio.play()方法)")]),a._v(" "),s("h5",{attrs:{id:"具体实现代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#具体实现代码"}},[a._v("#")]),a._v(" 具体实现代码：")]),a._v(" "),s("h6",{attrs:{id:"html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[a._v("#")]),a._v(" HTML")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('<p class="clickp"><span class="click">点击后发声提示</span></p>\n<audio style="display: none;" id="audioTsy" controls="controls">\n    <source src="./images/index/13654.mp3" type="audio/mpeg">\n</audio>\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h6",{attrs:{id:"js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js"}},[a._v("#")]),a._v(" JS")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('<script type="text/javascript">\n    $(function(){\n    var audio = document.getElementById("audioTsy")\n    $(\'.clickp\').click(function(){\n        audio.play()\n    });\n});\n<\/script>\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);