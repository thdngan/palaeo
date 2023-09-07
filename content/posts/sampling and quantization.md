---
title: "Sampling and Quantization in Image Processing"
date: 2022-04-15
tags:
- notebook
- image processing
---
*Images mentioned in this post are from Digital Image Processing (3rd edition), by Rafael C. Gonzalez, Richard E. Woods. I don't have the permission to use them here.*

Images that we are familiar with represent a very small portion of the spectrum of images that can be acquired at various wavelengths and modalities _(Figure 2.10)_. In this post, I'll talk about the two most common image formats: grayscale and RGB.

There are two discretization processes in image processing: sampling (spatial discretization) and quantization (amplitude discretization). _Figures 2.16 and 2.17._

-   Sampling: The sampling rate determines the spatial resolution of the image (related to coordinate values).

-   Quantization: The quantization level specifies the image's grayscale range (related to intensity values).

Basically, we begin with a continuous object and end up with a discrete object that has discretization in both the spatial domain and the gray value range. A good digital camera should have a dense enough sampling rate and a fine enough level of quantization to produce images that appear continuous but are actually discrete.

## Grayscale images

Each of the squares in _Figure 2.17 (b)_ represents a picture element, denoted by the term _pixel_. A 256x256 spatial domain image, for example, has 256 x 256 = 65,536 pixels, whereas a 1024x1280 image has 1,310,720 pixels. The value of each pixel in grayscale images is related to the amount of bits of data used to represent the pixel (typically 8 bits), ranging from 0 to 255 (2<sup>8</sup> = 256 grayscale levels created from combinations of 8 binary numbers: 00000000 to 11111111). If a pixel's value is represented by 16 bits, the value range is 0 to 65,535 (2<sup>16</sup> = 65,536 grayscale levels). We can have higher quality images, for instance, 512x512 images instead of 256x256 images with the same number of letters, so it will take more memory to save that image, but it will also have better quality.

In grayscale images, the value of each pixel only represents the intensity of light, which ranges from the darkest black to the brightest white. RGB images, which have colors, are another popular image format.

## RGB images

A colored image is made up of many colors, almost all of which can be generated from the three primary colors - red, green, and blue - and combined in various ways to display a wide range of colors. Each RGB image is made up of these three colors, as the name implies (or channels). This means that a colored image has more matrices (or channels).

To represent the intensity (shades of red, green, and blue) in a pixel, each of the small squares would have values ranging from 0 to 255. Then, all of these matrices (channels) are superimposed so that the final image has the value NxMx3, where N and M are the number of rows and columns, respectively, and 3 represents the number of channels. For example, if each matrix has 6 rows and 5 columns, the image value is 6x5x3.

Most high-end cameras capture full 2-dimensional rays for each color, whereas most low-end to mid-end consumer cameras do something slightly different called [[notes/mosaic|mosaic]]. The basic idea is to capture the pixels with color interleaving.

## Videos

So the next question is, what happens in a video? We have a number of these RGB images. For example, in some formats, we can have 30 x (RGB) for 1 second of video, with each RGB being a 2-dimensional structure. This translates to 30 x 3 = 90 images, with 30 images in 1 second and 3 because there are three color channels. If these images have a resolution of 512x512 and each pixel is represented by 8 bits, we can sometimes say that our resolution is 8 x 3 = 24 bits (3 times because of RGB). We'll see basically 2-dimensional discrete arrays as many seconds or frames as we have in our video using a program that knows how to deal with images. Each of these 30 images is referred to as a frame, and there are 30 frames in a second.

## The Importance and Effects of Resolution in Space and in Gray values

_How many pixels should we have? And what are the gray values we're going to use for them?_

When we have 8 bits, 0 represents black and 255 represents white. When discussing the interval between 0 and 1, 255 is sometimes referred to as 1. While we see the black-white-gray image with our eyes, the computer reads it as a string of 0s for the black region, 128 or 0.5 for the grayscale region, and 1 for the white part. _Figure 2.18._

Saturation is one of the potential issues. For instance, because we only have 256 different levels to work with, the image may be too bright and we may be unable to detect small variations in brightness. Remember that the human visual system can adapt to multiple levels of brightness, but not all of them simultaneously - the same is true for images. We can capture many levels (for example, 256), but dealing with a very dark and a very bright region at the same time would be difficult. _Figure 2.19._

So, we have a discrete number of values to represent our image, and some parts may go above and beyond what we can represent with that number.

Now let's look at the effects in the images below. We have only changed the spatial resolution and not the number of gray values yet: _Figure 2.20._

_Figure 2.20 (a)_ depicts a high-resolution image. This means that the spatial rate is extremely fine - a large number of pixels - and the image quality is excellent. If the image is much coarser _(Figure 2.20 (d))_, there are fewer pixels and less density between them. Apparently, the lines and small details in image (a) are very well represented, whereas in image (d), the small details, such as numbers, are difficult to see, making it hard to read the measurements. Assuming that each pixel is represented by 256 levels, images (a) and (d) have the same range of gray values, but due to the difference in resolution, the representation of fine details is obviously different. We will not be able to detect the smooth variation in gray values with coarse spatial discretization.

Next, let's move on to the effects of coarse discretization of gray values, with fixed number of pixels: _Figure 2.21._

All four of the images above have the same number of pixels: 452x374. The first image, on the other hand, is displayed in 8 bits (256 values). We only use 7 bits or 128 values for image (b) - basically, values 0 and 1 become 0, 2 and 3 become 2, 4 and 5 become 4,… The simplest method is to take each value in image (a), divide it by 2, round down to the nearest integer, and then multiply it by 2.

![[images/image processing/samquanti.png]]

There are only 64 values in image (c), which is equivalent to dividing by 4, truncating, and then multiplying by 4 - each 4 values is represented by 1 number. So, for example, 0, 1, 2, and 3 become 0; 4, 5, 6, and 7 all become 4, and so on. Finally, there are only 32 values in image (d). The quality appears to be deteriorating. Looking at the lines in the last image, we can see that there are false contours, whereas the transition in the first image is smooth. This is caused by the previously mentioned value jumps.

We can continue to even more extreme cases: _Figure 2.21._

In the final image (h), any value less than 128 becomes 0 - black, and any value greater than 128 becomes 255 - white, and the data is of poor quality.

## References
1.  Sapiro, G., _Image and Video Processing: From Mars to Hollywood with a Stop at the Hospital_, Coursera. https://www.coursera.org/learn/image-processing?
2.  University of Tartu, _2. Sampling and quantization_, accessed 15 April 2022, https://sisu.ut.ee/imageprocessing/book/2
3.  Liu, H. (2021). Chapter 3 - Rail transit collaborative robot systems. In H. Liu (Ed.), _Robot Systems for Rail Transit Applications_ (pp. 89-141). Elsevier.