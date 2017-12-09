# react-human-time

```
npm install --save react-human-time
```

A React component that wraps the library `human-time` and periodically updates it so you don't need to manually get updated "X minutes ago" strings.

## Usage

```js
<h1>Andre said hi to you <HumanTime time={timestamp} /></h1>
```

Renders as `Andre said hi to you 2 mins ago`.

You can also set the frequency of updates with the prop `period`:

```js
<h1>Andre said hi to you <HumanTime time={timestamp} period={120e3} /></h1>
```

