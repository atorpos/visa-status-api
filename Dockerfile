FROM ubuntu:latest
LABEL authors="atropos"

RUN apt-get update \
    && apt-get install -y curl \
    && apt-get install -y gnupg2 \
    && curl -fsSL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y nodejs

RUN node -v
RUN npm -v

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]

#ENTRYPOINT ["top", "-b"]