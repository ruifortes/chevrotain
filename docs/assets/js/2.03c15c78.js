(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{201:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/SAP/chevrotain/tree/master/examples/tutorial/step3_actions/step3b_actions_embedded.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Run and Debug the source code"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("In the "),a("router-link",{attrs:{to:"./step2_parsing.html"}},[t._v("previous")]),t._v(' tutorial step\nwe have implemented a parser for a "mini" SQL Select grammar. The current problem is that our parser only\nvalidates the input conforms to the grammar. In most real world use cases the parser will also have to output some\nresult/data structure/value.')],1),t._v(" "),a("p",[t._v("This can be accomplished using two features of the Parsing DSL:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/4_0_0/classes/parser.html#consume1",target:"_blank",rel:"noopener noreferrer"}},[t._v("CONSUME"),a("OutboundLink")],1),t._v(" will return\nThe "),a("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/4_0_0/interfaces/itoken.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("IToken"),a("OutboundLink")],1),t._v(" object consumed.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/4_0_0/classes/parser.html#subrule1",target:"_blank",rel:"noopener noreferrer"}},[t._v("SUBRULE"),a("OutboundLink")],1),t._v(" will return\nthe result of the grammar rule invoked.")])]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("For embedded actions to work as expected the automatic CST creation must first be disabled.\nThe CST creation is controlled by the "),a("strong",[t._v("outputCst")]),t._v(" flag of the parser "),a("a",{attrs:{href:"https://sap.github.io/chevrotain/documentation/4_0_0/interfaces/iparserconfig.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("configuration object"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(4),a("p",[t._v("Failing to disabled the CST creation would cause the Parser to return a CST of the grammar rule\nwe invoked instead of of the expected output structure we will be creating (an AST).")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("Lets inspect a simple contrived example:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("Lets go back to the mini SQL Select grammar.")]),t._v(" "),a("p",[t._v("For this grammar we will build a more complex data structure (an AST) instead of simply returning a number.\nOur selectStatement rule will now return an object with four properties:")]),t._v(" "),t._m(9),a("p",[t._v("Three of those properties (selectClause / fromClause / whereClause) are the results of invoking\nother parser rules.")]),t._v(" "),a("p",[t._v('Lets look at the "selectClause" rule implemntaiton:')]),t._v(" "),t._m(10),t._m(11)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"tutorial-semantics-embedded-actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-semantics-embedded-actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Tutorial - Semantics Embedded Actions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"tldr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tldr","aria-hidden":"true"}},[this._v("#")]),this._v(" TLDR")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"enabling-embedded-actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enabling-embedded-actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Enabling embedded actions")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("SelectParserEmbedded")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Parser")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("constructor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("super")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            tokenVocabulary"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// we have to explicitly disable the CST building for embedded actions to work.")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" outputCst"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"simple-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Simple Example")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("$"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("RULE")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"topRule"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n    $"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("MANY")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        $"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("OR")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token constant"}},[t._v("ALT")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    result "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" $"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("SUBRULE")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decimalRule"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token constant"}},[t._v("ALT")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    result "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" $"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("SUBRULE")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IntegerRule"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n$"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("RULE")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"decimalRule"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" decimalToken "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" $"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("CONSUME")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Decimal"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("parseFloat")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("decimalToken"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n$"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("RULE")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"IntegerRule"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" intToken "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" $"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("CONSUME")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Integer"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intToken"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("strong",[this._v("decimalRule")]),this._v(" and "),s("strong",[this._v("IntegerRule")]),this._v(" both return a javascript number (using parseInt/parseFloat).\nand the "),s("strong",[this._v("topRule")]),this._v(" adds it to the final result.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"sql-grammar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-grammar","aria-hidden":"true"}},[this._v("#")]),this._v(" SQL Grammar")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("$"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("RULE")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"selectStatement"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" select"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" where\n\n    select "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" $"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("SUBRULE")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selectClause"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" $"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("SUBRULE")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fromClause"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    $"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("OPTION")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        where "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" $"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("SUBRULE")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("whereClause"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"SELECT_STMT"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        selectClause"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" select"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        fromClause"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// may be undefined if the OPTION was not entered.")]),t._v("\n        whereClause"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" where\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("$"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("RULE")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"selectClause"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" columns "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    $"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("CONSUME")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Select"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    $"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("AT_LEAST_ONE_SEP")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token constant"}},[t._v("SEP")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Comma"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token constant"}},[t._v("DEF")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// accessing a token's string via getImage utility")]),t._v("\n            columns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("CONSUME")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Identifier"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("image"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"SELECT_CLAUSE"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        columns"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" columns\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In the selectClause rule we access the "),s("strong",[this._v("image")]),this._v(" property of the Identifier token returned from "),s("strong",[this._v("CONSUME")]),this._v("\nand push each of these strings to the "),s("strong",[this._v("columns")]),this._v(" array.")])}],!1,null,null,null);e.options.__file="step3b_adding_actions_embedded.md";s.default=e.exports}}]);