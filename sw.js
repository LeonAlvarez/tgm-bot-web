"use strict";var precacheConfig=[["/0.chunk.b582c.js","920a436febe1e5cd38b8fbd233014b67"],["/1.chunk.c1d09.js","9562e39b5213fb2618bc7d3ff0ead4a7"],["/2.chunk.f39e5.js","538253ee5031df4fb0440aa4eab5023e"],["/assets/icon.png","cf3fdf7af60a294d6d3f48cb7ad82488"],["/assets/img/ellipsis-v-solid.svg","c8c287dbaa25dbe7bd68c5cc2dd65d98"],["/assets/img/pilarica.jpg","62a5cd8fb7e6c230300c5d9e0fc6b0c8"],["/assets/img/telegram-plane-brands.svg","bdc0fc45ab7bc8f910b9714e7b8f8bc0"],["/assets/img/user.jpg","15a587738ac6d38c39b9d51530b4d1ae"],["/assets/json/comandos.json","9d38266d204ecf05cb06d8ab8c6a5bb1"],["/assets/json/comandos/buenastardes.json","52763c332e36f537c63c14b87a874c08"],["/assets/json/comandos/buenosdias.json","2c24a4d9d96c1fea2fe11c433d2b6e08"],["/assets/json/comandos/hola.json","2d488d6d2a2793f1c9f8d1d6560175dd"],["/assets/json/user/1.json","be269a7b0c0d0257663a41a4d49ba5ca"],["/assets/json/user/2.json","892b66de92b7411aec11e4dac52962d4"],["/assets/styles/tailwind.css","a742925010bac3979c35e58db4008fd4"],["/bundle.2a464.js","cf921ceb15d6b692b7461566098df89b"],["/favicon.ico","94eae66bebbd6bbfe48a669f245048ac"],["/img/ellipsis-v-solid.svg","c8c287dbaa25dbe7bd68c5cc2dd65d98"],["/img/pilarica.jpg","62a5cd8fb7e6c230300c5d9e0fc6b0c8"],["/img/telegram-plane-brands.svg","bdc0fc45ab7bc8f910b9714e7b8f8bc0"],["/img/user.jpg","15a587738ac6d38c39b9d51530b4d1ae"],["/index.html","6f369fd20593c09fb2ee75254dac0a3e"],["/json/comandos.json","9d38266d204ecf05cb06d8ab8c6a5bb1"],["/json/comandos/buenastardes.json","52763c332e36f537c63c14b87a874c08"],["/json/comandos/buenosdias.json","2c24a4d9d96c1fea2fe11c433d2b6e08"],["/json/comandos/hola.json","2d488d6d2a2793f1c9f8d1d6560175dd"],["/json/user/1.json","be269a7b0c0d0257663a41a4d49ba5ca"],["/json/user/2.json","892b66de92b7411aec11e4dac52962d4"],["/manifest.json","310a916537fc6f66deb88310b13a2759"],["/style.1f9b8.css","0719f093959d1b2b908e5869b9946e3d"],["/styles/tailwind.css","a742925010bac3979c35e58db4008fd4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var s=new URL(e);return"/"===s.pathname.slice(-1)&&(s.pathname+=n),s.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,s,a){var t=new URL(e);return a&&t.pathname.match(a)||(t.search+=(t.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(s)),t.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var s=new URL(n).pathname;return e.some(function(e){return s.match(e)})},stripIgnoredUrlParameters=function(e,n){var s=new URL(e);return s.hash="",s.search=s.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),s.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],s=e[1],a=new URL(n,self.location),t=createCacheKey(a,hashParamName,s,!1);return[a.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(s){if(!n.has(s)){var a=new Request(s,{credentials:"same-origin"});return fetch(a).then(function(n){if(!n.ok)throw new Error("Request for "+s+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(s,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(s){return Promise.all(s.map(function(s){if(!n.has(s.url))return e.delete(s)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,s=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(s))||(s=addDirectoryIndex(s,"index.html"),n=urlsToCacheKeys.has(s));!n&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(s=new URL("index.html",self.location).toString(),n=urlsToCacheKeys.has(s)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(s)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});