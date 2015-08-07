# Mathematical Analysis
## The Real and Complex Number Systems
### Ordered set
* __Order__: An _order_ is a total and transitive relation denoted by $<$; 
* __Ordered set__: An _ordered set_ is a set with an order defined; 
* __Upper bound__, __Least upper bound__(_supremum_), __Greatest upper bound__(_infimum_);
* __Least-upper-bound property__: Any non-empty subset of $S$ has a supremum in $S$, then $S$ has _Least-upper-bound property_(so is _greatest-lower-bound property_); 

### Fields
* A _field_ is a set $\mathrm{F}$ with two opertions, called _addition_ and _multiplication_, which satisfy the following so-called "field axioms" (A), (M), and (D):
    * \(A) Axioms for Addition;
        * Closure;
        * Commutativity;
        * Associativity; 
        * Identity element; 
        * Inverse element; 
    * \(M) Axioms for multiplication;
        * Closure;
        * Commutativity;
        * Associativity; 
        * Identity element; 
        * Inverse element(except $0$); 
    * \(D) The distribute law. $$
    x\cdot (y+z)=x\cdot y+x\cdot z
$$ holds for all $x,y,z\in\mathrm{F}$
* __Ordered filed__: An ordered _field_ is a _field_ $\mathrm{F}$ which is also an ___ordered set___;
* __Posotive__, __Negative__.

### The Real Field
* __Archimedean property__: If $x\in\mathrm{R}$, $y\in\mathrm{R}$, then there is a positive integer $n$ such that $n\cdot x>y$; 
* __Density__; 
* __$x^{\frac{1}{x}}$__: For every real $x>0$ and every integer $n>0$ there is one and only one positive real $y$ such that $y^n=x$; 
* __Decimals__.

### The Extended Real Number System
* __The Extended Real Number System__: $\mathrm{R}\cup\left\{-\infty, +\infty\right\}$;

### The Complex Field
* __Complex number__: An ordered pair $(a, b)$ of real numbers;
* Addition and multiplication turn the set of all complex numbers into a field: $$
\begin{aligned}
    x+y&=(a+c,b+d), \\
    x\cdot y&=(a\cdot c-b\cdot d, a\cdot d+b\cdot c).
\end{aligned}
$$
* __$i$__: $i=(0,1)$;
* __Conjugate__, __Real part__, __Imaginary part__, __Absolute value__ of a complex number; 
* __The Schwarz inequality__: $$
\left|\sum_{j=1}^{n}a_j\bar{b}_j\right|\le\sum_{j=1}^{n}{\left|a_j\right|^2}\cdot\sum_{j=1}^{n}{\left|b_j\right|^2}
$$

### Euclidean Spaces
* For each positive integer $k$, let $\mathrm{R}^k$ be the set of all ordered $k$-tuples $$
\mathbf{x}=\left(x_1,x_2,\ldots,x_k\right),
$$ where $\left(x_1,x_2,\ldots,x_k\right)$ are real numbers, called _coordinates_ of $\mathbf{x}$; 
* Addition and multiplication turn the set $\mathrm{R}^k$ into a _vector space over the real field_; 
* __Inner product__: $$
\mathbf{x}\cdot\mathbf{y}=\sum_{i=1}^{k}x_iy_i
$$
* __Norm__ of $\mathbf{x}$: $$
\left|\mathbf{x}\right|
={\left(x\cdot x\right)}^{\frac{1}{2}}
={\left(\sum_{i=1}^{k}x_i^2\right)}^\frac{1}{2}
$$

## Basic Topology
### Finite, Countable, and Uncountable Sets
* __Function__(__Mapping__), __Domain__, __Values__ and __Range__;
* __Image__: $f\left(\mathrm{E}\right)$ is the _image_ of $\mathrm{E}$ under $f$; _Inverse Inmage_;
* __Into__, __Onto__, __1-1(One-to-one)__, __Correspondence__;
* __Cardinal number__, __Equivalent__, __$\mathrm{A}\sim\mathrm{B}$__;
* __Finite__, __Infinite__, __Countable__, __Uncountable__, __At most countable__;
* __Sequence__, __Terms__;
* __Union__, __Intersection__, __Intersect__, __Disjoint__; 

### Metric Spaces
* __Points__, __Distance__, __Metric space__, __Distance function__($d(p,q)$);
    * Non-negativity, or separation axiom;
    * Coincidence axiom;
    * Symmetry;
    * Subadditivity / triangle inequality.
* __Segment($\left(a,b\right)$)___, __Interval($\left[a,b\right]$)__, __$k$-cell__;
* __Convex__: We call a set $\mathrm{E}\subset\mathrm{R}^k$ _convex_ if $$
\lambda\cdot\mathbf{x}+\left(1-\lambda\right)\cdot\mathbf{y}\in\mathrm{E}
$$ whenever $\mathbf{x}\in\mathrm{E}$, $\mathbf{y}\in\mathrm{E}$, and $0<\lambda<1$;
* __Neighborhood__, __Limit point__, __Isolated point__, __Interior point__, __Closed set__, __Open set__, __Complememt set__, __Perfect set__, __Bounded set__, __Density__;
* __Closure__: $\mathrm{\bar{E}}=\mathrm{E}\cup\mathrm{E}^\prime$;
* __Open relative__: $\mathrm{E}$ is _open relative_ to $\mathrm{Y}$ if $\forall p\in\mathrm{E},\exists r>0, \left(d(p,q)<r\land q\in\mathrm{Y}\right)\to q\in\mathrm{E}$
* __Th.__ Suppose $\mathrm{Y}\in\mathrm{X}$. A subset $\mathrm{E}$ of $\mathrm{Y}$ is open relative to $\mathrm{Y}$ if and only if $\mathrm{E}=\mathrm{Y}\cap\mathrm{G}$ for some open subset $\mathrm{G}$ of $\mathrm{X}$;

### Compact Sets
* __Open cover__: By an _open cover_ of a set $\mathrm{E}$ in a metrix space $\mathrm{X}$ we mean a collection $\left\{G_\alpha\right\}$ of open subsets of $\mathrm{X}$ such that $\mathrm{E}\in\cup_\alpha\mathrm{G}_\alpha$;
* __Compact__: A subset $\mathrm{K}$ of a metric space $\mathrm{X}$ is said to be _compact_ if every open cover of $\mathrm{K}$ contains a _finite_ subcover;
* __Th.__ __Heine-Borel theorem__: If a set $\mathrm{E} in $\mathrm{R}^k$ has one of the following three properties, then it has the other two:
    * (a) $\mathrm{E}$ is closed and bounded; 
    * (b) $\mathrm{E}$ is compact; 
    * (c) Every infinite subset of $\mathrm{E}$ has a limit point of $\mathrm{E}$. 
* __Th.__ __Weierstrass theorem__: Wvery bounded infinite subset of $\mathrm{R}^k$ has a limit point in $\mathrm{R}^k$;

### Perfect Sets
* __The Cantor set__: closed, bounded, perfect, has no isolated point, has no segment, compact, uncountable, measuring zero;

### Connected Sets
* __Separated__: $\mathrm{A}\cap\mathrm{\bar{B}}=\mathrm{\bar{A}}\cap\mathrm{B}=\varnothing$; 
* __Connected__: ${x\in\mathrm{E}}\cap{y\in\mathrm{E}}\cap{x<z<y}\to{z\in\mathrm{E}}$;

## Numerical Sequences and Series
### Convergent Sequences
### Subsequences
### Cauchy Sequences
### Upper and Lower Limits
### Some Special Sequences
### Series
### Series of Nonnegative Terms
### The Number $e$
### The Root and Ratio Tests
### Power Series
### Summation by Parts
### Absolue Convergence
### Addition and Multiplication of Series
### Rearrangements

## Continuity
## Differentiation
## The Riemann-Stieltjes Integral
## Sequences and Series of Functions
## Some Special Functions
## Functions of Several Variables
## Integration of Differential Forms
## The Lebesgue Theory


