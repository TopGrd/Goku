import dva from 'dva';

const app = dva({
  onError(e) {
    console.log(e);
  },
});

function importAll(r) {
  r.keys().forEach(key => app.model(r(key).default));
}

importAll(require.context('./models', true, /\.js$/));

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
