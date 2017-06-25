'use strict';

var ToDoInput = React.createClass({
  displayName: 'ToDoInput',

  addTask: function addTask(e) {
    var newthing = document.getElementById('new-task').value;
    if (newthing) {
      this.props.addToDo(newthing);
    };

    document.getElementById('new-task').value = '';

    e.preventDefault();
  },
  render: function render() {
    return React.createElement(
      'form',
      { onSubmit: this.addTask },
      React.createElement('input', { type: 'text', id: 'new-task', placeholder: 'new task' }),
      React.createElement('input', { type: 'submit', className: 'btn', value: "send" })
    );
  }
});

var FinishedList = React.createClass({
  displayName: 'FinishedList',

  render: function render() {
    var endTasks = this.props.completedTasks.map(function (task, index) {
      return React.createElement(
        'li',
        { key: index, className: 'finished' },
        task
      );
    });
    return React.createElement(
      'div',
      null,
      React.createElement(
        'ul',
        null,
        endTasks
      ),
      React.createElement(
        'form',
        { onSubmit: this.props.clear },
        React.createElement('input', { type: 'submit', className: 'btn', value: 'Clear' })
      )
    );
  }
});

var ToDoList = React.createClass({
  displayName: 'ToDoList',

  render: function render() {
    var newToDos = this.props.todos.map(function (todo, index) {
      return React.createElement(
        'li',
        { key: index },
        React.createElement('input', { className: 'check-done', type: 'checkbox' }),
        React.createElement(
          'span',
          { className: 'todo-span' },
          todo
        )
      );
    });
    return React.createElement(
      'div',
      null,
      React.createElement(
        'ul',
        null,
        newToDos
      ),
      React.createElement(
        'form',
        { onSubmit: this.props.moveDone },
        React.createElement('input', { className: 'btn', type: 'submit', value: 'Move to Completed' })
      )
    );
  }
});

var ToDoBox = React.createClass({
  displayName: 'ToDoBox',

  getInitialState: function getInitialState() {
    return {
      items: ["Learn callbacks and promises", "Make more practice apps", "Find a job"],
      done: ["gulp", "git", "devTools", "SASS"]
    };
  },
  addToDo: function addToDo(todo) {
    this.setState({
      items: this.state.items.concat([todo])
    });
  },
  clearFinished: function clearFinished(e) {
    e.preventDefault();

    this.setState({
      done: []
    });
  },
  moveToCompleted: function moveToCompleted(e) {
    var finished = document.getElementsByClassName('check-done');
    var newItems = [];
    var newDone = this.state.done;

    e.preventDefault();

    Array.prototype.forEach.call(finished, function (box) {
      var isChecked = box.checked;
      var siblingSpan = box.parentElement.getElementsByClassName('todo-span');

      if (isChecked === true) {
        var todo = siblingSpan[0].innerHTML;
        newDone.push(todo);
      } else {
        var todo = siblingSpan[0].innerHTML;
        newItems.push(todo);
      }
    });

    this.setState({
      items: newItems,
      done: newDone
    });

    // make sure all checkboxes left in 'To Do' are unchecked
    var allChecks = document.getElementsByClassName('check-done');

    Array.prototype.forEach.call(finished, function (box) {
      box.checked = false;
    });
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: 'inside-app' },
      React.createElement(
        'div',
        { className: 'task-model' },
        React.createElement(
          'h1',
          null,
          'To Do'
        ),
        React.createElement(ToDoList, { className: 'toDoList', todos: this.state.items, moveDone: this.moveToCompleted })
      ),
      React.createElement(
        'div',
        { className: 'input-area' },
        React.createElement(
          'h3',
          null,
          'Add New Task'
        ),
        React.createElement(ToDoInput, { addToDo: this.addToDo }),
        React.createElement(
          'div',
          { className: 'completed-tasks' },
          React.createElement(
            'h3',
            null,
            'Completed Tasks'
          ),
          React.createElement(FinishedList, { completedTasks: this.state.done, clear: this.clearFinished })
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(ToDoBox, null), document.getElementById('app'));