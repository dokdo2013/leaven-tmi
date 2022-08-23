# leaven-tmi
[레븐 카페 트위치 뱅온 알림봇](https://github.com/dokdo2013/naver-cafe-twitch-alert)과 연동되어, 레븐 멤버의 방송이 켜지면 네이버 카페에 게시물을 등록하고, 해당 스트리머의 채팅창에 메세지를 보낼 수 있도록 작성된 코드

말은 연동이라고 했지만 실제로는 독립적으로 동작하며, 레븐 멤버가 아니더라도 어느 채팅방에든 메세지를 보낼 수 있음

## 처음 설정
```bash
npm i
vi .env  # 환경변수 설정
pm2 start app.js --name leaven-tmi
```

## .env
```
username="blahblah"
password="oauth:blahblah"
```
