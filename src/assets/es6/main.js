import Collapse from './Modules/Collapse/Collapse.js'
import bindOnResize from './Modules/Window/Resize.js'

$.each($('[data-collapse]'), (key, value) => {
    new Collapse(value)
})

bindOnResize()

