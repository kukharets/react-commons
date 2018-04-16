import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types';
import './index.css';
import SimpleMap from "./containers/SimpleMap";

class FormattedDate extends React.Component {
  render() {
    return <h2>It is {this.props.date.toLocaleTimeString()}.</h2>;
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class LoggingButton extends React.Component {
  handleClick = () => {
    console.log('this is:', this);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Click me
        </button>
        <hr />
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
        <hr />
      </div>
    );
  }
}

class UserGreeting extends React.Component {
  render() {
    return <h1>Welcome back!</h1>;
  }
}

class GuestGreeting extends React.Component {
  render() {
    return <h1>Please sign up.</h1>;
  }
}

class Greeting extends React.Component {
  render () {
    const isLoggedIn = this.props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
}

class LoginButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Login</button>
  }
}

class LogoutButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Logout</button>
  }
}



class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick = () => {
    this.setState({isLoggedIn: true});
  };

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false});
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    const button = isLoggedIn ?
      (<LogoutButton onClick={this.handleLogoutClick} />) :
      (<LoginButton onClick={this.handleLoginClick} />);

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        {isLoggedIn ? (
          <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )}
        <div>
          The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        </div>
        <hr />
      </div>
    );
  }
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
class Mailbox extends React.Component {
  render () {
    const unreadMessages = this.props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages.</h2>}
        <hr />
      </div>
    );
  }
}

class WarningBanner extends React.Component {
  render() {
    if (!this.props.warn) {
      return null;
    }

    return (
      <div className="warning">
        Warning!
      </div>
    );
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
  }

  handleToggleClick = () => {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  };

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
        <hr />
      </div>
    );
  }
}

const numbers = [1, 2, 3, 4, 5];

class ListItem extends React.Component {
  render() {
    return <li>{this.props.value}</li>;
  }
}

class NumberList extends React.Component {
  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map((number) =>
      <ListItem key={number.toString()} value={number} />
    );
    return (
      <div>
        <ul>
          {listItems}
        </ul>
        <hr />
      </div>
    );
  }
}

class Blog extends React.Component {
  render() {
    const sidebar = (
      <ul>
        {this.props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = this.props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        -----------------------------------------
        {content}
        <hr />
      </div>
    );
  }
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Serhii Boiko'};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  handleSubmit = (event) => {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <hr />
      </form>
    );
  }
}

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  handleSubmit = (event) => {
    console.log('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <hr />
      </form>
    );
  }
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  handleSubmit = (event) => {
    console.log('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        <hr />
      </form>
    );
  }
}

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    console.log('Your favorite flavor is: ' + JSON.stringify(this.state));
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
        <hr />
      </form>
    );
  }
}

class UncontrolledInput extends React.Component {
  render() {
    return (
      <form>
        <input value={undefined} />
        <hr />
      </form>
    )
  }
}

class BoilingVerdict extends React.Component {
  render() {
    if (this.props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends React.Component {
  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange = (temperature) => {
    this.setState({scale: 'c', temperature});
  };

  handleFahrenheitChange = (temperature) => {
    this.setState({scale: 'f', temperature});
  };

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

class FancyBorder extends React.Component {
  render() {
    return (
      <div className={'FancyBorder FancyBorder-' + this.props.color}>
        {this.props.children}
      </div>
    );
  }
}

class WelcomeDialog extends React.Component {
  render() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
        <hr />
      </FancyBorder>
    );
  }
}

class Contacts extends React.Component {
  render() {
    return <div className="Contacts">Contacts</div>;
  }
}

class Chat extends React.Component {
  render() {
    return <div className="Chat">Chat</div>;
  }
}

class SplitPane extends React.Component {
  render() {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {this.props.left}
        </div>
        <div className="SplitPane-right">
          {this.props.right}
        </div>
      </div>
    );
  }
}

class Containment extends React.Component {
  render() {
    return (
      <SplitPane
        left={<Contacts />}
        right={<Chat />}
      />
    );
  }
}

function Dialog1(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog1 title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />

        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
        <hr />
      </Dialog1>
    );
  }

  handleChange = (e) => {
    this.setState({login: e.target.value});
  };

  handleSignUp = () => {
    console.log(`Welcome aboard, ${this.state.login}!`);
  };
}

const dataJSON = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

const style = {
  searchBox: {
    div: {
      margin: '10px',
    },
    inputSearch: {
      width: '250px',
      margin: '2px'
    }
  },
  table: {
    margin: '10px',
    width: '250px'
  },
};

class SearchBar extends React.Component {
  handleInputChange = (e) => {
    this.props.onFilterTextChange(e.target.value);
  };

  handleCheckboxChange = (e) => {
    this.props.onInStockChange(e.target.checked);
  };

  render() {
    return(
      <div style={style.searchBox.div}>
        <input
          onChange={this.handleInputChange}
          type="text"
          placeholder="Search..."
          style={style.searchBox.inputSearch}
          value={this.props.filterText}
        /><br />
        <input
          onChange={this.handleCheckboxChange}
          type="checkbox"
          checked={this.props.inStockOnly}
        /> Only show products in stock
      </div>
    );
  }
}

class ProductCategoryRow extends React.Component {
  render() {
    return(
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    let { product } = this.props;
    let name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  getFilteredAndSortedByCategory(props) {
    const {filterText, inStockOnly, products} = props;
    const sortedByCategory = {};
    products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }

      if (!(product.category in sortedByCategory)) {
        sortedByCategory[product.category] = [];
      }
      sortedByCategory[product.category].push(product);
    });
    return sortedByCategory;
  }

  getRows(list) {
    const rows = [];
    const categoriesName = Object.keys(list);
    categoriesName.forEach((category) => {
      rows.push(<ProductCategoryRow category={category} key={category} />);
      list[category].forEach((product) => {
        rows.push(<ProductRow product={product} key={product.name}/>)
      })
    });
    return rows;
  }

  render() {
    const sortedByCategory = this.getFilteredAndSortedByCategory(this.props);
    const rows = this.getRows(sortedByCategory);

    return (
      <table border="1" style={style.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
      );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    }
  }

  handleFilterTextChange = (filterText) => {
    this.setState({filterText: filterText});
  };

  handleInStockChange = (inStockOnly) => {
    this.setState({inStockOnly: inStockOnly});
  };

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        <hr />
      </div>
    );
  }
}

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}<hr/></div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}

class GreetingWithPropTytes extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
  };

  static defaultProps = {
    surname: 'Error'
  };

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <hr />
      </div>
    );
  }
}

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  focusTextInput = () => {
    this.textInput.current.focus();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
        <hr />
      </div>
    );
  }
}

class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}

class RefInput extends React.Component {
  static propTypes = {
    refForInput: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.func,
    ]).isRequired
  };

  render() {
    return (
      <input
        type='text'
        ref={this.props.refForInput}
      />
    );
  }
}

class RefFunction extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.value = 100;
  }

  render() {
    return (
      <div>
        <RefInput refForInput={this.inputRef} />
        <hr />
      </div>
    );
  }
}

class RefCallback extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = null;
    this.setInputRef = element => {
      this.inputRef = element;
    };
  }
  componentDidMount() {
    this.inputRef.value = 200;
  }

  render() {
    return (
      <div>
        <RefInput refForInput={this.setInputRef}/>
        <hr />
      </div>
    );
  }
}

class FileInput extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Selected file - ${this.fileInput.files[0].name}`
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input
            type="file"
            ref={input => {
              this.fileInput = input;
            }}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        <hr />
      </form>
    );
  }
}

class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    return this.state.count !== nextState.count;

  }

  render() {
    return (
      <div>
        <button
          color={this.props.color}
          onClick={() => this.setState(state => ({count: state.count + 1}))}>
          Count: {this.state.count}
        </button>
        <hr />
      </div>
    );
  }
}

class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      words: [...prevState.words, 'marklar'],
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click!</button>
        <ListOfWords words={this.state.words} />
        <hr />
      </div>
    );
  }
}

class ToDo extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <label>{this.props.id}</label>
        </td>
        <td>
          <input />
        </td>
        <td>
          <label>{this.props.createdAt.toTimeString()}</label>
        </td>
      </tr>
    );
  }
}


class ToDoListIndex extends React.Component {
  constructor() {
    super();
    const date = new Date();
    const todoCounter = 1;
    this.state = {
      todoCounter: todoCounter,
      list: [
        {
          id: todoCounter,
          createdAt: date,
        },
      ],
    };
  }

  sortByEarliest = () => {
    const sortedList = this.state.list.sort((a, b) => {
      return a.createdAt - b.createdAt;
    });
    this.setState({
      list: [...sortedList],
    });
  };

  sortByLatest = () => {
    const sortedList = this.state.list.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    this.setState({
      list: [...sortedList],
    });
  };

  addToEnd = () => {
    const date = new Date();
    const nextId = this.state.todoCounter + 1;
    const newList = [
      ...this.state.list,
      {id: nextId, createdAt: date},
    ];
    this.setState({
      list: newList,
      todoCounter: nextId,
    });
  };

  addToStart = () => {
    const date = new Date();
    const nextId = this.state.todoCounter + 1;
    const newList = [
      {id: nextId, createdAt: date},
      ...this.state.list,
    ];
    this.setState({
      list: newList,
      todoCounter: nextId,
    });
  };

  render() {
    return (
      <div>
        <code>key=index</code>
        <br />
        <button onClick={this.addToStart}>
          Add New to Start
        </button>
        <button onClick={this.addToEnd}>
          Add New to End
        </button>
        <button onClick={this.sortByEarliest}>
          Sort by Earliest
        </button>
        <button onClick={this.sortByLatest}>
          Sort by Latest
        </button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th />
              <th>created at</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((todo, index) => (
              <ToDo key={index} {...todo} />
            ))}
          </tbody>
        </table>
        <hr />
      </div>
    );
  }
}

class ToDoListId extends React.Component {
  constructor() {
    super();
    const date = new Date();
    const toDoCounter = 1;
    this.state = {
      list: [
        {
          id: toDoCounter,
          createdAt: date,
        },
      ],
      toDoCounter: toDoCounter,
    };
  }

  sortByEarliest = () => {
    const sortedList = this.state.list.sort((a, b) => {
      return a.createdAt - b.createdAt;
    });
    this.setState({
      list: [...sortedList],
    });
  };

  sortByLatest = () => {
    const sortedList = this.state.list.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    this.setState({
      list: [...sortedList],
    });
  };

  addToEnd = () => {
    const date = new Date();
    const nextId = this.state.toDoCounter + 1;
    const newList = [
      ...this.state.list,
      {id: nextId, createdAt: date},
    ];
    this.setState({
      list: newList,
      toDoCounter: nextId,
    });
  };

  addToStart = () => {
    const date = new Date();
    const nextId = this.state.toDoCounter + 1;
    const newList = [
      {id: nextId, createdAt: date},
      ...this.state.list,
    ];
    this.setState({
      list: newList,
      toDoCounter: nextId,
    });
  };

  render() {
    return (
      <div>
        <code>key=id</code>
        <br />
        <button onClick={this.addToStart}>
          Add New to Start
        </button>
        <button onClick={this.addToEnd}>
          Add New to End
        </button>
        <button onClick={this.sortByEarliest}>
          Sort by Earliest
        </button>
        <button onClick={this.sortByLatest}>
          Sort by Latest
        </button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th />
              <th>created at</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((todo, index) => (
              <ToDo key={todo.id} {...todo} />
            ))}
          </tbody>
        </table>
        <hr />
      </div>
    );
  }
}

const ThemeContext = React.createContext('light');

class Button extends React.Component {
  render() {
    console.log('Buton props - ', this.props);
    return (
      <div>
        <button>Click! Theme {this.props.theme}</button>
        <hr />
      </div>
    );
  }
}

class Theme extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton(props) {
  // Use a Consumer to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  return (
    <ThemeContext.Consumer>
      {theme => <Button {...props} theme={theme} />}
    </ThemeContext.Consumer>
  );
}

const themes = {
  dark: {
    background: 'red',
  },
  light: {
    background: 'yellow',
  },
};

const ThemeContextToggle = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

class ButtonContext extends React.Component {
  componentDidMount() {
    console.log('componentDidMount - ', this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate prevProps - ', prevProps);
    console.log('componentDidUpdate prevState - ', prevState);
    console.log('componentDidUpdate props - ', this.props);
    console.log('componentDidUpdate state - ', this.state);
  }

  render() {
    const {theme, toggleTheme, children} = this.props;
    return (
      <button
        style={{backgroundColor: theme.background}}
        onClick={toggleTheme}
      >
        {children}
      </button>
    );
  }
}

class ThemeTogglerButton extends React.Component {
  render() {
    return (
      <ThemeContextToggle.Consumer>
        {({theme, toggleTheme}) => (
          <ButtonContext
            theme={theme}
            toggleTheme={toggleTheme}
            {...this.props}
          >
            Toggle Theme
          </ButtonContext>
        )}
      </ThemeContextToggle.Consumer>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton testProp={true}/>
    </div>
  );
}

class ThemeToggle extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    return (
      <ThemeContextToggle.Provider value={this.state}>
        <Content />
        <hr />
      </ThemeContextToggle.Provider>
    );
  }
}

const ThemeContextHOC = React.createContext('light');

function withTheme(Component) {
  return function ThemedComponent(props) {
    return (
      <ThemeContext.Consumer>
        {theme => <Component {...props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  };
}

function ButtonHOC({theme, ...rest}) {
  return (
    <button className={theme} {...rest}>
      ButtonHOC
    </button>);
}

const ThemedButtonHOC = withTheme(ButtonHOC);


class App extends React.Component {
  render() {
    return (
      <div>
        <SimpleMap/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
