import ApiService from '../api'

export class DepartmentService {

  constructor() {}

  getDepartments() {
    return ApiService.get('Department')
  }

  getDepartmentsByName(name) {
    return ApiService.get(`Department/name/${name}`)
  }
 
    getCitiesByDepartmentId(id) {
    return ApiService.get(`Department/${id}/cities`)
  }

  getNaturalAreaByDepartmentId(id) {
    return ApiService.get(`Department/${id}/naturalareas`)
  }

  getTouristicAttractionsDepartment(id) {
    return ApiService.get(`Department/${id}/touristicattractions`);
  }
}

export default new DepartmentService();