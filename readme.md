# BBang base server

# 실행

npm install 후 아래의 명령어로 실행

# NPM Scripts(npm run [command])

1. start : 트랜스파일 후 pm2로 실행
2. start:no_db : 1과 같으나 db사용하지 않음
3. start:debug : 1과 같으나 로그 좀 더 상세히 찍음
4. generate:types : .proto가 수정되었을 경우 실행하면 메세지 명세에 해당하는 타입과 클래스 생성
5. migrate, push : db관련 커맨드

# Debug

npx pm2 log : 서버 로그를 보고 싶을 때 실행해주세요
