---
layout: page
title: "Journalism"
permalink: /journalism/
---
<h2>Journalism</h2>
I love STEM, but I love the humanities a lot too! Check out some of the stuff I've done for Lynbrook High School's newspaper, the Epic!
<a href="lhsepic.com">lhsepic.com</a>

<h3>Writing</h3>
<head>
    <meta charset="utf-8">
    <title>Show RSS Feed</title>
    <script src="http://www.google.com/jsapi"></script>
    <script type="text/javascript">
      google.load("feeds", "1")
    </script>
  </head>
  <script>
    
    function fetchRSSFeed() {
      var element = document.getElementById("rss_feed");
      var feed = new google.feeds.Feed(element.dataset.feed);     
      feed.setNumEntries(element.dataset.count);
      feed.load(showRSSFeed);
    }

    function showRSSFeed(result) {

      var html = "";

      if (!result.error) {
        var entries = result.feed.entries;
        for (var i = 0; i < entries.length; i++) {
          html += "<li><a href='" + entries[i].link + "'target='_blank'>" + entries[i].title + "</a></li>"
        }
      } else {
        html = "Error: " + result.error.message;
      }

      document.getElementById("rss_feed").innerHTML = "<ul>" + html + "</ul>";
    }

    window.onload = function() {
      fetchRSSFeed();
    }
  </script>

  <body>
    <div id="rss_feed" 
         data-feed="http://feeds.labnol.org/labnol" 
         data-count="12">Loading RSS Feed..</div>
  </body>
