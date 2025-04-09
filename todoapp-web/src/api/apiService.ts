export const apiService = {
  async getAsync() {
    const response = await fetch('http://localhost:3000/todo');
    return response.json();
  },

  async postAsync(description: string) {
    const response = await fetch('http://localhost:3000/todo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: description })
    });
    return response.json();
  },

  async deleteAsync(id: string) {
    const response = await fetch(`http://localhost:3000/todo/${id}`, {
      method: 'DELETE'
    });
  }
};
