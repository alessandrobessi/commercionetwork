#FROM golang:latest 
FROM commercionetwork/cndnodelib

# Set the Current Working Directory inside the container
WORKDIR /app

# Copy the source from the current directory to the Working Directory inside the container
COPY . .

# Build the Go app
RUN make build

VOLUME /cnd
WORKDIR /cnd
EXPOSE 26656 26657
ENTRYPOINT ["/usr/bin/wrapper.sh"]
CMD ["start"]
STOPSIGNAL SIGTERM
ENV TZ America/New_York

COPY ./contrib/localnet/cndnode/wrapper.sh /usr/bin/wrapper.sh
