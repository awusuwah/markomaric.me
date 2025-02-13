# -- Builder stage --
# -------------------
FROM oven/bun:1.2.2-slim AS builder

WORKDIR /app
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the project files
COPY . .

# Build the application
RUN bun run build

# -- Production stage --
# ----------------------
FROM oven/bun:1.2.2-slim

WORKDIR /app
COPY --from=builder /app/.output .output

# Expose the application port
EXPOSE 3000

# Launch the application
ENTRYPOINT ["bun"]
CMD [".output/server/index.mjs"]
