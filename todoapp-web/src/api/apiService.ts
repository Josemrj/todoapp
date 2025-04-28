export const apiService = {

  async getAsync() {
    const response = await fetch('http://localhost:3000/api/todo');
    return response.json();
  },

  async postAsync(todo: object) {
    const response = await fetch('http://localhost:3000/api/todo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    });
    return response.json();
  },

  async putAsync(id: string, todo: object) {
    const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    });
    return response.json();
  },

  async deleteAsync(id: string) {
    const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  }
};
