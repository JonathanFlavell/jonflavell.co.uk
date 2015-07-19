$ = window.jQuery

class Collapse
  constructor: (element) ->
    @collapseBreakPoint = 400
    @element = $(element)
    @init()

  init: ->
    @setCollapseOnClick()
    @setOnResize()

  setOnResize: ->
    $(window).on 'resize', =>
      clearTimeout(resizeId)
      resizeId = setTimeout(@doneResizing, 500)

  doneResizing: =>
      if $(window).width() > @collapseBreakPoint
        @element.find('.collapse__label').off 'click'
      else
        @setCollapseOnClick()

  setCollapseOnClick: ->
    if $(window).width() < @collapseBreakPoint
      @element.find('.collapse__label').on 'click', (event) =>
        content = $(event.target).closest('[data-collapse]').find('.collapse__content')
        unless content.hasClass('open')
          content.addClass('open').stop(true, false).slideDown(500)
        else
          content.removeClass('open').stop(true, false).slideUp(500)

$.fn.collapse = ->
  new Collapse @

$.fn.collapse.Constructor = Collapse

$ -> $('[data-collapse]').collapse()
