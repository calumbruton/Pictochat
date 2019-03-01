#!/bin/sh

scriptdir="$(dirname "$0")" && cd "$scriptdir"

flyway -X -configFiles=../db_pictochat/flyway.conf clean