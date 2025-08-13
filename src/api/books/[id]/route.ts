// import books from "@/api/db";
//
//
// export async function GET(request: Request, { context }: { params: { id: string } }) {
//     const { id } = +context.params.id;
//     const book = books.find((b) => b.id === id);
//     return new Response(JSON.stringify(book));
// }
//
// export async function POST(request: Request, { context }: { params: { id: string } }) {
//     const book = await request.json();
//     books.push(book);
//     return new Response(JSON.stringify(book));
// }
//
// export async function PUT(request: Request, { context }: { params: { id: string } }) {
//     const { id } = +context.params.id;
//     const book = await request.json();
//
//     const index =  books.findIndex((b) => b.id === id);
//     books[index] = book;
//     return new Response(JSON.stringify(book));
// }
//
// export async function DELETE(request: Request, { context }: { params: { id: string } }) {
//     const { id } = +context.params.id;
//     const index =  books.findIndex((b) => b.id === id);
//     books.splice(index, 1);
//     return new Response(JSON.stringify(books));
// }
