function makeIntoOneArray(csv) {
    let array =[]
    // console.log(csv)
    let data = csv.split("\n")
//   console.log(data)
    for (let i = 0; i < data.length; i++) {
      // console.log(data)
      let sections = data[i].split(",")
      // console.log(sections)
      // let evenSmaller = sections[i].split(",")
      // console.log(sections[0], sections[1], sections[2], sections[3])
    // [cell1,cell2,cell3] = sections[i]

  
    //   console.log(cell1,cell2,cell3,cell4)
 
        array.push(sections)


    }
   return array

  }



  function feelingLoopy(csv ){
    let array = makeIntoOneArray(csv)
    // console.log(array[0])

    let keys = array[0];

    let result= []
    let finalResult = []

    for (let j =1; j < array.length; j++){
       

        result.push(array[j])
  
    }
    for (let n = 0; n < result.length; n++){
     
        let nextResult = result[n]

        const merged = keys.reduce((obj, key, index, i) => ({ ...obj, [key]: nextResult[index]}), {});
       
        finalResult.push(merged)
      
    }
    // console.log(finalResult)
    return finalResult
  }
  

  feelingLoopy("ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26")


