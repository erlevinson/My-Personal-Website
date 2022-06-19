let books = [
    {
      title: "Harry Potter",
      price: 15.00,
      inventory: 1000
    },
     {
      title: "LOTR",
      price: 25.00,
      inventory: 50
    },
     {
      title: "Humans",
      price: 20.00,
      inventory: 5
    },
     {
      title: "The QDawg Experience",
      price: 10.00,
      inventory: 0
    },
     {
      title: "poop",
      price: 80.00,
      inventory: 20
    },
  ]

  function loopAndUpdate(array) {
      const updatedArray = []
      for(let item of array) {
          console.log(array)
          console.log(updatedArray)
          updatedArray.push(item.table)
      }
      return updatedArray
  }