Component({
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        listData: {
            type: Array
        }
    },
    data: {
        // 这里是一些组件内部数据
        one: '',
        two: '',
        three: '',
        value: [0, 0, 0],
    },
    methods: {
        // 这里是一个自定义方法
        bindChange: function (e) {
            const val = e.detail.value
            let listData = this.data.listData

            this.setData({
                one: listData[val[0]].name,
                two: listData[val[0]].list[val[1]].name,
                three: listData[val[0]].list[val[1]].list[val[2]].name,
                value: val
            })
        }
    }
})