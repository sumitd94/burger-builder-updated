[![Better Uptime Badge](https://betteruptime.com/status-badges/v1/monitor/5hv0.svg)](https://betteruptime.com/?utm_source=status_badge)

# burger-builder

An interface built using React which allows you to build your burger based on your choices of ingredients and order it for yourself.
This page is hosted on AWS Amplify: https://master.d1qfe9b648t3vc.amplifyapp.com/

# How can I contribute?

Wish to contribute? You can find a detailed guide [here](./CONTRIBUTING.md)!

### Components

All the reusable components are created inside `/components` directory.

### CSS Modules

React has a built in support for CSS Modules. To enable CSS Module for any CSS stylesheet use `.module.scss` in the end of the filename. Let's see and example -

Creating a filename with the name `button.module.scss`

```SCSS
.btn{
  color: red;
  font-size: 100px;
  border: 0px;
}
```

In the JS file import this stylesheet.

```JavaScript
import classNames from "./button.module.scss";

const Button = () => {
  return <button className={classNames.btn}>Click Me!</button>;
}

export default Button;
```

Importing styles in this way will scope all the styles to their respective files. So classname `.btn` is converted to `[filename]_btn__[hash]`.

## How to start ?

This project uses `yarn` as its package manager, make sure you have yarn installed in your system, else you can install it by running the command `npm intall --g yarn`

get into the root directory and run this command - `yarn start`, this will start the development server.
