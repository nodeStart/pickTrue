## pickTrue

### 使用：
```javascript
    /**
     * {Boolean} isToStr:是否将结果转换为字符串
    */
    pickTrue(isToStr,/*一系列的参数*/)

```


### 举例
```javascript
pickTrue(
            true,
            1,
            2,
            's1',
            's2'
        )   // '1 2 s1 s2'


pickTrue(
            false,
            1,
            2,
            's1',
            's2'
        )   // [1, 2, 's1', 's2']



pickTrue(true,
            {
                a: 1,
                b: false,
                c: true,
                d: null
            }
        )   // 'a c'

    
pickTrue(false,
            {
                a: 1,
                b: false,
                c: true,
                d: null
            }
        )   // ['a', 'c']



pickTrue(true,
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


pickTrue(false,
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
        )   // [1, 's2', 'a', 'fn', 2, 'd', 'g']
```