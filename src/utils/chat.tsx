const BFFURL = 'http://localhost:4000';

export async function getRoomId(my_id, other_id) {
    console.log(my_id, other_id);
    const res = await fetch(`${BFFURL}/home/login`, {
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