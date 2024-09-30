const books=[{ id: 1,title: "to kill  mokingbird",author:'harper lee',genre:"fiction",yearpublished:
    1960,price:18.99,publisher:{name:'jb.lippinot& co.',location: "phildelphia"}
},
{ id: 2,title: "1984",author:'george orwell',genre:"dystopin",yearpublished:
    1949,price:15.99,publisher:{name:'seeker & warburg ',location: "london"}
},
{ id: 3,title: "the great gasby",author:'f.scott fitzgerald',genre:"classic",yearpublished:
    1925,price:10.99,publisher:{name:'charles scribners son',location: "newyork"}
},
{ id: 4,title: "moby dick",author:'herman melville',genre:"adventure",yearpublished:
    1851,price:12.99,publisher:{name:'harper nd brothers',location: "newyork"}
},
{ id: 5,title: "pride and prejudice",author:'herman melville',genre:"romance",yearpublished:
    1813,price:9.99,publisher:{name:'t.egerton',location: "london"}
}

]
// print all name of book available
console.log(books.map(a=>a.title));



// print book detils publish in newyork

console.log(books.find(a=> a.publisher.name.location==='newyork'));


// print name of book published in 1900

console.log(books.filter(book=> book.yearpublished < 1900));

// print deatails of book 1984 
console.log(books.find(a=>a.title==='1984'));



// revenue generated 
totalrevenue=books.reduce((a,b)=>a+b.price,0)

console.log('Total revenue is: ' + totalrevenue);




