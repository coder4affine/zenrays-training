import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { bindActionCreators } from "redux";
import todoActions from "../../actions/todoActions";
import { LocaleConsumer } from "../../context/localeContext";

class index extends Component {
  state = {
    todo: ""
  };

  constructor(props) {
    super(props);
    props.actions.loadTodos();
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.actions.addTodo({
      text: this.state.todo,
      isDone: false
    });
    this.setState({ todo: "" });
  };

  deleteTodo = id => {
    this.props.actions.deleteTodo(id);
  };

  completeTodo = todo => {
    this.props.actions.completeTodo({
      ...todo,
      isDone: !todo.isDone
    });
  };

  render() {
    const { todo } = this.state;
    const {
      todos: { loading, error, data }
    } = this.props;
    if (loading) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <LocaleConsumer>
          {data => (
            <Fragment>
              <span>{data.locale}</span>
              <input
                type="button"
                value="Change Locale"
                onClick={() => data.changeLocale("English")}
              />
            </Fragment>
          )}
        </LocaleConsumer>
        <TodoForm
          name="todo"
          value={todo}
          onChange={this.onChange}
          submitForm={this.submitForm}
        />
        <TodoList
          todos={data}
          deleteTodo={this.deleteTodo}
          completeTodo={this.completeTodo}
        />
      </div>
    );
  }
}

index.propTypes = {};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
    // loadTodos: () => loadTodos()(dispatch),
    // addTodo: todo => addTodo(todo)(dispatch),
    // deleteTodo: id => deleteTodo(id)(dispatch),
    // completeTodo: todo => completeTodo(todo)(dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
