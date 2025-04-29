const WebSocket = require('ws');

const port = 8080; // Порт, на котором будет работать сервер
const wss = new WebSocket.Server({ port });

let clients = {};

wss.on('connection', (ws) => {
    const id = Date.now(); // Уникальный идентификатор для каждого клиента
    clients[id] = { ws, x: 100, y: 100 }; // Начальные координаты

    ws.on('message', (message) => {
        const data = JSON.parse(message);
        
        if (data.type === 'move') {
            clients[id].x = data.x;
            clients[id].y = data.y;
            broadcast();
        }
    });

    ws.on('close', () => {
        delete clients[id];
        broadcast();
    });

    function broadcast() {
        const positions = {};
        
        for (const clientId in clients) {
            positions[clientId] = { x: clients[clientId].x, y: clients[clientId].y };
        }

        const message = JSON.stringify({ type: 'update', positions });
        
        Object.values(clients).forEach(client => client.ws.send(message));
    }
});

console.log(`Сервер запущен на порту ${port}`);
