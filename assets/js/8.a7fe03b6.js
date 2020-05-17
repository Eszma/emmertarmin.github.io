(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{253:function(e,t,r){"use strict";var s=0;function i(e){if(!s){var t=document.createElement("script");t.setAttribute("src",e),document.body.appendChild(t),s=new Promise(function(e){t.onload=function(){e(window.twttr)}})}return s}var n={id:{type:String,required:!0},sourceType:{type:String},slug:{type:String},options:Object};e.exports={addPlatformScript:i,twitterEmbedComponent:function(e){return{data:function(){return{isLoaded:!1,isAvailable:!1}},props:Object.assign({},n,e.props),mounted:function(){var t,r=this;t="profile"===this.sourceType?{sourceType:this.sourceType,screenName:this.id}:"list"===this.sourceType?{sourceType:this.sourceType,ownerScreenName:this.id,slug:this.slug}:this.id,Promise.resolve(window.twttr?window.twttr:i("//platform.twitter.com/widgets.js")).then(function(s){return e.embedComponent(s,t,r.$el,r.options)}).then(function(e){r.isAvailable=void 0!==e,r.isLoaded=!0})},render:function(e){if(this.isLoaded&&this.isAvailable)return e("div",{class:this.$props.widgetClass});if(this.isLoaded&&!this.isAvailable&&this.$props.errorMessage){var t=e("div",{class:this.$props.errorMessageClass,domProps:{innerHTML:this.$props.errorMessage}});return e("div",[t])}return e("div",{class:this.$props.widgetClass},this.$slots.default)}}}}},296:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Tweet",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"Moment",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Timeline",{enumerable:!0,get:function(){return n.default}});var s=o(r(297)),i=o(r(298)),n=o(r(299));function o(e){return e&&e.__esModule?e:{default:e}}},297:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=(0,r(253).twitterEmbedComponent)({embedComponent:function(e){for(var t,r=arguments.length,s=new Array(r>1?r-1:0),i=1;i<r;i++)s[i-1]=arguments[i];return(t=e.widgets).createTweetEmbed.apply(t,s)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Tweet."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});t.default=s},298:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=(0,r(253).twitterEmbedComponent)({embedComponent:function(e){for(var t,r=arguments.length,s=new Array(r>1?r-1:0),i=1;i<r;i++)s[i-1]=arguments[i];return(t=e.widgets).createMoment.apply(t,s)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Moment."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});t.default=s},299:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=(0,r(253).twitterEmbedComponent)({embedComponent:function(e){for(var t,r=arguments.length,s=new Array(r>1?r-1:0),i=1;i<r;i++)s[i-1]=arguments[i];return(t=e.widgets).createTimeline.apply(t,s)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Timeline."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});t.default=s},323:function(e,t,r){"use strict";r.r(t);var s={components:{Tweet:r(296).Tweet}},i=r(35),n=Object(i.a)(s,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("Tweet",{attrs:{id:"1223275902034944001"}}),e._v(" "),r("p",[e._v("After I won a scholarship from Audi Hungária, which helped me finance my 5th. semester in Kalrsruhe, they were happy to later see me apply for an internship.")]),e._v(" "),r("p",[e._v("So I became an engineering intern at the electric drivetrain manufacturing section. Our team worked out the nuances of manufacturing technology, which led up to the opening of the electric motor factory in the summer of 2018.")]),e._v(" "),r("p",[e._v("In the first few weeks I familiarized myself with the testing machines and operated them at times. This includes high voltage tests at various stages of assembling, leakage tests and an overview of the workings of the break tester.")]),e._v(" "),r("h2",{attrs:{id:"excel-for-the-win"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#excel-for-the-win","aria-hidden":"true"}},[e._v("#")]),e._v(" Excel for the win")]),e._v(" "),r("p",[e._v("As I was fresh and new, I've been given a wide range of makeshift tasks, which surprisingly often sat me in front of an excel sheet. One time I was asked to import thousands of CSV files into a sheet, which had a macro implemented for some of the tasks after import, so it was still incredibly tedious and repetitive. It took me two full days to finish. After that I started tinkering with some basic VBA code from StackOverflow. Shortly, I managed to write a program, that automatically reads each of the thousands of files from the specified folder, and includes them in the original sheet without screwing up the diagrams.")]),e._v(" "),r("p",[e._v("Diagrams look at a range of rows. They will tolerate pasting new rows inside of the specified range, and adjust themselves automatically. But they won't tolerate deleting every row and then pasting new ones. So in my script I deleted all rows except for the first and the last one, pasted new data in the middle, and finally removed the outer ones.")]),e._v(" "),r("p",[e._v("I even made the file make a safe copy of itself first, just to have a snapshot of previous states. And I had the program it freeze the screen for the time it computes (instead of flickering wildly between csv files and sheets), and then send an alert when it's done.")]),e._v(" "),r("p",[e._v("The success I got from this relatively simple script encouraged me to update another Excel sheet we used often. It contained the daily report, and was sent to the boss via email every day. I had it's previous macro cleaned up at the code level, automated the aftertouch of coloring and styling (which the previous macro used to mess up every time). But the biggest trick was making the sheet compose an email (in two languages, with correct dates) and attach itself to it. From then on we just had to press Ctrl+E, have a glance at the email draft in Outlook that just popped up, and press send. The basic building blocks of all of these VBA programs are included in my "),r("a",{attrs:{href:"https://github.com/emmertarmin/VBA"}},[e._v("github")]),e._v(" page.")])],1)},[],!1,null,null,null);n.options.__file="audi-internship.md";t.default=n.exports}}]);