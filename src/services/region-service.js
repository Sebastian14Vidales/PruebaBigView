import ApiService from '../api'

export class RegionService {

  constructor() {}

  getRegionId(id) {
    return ApiService.get(`Region/${id}`);
  }
}

export default new RegionService();