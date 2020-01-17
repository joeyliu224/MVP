const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/planner').then(
  ()=> {
    console.log('connected')
  }
);

const todosSchema = mongoose.Schema({
    day: String,
    list: Array
});

const Todo = mongoose.model('Todo',todosSchema,'todos');

const save = (data) => {
  let todo = new Todo({
    day: data.day,
    list: data.list
  })
  return todo.save().catch((err)=>{
    console.log(err);
  })

}

const retreive = (type) => {
  console.log(type)
  if(type === 'todo') {
    console.log('here')
    return Todo.find().exec();
  }
}

module.exports.save = save;
module.exports.retreive = retreive;