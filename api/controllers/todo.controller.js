const todoMethods = {};
const TodoModel = require('../models/todoModel');

todoMethods.addTodo = async (req , res) => {
    const {title , description} = req.body;
    const userID = req.userID;

    const newTodo = new TodoModel({
        title , description , "owner": userID
    })

    newTodo.save();

    res.json({
        status: true,
        message: "Todo added successfully"
    })
}

todoMethods.getTodos = async (req , res) => {
    const userID = req.userID;
    console.log(userID)
    const todos = await TodoModel.find({"owner": userID});
    return res.json({
        status: true,
        todos: todos
    })
}

todoMethods.getTodo = async (req , res) => {
    const {id} = req.params;

    const findTodo = await TodoModel.findById(id);

    return res.json({
        status: true,
        todo: findTodo
    })
}

todoMethods.updateTodo = async (req , res) => {
    const {title , description} = req.body;
    const noteID = req.params.id;

    const updateTodo = await TodoModel.findOne({_id: noteID}).updateOne({$set: { title , description }})

    return res.json({
        status: true,
        message: "Todo update successfully"
    })
}

todoMethods.updateStatusTodo = async (req , res) => {
    const {todoID} = req.body;

    const todo = await TodoModel.findOne(todoID);
    const newStatus = todo.isComplete();
    
    if(newStatus) {
        await todo.update({$set: {todoStatus: newStatus, complete_at: new Date()}})
    } else {
        await todo.update({$set: {todoStatus: newStatus, complete_at: null}})
    }

    return res.json({
        status: true,
        message: "Todo status change succesfully"
    })
    
}

todoMethods.deleteTodo = async (req , res) => {
    const todoID = req.params.id;
    await TodoModel.findByIdAndRemove(todoID);
    return res.json({
        status: true,
        message: "Todo remove successfully"
    })
}

module.exports = todoMethods;