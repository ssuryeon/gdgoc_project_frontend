const BFFURL = 'http://localhost:4000';

export async function getRoomId(my_id, other_id) {
    console.log('>>> getRoomId start');
    console.log(my_id, other_id);
    const res = await fetch(`${BFFURL}/chat/getid`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({my_id, other_id}),
    });
    console.log(res);
    if(!res.ok) {
        console.log('BFF status error: ', res.status);
        throw new Error('BFF error');
    };
    const data = await res.json();
    console.log(data);
    if (!data) {
        throw new Error('BFF invalid response');
    }
    return data;
}

export async function getMyRooms(user_id) {
    console.log('>>> getMyRooms start');
    console.log(user_id);
    const res = await fetch(`${BFFURL}/chat/rooms`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user_id}),
    });
    console.log(res);
    if(!res.ok) {
        console.log('BFF status error: ', res.status);
        throw new Error('BFF error');
    };
    const data = await res.json();
    console.log(data);
    if (!data) {
        throw new Error('BFF invalid response');
    }
    return data;
}