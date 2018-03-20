## pickTrue

使用：
```javascript
pickTrue(1,2,'s1','s2') // '1 2 s1 s2'

pickTrue({
        a: 1,
        b: false,
        c: true,
        d: null
    })  // 'a c'


pickTrue(
            1,
            's2',
            undefined,
            {
                a: true,
                b: null,
                c: undefined
            },
            [
                function () {
                    return 'fn'
                },
                [
                    2, {
                        d: true,
                        e: false,
                        f: function () {
                            return false
                        },
                        g: function () {
                            return true
                        }
                    }
                ]
            ]
        )   // '1 s2 a fn 2 d g'
```