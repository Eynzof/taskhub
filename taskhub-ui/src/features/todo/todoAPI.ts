export async function fetchTodo(): Promise<{ data: any }> {
  const response = await fetch('https://dummyjson.com/todos', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return await response.json()
}
