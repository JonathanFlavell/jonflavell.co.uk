class Collapse {
    constructor(element) {
        this.breakPoint = 400
        this.element = element

        this.init()
    }

    init() {
        this.bindCollapseOnClick()
        this.bindOnResize()
    }

    bindOnResize() {
        $(window).on('resize', () => {
            clearTimeout(resizeId)
            resizeId = setTimeout(this.doneResizing(), 500)
        })
    }

    doneResizing() {
        if ($(window).width() < this.breakPoint) {
            console.log('done resizing')
        }
    }

    bindCollapseOnClick() {
        if ($(window).width() < this.breakPoint) {
            //do stuff
        }
    }
}

export default (() => {
    $.each($('[data-collapse]'), (key, value) => {
        new Collapse(value)
    })
})
