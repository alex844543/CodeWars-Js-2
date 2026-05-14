String.prototype.toAlternatingCase = function () {

  
  let splitted = this.split("").map(c => {
if(c === c.toUpperCase()){
  return c.toLowerCase()
}else  if(c === c.toLowerCase()){
  return c.toUpperCase()
}
  })
  
  
  return splitted.join("")
  
  

}
