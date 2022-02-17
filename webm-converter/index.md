# WebM for Lazys


A wrapper around ffmpeg and AviSynth made for converting videos to WebM without having to use the command line and Gfycat integration.<!--more-->

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/ab09accc7a9c478badac99fed7ca52cf)](https://www.codacy.com/gh/argorar/WebMConverter/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=argorar/WebMConverter&amp;utm_campaign=Badge_Grade)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/github/downloads/argorar/WebMConverter/total.svg)]()
[![CodeLines](https://tokei.rs/b1/github/argorar/WebMConverter)]()

- **Download it [here][LatestDownload].**

_Important to know:_
* Requires .NET Framework 4.5 (Windows 7 comes with 3.5, so you might want to [update][DotNet45])
* Requires Microsoft Visual C++ 2010 (x86) [Download here][MVC]
* Requires [AviSynth][AviSynth] (2.6.0, 32-bit)
* Already includes ffmpeg
* Only works on Windows

## About WebM

WebM is an open, royalty-free, media file format designed for the web.
WebM defines the file container structure, video and audio formats. WebM files consist of video streams compressed with the VP8 or VP9 video codecs and audio streams compressed with the Vorbis or Opus audio codecs. The WebM file structure is based on the Matroska container.

For more information about WebM, see the [FAQ][FAQ].

## Benefits of WebM

* _Openness and innovation_. A key factor in the web's success is that its core technologies such as HTML, HTTP, and TCP/IP are open for anyone to implement and improve.  With video being core to the web experience, a high-quality, open video format choice is needed. WebM is 100% free, and open-sourced under a BSD-style license.

* _Optimized for the web_. Serving video on the web is different from traditional broadcast and offline mediums. Existing video formats were designed to serve the needs of these mediums and do it very well. WebM is focused on addressing the unique needs of serving video on the web.

    * Low computational footprint to enable playback on any device, including low-power netbooks, handhelds, tablets, etc

    * Simple container format

    * Highest quality real-time video delivery

    * Click and encode. Minimal codec profiles and sub-options. When possible, let the encoder make the tough choices.

# WebM for Lazys features

## Updates

Get the last update with just one click.

![update](https://argorar.github.io/WebMConverter/img/update.JPG)

## What can i do?

You can get and edit your video easly with the next options.

### Download

Paste the url of the video you want and press enter, the download will start. You will get the best quality.
* Support for [+1000 sites][Sites]
* You can choose the default path for all your new videos
* Load the new video in the app with just one click

![download](https://argorar.github.io/WebMConverter/img/download.JPG)

### Trim

Trim precisely the length, with a simple interface. You can do multiple trims if you need.

![trim](https://argorar.github.io/WebMConverter/img/trim.JPG)

### Crop

Crop what is just important for you, you can see in real time the new resolution also you can set the exact size that you want. Just move the edges with the mouse or use the keys to select the area.
* ```Row keys``` to move
* ```Shift + Row keys``` to move faster
* ```Alt + Row Keys``` to increase/decrease the size 
* ```Ctrl + Right or Left``` to change preview
* You can use mouse wheel over time line

![crop](https://argorar.github.io/WebMConverter/img/crop.JPG)

### Dynamic Crop

Follow an object on the canvas easly. Steps for a correct workflow:
    
1. Use trim to define the clip lenght

2. Open Crop filter and define the crop size, use ```New resolution``` as guide. **Even numbers are required**. You can use ```Set dimensions``` for exact values
    ![new resolution](https://argorar.github.io/WebMConverter/img/newResolution.png)
    ![set dimensions](https://argorar.github.io/WebMConverter/img/setDimensions.png)
3. Select click ```Dynamic Crop```. When it is actived will be green which means that each movement will be registered
    ![dynamicCrop](https://argorar.github.io/WebMConverter/img/dynamicCrop.png)
4. Set stabilitation level on ```Advanced>Processing``` to get a smooth effect

#### Tutorial

For this example the edition requires 30 seconds. 
<video style="width:100%" controls src="https://giant.gfycat.com/AridComplexKawala.mp4" type="video/mp4" autoplay loop></video>

[External link](https://gfycat.com/AridComplexKawala)

#### Final result

Right side was processed  with dynamic crop.
<video style="width:100%" controls src="https://giant.gfycat.com/WeeklyEmptyDalmatian.mp4" type="video/mp4" autoplay loop></video>

[External link](https://gfycat.com/WeeklyEmptyDalmatian)

### Filter

If your video looks dark, you can try with some pre-set filters. Now you can create your own filter using *Advanced* option, change gamma, contrast and saturation.

![filter](https://argorar.github.io/WebMConverter/img/light.JPG)

### Caption

Add text, change font, size, position, also set when it start and end.

![caption](https://argorar.github.io/WebMConverter/img/caption.JPG)

### Rotate
Rotate your video to any direction with just one click.

![rotate](https://argorar.github.io/WebMConverter/img/rotate.JPG)

### Loop

Loop function, forward and reverse making an infinite effect. You _can't_ use filter or interpolation with it.
<video style="width:100%" controls src="https://giant.gfycat.com/AnimatedUnimportantAlligatorsnappingturtle.mp4" type="video/mp4" autoplay loop></video>

[External link](https://gfycat.com/AnimatedUnimportantAlligatorsnappingturtle)

### Stabilization

Use different levels of stabilization for your clip. Left side original, right side processed. Find it in Advanced>Processing.

<video style="width:100%" controls src="https://giant.gfycat.com/DentalAnchoredHedgehog.mp4" type="video/mp4" autoplay loop></video>

[External link](https://gfycat.com/DentalAnchoredHedgehog)

### Merge
Drag and drop video files inside the application, search for the new video in source path. *The group of videos must have the same encodes / dimensions*.

### There is More that you can do

* Export frames
* Add subtitle
* Resize 
* Reverse
* Overlay your logo
* Change the speed
* Fade
* Disable audio
* Delay audio
* Get specific filesize in final result
* Get high quality video in webm and mp4 format
* Interpolate, more frames to your video
* Deinterlace

### Upload to Gfycat

Upload your new masterpiece with just one click. *A Gfycat account is required.*
See user details in tab *General*. If you are creating several gfys of the same topic, tags can be usefull for you.

### Shortcut keys

* Trim: ```Alt + t```
* MultiTrim: ```Alt + Shift + t```
* Crop: ```Alt + c```
* Change Rate: ```Alt + Shift + c```

## License
This software is released under the MIT license. See LICENSE.md .

If you have any issues with this program, you may report them on [here][NewIssue].


[Repository](https://github.com/argorar/WebMConverter)

 [LatestDownload]: https://github.com/argorar/WebMConverter/releases/latest
 [DotNet45]: https://www.microsoft.com/en-us/download/details.aspx?id=30653
 [AviSynth]: http://avisynth.nl/index.php/Main_Page#Official_builds
 [NewIssue]: https://github.com/argorar/WebMConverter/issues

