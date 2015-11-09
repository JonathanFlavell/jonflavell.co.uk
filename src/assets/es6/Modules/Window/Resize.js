function doneResizing() {
    $.each($('[data-collapse]'), (key, value) => {
        if ($(window).width() > 400) {
            $(value).find('.collapse__content').slideDown()
        }
    })
}

function bindOnResize() {
    let resizeId
    $(window).on('resize', () => {
        clearTimeout(resizeId)
        resizeId = setTimeout(doneResizing(), 500)
    })
}
export default (() => {
    bindOnResize()
})
