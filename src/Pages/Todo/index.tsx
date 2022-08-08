import React, { useCallback, useState } from 'react';
import { AddButton } from '../../Components/AddButton';
import { TodoListItem } from '../../Components/TodoListItem';
import { InputForm } from '../../Components/InputForm';
import { Title } from '../../Components/Title';
import { Header } from '../../Components/Header';

const Todo: React.FC = (props) => {
    // const [todos, setTodos] = useState<string[]>([]);
    const [value, setValue] = useState<string>('');
    const todos: string[] = [];

    const handleValueChange = useCallback((val: string) => {
        console.log(val);
        setValue(val);
    }, []);

    const handleAddButtonClick = useCallback(() => {
        console.log(todos);
        console.log(value);

        todos.push(value);

        // setTodos([...todos,value]);
    }, []);

    return (
        <div>
            <Header />
            <Title />
            <InputForm onChange={handleValueChange} />
            <AddButton onClick={handleAddButtonClick} />
            <div
                style={{
                    marginTop: 25,
                    borderBottom: '3px dotted #E5E5E5',
                }}
            />
            {todos.map((todo, i) => (
                <TodoListItem key={i}>
                    <div>{todo}</div>
                </TodoListItem>
            ))}
        </div>
    );
};

export default Todo;
