"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var h = {
  rando: function rando(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  getTime: function getTime() {
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var d = new Date();
    var mon = month[d.getMonth()];
    var day = d.getDate();
    var year = d.getFullYear();
    var dateAll = mon + " " + day + ", " + year;

    return dateAll;
  },
  getTaggedName: function getTaggedName() {
    var adjectives = ['trusted', 'secure', 'new', 'interesting', 'best practice', 'exciting'];

    var nouns = ['es6', 'redux', 'react', 'reactDOM', 'javascript'];

    return this.rando(adjectives) + ' ' + this.rando(nouns);
  }
};

var App = React.createClass({
  displayName: "App",

  getInitialState: function getInitialState() {
    return {
      posts: {}
    };
  },
  addPost: function addPost(post) {
    var timestamp = new Date().getTime();
    this.state.posts['post-' + timestamp] = post;
    this.setState({ posts: this.state.posts });
  },
  renderPost: function renderPost(key) {
    return React.createElement(NewPost, { key: key, index: key, details: this.state.posts[key] });
  },
  render: function render() {
    var imgOne = "https://habrastorage.org/files/789/c64/13b/789c6413b98a4575a0b720d4d7fec476.png";
    var imgTwo = "https://udemy-images.udemy.com/course/750x422/920544_7d1f.jpg";
    var imgThree = "https://atendesigngroup.com/sites/default/files/styles/very_large/public/intro-to-es6.png?itok=OsQons-2";
    var imgFour = "https://www.kobzarev.com/wp-content/uploads/2014/12/javascript-800x487.jpg";
    var dummyPost = "React.js, a comprehensive JavaScript library for building user interfaces, has changed the way we think about front-end development. React.js has grasped the interest of the open source community and it is here to stay. However, the nuances and idiosyncrasies of React.js require extra caution when distinguishing between good JavaScript developers and true experienced React.js developers.";
    return React.createElement(
      "div",
      null,
      React.createElement(Banner, null),
      React.createElement(
        "div",
        { className: "row medium-8 large-7 columns" },
        React.createElement(Post, { ptitle: "React components", pimg: imgOne, date: "April 29, 2017", postbody: dummyPost, author: "Nikita Maksimenko", comments: "113", tags: "" }),
        React.createElement(Post, { ptitle: "React routing", pimg: imgTwo, postbody: dummyPost, date: "May 5, 2017", author: "Nikita Maksimenko", comments: "5" }),
        React.createElement(Post, { ptitle: "Redux architecture", pimg: imgThree, date: "May 11, 2017", postbody: dummyPost, author: "Nikita Maksimenko", comments: "10" }),
        React.createElement(Post, { ptitle: "ES6 in react", pimg: imgFour, date: "May 28, 2017", postbody: dummyPost, author: "Nikita Maksimenko", comments: "7" }),
        React.createElement(
          "div",
          { className: "list-of-posts" },
          Object.keys(this.state.posts).map(this.renderPost)
        ),
        React.createElement(AddPostForm, { addPost: this.addPost })
      )
    );
  }

});

var AddPostForm = React.createClass({
  displayName: "AddPostForm",

  createPost: function createPost(event) {
    event.preventDefault();

    var post = {
      title: this.refs.title.value,
      name: this.refs.name.value,
      desc: this.refs.desc.value,
      image: this.refs.image.value
    };

    this.props.addPost(post);
    this.refs.postForm.reset();
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "callout secondary form-area" },
      React.createElement(
        "h5",
        null,
        "Add a Post to the React Blog"
      ),
      React.createElement(
        "form",
        { className: "post-edit", ref: "postForm", onSubmit: this.createPost },
        React.createElement(
          "label",
          null,
          "Post Title",
          React.createElement("input", { type: "text", ref: "title", placeholder: "Post Title", required: true })
        ),
        React.createElement(
          "label",
          null,
          "Author Name",
          React.createElement("input", { type: "text", ref: "name", placeholder: "Full Name required", required: true })
        ),
        React.createElement(
          "label",
          null,
          "Post Body",
          React.createElement("textarea", {
            ref: "desc",
            placeholder: "Write your post here", required: true })
        ),
        React.createElement(
          "label",
          null,
          "Image URL - ",
          React.createElement(
            "span",
            { className: "highlight" },
            "use this one to test 'https://www.kobzarev.com/wp-content/uploads/2011/06/javascript-wallpaper-e1476275770831.jpg'"
          ),
          React.createElement("input", { type: "url", ref: "image", placeholder: "The URL of the featured image for your post", required: true })
        ),
        React.createElement(
          "button",
          { type: "submit", "class": "button" },
          "Add Post"
        )
      )
    );
  }
});

var NewPost = React.createClass({
  displayName: "NewPost",

  render: function render() {
    var details = this.props.details;
    return React.createElement(
      "div",
      { className: "blog-post" },
      React.createElement(
        "h3",
        { className: "ptitle" },
        details.title,
        React.createElement(
          "small",
          null,
          h.getTime()
        )
      ),
      React.createElement("img", { className: "thumbnail", src: details.image, alt: details.name }),
      React.createElement(
        "p",
        null,
        details.desc
      ),
      React.createElement(
        "div",
        { className: "callout callout-post" },
        React.createElement(
          "ul",
          { className: "menu simple" },
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#" },
              "Author: ",
              details.name
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#" },
              "Comments: 0"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#" },
              "Tags: ",
              h.getTaggedName()
            )
          )
        )
      )
    );
  }
});

var Nav = React.createClass({
  displayName: "Nav",

  render: function render() {
    return React.createElement(
      "div",
      { className: "top-bar" },
      React.createElement(
        "div",
        { className: "top-bar-left" },
        React.createElement(
          "ul",
          { className: "menu" },
          React.createElement(
            "li",
            { className: "menu-text" },
            "React Blog"
          ),      
        )
      )
    );
  }

});

var Banner = React.createClass({
  displayName: "Banner",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Nav, null),
      React.createElement(
        "div",
        { className: "big-banner" },
        React.createElement(
          "div",
          { className: "callout large primary" },
          React.createElement(
            "div",
            { className: "row column text-center" },
            React.createElement(
              "h1",
              null,
              "Blog with ability to add posts"
            )
          )
        )
      )
    );
  }

});

var Post = React.createClass({
  displayName: "Post",

  tryClick: function tryClick() {
    alert('just trying out click events lalala');
  },
  render: function render() {
    var com = "Comments";
    return React.createElement(
      "div",
      { className: "blog-post" },
      React.createElement(
        "h3",
        { className: "ptitle" },
        this.props.ptitle,
        React.createElement(
          "small",
          null,
          this.props.date
        )
      ),
      React.createElement("img", { className: "thumbnail", src: this.props.pimg }),
      React.createElement(
        "p",
        null,
        this.props.postbody
      ),
      React.createElement(
        "div",
        { className: "callout callout-post" },
        React.createElement(
          "ul",
          { className: "menu simple" },
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#", onClick: this.tryClick },
              "Author: ",
              this.props.author
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#" },
              com,
              ": ",
              this.props.comments
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#" },
              "Tags: ",
              h.getTaggedName()
            )
          )
        )
      )
    );
  }
});

React.render(React.createElement(App, null), document.querySelector("#main"));

if (!Object.keys) {
  Object.keys = function () {
    'use strict';

    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !{ toString: null }.propertyIsEnumerable('toString'),
        dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
        dontEnumsLength = dontEnums.length;

    return function (obj) {
      if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [],
          prop,
          i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }();
}

window.onscroll = function (e) {
  var nav = document.getElementsByClassName("top-bar")[0],
      banner = document.getElementsByClassName("big-banner")[0],
      range = 70,
      scrollTop = document.body.scrollTop;

  if (scrollTop > range) {
    nav.classList.add("scrollNav");
    banner.classList.add("blurred");
  } else {
    nav.classList.remove("scrollNav");
    banner.classList.remove("blurred");
  }
};