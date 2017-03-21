class User {
  constructor({ id, email, created_at, updated_at }) {
    this.id = id;
    this.email = email;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
  }
}

module.exports = User;
