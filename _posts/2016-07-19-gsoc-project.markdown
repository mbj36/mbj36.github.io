---
layout:     post
title:      "My GSoC Project"
subtitle: "Browser-based Offline Access" 
date:       2016-07-19 12:00:00
author:     "Mohit"
header-img: "img/GSoC.png"
---

Hello Everyone,

I am writing this Post to make you aware about my GSoC project <b>'Browser-Based Offline Access'</b> 

<h2>Project Information</h2>
<p>
<ul>Project name - Browser-Based Offline Access<br>
Project Mentor - Gaurav Saini<br>
Organisation - Mifos Initiative
</ul>
<p>My organisation <a href="https://mifos.org">Mifos</a> has a web app(Community app) that works only online, So Community has a valuable request to make it work offline also. Idea is to make the app work offline also so that it works on flaky connections also.</p>

<h2>Tech stack</h2>
<ul>
<li><i>Progressive Web apps</i> - <a href="https://github.com/TalAter/awesome-progressive-web-apps">Github</a></li>
<li><i>Service-workers</i> - To know more about it. We have a awesome list of service worker on <a href="https://github.com/mbj36/awesome-service-workers"><b>Github</b></a> </li>
<li><a href="https://github.com/GoogleChrome/sw-toolbox"><i>Sw-Toolbox</i></a> - Service worker Library to cache the static files and api requests</li>
<li>Light house - for auditing and performance of progressive web apps.</li>
<li><i>Indexed DB</i> - For Client-side storage</li>
</ul>

<h2>Current progress</h2>
<p>
<h4>First Week</h4>
Before the coding period, my mentor suggested me to have a proof of concept(POC) of what we are trying to do in our gsoc project. As a POC i made my personal space <a href="https://mohitbajoria.com" target="_blank">mohitbajoria.com</a> offline, so we decided to go with the service-workers and its libraries to go offline for our main app. <br>
POC link can be found here on Github - <a href="https://github.com/mbj36/My-Blog/tree/gh-pages">https://github.com/mbj36/My-Blog/tree/gh-pages</a> </p>


<p>
<h4>2nd-4th week</h4>
I made a seperate branch 'offline' in my forked repository on Github to continue all the work related to my project. First step was to register a service worker for community app which was registered succesfully after some blockers. Then i decided to cache all the static files which took almost 2 week to include every files of the community app in the cache options. </p>

<p>
<h4>Fifth week</h4>
Mid term evaluations was going on and I passed it succesfully.This week i also made some changes to code base after testing the cached static files.
</p>

<p>
<h4>6th-7th week</h4>
Till now all static files were cached and tested. It was one of the milestone for the project. Then next milestone was to cache all the api requests which community app makes. Community app uses fineract-api. Here Comes the main use of service worker library 'sw-toolbox' which made very easy caching all the api requests. I spent two weeks on caching all the GET, POST, PUT, DELETE requests which comes from fineract. 
</p>

<p>
<h4>Eight week</h4>
I started testing the community app and made some changes to code after testing. Now our community app has the offline features. All GET requests gets cached when u traversed through the community app. After traversing through the app, it's data get's cached and we can also access it offline. 
</p>

<h2>Commits</h2>
As i discussed above i made a seperate branch for offline project. So all the work regarding project can be found here
<a href="https://github.com/mbj36/community-app/commits/offline">https://github.com/mbj36/community-app/commits/offline</a>

<h2>Work to be done</h2>
Now in coming weeks i have to work on client side storage. Like community app should also have features like updating, creating new clients, groups etc. For this i will be using IndexedDB for client side storage. If a user wants to update the data or make post requests offline, then it should get stored in local database and gets fired when online.

<br>
<br>
<h5>If you have any doubt regarding the project or tech stack, feel free to shoot me a email at <a href="mailto:mohitbajo36@gmail.com">mohitbajo36@gmail.com</a> </h5>


<br>
<br>

Thanks :)
