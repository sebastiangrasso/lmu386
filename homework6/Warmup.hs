module Warmup (
  change,
  stripQuotes,
  firstUppercasedOverLengthFive,
  powers,
  sumOfCubesOfOdds,
  swapAdjacents,
  Shape (Box, Sphere),
  volume,
  surfaceArea
) where

import Data.List
import Data.Char

change :: Int -> Either String (Int, Int, Int, Int)
change cents 
  | cents < 0 = Left "amount cannot be negative" 
  | otherwise = 
      let
          numQ = cents `div` 25
          remaining = cents `mod` 25
          numD = remaining `div` 10
          remainingD = remaining `mod` 10
          numN = remainingD `div` 5
          numP = remainingD `mod` 5 
      in
        Right (numQ, numD, numN, numP)  

stripQuotes :: String -> String
stripQuotes word = [char | char <- word, not (char `elem` "'\"") ]

firstUppercasedOverLengthFive :: [String] -> Maybe String
firstUppercasedOverLengthFive = fmap (map toUpper) . (find $ (>5) . length )

powers :: Num a => a -> [a]  
powers number = iterate (*number) 1

sumOfCubesOfOdds ::  Integral a => [a] -> a
sumOfCubesOfOdds num = sum (map (^3) (filter odd num)) 

swapAdjacents:: [a] -> [a]
swapAdjacents (first:second:rest) = second:first:(swapAdjacents rest)
swapAdjacents first = first

data Shape
  = Box Double Double Double 
  | Sphere Double
  deriving (Eq, Show)

volume:: Shape -> Double
volume (Sphere radius) = (4.0/3.0) * pi * (radius^3)
volume (Box len width height) = len * width * height

surfaceArea:: Shape -> Double
surfaceArea (Sphere radius) = 4 * pi * (radius ^ 2)
surfaceArea (Box len width height) = 2 * ((width * len) + (width * height) + (height * len)) 
