//
//  main.swift
//  
//
//  Created by Sebastian Grasso on 12/2/19.
//

import Foundation

assert(change(0)! == [0, 0, 0, 0])
assert(change(97)! == [3, 2, 0, 2])
assert(change(8)! == [0, 0, 1, 3])
assert(change(250)! == [10, 0, 0, 0])
assert(change(144)! == [5, 1, 1, 4])
assert(change(97)! == [3, 2, 0, 2])
assert(change(100000000000)! == [4000000000, 0, 0, 0])
assert(change(-50) == nil)

assert("".withoutQuotes == "" )
assert("dog".withoutQuotes == "dog" )
assert("''\"\"a'''".withoutQuotes == "a" )
assert("a\\b".withoutQuotes == "a\\b" )

assert(firstUppercased(of: [], longerThan: 5) == nil)
assert(firstUppercased(of: ["a", "bcdef"], longerThan: 5) == nil)
assert(firstUppercased(of: ["a", "abcdef", "g"], longerThan: 5)! == "ABCDEF")

assert(sumOfCubesOfOdds(inTheList: []) == 0)
assert(sumOfCubesOfOdds(inTheList: [8]) == 0)
assert(sumOfCubesOfOdds(inTheList: [3]) == 27)
assert(sumOfCubesOfOdds(inTheList: [-3, 2, -8, 5, -1]) == 97)

let h: Animal = Horse(name: "CJ")
assert(h.speak() == "CJ says neigh")
let c: Animal = Cow(name: "Bessie")
assert(c.speak() == "Bessie says moooo")
assert(Sheep(name:"Little Lamb").speak() == "Little Lamb says baaaa")

// Test that Animal really is a protocol with the default method
struct Rat: Animal {
    let name: String
    let sound = "squeak"
}
assert(Rat(name:"Oreo").speak() == "Oreo says squeak")
