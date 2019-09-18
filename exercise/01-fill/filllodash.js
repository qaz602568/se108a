const _ = module.exports = {}

_.fill = function(array,  a  , n = 0 , m =array.length){
  let rarray = []
  
    for(let i=0;i<n;i++)rarray.push(array[i])
    for (let i = n; i < m;i++){
      rarray.push(a)
    }
  
  return rarray
  
  
}