#!/bin/sh
set -e

scriptdir="$(dirname "$0")" && cd "$scriptdir"
cd ..

database/scripts/pictochat_migrate_local.sh

