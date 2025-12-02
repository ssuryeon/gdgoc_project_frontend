const BFFURL = 'http://localhost:4000';

export async function searchUsers(user_id, query, limit=20, offset=0) {
    console.log(query);
    console.log('요청 시작');
    const res = await fetch(`${BFFURL}/search`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${user_id}`
        },
        body: JSON.stringify({query, limit, offset}),
    });
    console.log(res);
    if(!res.ok) {
        console.log(res.text());
        console.log('BFF status error: ', res.status);
        throw new Error('BFF is error');
    };
    const data = await res.json();
    console.log(data);
    if (!data) {
        throw new Error('BFF invalid response');
    }
    return data;
}