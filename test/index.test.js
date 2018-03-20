let assert = require('assert')
let pickTrue = require('../index')

describe('单输入基本类型', function () {
    it('保留基本类型', function () {
        assert.equal(pickTrue(
            1,
            2,
            's1',
            's2'
        ), '1 2 s1 s2')
    })
})

describe('对象和基本类型', function () {
    it('对象', function () {
        assert.equal(pickTrue(
            {
                a: 1,
                b: false,
                c: true,
                d: null
            }
        ), 'a c')
    })

    it('数组、对象、函数、以及基本类型', function () {
        assert.equal(pickTrue(
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
})