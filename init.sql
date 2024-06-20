CREATE TABLE cari_hotels (
    id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      city TEXT NOT NULL,
      price INTEGER NOT NULL,
      date DATE NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      sort_field TEXT NOT NULL,
      sort_order TEXT CHECK (sort_order IN ('asc', 'desc')) NOT NULL
);
