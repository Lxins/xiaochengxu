Component({
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        closeOnOff: {
            type: Boolean,
            value: true
        }
    },
    data: {
        // 这里是一些组件内部数据
        someData: {},
        closeOnOff: true,
        week: ['日', '一', '二', '三', '四', '五', '六']
    },
    methods: {
        // 这里是一个自定义方法
        close: function () {
            this.data.closeOnOff = false;

            this.setData({
                closeOnOff: this.data.closeOnOff
            })
        }
    }
})