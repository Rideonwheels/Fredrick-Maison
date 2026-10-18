#!/bin/sh
# Loads platform keys from the repo's .env, then starts the given MCP server.
# Keeps keys out of .mcp.json so it can be committed. Falls back to keys already
# set in the environment (e.g. cloud environment secrets) when .env is absent.
set -a
[ -f "$(dirname "$0")/../.env" ] && . "$(dirname "$0")/../.env"
set +a
exec "$@"
