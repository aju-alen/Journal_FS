
export const sortJournalByAZ =(dataToSort)=>{
    let alphabet={}
    const sortedArr = dataToSort.sort((a,b)=>{

        if(a.title.toUpperCase() < b.title.toUpperCase()) return -1
        if(a.title.toUpperCase() > b.title.toUpperCase()) return 1
        else return 0
      })
      sortedArr.map(journal=>{
        let letter = journal.title.charAt(0)  
      
        if(alphabet[letter] === undefined) {  
      
          alphabet = {...alphabet,[letter]:[]}
          alphabet[letter].push(journal)
      
        }
        else {
          alphabet[letter].push(journal)
        }
        
      })
      return alphabet
      
}
