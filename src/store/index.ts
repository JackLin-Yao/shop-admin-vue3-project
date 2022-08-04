import { defineStore } from 'pinia'

// 1.定义并导出容器
// 参数1：容器的ID，必须唯一，将来Pinia会把所有的容器挂载到根容器，每个容器的名字就是这里的ID
export const useMainStore = defineStore('main', {
  /**
   * 类似与组件的data， 用来存储全局状态
   * 1.必须是函数：这样是为了在服务端渲染的时候避免交叉请求导致的数据状态污染（客户端其实无所谓）
   * 2.必须是箭头函数：为了更好的ts类型推导
   * 返回值：一个函数，调用该函数即可得到容器实例
   */
  state: () => {
    return {
      // count: 100,
      // foo: 'bar',
      // arr: [1, 2, 3]
      count: 1,
      asideWidth: '250px',
      isCollapse:false
    }
  },
  /**
   * 类似于组件的computed，用来封装计算属性，有【缓存】功能
   */
  getters: {
    // 每个函数接受一个可选参数：state状态对象
    // count10(state) {
    //   console.log('count10()调用了');// 具有缓存功能
    //   return state.count + 10
    // }
    // （不建议）如果不使用state而使用this，此时就不能对返回值类型做自动推导了，必须手动指定
    // count10(): number {
    //   return this.count + 10
    // }

     
  },
  /**
   * 完全类比于Vue2组件中的methods（可以直接用this)，用来【封装业务逻辑】，修改state
   */
  actions: {
    /**
     * 注意！！不能使用箭头函数定义actions！！一定要用普通函数！！！
     * why？因为箭头函数绑定了外部this
     */
    // changeState(num: number) {
    // 可以直接使用this，像极了Vue2
    // this.count++
    // this.foo = 'hello'
    // this.arr.push(4)
    // 对于批量修改，建议使用patch做优化
    // this.$patch((state) => {
    //   state.count += num
    //   state.foo = 'hello'
    //   state.arr.push(4)
    // })
  }
})
// 2.容器中的state

// 3.修改state

// 4.actions的使用
