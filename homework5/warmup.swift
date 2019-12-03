//
//  warmup.swift
//  
//
//  Created by Sebastian Grasso on 12/2/19.
//

import Foundation

func change(_ cents:Int) -> [Int]? {
    guard cents >= 0 else{
        return nil
    }
    var remaining = cents
    var result:[Int] = []
    let denominations = [25, 10, 5, 1]

    for denom in denominations{
        let (q, r) = remaining.quotientAndRemainder(dividingBy: denom)
        result.append(q)
        remaining = r
    }
    return result
}
extension String {
    var withoutQuotes: String {return (self.replacingOccurrences(of: "\"", with:  "").replacingOccurrences(of: "\'", with: ""))}
}

func firstUppercased(of: [String], longerThan: Int) -> String? {
    for word in of{
        if word.count > longerThan {
            return word.uppercased()
        }
    }
    return nil
}
