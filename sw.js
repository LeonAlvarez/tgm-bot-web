"use strict";var precacheConfig=[["/tgm-bot-web/0.chunk.b582c.js","920a436febe1e5cd38b8fbd233014b67"],["/tgm-bot-web/1.chunk.c1d09.js","9562e39b5213fb2618bc7d3ff0ead4a7"],["/tgm-bot-web/2.chunk.f39e5.js","538253ee5031df4fb0440aa4eab5023e"],["/tgm-bot-web/assets/icon.png","cf3fdf7af60a294d6d3f48cb7ad82488"],["/tgm-bot-web/assets/img/ellipsis-v-solid.svg","c8c287dbaa25dbe7bd68c5cc2dd65d98"],["/tgm-bot-web/assets/img/pilarica.jpg","62a5cd8fb7e6c230300c5d9e0fc6b0c8"],["/tgm-bot-web/assets/img/telegram-plane-brands.svg","bdc0fc45ab7bc8f910b9714e7b8f8bc0"],["/tgm-bot-web/assets/img/user.jpg","15a587738ac6d38c39b9d51530b4d1ae"],["/tgm-bot-web/assets/json/comandos.json","9d38266d204ecf05cb06d8ab8c6a5bb1"],["/tgm-bot-web/assets/json/comandos/buenastardes.json","52763c332e36f537c63c14b87a874c08"],["/tgm-bot-web/assets/json/comandos/buenosdias.json","2c24a4d9d96c1fea2fe11c433d2b6e08"],["/tgm-bot-web/assets/json/comandos/hola.json","2d488d6d2a2793f1c9f8d1d6560175dd"],["/tgm-bot-web/assets/json/user/1.json","be269a7b0c0d0257663a41a4d49ba5ca"],["/tgm-bot-web/assets/json/user/2.json","892b66de92b7411aec11e4dac52962d4"],["/tgm-bot-web/assets/styles/tailwind.css","239fa27618234a675fb5f242cfe0f7ad"],["/tgm-bot-web/bundle.7e088.js","e84cf83a3f8d4c285f4abe0715f88954"],["/tgm-bot-web/favicon.ico","94eae66bebbd6bbfe48a669f245048ac"],["/tgm-bot-web/img/ellipsis-v-solid.svg","c8c287dbaa25dbe7bd68c5cc2dd65d98"],["/tgm-bot-web/img/pilarica.jpg","62a5cd8fb7e6c230300c5d9e0fc6b0c8"],["/tgm-bot-web/img/telegram-plane-brands.svg","bdc0fc45ab7bc8f910b9714e7b8f8bc0"],["/tgm-bot-web/img/user.jpg","15a587738ac6d38c39b9d51530b4d1ae"],["/tgm-bot-web/index.html","f79b5506c6c6f3e6b0acb24276630d67"],["/tgm-bot-web/json/comandos.json","9d38266d204ecf05cb06d8ab8c6a5bb1"],["/tgm-bot-web/json/comandos/buenastardes.json","52763c332e36f537c63c14b87a874c08"],["/tgm-bot-web/json/comandos/buenosdias.json","2c24a4d9d96c1fea2fe11c433d2b6e08"],["/tgm-bot-web/json/comandos/hola.json","2d488d6d2a2793f1c9f8d1d6560175dd"],["/tgm-bot-web/json/user/1.json","be269a7b0c0d0257663a41a4d49ba5ca"],["/tgm-bot-web/json/user/2.json","892b66de92b7411aec11e4dac52962d4"],["/tgm-bot-web/manifest.json","310a916537fc6f66deb88310b13a2759"],["/tgm-bot-web/style.53fbb.css","f59daafb7d0a60176c19b183719b367c"],["/tgm-bot-web/styles/tailwind.css","239fa27618234a675fb5f242cfe0f7ad"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var s=new URL(e);return a&&s.pathname.match(a)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),s=createCacheKey(a,hashParamName,n,!1);return[a.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});