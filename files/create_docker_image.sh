#!/bin/bash
set -e

########## Help function #############
PrintHelp(){
	echo "USAGE: ./create_docker_image.sh [path to zip file] [image tag]"
	echo "       ./create_docker_image.sh ~/Download/IlluminaConnectedAnnotations-3.22.0-0-gc13dcb61-net6.0.zip 3.22.0"
}
#######################################
Clean(){
    echo "Cleaning code and build directories"
    rm -rf app
}
#######################################
BuildDocker(){
    echo "Start building Illumina Connected Annotations docker...."
    docker build -t $1:$2 .
	echo "Building docker image for $1 finished!"
}
#######################################
TestDocker(){
    echo "Test $1 docker"
    docker run --rm $1:$2 Annotator --version
	echo "Test finished"
}
#######################################

############ Checking arguments ########
if [ "$#" -eq 0 ] || [ "$#" -gt 2 ] ; then
	PrintHelp
	exit
fi

FILE_PATH=$1
TAG=$2
IMAGE_NAME=illumina-connected-annotations

Clean
unzip $FILE_PATH -d app
BuildDocker $IMAGE_NAME $TAG
TestDocker $IMAGE_NAME $TAG
Clean