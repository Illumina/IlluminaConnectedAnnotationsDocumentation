# syntax=docker/dockerfile:1

# Use the .NET SDK as the base image for building the application
FROM mcr.microsoft.com/dotnet/runtime:6.0 AS runtime

# Set the working directory inside the container
WORKDIR /app
# the app/ folder contains the unzipped release files
COPY app/ /app

RUN echo '#!/bin/bash\ndotnet /app/Nirvana.dll "$@"' > /usr/bin/Nirvana && chmod +x /usr/bin/Nirvana
RUN echo '#!/bin/bash\ndotnet /app/Annotator.dll "$@"' > /usr/bin/Annotator && chmod +x /usr/bin/Annotator
RUN echo '#!/bin/bash\ndotnet /app/Downloader.dll "$@"' > /usr/bin/Downloader && chmod +x /usr/bin/Downloader
RUN echo '#!/bin/bash\ndotnet /app/Jasix.dll "$@"' > /usr/bin/Jasix && chmod +x /usr/bin/Jasix
RUN echo '#!/bin/bash\ndotnet /app/SAUtils.dll "$@"' > /usr/bin/SAUtils && chmod +x /usr/bin/SAUtils
RUN echo '#!/bin/bash\ndotnet /app/Jist.dll "$@"' > /usr/bin/Jist && chmod +x /usr/bin/Jist

