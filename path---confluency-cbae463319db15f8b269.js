webpackJsonp([80083723746148],{459:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Created as part of Cerner’s 2016 Hackfest, Confluency is an Ionic application that tracks children’s vocabulary development over time. I had the idea for this application after watching Deb Roy’s TED Talk, which I reviewed in an earlier post. The original idea was to use a speech-to-text API to record conversations with children, create a wordbank, and provide insights into language development. Our target audience would be parents and caretakers working with patients suffering recovering from strokes or head trauma.</p>\n<p>I teamed up with three other KU undergrads to tackle the project. We used the <a href="http://ionicframework.com/">Ionic Framework</a> to create the app, in part because of the kick-ass <a href="http://ionic.io/products/creator">Ionic Creator</a> product they offer, which allows for drag and drop prototyping.</p>\n<p></p>\n<p>The initial goal was to use IBM’s <a href="http://www.ibm.com/watson/developercloud/speech-to-text.html">Speech to Text API</a> to handle translating audio clips into our “wordbank” JSONs. If you <a href="https://speech-to-text-demo.mybluemix.net/">take their demo out for a spin</a>, you’ll see just how perfect the JSONs produced match our needs. Each JSON contains a transcript containing the translation of the highest ranked translations, and also includes a list of word alternatives and their confidence ratings when it fails to find a 100 percent match. The JSON below illustrates:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">"results"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token string">"word_alternatives"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          <span class="token string">"start_time"</span><span class="token punctuation">:</span> <span class="token number">0.95</span><span class="token punctuation">,</span>\n          <span class="token string">"alternatives"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              <span class="token string">"confidence"</span><span class="token punctuation">:</span> <span class="token number">0.7399</span><span class="token punctuation">,</span>\n              <span class="token string">"word"</span><span class="token punctuation">:</span> <span class="token string">"what"</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n              <span class="token string">"confidence"</span><span class="token punctuation">:</span> <span class="token number">0.26</span><span class="token punctuation">,</span>\n              <span class="token string">"word"</span><span class="token punctuation">:</span> <span class="token string">"what\'s"</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">]</span><span class="token punctuation">,</span>\n          <span class="token string">"end_time"</span><span class="token punctuation">:</span> <span class="token number">1.39</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          <span class="token string">"start_time"</span><span class="token punctuation">:</span> <span class="token number">1.43</span><span class="token punctuation">,</span>\n          <span class="token string">"alternatives"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              <span class="token string">"confidence"</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n              <span class="token string">"word"</span><span class="token punctuation">:</span> <span class="token string">"a"</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">]</span><span class="token punctuation">,</span>\n          <span class="token string">"end_time"</span><span class="token punctuation">:</span> <span class="token number">1.59</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          <span class="token string">"start_time"</span><span class="token punctuation">:</span> <span class="token number">1.59</span><span class="token punctuation">,</span>\n          <span class="token string">"alternatives"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              <span class="token string">"confidence"</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n              <span class="token string">"word"</span><span class="token punctuation">:</span> <span class="token string">"beautiful"</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">]</span><span class="token punctuation">,</span>\n          <span class="token string">"end_time"</span><span class="token punctuation">:</span> <span class="token number">2.54</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          <span class="token string">"start_time"</span><span class="token punctuation">:</span> <span class="token number">2.57</span><span class="token punctuation">,</span>\n          <span class="token string">"alternatives"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              <span class="token string">"confidence"</span><span class="token punctuation">:</span> <span class="token number">0.9998</span><span class="token punctuation">,</span>\n              <span class="token string">"word"</span><span class="token punctuation">:</span> <span class="token string">"day"</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">]</span><span class="token punctuation">,</span>\n          <span class="token string">"end_time"</span><span class="token punctuation">:</span> <span class="token number">3.09</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          <span class="token string">"start_time"</span><span class="token punctuation">:</span> <span class="token number">3.17</span><span class="token punctuation">,</span>\n          <span class="token string">"alternatives"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              <span class="token string">"confidence"</span><span class="token punctuation">:</span> <span class="token number">0.9816</span><span class="token punctuation">,</span>\n              <span class="token string">"word"</span><span class="token punctuation">:</span> <span class="token string">"outside"</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n              <span class="token string">"confidence"</span><span class="token punctuation">:</span> <span class="token number">0.0184</span><span class="token punctuation">,</span>\n              <span class="token string">"word"</span><span class="token punctuation">:</span> <span class="token string">"side"</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">]</span><span class="token punctuation">,</span>\n          <span class="token string">"end_time"</span><span class="token punctuation">:</span> <span class="token number">4.1</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n          <span class="token string">"confidence"</span><span class="token punctuation">:</span> <span class="token number">0.842</span><span class="token punctuation">,</span>\n          <span class="token string">"transcript"</span><span class="token punctuation">:</span> <span class="token string">"what a beautiful day outside "</span><span class="token punctuation">,</span>\n          <span class="token string">"timestamps"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">[</span>\n              <span class="token string">"what"</span><span class="token punctuation">,</span>\n              <span class="token number">0.95</span><span class="token punctuation">,</span>\n              <span class="token number">1.39</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">[</span>\n              <span class="token string">"a"</span><span class="token punctuation">,</span>\n              <span class="token number">1.43</span><span class="token punctuation">,</span>\n              <span class="token number">1.59</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">[</span>\n              <span class="token string">"beautiful"</span><span class="token punctuation">,</span>\n              <span class="token number">1.59</span><span class="token punctuation">,</span>\n              <span class="token number">2.54</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">[</span>\n              <span class="token string">"day"</span><span class="token punctuation">,</span>\n              <span class="token number">2.57</span><span class="token punctuation">,</span>\n              <span class="token number">3.09</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">[</span>\n              <span class="token string">"outside"</span><span class="token punctuation">,</span>\n              <span class="token number">3.17</span><span class="token punctuation">,</span>\n              <span class="token number">4.1</span>\n            <span class="token punctuation">]</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          <span class="token string">"transcript"</span><span class="token punctuation">:</span> <span class="token string">"what\'s a beautiful day outside "</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          <span class="token string">"transcript"</span><span class="token punctuation">:</span> <span class="token string">"what a beautiful day out side "</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token string">"final"</span><span class="token punctuation">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">"result_index"</span><span class="token punctuation">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Confession: I failed to get the API working for the app. I could not figure out how to properly format the XMLHttpRequests. Since our application did not have a built-out backend, I had to make the API calls client-side which is a much bigger hassle than using <a href="https://github.com/watson-developer-cloud/speech-to-text-nodejs">the service with nodejs</a>. I first ran into CORS (Cross-Origin-Resource-Sharing) issues trying to make the call from localhost. Thankfully, <a href="http://blog.ionic.io/handling-cors-issues-in-ionic/">Ionic has a page dedicated to these issues</a>, and I was able to get a proxy set up to make the calls. But even with the proxy, I still continued to run into authentication issues, evening using specific credentials from IBM Bluemix.</p>\n<p>I plan migrating the app over to node after my internship finishes up, using <a href="https://www.raymondcamden.com/2015/08/05/a-real-world-app-with-ibm-bluemix-node-cordova-and-ionic/">this awesome tutorial</a> as a jumping off point. I’m convinced my previous issues were due to my inability to read documentation. I think the app has some true potential and I look forward to developing it further.</p>',timeToRead:3,tableOfContents:"",fields:{tagSlugs:["/tags/speech/","/tags/mobile-application/"]},frontmatter:{title:"Confluency - Cerner Hackfest 2016",tags:["speech","mobile application"],date:"May 06, 2016",author:{id:"Evan Nichols",bio:"Software Engineer and outdoor enthusiast. EngRes @ Google NYC.",avatar:{children:[{responsiveResolution:{src:"/static/4c8a15d8009c77284919b7aa2785b3cc-88e85.jpg",srcSet:"/static/4c8a15d8009c77284919b7aa2785b3cc-88e85.jpg 1x,\n/static/4c8a15d8009c77284919b7aa2785b3cc-db17a.jpg 1.5x,\n/static/4c8a15d8009c77284919b7aa2785b3cc-599b9.jpg 2x,\n/static/4c8a15d8009c77284919b7aa2785b3cc-3e248.jpg 3x"}}]}}}}},pathContext:{slug:"/confluency/"}}}});
//# sourceMappingURL=path---confluency-cbae463319db15f8b269.js.map