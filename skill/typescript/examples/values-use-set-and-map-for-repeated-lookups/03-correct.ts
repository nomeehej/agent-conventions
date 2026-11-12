// 서버 계약상 users의 id는 고유하다.
const userById = new Map(users.map((user) => [user.id, user]));

const ownerNames = products.map((product) => userById.get(product.ownerId)?.name);
