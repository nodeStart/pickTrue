let assert = require('assert')
let pickTrue = require('../index')

describe('单输入基本类型', function () {
    it('保留基本类型->字符串', function () {
        assert.equal(pickTrue(
            true,
            1,
            2,
            's1',
            's2'
        ), '1 2 s1 s2')
    })


    it('保留基本类型->数组', function () {

        let p = pickTrue(
            false,
            1,
            2,
            's1',
            's2'
        )
        let expect = [1, 2, 's1', 's2']

        p.map((v, i) => {
            assert.equal(v, expect[i])
        })
    })
})

describe('对象和基本类型', function () {
    it('对象->字符串', function () {
        assert.equal(pickTrue(true,
            {
                a: 1,
                b: false,
                c: true,
                d: null
            }
        ), 'a c')
    })

    it('对象->数组', function () {
        let p = pickTrue(false,
            {
                a: 1,
                b: false,
                c: true,
                d: null
            }
        )
        let expect = ['a', 'c']

        p.map((v, i) => {
            assert.equal(v, expect[i])
        })

    })

    it('数组、对象、函数、以及基本类型--> 字符串', function () {

        assert.equal(pickTrue(true,
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
        ), '1 s2 a fn 2 d g')
    })


    it('数组、对象、函数、以及基本类型--> 数组', function () {
        let p = pickTrue(false,
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
        )
        let expect = [1, 's2', 'a', 'fn', 2, 'd', 'g']

        p.map((v, i) => {
            assert.equal(v, expect[i])
        })

    })
})