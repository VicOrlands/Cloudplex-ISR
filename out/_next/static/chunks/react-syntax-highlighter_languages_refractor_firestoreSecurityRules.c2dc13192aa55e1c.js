"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[980],{5471:function(e){function s(e){e.languages["firestore-security-rules"]=e.languages.extend("clike",{comment:/\/\/.*/,keyword:/\b(?:allow|function|if|match|null|return|rules_version|service)\b/,operator:/&&|\|\||[<>!=]=?|[-+*/%]|\b(?:in|is)\b/}),delete e.languages["firestore-security-rules"]["class-name"],e.languages.insertBefore("firestore-security-rules","keyword",{path:{pattern:/(^|[\s(),])(?:\/(?:[\w\xA0-\uFFFF]+|\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)))+/,lookbehind:!0,greedy:!0,inside:{variable:{pattern:/\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)/,inside:{operator:/=/,keyword:/\*\*/,punctuation:/[.$(){}]/}},punctuation:/\//}},method:{pattern:/(\ballow\s+)[a-z]+(?:\s*,\s*[a-z]+)*(?=\s*[:;])/,lookbehind:!0,alias:"builtin",inside:{punctuation:/,/}}})}e.exports=s,s.displayName="firestoreSecurityRules",s.aliases=[]}}]);