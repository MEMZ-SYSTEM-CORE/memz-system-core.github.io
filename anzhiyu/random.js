var posts=["2025/07/20/n/","2025/07/20/q/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };