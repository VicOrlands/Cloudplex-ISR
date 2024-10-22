"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[849,3047],{392:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,i){if(t.language===a){var s=t.tokenStack=[];t.code=t.code.replace(r,function(e){if("function"==typeof i&&!i(e))return e;for(var r,o=s.length;-1!==t.code.indexOf(r=n(a,o));)++o;return s[o]=e,r}),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,i=Object.keys(t.tokenStack);!function s(o){for(var p=0;p<o.length&&!(r>=i.length);p++){var l=o[p];if("string"==typeof l||l.content&&"string"==typeof l.content){var u=i[r],d=t.tokenStack[u],g="string"==typeof l?l:l.content,c=n(a,u),f=g.indexOf(c);if(f>-1){++r;var m=g.substring(0,f),b=new e.Token(a,e.tokenize(d,t.grammar),"language-"+a,d),k=g.substring(f+c.length),h=[];m&&h.push.apply(h,s([m])),h.push(b),k&&h.push.apply(h,s([k])),"string"==typeof l?o.splice.apply(o,[p,1].concat(h)):l.content=h}}else l.content&&s(l.content)}return o}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]},35890:function(e,n,t){var a=t(392);function r(e){var n,t;e.register(a),e.languages.smarty={comment:{pattern:/^\{\*[\s\S]*?\*\}/,greedy:!0},"embedded-php":{pattern:/^\{php\}[\s\S]*?\{\/php\}/,greedy:!0,inside:{smarty:{pattern:/^\{php\}|\{\/php\}$/,inside:null},php:{pattern:/[\s\S]+/,alias:"language-php",inside:e.languages.php}}},string:[{pattern:/"(?:\\.|[^"\\\r\n])*"/,greedy:!0,inside:{interpolation:{pattern:/\{[^{}]*\}|`[^`]*`/,inside:{"interpolation-punctuation":{pattern:/^[{`]|[`}]$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:null}}},variable:/\$\w+/}},{pattern:/'(?:\\.|[^'\\\r\n])*'/,greedy:!0}],keyword:{pattern:/(^\{\/?)[a-z_]\w*\b(?!\()/i,lookbehind:!0,greedy:!0},delimiter:{pattern:/^\{\/?|\}$/,greedy:!0,alias:"punctuation"},number:/\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,variable:[/\$(?!\d)\w+/,/#(?!\d)\w+#/,{pattern:/(\.|->|\w\s*=)(?!\d)\w+\b(?!\()/,lookbehind:!0},{pattern:/(\[)(?!\d)\w+(?=\])/,lookbehind:!0}],function:{pattern:/(\|\s*)@?[a-z_]\w*|\b[a-z_]\w*(?=\()/i,lookbehind:!0},"attr-name":/\b[a-z_]\w*(?=\s*=)/i,boolean:/\b(?:false|no|off|on|true|yes)\b/,punctuation:/[\[\](){}.,:`]|->/,operator:[/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,/\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,/\b(?:and|eq|gt?e|gt|lt?e|lt|mod|neq?|not|or)\b/]},e.languages.smarty["embedded-php"].inside.smarty.inside=e.languages.smarty,e.languages.smarty.string[0].inside.interpolation.inside.expression.inside=e.languages.smarty,n=/"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])*'/,t=RegExp(/\{\*[\s\S]*?\*\}/.source+"|"+/\{php\}[\s\S]*?\{\/php\}/.source+"|"+/\{(?:[^{}"']|<str>|\{(?:[^{}"']|<str>|\{(?:[^{}"']|<str>)*\})*\})*\}/.source.replace(/<str>/g,function(){return n.source}),"g"),e.hooks.add("before-tokenize",function(n){var a=!1;e.languages["markup-templating"].buildPlaceholders(n,"smarty",t,function(e){return"{/literal}"===e&&(a=!1),!a&&("{literal}"===e&&(a=!0),!0)})}),e.hooks.add("after-tokenize",function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"smarty")})}e.exports=r,r.displayName="smarty",r.aliases=[]}}]);