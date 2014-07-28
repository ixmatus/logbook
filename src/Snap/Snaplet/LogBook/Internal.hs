{-# LANGUAGE OverloadedStrings #-}

module Snap.Snaplet.LogBook.Internal where

import           System.Directory
import           System.FilePath

-- | Configuration data type.
data LogBook = LogBook
  { snapletFilePath :: FilePath
  } deriving (Show)
