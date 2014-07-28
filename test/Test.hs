module Main where

import           Data.Text            as T

import           Data.Attoparsec.Text
import           StatParse.Attoparsec
import           StatParse.Internal
import           Test.HUnit
import           Test.Tasty
import           Test.Tasty.HUnit

main :: IO ()
main = defaultMain tests

tests :: TestTree
tests = testGroup "Tests" []
