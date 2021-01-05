#!/bin/bash
cd ../
watchman watch-del-all
rm -rf node_modules
rm -rf $TMPDIR/react-*
npm install
