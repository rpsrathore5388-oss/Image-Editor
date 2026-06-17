# 🎨 Image Editor Web App

A modern browser-based image editor built using **HTML, CSS, and JavaScript**. This application allows users to upload images, apply real-time visual effects, use professionally designed filter presets, and download edited images directly from the browser.

## 🚀 Overview

This project is a lightweight image editing tool that leverages the power of the **HTML5 Canvas API** and **CSS Filter Effects** to perform image manipulation entirely on the client side.

Users can:

* Upload any image from their device
* Adjust image properties using sliders
* Apply predefined cinematic and artistic presets
* Preview changes instantly
* Reset all modifications
* Download the final edited image

Since all processing occurs within the browser, no server or external image processing service is required.

---

## ✨ Features

### 📂 Image Upload

Users can upload image files directly from their device.

Supported functionality:

* Instant image preview
* Canvas-based rendering
* Dynamic image sizing
* Browser-side image processing

---

### 🎛️ Real-Time Filters

The editor provides multiple adjustable filters that can be controlled through interactive sliders.

#### Brightness

Controls the overall lightness of the image.

Range:

* 0% – 200%

---

#### Contrast

Adjusts the difference between light and dark areas.

Range:

* 0% – 200%

---

#### Saturation

Controls color intensity.

Range:

* 0% – 200%

---

#### Hue Rotation

Shifts image colors around the color wheel.

Range:

* 0° – 360°

---

#### Blur

Adds Gaussian blur effect.

Range:

* 0px – 20px

---

#### Grayscale

Converts image colors to shades of gray.

Range:

* 0% – 100%

---

#### Sepia

Applies a vintage brown-toned effect.

Range:

* 0% – 100%

---

#### Opacity

Controls image transparency.

Range:

* 0% – 100%

---

#### Invert

Inverts image colors.

Range:

* 0% – 100%

---

## 🎨 Preset Filters

The application includes multiple ready-made filter combinations for quick editing.

### Available Presets

| Preset        | Description                    |
| ------------- | ------------------------------ |
| Normal        | Original image settings        |
| Drama         | High contrast dramatic look    |
| Vintage       | Warm retro appearance          |
| Old School    | Classic aged photo effect      |
| Cinematic     | Movie-inspired color grading   |
| Cool Tone     | Blue-toned aesthetic           |
| Warm Tone     | Golden warm colors             |
| Black & White | Monochrome conversion          |
| Faded         | Soft washed-out appearance     |
| Neon          | Vibrant high-energy colors     |
| Sunset        | Warm sunset-inspired tones     |
| Moody         | Dark atmospheric effect        |
| Soft Glow     | Gentle dreamy appearance       |
| High Exposure | Brightened image effect        |
| Low Exposure  | Dark cinematic look            |
| Teal Orange   | Popular cinematic color grade  |
| Dusty         | Muted vintage tones            |
| Cold Fade     | Cool faded atmosphere          |
| Infrared      | Experimental color shift       |
| Washed Out    | Low contrast faded style       |
| Sharp Pop     | Enhanced color and contrast    |
| Dreamy        | Soft artistic appearance       |
| Noir          | High contrast black and white  |
| Glitch        | Experimental futuristic effect |

Each preset automatically updates all filter values and re-renders the image instantly.

---

## ⚙️ How It Works

### Step 1: Upload Image

The user selects an image using the **Choose Image** button.

The selected image is:

1. Loaded into memory.
2. Rendered onto an HTML Canvas.
3. Displayed for editing.

---

### Step 2: Apply Filters

When a slider is adjusted:

1. The corresponding filter value updates.
2. Canvas filters are regenerated.
3. The image is redrawn using the new settings.
4. Changes appear instantly.

---

### Step 3: Apply Presets

When a preset button is clicked:

1. Predefined filter values are loaded.
2. Current filter settings are replaced.
3. The image is re-rendered.
4. Slider positions update automatically.

---

### Step 4: Reset

The reset functionality:

* Restores default values
* Recreates all filter sliders
* Removes applied effects
* Returns image to original appearance

---

### Step 5: Download

Users can export the edited image as:

```text
edited-image.png
```

The image is generated directly from the canvas using:

```javascript
canvas.toDataURL()
```

No quality is lost during download.

---

## 🏗️ Project Structure

```text
image-editor/
│
├── index.html
├── style.css
├── theme.css
├── script.js
│
└── README.md
```

### index.html

Responsible for:

* Layout structure
* Upload controls
* Canvas container
* Filter panel
* Preset section

---

### style.css

Responsible for:

* Responsive UI design
* Layout styling
* Button styling
* Filter controls
* Canvas display

---

### theme.css

Contains:

* Color variables
* Typography variables
* Spacing system
* Border radius system
* Theme configuration

---

### script.js

Core application logic:

* Image upload handling
* Canvas rendering
* Filter generation
* Preset management
* Reset functionality
* Download functionality

---

## 🧠 Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### APIs

* HTML5 Canvas API
* File API
* CSS Filter API

### Icons

* Remix Icons

---

## 📱 Responsive Design

The application features:

* Flexible layout
* Modern dark theme
* Adaptive filter panel
* Responsive controls
* Clean user interface

---

## 🎯 Learning Objectives

This project demonstrates:

* DOM Manipulation
* Event Handling
* HTML Canvas Operations
* Dynamic UI Generation
* CSS Variables
* Image Processing Techniques
* JavaScript Objects and Arrays
* Browser File Handling
* Real-Time Rendering

---

## 🔮 Future Enhancements

Possible improvements include:

* Crop Tool
* Rotate Tool
* Flip Horizontal/Vertical
* Undo & Redo
* Image Compression
* Drag & Drop Upload
* Multiple Image Support
* Custom Preset Saving
* AI-Powered Filters
* Mobile Optimization
* Dark/Light Theme Toggle
* Image History Tracking

---

## 📸 Preview Workflow

```text
Upload Image
      ↓
Choose Filter / Preset
      ↓
Preview Changes
      ↓
Reset (Optional)
      ↓
Download Edited Image
```

A complete browser-based image editing experience without requiring any server-side processing.
