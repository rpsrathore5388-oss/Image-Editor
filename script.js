let filters = {
    brightness: {
        value:100,
        min: 0,
        max: 200,
        unit: "%"
    },
    contrast: {
        value:100,
        min: 0,
        max: 200,
        unit: "%"
    },
    saturation: {
        value:100,
        min: 0,
        max: 200,
        unit: "%"
    },
    hueRotation: {
        value:0,
        min: 0,
        max: 360,
        unit: "deg"
    },
    blur: {
        value:0,
        min: 0,
        max: 20,
        unit: "px"
    },
    grayScale: {
        value:0,
        min: 0,
        max: 100,
        unit: "%"
    },
    sepia: {
        value:0,
        min: 0,
        max: 100,
        unit: "%"
    },
    opacity: {
        value:100,
        min: 0,
        max: 100,
        unit: "%"
    },
    invert: {
        value:0,
        min: 0,
        max: 100,
        unit: "%"
    }
}
const presets = {
    normal: {
        brightness: 100,
        contrast: 100,
        saturation: 100,
        hueRotation: 0,
        blur: 0,
        grayScale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    drama: {
        brightness: 90,
        contrast: 140,
        saturation: 110,
        hueRotation: 0,
        blur: 0,
        grayScale: 10,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    vintage: {
        brightness: 110,
        contrast: 90,
        saturation: 80,
        hueRotation: 10,
        blur: 0,
        grayScale: 20,
        sepia: 60,
        opacity: 100,
        invert: 0
    },

    oldSchool: {
        brightness: 95,
        contrast: 85,
        saturation: 70,
        hueRotation: 0,
        blur: 0,
        grayScale: 40,
        sepia: 80,
        opacity: 100,
        invert: 0
    },

    cinematic: {
        brightness: 95,
        contrast: 130,
        saturation: 85,
        hueRotation: 350,
        blur: 0,
        grayScale: 0,
        sepia: 10,
        opacity: 100,
        invert: 0
    },

    coolTone: {
        brightness: 100,
        contrast: 110,
        saturation: 90,
        hueRotation: 180,
        blur: 0,
        grayScale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    warmTone: {
        brightness: 105,
        contrast: 105,
        saturation: 110,
        hueRotation: 20,
        blur: 0,
        grayScale: 0,
        sepia: 20,
        opacity: 100,
        invert: 0
    },

    blackWhite: {
        brightness: 100,
        contrast: 120,
        saturation: 0,
        hueRotation: 0,
        blur: 0,
        grayScale: 100,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    faded: {
        brightness: 110,
        contrast: 80,
        saturation: 70,
        hueRotation: 0,
        blur: 0,
        grayScale: 10,
        sepia: 20,
        opacity: 90,
        invert: 0
    },

    neon: {
        brightness: 120,
        contrast: 150,
        saturation: 180,
        hueRotation: 300,
        blur: 0,
        grayScale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },
    sunset: {
        brightness: 110,
        contrast: 105,
        saturation: 130,
        hueRotation: 330,
        blur: 0,
        grayScale: 0,
        sepia: 25,
        opacity: 100,
        invert: 0
    },

    moody: {
        brightness: 80,
        contrast: 120,
        saturation: 70,
        hueRotation: 0,
        blur: 0,
        grayScale: 20,
        sepia: 10,
        opacity: 100,
        invert: 0
    },

    softGlow: {
        brightness: 115,
        contrast: 90,
        saturation: 105,
        hueRotation: 0,
        blur: 2,
        grayScale: 0,
        sepia: 10,
        opacity: 100,
        invert: 0
    },

    highExposure: {
        brightness: 140,
        contrast: 90,
        saturation: 110,
        hueRotation: 0,
        blur: 0,
        grayScale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    lowExposure: {
        brightness: 70,
        contrast: 110,
        saturation: 90,
        hueRotation: 0,
        blur: 0,
        grayScale: 10,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    tealOrange: {
        brightness: 100,
        contrast: 130,
        saturation: 120,
        hueRotation: 180,
        blur: 0,
        grayScale: 0,
        sepia: 10,
        opacity: 100,
        invert: 0
    },

    dusty: {
        brightness: 105,
        contrast: 85,
        saturation: 75,
        hueRotation: 10,
        blur: 0,
        grayScale: 15,
        sepia: 30,
        opacity: 95,
        invert: 0
    },

    coldFade: {
        brightness: 95,
        contrast: 90,
        saturation: 80,
        hueRotation: 200,
        blur: 0,
        grayScale: 10,
        sepia: 0,
        opacity: 90,
        invert: 0
    },

    infrared: {
        brightness: 120,
        contrast: 140,
        saturation: 200,
        hueRotation: 270,
        blur: 0,
        grayScale: 0,
        sepia: 0,
        opacity: 100,
        invert: 10
    },

    washedOut: {
        brightness: 120,
        contrast: 70,
        saturation: 60,
        hueRotation: 0,
        blur: 0,
        grayScale: 10,
        sepia: 15,
        opacity: 85,
        invert: 0
    },

    sharpPop: {
        brightness: 105,
        contrast: 150,
        saturation: 140,
        hueRotation: 0,
        blur: 0,
        grayScale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    dreamy: {
        brightness: 115,
        contrast: 85,
        saturation: 95,
        hueRotation: 20,
        blur: 3,
        grayScale: 0,
        sepia: 20,
        opacity: 95,
        invert: 0
    },

    noir: {
        brightness: 90,
        contrast: 140,
        saturation: 0,
        hueRotation: 0,
        blur: 0,
        grayScale: 100,
        sepia: 10,
        opacity: 100,
        invert: 0
    },

    glitch: {
        brightness: 110,
        contrast: 160,
        saturation: 150,
        hueRotation: 90,
        blur: 1,
        grayScale: 0,
        sepia: 0,
        opacity: 100,
        invert: 20
    }
};

const imageCanvas = document.querySelector("#image-canvas")
const imgInput = document.querySelector("#image_input")
const canvasCtx = imageCanvas.getContext("2d")
const resetButton = document.querySelector("#rest-btn")
const downloadButton = document.querySelector("#download-btn")
const presetsContainer = document.querySelector(".presets")

let file = null
let image = null



const filtersContainer = document.querySelector(".filters")

function createFilterElement(name, unit = "%", value, min, max){
    const div = document.createElement("div")
    div.classList.add("filter")

    const input = document.createElement ("input")
    input.type = "range"
    input.min = min 
    input.max = max
    input.value = value
    input.id = name

    const p = document.createElement("p")
    p.innerText = name

    div.appendChild(p)
    div.appendChild(input)

    input.addEventListener("input", (event) => {
        filters[name].value = input.value
        applyFilters()
    })

    return div
}

Object.keys(filters).forEach(key =>{
    
    const filterElement =  createFilterElement(key, filters[key].unit, filters[key].value, filters[key].min, filters[key].max)
    
    filtersContainer.appendChild(filterElement)
})

imgInput.addEventListener("change", (event) => {

    file = event.target.files[ 0 ]
    const imgPlaceholder = document.querySelector(".placeholder")
    imageCanvas.style.display = "block"
    imgPlaceholder.style.display = "none"
    
    const img = new Image()
    img.src = URL.createObjectURL(file)
    
    img.onload = () => {
        image = img
        imageCanvas.width = img.width
        imageCanvas.height = img.height
        canvasCtx.drawImage(img, 0, 0)
    }

})

function applyFilters(){
    canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height)
    canvasCtx.filter = `
    brightness(${filters.brightness.value}${filters.brightness.unit})
    contrast(${filters.contrast.value}${filters.contrast.unit})
    saturate(${filters.saturation.value}${filters.saturation.unit})
    hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
    blur(${filters.blur.value}${filters.blur.unit})
    grayScale(${filters.grayScale.value}${filters.grayScale.unit})
    sepia(${filters.sepia.value}${filters.sepia.unit})
    opacity(${filters.opacity.value}${filters.opacity.unit})
    invert(${filters.invert.value}${filters.invert.unit})
    `
    canvasCtx.drawImage(image, 0, 0)
}

resetButton.addEventListener("click", () => {
    filters = {
    brightness: {
        value:100,
        min: 0,
        max: 200,
        unit: "%"
    },
    contrast: {
        value:100,
        min: 0,
        max: 200,
        unit: "%"
    },
    saturation: {
        value:100,
        min: 0,
        max: 200,
        unit: "%"
    },
    hueRotation: {
        value:0,
        min: 0,
        max: 360,
        unit: "deg"
    },
    blur: {
        value:0,
        min: 0,
        max: 20,
        unit: "px"
    },
    grayScale: {
        value:0,
        min: 0,
        max: 100,
        unit: "%"
    },
    sepia: {
        value:0,
        min: 0,
        max: 100,
        unit: "%"
    },
    opacity: {
        value:100,
        min: 0,
        max: 100,
        unit: "%"
    },
    invert: {
        value:0,
        min: 0,
        max: 100,
        unit: "%"
    }
    }
    applyFilters()

    filtersContainer.innerHTML = ""
    
    Object.keys(filters).forEach(key =>{
    
    const filterElement =  createFilterElement(key, filters[key].unit, filters[key].value, filters[key].min, filters[key].max)
    
    filtersContainer.appendChild(filterElement)
})
})

downloadButton.addEventListener("click", () => {
    const link = document.createElement("a")
    link.download = "edited-image.png"
    link.href = imageCanvas.toDataURL()
    link.click()
})

Object.keys(presets).forEach(presetName => {
    const presetButton = document.createElement("button")
    presetButton.classList.add("btn")
    presetButton.classList.add("preset-btn")
    presetButton.innerText = presetName
    presetsContainer.appendChild(presetButton)

    presetButton.addEventListener("click", () => {
        const preset = presets[presetName]

        Object.keys(preset).forEach(fliterName => {
            filters[ fliterName ].value = preset[ fliterName ]
        })

        applyFilters()
        filtersContainer.innerHTML = ""
        Object.keys(filters).forEach(key =>{
    
            const filterElement =  createFilterElement(key, filters[key].unit, filters[key].value, filters[key].min, filters[key].max)
            
            filtersContainer.appendChild(filterElement)
        })
    })
})