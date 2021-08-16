FROM denoland/deno:1.10.3

WORKDIR /code

# Prefer not to run as root.
USER deno

COPY . .

EXPOSE 8000

CMD ["run" "--allow-env" "--allow-net" "index.ts"]