$ = window.jQuery

$ ->
  $('[data-collapse]').click ->
    content = $(@).find('.collapse__content')
    label = $(@).find('.collapse__label')
    unless content.hasClass('open')
      content.stop(true, false).slideDown('500').addClass('open')
      label.addClass('open')
    else
      content.stop(true, false).slideUp('500').removeClass('open')
      label.removeClass('open')
