class Time {
  constructor({ id, solution_time, user_id, created_at, updated_at }) {
    this.id = id;
    this.solutionTime = solution_time;
    this.userID = user_id;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
  }
}

module.exports = Time;
