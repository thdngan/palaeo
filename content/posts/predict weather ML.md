---
title: "[PROJECT] Predict the weather using Machine Learning"
date: 2022-08-20
draft: false
tags:
- project
- weather
---

**Github link: https://github.com/thdngan/weatherML** 

In this little project, I followed the instructions from the [Predict The Weather with Machine Learning](https://youtu.be/km95-NMT6lU) project from Dataquest.

I looked for the weather data from Hanoi, where I currently stay, to make it more relatable and see if I can make it useful. Several adjustments were made to accommodate the available data.

I ran into an error near the end of the project that said I "can not reindex on an axis with duplicate labels." So, basically, I was attempting to build another column to determine the monthly average temperature from the maximum temperature column, while grouping the rows by months. However, it turns out that there are duplicate values in this column.

I used df.index.is unique and df.index.duplicated() to identify and search for duplicated values, and eventually discovered that all of the data I first downloaded from NOAA were already non-unique LOL.

So I think I'll have to deal with these values by removing them (though they make up the majority of the data, lol) or find data from other sources.

I'm currently still trying to resolve this and also continue adding my own analysis and interpretations for optimization.