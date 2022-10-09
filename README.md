# react-deploy-test

### 실행방법

```
# dev
yarn start

# production
yarn start:prod
```

### 배포

```
# build
REACT_APP_MODE=DEV REACT_APP_API_URL=https://dev-api.address.com yarn build
```

### Dockerfile Test

```
# build
docker build -f ./dev.Dockerfile -t react-app-dev:0.5 .
docker build -f ./prod.Dockerfile -t react-app-prod:0.5 .

# run
docker run -p 8080:80 -d react-app-dev:0.5
docker run -p 8081:80 -d react-app-prod:0.5
```

### Docker 명령어

```
# 전체 컨테이너 확인
docker ps -a

# 현재 실행중인 컨테이너 확인
docker ps

# 모든 컨테이너 중지
docker stop $(docker ps -a -q)

# 모든 컨테이너 삭제
docker rm $(docker ps -a -q)
```
