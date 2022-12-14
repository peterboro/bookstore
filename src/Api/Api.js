const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/y0XXJlSQNLNjnrzB0hyk/books';

export const addBookApi = async (newBook) => {
  await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(newBook),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
};

export const removeBookApi = async (item_id) => {
  await fetch(`${URL}/${item_id}`, {
    method: 'DELETE',
  });
};

export const loadBooksApi = async () => {
  const response = await fetch(URL);
  const result = await response.json();
  return result;
};