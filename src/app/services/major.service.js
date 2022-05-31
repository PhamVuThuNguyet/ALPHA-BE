const majorRepo = require('../repositories/major.repository');

class MajorService {
  getAll() {
    return majorRepo.getAll();
  }

  getById(id) {
    return majorRepo.getById(id);
  }

  getOneByTitle(title) {
    const conditions = {
      title,
    };
    return majorRepo.getOneByConditions(conditions);
  }

  createOne(data) {
    return majorRepo.createOne(data);
  }
}

module.exports = new MajorService();
