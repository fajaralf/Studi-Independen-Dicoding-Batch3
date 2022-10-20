import axios from 'axios';
import API_ENDPOINT from '../global/api-endpoint';

class RestaurantData {
  static async getRestaurantData() {
    const response = await axios.get(API_ENDPOINT.LIST);
    const { data } = response;
    return data.restaurants;
  }

  static async detailRestaurantData(id) {
    const response = await axios.get(API_ENDPOINT.DETAIL(id));
    const { data } = response;
    return data.restaurant;
  }

  static async postRestaurantReview(data) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

export default RestaurantData;
