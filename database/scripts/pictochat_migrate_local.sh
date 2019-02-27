#!/bin/sh

scriptdir="$(dirname "$0")" && cd "$scriptdir"

flyway -X -configFiles=../db_pictochat/conf/flyway.local.conf -locations=filesystem:../db_pictochat/migrations migrate