## gRPC_Chat_Project 프론트 ##

**실행 방법:**
1. 위 저장소의 모든 파일을 내려받은 후 루트 디렉터리 위치에서, 터미널에 ```npm install``` 명령어를 입력하여 필요한 모든 라이브러리를 다운받습니다.(다운 시 오류가 날 수 있는데 , 그런 경우 뒤에 ```--legacy-peer-deps```를 추가해주세요)
2. grpc 서버에 연결하는 BFF 서버(프론트-백엔드를 연결하는 중간 서버, ```server.ts```)가 존재합니다. 배포를 하지 않은 상태여서 ```npx tsx server.ts``` 명령어로 서버를 실행시켜야 합니다.
3. 컴퓨터가 맥이 아니어서 안드로이드 기준으로 테스트했습니다. 안드로이드 기기 혹은 android studio의 안드로이드 애뮬레이터를 연결하시고 ```npm run android``` 명령어를 입력하여 앱을 실행합니다.

**구현된 기능**<br>
유저(회원가입, 로그인, 프로필, 유저 찾기)
- CheckUsername
- CheckEmail
- SignUp
- Login
- GetProfile
- SearchUsers

채팅(채팅 시작하기, 채팅하기, 채팅방 목록 조회하기)
- GetRoomID
- JoinChat
- GetMyRooms
