function fibonacci (n) {
    if(n===0)
        return 0
    if(n===1)
        return 1
    var c=0
    var b=1
    for(var i = 2; i <= n; i ++){
        var j = 3*b + 2*c
        c = b
        b = j 
    }

    return b
}
var startTime = Date.now()
  console.log('fibonacci(2)=', fibonacci(2))
  var endTime = Date.now()
  var milliSeconds = endTime - startTime
  console.log('time:%dms', milliSeconds)