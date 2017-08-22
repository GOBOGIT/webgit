window.onscroll = () => {
  if(this.scrollY <= 120) $("#navbar").removeClass("scroll"); else $("#navbar").addClass("scroll");
  if(this.scrollY >= 120) $(".nav-item").removeClass("anav"); else $(".nav-item").addClass("anav");
};