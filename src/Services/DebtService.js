import { sbxCoreService } from '../Network/index';

export default class DebtService {
  static addNewDebt(data) {
    return sbxCoreService.insert('debt', data);
  }
}