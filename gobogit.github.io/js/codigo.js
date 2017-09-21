window.onscroll = () => {
  if(this.scrollY <= 120) $("#navbar").removeClass("scroll"); else $("#navbar").addClass("scroll");
  if(this.scrollY >= 120) $(".nav-item").removeClass("anav"); else $(".nav-item").addClass("anav");
};

$('#myModal').on('show.bs.modal', function (event) {
  var click = $(event.relatedTarget) // click that triggered the modal
  var titulo = click.data('titu') // Extract info from data-* attributes
  var srca = click.data('srct') // Extract info from data-* attributes

  $('.modal-title').text(titulo)
  $('.imgFull').attr('src', srca);
})