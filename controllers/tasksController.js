const date = require('../getDate.js');
const Task = require('../models/task');

exports.getMainPage = (req, res)=> {
    Task.fetchTasks(tasks=>{
        let today = {
        date: date.getDate(),
        weekday:  date.getWeekDay()
    };

    console.log(tasks);
    res.render('index.ejs', {date: today, toDoItems : tasks});
    });
};


exports.postnewTask= (req, res) => {
    let item = new Task(req.body.newTask, req.body.price);
    item.saveTask();
    res.redirect('/');
}

exports.deleteWish = (req,res)=>{
    console.log('Call from delete', req.body.checkbox);
    Task.deleteTask(req.body.checkbox)
    res.redirect('/');

} 

