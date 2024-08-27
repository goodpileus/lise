var random = document.querySelector('.random');
for (var i = random.children.length; i >= 0; i--) {
  random.appendChild(random.children[Math.random() * i | 0]);
}

$('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'masonryHorizontal',
  originTop: false,
  masonryHorizontal: {
    // columnWidth: 100,
    rowHeight: 50,
    gutter: 10
  }
});

$(".grid-item").each(function () {
  var randomtop = Math.floor(Math.random() * (- 30)),
      randomleft = Math.floor(Math.random() * (- 30));
  
  $(this).css({
    "top": randomtop,
    "left": randomleft 
  });
});

$(".irreg-btn").click(function(){
	$('.grid-item').toggleClass('irregular');
});