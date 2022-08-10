const categories = ['Meja Makan', 'Meja Belajar', 'Meja Dapur', 'Meja Tamu'];
const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
export default defineEventHandler(async (event) => {
  const cat2 = categories.map((name) => {
    return {
      name: name,
      slug: slugify(name),
    
    };
  });
  return cat2;
});
