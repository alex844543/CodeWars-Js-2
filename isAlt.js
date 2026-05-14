function isAlt(word) {

  let vowels = 'aeiou'
  
  for(let i = 0 ; i < word.length-1 ; i++){
    let curr = vowels.includes(word[i])
    let next =  vowels.includes(word[i+1])
    
    if(curr === next) return false


  }
  
  return true
  
  
}
