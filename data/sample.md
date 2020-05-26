
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

```cpp
#include<bits/stdc++.h>
using namespace std;

// 0^0 == 1
long long powmod(long long a, long long b, int mod) {
    a %= mod;
    if (b == 0)
        return 1;
    long long t = powmod(a, b / 2, mod);
    t = t * t % mod;
    if (b & 1)
        t = t * a % mod;
    return t;
}

long long f(long long x, int p) {
    return x % p ? x : f(x / p, p);
}

// [l, r)
long long greedy(long long l, long long r, int p, int q) {
    long long ans = 1;
    for (long long i = l; i < r; ++i) {
        ans = ans * (f(i + 1, p) % q) % q;
    }
    return ans;
}

// [l, r)
long long solve(long long l, long long r, int p, int q)
{
    if (q % p > 0) {
        if (r - l >= q * 2) {
            // p の倍数ではない q の倍数が必ず存在する
            return 0;
        }
        else {
            // O(q)
            return greedy(l, r, p, q);
        }
    }
    // q = kp
    vector<long long> v(q + 1);
    vector<long long> rev(q + 1);
    v[0] = 1;
    rev[0] = 1;
    for (int i = 1; i <= q; ++i) {
        v[i] = v[i - 1] * (i % p ? i : 1) % q;
        rev[i] = rev[i - 1] * ((q - i + 1) % p ? (q - i + 1) : 1) % q;
    }
    long long ret = 1;
    while (r / q > l / q) {
        ret = ret * rev[(q - l % q) % q] % q * powmod(v[q], r / q - (l + q - 1) / q, q) % q * v[r % q] % q;
        l /= p;
        r /= p;
    }
    return ret * greedy(l, r, p, q) % q;
}

int main() {
    long long l, r;
    int p, q;
    cin >> p >> q >> l >> r;
    --l;
    cout << solve(l, r, p, q) << '\n';
    return 0;
}
```
