#!/bin/sh
# Loads platform keys from the repo's .env, then starts the given MCP server.
# Keeps keys out of .mcp.json so it can be committed.
set -a
. "$(dirname "$0")/../.env"
set +a
exec "$@"
