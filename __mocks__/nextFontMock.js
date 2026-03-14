module.exports = new Proxy(
  {},
  {
    get: function (_, name) {
      return function () {
        return {
          className: "mock-font",
          style: { fontFamily: "mock" },
          variable: "--mock-font"
        };
      };
    }
  }
);
