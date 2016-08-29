import React from 'react';

const Layout = ({ title, children }) =>
  <html lang="en">
  <head>
   <title>title</title>
   <link rel="apple-touch-icon"
         sizes="180x180"
         href="/apple-touch-icon.png" />
   <link rel="icon"
         type="image/png"
         href="/favicon-32x32.png"
         sizes="32x32" />
   <link rel="icon"
         type="image/png"
         href="/favicon-16x16.png"
         sizes="16x16" />
   <link rel="manifest" href="/manifest.json" />
   <link rel="mask-icon"
         href="/safari-pinned-tab.svg"
         color="#949ea1" />
   <meta name="theme-color" content="#ffffff" />
   <meta charSet="UTF-8" />
   <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
   <meta name="description" content="Dedicada a Maria Sofia Riojas (Chofita). Para que sepa que su padre siempre la amó y amará." />
   <meta name="author" content="Roy Riojas" />
   <meta property="og:url" content="http://www.mariasofiariojas.com/" />
   <meta property="og:site_name" content="Maria Sofia Riojas" />
   <meta property="og:type" content="website" />
   <meta property="og:title" content="Maria Sofia Riojas" />
   <meta property="og:image" content="http://www.mariasofiariojas.com/img/chofita.jpg" />
   <meta property="og:description" content="Dedicada a Maria Sofia Riojas (Chofita). Para que sepa que su padre siempre la amó y amará." />
   <meta name="HandheldFriendly" content="True" />
   <meta name="MobileOptimized" content="320" />
   <meta name="apple-mobile-web-app-capable" content="yes" />
   <meta name="apple-mobile-web-app-status-bar-style" content="black" />
   <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1" />
   <link href="//fonts.googleapis.com/css?family=Handlee|Gentium+Book+Basic" rel="stylesheet" />
   <link href="css/normalize.css" rel="stylesheet" />
   <link href="css/base.css" rel="stylesheet" />
  </head>
  <body>
   { children }
  </body>
  <script dangerouslySetInnerHTML={ { __html:
    `(function(i,s,o,g,r,a,m){
    i['GoogleAnalyticsObject']=r;
    i[r]= i[r] || function(){
    (i[r].q=i[r].q||[]).push(arguments)
    },
    i[r].l = 1 * new Date();
    a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];
    a.async=1;
    a.src=g;
    m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-39514337-1', 'mariasofiariojas.com');
    ga('send', 'pageview');
    ` } } />
  </html>;

export default Layout;
