$ = window.jQuery

$ ->
  smallBreakPoint = 365
  windowWidth = $(window).width()
  windowHeight = $(window).height();

  doneResizing = ->
    if $(window).width() != windowWidth and $(window).height() != windowHeight
      if $(window).width() > smallBreakPoint
        $("[data-collapse]").find('.collapse__content').css('display', 'block')
      else
        $("[data-collapse]").find('.collapse__label').removeClass('open')
        $("[data-collapse]").find('.collapse__content').css('display', 'none')

  $(window). on 'resize', ->
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 500);

  $("[data-collapse]").find('.collapse__label').on 'click', (event) ->
    if $(window).width() < smallBreakPoint
      content = $(event.target).closest('[data-collapse]').find('.collapse__content')
      label = $(event.target).closest('[data-collapse]').find('.collapse__label')
      if content.hasClass('open')
        content.removeClass('open')
        label.removeClass('open')
        content.stop(true, false).slideUp(500)
      else
        content.addClass('open')
        label.addClass('open')
        content.stop(true, false).slideDown(500)
    else
      false
