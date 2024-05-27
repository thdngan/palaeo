---
title: Lunine & Stevenson 1985
date: 2024-05-15
tags:
  - chemistry
  - physics
  - planetary-science
  - paper-notes
  - thermodynamics
draft: false
---
## Definition

Clathrate hydrates are a fascinating class of chemical compounds. They are **crystalline structures** in which **gas molecules** are *trapped* within **cages** formed by water molecules. The most common type of clathrate hydrates involves water ice cages with gas molecules, typically methane, encased within them. However, other gases like carbon dioxide, hydrogen sulfide, and various hydrocarbons can also form clathrate hydrates under specific conditions.

In this paper:

- Deal almost exclusively with clathrate compounds for which water ice forms the lattice structure (i.e., the "**host**" molecule) -> the term ***clathrate*** is here understood to mean clathrate hydrate.
- The gas molecule occupying a cage site is the "**guest**" molecule. The term ***methane clathrate*** is used to denote a clathrate hydrate in which methane is the primary *guest* molecule.
- Occasional discussion of clathrates in which a substance other than water ice is the host, for example, quinol, will emply the term ***quinol clathrale***.
- A stoichiometric compound of water ice, in which molecules bond chemically with the water molecule and do not form a clathrate, will be denoted as a ***hydrate***, e.g., ammonia hydrate.



## Importance in outer solar system

- Volatiles like methane might be present on Titan, Triton, and potentially Pluto due to clathrates playing a role in their formation.
- Advanced observational methods have opened up the opportunity for the initial direct observation of clathrates on celestial bodies in the outer solar system.

## Introduction

- Extend a statistical mechanical model of clathrate formation originally developed by van der Waals and Platteeuw (1959) to predict the formation conditions and composition of clathrate hydrate under a wide range of situations of interest to solar system studies.
- ***Low pressure*** ($10^{-12}$ to 1 bar): regimes of gaseous nebulae, in which the outer planets and satellites may have formed.
- ***Intermediate pressure*** (1 to $10^2$ bars): present-day atmosphere of Titan and plausible models for primordial atmospheres.
- ***High pressure*** ($\gtrsim 10^3$ bars): interiors of large icy satellites.



Goal:
- Treat all of these cases with a **single, physically reasonable model** of clathrate formation which is **tied** as much as possible directly **to laboratory data** on the **stability** of the various clathrate compounds or the **thermodynamic properties** of the pure components themselves.
$\rightarrow$ Predict:
	- Conditions of formation of clathrate hydrate of CO, an important molecule cosmochemically and one for which no laboratory data on the clathrate yet exist.
	- Substantial double occupancy of clathrate cages by CH4 and H2, the latter by itself a poor clathrate hydrate former $\rightarrow$ implications for satellite outgassing processes.

- Deal with ***stability of clathrates at high pressure*** (>5 kilobars) and the ***formation of clathrates*** in the presence of an ***ammonia-water solution*** (a probable primordial environment in large icy satellites). (few or no data exist, dealt with for the first time)
- Analyze ***clathrate formation kinetics*** in a gaseous environment $\rightarrow$ find that disequilibrium is likely in many circumstances, including the formation conditions of comets, but that approach to full equilibrium may occur if ice particles or planetesimals undergo extensive collisional gardening. Approach to equilibrium is more probable in the higher-density, higher-temperature nebulae around proto-giant planets than in the primordial solar nebula.


## Literature review on clathrate properties & occurrence & previous applications to solar system problems

### Clathrate hydrate structure
- Open, cage-like voids, each formed by **20-28 hydrogen-bonded** water molecules.
- **==Two structural types==**: I and II. The ==size of the included guest molecule== determines which is formed.
	- **Structure I clathrate:** 2 small cages + 6 large cages.
	- **Structure II clathrate:** 16 small + 8 large (10% bigger radius than structure I large cages)
- Previously **assumed** that all molecules **smaller than 5.8 $\text{\r{A}}$** form structure I clathrate. **BUT** Davidson et al. (1984) demonstrate that **argon & krypton** preferentially form structure II clathrate, while somewhat larger molecules such as **CH4** form structure I.
- **==Pure==** clathrate:
	- Only 1 kind of guest molecule.
	- Characterized by:
		- **dissociation pressure**, defined empirically as the *minimum* gas pressure of the *guest* molecule at a given temperature for which the corresponding clathrate is stable.
		- **degree of occupancy**, defined as the fraction of available cage sites occupied by a guest molecule.
- **==Mixed==** clathrate:
	- More than 1 kind of guest molecule.
	- a single **dissociation pressure** still exists, but
	- there are as **many parameters** characterizing **relative occupancy** as there are *guest* molecules.
- Chemical ==formula== for clathrate structures in the usual notation, where $y_i$ is the ==number fraction== of all guests that are species $X_i$:
	- **structure I** clathrate: $(\underset{i}{\pi} X_{i(y_i)}) \times 5\frac{3}{4} H_2 O$
	- **structure II** clathrate: $(\underset{i}{\pi} X_{i(y_i)}) \times 5\frac{2}{3} H_2 O$
- Not all cages need to be filled. One of the guest species can be thought of as a *hole*, which enters the partition functions (?) appropriately but otherwise does not contribute to the energy.
### Past studies
- Studies that are important in determining the **degree of rotational inhibition** of the encaged guest molecule, the **magnitude of electric fields** within the cage, and **degree of interaction** between guest molecules in adjacent cages:
	- In understanding explicitly the interaction between guest molecule and the surrounding host cage, thoeretically by Davidson (1971) and experimentally, using infrared spectroscopy and dielectric measurements, by Bertie and Jacobs (1982, 1978, 1977) and Davidson and Wilson (1963).
	- Computer simulation of guest and cage molecule motions by Tester, Bivins, and Herrick (1972), Plummer and Chen (1983), and Tse, Klein, and McDonald (1983).
- Much less attention has been given to the **==kinetics of clathrate formation==**, most likely because of the long duration of experiments required to measure diffusion of gas molecules within grains and along grain boundaries in water ice.
	- Barrer and Edge (1967), Barrer and Ruzicka (1962) achieved nearly complete clathration in a system of water ice and noble gas by **agitating** the system, apparently exposing fresh ice to the gas.
	- In the absence of shaking, an initially rapid uptake of gas by the ice to form clathrate was followed by a very slow uptake, suggesting a [[diffusion|diffusional process]].
- Studies on ==physical properties== of clathrate which are relevant to identifying clathrate in terrestrial ocean sediments as well as processes in solar system bodies:
	- Cook and Leaist (1983), Stoll and Bryan (1979): **thermal conductivity** at low-to-moderate pressures, the latter also measured **acoustic wave velocity**.
	- Dharma-Wardana (1983): attempted to explain the **low thermal conductivity** of clathrate (one-fifth that of ice $I_H$) in terms of the large number of molecules per unit clathrate cell.
	- Ross and Andersson (1982): **thermal conductivity** and **heat capacity** studies to explore high-pressure solid compounds of water and tetrahydrofuran (THF), including THF clathrate. Results suggest the possibility of a high-density clathrate hydrate phase existing above 11 kilobars.
	- Pinder (1964): **time-dependent** [[rheology]] of a clathrate hydrate [[slurry]], with THF and hydrogen sulfide as guest molecules.
	- Byk and Fomina (1968), Kvenvolden and McDonald (1982): **data** on the **density of clathrate compounds**.
- Literature describing the ==predicted or observed occurrence of clathrates== in natural environments:
	- Claypool and Kvenvolden (1983), Kvenvolden and McMenamin (1980): reviews of the t**errestrial occurence** of clathrate.
	- Pearson et al. (1983): review of **properties of natural clathrate deposits**.
	- Evidence for clathrate in permafrost in western Siberia, Canada, and Alaska. Existence of an **$\bm{N_2-O_2}$ clathrate** in Antarctic ice proposed (Miller 1969) and tentatively detected (Shoji and Langway 1982).
	- **Best evidence for the existence of naturally formed clathrate** comes from [[bottom-simulating reflectors]] in a number of ocean sediment areas around the world. The reflectors are apparently due to an **abrupt decrease in sound velocity** caused by **trapped methane gas**. The association of the gas with methane clathrate is supported by:
		- calculations showing that the reflectors are in a temperature-pressure regime stable for methane clathrate (Shipley et al. 1979)
		- the retrieval in drill cores of frozen sediments and water ice evolving primarily methane gas (Shipley and Didyk 1982; Kvenvolden and McDonald 1982). The methane is likely of biogenic origin; the existence of the clathrate demonstrates that, in the presence of liquid water at least, clathrate compounds form spontaneously under the appropriate gas pressure and temperature conditions.
- **==Application of clathrate hydrate properties to solar system objects==**:
	- Delsemme and Swings (1952): proposed the existence of clathrate hydrate in cometary nuclei.
	- Delsemme and Wenger (1970): **produced methane clathrate** at temperatures as low as 82 K by condensing water vapor onto a cold plate in the presence of methane gas. The stripping of ice grains during [[dissociation]] was suggested as a mechanism for cometary halo production.
	- Delsemme and Miller (1970): **modeled clathrate formation** as a special case of [[gas adsorption]] and suggested that **radicals observed spectroscopically in comets** could be emitted from **clathrate cages**. More detailed observations of comets are now available, the existence of clathrate is still hypothetical.
	- Stanley Miller (1961): used the **van der Waals and Platteeuw model** and his own experimental data to determine the **likelihood of occurrence of clathrate hydrate** in a wide range of solar systems objects, including the envelopes of the outer planets, Saturn's rings, satellite interiors, terrestrial planet atmospheres, Mars's polar caps, comets, as well as interstellar grains.
	- Miller and Smythe (1970): more detailed analysis of the **stability of carbon dioxide clathrate in the Martian ice caps**.
	- Smythe (1975): produced a set of **laboratory reflectance spectra of methane and carbon dioxide clathrate frost** to determine the **detectability of clathrate on surfaces of the outer planet satellites**.
- **==Application of clathrate formation in primordial gaseous disks==** to the present atmospheres of planets and satellites:
	- Lewis (1971): suggested **incorporation of methane clathrate in Titan** and predicted the resulting **argon-to-methane ratio** in Titan's atmosphere derived from the clathrate composition.
	- Hunten (1978): suggested an **atmosphere in equilibrium with a surface of methane clathrate**, which at the time ==was not ruled out by the data==.
	- Sill and Wilkening (1978): used **existing laboratory data** on **clathrate dissociation pressures** for a range of guest molecules of cosmochemical interest to calculate the **gas composition** in clathrate hydrate derived from a solar composition gas => Concluded that addition of one part per million clathrate gases (in coments) to Earth's atmosphere could explain the observed terrestrial noble gas ratios.
	- ==All of the above studies did NOT== incorporate the recent experimental result that ==pure argon and krypton clathrates possess structure II== (Davidson et al. 1984).
- **==Origin and effect of volatiles in icy satellites:==**
	- Stevenson (1982*a*) proposed clathrate hydrate **dissociation** as a **driver** for **explosive ammonia-water volcanism** on **Rhea-sized satellites** in the Saturn system.
	- Owen (1982): renewed suggestion that **Titan's atmosphere** is derived from clathrate and suggested that the $\bm{N_2}$ making most of the present atmosphere was accreted in clathrate.
	- Lunine and Stevenson (1982*a*) calculated **gas composition in clathrate** derived from a **circum-Saturnian nebula** and concluded that ==although CH4 in Titan is likely derived from primordial clathrate, N2 would not be substantially incorporated and may have been photochemically produced from NH3 later== (Atreya, Donahue, and Kuhn 1978).
- **==No direct evidence exists for clathrate anywhere aside from Earth==**. In part this may be because clathrate "hides" itself very well as ordinary water ice I in reflection spectra (Smythe 1975). The utility of studying clathrate thermodynamics rests more on indirect evidence that clathrates play a role in determining the composition and evolution of surfaces and atmospheres of satellites (and perhaps giant-planet envelopes) in the outer solar system. Striking improvements in spectral resolution in ground-based reflection spectroscopy now raise the possibility of distinguishing between water ice I (and its high-pressure polymorphs - Gaffney and Matson 1980) and clathrate hydrate on surfaces in the outer solar system in the near future.

## Statistical mechanical model to predict clathrate formation
or more specifically, to **==predict the stability regimes of clathrate hydrate==** and the **==composition of the guest molecule component==**.

### Thermodynamic and Structural Properties
- Clathrate hydrate is a distinct phase in a **multicomponent system** consisting of **water** and **any number of nonpolar, weakly polar**, and, more rarely, **strongly polar chemical species**.
- It is [[nonstoichiometric]] since, although the number of cages is precisely determined, their **fractional occupancy** is a **function** of temperature, pressure and relative abundances of the species.
- Although the clathrate structure is distinguished from that of other ice phases by containing large open cage structures, the water molecule lattice bonding mechanism is the usual hydrogen bonding (Jeffrey & Mcmullan 1967).
- The guest molecule-cage interaction is primarily the sum of core overlap effects (a strongly repulsive term ??) and an attractive van der Waals-like (induced dipole-induced dipole) interaction.
- The included guest molecule must stabilize the cage structure because of the attractive term

### Model of Clathrate Formation

Assumes that the guest molecule incorporation into clathrate cages is physically similar to ideal [[gas adsorption|adsorption]] onto fixed sites, **generalized to three dimensions**.

==Assumptions:==
1. The **free energy** of the $H_2O$ lattice structure is *independent* of the **occupation** (and mode of occupation) of the guest molecule.
2. ***(a)*** The guest molecules are confined to the cage colume with **one guest molecule per cage**. ***(b)*** Guest molecules **rotate freely within the cage**.
3. Guest molecules do **not** interact with each other, so that the **partition function** describing the guest molecule motion is *independent* of the presence and type of other guest molecules.
4. Classical statistics applies. 

The **==set of equations==** for the configuration partition function for clathrate hydrate in which a fraction $y$ of the cages are occupied by a guest molecule (condition: the **chemical potentials** of both guest and host molecules in the coexisting phases be equal): 

$$
\frac{\mu^i_{H_2O} - \mu^\beta_{H_2O}}{kT} \equiv - \frac{\Delta\mu^\beta}{kT} = \nu_1\ln(1-\underset{j}{\sum}y_{1j})+\nu_2\ln(1-\underset{j}{\sum}y_{2j})
\tag{1},
$$
^eq1

$$
y_{ij}(T,P) = \frac{C_{ij}(T,P)f_i(T,P)}{1+\underset{k}{\sum}C_{ik}(T,P)f_k(T,P)}
\tag{2},
$$
^eq2

$$
C_{ij}(T,P) = \frac{z_{ij}}{k_BT}\int^{a_i/2}_{0}\exp\left[-\frac{\omega_{ij}(r)}{k_BT}\right]4\pi r^2dr
\tag{3},
$$
^eq3

where:
- $\mu^\beta_{H_2O} =$ chemical potential of unoccupied water-ice clathrate structure,
- $\mu^i_{H_2O}=$ chemical potential of water in coexisting phase,
- $y_{ij}=$ fractional occupancy of cage sites $i=1,2$ by molecule of species $j$,
- $f_j=$ fugacity of guest molecule $j$ in its pure phase (i.e., $\mu_j=kT\ln f_i$),
- $a_i =$ cage radius,
- $\omega_{ij}(r)=$ spherically averaged potential energy of the guest molecule located a distance $r$ from the cage center,
- $k_B=$ Boltzmann's constant,
- $k=$ gas constant.
- factors $\nu_1$ and $\nu_2$ are the number of cage sites per water molecule for the large and small cages, respectively. For ==structure I==, $\nu_1=1/23$ and $\nu_2=3/23$; for ==structure II==. $\nu_1=2/17$ and $\nu_2=1/17$.
- Numerical factor $z$ is the ratio of the *rotational and intramolecular vibrational partition function (volume factor removed) of the guest molecule in the cage* to *that of the freee molecule* at the same temperature. If the rotational and intramolecular vibrational degrees of freedom of the encaged molecule are the same as for the free molecule, $z_{ij}=1$. In what follows, we assume that $z_{ij}=1$.


=> the **==fugacity for a single guest species==** $j$:
$$
f_j(T,P)=\phi_j(T,P_0)P_0\exp\frac{1}{kT}\int^P_{P_0}V(T,P')dP'
\tag{4},
$$
^eq4
where:
- $V$: the volume of the coexisting guest species phase at system temperature $T$ and pressure $P$,
- $P_0$: a reference pressure,
- $\phi(T,P_0)$: the fugacity coefficient at reference conditions.

The **==quantity==** $\Delta\mu^\beta$ :

$$
\begin{aligned}
\frac{\Delta\mu^\beta(T,P)}{kT} &= \frac{\Delta\mu^\beta(T_0,P_0)}{kT_0}-\int^T_{T_0}\frac{\Delta h^\beta(T',P_0)}{kT'^2}dT'\\
&+\frac{1}{kT}\int^P_{P_0}\Delta V^\beta(T,P')dP'
\end{aligned}
\tag{5}
$$
^eq5

where:
- $\Delta h^ \beta, \Delta V^\beta$ are the **enthalpy** and **volume difference** between the empty hydrate and coexisting water phase,
- $T_0$ is a reference temperature.

In the **==low-pressure==** (<< 1 kilobar) regime considered in [[lunine_stevenson_1985#Clathrate equilibria at moderate pressures in the presence of ammonia|5]] and [[lunine_stevenson_1985#High-pressure equilibria|6]], **3 simplifications** are made:
- $C_{ij}(T,P)=C_{ij}(T)$
- The last term in equation [[lunine_stevenson_1985#^eq5|(5)]] is neglected
- $f_j=P_j=$ pressure exerted by the guest species vapor (or supercritical fluid) phase



## Clathrate equilibria at moderate pressures in the presence of ammonia

Calculate phase diagram of clathrate hydrate in the presence of ammonia at moderate pressures.


## High-pressure equilibria

Use results from statistical model to calculate complete stability fields of both methane & molecular nitrogen clathrate hydrate (up to tens of kilobars of pressure). Although almost no laboratory data are available at these pressures, the regime is directly relevant to the interiors of large satellites such as Titan and Triton, and perhaps the planet Pluto.

## Kinetics of clathrate formation




## Applications
Apply the results of previous sections to calculate the abundance of volatiles incorporated in clathrate formed from a solar composition gas and explores implications for the current composition and evolution of satellites and giant-planet atmospheres.

 
## Summary & Conclusions








