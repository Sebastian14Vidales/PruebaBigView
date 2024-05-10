import locationsApi from '../config/locationsApi';

class ApiService {
  
  constructor() {
    this.baseURL = locationsApi.baseURL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}/${endpoint}`;
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Error request: ', response);
      }
      return await response.json();
    } catch (error) {
      console.error('Error trying request:', error);
      throw error;
    }
  }

  get(endpoint) {
    return this.request(endpoint);
  }
}

export default new ApiService();