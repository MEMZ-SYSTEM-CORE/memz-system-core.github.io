var posts=["2025/07/20/q/","2025/07/20/n/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };