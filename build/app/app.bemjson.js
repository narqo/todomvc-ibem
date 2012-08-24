([
{
    block: 'page',
    title: 'i-bem.js • TodoMVC App',
    meta: [
        { elem: 'meta', attrs: { name: 'keywords', content: '' } },
        { elem: 'meta', attrs: { name: 'description', content: '' } }
    ],
    css: [
        { elem: 'css', url: '_app.css' }
    ],
    js: [
        { elem: 'js', url: 'http://yandex.st/jquery/1.8.0/jquery.min.js' },
        { elem: 'js', url: '_app.js' }
    ],
    content: [
        {
            block: 'header',
            content: 'todos'
        },
        {
            block: 'app',
            content: [
                {
                    block: 'task-new',
                    hint: 'What needs to be done?'
                },
                {
                    block: 'task-list',
                    switcher: 'Mark all as complete',
                    content: [
                        {
                            block: 'task',
                            content: 'Do presentation'
                        },
                        {
                            block: 'task',
                            content: 'Prepare to Ya.Subbotnik'
                        },
                        {
                            block: 'task',
                            mods: { completed: true },
                            content: 'Fill some tasks'
                        }
                    ]
                },
                {
                    elem: 'footer',
                    content: [
                        {
                            block: 'task-list',
                            elem: 'counter',
                            count: 3,
                            content: 'items left'
                        },
                        {
                            block: 'task-filter',
                            content: [
                                {
                                    elem: 'item',
                                    elemMods: { current: 'yes' },
                                    url: '#/',
                                    content: 'All'
                                },
                                {
                                    elem: 'item',
                                    url: '#/active',
                                    content: 'Active'
                                },
                                {
                                    elem: 'item',
                                    url: '#/completed',
                                    content: 'Completed'
                                }
                            ]
                        },
                        {
                            block: 'task-list',
                            elem: 'cleaner',
                            content: 'Clear completed (1)'
                        }
                    ]
                }
            ]
        },
        {
            block: 'info',
            content: [
                { tag: 'p', content: 'Double-click to edit a todo' },
                {
                    tag: 'p',
                    content: [
                        'Created by ',
                        { tag: 'a', attrs: { href: 'http://github.com/narqo' }, content: 'Vladimir Varankin' }
                    ]
                },
                {
                    tag: 'p',
                    content: [
                        'Part of ',
                        { tag: 'a', attrs: { href: 'http://todomvc.com' }, content: 'TodoMVC' }
                    ]
                }
            ]
        }
    ]
}
])
