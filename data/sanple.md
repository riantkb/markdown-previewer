
## 問題文
$\mathbb{N}$を正の整数全体の集合として、$f:\mathbb{N}\rightarrow\mathbb{N}$ を次のように定めます。


$f(x):=\begin{cases}f\left(\frac xP\right)&\text{if}\quad x\equiv 0 \pmod{P}\\\\x&\text{otherwise}\end{cases}$


整数 $(P,Q,L,R)$ が与えられるので、次の値を一行で出力してください。


$\text{ans}=\displaystyle\left(\prod_{i=L}^{R}f(i)\right) \ \bmod Q$


## 制約
- 入力は全て整数
- $2\leq P, Q \leq 10^7$
- $1\leq L\leq R\leq 10^{18}$

## 入力
入力は以下の形式で標準入力から与えられます。

```
$P$ $Q$
$L$ $R$
```

## 出力
$\displaystyle\left(\prod_{i=L}^{R}f(i)\right) \ \bmod Q \ $ の値を出力してください。

{sample 00_sample_01}
- $f(6)\times f(7)\times f(8)\times f(9)=3\times 7\times 1\times 9=189$ なので、出力すべき値は $189 \bmod 5=4$ となります。

{sample 00_sample_02}
- $f(57)=19$ であることに注意してください。

{sample 00_sample_03}

{sample 00_sample_04}

{sample 00_sample_05}
