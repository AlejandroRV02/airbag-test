#!/bin/bash

IMAGE_NAME="airbag-backend"
IMAGE_TAG="latest"
CONTAINER_NAME="airbag-app"
PORT_MAPPING="3000:3000"

echo "Building docker image"

docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .

if [ "$(docker ps -aq -f name=${CONTAINER_NAME})" ]; then
    echo "Removing existing container"
    docker rm -f ${CONTAINER_NAME}
fi

echo "Running container"

docker run -p ${PORT_MAPPING} --name ${CONTAINER_NAME} -d ${IMAGE_NAME}:${IMAGE_TAG}

echo "App running on PORT ${PORT_MAPPING}"