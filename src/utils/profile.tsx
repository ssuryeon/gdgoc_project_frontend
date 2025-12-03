const BFFURL = 'http://localhost:4000';

export async function getProfile(user_id) {
    console.log(user_id);
    const res = await fetch(`${BFFURL}/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${user_id}`
        },
        body: JSON.stringify({user_id}),
    });
    console.log(res);
    if(!res.ok) {
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

export async function updateProfile(user_id, values) {
    console.log(user_id);
    console.log(values);
    const res = await fetch(`${BFFURL}/profile/modify`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${user_id}`
        },
        body: JSON.stringify({user_id, values}),
    });
    console.log(res);
    if(!res.ok) {
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