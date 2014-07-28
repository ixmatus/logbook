{-# LANGUAGE OverloadedStrings #-}

module Snap.Snaplet.LogBook where

import           Control.Applicative
import           Control.Monad
import           Control.Monad.Reader
import           Control.Monad.State.Class
import           Control.Monad.Trans.Writer
import qualified Data.Aeson                    as A
import qualified Data.ByteString.Char8         as BS
import qualified Data.ByteString.Lazy          as BL
import qualified Data.Configurator             as C
import           Snap.Core
import           Snap.Snaplet

import           Paths_logbook
import           Snap.Snaplet.LogBook.Internal

initLogBook :: SnapletInit b LogBook
initLogBook = makeSnaplet "logbook" description datadir $ do
    _  <- getSnapletUserConfig
    fp <- getSnapletFilePath

    return $ LogBook fp

  where
    datadir     = Just $ liftM (++ "/resources") getDataDir
    description = "Turnkey blogging application for the Snapframework."
