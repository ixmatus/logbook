{-# LANGUAGE OverloadedStrings #-}

module Snap.Snaplet.LogBook.Internal where

import qualified Filesystem.Path.CurrentOS as FP

-- | Configuration data type.
data LogBook = LogBook
  { snapletFilePath :: FP.FilePath
  } deriving (Show)
