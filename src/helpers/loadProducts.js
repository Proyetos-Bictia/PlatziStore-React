export const loadProducts = async () => {
    const url = 'https://platzi-store.herokuapp.com/products'
    try {
        const resp = await fetch(url)
        const urlResp = await resp.json();
        return urlResp
    } catch (error) {
        throw error
    }
}

export const loadOneProduct = async (id) => {
    const url = `https://platzi-store.herokuapp.com/products/${id}`;
    try {
        const resp = await fetch(url);
        const urlResp = await resp.json();
        return urlResp
    } catch (error) {
        throw error
    }
}

export const createProduct = async (data) => {
    const urlPost = 'https://platzi-store.herokuapp.com/products'
    try {
        const resp = await fetch(urlPost, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const urlResp = await resp.json();
        console.log('la respuesta de url =>', urlResp);
        return urlResp
    } catch (error) {
        throw error
    }
}