export default class Collapse {
    constructor(element) {
        this.breakPoint = 400
        this.element = element

        this.init()
    }

    init() {
        this.bindCollapseOnClick()
    }

    bindCollapseOnClick() {
        $(this.element).on('click', () => {
            if ($(window).width() < this.breakPoint) {
                const collapse = $(this.element).find('.collapse__content')
                $(this.element).hasClass('open') ? collapse.slideUp() : collapse.slideDown()
                $(this.element).toggleClass('open')
            }
        })
    }
}
