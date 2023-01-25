# react-modal-lib

## Installation
To install, you can use npm or yarn:

```
npm install react-modal-lib --save

or

yarn add react-modal-lib
```


## Import the modal.

```js
import Modal from 'react-modal-lib';
```
## Usage

```js
 <Modal open={open} onCloseClicked={toggleState} onBackDropClicked={toggleState}><h1>Pop Up</h1></Modal>
 ```

 ## Props

 open : _boolean_

 onCloseClicked : _callback function called on cross clicked_
 
 onBackDropClicked : _callback function called on backdrop clicked_
