// Реализуй функцию createSettings().
//
// Методы:
//
// set(key, value)
// get(key)
// reset(key)
// resetAll()
// keys()

function createSettings() {
    const obj = {};
    return {
        set(key, value) {
            return (obj[key] = value);
        },
        get(key) {
            return obj[key];
        },
        reset(key) {
            return delete obj[key];
        },
        resetAll() {
            for (const item in obj) {
                delete obj[item];
            }
        },
        keys() {
            return Object.keys(obj);
        },
    };
}

// ======================
// Проверка
// ======================

const settings = createSettings();

settings.set('theme', 'dark');
settings.set('language', 'ru');
settings.set('fontSize', 16);

console.log(settings.get('theme'));
// "dark"

console.log(settings.keys());
// ["theme", "language", "fontSize"]

settings.reset('language');

console.log(settings.get('language'));
// undefined

console.log(settings.keys());
// ["theme", "fontSize"]

settings.resetAll();

console.log(settings.keys());
// []
