$(document).ready(function() {
  document.addEventListener('ended', function(e){
    if($(e.target).is('video')){
      console.log('testing..')
      //$('button[data-e2e="arrow-right"]').click();
      console.log({
        element: $('div[data-e2e="recommend-list-item-container"]'),
        this: $(this),
        video: $(e.target),
        parent: $(e.target).parentsUntil('[data-e2e="recommend-list-item-container"]').parent(),
        next: $(e.target)
        .parentsUntil('[data-e2e="recommend-list-item-container"]')
        .parent()
        .next(),

        actualNext: $(e.target)
        .parentsUntil('[data-e2e="recommend-list-item-container"]')
        .parent()
        .next()
        .first()
      })


      $('html, body').animate({
        scrollTop: $(e.target)
        .parentsUntil('[data-e2e="recommend-list-item-container"]')
        .parent()
        .next()
        .first()
        .offset()
        .top - 50
      })
    }
  }, true);
});
