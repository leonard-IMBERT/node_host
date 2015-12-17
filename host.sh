#!/bin/bash

function main () {
  if [[ $1 == '-h' ]] || [[ $1 == '--help' ]]; then
    echo "usage: $0 filename [port]"
  else
    if [[ $2 == '' ]]; then 
      local port=8080
    else 
      local port=$2
    fi
    export FILE_PATH="$1";
    export PORT="$port";

    node server.js
  fi
}

main $1 $2;
