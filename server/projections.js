export default {
    name: 'Todos',
    initialState: () => [],

    eventHandlers: {
        TodoAdded: (state, event) => ([
            {
                aggregateId: event.aggregateId,
                completed: event.payload.completed,
                text: event.payload.text
            },
            ...state
        ]),
        TodoDeleted: (state, event) => state.filter(item => item.aggregateId !== event.aggregateId),
        TodoEdited: (state, event) => state.map(todo =>
            todo.aggregateId === event.aggregateId
                ? { ...todo, text: action.text }
                : todo
        ),
        TodoCompleted: (state, event) => state.map(todo =>
            todo.aggregateId === event.aggregateId
                ? { ...todo, completed: !todo.completed }
                : todo
        )
    }
};
