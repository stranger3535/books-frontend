/* eslint-disable @next/next/no-img-element */

// app/books/page.tsx
type Book = {
  title: string;
  category: string;
  price: string;
  availability: string;
  rating: number;
  image_url: string;
};

async function getBooks(): Promise<Book[]> {
  const res = await fetch("http://localhost:3000/api/books", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch books");
  return res.json();
}

export default async function BooksPage() {
  const books = await getBooks();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Books</h1>
      <table border={1} cellPadding={6}>
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b, i) => (
            <tr key={i}>
              <td>
                <img
                  src={b.image_url}
                  alt={b.title}
                  style={{ width: "60px", height: "80px", objectFit: "cover" }}
                />
              </td>
              <td>{b.title}</td>
              <td>{b.category}</td>
              <td>{b.price}</td>
              <td>{b.availability}</td>
              <td>{b.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
