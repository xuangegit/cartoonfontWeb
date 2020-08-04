
const throttle = function(fn,interval) {
  var timer = null;
  var firstTime = true;
  var _self = fn;
  var a = 1;
  console.log('_self',_self)
  return function() {
    var that = this;
    console.log('this',that)
    var args = arguments;
    
    // 判断是否第一次执行
    if(firstTime) {
      _self.apply(that,args);
      return firstTime = false
    }
    // 判断定时器是否执行完毕
    if(timer) {
      return false;
    }
    timer = setTimeout(function() {
      clearTimeout(timer);
      timer = null;
      a++;
      console.log('a',a)
      _self.apply(that,args);
    },interval || 500)
  }
}
const throttle2 =   function throttle(func,interval){
  let timeout;
  let startTime = new Date();
  return function (){
      clearTimeout(timeout);
      let curTime = new Date();
      if(curTime - startTime <= interval){
          //小于规定时间间隔时，用setTimeout在指定时间后再执行
          timeout = setTimeout(()=>{
              func();
          },interval)
      } else {
          //重新计时并执行函数
          startTime = curTime;
          func()
      }
  }
}
export {
  throttle,
  throttle2
}