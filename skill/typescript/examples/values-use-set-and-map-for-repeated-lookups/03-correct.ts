// users는 서버 계약상 id가 고유
const userById = new Map(users.map((user) => [user.id, user]));

const ownerNames = products.map((product) => userById.get(product.ownerId)?.name);
