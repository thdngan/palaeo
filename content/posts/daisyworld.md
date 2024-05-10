---
title: Daisy World
date: 2023-05-14
tags:
  - climate
  - notebooks
---
# Background

The Earth is a self-regulating system, and the Gaia hypothesis views the entire planet as a living entity. It maintains a dynamic equilibrium through the complex interactions between the atmosphere, oceans, land, and life. In this interconnected web of processes, life plays an integral role in shaping and maintaining the conditions necessary for its own survival.

Daisyworld is a conceptual model introduced by James Lovelock and Andrew Watson in 1983 as a simplified representation of a planetary ecosystem. It serves as an analogy to explore the potential role of life in regulating a planet's climate. The model uses the growth and albedo (reflectivity) properties of daisies to demonstrate the principle of biological feedback in maintaining planetary temperature.


In the Daisyworld model, the planet is initially barren and devoid of life. Two types of daisies are introduced: black daisies, which have a low albedo and absorb more solar radiation, and white daisies, which have a high albedo and reflect more solar radiation. The daisies' growth and survival depend on the temperature of their surroundings.

As the model progresses, the sun's intensity gradually increases, leading to a rise in planetary temperature. This warming stimulates the growth of black daisies since they absorb more heat and thrive in higher temperatures. As the black daisies spread across the planet, their low albedo causes the absorption of more solar radiation, which further amplifies the temperature increase.

However, as the temperature rises, the growth of white daisies, with their higher albedo, becomes more favorable. White daisies reflect a greater portion of incoming solar radiation, leading to a cooling effect. As the white daisies proliferate, they reduce the overall temperature of the planet.

This interplay between black and white daisies creates a feedback loop. The daisies' albedo affects the planetary temperature, and the temperature, in turn, influences the growth and distribution of the daisies. This feedback loop allows Daisyworld to self-regulate its temperature, demonstrating how the presence of life can influence and stabilize a planetary climate.

The Daisyworld model showcases the concept of a self-regulating biosphere, where the interactions between organisms and their environment contribute to maintaining a stable and habitable climate. It emphasizes the significance of biological feedback mechanisms in the context of Earth's climate system and highlights the potential role of life in regulating global temperatures. The simplicity of the model allows for easy exploration and understanding of these complex ecological concepts.

# Growth rate versus Temperature

Some parameters used in the code:
- S0: Solar constant (total solar irradiance received at the planet's distance from the Sun).
- eps: Emissivity of the planet's surface.
- sig: Stefan-Boltzmann constant.
- alb\_w: Albedo of white daisies.
- alb\_b: Albedo of black daisies.
- alb\_g: Albedo of the available ground (unoccupied land).
- q: A constant used to calculate the local temperature based on the albedo.
- k: A constant determining the growth rate of daisies based on the temperature difference from T0.
- T0: The optimal temperature at which daisies grow most effectively.
- d: Death rate of daisies.

I created an array T using NumPy's arange function. It starts from 0 and increments by 0.1 until reaching 46. This array represents the range of temperatures over which the growth rates of daisies will be calculated.

The for loop iterates over each temperature value in T and calculates the growth rate of black and white daisies using a quadratic function (1 - k * (T0 - Tt) ** 2). The max(0, ...) function ensures that the growth rate does not go below zero. The calculated growth rates are stored in the fb\_list and fw\_list lists.

```python
S0 = 1000
eps = 0.3
sig = 5.67*10**(-8)
alb_w = 0.75
alb_b = 0.25
alb_g = 0.5
q = 20
k = 0.003265
T0 = 22.5
d = 0.3

tolerance = 1.*10**(-6)
diff = 1.0
```

```python
b_list = []
w_list = []

x_list = []
alb_p_list = []
Te_list = []
Tb_list = []
Tw_list = []
fb_list = []
fw_list = []
db_list = []
dw_list = []

T = np.arange(0,46,0.1)
for Tt in T:
    fb = max(0,1 - k*(T0 - Tt)**2)
    fw = max(0,1 - k*(T0 - Tt)**2)
    
    fb_list.append(fb)
    fw_list.append(fw)
    
fig = plt.figure(figsize=(20,6))

ax = fig.add_subplot(1,2,1)
ax.plot(T, fb_list,'maroon',lw=3)
ax.set_title('Black daisy')
ax.set_xlabel('Temperature')
ax.set_ylabel('Growth rate')
ax.grid()

ax = fig.add_subplot(1,2,2)
ax.plot(T, fb_list,'goldenrod',lw=3)
ax.set_title('White daisy')
ax.set_xlabel('Temperature')
ax.grid()

plt.savefig('06_growthrate.png',dpi=300)
plt.show()
```

![[06_growthrate.png]]

Apparently, the growth rate plots of both types of daisies follow the same pattern.

# Equilibrium b and w values at S = S0 = 1000, with initial b = w = 0.2

Next, I calculated the equilibrium values for the variables b and w in the Daisyworld model when the solar constant S is equal to S0 = 1000, with initial values of b and w set to 0.2.

The while loop:
- diff and tolerance are variables used to determine when to stop the loop. The loop continues as long as the absolute value of the sum of dw and db is greater than tolerance.
- x = 1 - b - w: Calculates the proportion of unoccupied land (x) by subtracting the sum of b and w from 1.
- alb\_p = w * alb\_w + b * alb\_b + x * alb\_g: Calculates the planetary albedo (alb\_p) by multiplying the albedo of white daisies (alb\_w), black daisies (alb\_b), and the available ground (alb\_g) by their respective proportions and summing them up.
- Te = (((1 - alb\_p) * S0) / (4 * eps * sig)) ** (1. / 4) - 273.15: Computes the equilibrium temperature (Te) of the planet by using the Stefan-Boltzmann law. The result is then converted from Kelvin to Celsius by subtracting 273.15.
- Tb = Te + q * (alb\_p - alb\_b): Calculates the temperature of black daisies (Tb) by adding the equilibrium temperature (Te) to the product of q (a constant) and the difference between the planetary albedo (alb\_p) and the albedo of black daisies (alb\_b).
- Tw = Te + q * (alb\_p - alb\_w): Computes the temperature of white daisies (Tw) using the same formula as for Tb, but using the albedo of white daisies (alb\_w) instead.
- fb = max(0, 1 - k * (T0 - Tb) ** 2): Calculates the growth rate of black daisies (fb) using a quadratic function (1 - k * (T0 - Tb) ** 2). It ensures that the growth rate does not go below zero.
- fw = max(0, 1 - k * (T0 - Tw) ** 2): Computes the growth rate of white daisies (fw) using the same quadratic function as for fb, but using the temperature of white daisies (Tw) instead.
- db = b * (x * fb - d): Calculates the change in the black daisy population (db) by multiplying the proportion of black daisies (b) by the difference between the product of x and fb and the death rate (d).
- dw = w * (x * fw - d): Computes the change in the white daisy population (dw) using the same formula as for db, but with the proportion of white daisies (w) and the growth rate of white daisies (fw).
- b += db and w += dw: Updates the values of b and w by adding the respective changes calculated in the previous steps.
- diff = abs(dw + db): Calculates the absolute difference between dw and db and assigns it to diff. This difference is used to determine whether the loop should continue or stop.

```python
b = w = 0.2
while (diff>tolerance):
    x = 1 - b - w
    alb_p = w*alb_w + b*alb_b + x*alb_g
    Te = (((1-alb_p)*S0)/(4*eps*sig))**(1./4) - 273.15
    Tb = Te + q*(alb_p - alb_b)
    Tw = Te + q*(alb_p - alb_w)
    fb = max(0,1-k*(T0 - Tb)**2)
    fw = max(0,1-k*(T0 - Tw)**2)
    db = b*(x*fb - d)
    dw = w*(x*fw - d)
    b+=db
    w+=dw

    diff = abs(dw+db)

print('Equilibrium b and w is: ',b,w)
```

```
Equilibrium b and w is:  0.3828564993464297 0.2904829937848562
```

Based on these results, we can infer that in this specific Daisyworld model, the equilibrium state corresponds to a higher proportion of black daisies (b) compared to white daisies (w). 

# Daisyworld with varying S/S0

The code below is an extension of the previous Daisyworld model. It calculates the equilibrium values of various variables, such as the areas of black and white daisies (b\_list and w\_list), the uncovered area (x\_list), the planetary temperatures with and without daisies (Te\_list and Te\_no\_list), for different solar flux ratios (S/S0). 

I defined a function daisy(sflux) that calculates the equilibrium values for a given solar flux ratio (sflux). It contains the same logic as the previous code but with slight modifications. Next, I determined the range and step size for the solar flux ratio loop.

The first for loop calculates the equilibrium values for the solar flux ratios ranging from 1.0 to ratio\_min (0.39) in reverse order. It initializes b and w to 0.2 and calls the daisy() function with the current solar flux ratio (sr). The value of j is set to 1, indicating that the appended values will be in reverse order.

Similarly, the second for loop calculates the equilibrium values for the solar flux ratios ranging from 1.01 to ratio\_max (1.6) in regular order. It initializes b and w to 0.2 and calls the daisy() function with the current solar flux ratio (sr). The value of j is set to 0, indicating that the appended values will be in regular order.

```python
b_list = []
w_list = []

x_list = []
alb_p_list = []
Te_list = []
Tb_list = []
Tw_list = []
fb_list = []
fw_list = []
db_list = []
dw_list = []
Te_no_list = []

def daisy(sflux):
    global b,w,j, b_list, w_list, x_list, Tb_list, Tw_list, Te_list, Te_no_list
    
    diff = 1.0
    S = S0*sflux

    while (diff>tolerance):
        x = 1 - b - w
        alb_p = w*alb_w + b*alb_b + x*alb_g
        Te = ((1-alb_p)*S/(sig))**(1./4) - 273.15
        Tb = Te + q*(alb_p - alb_b)
        Tw = Te + q*(alb_p - alb_w)
        fb = max(0,1-k*(T0 - Tb)**2)
        fw = max(0,1-k*(T0 - Tw)**2)
        db = b*(x*fb - d)
        dw = w*(x*fw - d)
        b+=db
        w+=dw
        
        diff = abs(dw)+abs(db)
    Te_no = ((1-alb_g)*S/(sig))**(1./4) - 273.15

    if j == 0:
        b_list.append(b)
        w_list.append(w)
        x_list.append(x)
        Tb_list.append(Tb)
        Tw_list.append(Tw)
        Te_list.append(Te)
        Te_no_list.append(Te_no)
    else:
        b_list.insert(0,b)
        w_list.insert(0,w)
        x_list.insert(0,x)
        Tb_list.insert(0,Tb)
        Tw_list.insert(0,Tw)
        Te_list.insert(0,Te)
        Te_no_list.insert(0,Te_no)
        

ratio_max = 1.6
ratio_min = 0.39
ratio_step = 0.01

""" S/S0 ratio loop is cut into 2 loops (at S/S0 = 1.0):
From 0.4 to 1.0, the variables are updated backwards: from larger S/S0 value to smaller value
          For solar fluxes smaller than initial solar flux value, the model is a cooling process
From 1.01 to 1.6, the variables are updated forwards: from smaller S/S0 value to larger value
          For solar fluxes larger than initial solar flux value, the model is a warming process"""

b=w=0.2                                         # initialize b = w = 0.1
for sr in np.arange(1.,ratio_min,-ratio_step):  # for S/S0 from 1.0 -> 0.4:
    j=1                                         # diff = 1 at beginning of every for loop, while (x -> alb_p -> Te -> ... -> b and w -> diff changing); append backward
    daisy(sr)

b=w=0.2                                         # initialize b = w = 0.1
for sr in np.arange(1.01,ratio_max,ratio_step): # for S/S0 from 1.01 ->  1.6: 
    j=0                                         # diff = 1 at beginning of every for loop, while (x -> alb_p -> Te -> ... -> b and w -> diff changing); append
    daisy(sr)
   
sratios = np.arange(0.4,1.61,0.01)
fig = plt.figure(figsize=(20,6))

ax = fig.add_subplot(1,2,1)
ax.plot(sratios,b_list,color='maroon',lw=3,label='Black daisy area')
ax.plot(sratios,w_list,color='goldenrod',lw=3,label='White daisy area')
ax.plot(sratios,x_list,'k',lw=2,ls='--',label='Uncovered area')
ax.set_title('Equilibrium area of black/white daisy vs S/S0')
ax.set_xlabel('S/S0')
ax.set_ylabel('Area')
ax.set_xticks(np.arange(0.4,1.7,0.1))
ax.set_yticks(np.arange(0,1.1,0.1))
ax.legend()
ax.grid(True)

ax = fig.add_subplot(1,2,2)
ax.plot(sratios,Te_list,lw=3,color='goldenrod',label='Equil temperature (with daisy)')
ax.plot(sratios,Te_no_list,lw=2,color='k',ls='--',label='Equil temperature (without daisy)')
ax.set_title('Planetary temperature (with and without daisy) vs S/S0')
ax.set_xlabel('S/S0')
ax.set_ylabel('Temperature')
ax.set_xticks(np.arange(0.4,1.7,0.1))
ax.set_yticks(np.arange(-30,80,10))
ax.legend()
ax.grid(True)

plt.savefig('06_equi-area-temp_vs_Sratio.png',dpi=300)
```

![[06_equi-area-temp_vs_Sratio.png]]
The use of two for loops in the code is due to the specific design of the Daisyworld model and the way it handles different solar flux ratios.

The first for loop iterates over the solar flux ratios ranging from 1.0 down to ratio\_min (0.39) in reverse order. This loop represents the cooling phase of the model. By decreasing the solar flux ratio, the model simulates a cooling process where the solar energy reaching the planet is gradually reduced. The variables are updated backward, which means the equilibrium values are calculated in reverse order and appended to the respective lists in reverse order.

The second for loop iterates over the solar flux ratios ranging from 1.01 up to ratio\_max (1.6). This loop represents the warming phase of the model. By increasing the solar flux ratio, the model simulates a warming process where the solar energy reaching the planet is gradually increased. The variables are updated forward, which means the equilibrium values are calculated in regular order and appended to the respective lists in regular order.

As can be seen from the figures above, the Daisyworld model demonstrates a remarkable phenomenon in response to changes in solar radiation. As the amount of solar energy received by the planet fluctuates, the distribution of black and white daisies begins to change. Initially, one type of daisy may dominate the landscape due to its ability to absorb or reflect more sunlight. 

For instance, if the solar radiation increases, the temperature on Daisyworld would rise. Under these conditions, the black daisies, with their lower albedo, absorb more sunlight, resulting in increased growth rates. Consequently, the population of black daisies expands, while the population of white daisies diminishes. This shift leads to a reduction in the overall albedo of the planet, as black daisies replace the more reflective white daisies.

However, the model also contain a self-regulatory mechanism that maintains the planetary temperature close to an optimum level. The equilibrium temperature is achieved through a balance between the albedo of the daisies and the incoming solar radiation. This temperature regulation is a unique feature of Daisyworld and sets it apart from an abiotic world. In an abiotic scenario, where there are no daisies or other life forms, the temperature would follow a linear trend, increasing steadily with the increase in solar radiation.

# Daisyworld with only black daisies

The code below is a modified version of the Daisyworld model that considers only black daisies. 

```python
b_list = []
x_list = []
alb_p_list = []
Te_list = []
Tb_list = []
fb_list = []
db_list = []
Te_no_list = []

def daisy(sflux):
    global b,w,j, b_list, w_list, x_list, Tb_list, Tw_list, Te_list, Te_no_list
    
    diff = 1.0
    S = S0*sflux

    while (diff>tolerance):
        x = 1 - b
        alb_p = b*alb_b + x*alb_g
        Te = ((1-alb_p)*S/(sig))**(1./4) - 273.15
        Tb = Te + q*(alb_p - alb_b)
        fb = max(0,1-k*(T0 - Tb)**2)
        db = b*(x*fb - d)
        b+=db
        
        diff = abs(db)
    Te_no = ((1-alb_g)*S/(sig))**(1./4) - 273.15

    if j == 0:
        b_list.append(b)
        x_list.append(x)
        Tb_list.append(Tb)
        Te_list.append(Te)
        Te_no_list.append(Te_no)
    else:
        b_list.insert(0,b)
        x_list.insert(0,x)
        Tb_list.insert(0,Tb)
        Te_list.insert(0,Te)
        Te_no_list.insert(0,Te_no)
        

ratio_max = 1.6
ratio_min = 0.39
ratio_step = 0.01

""" S/S0 ratio loop is cut into 2 loops (at S/S0 = 1.0):
From 0.4 to 1.0, the variables are updated backwards: from larger S/S0 value to smaller value
          For solar fluxes smaller than initial solar flux value, the model is a cooling process
From 1.01 to 1.6, the variables are updated forwards: from smaller S/S0 value to larger value
          For solar fluxes larger than initial solar flux value, the model is a warming process"""

b=w=0.2                                         # initialize b = w = 0.1
for sr in np.arange(1.,ratio_min,-ratio_step):  # for S/S0 from 1.0 -> 0.4:
    j=1                                         # diff = 1 at beginning of every for loop, while (x -> alb_p -> Te -> ... -> b and w -> diff changing); append backward
    daisy(sr)

b=w=0.2                                         # initialize b = w = 0.1
for sr in np.arange(1.01,ratio_max,ratio_step): # for S/S0 from 1.01 ->  1.6: 
    j=0                                         # diff = 1 at beginning of every for loop, while (x -> alb_p -> Te -> ... -> b and w -> diff changing); append
    daisy(sr)
   
sratios = np.arange(0.4,1.61,0.01)
fig = plt.figure(figsize=(20,6))

ax = fig.add_subplot(1,2,1)
ax.plot(sratios,b_list,color='maroon',lw=3,label='Black daisy area')
ax.plot(sratios,x_list,'k',lw=2,ls='--',label='Uncovered area')
ax.set_title('Equilibrium area of black daisy vs S/S0')
ax.set_xlabel('S/S0')
ax.set_ylabel('Area')
ax.set_xticks(np.arange(0.4,1.7,0.1))
ax.set_yticks(np.arange(0,1.1,0.1))
ax.legend()
ax.grid(True)

ax = fig.add_subplot(1,2,2)
ax.plot(sratios,Te_list,lw=3,color='goldenrod',label='Equil temperature (with daisy)')
ax.plot(sratios,Te_no_list,lw=2,color='k',ls='--',label='Equil temperature (without daisy)')
ax.set_title('Planetary temperature (with and without black daisy) vs S/S0')
ax.set_xlabel('S/S0')
ax.set_ylabel('Temperature')
ax.set_xticks(np.arange(0.4,1.7,0.1))
ax.set_yticks(np.arange(-30,80,10))
ax.legend()
ax.grid(True)

plt.savefig('06_blackonly.png',dpi=300)
```

![[06_blackonly.png]]

The equilibrium area of black daisies (b\_list) would be the sole variable representing the daisy population. The absence of white daisies means that there is no competition or interaction between black and white daisies for resources or space. As a result, the equilibrium area of black daisies would solely depend on the solar flux ratio and other parameters specific to black daisies.

The variable representing the uncovered area (x\_list) would still be present, but its dynamics and equilibrium value would differ compared to the model with both black and white daisies. In this case, the uncovered area would represent the non-daisy-covered land, and its value would be inversely related to the area of black daisies. As the area of black daisies increases, the uncovered area decreases.

With only black daisies present, the self-regulation of the planetary temperature would primarily depend on the albedo of the black daisies and the solar flux ratio. In the absence of white daisies, the growth and population dynamics of daisies would be solely governed by the behavior of black daisies. The equilibrium value of the black daisy area would depend on factors such as the solar flux ratio, the albedo of the black daisies, and the growth rate function (fb). The population of black daisies would grow or decline based on the interplay between the growth rate function and death rate (d).