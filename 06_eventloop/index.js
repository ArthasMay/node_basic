const eventloop = {
  queue: [],        // 事件队列
  timeoutqueue:[],  // 延时队列
  fsqueue: [],      // 文件队列

  loop() {
    while (this.queue.length) {
      var callback = this.queue.shift()
      callback()
    }
    
    this.fsqueue.forEach(callback => {
      if (done) {
        callback()
      }
    })

    this.timeoutqueue.forEach(callback => {
      if (done) {
        callback()
      }
    })

    setTimeout(this.loop.bind(this), 50);
  },
  
  add(callback) {
    this.queue.push(callback)
  }
}

eventloop.loop()

setTimeout(() => {
  eventloop.add(
    function() {
      console.log(1)
    }
  )
}, 500);

setTimeout(() => {
  eventloop.add(
    function () {
      console.log(2)
    }
  )
}, 500);