import { Form } from "@remix-run/react";
import { FormEventHandler, useState } from "react";


export default function Todo() {
  const [todoList, setTodoList] = useState<string[]>(['test-item']);
  console.log('todoList', todoList);
  const addItem: FormEventHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const item = formData.get('item');
    if(item) {
      setTodoList([...todoList, item as string]);
    }
      
  }
  const deleteHandler = (index: number) => {
    setTodoList([...todoList].filter((_item, i) => i !== index));
  }
  return (
    <div id="contact">
      <div>
        <h1 className="uppercase">My todo list</h1>
      </div>
      <div>
        <Form onSubmit={addItem}>
          <input type="text" name="item" />
          <button type="submit">Add</button>
        </Form>
      </div>
      <div>
        <ul>
          {todoList.map((item, index) => <li key={`${item}-${index}`} className="flex"><span>{item}</span><button type="submit" aria-label="delete" onClick={() => {deleteHandler(index)}}>❌</button></li>)}
        </ul>
      </div>
    </div>
  )
}
