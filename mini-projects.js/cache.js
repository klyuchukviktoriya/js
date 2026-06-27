// Реализуй функцию createCache().
//
// Методы:
//
// set(key, value)
// get(key)
// has(key)
// remove(key)
// clear()

function createCache() {
    const cache = {};
    return {
        set(key, value) {
            cache[key] = value;
        },
        get(key) {
            return cache[key];
        },
        has(key) {
            return cache.hasOwnProperty(key);
        },
        remove(key) {
            return delete cache[key];
        },
        clear() {
            for (const item in cache) {
                delete cache[item];
            }
        },
    };
}

// ======================
// Проверка
// ======================

const cache = createCache();

cache.set('theme', 'dark');
cache.set('language', 'ru');

console.log(cache.get('theme'));
// "dark"

console.log(cache.has('language'));
// true

cache.remove('theme');

console.log(cache.get('theme'));
// undefined

cache.set('user', 'Alex');

console.log(cache.get('user'));
// "Alex"

cache.clear();

console.log(cache.has('user'));
// false

console.log(cache.get('language'));
// undefined
