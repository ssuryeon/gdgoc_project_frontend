const BFFURL = 'http://localhost:4000';

export async function checkUsername(username) {
    const res = await fetch(`${BFFURL}/signup/username`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username}),
    });
    if(!res.ok) {
        console.log('BFF status error: ', res.status);
        throw new Error('BFF is error')
    };
    const data = await res.json();
    console.log(data);
    if (!data) {
        throw new Error('BFF invalid response');
    }
    return data.available;
}

export async function checkEmail(email) {
    const res = await fetch(`${BFFURL}/signup/email`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email}),
    });
    if(!res.ok) {
        console.log('BFF status error: ', res.status);
        throw new Error('BFF is error')
    };
    const data = await res.json();
    console.log(data);
    if (!data) {
        throw new Error('BFF invalid response');
    }
    return data.available;
}

export async function checkPhone(phone) {
    const res = await fetch(`${BFFURL}/signup/phone`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({phone}),
    });
    if(!res.ok) {
        console.log('BFF status error: ', res.status);
        throw new Error('BFF is error')
    };
    const data = await res.json();
    console.log(data);
    return data.verification_id;
}

export async function signUp(user) {
    const res = await fetch(`${BFFURL}/signup/request`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
    });

    if(!res.ok) {
        console.log('BFF status error: ', res.status);
        throw new Error('BFF is error')
    };
    const data = await res.json();
    console.log(data);
    return data.user;
}