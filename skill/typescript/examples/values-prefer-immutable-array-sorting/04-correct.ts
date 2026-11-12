const sortUsers = (users: readonly User[]): User[] => users.toSorted((left, right) => left.name.localeCompare(right.name));
