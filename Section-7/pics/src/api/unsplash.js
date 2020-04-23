import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID PpRBKQZ8DYTXQpfxXMIPx7JkAtT-w0elUHfvy-l_IQA'
    }
})
