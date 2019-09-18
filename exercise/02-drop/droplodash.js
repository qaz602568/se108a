const _ = module.exports = {}

_.drop = function(list, n = 1){
  let rlist = []
  for (let i = n; i < list.length;i++){
    rlist.push(list[i])
  }
  return rlist
}