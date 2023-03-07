```mermaid
sequenceDiagram
Home->>+Server: userID call
Server-->>Home: userID get
Home->>+Player1: game start
Player1->>+Server: data call
Server-->>Player1: data reply
Player2->>+Server: data call
Server-->>Player2: data reply
Player1->>+Server: end call
Player2->>+Server: end call
Server-->>Player1: turn end
Server-->>Player2: turn end
Player1->>+Server: atk,def send
Player2->>+Server: atk,def send
Server-->>Server: calc
Server-->>Player1: damage reply
Player1->>+Player1: check hp
Server-->>Player2: damage reply
Player2->>+Player2: check hp
Player1->>+Home: game end

